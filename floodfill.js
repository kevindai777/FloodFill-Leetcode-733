//Objective is to fill in all tiles of a given value in matrix with a new color

let image = 
[[1,1,1],
 [1,1,0],
 [1,0,1]],
sr = 1, sc = 1, newColor = 2

//O(n) solution where n is the number of elements in the matrix
//We do a BFS traversal where we start at the given tile and move in
//all four directions

let fillValue = image[sr][sc]
image[sr][sc] = newColor
let queue = [[sr, sc]]

let visited = new Set()
visited.add(sr + '' + sc)

let directions = [[1,0], [-1,0], [0,1], [0,-1]]

while (queue.length > 0) {
    let curr = queue.shift()

    for (let [dx, dy] of directions) {
        let nextX = curr[0] + dx
        let nextY = curr[1] + dy

        if (nextX >= 0 && nextX < image.length && nextY >= 0 && nextY < image[0].length && image[nextX][nextY] == fillValue) {
            image[nextX][nextY] = newColor
            if (!visited.has(nextX + '' + nextY)) {
                visited.add(nextX + '' + nextY)
                queue.push([nextX, nextY])    
            }
        }
    }
}

return image