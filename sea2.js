var sam;
        function result1(){
            
            document.getElementById("result1").style.display="inline"; 
        }
        function result2(){
            
            document.getElementById("result2").style.display="inline"; 
        }
        function test() {
            
            document.getElementById("result1").style.display="none";
            document.getElementById("result2").style.display="none";
            var x =  Math.floor(Math.random() * 12); // 0 ~ 11
            var x1, y, y1
            if (x==sam) {
               if(x==0){
                   x=x+1;
               } else {
                  x=x-1;
               } 
            } 
            if (x==0) {
                x1="子"
                y="大雪  (12/7)"
                y1="冬至  (12/21)"
            } else if (x==1){
                x1="丑"
                y="小寒  (1/5)"
                y1="大寒  (1/20)"
            } else if (x==2){
                x1="寅"
                y="立春  (2/4)"
                y1="雨水  (2/18)"
            } else if (x==3){
                x1="卯"  
                y="驚蟄  (3/5)"
                y1="春分  (3/20)"
            } else if (x==4){
                x1="辰"  
                y="淸明  (4/4)"
                y1="穀雨  (4/20)"
            } else if (x==5){
                x1="巳" 
                y="立夏  (5/5)"
                y1="小滿  (5/21)"
            } else if (x==6){
                x1="午" 
                y="芒種  (6/5)"
                y1="夏至  (6/21)"
            } else if (x==7){
                x1="未" 
                y="小暑  (7/7)"
                y1="大暑  (7/22)"
            } else if (x==8){
                x1="申"
                y="立秋  (8/7)"
                y1="處暑  (8/23)"
            } else if (x==9){
                x1="酉" 
                y="白露  (9/7)"
                y1="秋分  (9/23)"
            } else if (x==10){
                x1="戌" 
                y="寒露  (10/8)"
                y1="霜降  (10/23)"
            } else if (x==11){
                x1="亥" 
                y="立冬  (11/7)"
                y1="小雪  (11/22)"
            }
            sam=x;
            document.getElementById("check").innerHTML = x1;
            document.getElementById("result1").innerHTML = y;
            document.getElementById("result2").innerHTML = y1;
        }
        