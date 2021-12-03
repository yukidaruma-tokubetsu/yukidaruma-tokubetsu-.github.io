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
            document.getElementById('03').innerHTML = "男：走過的路　是一陣魔術";
        },22080);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "把所有的　好的壞的　變成我的";
        },26170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "心裡的苦　就算不記得";
        },31190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "都化作這目光　吟唱成一首歌";
        },35260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：而你像　流進詩裡的嘈嘈水聲";
        },41210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "敲進我心門　擁抱了所有的恨";
        },46010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "滋養了乾涸　相信我能是你的";
        },50220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：彷彿還看見昨日那張悲傷的臉龐";
        },55110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：快樂有時候竟然辣得像一記耳光";
        },59210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "合：是你提醒我　別怕去幻想";
        },64280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "想我內心躲避慣的渴望";
        },69210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：彷彿能看見明日兩串腳印的走廊";
        },74020);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "女：憂傷有時候竟被你調味得像顆糖";
        },79030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "合：是你抓緊我　往前去張望";
        },83180);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },88170);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "望我內心夾岸群花盛放" || value == "C"){
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
    document.getElementById('03').innerHTML = "★我★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 望我真心夾岸群花盛放";
    document.getElementById('02').innerHTML = "B 望我內心夾岸百花盛放";
    document.getElementById('03').innerHTML = "C 望我內心夾岸群花盛放";
}