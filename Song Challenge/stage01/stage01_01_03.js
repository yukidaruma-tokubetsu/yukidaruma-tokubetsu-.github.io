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
            document.getElementById('03').innerHTML = "每個人都缺乏什麼";
        },27160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們才會瞬間就不快樂";
        },34280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "單純很難　包袱很多";
        },40260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "已經很勇敢　還是難過";
        },48160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "許多事情都有選擇";
        },56290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只是往往事後我才懂得";
        },64130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "情緒很煩　說話很衝";
        },70150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "人和人的溝通　有時候沒有用";
        },78030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "或許只有妳　懂得我";
        },84720);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "所以妳沒逃脫";
        },88210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一邊在淚流　一邊緊抱我";
        },92180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "小聲地說　多麼愛我";
        },96070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只有妳　懂得我";
        },100160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "就像被困住的野獸";
        },103160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "在摩天大樓　渴求　自由";
        },107090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },115030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一路嗅著追著美夢";
        },127100);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "爬上屋頂意外跌得好重";
        },134200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "不覺得痛　是覺得空";
        },140200);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },148050);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "城市的幻影有千百種" || value == "C"){
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
    document.getElementById('03').innerHTML = "城★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 我們的幻影有千百種";
    document.getElementById('02').innerHTML = "B 城市的倒影有千百種";
    document.getElementById('03').innerHTML = "C 城市的幻影有千百種";
}