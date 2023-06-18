import "../App.scss";

export const Grid = ({
  grid,
  handleGridClick,
}: {
  grid: boolean[][];
  handleGridClick: (i: number, j: number) => void;
}) => {
  return (
    <>
      {grid.map((row, i) => {
        return row.map((col, j) => {
          return (
            <div
              onClick={() => handleGridClick(i, j)}
              className={`cell ${col ? "alive" : "dead"}`}
              key={`${i}-${j}`}
            ></div>
          );
        });
      })}
    </>
  );
};
