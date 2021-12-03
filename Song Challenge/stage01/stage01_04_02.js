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
            document.getElementById('03').innerHTML = "女：有多少人在旁邊　我們都視而不見";
        },74050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "彼此卻忍不住多看幾眼　感覺強烈";
        },83220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "已經微笑的放電　已經暗示到極限";
        },92240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "沒勇氣的人猶豫的瞬間　幸福就飄過面前";
        },101270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：我平凡無奇而妳　像燦爛星星　讓我擔心";
        },112120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "合：明明很愛你　明明想靠近";
        },120290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：但是你的身邊有人捧花總是擁擠";
        },125120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我憑什麼一一打敗情敵　敢大聲說要做妳的唯一";
        },130040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：明明很愛妳　明明想靠近<br>女：明明很愛你　明明想靠近";
        },138070);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "男：為什麼還要再浪費時間不把你抱緊<br>女：為什麼還要再浪費時間不把你抱緊";
        },143230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：夠真心　才是最厲害的武器<br>女：夠真心";
        },149000);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },155090);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "我會拼命讓你更滿意" || value == "B"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★意";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 我會死命讓你更滿意";
    document.getElementById('02').innerHTML = "B 我會拼命讓你更滿意";
    document.getElementById('03').innerHTML = "C 我會認真讓你更滿意";
}