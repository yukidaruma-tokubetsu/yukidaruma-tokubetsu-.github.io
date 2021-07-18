function btn01() { 
  document.getElementById("btn01").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "第2名" || value == "第二名" || value == "2" || value == "二"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes01').innerHTML = '答案：第二名';
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
    if (value == "243" || value == "27"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes02').innerHTML = '答案：243或27<br>243，以順時鐘方向來看，兩兩數字相乘，即會得到下一個數字；1x3=3、3x3=9、3x9=27、9x27=243。<br>27，每個數字和對面的數字比為1:9';
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
    if (value == "7" || value == "7根"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes03').innerHTML = '答案：7根<br>因為蠟燭被吹滅但沒有不見，被吹滅的總共有7根蠟燭，剩下3根燃燒殆盡之後不見了，所以還有7根熄滅的蠟燭';
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
    if (value == "14"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes04').innerHTML = '答案：14<br>蘋果=10，4根香蕉=4，1根香蕉=1、2顆椰子=2，1顆椰子=1，1顆椰子+1顆蘋果+3根香蕉=14';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn05_1(){
    swal("不好意思你答錯了","","error");
}
function btn05_2(){
    swal("恭喜你答對了","","success");
    var block = document.getElementById('btn05-1');
    block.style.visibility = 'hidden';
    var block = document.getElementById('btn05-3');
    block.style.visibility = 'hidden';
    var block = document.getElementById('btn05-4');
    block.style.visibility = 'hidden';
}
function btn06() { 
  document.getElementById("btn06").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "0.05" || value == "0.05元"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes06').innerHTML = '答案：0.05<br>假設橡皮擦是x，鉛筆就是x+1，x+1+x=1.1，2x=0.1，x=0.05';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn07_1(){
    swal("恭喜你答對了","","success");
}
function btn07_2(){
    swal("恭喜你答對了","","success");
    var block = document.getElementById('btn07-1');
    block.style.visibility = 'hidden';
    var block = document.getElementById('btn07-2');
    block.style.visibility = 'hidden';
    var block = document.getElementById('btn07-4');
    block.style.visibility = 'hidden';
}
function btn08() { 
  document.getElementById("btn08").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "10"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes08').innerHTML = '答案：10<br>3+5=8，2+20=22，6+4=10';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn09() { 
  document.getElementById("btn09").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "9" || value == "9隻"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes09').innerHTML = '答案：9隻';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn10() { 
  document.getElementById("btn10").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "銀盒"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes10').innerHTML = '答案：銀盒<br>銀盒->真話，金盒->假話，鉛盒->假話';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn11() { 
  document.getElementById("btn11").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "2塊錢"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes11').innerHTML = '答案：2塊錢';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}
function btn12() { 
  document.getElementById("btn12").addEventListener("click",function(){
  swal("請輸入答案", {
    content: "input",
  })
  .then((value) => {
    if (value == "35122"){
      swal("恭喜你答對了","","success");
      document.getElementById('Yes12').innerHTML = '答案：35122<br>8+2=16106(8x2=16、8+2=10、8-2=6)<br>5+4=2091(5x4=20、5+4=9、5-4=1)<br>9+6=54153(9x6=54、9+6=15、9-6=3)<br>7+5=35122(7x5=35、7+5=12、7-5=2)';
    }else if(value == ""){
      swal("答案不能為空白","","warning");
    }else{
      swal("不好意思你答錯了","","error");
    }
  });
});
}