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
            document.getElementById('03').innerHTML = "居酒屋裡的小神龕　離鋪滿鵝卵石的玄關";
        },8240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "差不多一米寬的信仰";
        },11310);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我坐著喝味噌湯　在旁觀看　庭園假山";
        },13000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "京都的夜晚　有一種";
        },15100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "有一種　榻榻米　的稻香　叫做禪";
        },16060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "那裡～神社許願　閃過一個畫面";
        },18130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "這裡～忍者矇著臉　在角落吹暗箭";
        },20610);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "心裡～幕府又重現　從前老東京那條山手線";
        },22650);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "像一齣懷舊的默片";
        },26120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "呵~~~　呵~~~";
        },28100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "呵~~~　呵~~~　嘿~~~";
        },32170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "伊賀流忍者的想法　嘿～";
        },36270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只會用武士刀比劃　嘿～";
        },39010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我一個人在家　乖乖的學插花";
        },41090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "はい　はい　はい　わかりました";
        },43240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一二三四";
        },45260);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "櫻花落滿地　有一種神秘　凝結了空氣";
        },47040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一二三四";
        },50070);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },51190);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "黑夜裡偷襲去攻擊煙霧當武器" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★★★★★擊★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 黑夜裡偷襲去攻擊煙霧是武器";
    document.getElementById('02').innerHTML = "B 黑夜中偷襲去攻擊煙霧當武器";
    document.getElementById('03').innerHTML = "C 黑夜裡偷襲去攻擊煙霧當武器";
}