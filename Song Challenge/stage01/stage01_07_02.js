function text(){
    var audio = document.getElementById('myaudio');
    audio.onplay = function() {
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('02').innerHTML = "";
            document.getElementById('03').innerHTML = "（前奏）";
            document.getElementById('04').innerHTML = "";
            document.getElementById('05').innerHTML = "";
        },4000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "他的手掌是否有點粗糙";
        },17040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "下巴的傷像勾人的問號";
        },21100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "當被他擁抱　會是甚麼情調";
        },25070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "雙手環繞　捨不捨得睡著";
        },29140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "誰的唇能變成我的吻";
        },33250);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "能清楚感覺到他的體溫";
        },37280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "准不准一整天不出門";
        },41290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "睡覺　胡鬧　擁抱";
        },45280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "他的雙腳　沙灘上的符號";
        },54190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "肩膀線條像冰山的一角";
        },58230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "襯衫裡的腰　甚麼都撐得牢";
        },62190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "嘴角微翹　看來可靠的笑";
        },67000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "誰的唇能變成我的吻";
        },71100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "能清楚感覺到他的體溫";
        },75200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "准不准一整天不出門";
        },79250);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "睡覺　胡鬧　擁抱";
        },83100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "想聽到他胸口的心跳";
        },88060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "太陽下　他的汗什麼味道";
        },92060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "把無聊的教條先忘掉";
        },96060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "浪漫一次都好";
        },100300);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "薇多莉亞的秘密　那浪漫的劇情";
        },108250);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "偷偷藏著的Fantasy　女人就該壓抑";
        },112180);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },116210);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "那粉紅色的秘密獨處才敢甦醒" || value == "B"){
        swal("恭喜你答對了","","success");
        window.location.href='stage01.html';
      }else if(value == ""){
        swal("答案不能為空白","","warning");
      }else{
        swal("不好意思你答錯了","","error");
        window.location.href='../index.html';
      }
    });
  });
}

function oneword(){
    document.getElementById('01').innerHTML = "";
    document.getElementById('02').innerHTML = "";
    document.getElementById('03').innerHTML = "★★★★的★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 薇多莉亞的秘密那浪漫的劇情";
    document.getElementById('02').innerHTML = "B 那粉紅色的秘密獨處才敢甦醒";
    document.getElementById('03').innerHTML = "C 薇多莉亞的秘密粉紅色的秘密";
}