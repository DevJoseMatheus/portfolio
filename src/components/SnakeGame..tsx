import { useState, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface Position {
  x: number;
  y: number;
}

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const INITIAL_DIRECTION: Direction = 'RIGHT';

const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setGameRunning(false);
    setGameOver(false);
    setScore(0);
  };

  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        setGameRunning(false);
        return prevSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        setGameRunning(false);
        return prevSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 1);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, gameRunning, gameOver, food, generateFood]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameRunning]);

  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;
        const isHead = snake[0]?.x === x && snake[0]?.y === y;

        cells.push(
          <div
            key={`${x}-${y}`}
            className={`w-3 h-3 border border-gray-700 ${
              isSnake 
                ? isHead 
                  ? 'bg-green-400' 
                  : 'bg-green-500'
                : isFood 
                  ? 'bg-red-500' 
                  : 'bg-gray-800'
            }`}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <button className="text-gray-400 hover:text-white">
          ×
        </button>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-20 gap-0 w-fit mx-auto bg-gray-900 p-4 rounded border border-gray-600">
          {renderGrid()}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            // usar teclado<br />
            // setas para jogar
          </div>
          <div className="grid grid-cols-3 gap-1">
            <div></div>
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-300 hover:bg-gray-600">
              ↑
            </button>
            <div></div>
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-300 hover:bg-gray-600">
              ←
            </button>
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-300 hover:bg-gray-600">
              ↓
            </button>
            <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center text-gray-300 hover:bg-gray-600">
              →
            </button>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          // sobra de comida: {Math.max(0, 10 - score)}
          <div className="flex space-x-1 mt-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i < score ? 'bg-green-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setGameRunning(!gameRunning)}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded text-white font-medium transition-colors flex items-center space-x-2"
          >
            {gameRunning ? <Pause size={16} /> : <Play size={16} />}
            <span>{gameRunning ? 'pausa' : 'início do jogo'}</span>
          </button>
          
          <button
            onClick={resetGame}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded text-white font-medium transition-colors flex items-center space-x-2"
          >
            <RotateCcw size={16} />
            <span>pular</span>
          </button>
        </div>

        {gameOver && (
          <div className="text-center p-4 bg-red-900/30 rounded border border-red-500">
            <p className="text-red-400 font-bold">Game Over!</p>
            <p className="text-gray-400">Pontuação: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;