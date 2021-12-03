function text(){
    var audio = document.getElementById('myaudio');
    audio.onplay = function() {
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('02').innerHTML = "";
            document.getElementById('03').innerHTML = "漂向北方　別問我家鄉";
            document.getElementById('04').innerHTML = "";
            document.getElementById('05').innerHTML = "";
        },9070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "高聳古老的城牆　擋不住憂傷";
        },14170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我漂向北方　家人是否無恙";
        },20000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "肩上沉重的行囊　盛滿了惆悵";
        },25170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "有人說他在老家欠了一堆錢　需要避避風頭";
        },31230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "有人說他練就了一身武藝卻沒機會嶄露";
        },35010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "有人失去了自我　手足無措四處漂流";
        },38000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "有人為了夢想為了三餐為養家糊口";
        },41020);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "他住在燕郊區　殘破的求職公寓";
        },43110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "擁擠的大樓裡　堆滿陌生人都來自外地";
        },46040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "他埋頭寫著履歷　懷抱著多少憧憬";
        },49050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "往返在九三零號公路　內心盼著奇蹟";
        },51970);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "忍著淚　(不聽也不想　不敢回頭望的遺憾)";
        },54000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "掩著傷　(扛下了夢想　要毅然決然去流浪)";
        },56230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "抬頭看　(卸下了自尊　光環　過去多風光)";
        },59180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "著斜陽　(就算再不堪　敗仗　也不能投降)";
        },62100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "親愛的　(再見了南方　眺望最美麗的家鄉)";
        },65060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "在遠方　(椰子樹搖晃　夢境倒映著的幻象)";
        },67240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "這城市　(霧霾太猖狂　不散　都看不清前方)<br>太迷惘";
        },70170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我漂向北方　別問我家鄉";
        },75100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "高聳古老的城牆　擋不住憂傷";
        },80190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我漂向北方　家人是否無恙";
        },86060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "肩上沉重的行囊　盛滿了惆悵";
        },91180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "也是最後寄望　回不去的遠方Oh";
        },97030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "空氣太髒　太混濁　他說不喜歡";
        },109200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "車太混亂　太匆忙　他還不習慣";
        },112070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "人行道一雙又一雙　斜視冷漠的眼光";
        },115010);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "他經常將自己灌醉　強迫融入　這大染缸";
        },117240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "走著腳步蹣跚　二鍋頭在搖晃";
        },120220);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },123100);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "失意的人啊偶爾醉倒在那胡同陋巷" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★的★★★★★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 失意的人啊經常醉倒在那胡同陋巷";
    document.getElementById('02').innerHTML = "B 失意的人啊偶爾醉倒在那街角陋巷";
    document.getElementById('03').innerHTML = "C 失意的人啊偶爾醉倒在那胡同陋巷";
}