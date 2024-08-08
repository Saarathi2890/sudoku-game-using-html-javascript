document.addEventListener('DOMContentLoaded', (event) => {
    const initialBoard = [
        [5, 3, null, null, 7, null, null, null, null],
        [6, null, null, 1, 9, 5, null, null, null],
        [null, 9, 8, null, null, null, null, 6, null],
        [8, null, null, null, 6, null, null, null, 3],
        [4, null, null, 8, null, 3, null, null, 1],
        [7, null, null, null, 2, null, null, null, 6],
        [null, 6, null, null, null, null, 2, 8, null],
        [null, null, null, 4, 1, 9, null, null, 5],
        [null, null, null, null, 8, null, null, 7, 9]
    ];

    const solution = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    const sudokuBoard = document.getElementById('sudoku-board');

    function createBoard(board) {
        for (let i = 0; i < 9; i++) {
            const row = document.createElement('tr');
            for (let j = 0; j < 9; j++) {
                const cell = document.createElement('td');
                if (board[i][j]) {
                    cell.textContent = board[i][j];
                } else {
                    const input = document.createElement('input');
                    input.setAttribute('type', 'number');
                    input.setAttribute('min', '1');
                    input.setAttribute('max', '9');
                    input.addEventListener('input', (e) => {
                        if (e.target.value == solution[i][j]) {
                            e.target.classList.remove('incorrect');
                            e.target.classList.add('correct');
                        } else {
                            e.target.classList.remove('correct');
                            e.target.classList.add('incorrect');
                        }
                    });
                    cell.appendChild(input);
                }
                row.appendChild(cell);
            }
            sudokuBoard.appendChild(row);
        }
    }

    createBoard(initialBoard);
});
