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
            document.getElementById('03').innerHTML = "這種笑容我沒見過";
        },14240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "妳是不是在暗示什麼";
        },21240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "眼神這樣算不算秋波";
        },28220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "那是線索　還是告訴我千萬別想太多";
        },34300);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "像顆糖　好誘惑　甜到夢裡有粉紅　小花朵";
        },42240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一朵一朵慢動作飄落";
        },52120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "像杯酒　太誘惑　琥珀色的安樂窩　搖晃我";
        },56270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "好想醉倒在妳懷中";
        },66150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },73070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "終於體會暗香流動";
        },84190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "原來就是妳髮梢的風";
        },91070);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "原諒我的詞彙不夠用";
        },98100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "無法形容";
        },103230);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },106270);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "妳是怎麼樣把我捲進漩渦" || value == "B"){
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
    document.getElementById('03').innerHTML = "★★★★★★★捲★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 我是怎麼樣把妳捲進漩渦";
    document.getElementById('02').innerHTML = "B 妳是怎麼樣把我捲進漩渦";
    document.getElementById('03').innerHTML = "C 妳是為什麼把我捲進漩渦";
}