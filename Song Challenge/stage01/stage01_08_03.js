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
            document.getElementById('03').innerHTML = "白色的光讓我全身發燙";
        },47290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "火星地球有什麼不一樣";
        },51160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "身體受到改裝　天亮後忘記了的模樣";
        },55170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "oh斷食的人們正隨風飄蕩";
        },63060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "別再嘲弄那一口的飯量";
        },66290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "oh Handsome 沒耐心　抵抗力不強";
        },70110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "慾望飛奔　食物都塞進浴缸";
        },77130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "壞蟑螂　毒老鼠　最後瘋狂";
        },85180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我燒　我開始燒";
        },93100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "滅掉脂肪　像皮鞭抽在身上";
        },100260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "國色又天香　雙目被彌彰";
        },108270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "這只不過是皮囊";
        },116160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "到底是誰　嫉妒是誰　崇拜什麼　失去智慧";
        },125120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "忍著疼痛　從不懺悔　不能變得再荒唐";
        },132280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },141030);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "傲慢的人們　有些猖狂";
        },173190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "本能地拖延身體預想";
        },177250);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },182120);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "七星瓢蟲說你遮擋了它想要的陽光" || value == "C"){
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
    document.getElementById('03').innerHTML = "七★★★★★★★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 身體受到改裝天亮後忘記了的模樣";
    document.getElementById('02').innerHTML = "B 七星瓢蟲說你遮擋了它想要的陽光";
    document.getElementById('03').innerHTML = "C 整得無敵漂亮把雙手都伸到了天上";
}