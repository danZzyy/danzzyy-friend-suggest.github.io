import './App.css';
import React, {useState, useEffect} from 'react';
import {getUsersVis, getUser, getSuggestedFriends} from './api/api';
import Graph from "react-graph-vis";
import Login from "./components/login/login";
import SuggestedFriends from './components/suggested-friends/suggested-friends';
import Menu from './components/menu/menu';

function App() {
  const [tabs, setTabs]  =  useState(['Profile', 'Friends', 'Suggested Friends']);
  const [graph, setGraph] = useState(getUsersVis());
  const [user, setUser] = useState({id:  '', first_name: '', last_name: ''});
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [activeTab, setActiveTab]  =  useState(0);

  let pageContents = '';
  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    height: "900px",
    physics: false,
    interaction: {
      zoomView: false
    }
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

  const clickActiveTab =  (tabIndex) => {
    setActiveTab(tabIndex);
    console.log(tabIndex);
    
  }
  return (
    <div className="App">
      <h2 class="title">Friendship App</h2>
      {!userLoggedIn ?
        <Login loginEvent={loginEvent}>
        </Login>
        : <></>
      }
      {userLoggedIn ?
        <div>
          <Menu tabsProp={tabs} selectEvent={clickActiveTab}></Menu>
          <div className={activeTab === 0 ? 'active-content' : 'inactive-content'}>
            <div>
              {user.first_name} {user.last_name}
            </div>
            <div>
              <img src={user.avatar}/>
            </div>
          </div>
          <div className={activeTab === 1 ? 'active-content' : 'inactive-content'}>
          <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={network => { }}
          ></Graph>
          </div>
          <div className={activeTab === 2 ? 'active-content' : 'inactive-content'}>
            <SuggestedFriends user={user}>
            </SuggestedFriends>
          </div>
        </div>
        : <></>
      }
    </div>
  );
}

export default App;
