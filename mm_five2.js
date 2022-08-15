
        var sam;
        function result1(){  
            document.getElementById("result1").style.display="inline"; 
        }
        function result2(){  
            document.getElementById("result2").style.display="inline"; 
        }
        function result3(){  
            document.getElementById("result3").style.display="inline"; 
        }
        function result4(){  
            document.getElementById("result4").style.display="inline"; 
        }
        function test() {
            
            document.getElementById("result1").style.display="none";
            document.getElementById("result2").style.display="none";
            document.getElementById("result3").style.display="none";
            document.getElementById("result4").style.display="none";
            var x =  Math.floor(Math.random() * 5); // 0 ~ 4
            var x1, y1, y2, y3, y4
            if (x==sam) {
               if(x==0){
                   x=x+1;
               } else {
                  x=x-1;
               } 
            } 
            if (x==0) {
                x1="木"
                y1="亥卯未 (해묘미)"
                y2="乾甲丁 (건갑정)"
                y3="丁未 坤申 庚酉"
                y4="乾坤艮巽 (건곤간손)"
            } else if (x==1){
                x1="火"
                y1="寅午戌 (인오술)"
                y2="艮丙辛 (간병신)"
                y3="辛戌 乾亥 壬子"
                y4="甲庚丙壬 子午卯酉"
            } else if (x==2){
                x1="金"
                y1="巳酉丑 (사유축)"
                y2="巽庚癸 (손경계)"
                y3="癸丑 艮寅 甲卯"
                y4="辰戌丑未 (진술축미)"
            } else if (x==3){
                x1="水"  
                y1="申子辰 (신자진)"
                y2="坤壬乙 (곤임을)"
                y3="乙辰 巽巳 丙午"
                y4="寅申巳亥 인신사해"
            } else if (x==4){
                x1="土"  
                y1="없음"
                y2="없음"
                y3="없음"
                y4="乙辛丁癸 (을신정계)"
            }
            sam=x;
            document.getElementById("check").innerHTML = x1;
            document.getElementById("result1").innerHTML = y1;
            document.getElementById("result2").innerHTML = y2;
            document.getElementById("result3").innerHTML = y3;
            document.getElementById("result4").innerHTML = y4;
            
            
        }