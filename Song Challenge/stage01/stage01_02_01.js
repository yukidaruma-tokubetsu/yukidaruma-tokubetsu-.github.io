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
            document.getElementById('03').innerHTML = "岩燒店的煙味瀰漫　隔壁是國術館";
        },28100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "店裡面的媽媽桑　茶道　有三段";
        },31000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "教拳腳武術的老闆　練鐵沙掌　耍楊家槍";
        },33130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "硬底子功夫最擅長　還會金鐘罩鐵布衫";
        },35350);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "他們兒子我習慣　從小就耳濡目染";
        },38050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "什麼刀槍跟棍棒　我都耍的有模有樣";
        },40120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "什麼兵器最喜歡　雙截棍柔中帶剛";
        },42290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "想要去河南嵩山　學少林跟武當";
        },45090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "幹什麼(客)　幹什麼(客)　呼吸吐納心自在";
        },47160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "幹什麼(客)　幹什麼(客)　氣沉丹田手心開";
        },49380);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "幹什麼(客)　幹什麼(客)　日行千里繫沙袋";
        },52080);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "飛簷走壁莫奇怪　去去就來";
        },54240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一個馬步向前　一記左鉤拳　右鉤拳";
        },57010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一句惹毛我的人有危險　一再重演";
        },59590);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一根我不抽的菸　一放好多年　它一直在身邊";
        },62320);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "幹什麼(客)　幹什麼(客)　我打開任督二脈";
        },66150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "幹什麼(客)　幹什麼(客)　東亞病夫的招牌";
        },69000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "幹什麼(客)　幹什麼(客)　已被我一腳踢開";
        },71110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "快使用雙截棍　哼哼哈兮";
        },74240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "習武之人切記　仁者無敵";
        },79250);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "是誰在練太極　風生水起";
        },82050);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "快使用雙截棍　哼哼哈兮";
        },84160);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },89080);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "如果我有輕功飛簷走壁" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★★輕★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 假如我有輕功飛簷走壁";
    document.getElementById('02').innerHTML = "B 如果也有輕功飛簷走壁";
    document.getElementById('03').innerHTML = "C 如果我有輕功飛簷走壁";
}