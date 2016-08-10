/**
 * Created by zhangpeng on 2016/7/31.
 */
var score = 0;
var board = new Array();

$(document).ready(function () {

    newGame();

    $("#newGame").on("click", function () {
        newGame();
    });
});

function newGame() {
    //初始化格子
    init();
    //随机产生两个数字
    generateNumber();
    generateNumber();
}

function init() {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css({top: getTop(i, j), left: getLeft(i, j)});
        }
    }

    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;

        }
    }

    updateBoardView();
}


function updateBoardView() {
    $(".number-cell").remove();

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append($("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>"));
            var numberGrid = $("#number-cell-" + i + "-" + j);

            if (board[i][j] == 0) {
                numberGrid.css({
                    width: "0",
                    height: "0",
                    top: getTop(i, j) + 50,
                    left: getLeft(i, j) + 50
                });
            } else {
                numberGrid.css({
                    width: "100px",
                    height: "100px",
                    top: getTop(i, j),
                    left: getLeft(i, j),
                    "background-color": getNumberBackgroundColor(board[i][j]),
                    color: getNumberColor(board[i][j]),
                });

                numberGrid.text(board[x][y]);
            }

        }
    }
}


function generateNumber() {
    if (!isVacancy()) {
        return false;
    }

    var randX = parseInt(Math.floor(Math.random() * 4));
    var randY = parseInt(Math.floor(Math.random() * 4));

    while (true) {

        if (board[randX][randY] == 0) {
            break;
        }

        var randX = parseInt(Math.floor(Math.random() * 4));
        var randY = parseInt(Math.floor(Math.random() * 4));
    }

    //随机生成一个数字
    var randNum = Math.random() < 0.5 ? 2 : 4;
    board[randX][randY] = randNum;
    console.log(randNum + '====');
    console.log(board[randX][randY]);

    showNumberWithAnimation(randX, randY, randNum);

    return true;
}

$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37:
            if (moveLeft()) {
                setTimeout("generateNumber()", 210);
                setTimeout("isGameOver()", 300);
            }
            break;
        case 38:
            if (moveUp()) {
                setTimeout("generateNumber()", 210);
                setTimeout("isGameOver()", 210);
            }
            break;
        case 39:
            if (moveRight()) {
                setTimeout("generateNumber()", 210);
                setTimeout("isGameOver()", 210);
            }
            break;
        case 40:
            if (moveDown()) {
                setTimeout("generateNumber()", 210);
                setTimeout("isGameOver()", 210);
            }
            break;
        default:
            break;
    }
});

function isGameOver(){
    if( nospace( board ) && nomove( board ) ){
        gameOver();
    }
}

function gameOver(){
    alert("游戏结束");
}

function moveLeft() {
    if (!canMoveLeft(board)) {
        return false;
    }

    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {

                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        continue;

                    } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board)) {
                        //move
                        showMoveAnimation(i, j, i, k);
                        //add
                        board[i][k] *= 2;
                        board[i][j] = 0;

                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView()",200);
    return true;
}

function moveRight() {
    if (!canMoveRight()) {
        return false;
    }

    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 4; j--) {

            if (board[i][j] != 0) {

                for (var k = 3; k > j; k++) {

                    if (board[k][j] == 0 && noBlockHorizontal(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if (board[k][j] == board[i][j] && noBlockHorizontal(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] *= 2;
                        board[i][j] = 0;

                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()",200);
    return true;
}

function moveUp() {
    if (!canMoveUp(board)) {
        return false;
    }

    for (var j = 0; j < 4; j++) {
        for (var i = 1; i < 4; i++) {

            if (board[i][j] != 0) {

                for (var k = 0; k < i; k++) {

                    if (board[k][j] == 0 && noBlockVertical(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if (board[k][j] == board[i][j] && noBlockVertical(j, k, i, board)) {
                        showMoveAnimation(i , j , k , j );
                        board[k][j] *= 2;
                        board[i][j] = 0;

                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()",200);
    return true;
}

function moveDown() {
    if (!canMoveDown(board)) {
        return false;
    }

    for (var j = 0; j < 4; j++) {
        for (var i = 2; i > 0; i--) {

            if (board[i][j] != 0) {

                for (var k = 3; k > i; k++) {

                    if (board[k][j] == 0 && noBlockVertical(j, k, i, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        continue;
                    }
                    else if (board[k][j] == board[i][j] && noBlockVertical(j, k, i, board)) {
                        showMoveAnimation(i , j , k , j );
                        board[k][j] *= 2;
                        board[i][j] = 0;

                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()",200);
    return true;
}

function gameOver() {

}


