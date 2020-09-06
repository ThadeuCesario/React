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
    .map((_, indexRow) => {
      return Array(columns)
        .fill(0)
        .map((_, indexColumn) => {
          return {
            row: indexRow,
            column: indexColumn,
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

/* Estamos clonando o board porque no react quando precisamos alterar um estado, não podemos alterar diretamente
a referência daquele objeto. Devemos criar novos objetos para evoluir aquele estado.
*/
const cloneBoard = (board) => {
  return board.map((rows) => {
    return rows.map((field) => {
      return {...field};
    });
  });
};

const getNeighbors = (board, row, column) => {
  const neighbors = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];

  /**
   * Para essa lógica funcionar devemos atendar duas condições:
   * 1 - Excluir o próprio nó que o usuário escolheu.
   * 2 - Excluir todos os nós que poderão estar fora dos limites da matriz.
   */

  rows.forEach((r) => {
    columns.forEach((c) => {
      const different = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;

      if (different && validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

const safeNeighborhood = (board, row, column) => {
  const safes = (result, neighbor) => result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board, row, column) => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach((n) =>
        openField(board, n.row, n.column),
      );
    } else {
      const neighbors = getNeighbors(board, row, column);
      field.nearMines = neighbors.filter((n) => n.mined).length;
    }
  }
};

const fields = (board) => [].concat(...board);

const hadExplosion = (board) =>
  fields(board).filter((field) => field.exploded).length > 0;

const pendding = (field) =>
  (field.mined && !field.flagged) || (!field.mined && !field.opened);

//Se o array gerado for igual a zero, o usuário ganhou o jogo.
const wonGame = (board) => fields(board).filter(pendding).length === 0;

const showMines = (board) =>
  fields(board)
    .filter((field) => field.mined)
    .forEach((field) => (field.opened = true));

export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
};
