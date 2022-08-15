var sam;
        function result1(){  
            document.getElementById("result1").style.display="inline"; 
        }
        function result2(){  
            document.getElementById("result2").style.display="inline"; 
        }
        function result3(){  
            var y3, y4;
            var kon3 = document.getElementById("result3");
            if(kon3.style.display=='inline'){
                kon3.style.display = 'none';
            }else{
                kon3.style.display = 'inline';
            }
            var kon4 = document.getElementById("result4");
            if(kon4.style.display=='inline'){
                kon4.style.display = 'none';
            }else{
                kon4.style.display = 'inline';
            }
            y3="壬子癸 丑艮寅 甲卯乙 辰巽巳"
            y4="丙午丁 未坤申 庚酉辛 戌乾亥"
            document.getElementById("result3").innerHTML = y3;
            document.getElementById("result4").innerHTML = y4;
             
        }
        function result4(){  
            var y5, y6;
            var kon5 = document.getElementById("result5");
            if(kon5.style.display=='inline'){
                kon5.style.display = 'none';
            }else{
                kon5.style.display = 'inline';
            }
            var kon6 = document.getElementById("result6");
            if(kon6.style.display=='inline'){
                kon6.style.display = 'none';
            }else{
                kon6.style.display = 'inline';
            }
            y5="임자계 축간인 갑묘을 진손사"
            y6="병오정 미곤신 경유신 술건해"  
            document.getElementById("result5").innerHTML = y5;
            document.getElementById("result6").innerHTML = y6;
        }
        
        function test() {
            
            document.getElementById("result1").style.display="none";
            document.getElementById("result2").style.display="none";
            var x =  Math.floor(Math.random() * 13); // 0 ~ 12
            var x1, y1, y2; 
            
            if (x==sam) {
               if(x==0){
                   x=x+1;
               } else {
                  x=x-1;
               } 
            } 
           
            if (x==0) {
                x1="乾甲丁"
                y1="木   쌍산오행"
                y2="쌍산배합"
            } else if (x==1){
                x1="丁未 坤申 庚酉"
                y1="木   사국오행"
                y2="수구기준 사국결정"
            } else if (x==2){
                x1="乾坤艮巽"
                y1="木   성수오행"
                y2="좌와 사격의 길흉관계"  
            } else if (x==3){
                x1="艮丙辛"
                y1="火   쌍산오행"
                y2="쌍산배합"
            } else if (x==4){
                x1="辛戌 乾亥 壬子"
                y1="火  사국오행"
                y2="수구기준 사국결정"
            } else if (x==5){
                x1="甲庚丙壬 子午卯酉"
                y1="火 성수오행"
                y2="좌와 사격의 길흉관계"
            } else if (x==6){
                x1="巽庚癸"
                y1="金   쌍산오행"
                y2="쌍산배합"
            } else if (x==7){
                x1="癸丑 艮寅 甲卯"
                y1="金   사국오행"
                y2="수구기준 사국결정"
            } else if (x==8){
                x1="辰戌丑未"
                y1="金   성수오행"
                y2="좌와 사격의 길흉관계"
            } else if (x==9){
                x1="坤壬乙 (곤임을)"  
                y1="水    쌍산오행"
                y2="쌍산배합"
            } else if (x==10){
                x1="乙辰 巽巳 丙午"  
                y1="水    사국오행"
                y2="수구기준 사국결정"
            } else if (x==11){
                x1="寅申巳亥"  
                y1="水    성수오행"
                y2="좌와 사격의 길흉관계"
            } else if (x==12){
                x1="乙辛丁癸"  
                y1="土   성수오행"
                y2="좌와 사격의 길흉관계"
            }
            
            
            document.getElementById("check").innerHTML = x1;
            document.getElementById("result1").innerHTML = y1;
            document.getElementById("result2").innerHTML = y2;
                  
            sam=x
        }