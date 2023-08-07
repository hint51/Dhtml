

function test() {
    
   document.getElementById("btn1").style.display="inline"
   document.getElementById("btn2").style.display="inline"
   document.getElementById("btn3").style.display="inline"
   document.getElementById("btn4").style.display="inline"
   document.getElementById("btn5").style.display="inline"
   document.getElementById("btn6").style.display="inline"
    var x =  Math.floor(Math.random() * 64); // 0 ~ 63
    var y
    if (x==0) {
      y="g1.png"
    } else if (x==1){
      y="g2.png"
    } else if (x==2){
      y="g3.png"
    } else if (x==3){
      y="g4.png"
    } else if (x==4){
      y="g5.png"
    } else if (x==5){
      y="g6.png"
    } else if (x==6){
      y="g7.png"
    } else if (x==7){
      y="g8.png"
    } else if (x==8){
      y="g9.png"
    } else if (x==9){
      y="g10.png"
    } else if (x==10){
      y="g11.png"
    } else if (x==11){
      y="g12.png"
    } else if (x==12){
      y="g13.png"
    } else if (x==13){
      y="g14.png"
    } else if (x==14){
      y="g15.png"
    } else if (x==15){
      y="g16.png"
    } else if (x==16){
      y="g17.png"
    } else if (x==17){
      y="g18.png"
    } else if (x==18){
      y="g19.png"
    } else if (x==19){
      y="g20.png"
    } else if (x==20){
      y="g21.png"
    } else if (x==21){
      y="g22.png"
    } else if (x==22){
      y="g23.png"
    } else if (x==23){
      y="g24.png"
    } else if (x==24){
      y="g25.png"
    } else if (x==25){
      y="g26.png"
    } else if (x==26){
      y="g27.png"
    } else if (x==27){
      y="g28.png"
    } else if (x==28){
      y="g29.png"
    } else if (x==29){
      y="g30.png"
    } else if (x==30){
      y="g31.png"
    } else if (x==31){
      y="g32.png"
    } else if (x==32){
      y="g33.png"
    } else if (x==33){
      y="g34.png"
    } else if (x==34){
      y="g35.png"
    } else if (x==35){
      y="g36.png"
    } else if (x==36){
      y="g37.png"
    } else if (x==37){
      y="g38.png"
    } else if (x==38){
      y="g39.png"
    } else if (x==39){
      y="g40.png"
    } else if (x==40){
      y="g41.png"
    } else if (x==41){
      y="g42.png"
    } else if (x==42){
      y="g43.png"
    } else if (x==43){
      y="g44.png"
    } else if (x==44){
      y="g45.png"
    } else if (x==45){
      y="g46.png"
    } else if (x==46){
      y="g47.png"
    } else if (x==47){
      y="g48.png"
    } else if (x==48){
      y="g49.png"
    } else if (x==49){
      y="g50.png"
    } else if (x==50){
      y="g51.png"
    } else if (x==51){
      y="g52.png"
    } else if (x==52){
      y="g53.png"
    } else if (x==53){
      y="g54.png"
    } else if (x==54){
      y="g55.png"
    } else if (x==55){
      y="g56.png"
    } else if (x==56){
      y="g57.png"
    } else if (x==57){
      y="g58.png"
    } else if (x==58){
      y="g59.png"
    } else if (x==59){
      y="g60.png"
    } else if (x==60){
      y="g61.png"
    } else if (x==61){
      y="g62.png"
    } else if (x==62){
      y="g63.png"
    } else if (x==63){
      y="g64.png"
    } 
   
    
    //document.getElementById("img1").innerHTML = y;
    document.getElementById("img1").src=y;
    
    
}
function result1() { 
   document.getElementById("btn1").style.display="none"
}
function result2() { 
   document.getElementById("btn2").style.display="none"
}
function result3() { 
   document.getElementById("btn3").style.display="none"
}
function result4() { 
   document.getElementById("btn4").style.display="none"
}
function result5() { 
   document.getElementById("btn5").style.display="none"
}
function result6() { 
   document.getElementById("btn6").style.display="none"
}


function btn_A() { 
      if(document.getElementById("btn_A").innerText=="전체보이기"){
       document.getElementById("btn_A").innerHTML="전체숨기기"
       document.getElementById("btn_A").style.background="right yellow"
       document.getElementById("btn1").style.display="none"
       document.getElementById("btn2").style.display="none"
       document.getElementById("btn3").style.display="none"
       document.getElementById("btn4").style.display="none"
       document.getElementById("btn5").style.display="none"
       document.getElementById("btn6").style.display="none"

    } else {
       document.getElementById("btn_A").innerHTML="전체보이기"
       document.getElementById("btn_A").style.background="antiquewhite"
       document.getElementById("btn1").style.display="inline"
       document.getElementById("btn2").style.display="inline"
       document.getElementById("btn3").style.display="inline"
       document.getElementById("btn4").style.display="inline"
       document.getElementById("btn5").style.display="inline"
       document.getElementById("btn6").style.display="inline"
       
    }
   
}
