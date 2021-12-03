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
            document.getElementById('03').innerHTML = "又來到這個港口　沒有原因的拘留";
        },20290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我的心乘著斑駁的輕舟　尋找失落的沙洲";
        },31280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "隨　時間的海浪漂流　我用力張開雙手";
        },44210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "擁抱那麼多起起落落<br>想念的還是你望著我的眼波";
        },55260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不是一定要你回來　只是當又一個人看海";
        },74180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "回頭才發現你不在　留下我迂迴的徘徊";
        },86030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不是一定要你回來　只是當又把回憶翻開";
        },98210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "除了你之外的空白　還有誰能來教我愛";
        },110110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },119170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "又回到這個盡頭　我也想再往前走";
        },153010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只是越看見海闊天空<br>越遺憾沒有你分享我的感動";
        },163210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不是一定要你回來　只是當又一個人看海";
        },182230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "回頭才發現你不在　留下我迂迴的徘徊";
        },194070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不是一定要你回來　只是當又把回憶翻開";
        },206230);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "除了你之外的空白　還有誰能來教我愛";
        },218040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不是一定要你回來　只是當又一個人看海";
        },230210);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },242080);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "疲憊的身影不是我不是你想看見的我" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★★是★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 回頭才發現你不在留下我迂迴的徘徊";
    document.getElementById('02').innerHTML = "B 疲憊的身影不是我不是你想看見的我";
    document.getElementById('03').innerHTML = "C 除了你之外的依賴還有誰能來教我愛";
}