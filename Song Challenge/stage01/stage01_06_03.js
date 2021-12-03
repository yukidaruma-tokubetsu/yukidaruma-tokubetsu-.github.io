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
            document.getElementById('03').innerHTML = "你總感到落寞沮喪　你總感到失望";
        },17050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "對於人生未來總有太多　迷惘";
        },22290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "你總偽裝自己不痛　你總笑著逞強";
        },32280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "對於愛情害怕觸碰　放棄掙扎";
        },38060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "你看著我眼睛　你記著我聲音";
        },47040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "無畏風雨　別忘記還有我站在這裡";
        },55020);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "我只想做你的太陽　你的太陽";
        },65150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "在你的心裡呀　在你的心底呀";
        },69270);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },73260);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "不管是多遠的遠方不要害怕我在身旁" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★★★★★我★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 就算不能在你身旁也要奮力為你發光";
    document.getElementById('02').innerHTML = "B 就算不能在你身旁不要害怕我在身旁";
    document.getElementById('03').innerHTML = "C 不管是多遠的遠方不要害怕我在身旁";
}