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
            document.getElementById('03').innerHTML = "當我佇立在窗前<br>你愈走愈遠<br>我的每一次心跳<br>你是否聽見";
        },25120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "當我徘徊在深夜<br>你在我心田<br>你的每一句誓言<br>迴盪在耳邊";
        },38160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "隱隱約約<br>閃動的雙眼<br>藏著你的羞怯<br>加深我的思念";
        },51290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "兩顆心的交界<br>你一定會看見<br>只要你願意走向前";
        },65020);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "天天想你<br>天天問自己<br>到什麼時候才能告訴你";
        },78010);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },90250);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "天天想你天天守住一顆心把我最好的愛留給你" || value == "A"){
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
    document.getElementById('03').innerHTML = "★★★★★★守★★★★★★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 天天想你天天守住一顆心把我最好的愛留給你";
    document.getElementById('02').innerHTML = "B 天天想你天天守住一顆心把我更好的愛留給你";
    document.getElementById('03').innerHTML = "C 天天想你天天保護一顆心把我最好的愛留給你";
}