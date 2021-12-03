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
            document.getElementById('03').innerHTML = "那是個月亮<br>就是個月亮<br>並不是地上霜";
        },28030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "那地上花瓣<br>看完了就完<br>沒必要再聯想";
        },37060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "甚麼秋水　怎麼望穿";
        },45230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "甚麼燈火　怎麼闌珊";
        },50130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "甚麼風景　就怎麼看　何必要拐彎";
        },54270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "打開門　就見山　我見山　就是山";
        },64070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "本來就　很簡單　不找自己麻煩";
        },68210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "痛就痛　傷就傷<br>是誰說　肝腸會寸斷　混帳";
        },73090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "點了燈　就會亮　關了燈　就會暗";
        },82120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "誰活得　不耐煩　哪裡來的感慨";
        },87000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "聚就聚　散就散<br>誰曾說　獨自莫憑欄　笨蛋";
        },91170);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "（間奏）";
        },101160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "那是把雨傘　就是把雨傘　不是感情遺產";
        },119130);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },128200);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "那煙消雲散是天氣現象" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★雲★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 那煙消雲散是自然現象";
    document.getElementById('02').innerHTML = "B 那傾盆大雨是天氣現象";
    document.getElementById('03').innerHTML = "C 那煙消雲散是天氣現象";
}