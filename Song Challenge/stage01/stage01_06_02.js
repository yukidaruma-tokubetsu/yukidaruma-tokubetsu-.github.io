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
            document.getElementById('03').innerHTML = "確認身份別恍神";
        },11110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "這遊戲無法天真";
        },14070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "多麼認真　三更半夜　都還在這";
        },17030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "奮不顧身　滿是傷痕";
        },22210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "教人沈淪　危險迷人";
        },28080);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "想起那時多快樂";
        },33220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "手牽著手屠神";
        },36240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "才轉眼間　我們卻變得如此陌生";
        },39200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "奮不顧身　滿是傷痕";
        },45070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "享受爾虞我詐的快樂";
        },50050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "天黑請閉眼　我在你身邊";
        },54130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "卻測不出你　雪藏的那面";
        },60030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "該怎麼進退　你狼狽發言";
        },65230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "那些預言都成了虧欠";
        },71120);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "天黑請閉眼　愛在你身邊";
        },77020);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "毒藥是誰給　女巫的懲戒";
        },82210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我怎麼進退　故事的結尾";
        },88100);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },94010);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "你一槍爆裂埋葬我的愛戀" || value == "C"){
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
    document.getElementById('03').innerHTML = "★★★★★★★★的★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 你一槍爆裂埋葬我的愛戀";
    document.getElementById('02').innerHTML = "B 你直接爆裂埋葬我的愛戀";
    document.getElementById('03').innerHTML = "C 你一槍爆裂埋葬我的失戀";
}