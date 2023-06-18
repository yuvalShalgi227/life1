import { useState } from "react";

export const UseLife = () => {
  const initGrid = (size = 20) => {
    const array2D = new Array(size)
      .fill(false)
      .map(() => new Array(size).fill(false));
    array2D[10][10] = true;
    array2D[10][11] = true;
    array2D[10][12] = true;
    array2D[9][12] = true;
    array2D[8][11] = true;
    return array2D;
  };
  const [active, setActive] = useState<boolean>(false);
  const [grid, setGrid] = useState<boolean[][]>(initGrid());

  const getNeighbors = (i: number, j: number) => {
    const rows = grid.length;
    const columns = grid[0].length;
    let neighbors = 0;

    // Check the top-left neighbor
    if (i - 1 >= 0 && j - 1 >= 0 && grid[i - 1][j - 1]) neighbors++;

    // Check the top neighbor
    if (i - 1 >= 0 && grid[i - 1][j]) neighbors++;

    // Check the top-right neighbor
    if (i - 1 >= 0 && j + 1 < columns && grid[i - 1][j + 1]) neighbors++;

    // Check the left neighbor
    if (j - 1 >= 0 && grid[i][j - 1]) neighbors++;

    // Check the right neighbor
    if (j + 1 < columns && grid[i][j + 1]) neighbors++;

    // Check the bottom-left neighbor
    if (i + 1 < rows && j - 1 >= 0 && grid[i + 1][j - 1]) neighbors++;

    // Check the bottom neighbor
    if (i + 1 < rows && grid[i + 1][j]) neighbors++;

    // Check the bottom-right neighbor
    if (i + 1 < rows && j + 1 < columns && grid[i + 1][j + 1]) neighbors++;

    return neighbors;
  };
  const nextTurn = () => {
    const newGrid = grid.map((row, i) =>
      row.map((cell, j) => {
        const neighbors = getNeighbors(i, j);
        if (cell) {
          if (neighbors < 2 || neighbors > 3) {
            return false; // Cell dies due to underpopulation or overpopulation
          } else {
            return true; // Cell stays alive
          }
        } else {
          if (neighbors === 3) {
            return true; // Cell becomes alive due to reproduction
          } else {
            return false; // Cell remains dead
          }
        }
      })
    );

    setGrid(newGrid);
  };

  const handleGridClick = (i: number, j: number) => {
    // console.log("handle grid click", active);
    // if (active) return;
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
