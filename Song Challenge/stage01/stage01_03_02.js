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
            document.getElementById('03').innerHTML = "千言萬語　抵不過一句話";
        },39110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "反反覆覆　握不住一粒砂";
        },43190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我的眼神和別人不一樣";
        },47150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "如果你懂　請你別走";
        },50290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "大街上　大海中　我都跟從";
        },54170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "怎麼笑　怎麼痛　一起感受";
        },58140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "要多愛　要多寵　全部接受";
        },62180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "就是不見　你的溫柔";
        },66070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "不是每個戀曲都有美好回憶";
        },70010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "用完傷心　只有分離";
        },73240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "不是每顆真心　都會有人珍惜";
        },77120);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "哪怕像我如此愛你";
        },81060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "不是每個戀曲都有美好回憶";
        },84260);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },88240);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "是你說過要我陪你到底真真假假當它夢一場" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★過★★★★★★★★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 是你說過要我陪你到底假假真真當它夢一場";
    document.getElementById('02').innerHTML = "B 是我說過要你陪我到底真真假假當它夢一場";
    document.getElementById('03').innerHTML = "C 是你說過要我陪你到底真真假假當它夢一場";
}