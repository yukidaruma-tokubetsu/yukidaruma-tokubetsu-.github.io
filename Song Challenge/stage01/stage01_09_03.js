function text(){
    var audio = document.getElementById('myaudio');
    audio.onplay = function() {
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('02').innerHTML = "";
            document.getElementById('03').innerHTML = "yo yo yo yo Cyndi";
            document.getElementById('04').innerHTML = "";
            document.getElementById('05').innerHTML = "";
        },5130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "what~what's wrong with me?　(愛你)";
        },7130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "yo yo Cyndi baby";
        },11150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "what's wrong with me?";
        },13220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "Cyndi, give me your love";
        },16120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "you make me sneeze all the time";
        },18150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "Now now怎麼我一直狂打噴嚏";
        },24120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "在凌晨三點二十六分";
        },28010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "let me sing let me sing a song<br>陪妳入睡";
        },30040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "what is love say yes嗯哼我正在聽";
        },33250);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "妳要什麼都say yes";
        },38210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "Cyndi I really do love you so";
        },40120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "如果你突然打了個噴嚏";
        },42130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "那一定就是我在想你";
        },44140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "如果半夜被手機吵醒";
        },47000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "啊那是因為我關心";
        },49070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "常常想　你說的話是不是別有用心";
        },51050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "明明很想相信　卻又忍不住懷疑";
        },56120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "在你的心裡　我是否就是唯一";
        },61070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "愛　就是有我常煩著你";
        },66050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "Ho~baby　情話多說一點<br>想我就多看一眼";
        },70110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "表現多一點點　讓我能　真的看見";
        },75220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "oh~~Bye　少說一點　想陪你不只一天";
        },80180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "多一點　讓我　心甘情願~~愛你";
        },85060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },90050);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "喜歡在你的臂彎裡胡鬧";
        },104190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "你的世界是一座城堡";
        },106250);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },109080);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "在大頭貼畫滿心號貼在手機上對你微笑" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★貼★★★★★★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 在大頭貼貼滿心號貼在手機上自拍微笑";
    document.getElementById('02').innerHTML = "B 在大頭貼寫滿心號貼在手機上對你搞笑";
    document.getElementById('03').innerHTML = "C 在大頭貼畫滿心號貼在手機上對你微笑";
}