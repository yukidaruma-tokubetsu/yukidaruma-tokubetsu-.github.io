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
            document.getElementById('03').innerHTML = "Oublie-le　好幾次我告訴我自己";
        },33050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "越想努力趕上光的影";
        },44180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "越無法抽離　而已";
        },51040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "Je t’aimais　刻骨銘心只有我自己";
        },61240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "好不容易交出真心的勇氣";
        },73100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "你沉默的回應　是善意";
        },79100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "刻在我心底的名字";
        },89060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "忘記了時間這回事";
        },92170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "於是謊言說了一次就一輩子";
        },96090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "曾頑固跟世界對峙";
        },103080);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "覺得連呼吸都是奢侈";
        },106290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "如果有下次　我會再愛一次";
        },111120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "刻在我心底的名字";
        },117240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "你藏在塵封的位置";
        },121030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "要不是這樣我怎麼過一輩子";
        },124290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我住在霓虹的城市";
        },132000);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "握著飛向天堂的地址";
        },135230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "你可以翱翔　可是我只能停滯";
        },140040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },148160);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },160140);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "尋找你茫茫人海卻又想起你" || value == "A"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★★★★你";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 尋找你茫茫人海卻又想起你";
    document.getElementById('02').innerHTML = "B 尋找著茫茫人海卻再想起你";
    document.getElementById('03').innerHTML = "C 找尋你茫茫人海卻又想起你";
}