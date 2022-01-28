// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arrResult = [];
    let arr = [];
    
    if (matrix) {
    for (let i=0; i<matrix.length; i++) {
        if (i%2) {
            arrResult.push(matrix[i].reverse())
        } else {
            arrResult.push(matrix[i])
        }
    }
} else {
    return [];
}

   return arr.concat(...arrResult);
    
  
};
