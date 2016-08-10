/**
 * Created by zhangpeng on 2016/7/31.
 */

/**
 * 显示数字块的动画
 * @param x
 * @param y
 * @param number
 */
function showNumberWithAnimation(x,y,number){

    var numberCell = $("#number-cell-"+x+"-"+y);
    numberCell.css({
        "background-color": getNumberBackgroundColor(board[x][y]),
        color: getNumberColor(board[x][y]),
    });

    numberCell.text(board[x][y]);

    numberCell.animate({
        width: "100px",
        height: "100px",
        top: getTop(x, y),
        left: getLeft(x, y),
    },50);

}

/**
 * 块移动动画
 * @param fromX
 * @param fromY
 * @param toX
 * @param toY
 */
function showMoveAnimation(fromX, fromY,toX,toY){
    var numberCell = $("#number-cell-" + fromX + "-" + fromY);
    numberCell.animate({
        top:getTop(toX,toY),
        left:getLeft(toX,toY),
    },200);
}