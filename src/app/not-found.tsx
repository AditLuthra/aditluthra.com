"use client";

import { useEffect, useState, useRef } from "react";

const WIDTH = 30;
const HEIGHT = 15;

type Coord = [number, number];
type Dir = "up" | "down" | "left" | "right";

const getNextCoord = ([x, y]: Coord, dir: Dir): Coord => {
  switch (dir) {
    case "up": return [x, y - 1];
    case "down": return [x, y + 1];
    case "left": return [x - 1, y];
    case "right": return [x + 1, y];
  }
};

const randomCoord = (): Coord => [
  Math.floor(Math.random() * WIDTH),
  Math.floor(Math.random() * HEIGHT),
];

export default function NotFound() {
  const [snake, setSnake] = useState<Coord[]>([[5, 5]]);
  const [dir, setDir] = useState<Dir>("right");
  const [fruit, setFruit] = useState<Coord>(randomCoord());
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const nextDir = useRef<Dir>("right");

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const keyDir: Record<string, Dir> = {
        ArrowUp: "up",
        ArrowDown: "down",
        ArrowLeft: "left",
        ArrowRight: "right",
      };
      const newDir = keyDir[e.key];
      if (newDir) {
        const opposite = {
          up: "down",
          down: "up",
          left: "right",
          right: "left",
        };
        if (opposite[newDir] !== dir) {
          nextDir.current = newDir;
        }
        if (!started) setStarted(true);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [dir, started]);

  useEffect(() => {
    if (!started || gameOver) return;

    const interval = setInterval(() => {
      const newHead = getNextCoord(snake[0], nextDir.current);

      // Check collisions
      if (
        newHead[0] < 0 || newHead[0] >= WIDTH ||
        newHead[1] < 0 || newHead[1] >= HEIGHT ||
        snake.some(([x, y]) => x === newHead[0] && y === newHead[1])
      ) {
        setGameOver(true);
        return;
      }

      const newSnake = [newHead, ...snake];

      // Ate fruit?
      if (newHead[0] === fruit[0] && newHead[1] === fruit[1]) {
        setFruit(randomCoord());
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
      setDir(nextDir.current);
    }, 225);

    return () => clearInterval(interval);
  }, [snake, dir, fruit, started, gameOver]);

  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < HEIGHT; y++) {
      let row = "";
      for (let x = 0; x < WIDTH; x++) {
        const isHead = snake[0][0] === x && snake[0][1] === y;
        const isBody = snake.some(([sx, sy], i) => i !== 0 && sx === x && sy === y);
        const isFruit = fruit[0] === x && fruit[1] === y;

        row += isHead ? "O" : isBody ? "o" : isFruit ? "*" : " ";
      }
      grid.push(row);
    }
    return grid;
  };

  const reset = () => {
    setSnake([[5, 5]]);
    setDir("right");
    nextDir.current = "right";
    setFruit(randomCoord());
    setGameOver(false);
    setStarted(false);
  };

  return (
    <div className="min-h-screen bg-terminal-black text-terminal-green font-pixel flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl mb-2">404: Page Not Found</h1>
      <p className="mb-4 text-lg text-center">But hey, try your hand at ASCII Snake 👇</p>

      <div className="bg-black text-terminal-green border border-terminal-green p-2 leading-tight text-[16px]">
        <pre className="whitespace-pre text-center">
          {renderGrid().join("\n")}
        </pre>
      </div>

      {gameOver && (
        <div className="mt-4 text-red-400 text-center">
          <p>💀 You crashed!</p>
          <button
            onClick={reset}
            className="mt-2 border border-red-400 px-4 py-1 hover:bg-red-400 hover:text-black transition"
          >
            Restart Game
          </button>
        </div>
      )}

      {!started && !gameOver && (
        <p className="mt-3 text-sm text-terminal-gray">Press arrow keys to start</p>
      )}

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-8 text-sm text-terminal-neon underline hover:text-white"
      >
        ⬅ Back to homepage
      </button>
    </div>
  );
}
