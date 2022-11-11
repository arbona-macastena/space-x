import "./App.css";
import * as React from "react";
import { gql, useQuery, NetworkStatus } from "@apollo/client";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import ShipList from "./components/ShipList";
import { InView } from "react-intersection-observer";
import Filter from "./components/Filter";
import ShipView from "./components/ShipView";

const GET_SHIPS = gql`
  query GetShips($offset: Int!, $limit: Int!) {
    ships(offset: $offset, limit: $limit) {
      id
      image
      name
      type
    }
  }
`;

function App({ client }) {
  const [showList, setShowList] = React.useState(true);
  const [showGallery, setShowGallery] = React.useState(false);
  const [fullyLoaded, setFullyLoaded] = React.useState(false);

  const { data, networkStatus, error, fetchMore, variables } = useQuery(
    GET_SHIPS,
    {
      client,
      notifyOnNetworkStatusChange: true,
      variables: {
        offset: 0,
        limit: 8,
      },
    }
  );

  const [state, setstate] = React.useState({
    query: "",
    ships: [],
  });

  // Filter ships by type
  const handleChange = (e) => {
    const results = data.ships.filter((ship) => {
      if (e.target.value === "") return data.ships;
      return ship.type.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setstate({
      query: e.target.value,
      ships: results,
    });
  };

  // Toggle list view
  const handleShowList = () => {
    setShowList(true);
    setShowGallery(false);
  };

  // Toggle gallery view
  const handleShowGallery = () => {
    setShowGallery(true);
    setShowList(false);
  };

  if (networkStatus === NetworkStatus.loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Box>
      <Box display={{ xs: "block", md: "flex" }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Filter value={state.query} onChange={handleChange} />
          <ShipView
            handleList={handleShowList}
            handleGallery={handleShowGallery}
          />
          <Box
            sx={{
              boxShadow: 1,
              borderRadius: "5px",
              margin: 2,
            }}
          >
            {showList && (
              <div>
                <ShipList {...(state.query === "" ? data : state)} />
                {networkStatus !== NetworkStatus.fetchMore &&
                  data.ships.length % variables.limit === 0 &&
                  !fullyLoaded && (
                    <InView
                      onChange={async (inView) => {
                        if (inView) {
                          const result = await fetchMore({
                            variables: {
                              offset: data.ships.length,
                            },
                          });
                          setFullyLoaded(!result.data.ships.length);
                        }
                      }}
                    />
                  )}
              </div>
            )}
            {showGallery && (
              <Gallery {...(state.query === "" ? data : state)} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
