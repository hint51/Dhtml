var sam;
function result(){
    
    document.getElementById("result").style.display="inline"; 
}

function test() {
    
    document.getElementById("result").style.display="none";
    
    var x =  Math.floor(Math.random() * 12); // 0 ~ 11
    var x1, y1
    if (x==sam) {
       if(x==0){
           x=x+1;
       } else {
          x=x-1;
       } 
    } 
    if (x==0) {
        x1="子"
        y1="壬(10)       癸(20)"
    } else if (x==1){
        x1="丑"
        y1="癸(9)  辛(3)  己(18)"
    } else if (x==2){
        x1="寅"
        y1="戊(7)  丙(7)  甲(16)"
    } else if (x==3){
        x1="卯"  
        y1="甲(10)       乙(20)"
    } else if (x==4){
        x1="辰"  
        y1="乙(9)  癸(3)  戊(18)"
    } else if (x==5){
        x1="巳" 
        y1="戊(7)  庚(7)  丙(16)"
    } else if (x==6){
        x1="午" 
        y1="丙(10) 己(9)  丁(11)"
    } else if (x==7){
        x1="未" 
        y1="丁(9)  乙(3)  己(18)"
    } else if (x==8){
        x1="申"
        y1="戊(7)  壬(7)  庚(16)"
    } else if (x==9){
        x1="酉" 
        y1="庚(10)       辛(20)"
    } else if (x==10){
        x1="戌" 
        y1="辛(9)  丁(3)  戊(18)"
    } else if (x==11){
        x1="亥" 
        y1="戊(7)  甲(7)  壬(16)"
    }
    sam=x;
    document.getElementById("check").innerHTML = x1;
    document.getElementById("result").innerHTML = y1;
    
}