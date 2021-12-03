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
            document.getElementById('03').innerHTML = "女：好想這樣抱著你　我知道你有些在意";
        },37290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "給他傷了心才想到可以找你";
        },45150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "男：好想這樣抱著妳　我知道妳現在傷心";
        },53280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "想有人陪妳只是如此而已";
        },61030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：你知道<br>男：我明瞭<br>女：抱著你";
        },68250);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：我的淚卻為他而掉<br>男：妳的淚卻為他而掉";
        },72050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：你知道<br>男：我明瞭<br>女：抱著你<br>合：溫習擁抱";
        },76270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：你知道<br>男：我明瞭<br>女：抱著你<br>合：我的心有些動搖";
        },84230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：你有的好<br>男：他有的好<br>女：他做不到<br>男：我做不到";
        },92090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：還想他<br>男：也許他<br>女：可能等我回家<br>男：等妳回家";
        },100150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：在我們相識的樓下<br>男：在妳們相識的樓下";
        },105090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "女：還想他<br>男：也許他<br>女：可能撥我電話<br>男：撥妳電話<br>合：留話";
        },108120);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "女：還愛他<br>男：妳愛他<br>女：我從沒懷疑過<br>男：沒懷疑過";
        },116070);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },121000);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "今晚心底的掙扎我不說你明白嗎" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★★★★★我★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 今晚心底的掙扎你不說我明白嗎";
    document.getElementById('02').innerHTML = "B 今晚內心的掙扎我不說你明白嗎";
    document.getElementById('03').innerHTML = "C 今晚心底的掙扎我不說你明白嗎";
}