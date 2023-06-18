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
        {active ? (
          <h5>Game of life in running</h5>
        ) : (
          <h5>Click a few connected cells, then press 'Start'</h5>
        )}
        <div className={"button-wrapper"}>
          <button onClick={changeStatus}>{status}</button>
        </div>
      </div>
      <div className={"grid-wrapper"}>
        <Grid grid={grid} handleGridClick={handleGridClick} />
      </div>
      <div className={"lower-wrapper"}>
        <a
          href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "14px" }}
        >
          Learn more about the Game of Life on Wikipedia
        </a>
      </div>
    </div>
  );
};

export default App;
