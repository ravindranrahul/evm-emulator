import { useState } from "react";
import "./App.css";
import { Code } from "./components/Code";
import {
  defaultState,
  State,
  StateContext,
} from "./components/context/StateContext";
import { Environment } from "./components/Environment";
import { Memory } from "./components/Memory";
import { Navbar } from "./components/Navbar";
import { Stack } from "./components/Stack";
import { Storage } from "./components/Storage";
function App() {
  const [evmState, setEvmState] = useState<State>(defaultState);

  return (
    <StateContext.Provider value={{ evmState, setEvmState }}>
      <div className="App">
        <Navbar />
        <div className="grid grid-cols-3 gap-4">
          <Code />
          <div className="grid grid-rows-2 gap-4">
            <Stack />
            <Environment />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <Memory />
            <Storage />
          </div>
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
