/**
 * Created by zhangpeng on 2016/7/31.
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