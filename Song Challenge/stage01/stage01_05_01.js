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
            document.getElementById('03').innerHTML = "我最喜歡和你一起發生的";
        },31120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "是最平淡最簡單的日常";
        },38240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "面對面看著彼此咀嚼食物";
        },47010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "是最平靜最安心的時光";
        },54040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我不喜歡你和別人發生的";
        },62150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "是最曖昧最不明的隱藏";
        },69290);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "面對面看著彼此假裝正常";
        },78130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "是最可怕最噁心的事啊";
        },85100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "咦嗚咦嗚咦咦　嗚嗚嗚喔喔";
        },93060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "咿耶咿耶咦　嗚嗚嗚喔喔";
        },97070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "咿耶咿耶咦　嗚喔喔　喔";
        },101140);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "咦嗚咦嗚咦咦　嗚嗚嗚喔喔";
        },108280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "咿耶咿耶咦　嗚嗚嗚喔喔";
        },113050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "咿耶咦　嗚喔喔喔";
        },117020);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "咁講你不知我愛的只有你　你啊你啊";
        },123180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "哪會轉頭就要走";
        },131180);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一個兩個三個";
        },138290);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "你愛的到底有幾個";
        },142260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "麥擱講白賊話";
        },147060);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },149160);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "我的心就要痛甲一直流血" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★直★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 你的心就要痛甲一直流血";
    document.getElementById('02').innerHTML = "B 我的心就要痛甲一直噴血";
    document.getElementById('03').innerHTML = "C 我的心就要痛甲一直流血";
}