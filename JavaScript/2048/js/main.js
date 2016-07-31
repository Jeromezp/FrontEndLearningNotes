/**
 * Created by zhangpeng on 2016/7/31.
 */
var score = 0;
var board = new Array();

$(document).ready(function () {

    //初始化格子
    init();
    //
});

function init() {

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-"+i+"-"+j);
            gridCell.css({top:getTop(i,j),left:getLeft(i,j)});
        }
    }

    
}