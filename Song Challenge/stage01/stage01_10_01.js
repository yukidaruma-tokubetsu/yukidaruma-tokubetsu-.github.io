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
            document.getElementById('03').innerHTML = "陽光優雅地漫步旅店的草坪";
        },23280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "人魚在石刻牆壁彈奏著豎琴";
        },27270);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "圓弧屋頂　用拉丁式的黎明";
        },31190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "顏色曖昧的勾引　我已經開始微醺";
        },34050);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "火紅的舞衣旋轉在綠蔭小徑";
        },40000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "連腳步都佛朗明哥的聲音";
        },44010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "懸在窗櫺　小酒瓶晃得輕輕";
        },47110);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "對著風溫柔回應　原來愛可以寂靜";
        },50030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "馬德里　不思議　突然地想念你";
        },55200);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "彩繪玻璃前的身影　只有孤單變濃郁";
        },60030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "馬德里　不思議　突然那麼想念你";
        },63220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我帶著愛抒情地遠行";
        },68010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "（間奏）";
        },71240);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "火紅的舞衣旋轉在綠蔭小徑";
        },80000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "連腳步都佛朗明哥的聲音";
        },84010);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "懸在窗櫺　小酒瓶晃得輕輕";
        },87130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "對著風溫柔回應　原來愛可以寂靜";
        },90040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "馬德里　不思議　突然地想念你";
        },95220);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "彩繪玻璃前的身影　只有孤單變濃郁";
        },100030);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "馬德里　不思議　突然那麼想念你";
        },103190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我帶著愛抒情地遠行";
        },108050);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "所以用鵝毛筆　寫了封信給你";
        },112000);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "淺灰的紙裡　夾了朵三色菫";
        },116040);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
        },120180);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "你知道它的花語簽上名我繼續一個人遠行"){
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