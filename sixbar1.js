var sam;
function result(){
    
    document.getElementById("result").style.display="inline"; 
   
}
function test() {
    
    document.getElementById("result").style.display="none";
    document.getElementById("hint1").style.display="none";
    document.getElementById("hint2").style.display="none";
    
    var x =  Math.floor(Math.random() * 8); // 0 ~ 7
    var x1, y, y1
    /*if (x==sam) {
       if(x==0){
           x=x+1;
       } else {
          x=x-1;
       } 
    }*/ 
    if (x==0) {
        x1="乾金"
        y="子"
        y1="子寅辰午申戌"
        y2="甲子"
    } else if (x==1){
        x1="兌金"
        y="巳"
        y1="巳卯丑亥酉未"
        y2="丁巳"
    } else if (x==2){
        x1="離火"
        y="卯" 
        y1="卯丑亥酉未巳"  
        y2="己卯" 
    } else if (x==3){
        x1="震木"  
        y="子"
        y1="子寅辰午申戌"
        y2="庚子"
    } else if (x==4){
        x1="巽木"  
        y="丑"
        y1="丑亥酉未巳卯"
        y2="辛丑"
    } else if (x==5){
        x1="坎水" 
        y="寅"
        y1="寅辰午申戌子"
        y2="戊寅"
    } else if (x==6){
        x1="艮土" 
        y="辰"
        y1="辰午申戌子寅"
        y2="丙辰"
    } else if (x==7){
        x1="坤土" 
        y="未"
        y1="未巳卯丑亥酉"
        y2="乙未"
    } 
    sam=x;
    document.getElementById("check").innerHTML = x1;
    document.getElementById("result").innerHTML = y;
    document.getElementById("hint1").innerHTML = y1;
    document.getElementById("hint2").innerHTML = y2;
}