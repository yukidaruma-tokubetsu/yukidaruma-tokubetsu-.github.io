function text(){
    var audio = document.getElementById('myaudio');
    audio.onplay = function() {
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('02').innerHTML = "";
            document.getElementById('03').innerHTML = "（間奏）";
            document.getElementById('04').innerHTML = "";
            document.getElementById('05').innerHTML = "";
        },4000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：沒說分手　終於是能開玩笑的朋友<br>不是不難過的";
        },11160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：多少年了";
        },26160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：多少年了";
        },28160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：我想過能夠和你一起老的";
        },30160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "合：卻都有別人了<br>新的朋友　不再重疊<br>我的世界　你在邊緣";
        },37160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "合：不是我不明白　有些話沒說出來";
        },55030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "能再次關懷　時間洗刷所有不愉快";
        },63130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "後來的愛　我們嘗試去寬待";
        },71090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "懂得愛　說來無奈　來自對你虧待";
        },78060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：沒刻意掩埋<br>男：沒有<br>男：沒對她坦白<br>合：你還在";
        },85250);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "女：不是我不明白";
        },99160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "合：說被愛並不應該";
        },103160);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },107180);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "我們的關懷像愛但又說不上愛" || value == "B"){
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
    document.getElementById('03').innerHTML = "★★★關★★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 我們的關心像愛但又說不上來";
    document.getElementById('02').innerHTML = "B 我們的關懷像愛但又說不上愛";
    document.getElementById('03').innerHTML = "C 我們的關懷像愛但又說不上來";
}