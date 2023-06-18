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
    }, 200);
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
      {active ? (
        <h2>Game of life in running</h2>
      ) : (
        <h2>click a cell to make it alive</h2>
      )}
    </div>
  );
};

export default App;
