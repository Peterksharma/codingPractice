/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]

    let perimeter = 0
    let rows = grid.length
    let columns = grid[0].length
    

    for (let i = 0; i < rows; i++) {
        for(let j = 0; j< columns; j++){
            if (grid[i][j]===1){
            perimeter += 4
            }
            //This is the top check
            if(i>0 && grid[i-1][j] === 1 && grid[i][j] === 1 ) {
                perimeter -= 2
            }
            //Check the left block
            if(j>0 && grid[i][j-1] === 1 && grid[i][j] === 1 ) {
                perimeter -= 2
            }

            //Check the right block
            if(j > columns -1 && grid[i][j+1] === 1) {
                perimeter -= 2
            }
        }
        }
        


}
islandPerimeter()