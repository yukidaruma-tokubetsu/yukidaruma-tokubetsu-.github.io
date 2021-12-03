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
            document.getElementById('03').innerHTML = "為何　為何　為何　為何";
        },24280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "為何　沒人　讓我知道這有趴";
        },32240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "要等我發現他　我心裡面的話在告訴自己";
        },35260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我　想跳到沒有妝　起霧在每個窗";
        },41080);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "讓所有人都　當　我跳舞著在fun";
        },46060);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "來一起跟我fun　讓所有人都fun";
        },50070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "請DJ繼續放放放　到天亮";
        },54150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "自然不勉強　撒水當面霜";
        },58130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "就跟我一起跳進來 let’s do it";
        },62210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "跳　就跟我一起　跳　像心臟　一起　跳";
        },66020);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "往音樂裡面　跳進來 let’s do it";
        },70270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "跳　就跟我一起　跳　像心臟　一起";
        },74070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "跳　往音樂裡面　跳進來 let’s do it";
        },78090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "跳　往音樂裡面　跳　往音樂裡面";
        },82120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "跳　往音樂裡面　跳進來let’s do it";
        },86150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "跳　往音樂裡面　跳　往音樂裡面";
        },90230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "跳　往音樂裡面　跳進來let’s do it";
        },94210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },99190);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "不　准站在那不動　像花叢沒有風";
        },107000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "擺漂亮沒有用　你最好給我瘋";
        },111190);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },116010);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "起來到頭髮鬆全身體都失控" || value == "B"){
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
    document.getElementById('03').innerHTML = "★★★★★★★身★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 起來頭髮到鬆全身體都失控";
    document.getElementById('02').innerHTML = "B 起來到頭髮鬆全身體都失控";
    document.getElementById('03').innerHTML = "C 起來到頭髮鬆身體全都失控";
}