import "./App.scss";
import { UseLife } from "./hooks/UseLife.ts";
import { Grid } from "./componenets/Grid.tsx";
import { useEffect } from "react";
const App = () => {
  const { active, setActive, grid, handleGridClick, nextTurn } = UseLife();
  const status = active ? "stop" : "start";
  useEffect(() => {
    const interval = setInterval(() => {
      if (active) {
        nextTurn();
      }
    }, 100);
    return () => clearInterval(interval);
  }, [nextTurn, active]);
  const changeStatus = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div className={"app"}>
      <div className={"title-wrapper"}>
        <h1>Game of life</h1>
        <div className={"button-wrapper"}>
          <button onClick={changeStatus}>{status}</button>
        </div>
      </div>
      <div className={"grid-wrapper"}>
        <Grid grid={grid} handleGridClick={handleGridClick} />
      </div>
    </div>
  );
};

export default App;
