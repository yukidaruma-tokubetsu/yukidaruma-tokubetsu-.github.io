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
            document.getElementById('03').innerHTML = "嚇　命有幾回合　擂臺等著";
        },30100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "生死狀　贏了什麼　冷笑著";
        },33070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "天下誰的　第一又如何";
        },35230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "止干戈　我輩尚武德";
        },38050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我的　拳腳了得";
        },40050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "卻奈何　徒增虛名一個";
        },42150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "江湖難測　誰是強者";
        },44270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "誰爭一統武林的資格";
        },47120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "小城裏歲月流過去　清澈的勇氣";
        },49240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "洗滌過的回憶　我記得你";
        },58200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "驕傲的活下去";
        },64050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "霍霍　霍霍　霍霍霍霍";
        },69140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "霍家拳的套路招式靈活";
        },71160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我我　我我　我我我我";
        },74120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "活著生命就該完整渡過";
        },76150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我我　我我　我我我我";
        },79100);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "過錯軟弱從來不屬於我";
        },81120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "霍霍　霍霍　霍霍霍霍";
        },84120);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },86070);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "我們精武出手無人能躲" || value == "A"){
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
    document.getElementById('03').innerHTML = "★★★★★★無★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 我們精武出手無人能躲";
    document.getElementById('02').innerHTML = "B 他們精武出手絕不軟弱";
    document.getElementById('03').innerHTML = "C 我們精武出手絕不軟弱";
}