var sam3, sam4;
   function check1() {
      document.getElementById("check1").style.display="inline";
      document.getElementById("limit1").style.display="inline";
   }
   function test1() {
      document.getElementById("check1").style.display="none";
      document.getElementById("limit1").style.display="none";
     var x2 =  Math.floor(Math.random() * 10); // 0 ~ 9
     var y2 =  Math.floor(Math.random() * 12); // 0 ~ 11
     var x3, y3, z1
     if (x2==sam3) {
      if(x2==0){
         x2=x2+1;
      } else {
         x2=x2-1;
      } 
     } 
     if (y2==sam4) {
      if(y2==0){
         y2=y2+1;
      } else {
         y2=y2-1;
      } 
     } 
     if (x2==0) {
        x3="甲"
     } else if (x2==1){
        x3="乙"
     } else if (x2==2){
        x3="丙"
     } else if (x2==3){
        x3="丁"  
     } else if (x2==4){
        x3="戊"  
     } else if (x2==5){
        x3="己" 
     } else if (x2==6){
        x3="庚" 
     } else if (x2==7){
        x3="辛" 
     } else if (x2==8){
        x3="壬"
     } else if (x2==9){
        x3="癸" 
     }
   
     if (y2==0) {
        y3="亥"
     } else if (y2==1){
        y3="子"
     } else if (y2==2){
        y3="丑"
     } else if (y2==3){
        y3="寅"  
     } else if (y2==4){
        y3="卯"  
     } else if (y2==5){
        y3="辰" 
     } else if (y2==6){
        y3="巳" 
     } else if (y2==7){
        y3="午" 
     } else if (y2==8){
        y3="未"
     } else if (y2==9){
        y3="申"     
     } else if (y2==10){
        y3="酉"   
     } else if (y2==11){
        y3="戌"
     }  
   
     if (x2==0)  {//甲
        if (y2==0) {   //亥
               z1="長生"
               lm1="地殺"
            } else if (y2==1){
               z1="沐浴"
               lm1="年殺"
            } else if (y2==2){
               z1="冠帶"
               lm1="月殺"
            } else if (y2==3){
               z1="建祿" 
               lm1="亡身"  
            } else if (y2==4){
               z1="帝旺"  
               lm1="將星"
            } else if (y2==5){
               z1="衰" 
               lm1="攀鞍"
            } else if (y2==6){
               z1="病" 
               lm1="驛馬"
            } else if (y2==7){
               z1="死"
               lm1="六害" 
            } else if (y2==8){
               z1="墓"
               lm1="華蓋"
            } else if (y2==9){
               z1="絶" 
               lm1="劫殺"    
            } else if (y2==10){
               z1="胎" 
               lm1="災殺"  
            } else if (y2==11){
               z1="養"
               lm1="天殺"
            }  
      } else if (x2==1){  //乙
         if (y2==0) {  //亥
               z1="死"
               lm1="六害"
            } else if (y2==1){  //子
               z1="病"
               lm1="驛馬"
            } else if (y2==2){  //丑
               z1="衰"
               lm1="攀鞍"
            } else if (y2==3){
               z1="帝旺"  
               lm1="將星"
            } else if (y2==4){
               z1="建祿"  
               lm1="亡身" 
            } else if (y2==5){
               z1="冠帶" 
               lm1="月殺"
            } else if (y2==6){
               z1="沐浴" 
               lm1="年殺"
            } else if (y2==7){
               z1="長生" 
               lm1="地殺"
            } else if (y2==8){
               z1="養"
               lm1="天殺"
            } else if (y2==9){
               z1="胎" 
               lm1="災殺"    
            } else if (y2==10){
               z1="絶"  
               lm1="劫殺" 
            } else if (y2==11){
               z1="墓"
               lm1="華蓋"
            }  
      } else if (x2==2){  //丙
         if (y2==0) {   //亥
               z1="絶" 
               lm1="劫殺"  
            } else if (y2==1){  //子
               z1="胎"
               lm1="災殺"  
            } else if (y2==2){  //丑
               z1="養"
               lm1="天殺"
            } else if (y2==3){
               z1="長生" 
               lm1="地殺" 
            } else if (y2==4){
               z1="沐浴" 
               lm1="年殺" 
            } else if (y2==5){
               z1="冠帶" 
               lm1="月殺"
            } else if (y2==6){
               z1="建祿" 
               lm1="亡身" 
            } else if (y2==7){
               z1="帝旺" 
               lm1="將星"
            } else if (y2==8){
               z1="衰"
               lm1="攀鞍"
            } else if (y2==9){
               z1="病"  
               lm1="驛馬"   
            } else if (y2==10){
               z1="死"   
               lm1="六害"
            } else if (y2==11){
               z1="墓"
               lm1="華蓋"
            }  
      } else if (x2==3){   //丁
         if (y2==0) {  //亥
               z1="胎" 
               lm1="災殺"  
            } else if (y2==1){  //子
               z1="絶" 
               lm1="劫殺" 
            } else if (y2==2){  //丑
               z1="墓"
               lm1="華蓋"
            } else if (y2==3){
               z1="死" 
               lm1="六害" 
            } else if (y2==4){
               z1="病"  
               lm1="驛馬"
            } else if (y2==5){
               z1="衰" 
               lm1="攀鞍"
            } else if (y2==6){
               z1="帝旺" 
               lm1="將星"
            } else if (y2==7){
               z1="建祿" 
               lm1="亡身" 
            } else if (y2==8){
               z1="冠帶"
               lm1="月殺"
            } else if (y2==9){
               z1="沐浴" 
               lm1="年殺"    
            } else if (y2==10){
               z1="長生" 
               lm1="地殺"  
            } else if (y2==11){
               z1="養"
               lm1="天殺"
            }  
      } else if (x2==4){ //戊
         if (y2==0) {   //亥
               z1="絶"   
               lm1="劫殺"
            } else if (y2==1){  //子
               z1="胎" 
               lm1="災殺" 
            } else if (y2==2){  //丑
               z1="養"
               lm1="天殺"
            } else if (y2==3){
               z1="長生" 
               lm1="地殺" 
            } else if (y2==4){
               z1="沐浴"  
               lm1="年殺"
            } else if (y2==5){
               z1="冠帶" 
               lm1="月殺"
            } else if (y2==6){
               z1="建祿" 
               lm1="亡身" 
            } else if (y2==7){
               z1="帝旺" 
               lm1="將星"
            } else if (y2==8){
               z1="衰"
               lm1="攀鞍"
            } else if (y2==9){
               z1="病"     
               lm1="驛馬"
            } else if (y2==10){
               z1="死"  
               lm1="六害" 
            } else if (y2==11){
               z1="墓"
               lm1="華蓋"
            }  
     } else if (x2==5){  //己
         if (y2==0) {  //亥
               z1="胎"  
               lm1="災殺" 
            } else if (y2==1){  //子
               z1="絶" 
               lm1="劫殺" 
            } else if (y2==2){  //丑
               z1="墓"
               lm1="華蓋"
            } else if (y2==3){
               z1="死"  
               lm1="六害"
            } else if (y2==4){
               z1="病" 
               lm1="驛馬" 
            } else if (y2==5){
               z1="衰" 
               lm1="攀鞍"
            } else if (y2==6){
               z1="帝旺" 
               lm1="將星"
            } else if (y2==7){
               z1="建祿" 
               lm1="亡身" 
            } else if (y2==8){
               z1="冠帶"
               lm1="月殺"
            } else if (y2==9){
               z1="沐浴"   
               lm1="年殺"  
            } else if (y2==10){
               z1="長生"   
               lm1="地殺"
            } else if (y2==11){
               z1="養"
               lm1="天殺"
            }  
     } else if (x2==6){  //庚
         if (y2==0) {   //亥
               z1="病"  
               lm1="驛馬" 
            } else if (y2==1){  //子
               z1="死" 
               lm1="六害" 
            } else if (y2==2){  //丑
               z1="墓"
               lm1="華蓋"
            } else if (y2==3){
               z1="絶"  
               lm1="劫殺"
            } else if (y2==4){
               z1="胎" 
               lm1="災殺" 
            } else if (y2==5){
               z1="養" 
               lm1="天殺"
            } else if (y2==6){
               z1="長生" 
               lm1="地殺"
            } else if (y2==7){
               z1="沐浴"
               lm1="年殺"
            } else if (y2==8){
               z1="冠帶"
               lm1="月殺"
            } else if (y2==9){
               z1="建祿" 
               lm1="亡身"     
            } else if (y2==10){
               z1="帝旺"  
               lm1="將星" 
            } else if (y2==11){
               z1="衰"
               lm1="攀鞍"
            }  
     } else if (x2==7){  //辛
      if (y2==0) {   //亥
               z1="沐浴"  
               lm1="年殺" 
            } else if (y2==1){  //子
               z1="長生"  
               lm1="地殺"
            } else if (y2==2){  //丑
               z1="養"
               lm1="天殺"
            } else if (y2==3){
               z1="胎"  
               lm1="災殺"
            } else if (y2==4){
               z1="絶"  
               lm1="劫殺"
            } else if (y2==5){
               z1="墓" 
               lm1="華蓋"
            } else if (y2==6){
               z1="死" 
               lm1="六害"
            } else if (y2==7){
               z1="病" 
               lm1="驛馬"
            } else if (y2==8){
               z1="衰"
               lm1="攀鞍"
            } else if (y2==9){
               z1="帝旺"   
               lm1="將星"  
            } else if (y2==10){
               z1="建祿" 
               lm1="亡身"   
            } else if (y2==11){
               z1="冠帶"
               lm1="月殺"
            }  
     } else if (x2==8){  //壬
         if (y2==0) {   //亥
               z1="建祿"  
               lm1="亡身"  
            } else if (y2==1){  //子
               z1="帝旺"
               lm1="將星"  
            } else if (y2==2){  //丑
               z1="衰"
               lm1="攀鞍"
            } else if (y2==3){
               z1="病"  
               lm1="驛馬"
            } else if (y2==4){
               z1="死" 
               lm1="六害" 
            } else if (y2==5){
               z1="墓" 
               lm1="華蓋"
            } else if (y2==6){
               z1="絶" 
               lm1="劫殺"
            } else if (y2==7){
               z1="胎" 
               lm1="災殺"
            } else if (y2==8){
               z1="養"
               lm1="天殺"
            } else if (y2==9){
               z1="長生"   
               lm1="地殺"  
            } else if (y2==10){
               z1="沐浴" 
               lm1="年殺"  
            } else if (y2==11){
               z1="冠帶"
               lm1="月殺"
            }  
     } else if (x2==9){  //癸
         if (y2==0) {   //亥
               z1="帝旺" 
               lm1="將星"  
            } else if (y2==1){  //子
               z1="建祿"  
               lm1="亡身" 
            } else if (y2==2){  //丑
               z1="冠帶"
               lm1="月殺"
            } else if (y2==3){
               z1="沐浴" 
               lm1="年殺" 
            } else if (y2==4){
               z1="長生" 
               lm1="地殺" 
            } else if (y2==5){
               z1="養" 
               lm1="天殺"
            } else if (y2==6){
               z1="胎" 
               lm1="災殺"
            } else if (y2==7){
               z1="絶" 
               lm1="劫殺"
            } else if (y2==8){
               z1="墓"
               lm1="華蓋"
            } else if (y2==9){
               z1="死" 
               lm1="六害"    
            } else if (y2==10){
               z1="病" 
               lm1="驛馬"  
            } else if (y2==11){
               z1="衰"
               lm1="攀鞍"
            }  
     }
     sam3=x2;
     sam4=y2;
      //document.write(z1); 
     document.getElementById("sky1").innerHTML = x3;
     document.getElementById("lucky1").innerHTML = y3;
     document.getElementById("check1").innerHTML = z1;
     document.getElementById("limit1").innerHTML = lm1;
     
   }
    