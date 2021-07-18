function btn01() { 
  document.getElementById("btn01").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "媽祖"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz01').innerHTML = '<h2>Q1、請問臺灣最普遍的民間信仰之一，且有「護國庇民」的海洋守護神神明的名字叫做??</h2>';
      document.getElementById('three').style.border = '4px red solid';
      document.getElementById('br01').innerHTML = '<hr class="my-4" style="clear:both;">';
      document.getElementById('btns02').innerHTML = '<button type="button" class="btn btn-success" id="five">王子</button>　<button type="button" class="btn btn-success" id="six">王子</button><br><button type="button" class="btn btn-success" id="seven">王子</button>　<button type="button" class="btn btn-success" id="eight" style="font-size:20px;">王子</button>';
      document.getElementById('btndiv02').innerHTML = '<button type="button" class="btn btn-success" onclick="btn02()" id="btn02">按此輸入答案</button>';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn02() { 
  document.getElementById("btn02").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "小王子"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz02').innerHTML = '<h2>Q2、請問講述一位住在B612小行星的金髮男孩環遊包括地球在內的各類太空星球的種種經歷的童話故事名字叫做??</h2>';
      document.getElementById('eight').style.border = '4px red solid';
      document.getElementById('br02').innerHTML = '<hr class="my-4" style="clear:both;">';
      document.getElementById('btns03').innerHTML = '<button type="button" class="btn btn-success" id="nine"><strong>線條</strong></button>　<button type="button" class="btn btn-success" id="ten">線條</button><br><button type="button" class="btn btn-success" id="eleven">線條</button>　<button type="button" class="btn btn-success" id="twelve">線條</button>';
      document.getElementById('btndiv03').innerHTML = '<button type="button" class="btn btn-success" onclick="btn03()" id="btn03">按此輸入答案</button>';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn03() { 
  document.getElementById("btn03").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "粗線條"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz03').innerHTML = '<h2>Q3、請問比喻一個人有著粗率的性格、作風或方法，且也可以比喻文章等粗略的構思或敘述的名詞叫做??</h2>';
      document.getElementById('nine').style.border = '4px red solid';
      document.getElementById('br03').innerHTML = '<hr class="my-4" style="clear:both;">';
      document.getElementById('btns04').innerHTML = '<button type="button" class="btn btn-danger" id="thirteen">帽子</button>　<button type="button" class="btn btn-primary" id="fourteen">帽子</button><br><button type="button" class="btn btn-warning" id="fifteen">帽子</button>　<button type="button" class="btn btn-success" id="sixteen">帽子</button>';
      document.getElementById('btndiv04').innerHTML = '<button type="button" class="btn btn-success" onclick="btn04()" id="btn04">按此輸入答案</button>';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn04() { 
  document.getElementById("btn04").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "綠帽子"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz04').innerHTML = '<h2>Q4、請問中國傳統文化典故裡的一約定成俗用語，通常描述夫妻之中女方和丈夫以外的其他男人發生性關係的一種對男性帶有侮辱性的稱謂叫做??</h2>';
      document.getElementById('sixteen').style.border = '4px red solid';
      document.getElementById('br04').innerHTML = '<hr class="my-4" style="clear:both;">';
      document.getElementById('btns05').innerHTML = '<button type="button" class="btn btn-success" id="seventeen">胃口</button>　<button type="button" class="btn btn-success" id="eighteen"><div style="transform: rotate(-270deg);">胃口</div></button><br><button type="button" class="btn btn-success" id="nineteen"><div style="transform: rotate(-90deg);">胃口</div></button>　<button type="button" class="btn btn-success" id="twenty"><div style="transform: rotate(-180deg);">胃口</div></button>';
      document.getElementById('btndiv05').innerHTML = '<button type="button" class="btn btn-success" onclick="btn05()" id="btn05">按此輸入答案</button>';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn05() { 
  document.getElementById("btn05").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "倒胃口"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz05').innerHTML = '<h2>Q5、請問本指吃多了、吃膩了或看到噁心的東西而沒有食慾，後用來比喻對事情沒有興趣而排斥的名詞叫做??</h2>';
      document.getElementById('twenty').style.border = '4px red solid';
      document.getElementById('br05').innerHTML = '<hr class="my-4" style="clear:both;">';
      document.getElementById('btns06').innerHTML = '<button type="button" class="btn btn-success" id="twenty-one">施</button><br><button type="button" class="btn btn-success" id="twenty-two">施</button>　<img src="06.png" height="40" width="40" id="img06">　<button type="button" class="btn btn-success" id="twenty-three">施</button><br><button type="button" class="btn btn-success" id="twenty-four">施</button>';
      document.getElementById('btndiv06').innerHTML = '<button type="button" class="btn btn-success" onclick="btn06()" id="btn06">按此輸入答案</button>';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn06() { 
  document.getElementById("btn06").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "西施"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz06').innerHTML = '<h2>Q6、請問誰是「沉魚落雁」中的「沉魚」，且是中國古代四大美女之一的人是誰??</h2>';
      document.getElementById('twenty-two').style.border = '4px red solid';
      document.getElementById('br06').innerHTML = '<hr class="my-4" style="clear:both;">';
      document.getElementById('btns07').innerHTML = '<div style="border:1px solid;"><br><br>　　　　　　　　　　　　　　　　　　　　　　　　　　<button type="button" class="btn btn-success" id="twenty-five">生物</button>　<button type="button" class="btn btn-success" id="twenty-six">生物</button><br>　　　　　　　　　　　　　　　　　　　　　　　　　　<button type="button" class="btn btn-success" id="twenty-seven">生物</button>　<button type="button" class="btn btn-success" id="twenty-eight">生物</button></div><br>';
      document.getElementById('btndiv07').innerHTML = '<button type="button" class="btn btn-success" onclick="btn07()" id="btn07">按此輸入答案</button>';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn07() { 
  document.getElementById("btn07").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "角落生物"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz07').innerHTML = '<h2>Q7、副標題為「這裡很放鬆」，且由日本企業San-X社員橫溝由里所創造出的擬人角色是??</h2>';
      document.getElementById('twenty-eight').style.border = '4px red solid';
      document.getElementById('br07').innerHTML = '<hr class="my-4" style="clear:both;">';
      document.getElementById('btns08').innerHTML = '<button type="button" class="btn btn-success" onclick="btn08_1()" id="btn08_1">陳昕</button>　<button type="button" class="btn btn-success" onclick="btn08_2()" id="btn08_2">陳昕</button><br><button type="button" class="btn btn-success" onclick="btn08_3()" id="btn08_3">陳昕</button>　<button type="button" class="btn btn-success" onclick="btn08_4()" id="btn08_4">陳昕</button>';
      document.getElementById('btndiv08').innerHTML = '<button type="button" class="btn btn-success" onclick="btn08()" id="btn08">按此輸入答案</button>';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn08_1() { 
  swal("生","","success");
}
function btn08_2() { 
  swal("日","","success");
}
function btn08_3() { 
  swal("快","","success");
}
function btn08_4() { 
  swal("樂","","success");
}
function btn08() { 
  document.getElementById("btn08").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "生日快樂"){
      swal("恭喜你答對了","","success");
      document.getElementById('quiz08').innerHTML = '<h2>Q8、請問下列四個按鈕中所隱藏的訊息是??</h2>';
      document.getElementById('btn08_1').style.border = '4px red solid';
      document.getElementById('btn08_2').style.border = '4px red solid';
      document.getElementById('btn08_3').style.border = '4px red solid';
      document.getElementById('btn08_4').style.border = '4px red solid';
      document.getElementById('btndiv08').innerHTML = '<img src="08.jpg" height="320">';
      document.getElementById('footer').style.visibility = 'visible';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}