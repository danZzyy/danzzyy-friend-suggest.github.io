import './App.css';
import React, {useState, useEffect} from 'react';
import {getUsersVis, getUser, getSuggestedFriends} from './api/api';
import Graph from "react-graph-vis";
import Login from "./components/login/login";
import SuggestedFriends from './components/suggested-friends/suggested-friends';

function App() {
  const [graph, setGraph] = useState(getUsersVis());
  const [user, setUser] = useState({id:  '', first_name: '', last_name: ''});
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "900px",
    physics: false
  };

  /**
   * <Graph
        graph={graph}
        options={options}
        events={events}
        getNetwork={network => { }}
      ></Graph>
   */
  const events = {
    hoverNode: (e) => {
      /** 
      const data = graph.nodes.map((el) => {
        if (el.id === e.node) return { ...el, label: "sample node name" };
        else return el;
      });

      const temp = { ...graph };
      temp.nodes = data;
      setGraph(temp);
      */
    },
    select: function (event) {
      var { nodes, edges } = event;
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
    },
    showPopup: (id) => {
      // node id
      // const data = graph.nodes.map((el) => {
      //   if (el.id === id) {
      //     el.label = `sample node name`;
      //   }
      //   return el;
      // });
      // setGraph({ ...graph, nodes: data });
    }
  };

  const loginEvent = (id) => {
    setUser(getUser(id));
    setUserLoggedIn(true);
  };

  return (
    <div className="App">
      {!userLoggedIn ?
        <Login loginEvent={loginEvent}>
        </Login>
        : <></>
      }
      <div>
        {user.first_name} {user.last_name}
      </div>
      {userLoggedIn ?
        <SuggestedFriends user={user}>
        </SuggestedFriends>
        : <></>
      }
    </div>
  );
}

export default App;
