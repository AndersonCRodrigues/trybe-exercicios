let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function pares (matrix) {
  let aux = [];
  for (let i =0; i < matrix.length; i += 1){
    for (let j = 0; j < matrix[i].length; j +=1) {
      if(matrix[i][j] % 2 === 0){
        aux.push(vector[i][j]);
      }
    }
  }
  return aux;
}

console.log(pares(vector));
