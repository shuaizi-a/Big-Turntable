//设置转盘先转5圈
var rotaeaNym = 5;
//判断转盘转完没
var flag = false;
//转完回到初始位置
var _deg = 0;


// 定义按钮点击事件
document.getElementsByClassName("btn")[0].onclick=function(){
    // 判断转盘转完没
    if(!flag ){
        //开始抽奖
        startCbs();
    } else{
        // 禁止抽奖
        disabled();
    }
}

// 开始抽奖函数
function startCbs(){

    goLottery( randomDeg());
};

// 判断是不是在抽奖在抽奖就禁止抽奖
function disabled(){
    alert("抽奖中");
}

// 结束抽奖
function endCbs(deg){
    var str = "";
    if(deg<60){
        str = "10M 流量";
}else if(deg>=60 &&deg<120){
        str = "mimi4";
}else if(deg>=150 && deg<180){
    str = "mimi4";
}else if(deg>=180 && deg<240){
    str = "mimi4";
}else if(deg>=240 && deg<300){
    str = "mimi4";
}
    alert(str);
}

// 随机生成角度、、判断转多少度  产生多少概率
function  randomDeg(){
    //设置新变量
    var angle
    //设置产生随机数
    var num = Math.floor(Math.random()*10);  //1-10 之内
    if(num < 6 ){
        angle = Math.floor(Math.random()*60); //产生的随机数乗60;
        // 10
    } else if( num >=6 && num <7){
        // 30M
        angle = Math.floor(Math.random()*60+240);
    }else if( num >=7 && num <8.6){
        // 5元话费
        angle = Math.floor(Math.random()*60+180);
    }else if( num >=8.6 && num <8.8){
        // 20元话费
        angle = Math.floor(Math.random()*60+120);
    }else if( num >=8.8 && num <8.9){
        // mini4
        angle = Math.floor(Math.random()*60+60);
    }else if( num >=8.9 && num <10){
        // 苹果7
        angle = Math.floor(Math.random()*60+1);
    }
    return angle;
}
// 控制旋转的  随机产生角度
function goLottery(deg){
    flag =true;
    _edg = deg;
    var angle = deg + rotaeaNym*360;
    $(".table").css({
            "transform":"rotate(" + angle +"deg)",
            "transition": "all 5s ease"
    });
}

// 监听动画结束
                //webkitTransitionEnd(在css动画完成后触发)
$(".table").on("webkitTransitionEnd",function(){
    flag = false;
    $(".table").css({
        "transition": "none",
        "transform":"rotate(" + _deg +"deg)"
    });
    // 动画结束后返回0度;
    endCbs(_deg);
})