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
            document.getElementById('03').innerHTML = "等愛的人很多　不預設你會在乎我";
        },13130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "難道一生的時間";
        },25210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "都用來換";
        },30000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "和你一個誤會";
        },32290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "誰能真的讓誰　幸福到故事的結尾";
        },37270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "何必那麼的慌張";
        },50120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "有時清醒";
        },54150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "才是錯誤的開始";
        },56240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不需要　也不重要";
        },62280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "做一個傻子多麼好";
        },69260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不明白　也不需要明白";
        },75090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "就讓我這樣　到老";
        },83140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "誰能真的讓誰　幸福到故事的結尾";
        },99140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "何必那麼的慌張";
        },112030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "有時清醒";
        },116000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "才是錯誤的開始";
        },118000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不需要　也不重要";
        },124120);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "做一個傻子多麼好";
        },131100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不明白 也不需要明白";
        },136200);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },146000);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "就讓我這樣就很好" || value == "B"){
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
    document.getElementById('03').innerHTML = "★讓★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 請讓我這樣就很好";
    document.getElementById('02').innerHTML = "B 就讓我這樣就很好";
    document.getElementById('03').innerHTML = "C 就讓我這樣非常好";
}