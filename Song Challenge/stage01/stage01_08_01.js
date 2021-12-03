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
            document.getElementById('03').innerHTML = "把每天當成是末日來相愛";
        },30050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一分一秒都美到淚水掉下來";
        },37200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "不理會別人是看好或看壞";
        },44270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只要你勇敢跟我來";
        },51220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "愛　不用刻意安排";
        },59150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "憑感覺去親吻相擁就會很愉快";
        },66100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "享受現在　別一開懷就怕受傷害";
        },72190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "許多奇蹟我們相信才會存在";
        },81010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "死了都要愛　不淋漓盡致不痛快";
        },88010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "感情多深只有這樣才足夠表白";
        },95240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "死了都要愛　不哭到微笑不痛快";
        },102200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "宇宙毀滅心還在";
        },110110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },117220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "把每天當成是末日來相愛";
        },132000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一分一秒都美到淚水掉下來";
        },139140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "不理會別人是看好或看壞";
        },146210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只要你勇敢跟我來";
        },153130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "愛　不用刻意安排";
        },161050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "憑感覺去親吻相擁就會很愉快";
        },168070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "享受現在　別一開懷就怕受傷害";
        },174150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "許多奇蹟我們相信才會存在";
        },182290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "死了都要愛　不淋漓盡致不痛快";
        },189280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "感情多深只有這樣才足夠表白";
        },197210);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "死了都要愛　不哭到微笑不痛快";
        },204150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "宇宙毀滅心還在";
        },212050);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },219000);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "窮途末路都要愛不極度浪漫不痛快" || value == "B"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★★★★★不★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 走到絕路都要愛不天荒地老不痛快";
    document.getElementById('02').innerHTML = "B 窮途末路都要愛不極度浪漫不痛快";
    document.getElementById('03').innerHTML = "C 不怕熱愛變火海愛到沸騰才叫精采";
}