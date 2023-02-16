//var sam;  나중에 쓸려고
        function result(){
            
            document.getElementById("result").style.display="inline"; 
        }
        
        function test() {
            
            document.getElementById("result").style.display="none";
            
            var x =  Math.floor(Math.random() * 52); // 0 ~ 51
            var x1, y1
            
            //if (x==sam) {  
               if(x==0){
                   x=x+1;
               } else {
                  x=x-1;
               } 
            //} 
            if (x==0) {
                x1="甲己"
                y1="土 (천간합, 부부합)"
            } else if (x==1){
                x1="乙庚"
                y1="金 (천간합, 부부합)"
            } else if (x==2){
                x1="丙辛"
                y1="水 (천간합, 부부합)"
            } else if (x==3){
                x1="丁壬"  
                y1="木 (천간합, 부부합)"
            } else if (x==4){
                x1="戊癸"  
                y1="火 (천간합, 부부합)"
            } else if (x==5){
                x1="甲庚" 
                y1="沖 (천간충, 칠살)"
            } else if (x==6){
                x1="乙辛" 
                y1="沖 (천간충, 칠살)"
            } else if (x==7){
                x1="丙壬" 
                y1="沖 (천간충, 칠살)"
            } else if (x==8){
                x1="丁癸"
                y1="沖 (천간충, 칠살)"
            } else if (x==9){
                x1="子丑" 
                y1="土 (육합,극합)"
            } else if (x==10){
                x1="寅亥" 
                y1="木 (육합,생합),   破"
            } else if (x==11){
                x1="戌卯" 
                y1="火 (육합,극합) "
            } else if (x==12){
                x1="辰酉" 
                y1="金 (육합,생합) "
            } else if (x==13){
                x1="申巳" 
                y1="水 (육합,극합), 破, 刑(寅申巳)"
            } else if (x==14){
                x1="午未" 
                y1="水 (육합,생합)"
            } else if (x==15){
                x1="寅申" 
                y1="沖 (지장간충), 刑 (寅申巳)"
            } else if (x==16){
                x1="巳亥" 
                y1="沖 (지장간충)"
            } else if (x==17){
                x1="子午" 
                y1="沖 (지장간충)"
            } else if (x==18){
                x1="卯酉" 
                y1="沖 (지장간충)"
            } else if (x==19){
                x1="辰戌" 
                y1="沖 (지장간충)"
            } else if (x==20){
                x1="丑未" 
                y1="沖 (지장간충), 丑戌未(刑)"
            } else if (x==21){
                x1="亥卯未" 
                y1="木 (삼합, 사회합)"
            } else if (x==22){
                x1="寅午戌" 
                y1="火 (삼합, 사회합)"
            } else if (x==23){
                x1="巳酉丑" 
                y1="金 (삼합, 사회합)"
            } else if (x==24){
                x1="申子辰" 
                y1="水 (삼합, 사회합)"
            } else if (x==25){
                x1="寅卯辰" 
                y1="木 (방합, 계절합)"
            } else if (x==26){
                x1="巳午未" 
                y1="火 (방합, 계절합)"
            } else if (x==27){
                x1="申酉戌" 
                y1="金 (방합, 계절합)"
            } else if (x==28){
                x1="亥子丑 " 
                y1="水 (방합, 계절합)"
            } else if (x==29){
                x1="寅申巳 " 
                y1="刑 (寅申충, 寅巳해, 申巳파)"
            } else if (x==30){
                x1="戌丑未 " 
                y1="刑 (丑未충, 戌未파)"
            } else if (x==31){
                x1="子卯 " 
                y1="刑"
            } else if (x==32){
                x1="辰辰 " 
                y1="刑"
            } else if (x==33){
                x1="午午 " 
                y1="刑"
            } else if (x==34){
                x1="酉酉 " 
                y1="刑"
            } else if (x==35){
                x1="亥亥 " 
                y1="刑"
            } else if (x==36){
                x1="辰亥" 
                y1="怨嗔,귀문"
            } else if (x==37){
                x1="戌未" 
                y1="刑, 破"
            } else if (x==38){
                x1="子酉" 
                y1="破, 鬼門"
            } else if (x==39){
                x1="午卯" 
                y1="破"
            } else if (x==40){
                x1="辰丑" 
                y1="破"
            } else if (x==41){
                x1="寅未" 
                y1="鬼門"
            } else if (x==42){
                x1="寅巳" 
                y1="刑, 害"
            } else if (x==43){
                x1="申亥" 
                y1="害"
            } else if (x==44){
                x1="子未" 
                y1="害, 怨嗔"
            } else if (x==45){
                x1="卯辰" 
                y1="害"
            } else if (x==46){
                x1="丑午" 
                y1="害, 귀문, 원진"
            } else if (x==47){
                x1="酉戌" 
                y1="害"
            } else if (x==48){
                x1="寅酉" 
                y1="怨嗔"
            } else if (x==49){
                x1="卯申" 
                y1="怨嗔, 귀문"
            } else if (x==50){
                x1="巳戌" 
                y1="怨嗔,귀문"
            } else if (x==51){
                x1="丑戌" 
                y1="刑- 축술미"
            }
                
            
            
            //sam=x;
            document.getElementById("check").innerHTML = x1;
            document.getElementById("result").innerHTML = y1;
            
        }
        