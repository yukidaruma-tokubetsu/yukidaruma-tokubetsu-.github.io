function text(){
    var audio = document.getElementById('myaudio');
    audio.onplay = function() {
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('02').innerHTML = "";
            document.getElementById('03').innerHTML = "我安靜　妳囉嗦";
            document.getElementById('04').innerHTML = "";
            document.getElementById('05').innerHTML = "";
        },6070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我寵貓　妳愛狗";
        },10100);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們間沒有一見鍾情的藉口";
        },13190);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "一杯咖啡過後　留下心動的線索";
        },20090);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "故事再度漂流在十字街頭";
        },26130);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "想和妳一起撐傘漫步雨中　默默牽手走過";
        },32210);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "妳卻將傘拋在風中　擁抱雨和我";
        },39280);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我們完全不同卻難以抗拒　說謊都很透明";
        },46070);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "愛情裡需要的證據　矛盾卻美麗";
        },53040);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "妳就是妳";
        },59230);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "我才能是我";
        },62150);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "彼此都是彼此的缺口";
        },66000);
        setTimeout(function(){
            document.getElementById('01').innerHTML = '<img src="../pic/01.png" width="100" height="100" id="pic01" style="visibility:visible">';
            document.getElementById('03').innerHTML = "忽然間　手指鉤到口袋裡破洞";
        },71260);
        setTimeout(function(){
            document.getElementById('03').innerHTML = "妳的笑　又在我耳邊熟悉吹動";
        },78100);
        setTimeout(function(){
            document.getElementById('01').innerHTML = "";
            document.getElementById('03').innerHTML = "★★★★★★★★★★★★★";
            document.getElementById('04').innerHTML = '<button type="button" class="btn btn-primary fontsize70" id="btn01" onclick="btn01()">請輸入答案</button>';
            document.getElementById('05').innerHTML = '<button type="button" class="btn btn-success button5 fontsize40" onclick="oneword()">一字<br>提示</button>　　　　　　　<button type="button" class="btn btn-success button5 fontsize40" onclick="three()">三<br>選一</button>';
        },84190);
    }
}

function btn01() { 
    document.getElementById("btn01").addEventListener("click",function(){
    swal("請輸入答案", {
      content: "input",
    })
    .then((value) => {
      if (value == "路燈下顫抖中抬頭望妳的星座" || value == "A"){
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
    document.getElementById('03').innerHTML = "★★★★★中★★★★★★★";
    
}

function three(){
    document.getElementById('01').innerHTML = "A 路燈下顫抖中抬頭望妳的星座";
    document.getElementById('02').innerHTML = "B 路燈前顫抖中抬頭望她的星座";
    document.getElementById('03').innerHTML = "C 路燈下顫抖中抬頭願妳的星座";
}