var sam1, sam2;   
function check() {
   document.getElementById("check").style.display="inline";
   document.getElementById("limit").style.display="inline";
}
function test() {
   document.getElementById("check").style.display="none";
   document.getElementById("limit").style.display="none";
  var x =  Math.floor(Math.random() * 10); // 0 ~ 9
  var y =  Math.floor(Math.random() * 12); // 0 ~ 9
  var x1, y1, z
  if (x==sam1) {
      if(x==0){
         x=x+1;
      } else {
         x=x-1;
      } 
  } 
  if (y==sam2) {
      if(y==0){
         y=y+1;
      } else {
         y=y-1;
      } 
  } 
  if (x==0) {   //10천간
     x1="甲"
  } else if (x==1){
     x1="乙"
  } else if (x==2){
     x1="丙"
  } else if (x==3){
     x1="丁"  
  } else if (x==4){
     x1="戊"  
  } else if (x==5){
     x1="己" 
  } else if (x==6){
     x1="庚" 
  } else if (x==7){
     x1="辛" 
  } else if (x==8){
     x1="壬"
  } else if (x==9){
     x1="癸" 
  }

  if (y==0) {
     y1="地殺"
     lm="長生"
  } else if (y==1){
     y1="年殺"
     lm="沐浴"
  } else if (y==2){
     y1="月殺"
     lm="冠帶"
  } else if (y==3){
     y1="亡身" 
     lm="建祿" 
  } else if (y==4){
     y1="帝旺"  
     lm="將星"
  } else if (y==5){
     y1="攀鞍" 
     lm="衰"
  } else if (y==6){
     y1="驛馬"
     lm="病" 
  } else if (y==7){
     y1="六害" 
     lm="死"
  } else if (y==8){
     y1="華蓋"
     lm="墓"
  } else if (y==9){
     y1="劫殺" 
     lm="絶"   
  } else if (y==10){
     y1="災殺"  
     lm="胎" 
  } else if (y==11){
     y1="天殺"
     lm="養"
  }  
  
  if (x==0)  //甲
     { if (y==0) {
            z="亥"
         } else if (y==1){
            z="子"
         } else if (y==2){
            z="丑"
         } else if (y==3){
            z="寅"  
         } else if (y==4){
            z="卯"  
         } else if (y==5){
            z="辰" 
         } else if (y==6){
            z="巳" 
         } else if (y==7){
            z="午" 
         } else if (y==8){
            z="未"
         } else if (y==9){
            z="申"     
         } else if (y==10){
            z="酉"   
         } else if (y==11){
            z="戌"
         }  
  } else if (x==1){  //乙
      if (y==0) {
            z="午"
         } else if (y==1){
            z="巳"
         } else if (y==2){
            z="辰"
         } else if (y==3){
            z="卯"  
         } else if (y==4){
            z="寅"  
         } else if (y==5){
            z="丑" 
         } else if (y==6){
            z="子" 
         } else if (y==7){
            z="亥" 
         } else if (y==8){
            z="戌"
         } else if (y==9){
            z="酉"     
         } else if (y==10){
            z="申"   
         } else if (y==11){
            z="未"
         }  
  } else if (x==2){  //丙
      if (y==0) {
            z="寅"
         } else if (y==1){
            z="卯"
         } else if (y==2){
            z="辰"
         } else if (y==3){
            z="巳"  
         } else if (y==4){
            z="午"  
         } else if (y==5){
            z="未" 
         } else if (y==6){
            z="申" 
         } else if (y==7){
            z="酉" 
         } else if (y==8){
            z="戌"
         } else if (y==9){
            z="亥"     
         } else if (y==10){
            z="子"   
         } else if (y==11){
            z="丑"
         }  
  } else if (x==3){   //丁
      if (y==0) {
            z="酉"
         } else if (y==1){
            z="申"
         } else if (y==2){
            z="未"
         } else if (y==3){
            z="午"  
         } else if (y==4){
            z="巳"  
         } else if (y==5){
            z="辰" 
         } else if (y==6){
            z="卯" 
         } else if (y==7){
            z="寅" 
         } else if (y==8){
            z="丑"
         } else if (y==9){
            z="子"     
         } else if (y==10){
            z="亥"   
         } else if (y==11){
            z="戌"
         }  
  } else if (x==4){ //戊
      if (y==0) {
         z="寅"
         } else if (y==1){
            z="卯"
         } else if (y==2){
            z="辰"
         } else if (y==3){
            z="巳"  
         } else if (y==4){
            z="午"  
         } else if (y==5){
            z="未" 
         } else if (y==6){
            z="申" 
         } else if (y==7){
            z="酉" 
         } else if (y==8){
            z="戌"
         } else if (y==9){
            z="亥"     
         } else if (y==10){
            z="子"   
         } else if (y==11){
            z="丑"
         }  
  } else if (x==5){  //己
      if (y==0) {
         z="酉"
         } else if (y==1){
            z="申"
         } else if (y==2){
            z="未"
         } else if (y==3){
            z="午"  
         } else if (y==4){
            z="巳"  
         } else if (y==5){
            z="辰" 
         } else if (y==6){
            z="卯" 
         } else if (y==7){
            z="寅" 
         } else if (y==8){
            z="丑"
         } else if (y==9){
            z="子"     
         } else if (y==10){
            z="亥"   
         } else if (y==11){
            z="戌"
         }  
  } else if (x==6){  //庚
      if (y==0) {
            z="巳"
         } else if (y==1){
            z="午"
         } else if (y==2){
            z="未"
         } else if (y==3){
            z="申"  
         } else if (y==4){
            z="酉"  
         } else if (y==5){
            z="戌" 
         } else if (y==6){
            z="亥" 
         } else if (y==7){
            z="子" 
         } else if (y==8){
            z="丑"
         } else if (y==9){
            z="寅"     
         } else if (y==10){
            z="卯"   
         } else if (y==11){
            z="辰"
         }   
  } else if (x==7){  //辛
       if (y==0) {
            z="子"
         } else if (y==1){
            z="亥"
         } else if (y==2){
            z="戌"
         } else if (y==3){
            z="酉"  
         } else if (y==4){
            z="申"  
         } else if (y==5){
            z="未" 
         } else if (y==6){
            z="午" 
         } else if (y==7){
            z="巳" 
         } else if (y==8){
            z="辰"
         } else if (y==9){
            z="卯"     
         } else if (y==10){
            z="寅"   
         } else if (y==11){
            z="丑"
         }   
  } else if (x==8){  //壬
      if (y==0) {
            z="申"
         } else if (y==1){
            z="酉"
         } else if (y==2){
            z="戌"
         } else if (y==3){
            z="亥"  
         } else if (y==4){
            z="子"  
         } else if (y==5){
            z="丑" 
         } else if (y==6){
            z="寅" 
         } else if (y==7){
            z="卯" 
         } else if (y==8){
            z="辰"
         } else if (y==9){
            z="巳"     
         } else if (y==10){
            z="午"   
         } else if (y==11){
            z="未"
         }  
  } else if (x==9){  //癸
      if (y==0) {    
            z="卯"
         } else if (y==1){
            z="寅"
         } else if (y==2){
            z="丑"
         } else if (y==3){
            z="子"  
         } else if (y==4){
            z="亥"  
         } else if (y==5){
            z="戌" 
         } else if (y==6){
            z="酉" 
         } else if (y==7){
            z="申" 
         } else if (y==8){
            z="未"
         } else if (y==9){
            z="午"     
         } else if (y==10){
            z="巳"   
         } else if (y==11){
            z="辰"
         }  
  }
  sam1=x;
  sam2=y;
  document.getElementById("sky").innerHTML = x1;
  document.getElementById("lucky").innerHTML = y1;
  document.getElementById("check").innerHTML = z;
  document.getElementById("limit").innerHTML = lm;
}
