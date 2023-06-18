import { useState } from "react";

export const UseLife = () => {
  const initGrid = (size = 20) => {
    const array2D = new Array(size)
      .fill(false)
      .map(() => new Array(size).fill(false));
    return array2D;
  };
  const [active, setActive] = useState<boolean>(false);
  const [grid, setGrid] = useState<boolean[][]>(initGrid());

  const getNeighbors = (grid: boolean[][], i: number, j: number): number => {
    let neighbors = 0;
    if (grid[i - 1]?.[j - 1]) neighbors++;
    if (grid[i - 1]?.[j]) neighbors++;
    if (grid[i - 1]?.[j + 1]) neighbors++;
    if (grid[i]?.[j - 1]) neighbors++;
    if (grid[i]?.[j + 1]) neighbors++;
    if (grid[i + 1]?.[j - 1]) neighbors++;
    if (grid[i + 1]?.[j]) neighbors++;
    if (grid[i + 1]?.[j + 1]) neighbors++;
    return neighbors;
  };
  const nextTurn = () => {
    const newGrid = grid.map((row, i) =>
      row.map((cell, j) => {
        const neighbors = getNeighbors(grid, i, j);
        if (cell) {
          if (neighbors < 2) {
            return false;
          } else if (neighbors > 3) {
            return false;
          } else {
            return true;
          }
        }
        if (!cell && neighbors === 3) {
          return true;
        }
      })
    );

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setGrid(newGrid);
  };

  const handleGridClick = (i: number, j: number) => {
    console.log("handle grid click", active);
    if (active) return;
    const newGrid = grid.map((row, index) =>
      row.map((cell, cellIndex) => {
        if (index === i && cellIndex === j) {
          return !cell;
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  return { active, grid, setGrid, setActive, handleGridClick, nextTurn };
};
