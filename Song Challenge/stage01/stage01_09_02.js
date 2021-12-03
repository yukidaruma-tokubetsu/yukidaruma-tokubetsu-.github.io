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
            document.getElementById('03').innerHTML = "one two three four";
        },7270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "忘記了姓名的請跟我來　現在讓我們向快樂崇拜";
        },9220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "放下了包袱的請跟我來<br>傳開去建立個快樂的時代";
        },17040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "快樂到底屬於那個年代 70 80 90 還是Y世代";
        },25020);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "翻開歷史課本答案就算仔細找<br>也會找不到背也會背不好";
        },29030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "放鬆讓我來說";
        },32740);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "什麼年代吹著什麼樣的風　我拿著我的麥克風";
        },34160);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "唱出OLD SCHOOL SHOW YALL READY TO ROLL";
        },38070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "70的年代　復古我最HIGH";
        },40070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "DISCO FEVER 從來不肯SAY GOODBYE";
        },42010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "只有放放放克才能酷";
        },44130);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "男男女女老老少少";
        },45830);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們穿著喇叭褲";
        },47150);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },48040);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "爆炸頭在望春風左右搖擺上下一指神功" || value == "A"){
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
    document.getElementById('03').innerHTML = "★★★★★★風★★★★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 爆炸頭在望春風左右搖擺上下一指神功";
    document.getElementById('02').innerHTML = "B 爆炸頭在望春風上下搖擺左右一指神功";
    document.getElementById('03').innerHTML = "C 爆炸頭在望春風上下搖擺看我一指神功";
}