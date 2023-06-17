function result2(){
            
    document.getElementById("chk1").style.display="inline"; 
    document.getElementById("chk5").style.display="inline";
}
function test2(){
    document.getElementById("chk1").style.display="none";
    document.getElementById("chk5").style.display="none";
    //var xxx1 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xxx2 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var xxx3 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xxx4 =  Math.floor(Math.random() * 12); // 0 ~ 11
    //var xxx5 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xxx6 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var xxx7 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xxx8 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var yyy1, yyy2, yyy3, yyy4, yyy5, yyy6, yyy7, yyy8
    if (xxx2==0) {
        yyy2="子"
    } else if (xxx2==1){ 
        yyy2="丑"   
    } else if (xxx2==2){
        yyy2="寅"
    } else if (xxx2==3){
        yyy2="卯" 
    } else if (xxx2==4){
        yyy2="辰" 
    } else if (xxx2==5){
        yyy2="巳" 
    } else if (xxx2==6){
        yyy2="午" 
    } else if (xxx2==7){
        yyy2="未"
    } else if (xxx2==8){
        yyy2="申"
    } else if (xxx2==9){
        yyy2="酉"
    } else if (xxx2==10){
        yyy2="戌"
    } else if (xxx2==11){
        yyy2="亥"
    }
    if (xxx3==0) {
        yyy3="甲"
    } else if (xxx3==1){ 
        yyy3="乙"   
    } else if (xxx3==2){
        yyy3="丙"
    } else if (xxx3==3){
        yyy3="丁" 
    } else if (xxx3==4){
        yyy3="戊" 
    } else if (xxx3==5){
        yyy3="己" 
    } else if (xxx3==6){
        yyy3="庚" 
    } else if (xxx3==7){
        yyy3="辛"
    } else if (xxx3==8){
        yyy3="壬"
    } else if (xxx3==9){
        yyy3="癸"
    }

    if (xxx3==0 || xxx3==2 || xxx3==4 || xxx3==6 || xxx3==8)  {//양
        if (xxx4==0 || xxx4==1)  {
            xxx4=0
            yyy4="子"
        } else if (xxx4==2 || xxx4==3) {
            xxx4=2
            yyy4="寅"
        } else if (xxx4==4 || xxx4==5) {
            xxx4=4
            yyy4="辰"
        } else if (xxx4==6 || xxx4==7) {
            xxx4=6
            yyy4="午"
        } else if (xxx4==8 || xxx4==9) {
            xxx4=8
            yyy4="申" 
        } else if (xxx4==10 || xxx4==11) {
            xxx4=10
            yyy4="戌"
        }
    } else if (xxx3==1 || xxx3==3 || xxx3==5 || xxx3==7 || xxx3==9)  { //음
        if (xxx4==0 || xxx4==1)  {
            xxx4=1
            yyy4="丑"
        } else if (xxx4==2 || xxx4==3) {
            xxx4=3
            yyy4="卯"
        } else if (xxx4==4 || xxx4==5) {
            xxx4=5
            yyy4="巳"
        } else if (xxx4==6 || xxx4==7) {
            xxx4=7
            yyy4="未"
        } else if (xxx4==8 || xxx4==9) {
            xxx4=9
            yyy4="酉" 
        } else if (xxx4==10 || xxx4==11) {
            xxx4=11
            yyy4="亥"
        }
    }   
    if (xxx2==0 || xxx2==2 || xxx2==4 || xxx2==6 || xxx2==8 || xxx2==10){ //양 
        if (xxx3==0) {//甲
           if (xxx4==0 || xxx4==2)  {//子 or 寅
            yyy1="戊"  //무게합 화의 인성
           } else if (xxx4==4) { //辰
            yyy1="壬"  // 정임합 목의 비견
           } else if (xxx4==6) { //午
            yyy1="丙"  // 병신합 수의 식상
           } else if (xxx4==8) { //申
            yyy1="庚"  // 을경합 금의 재성
           } else if (xxx4==10) { //戌
            yyy1="甲"  // 갑기합 토의 관성
           }
        } else if (xxx3==1) { //乙
            if (xxx4==1 || xxx4==3)  {//丑 or 卯
                yyy1="戊"  //무게합 화의 인성
            } else if (xxx4==5) { //巳
                yyy1="壬"  // 정임합 목의 비견
            } else if (xxx4==7) { //未
                yyy1="丙"  // 병신합 수의 식상
            } else if (xxx4==9) { //酉
                yyy1="庚"  // 을경합 금의 재성
            } else if (xxx4==11) { //亥
                yyy1="甲"  // 갑기합 토의 관성
            }
        } else if (xxx3==2) {//丙
            if (xxx4==0 || xxx4==2)  {//子 or 寅
                yyy1="甲"  // 갑기합 토의 인성
            } else if (xxx4==4) { //辰
                yyy1="戊"  //무게합 화의 비견
            } else if (xxx4==6) { //午
                yyy1="壬"  // 정임합 목의 식상
            } else if (xxx4==8) { //申
                yyy1="丙"  // 병신합 수의 재성
            } else if (xxx4==10) { //戌
                yyy1="庚"  // 을경합 금의 관성
            }
        } else if (xxx3==3) {//丁
            if (xxx4==1 || xxx4==3)  {//丑 or 卯
                yyy1="甲"  // 갑기합 토의 인성
            } else if (xxx4==5) { //巳
                yyy1="戊"  //무게합 화의 비견
            } else if (xxx4==7) { //未
                yyy1="壬"  // 정임합 목의 식상
            } else if (xxx4==9) { //酉
                yyy1="丙"  // 병신합 수의 재성
            } else if (xxx4==11) { //亥
                yyy1="庚"  // 을경합 금의 관성
            }
        } else if (xxx3==4) {//戊
            if (xxx4==0 || xxx4==2)  {//子 or 寅
                yyy1="庚"  // 을경합 금의 인성
            } else if (xxx4==4) { //辰
                yyy1="甲"  // 갑기합 토의 비견
            } else if (xxx4==6) { //午
                yyy1="戊"  //무게합 화의 식상
            } else if (xxx4==8) { //申
                yyy1="壬"  // 정임합 목의 재성
            } else if (xxx4==10) { //戌
                yyy1="丙"  // 병신합 수의 관성
            }
        } else if (xxx3==5) {//己
            if (xxx4==1 || xxx4==3)  {///丑 or 卯
                yyy1="庚"  // 을경합 금의 인성
            } else if (xxx4==5) { //巳
                yyy1="甲"  // 갑기합 토의 비견
            } else if (xxx4==7) { //未
                yyy1="戊"  //무게합 화의 식상
            } else if (xxx4==9) { //酉
                yyy1="壬"  // 정임합 목의 재성
            } else if (xxx4==11) { //亥
                yyy1="丙"  // 병신합 수의 관성
            }  
        } else if (xxx3==6) {//庚
            if (xxx4==0 || xxx4==2)  {//子 or 寅
                yyy1="丙"  // 병신합 수의 인성
            } else if (xxx4==4) { //辰
                yyy1="庚"  // 을경합 금의 비견
            } else if (xxx4==6) { //午
                yyy1="甲"  // 갑기합 토의 식상
            } else if (xxx4==8) { //申
                yyy1="戊"  //무게합 화의 재성
            } else if (xxx4==10) { //戌
                yyy1="壬"  // 정임합 목의 관성
            }
        } else if (xxx3==7) {//辛
            if (xxx4==1 || xxx4==3)  {///丑 or 卯
                yyy1="丙"  // 병신합 수의 인성
            } else if (xxx4==5) { //巳
                yyy1="庚"  // 을경합 금의 비견
            } else if (xxx4==7) { //未
                yyy1="甲"  // 갑기합 토의 식상
            } else if (xxx4==9) { //酉
                yyy1="戊"  //무게합 화의 재성
            } else if (xxx4==11) { //亥
                yyy1="壬"  // 정임합 목의 관성
            }  
        } else if (xxx3==8) {//壬
            if (xxx4==0 || xxx4==2)  {//子 or 寅
                yyy1="壬"  // 정임합 목의 인성
            } else if (xxx4==4) { //辰
                yyy1="丙"  // 병신합 수의 비견
            } else if (xxx4==6) { //午
                yyy1="庚"  // 을경합 금의 식상
            } else if (xxx4==8) { //申
                yyy1="甲"  // 갑기합 토의 재성
            } else if (xxx4==10) { //戌
                yyy1="戊"  //무게합 화의 관성
            }
        } else if (xxx3==9) {//癸
            if (xxx4==1 || xxx4==3)  {///丑 or 卯
                yyy1="壬"  // 정임합 목의 인성
            } else if (xxx4==5) { //巳
                yyy1="丙"  // 병신합 수의 비견
            } else if (xxx4==7) { //未
                yyy1="庚"  // 을경합 금의 식상
            } else if (xxx4==9) { //酉
                yyy1="甲"  // 갑기합 토의 재성
            } else if (xxx4==11) { //亥
                yyy1="戊"  //무게합 화의 관성
            }  
        }
    } else if (xxx2==1 || xxx2==3 || xxx2==5 || xxx2==7 || xxx2==9 || xxx2==11)  { //음
        if (xxx3==0) {//甲
            if (xxx4==0 || xxx4==2)  {//子 or 寅
             yyy1="癸"  //무게합 화의 인성
            } else if (xxx4==4) { //辰
             yyy1="丁"  // 정임합 목의 비견
            } else if (xxx4==6) { //午
             yyy1="辛"  // 병신합 수의 식상
            } else if (xxx4==8) { //申
             yyy1="乙"  // 을경합 금의 재성
            } else if (xxx4==10) { //戌
             yyy1="己"  // 갑기합 토의 관성
            }
         } else if (xxx3==1) { //乙
             if (xxx4==1 || xxx4==3)  {//丑 or 卯
                 yyy1="癸"  //무게합 화의 인성
             } else if (xxx4==5) { //巳
                 yyy1="丁"  // 정임합 목의 비견
             } else if (xxx4==7) { //未
                 yyy1="辛"  // 병신합 수의 식상
             } else if (xxx4==9) { //酉
                 yyy1="乙"  // 을경합 금의 재성
             } else if (xxx4==11) { //亥
                 yyy1="己"  // 갑기합 토의 관성
             }
         } else if (xxx3==2) {//丙
             if (xxx4==0 || xxx4==2)  {//子 or 寅
                 yyy1="己"  // 갑기합 토의 인성
             } else if (xxx4==4) { //辰
                 yyy1="癸"  //무게합 화의 비견
             } else if (xxx4==6) { //午
                 yyy1="丁"  // 정임합 목의 식상
             } else if (xxx4==8) { //申
                 yyy1="辛"  // 병신합 수의 재성
             } else if (xxx4==10) { //戌
                 yyy1="乙"  // 을경합 금의 관성
             }
         } else if (xxx3==3) {//丁
             if (xxx4==1 || xxx4==3)  {//丑 or 卯
                 yyy1="己"  // 갑기합 토의 인성
             } else if (xxx4==5) { //巳
                 yyy1="癸"  //무게합 화의 비견
             } else if (xxx4==7) { //未
                 yyy1="丁"  // 정임합 목의 식상
             } else if (xxx4==9) { //酉
                 yyy1="辛"  // 병신합 수의 재성
             } else if (xxx4==11) { //亥
                 yyy1="乙"  // 을경합 금의 관성
             }
         } else if (xxx3==4) {//戊
             if (xxx4==0 || xxx4==2)  {//子 or 寅
                 yyy1="乙"  // 을경합 금의 인성
             } else if (xxx4==4) { //辰
                 yyy1="己"  // 갑기합 토의 비견
             } else if (xxx4==6) { //午
                 yyy1="癸"  //무게합 화의 식상
             } else if (xxx4==8) { //申
                 yyy1="丁"  // 정임합 목의 재성
             } else if (xxx4==10) { //戌
                 yyy1="辛"  // 병신합 수의 관성
             }
         } else if (xxx3==5) {//己
             if (xxx4==1 || xxx4==3)  {///丑 or 卯
                 yyy1="乙"  // 을경합 금의 인성
             } else if (xxx4==5) { //巳
                 yyy1="己"  // 갑기합 토의 비견
             } else if (xxx4==7) { //未
                 yyy1="癸"  //무게합 화의 식상
             } else if (xxx4==9) { //酉
                 yyy1="丁"  // 정임합 목의 재성
             } else if (xxx4==11) { //亥
                 yyy1="辛"  // 병신합 수의 관성
             }  
         } else if (xxx3==6) {//庚
             if (xxx4==0 || xxx4==2)  {//子 or 寅
                 yyy1="辛"  // 병신합 수의 인성
             } else if (xxx4==4) { //辰
                 yyy1="乙"  // 을경합 금의 비견
             } else if (xxx4==6) { //午
                 yyy1="己"  // 갑기합 토의 식상
             } else if (xxx4==8) { //申
                 yyy1="癸"  //무게합 화의 재성
             } else if (xxx4==10) { //戌
                 yyy1="丁"  // 정임합 목의 관성
             }
         } else if (xxx3==7) {//辛
             if (xxx4==1 || xxx4==3)  {///丑 or 卯
                 yyy1="辛"  // 병신합 수의 인성
             } else if (xxx4==5) { //巳
                 yyy1="乙"  // 을경합 금의 비견
             } else if (xxx4==7) { //未
                 yyy1="己"  // 갑기합 토의 식상
             } else if (xxx4==9) { //酉
                 yyy1="癸"  //무게합 화의 재성
             } else if (xxx4==11) { //亥
                 yyy1="丁"  // 정임합 목의 관성
             }  
         } else if (xxx3==8) {//壬
             if (xxx4==0 || xxx4==2)  {//子 or 寅
                 yyy1="丁"  // 정임합 목의 인성
             } else if (xxx4==4) { //辰
                 yyy1="辛"  // 병신합 수의 비견
             } else if (xxx4==6) { //午
                 yyy1="乙"  // 을경합 금의 식상
             } else if (xxx4==8) { //申
                 yyy1="己"  // 갑기합 토의 재성
             } else if (xxx4==10) { //戌
                 yyy1="癸"  //무게합 화의 관성
             }
         } else if (xxx3==9) {//癸
             if (xxx4==1 || xxx4==3)  {///丑 or 卯
                 yyy1="丁"  // 정임합 목의 인성
             } else if (xxx4==5) { //巳
                 yyy1="辛"  // 병신합 수의 비견
             } else if (xxx4==7) { //未
                 yyy1="乙"  // 을경합 금의 식상
             } else if (xxx4==9) { //酉
                 yyy1="己"  // 갑기합 토의 재성
             } else if (xxx4==11) { //亥
                 yyy1="癸"  //무게합 화의 관성
             }  
         }
    }
    
    document.getElementById("chk1").innerHTML = yyy1;
    document.getElementById("chk2").innerHTML = yyy2;
    document.getElementById("chk3").innerHTML = yyy3;
    document.getElementById("chk4").innerHTML = yyy4;
    document.getElementById("chk1-1").innerHTML = "  ";
    
    
    if (xxx6==0) {
        yyy6="子"
    } else if (xxx6==1){ 
        yyy6="丑"   
    } else if (xxx6==2){
        yyy6="寅"
    } else if (xxx6==3){
        yyy6="卯" 
    } else if (xxx6==4){
        yyy6="辰" 
    } else if (xxx6==5){
        yyy6="巳" 
    } else if (xxx6==6){
        yyy6="午" 
    } else if (xxx6==7){
        yyy6="未"
    } else if (xxx6==8){
        yyy6="申"
    } else if (xxx6==9){
        yyy6="酉"
    } else if (xxx6==10){
        yyy6="戌"
    } else if (xxx6==11){
        yyy6="亥"
    }
    if (xxx7==0) {
        yyy7="甲"
    } else if (xxx7==1){ 
        yyy7="乙"   
    } else if (xxx7==2){
        yyy7="丙"
    } else if (xxx7==3){
        yyy7="丁" 
    } else if (xxx7==4){
        yyy7="戊" 
    } else if (xxx7==5){
        yyy7="己" 
    } else if (xxx7==6){
        yyy7="庚" 
    } else if (xxx7==7){
        yyy7="辛"
    } else if (xxx7==8){
        yyy7="壬"
    } else if (xxx7==9){
        yyy7="癸"
    }

    if (xxx7==0 || xxx7==2 || xxx7==4 || xxx7==6 || xxx7==8)  {//양
        if (xxx8==0 || xxx8==1)  {
            xxx8=0
            yyy8="子"
        } else if (xxx8==2 || xxx8==3) {
            xxx8=2
            yyy8="寅"
        } else if (xxx8==4 || xxx8==5) {
            xxx8=4
            yyy8="辰"
        } else if (xxx8==6 || xxx8==7) {
            xxx8=6
            yyy8="午"
        } else if (xxx8==8 || xxx8==9) {
            xxx8=8
            yyy8="申" 
        } else if (xxx8==10 || xxx8==11) {
            xxx8=10
            yyy8="戌"
        }
    } else if (xxx7==1 || xxx7==3 || xxx7==5 || xxx7==7 || xxx7==9)  { //음
        if (xxx8==0 || xxx8==1)  {
            xxx8=1
            yyy8="丑"
        } else if (xxx8==2 || xxx8==3) {
            xxx8=3
            yyy8="卯"
        } else if (xxx8==4 || xxx8==5) {
            xxx8=5
            yyy8="巳"
        } else if (xxx8==6 || xxx8==7) {
            xxx8=7
            yyy8="未"
        } else if (xxx8==8 || xxx8==9) {
            xxx8=9
            yyy8="酉" 
        } else if (xxx8==10 || xxx8==11) {
            xxx8=11
            yyy8="亥"
        }
    }   
    if (xxx6==0 || xxx6==2 || xxx6==4 || xxx6==6 || xxx6==8 || xxx6==10){ //양 
        if (xxx7==0) {//甲
           if (xxx8==0 || xxx8==2)  {//子 or 寅
            yyy5="戊"  //무게합 화의 인성
           } else if (xxx8==4) { //辰
            yyy5="壬"  // 정임합 목의 비견
           } else if (xxx8==6) { //午
            yyy5="丙"  // 병신합 수의 식상
           } else if (xxx8==8) { //申
            yyy5="庚"  // 을경합 금의 재성
           } else if (xxx8==10) { //戌
            yyy5="甲"  // 갑기합 토의 관성
           }
        } else if (xxx7==1) { //乙
            if (xxx8==1 || xxx8==3)  {//丑 or 卯
                yyy5="戊"  //무게합 화의 인성
            } else if (xxx8==5) { //巳
                yyy5="壬"  // 정임합 목의 비견
            } else if (xxx8==7) { //未
                yyy5="丙"  // 병신합 수의 식상
            } else if (xxx8==9) { //酉
                yyy5="庚"  // 을경합 금의 재성
            } else if (xxx8==11) { //亥
                yyy5="甲"  // 갑기합 토의 관성
            }
        } else if (xxx7==2) {//丙
            if (xxx8==0 || xxx8==2)  {//子 or 寅
                yyy5="甲"  // 갑기합 토의 인성
            } else if (xxx8==4) { //辰
                yyy5="戊"  //무게합 화의 비견
            } else if (xxx8==6) { //午
                yyy5="壬"  // 정임합 목의 식상
            } else if (xxx8==8) { //申
                yyy5="丙"  // 병신합 수의 재성
            } else if (xxx8==10) { //戌
                yyy5="庚"  // 을경합 금의 관성
            }
        } else if (xxx7==3) {//丁
            if (xxx8==1 || xxx8==3)  {//丑 or 卯
                yyy5="甲"  // 갑기합 토의 인성
            } else if (xxx8==5) { //巳
                yyy5="戊"  //무게합 화의 비견
            } else if (xxx8==7) { //未
                yyy5="壬"  // 정임합 목의 식상
            } else if (xxx8==9) { //酉
                yyy5="丙"  // 병신합 수의 재성
            } else if (xxx8==11) { //亥
                yyy5="庚"  // 을경합 금의 관성
            }
        } else if (xxx7==4) {//戊
            if (xxx8==0 || xxx8==2)  {//子 or 寅
                yyy5="庚"  // 을경합 금의 인성
            } else if (xxx8==4) { //辰
                yyy5="甲"  // 갑기합 토의 비견
            } else if (xxx8==6) { //午
                yyy5="戊"  //무게합 화의 식상
            } else if (xxx8==8) { //申
                yyy5="壬"  // 정임합 목의 재성
            } else if (xxx8==10) { //戌
                yyy5="丙"  // 병신합 수의 관성
            }
        } else if (xxx7==5) {//己
            if (xxx8==1 || xxx8==3)  {///丑 or 卯
                yyy5="庚"  // 을경합 금의 인성
            } else if (xxx8==5) { //巳
                yyy5="甲"  // 갑기합 토의 비견
            } else if (xxx8==7) { //未
                yyy5="戊"  //무게합 화의 식상
            } else if (xxx8==9) { //酉
                yyy5="壬"  // 정임합 목의 재성
            } else if (xxx8==11) { //亥
                yyy5="丙"  // 병신합 수의 관성
            }  
        } else if (xxx7==6) {//庚
            if (xxx8==0 || xxx8==2)  {//子 or 寅
                yyy5="丙"  // 병신합 수의 인성
            } else if (xxx8==4) { //辰
                yyy5="庚"  // 을경합 금의 비견
            } else if (xxx8==6) { //午
                yyy5="甲"  // 갑기합 토의 식상
            } else if (xxx8==8) { //申
                yyy5="戊"  //무게합 화의 재성
            } else if (xxx8==10) { //戌
                yyy5="壬"  // 정임합 목의 관성
            }
        } else if (xxx7==7) {//辛
            if (xxx8==1 || xxx8==3)  {///丑 or 卯
                yyy5="丙"  // 병신합 수의 인성
            } else if (xxx8==5) { //巳
                yyy5="庚"  // 을경합 금의 비견
            } else if (xxx8==7) { //未
                yyy5="甲"  // 갑기합 토의 식상
            } else if (xxx8==9) { //酉
                yyy5="戊"  //무게합 화의 재성
            } else if (xxx8==11) { //亥
                yyy5="壬"  // 정임합 목의 관성
            }  
        } else if (xxx7==8) {//壬
            if (xxx8==0 || xxx8==2)  {//子 or 寅
                yyy5="壬"  // 정임합 목의 인성
            } else if (xxx8==4) { //辰
                yyy5="丙"  // 병신합 수의 비견
            } else if (xxx8==6) { //午
                yyy5="庚"  // 을경합 금의 식상
            } else if (xxx8==8) { //申
                yyy5="甲"  // 갑기합 토의 재성
            } else if (xxx8==10) { //戌
                yyy5="戊"  //무게합 화의 관성
            }
        } else if (xxx7==9) {//癸
            if (xxx8==1 || xxx8==3)  {///丑 or 卯
                yyy5="壬"  // 정임합 목의 인성
            } else if (xxx8==5) { //巳
                yyy5="丙"  // 병신합 수의 비견
            } else if (xxx8==7) { //未
                yyy5="庚"  // 을경합 금의 식상
            } else if (xxx8==9) { //酉
                yyy5="甲"  // 갑기합 토의 재성
            } else if (xxx8==11) { //亥
                yyy5="戊"  //무게합 화의 관성
            }  
        }
    } else if (xxx6==1 || xxx6==3 || xxx6==5 || xxx6==7 || xxx6==9 || xxx6==11)  { //음
        if (xxx7==0) {//甲
            if (xxx8==0 || xxx8==2)  {//子 or 寅
             yyy5="癸"  //무게합 화의 인성
            } else if (xxx8==4) { //辰
             yyy5="丁"  // 정임합 목의 비견
            } else if (xxx8==6) { //午
             yyy5="辛"  // 병신합 수의 식상
            } else if (xxx8==8) { //申
             yyy5="乙"  // 을경합 금의 재성
            } else if (xxx8==10) { //戌
             yyy5="己"  // 갑기합 토의 관성
            }
         } else if (xxx7==1) { //乙
             if (xxx8==1 || xxx8==3)  {//丑 or 卯
                 yyy5="癸"  //무게합 화의 인성
             } else if (xxx8==5) { //巳
                 yyy5="丁"  // 정임합 목의 비견
             } else if (xxx8==7) { //未
                 yyy5="辛"  // 병신합 수의 식상
             } else if (xxx8==9) { //酉
                 yyy5="乙"  // 을경합 금의 재성
             } else if (xxx8==11) { //亥
                 yyy5="己"  // 갑기합 토의 관성
             }
         } else if (xxx7==2) {//丙
             if (xxx8==0 || xxx8==2)  {//子 or 寅
                 yyy5="己"  // 갑기합 토의 인성
             } else if (xxx8==4) { //辰
                 yyy5="癸"  //무게합 화의 비견
             } else if (xxx8==6) { //午
                 yyy5="丁"  // 정임합 목의 식상
             } else if (xxx8==8) { //申
                 yyy5="辛"  // 병신합 수의 재성
             } else if (xxx8==10) { //戌
                 yyy5="乙"  // 을경합 금의 관성
             }
         } else if (xxx7==3) {//丁
             if (xxx8==1 || xxx8==3)  {//丑 or 卯
                 yyy5="己"  // 갑기합 토의 인성
             } else if (xxx8==5) { //巳
                 yyy5="癸"  //무게합 화의 비견
             } else if (xxx8==7) { //未
                 yyy5="丁"  // 정임합 목의 식상
             } else if (xxx8==9) { //酉
                 yyy5="辛"  // 병신합 수의 재성
             } else if (xxx8==11) { //亥
                 yyy5="乙"  // 을경합 금의 관성
             }
         } else if (xxx7==4) {//戊
             if (xxx8==0 || xxx8==2)  {//子 or 寅
                 yyy5="乙"  // 을경합 금의 인성
             } else if (xxx8==4) { //辰
                 yyy5="己"  // 갑기합 토의 비견
             } else if (xxx8==6) { //午
                 yyy5="癸"  //무게합 화의 식상
             } else if (xxx8==8) { //申
                 yyy5="丁"  // 정임합 목의 재성
             } else if (xxx8==10) { //戌
                 yyy5="辛"  // 병신합 수의 관성
             }
         } else if (xxx7==5) {//己
             if (xxx8==1 || xxx8==3)  {///丑 or 卯
                 yyy5="乙"  // 을경합 금의 인성
             } else if (xxx8==5) { //巳
                 yyy5="己"  // 갑기합 토의 비견
             } else if (xxx8==7) { //未
                 yyy5="癸"  //무게합 화의 식상
             } else if (xxx8==9) { //酉
                 yyy5="丁"  // 정임합 목의 재성
             } else if (xxx8==11) { //亥
                 yyy5="辛"  // 병신합 수의 관성
             }  
         } else if (xxx7==6) {//庚
             if (xxx8==0 || xxx8==2)  {//子 or 寅
                 yyy5="辛"  // 병신합 수의 인성
             } else if (xxx8==4) { //辰
                 yyy5="乙"  // 을경합 금의 비견
             } else if (xxx8==6) { //午
                 yyy5="己"  // 갑기합 토의 식상
             } else if (xxx8==8) { //申
                 yyy5="癸"  //무게합 화의 재성
             } else if (xxx8==10) { //戌
                 yyy5="丁"  // 정임합 목의 관성
             }
         } else if (xxx7==7) {//辛
             if (xxx8==1 || xxx8==3)  {///丑 or 卯
                 yyy5="辛"  // 병신합 수의 인성
             } else if (xxx8==5) { //巳
                 yyy5="乙"  // 을경합 금의 비견
             } else if (xxx8==7) { //未
                 yyy5="己"  // 갑기합 토의 식상
             } else if (xxx8==9) { //酉
                 yyy5="癸"  //무게합 화의 재성
             } else if (xxx8==11) { //亥
                 yyy5="丁"  // 정임합 목의 관성
             }  
         } else if (xxx7==8) {//壬
             if (xxx8==0 || xxx8==2)  {//子 or 寅
                 yyy5="丁"  // 정임합 목의 인성
             } else if (xxx8==4) { //辰
                 yyy5="辛"  // 병신합 수의 비견
             } else if (xxx8==6) { //午
                 yyy5="乙"  // 을경합 금의 식상
             } else if (xxx8==8) { //申
                 yyy5="己"  // 갑기합 토의 재성
             } else if (xxx8==10) { //戌
                 yyy5="癸"  //무게합 화의 관성
             }
         } else if (xxx7==9) {//癸
             if (xxx8==1 || xxx8==3)  {///丑 or 卯
                 yyy5="丁"  // 정임합 목의 인성
             } else if (xxx8==5) { //巳
                 yyy5="辛"  // 병신합 수의 비견
             } else if (xxx8==7) { //未
                 yyy5="乙"  // 을경합 금의 식상
             } else if (xxx8==9) { //酉
                 yyy5="己"  // 갑기합 토의 재성
             } else if (xxx8==11) { //亥
                 yyy5="癸"  //무게합 화의 관성
             }  
         }
    }


    document.getElementById("chk5-1").innerHTML = "  ";
    document.getElementById("chk5").innerHTML = yyy5;
    document.getElementById("chk6").innerHTML = yyy6;
    document.getElementById("chk7").innerHTML = yyy7;
    document.getElementById("chk8").innerHTML = yyy8;
    

}