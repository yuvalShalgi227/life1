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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return row.map((col, j) => {
          return (
            <div
              onClick={() => handleGridClick(i, j)}
              className={`cell ${grid[i][j] ? "alive" : "dead"}`} // Use grid[i][j] instead of col
              key={`${i}-${j}`}
            ></div>
          );
        });
      })}
    </>
  );
};
