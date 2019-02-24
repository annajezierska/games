'use strict!'


let mazeWorld = document.getElementById('mazeWorld')

let maze1 = [
    '#########',
    '#.....#.#',
    '#.###..T#',
    '#..#..#.#',
    '#.#######',
    '#..#..P.#',
    '#.##.##.#',
    '#.....#.#',
    '#########',
].map(row => row.split(''));

let maze3 = [
    '#########',
    '#.......#',
    '#.###...#',
    '#..#..#.#',
    '#.#######',
    '#..#..#.#',
    '#.##.##.#',
    '#...T.#.#',
    '#########',
].map(row => row.split(''));

const maze2 = [
    '#####################',
    '#...................#',
    '#....###...#........#',
    '#..#..#......########',
    '#.#########......####',
    '#..#..#.......#######',
    '#.##.##.#############',
    '#....#.............T#',
    '#####################',
].map(row => row.split(''));

let mapArr = [maze1, maze2]
let level = 0

let player = {
    x: 6,
    y: 5
}


const drawMaze = function (whichMaze) {
    mazeWorld.innerHTML = '';

    for (let y = 0; y < whichMaze.length; y++) {
        let row = document.createElement('div')
        for (let i = 0; i < whichMaze[y].length; i++) {
            let z = whichMaze[y][i]

            if (z === "#") {
                let wall = document.createElement('div');
                wall.classList.add('wall')
                row.appendChild(wall)
            }
            if (z === ".") {
                let path = document.createElement('div');
                path.classList.add('path');
                row.appendChild(path)
            }
            if (z === "P") {
                let player = document.createElement('div');
                player.classList.add('player');
                row.appendChild(player)
            }
            if (z === "T") {
                let treasure = document.createElement('div');
                treasure.classList.add('treasure');
                row.appendChild(treasure)
            }

        }
        mazeWorld.appendChild(row)
    }
}

drawMaze(maze1);

window.addEventListener('keydown', function (event) {
    console.log(event.keyCode)
})


window.addEventListener('keydown', function (event) {

    if (event.keyCode === 38) {

        if (maze1[player.y - 1][player.x] !== '#') {
            maze1[player.y][player.x] = '.';
            player.y = player.y - 1;
            ifTreasurePlusDraw()
        }
    }
    if (event.keyCode === 40) {

        if (maze1[player.y + 1][player.x] !== '#') {
            maze1[player.y][player.x] = '.';
            player.y = player.y + 1;
            ifTreasurePlusDraw()
        }
    }
    if (event.keyCode === 37) {

        if (maze1[player.y][player.x - 1] !== '#') {
            maze1[player.y][player.x] = '.';
            player.x = player.x - 1;
            ifTreasurePlusDraw()
        }
    }

    if (event.keyCode === 39) {
        if (maze1[player.y][player.x + 1] !== '#') {
            maze1[player.y][player.x] = '.';
            player.x = player.x + 1;
            ifTreasurePlusDraw()

        }
    }
})

function ifTreasurePlusDraw() {
    if (maze1[player.y][player.x] === 'T') {
        setTimeout(() => {
            alert('Yaaasss! You got the tortilla, Pabli!')
            level++
            if (mapArr[level] !== null || mapArr[level] !== undefined) {
                maze1 = mapArr[level]
               
                
            }
        }, -1)
    }
    maze1[player.y][player.x] = 'P';
    drawMaze(maze1);
}
