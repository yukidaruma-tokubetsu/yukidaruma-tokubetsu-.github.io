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
            document.getElementById('03').innerHTML = "回憶裡想起模糊的小時候";
        },19140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "雲朵漂浮在藍藍的天空";
        },26090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "那時的你說　要和我手牽手";
        },32080);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一起走到時間的盡頭";
        },40010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "從此以後我都不敢抬頭看";
        },47230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "彷彿我的天空失去了顏色";
        },54170);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "從那一天起　我忘記了呼吸";
        },60120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "眼淚啊永遠不再　不再哭泣";
        },68100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們的愛　過了就不再回來";
        },78080);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "直到現在　我還默默的等待";
        },85280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們的愛　我明白　已變成你的負擔";
        },92130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只是永遠　我都放不開";
        },100050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "最後的溫暖　Ah~~~~ 你給的溫暖";
        },105160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },119110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "從此以後我都不敢抬頭看";
        },165120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "彷彿我的天空失去了顏色";
        },172230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "從那一天起　我忘記了呼吸";
        },178120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "眼淚啊永遠不再　不再哭泣";
        },186030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們的愛　過了就不再回來";
        },196040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "直到現在　我還默默的等待";
        },204020);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們的愛　我明白　已變成你的負擔";
        },210110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只是永遠　我都放不開";
        },218010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "最後的溫暖　Ah~~~~ 你給的溫暖";
        },223060);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "不要再問你是否愛我";
        },235130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "現在我想要自由天空";
        },239010);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },242130);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "遠離開這被綑綁的世界不再寂寞" || value == "B"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★★★★再★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 遠離開這被限制的世界不再寂寞";
    document.getElementById('02').innerHTML = "B 遠離開這被綑綁的世界不再寂寞";
    document.getElementById('03').innerHTML = "C 遠離開這被綑綁的世界不再難過";
}