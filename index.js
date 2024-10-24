const board = document.getElementById('game-board');
    const cells = Array.from(board.children);

    function createSnake() {
      return [cells[10]];
    }

    function drawSnake(snake) {
      snake.forEach(cell => cell.classList.add('snake'));
    }

    function moveSnake(snake, direction) {
      // Simple movement logic
    }

    const snake = createSnake();
    drawSnake(snake);

    document.addEventListener('keydown', event => {
      if (event.key === 'ArrowUp') {
        moveSnake(snake, 'up');
      } else if (event.key === 'ArrowDown') {
        moveSnake(snake, 'down');
      } else if (event.key === 'ArrowLeft') {
        moveSnake(snake, 'left');
      } else if (event.key === 'ArrowRight') {
        moveSnake(snake, 'right');
      }
    });
