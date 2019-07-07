import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { Header } from "./components";
import { initState, reducer } from "./reducers/resume";

const App: React.FC = () => {
  const [store, dispatchResume] = useReducer(reducer, initState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://nayunhwan.github.io/whoami/me.json"
        );
        dispatchResume({ type: "SET_RESUME", payload: res.data });
      } catch (err) {}
    };
    fetchData();
  }, []);

  if (!store.resume) {
    return <div>Loading</div>;
  }

  return (
    <div className='App'>
      <Header resume={store.resume} />
    </div>
  );
};

export default App;
