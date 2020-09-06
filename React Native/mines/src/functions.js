/**
 * Nesse arquivo está implementado a lógica para o nosso jogo funcionar.
 * Basicamente temos três funções:
 * 1) Criar o nosso tabuleiro
 * 2) Espalhar as minas dentro do tabuleiro
 * 3) Concatena as duas primeiras funções para retornar um tabuleiro com as minas dentro.
 */

const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_row, indexRow) => {
      return Array(columns)
        .fill(0)
        .map((_collum, indexColumn) => {
          return {
            row: indexRow,
            collumn: indexColumn,
            mined: false,
            opened: false,
            exploded: false,
            flagged: false,
            nearMines: 0,
          };
        });
    });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length; //Em qualquer um dos arrays eu consigo pegar o tamanho total da coluna
  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    const rowSelected = parseInt(Math.random() * rows, 10); //Estamos apontando a base porque o React Native pode apontar como warning se não passarmos.
    const columnSelected = parseInt(Math.random() * columns, 10);

    if (!board[rowSelected][columnSelected].mined) {
      board[rowSelected][columnSelected].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

export {createMinedBoard};
