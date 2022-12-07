var y1, y2, y3, y4, y5, y6, y7, y8
function result(){
            
    btn1(); 
    btn2();
    btn3();
    btn4();
    btn5();
    btn6();
    btn7();
}

function test(){
    document.getElementById("btn1").innerText="확인"
    document.getElementById("btn2").innerText="확인"
    document.getElementById("btn3").innerText="확인"
    document.getElementById("btn4").innerText="확인"
    document.getElementById("btn5").innerText="확인"
    document.getElementById("btn6").innerText="확인"
    document.getElementById("btn7").innerText="확인"
    document.getElementById("btn1").style.background= "Gainsboro"
    document.getElementById("btn2").style.background= "Gainsboro"
    document.getElementById("btn3").style.background= "Gainsboro"
    document.getElementById("btn4").style.background= "Gainsboro"
    document.getElementById("btn5").style.background= "Gainsboro"
    document.getElementById("btn6").style.background= "Gainsboro"
    document.getElementById("btn7").style.background= "Gainsboro"
    document.getElementById("btn1").style.borderColor = "cornsilk"
    document.getElementById("btn2").style.borderColor = "cornsilk"
    document.getElementById("btn3").style.borderColor = "cornsilk"
    document.getElementById("btn4").style.borderColor = "cornsilk"
    document.getElementById("btn5").style.borderColor = "cornsilk"
    document.getElementById("btn6").style.borderColor = "cornsilk"
    document.getElementById("btn7").style.borderColor = "cornsilk"

    //document.getElementById("check7").style.display="none";
    var x1 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var x2 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var x4 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var x5 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var x6 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var x8 =  Math.floor(Math.random() * 12); // 0 ~ 11
    
   
    if (x1==0) {
        y1="甲"
    } else if (x1==1){ 
        y1="乙"   
    } else if (x1==2){
        y1="丙"
    } else if (x1==3){
        y1="丁" 
    } else if (x1==4){
        y1="戊" 
    } else if (x1==5){
        y1="己" 
    } else if (x1==6){
        y1="庚" 
    } else if (x1==7){
        y1="辛"
    } else if (x1==8){
        y1="壬"
    } else if (x1==9){
        y1="癸"
    }
    if (x1==0 || x1==2 || x1==4 || x1==6 || x1==8)  {
        if (x2==0 || x2==1)  {
            y2="子"
        } else if (x2==2 || x2==3) {
            y2="寅"
        } else if (x2==4 || x2==5) {
            y2="辰"
        } else if (x2==6 || x2==7) {
            y2="午"
        } else if (x2==8 || x2==9) {
            y2="申" 
        } else if (x2==10 || x2==11) {
            y2="戌"
        }
    } else if (x1==1 || x1==3 || x1==5 || x1==7 || x1==9)  { 
       
        if (x2==1 || x2==2)  {
            y2="丑"
        } else if (x2==3 || x2==4) {
            y2="卯"
        } else if (x2==5 || x2==6) {
            y2="巳"
        } else if (x2==7 || x2==8) {
            y2="未"
        } else if (x2==9 || x2==10) {
            y2="酉" 
        } else if (x2==11 || x2==0) {
            y2="亥"
        }
    } 
    if (x4==0) { 
        y4="子"  //인성
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="丙"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="戊"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="庚"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="壬"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="甲"
        }
    } else if (x4==1){ 
        y4="丑" // 인성
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="丁"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="己"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="辛"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="癸"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="乙" 
        }
    } else if (x4==2){ //인성
        y4="寅"
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="丙"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="戊"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="庚"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="壬"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="甲"
        }
    } else if (x4==3){  //인성
        y4="卯" 
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="丁"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="己"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="辛"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="癸"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="乙" 
        }
    } else if (x4==4){  //비견
        y4="辰" 
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="戊"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="庚"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="壬"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="甲"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="丙"
        }
    } else if (x4==5){  //비견
        y4="巳" 
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="己"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="辛"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="癸"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="乙"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="丁" 
        }
    } else if (x4==6){  //식상
        y4="午" 
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="庚"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="壬"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="甲"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="丙"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="戊"
        }
    } else if (x4==7){  //식상
        y4="未"
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="辛"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="癸"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="乙"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="丁"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="己" 
        }
    } else if (x4==8){  //재성
        y4="申"
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="壬"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="甲"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="丙"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="戊"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="庚"
        }
    } else if (x4==9){  //재성
        y4="酉"
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="癸"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="乙"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="丁"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="己"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="辛" 
        }
    } else if (x4==10){ //관성
        y4="戌"
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="甲"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="丙"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="戊"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="庚"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="壬"
        }
    } else if (x4==11){  //관성
        y4="亥"
        if (x1==0 || x1==5) {  //갑-토  기-토
            y3="乙"
        } else if (x1==1 || x1==6) {  //을-금  경-금
            y3="丁"
        } else if (x1==2 || x1==7) { //병-수  신-수
            y3="己"
        } else if (x1==3 || x1==8) { //정-목   임-목
            y3="辛"
        } else if (x1==4 || x1==9) { //무-화   계-화
            y3="癸" 
        }
        
    }
    sma1=x1
    document.getElementById("check1").innerHTML = y1;
    document.getElementById("check2").innerHTML = y2;
    document.getElementById("check3").innerHTML = y3;
    document.getElementById("check4").innerHTML = y4;
    //document.getElementById("check3-1").innerHTML = "  ";
    //document.getElementById("check7-1").innerHTML = "  ";



    if (x5==0) {
        y5="甲"
    } else if (x5==1){ 
        y5="乙"   
    } else if (x5==2){
        y5="丙"
    } else if (x5==3){
        y5="丁" 
    } else if (x5==4){
        y5="戊" 
    } else if (x5==5){
        y5="己" 
    } else if (x5==6){
        y5="庚" 
    } else if (x5==7){
        y5="辛"
    } else if (x5==8){
        y5="壬"
    } else if (x5==9){
        y5="癸"
    }
    if (x5==0 || x5==2 || x5==4 || x5==6 || x5==8)  { //양간
        if (x6==0 || x6==1)  {
            y6="子"
        } else if (x6==2 || x6==3) {
            y6="寅"
        } else if (x6==4 || x6==5) {
            y6="辰"
        } else if (x6==6 || x6==7) {
            y6="午"
        } else if (x6==8 || x6==9) {
            y6="申" 
        } else if (x6==10 || x6==11) {
            y6="戌"
        }
    } else if (x5==1 || x5==3 || x5==5 || x5==7 || x5==9)  { //음간 
       
        if (x6==1 || x6==2)  {
            y6="丑"
        } else if (x6==3 || x6==4) {
            y6="卯"
        } else if (x6==5 || x6==6) {
            y6="巳"
        } else if (x6==7 || x6==8) {
            y6="未"
        } else if (x6==9 || x6==10) {
            y6="酉" 
        } else if (x6==11 || x6==0) {
            y6="亥"
        }
    } 
    if (x8==0) { 
        y8="子"  //관성
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="甲"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="丙"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="戊"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="庚"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="壬"
        }
    } else if (x8==1){ 
        y8="丑" // 관성
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="乙"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="丁"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="己"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="辛"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="癸" 
        }
    } else if (x8==2){ //인성
        y8="寅"
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="丙"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="戊"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="庚"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="壬"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="甲"
        }
    } else if (x8==3){  //인성
        y8="卯" 
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="丁"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="己"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="辛"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="癸"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="乙" 
        }
    } else if (x8==4){  //비견
        y8="辰" 
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="戊"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="庚"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="壬"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="甲"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="丙"
        }
    } else if (x8==5){  //비견
        y8="巳" 
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="己"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="辛"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="癸"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="乙"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="丁" 
        }
    } else if (x8==6){  //식상
        y8="午" 
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="庚"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="壬"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="甲"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="丙"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="戊"
        }
    } else if (x8==7){  //식상
        y8="未"
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="辛"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="癸"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="乙"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="丁"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="己" 
        }
    } else if (x8==8){  //재성
        y8="申"
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="壬"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="甲"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="丙"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="戊"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="庚"
        }
    } else if (x8==9){  //재성
        y8="酉"
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="癸"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="乙"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="丁"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="己"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="辛" 
        }
    } else if (x8==10){ //관성
        y8="戌"
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="甲"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="丙"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="戊"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="庚"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="壬"
        }
    } else if (x8==11){  //관성
        y8="亥"
        if (x5==0 || x5==5) {  //갑-토  기-토
            y7="乙"
        } else if (x5==1 || x5==6) {  //을-금  경-금
            y7="丁"
        } else if (x5==2 || x5==7) { //병-수  신-수
            y7="己"
        } else if (x5==3 || x5==8) { //정-목   임-목
            y7="辛"
        } else if (x5==4 || x5==9) { //무-화   계-화
            y7="癸" 
        }
    }
    
    document.getElementById("check5").innerHTML = y5;
    document.getElementById("check6").innerHTML = y6;
    document.getElementById("check7").innerHTML = y7;
    document.getElementById("check8").innerHTML = y8;

}
function Tip(){
    if (document.getElementById("T2").innerText=="") {
        document.getElementById("T2").innerHTML = "月: 자축인묘(인성)";
        document.getElementById("T3").innerHTML = "時: 자축술해(관성)";
        document.getElementById("T4").innerHTML = "공통 : 진사(비견), 오미(식상), 신유(재성)";
    } else {
        document.getElementById("T2").innerHTML=""
        document.getElementById("T3").innerHTML=""
        document.getElementById("T4").innerHTML=""
    }
}
function btn1(){
    if (y5=="甲") {
       if (y7=="甲") {
        document.getElementById("btn1").innerHTML="比肩"; 
        document.getElementById("btn1").style.background= "Greenyellow"        
       } else if (y7=="乙"){
        document.getElementById("btn1").innerHTML="劫財";
        document.getElementById("btn1").style.background= "Greenyellow"        
       } else if (y7=="丙"){
        document.getElementById("btn1").innerHTML="食神";
        
       } else if (y7=="丁"){
        document.getElementById("btn1").innerHTML="傷官";
        
       } else if (y7=="戊"){
        document.getElementById("btn1").innerHTML="偏財";
        
       } else if (y7=="己"){
        document.getElementById("btn1").innerHTML="正財";
        
       } else if (y7=="庚"){
        document.getElementById("btn1").innerHTML="偏官";
        
       } else if (y7=="辛"){
        document.getElementById("btn1").innerHTML="正官"; 
        
       } else if (y7=="壬"){
        document.getElementById("btn1").innerHTML="偏印";
        document.getElementById("btn1").style.background= "Greenyellow"
       } else if (y7=="癸"){
        document.getElementById("btn1").innerHTML="正印";
        document.getElementById("btn1").style.background= "Greenyellow"
       }
    } else if (y5=="乙"){
     if (y7=="甲") {
         document.getElementById("btn1").innerHTML="劫財";
         document.getElementById("btn1").style.background= "Greenyellow"
       } else if (y7=="乙"){
         document.getElementById("btn1").innerHTML="比肩";
         document.getElementById("btn1").style.background= "Greenyellow"
       } else if (y7=="丙"){
        document.getElementById("btn1").innerHTML="傷官";
       } else if (y7=="丁"){
        document.getElementById("btn1").innerHTML="食神";
       } else if (y7=="戊"){
        document.getElementById("btn1").innerHTML="正財";
       } else if (y7=="己"){
        document.getElementById("btn1").innerHTML="偏財";
       } else if (y7=="庚"){
        document.getElementById("btn1").innerHTML="正官";
       } else if (y7=="辛"){
        document.getElementById("btn1").innerHTML="偏官"; 
       } else if (y7=="壬"){
        document.getElementById("btn1").innerHTML="正印";
        document.getElementById("btn1").style.background= "Greenyellow"
       } else if (y7=="癸"){
        document.getElementById("btn1").innerHTML="偏印";
        document.getElementById("btn1").style.background= "Greenyellow"
       }  
    } else if (y5=="丙"){      
       if (y7=="甲") {
            document.getElementById("btn1").innerHTML="偏印"; 
            document.getElementById("btn1").style.background= "Greenyellow"
           } else if (y7=="乙"){
            document.getElementById("btn1").innerHTML="正印";
            document.getElementById("btn1").style.background= "Greenyellow"
           } else if (y7=="丙"){
            document.getElementById("btn1").innerHTML="比肩";
            document.getElementById("btn1").style.background= "Greenyellow"
           } else if (y7=="丁"){
            document.getElementById("btn1").innerHTML="劫財";
            document.getElementById("btn1").style.background= "Greenyellow"
           } else if (y7=="戊"){
            document.getElementById("btn1").innerHTML="食神";
           } else if (y7=="己"){
            document.getElementById("btn1").innerHTML="傷官";
           } else if (y7=="庚"){
            document.getElementById("btn1").innerHTML="偏財";
           } else if (y7=="辛"){
            document.getElementById("btn1").innerHTML="正財"; 
           } else if (y7=="壬"){
            document.getElementById("btn1").innerHTML="偏官";
           } else if (y7=="癸"){
            document.getElementById("btn1").innerHTML="正官";
           }
        } else if (y5=="丁"){
         if (y7=="甲") {
            document.getElementById("btn1").innerHTML="正印"; 
            document.getElementById("btn1").style.background= "Greenyellow"
            } else if (y7=="乙"){
            document.getElementById("btn1").innerHTML="偏印";
            document.getElementById("btn1").style.background= "Greenyellow"
            } else if (y7=="丙"){
            document.getElementById("btn1").innerHTML="劫財";
            document.getElementById("btn1").style.background= "Greenyellow"
            } else if (y7=="丁"){
            document.getElementById("btn1").innerHTML="比肩";
            document.getElementById("btn1").style.background= "Greenyellow"
            } else if (y7=="戊"){
            document.getElementById("btn1").innerHTML="傷官";
            } else if (y7=="己"){
            document.getElementById("btn1").innerHTML="食神";
            } else if (y7=="庚"){
            document.getElementById("btn1").innerHTML="正財";
            } else if (y7=="辛"){
            document.getElementById("btn1").innerHTML="偏財"; 
            } else if (y7=="壬"){
            document.getElementById("btn1").innerHTML="正官";
            } else if (y7=="癸"){
            document.getElementById("btn1").innerHTML="偏官";
            } 
        }  else if (y5=="戊"){      
            if (y7=="甲") {
                 document.getElementById("btn1").innerHTML="偏官"; 
                } else if (y7=="乙"){
                 document.getElementById("btn1").innerHTML="正官";
                } else if (y7=="丙"){
                 document.getElementById("btn1").innerHTML="偏印";
                 document.getElementById("btn1").style.background= "Greenyellow"
                } else if (y7=="丁"){
                 document.getElementById("btn1").innerHTML="正印";
                 document.getElementById("btn1").style.background= "Greenyellow"
                } else if (y7=="戊"){
                 document.getElementById("btn1").innerHTML="比肩";
                 document.getElementById("btn1").style.background= "Greenyellow"
                } else if (y7=="己"){
                 document.getElementById("btn1").innerHTML="劫財";
                 document.getElementById("btn1").style.background= "Greenyellow"
                } else if (y7=="庚"){
                 document.getElementById("btn1").innerHTML="食神";
                } else if (y7=="辛"){
                 document.getElementById("btn1").innerHTML="傷官"; 
                } else if (y7=="壬"){
                 document.getElementById("btn1").innerHTML="偏財";
                } else if (y7=="癸"){
                 document.getElementById("btn1").innerHTML="正財";
                }
             } else if (y5=="己"){
              if (y7=="甲") {
                 document.getElementById("btn1").innerHTML="正官"; 
                 } else if (y7=="乙"){
                 document.getElementById("btn1").innerHTML="偏官";
                 } else if (y7=="丙"){
                 document.getElementById("btn1").innerHTML="正印";
                 document.getElementById("btn1").style.background= "Greenyellow"
                 } else if (y7=="丁"){
                 document.getElementById("btn1").innerHTML="偏印";
                 document.getElementById("btn1").style.background= "Greenyellow"
                 } else if (y7=="戊"){
                 document.getElementById("btn1").innerHTML="劫財";
                 document.getElementById("btn1").style.background= "Greenyellow"
                 } else if (y7=="己"){
                 document.getElementById("btn1").innerHTML="比肩";
                 document.getElementById("btn1").style.background= "Greenyellow"
                 } else if (y7=="庚"){
                 document.getElementById("btn1").innerHTML="傷官";
                 } else if (y7=="辛"){
                 document.getElementById("btn1").innerHTML="食神"; 
                 } else if (y7=="壬"){
                 document.getElementById("btn1").innerHTML="正財";
                 } else if (y7=="癸"){
                 document.getElementById("btn1").innerHTML="偏財";
                 } 
             }  else if (y5=="庚"){      
                if (y7=="甲") {
                     document.getElementById("btn1").innerHTML="偏財"; 
                    } else if (y7=="乙"){
                     document.getElementById("btn1").innerHTML="正財";
                    } else if (y7=="丙"){
                     document.getElementById("btn1").innerHTML="偏官";
                    } else if (y7=="丁"){
                     document.getElementById("btn1").innerHTML="正官";
                    } else if (y7=="戊"){
                     document.getElementById("btn1").innerHTML="偏印";
                     document.getElementById("btn1").style.background= "Greenyellow"
                    } else if (y7=="己"){
                     document.getElementById("btn1").innerHTML="正印";
                     document.getElementById("btn1").style.background= "Greenyellow"
                    } else if (y7=="庚"){
                     document.getElementById("btn1").innerHTML="比肩";
                     document.getElementById("btn1").style.background= "Greenyellow"
                    } else if (y7=="辛"){
                     document.getElementById("btn1").innerHTML="劫財"; 
                     document.getElementById("btn1").style.background= "Greenyellow"
                    } else if (y7=="壬"){
                     document.getElementById("btn1").innerHTML="食神";
                    } else if (y7=="癸"){
                     document.getElementById("btn1").innerHTML="傷官";
                    }
                 } else if (y5=="辛"){
                  if (y7=="甲") {
                     document.getElementById("btn1").innerHTML="正財"; 
                     } else if (y7=="乙"){
                     document.getElementById("btn1").innerHTML="偏財";
                     } else if (y7=="丙"){
                     document.getElementById("btn1").innerHTML="正官";
                     } else if (y7=="丁"){
                     document.getElementById("btn1").innerHTML="偏官";
                     } else if (y7=="戊"){
                     document.getElementById("btn1").innerHTML="正印";
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } else if (y7=="己"){
                     document.getElementById("btn1").innerHTML="偏印";
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } else if (y7=="庚"){
                     document.getElementById("btn1").innerHTML="劫財";
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } else if (y7=="辛"){
                     document.getElementById("btn1").innerHTML="比肩"; 
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } else if (y7=="壬"){
                     document.getElementById("btn1").innerHTML="傷官";
                     } else if (y7=="癸"){
                     document.getElementById("btn1").innerHTML="食神";
                     } 

                 } else if (y5=="壬"){      
                if (y7=="甲") {
                     document.getElementById("btn1").innerHTML="食神"; 
                    } else if (y7=="乙"){
                     document.getElementById("btn1").innerHTML="傷官";
                    } else if (y7=="丙"){
                     document.getElementById("btn1").innerHTML="偏財";
                    } else if (y7=="丁"){
                     document.getElementById("btn1").innerHTML="正財";
                    } else if (y7=="戊"){
                     document.getElementById("btn1").innerHTML="偏官";
                    } else if (y7=="己"){
                     document.getElementById("btn1").innerHTML="正官";
                    } else if (y7=="庚"){
                     document.getElementById("btn1").innerHTML="偏印";
                     document.getElementById("btn1").style.background= "Greenyellow"
                    } else if (y7=="辛"){
                     document.getElementById("btn1").innerHTML="正印"; 
                     document.getElementById("btn1").style.background= "Greenyellow"
                    } else if (y7=="壬"){
                     document.getElementById("btn1").innerHTML="比肩";
                     document.getElementById("btn1").style.background= "Greenyellow"
                    } else if (y7=="癸"){
                     document.getElementById("btn1").innerHTML="劫財";
                     document.getElementById("btn1").style.background= "Greenyellow"
                    }
                 } else if (y5=="癸"){
                  if (y7=="甲") {
                     document.getElementById("btn1").innerHTML="傷官"; 
                     } else if (y7=="乙"){
                     document.getElementById("btn1").innerHTML="食神";
                     } else if (y7=="丙"){
                     document.getElementById("btn1").innerHTML="正財";
                     } else if (y7=="丁"){
                     document.getElementById("btn1").innerHTML="偏財";
                     } else if (y7=="戊"){
                     document.getElementById("btn1").innerHTML="正官";
                     } else if (y7=="己"){
                     document.getElementById("btn1").innerHTML="偏官";
                     } else if (y7=="庚"){
                     document.getElementById("btn1").innerHTML="正印";
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } else if (y7=="辛"){
                     document.getElementById("btn1").innerHTML="偏印"; 
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } else if (y7=="壬"){
                     document.getElementById("btn1").innerHTML="劫財";
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } else if (y7=="癸"){
                     document.getElementById("btn1").innerHTML="比肩";
                     document.getElementById("btn1").style.background= "Greenyellow"
                     } 
                    }     
     
}
function btn2(){
    if (y5=="甲") {
       if (y3=="甲") {
            document.getElementById("btn2").innerHTML="比肩"; 
            document.getElementById("btn2").style.background= "Greenyellow"
       } else if (y3=="乙"){
            document.getElementById("btn2").innerHTML="劫財";
            document.getElementById("btn2").style.background= "Greenyellow"
       } else if (y3=="丙"){
        document.getElementById("btn2").innerHTML="食神";
       } else if (y3=="丁"){
        document.getElementById("btn2").innerHTML="傷官";
       } else if (y3=="戊"){
        document.getElementById("btn2").innerHTML="偏財";
       } else if (y3=="己"){
        document.getElementById("btn2").innerHTML="正財";
       } else if (y3=="庚"){
        document.getElementById("btn2").innerHTML="偏官";
       } else if (y3=="辛"){
        document.getElementById("btn2").innerHTML="正官"; 
       } else if (y3=="壬"){
        document.getElementById("btn2").innerHTML="偏印";
        document.getElementById("btn2").style.background= "Greenyellow"
       } else if (y3=="癸"){
        document.getElementById("btn2").innerHTML="正印";
        document.getElementById("btn2").style.background= "Greenyellow"
       }
    } else if (y5=="乙"){
     if (y3=="甲") {
         document.getElementById("btn2").innerHTML="劫財"; 
         document.getElementById("btn2").style.background= "Greenyellow"
       } else if (y3=="乙"){
            document.getElementById("btn2").innerHTML="比肩";
            document.getElementById("btn2").style.background= "Greenyellow"
       } else if (y3=="丙"){
        document.getElementById("btn2").innerHTML="傷官";
       } else if (y3=="丁"){
        document.getElementById("btn2").innerHTML="食神";
       } else if (y3=="戊"){
        document.getElementById("btn2").innerHTML="正財";
       } else if (y3=="己"){
        document.getElementById("btn2").innerHTML="偏財";
       } else if (y3=="庚"){
        document.getElementById("btn2").innerHTML="正官";
       } else if (y3=="辛"){
        document.getElementById("btn2").innerHTML="偏官"; 
       } else if (y3=="壬"){
        document.getElementById("btn2").innerHTML="正印";
        document.getElementById("btn2").style.background= "Greenyellow"
       } else if (y3=="癸"){
        document.getElementById("btn2").innerHTML="偏印";
        document.getElementById("btn2").style.background= "Greenyellow"
       }  
    } else if (y5=="丙"){      
       if (y3=="甲") {
            document.getElementById("btn2").innerHTML="偏印";
            document.getElementById("btn2").style.background= "Greenyellow" 
           } else if (y3=="乙"){
            document.getElementById("btn2").innerHTML="正印";
            document.getElementById("btn2").style.background= "Greenyellow"
           } else if (y3=="丙"){
            document.getElementById("btn2").innerHTML="比肩";
            document.getElementById("btn2").style.background= "Greenyellow"
           } else if (y3=="丁"){
            document.getElementById("btn2").innerHTML="劫財";
            document.getElementById("btn2").style.background= "Greenyellow"
           } else if (y3=="戊"){
            document.getElementById("btn2").innerHTML="食神";
           } else if (y3=="己"){
            document.getElementById("btn2").innerHTML="傷官";
           } else if (y3=="庚"){
            document.getElementById("btn2").innerHTML="偏財";
           } else if (y3=="辛"){
            document.getElementById("btn2").innerHTML="正財"; 
           } else if (y3=="壬"){
            document.getElementById("btn2").innerHTML="偏官";
           } else if (y3=="癸"){
            document.getElementById("btn2").innerHTML="正官";
           }
        } else if (y5=="丁"){
         if (y3=="甲") {
            document.getElementById("btn2").innerHTML="正印"; 
            document.getElementById("btn2").style.background= "Greenyellow"
            } else if (y3=="乙"){
            document.getElementById("btn2").innerHTML="偏印";
            document.getElementById("btn2").style.background= "Greenyellow"
            } else if (y3=="丙"){
            document.getElementById("btn2").innerHTML="劫財";
            document.getElementById("btn2").style.background= "Greenyellow"
            } else if (y3=="丁"){
            document.getElementById("btn2").innerHTML="比肩";
            document.getElementById("btn2").style.background= "Greenyellow"
            } else if (y3=="戊"){
            document.getElementById("btn2").innerHTML="傷官";
            } else if (y3=="己"){
            document.getElementById("btn2").innerHTML="食神";
            } else if (y3=="庚"){
            document.getElementById("btn2").innerHTML="正財";
            } else if (y3=="辛"){
            document.getElementById("btn2").innerHTML="偏財"; 
            } else if (y3=="壬"){
            document.getElementById("btn2").innerHTML="正官";
            } else if (y3=="癸"){
            document.getElementById("btn2").innerHTML="偏官";
            } 
        }  else if (y5=="戊"){      
            if (y3=="甲") {
                 document.getElementById("btn2").innerHTML="偏官"; 
                } else if (y3=="乙"){
                 document.getElementById("btn2").innerHTML="正官";
                } else if (y3=="丙"){
                 document.getElementById("btn2").innerHTML="偏印";
                 document.getElementById("btn2").style.background= "Greenyellow"
                } else if (y3=="丁"){
                 document.getElementById("btn2").innerHTML="正印";
                 document.getElementById("btn2").style.background= "Greenyellow"
                } else if (y3=="戊"){
                 document.getElementById("btn2").innerHTML="比肩";
                 document.getElementById("btn2").style.background= "Greenyellow"
                } else if (y3=="己"){
                 document.getElementById("btn2").innerHTML="劫財";
                 document.getElementById("btn2").style.background= "Greenyellow"
                } else if (y3=="庚"){
                 document.getElementById("btn2").innerHTML="食神";
                } else if (y3=="辛"){
                 document.getElementById("btn2").innerHTML="傷官"; 
                } else if (y3=="壬"){
                 document.getElementById("btn2").innerHTML="偏財";
                } else if (y3=="癸"){
                 document.getElementById("btn2").innerHTML="正財";
                }
             } else if (y5=="己"){
              if (y3=="甲") {
                 document.getElementById("btn2").innerHTML="正官"; 
                 } else if (y3=="乙"){
                 document.getElementById("btn2").innerHTML="偏官";
                 } else if (y3=="丙"){
                 document.getElementById("btn2").innerHTML="正印";
                 document.getElementById("btn2").style.background= "Greenyellow"
                 } else if (y3=="丁"){
                 document.getElementById("btn2").innerHTML="偏印";
                 document.getElementById("btn2").style.background= "Greenyellow"
                 } else if (y3=="戊"){
                 document.getElementById("btn2").innerHTML="劫財";
                 document.getElementById("btn2").style.background= "Greenyellow"
                 } else if (y3=="己"){
                 document.getElementById("btn2").innerHTML="比肩";
                 document.getElementById("btn2").style.background= "Greenyellow"
                 } else if (y3=="庚"){
                 document.getElementById("btn2").innerHTML="傷官";
                 } else if (y3=="辛"){
                 document.getElementById("btn2").innerHTML="食神"; 
                 } else if (y3=="壬"){
                 document.getElementById("btn2").innerHTML="正財";
                 } else if (y3=="癸"){
                 document.getElementById("btn2").innerHTML="偏財";
                 } 
             }  else if (y5=="庚"){      
                if (y3=="甲") {
                     document.getElementById("btn2").innerHTML="偏財"; 
                    } else if (y3=="乙"){
                     document.getElementById("btn2").innerHTML="正財";
                    } else if (y3=="丙"){
                     document.getElementById("btn2").innerHTML="偏官";
                    } else if (y3=="丁"){
                     document.getElementById("btn2").innerHTML="正官";
                    } else if (y3=="戊"){
                     document.getElementById("btn2").innerHTML="偏印";
                     document.getElementById("btn2").style.background= "Greenyellow"
                    } else if (y3=="己"){
                     document.getElementById("btn2").innerHTML="正印";
                     document.getElementById("btn2").style.background= "Greenyellow"
                    } else if (y3=="庚"){
                     document.getElementById("btn2").innerHTML="比肩";
                     document.getElementById("btn2").style.background= "Greenyellow"
                    } else if (y3=="辛"){
                     document.getElementById("btn2").innerHTML="劫財"; 
                     document.getElementById("btn2").style.background= "Greenyellow"
                    } else if (y3=="壬"){
                     document.getElementById("btn2").innerHTML="食神";
                    } else if (y3=="癸"){
                     document.getElementById("btn2").innerHTML="傷官";
                    }
                 } else if (y5=="辛"){
                  if (y3=="甲") {
                     document.getElementById("btn2").innerHTML="正財"; 
                     } else if (y3=="乙"){
                     document.getElementById("btn2").innerHTML="偏財";
                     } else if (y3=="丙"){
                     document.getElementById("btn2").innerHTML="正官";
                     } else if (y3=="丁"){
                     document.getElementById("btn2").innerHTML="偏官";
                     } else if (y3=="戊"){
                     document.getElementById("btn2").innerHTML="正印";
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } else if (y3=="己"){
                     document.getElementById("btn2").innerHTML="偏印";
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } else if (y3=="庚"){
                     document.getElementById("btn2").innerHTML="劫財";
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } else if (y3=="辛"){
                     document.getElementById("btn2").innerHTML="比肩"; 
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } else if (y3=="壬"){
                     document.getElementById("btn2").innerHTML="傷官";
                     } else if (y3=="癸"){
                     document.getElementById("btn2").innerHTML="食神";
                     } 

                 } else if (y5=="壬"){      
                if (y3=="甲") {
                     document.getElementById("btn2").innerHTML="食神"; 
                    } else if (y3=="乙"){
                     document.getElementById("btn2").innerHTML="傷官";
                    } else if (y3=="丙"){
                     document.getElementById("btn2").innerHTML="偏財";
                    } else if (y3=="丁"){
                     document.getElementById("btn2").innerHTML="正財";
                    } else if (y3=="戊"){
                     document.getElementById("btn2").innerHTML="偏官";
                    } else if (y3=="己"){
                     document.getElementById("btn2").innerHTML="正官";
                    } else if (y3=="庚"){
                     document.getElementById("btn2").innerHTML="偏印";
                     document.getElementById("btn2").style.background= "Greenyellow"
                    } else if (y3=="辛"){
                     document.getElementById("btn2").innerHTML="正印"; 
                     document.getElementById("btn2").style.background= "Greenyellow"
                    } else if (y3=="壬"){
                     document.getElementById("btn2").innerHTML="比肩";
                     document.getElementById("btn2").style.background= "Greenyellow"
                    } else if (y3=="癸"){
                     document.getElementById("btn2").innerHTML="劫財";
                     document.getElementById("btn2").style.background= "Greenyellow"
                    }
                 } else if (y5=="癸"){
                  if (y3=="甲") {
                     document.getElementById("btn2").innerHTML="傷官"; 
                     } else if (y3=="乙"){
                     document.getElementById("btn2").innerHTML="食神";
                     } else if (y3=="丙"){
                     document.getElementById("btn2").innerHTML="正財";
                     } else if (y3=="丁"){
                     document.getElementById("btn2").innerHTML="偏財";
                     } else if (y3=="戊"){
                     document.getElementById("btn2").innerHTML="正官";
                     } else if (y3=="己"){
                     document.getElementById("btn2").innerHTML="偏官";
                     } else if (y3=="庚"){
                     document.getElementById("btn2").innerHTML="正印";
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } else if (y3=="辛"){
                     document.getElementById("btn2").innerHTML="偏印"; 
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } else if (y3=="壬"){
                     document.getElementById("btn2").innerHTML="劫財";
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } else if (y3=="癸"){
                     document.getElementById("btn2").innerHTML="比肩";
                     document.getElementById("btn2").style.background= "Greenyellow"
                     } 
                    }     
     
}
function btn3(){
    if (y5=="甲") {
       if (y1=="甲") {
            document.getElementById("btn3").innerHTML="比肩"; 
            document.getElementById("btn3").style.background= "Greenyellow"
       } else if (y1=="乙"){
            document.getElementById("btn3").innerHTML="劫財";
            document.getElementById("btn3").style.background= "Greenyellow"
       } else if (y1=="丙"){
        document.getElementById("btn3").innerHTML="食神";
       } else if (y1=="丁"){
        document.getElementById("btn3").innerHTML="傷官";
       } else if (y1=="戊"){
        document.getElementById("btn3").innerHTML="偏財";
       } else if (y1=="己"){
        document.getElementById("btn3").innerHTML="正財";
       } else if (y1=="庚"){
        document.getElementById("btn3").innerHTML="偏官";
       } else if (y1=="辛"){
        document.getElementById("btn3").innerHTML="正官"; 
       } else if (y1=="壬"){
        document.getElementById("btn3").innerHTML="偏印";
        document.getElementById("btn3").style.background= "Greenyellow"
       } else if (y1=="癸"){
        document.getElementById("btn3").innerHTML="正印";
        document.getElementById("btn3").style.background= "Greenyellow"
       }
    } else if (y5=="乙"){
     if (y1=="甲") {
         document.getElementById("btn3").innerHTML="劫財"; 
         document.getElementById("btn3").style.background= "Greenyellow"
       } else if (y1=="乙"){
            document.getElementById("btn3").innerHTML="比肩";
            document.getElementById("btn3").style.background= "Greenyellow"
       } else if (y1=="丙"){
        document.getElementById("btn3").innerHTML="傷官";
       } else if (y1=="丁"){
        document.getElementById("btn3").innerHTML="食神";
       } else if (y1=="戊"){
        document.getElementById("btn3").innerHTML="正財";
       } else if (y1=="己"){
        document.getElementById("btn3").innerHTML="偏財";
       } else if (y1=="庚"){
        document.getElementById("btn3").innerHTML="正官";
       } else if (y1=="辛"){
        document.getElementById("btn3").innerHTML="偏官"; 
       } else if (y1=="壬"){
        document.getElementById("btn3").innerHTML="正印";
        document.getElementById("btn3").style.background= "Greenyellow"
       } else if (y1=="癸"){
        document.getElementById("btn3").innerHTML="偏印";
        document.getElementById("btn3").style.background= "Greenyellow"
       }  
    } else if (y5=="丙"){      
       if (y1=="甲") {
            document.getElementById("btn3").innerHTML="偏印"; 
            document.getElementById("btn3").style.background= "Greenyellow"
           } else if (y1=="乙"){
            document.getElementById("btn3").innerHTML="正印";
            document.getElementById("btn3").style.background= "Greenyellow"
           } else if (y1=="丙"){
            document.getElementById("btn3").innerHTML="比肩";
            document.getElementById("btn3").style.background= "Greenyellow"
           } else if (y1=="丁"){
            document.getElementById("btn3").innerHTML="劫財";
            document.getElementById("btn3").style.background= "Greenyellow"
           } else if (y1=="戊"){
            document.getElementById("btn3").innerHTML="食神";
           } else if (y1=="己"){
            document.getElementById("btn3").innerHTML="傷官";
           } else if (y1=="庚"){
            document.getElementById("btn3").innerHTML="偏財";
           } else if (y1=="辛"){
            document.getElementById("btn3").innerHTML="正財"; 
           } else if (y1=="壬"){
            document.getElementById("btn3").innerHTML="偏官";
           } else if (y1=="癸"){
            document.getElementById("btn3").innerHTML="正官";
           }
        } else if (y5=="丁"){
         if (y1=="甲") {
            document.getElementById("btn3").innerHTML="正印"; 
            document.getElementById("btn3").style.background= "Greenyellow"
            } else if (y1=="乙"){
            document.getElementById("btn3").innerHTML="偏印";
            document.getElementById("btn3").style.background= "Greenyellow"
            } else if (y1=="丙"){
            document.getElementById("btn3").innerHTML="劫財";
            document.getElementById("btn3").style.background= "Greenyellow"
            } else if (y1=="丁"){
            document.getElementById("btn3").innerHTML="比肩";
            document.getElementById("btn3").style.background= "Greenyellow"
            } else if (y1=="戊"){
            document.getElementById("btn3").innerHTML="傷官";
            } else if (y1=="己"){
            document.getElementById("btn3").innerHTML="食神";
            } else if (y1=="庚"){
            document.getElementById("btn3").innerHTML="正財";
            } else if (y1=="辛"){
            document.getElementById("btn3").innerHTML="偏財"; 
            } else if (y1=="壬"){
            document.getElementById("btn3").innerHTML="正官";
            } else if (y1=="癸"){
            document.getElementById("btn3").innerHTML="偏官";
            } 
        }  else if (y5=="戊"){      
            if (y1=="甲") {
                 document.getElementById("btn3").innerHTML="偏官"; 
                } else if (y1=="乙"){
                 document.getElementById("btn3").innerHTML="正官";
                } else if (y1=="丙"){
                 document.getElementById("btn3").innerHTML="偏印";
                 document.getElementById("btn3").style.background= "Greenyellow"
                } else if (y1=="丁"){
                 document.getElementById("btn3").innerHTML="正印";
                 document.getElementById("btn3").style.background= "Greenyellow"
                } else if (y1=="戊"){
                 document.getElementById("btn3").innerHTML="比肩";
                 document.getElementById("btn3").style.background= "Greenyellow"
                } else if (y1=="己"){
                 document.getElementById("btn3").innerHTML="劫財";
                 document.getElementById("btn3").style.background= "Greenyellow"
                } else if (y1=="庚"){
                 document.getElementById("btn3").innerHTML="食神";
                } else if (y1=="辛"){
                 document.getElementById("btn3").innerHTML="傷官"; 
                } else if (y1=="壬"){
                 document.getElementById("btn3").innerHTML="偏財";
                } else if (y1=="癸"){
                 document.getElementById("btn3").innerHTML="正財";
                }
             } else if (y5=="己"){
              if (y1=="甲") {
                 document.getElementById("btn3").innerHTML="正官"; 
                 } else if (y1=="乙"){
                 document.getElementById("btn3").innerHTML="偏官";
                 } else if (y1=="丙"){
                 document.getElementById("btn3").innerHTML="正印";
                 document.getElementById("btn3").style.background= "Greenyellow"
                 } else if (y1=="丁"){
                 document.getElementById("btn3").innerHTML="偏印";
                 document.getElementById("btn3").style.background= "Greenyellow"
                 } else if (y1=="戊"){
                 document.getElementById("btn3").innerHTML="劫財";
                 document.getElementById("btn3").style.background= "Greenyellow"
                 } else if (y1=="己"){
                 document.getElementById("btn3").innerHTML="比肩";
                 document.getElementById("btn3").style.background= "Greenyellow"
                 } else if (y1=="庚"){
                 document.getElementById("btn3").innerHTML="傷官";
                 } else if (y1=="辛"){
                 document.getElementById("btn3").innerHTML="食神"; 
                 } else if (y1=="壬"){
                 document.getElementById("btn3").innerHTML="正財";
                 } else if (y1=="癸"){
                 document.getElementById("btn3").innerHTML="偏財";
                 } 
             }  else if (y5=="庚"){      
                if (y1=="甲") {
                     document.getElementById("btn3").innerHTML="偏財"; 
                    } else if (y1=="乙"){
                     document.getElementById("btn3").innerHTML="正財";
                    } else if (y1=="丙"){
                     document.getElementById("btn3").innerHTML="偏官";
                    } else if (y1=="丁"){
                     document.getElementById("btn3").innerHTML="正官";
                    } else if (y1=="戊"){
                     document.getElementById("btn3").innerHTML="偏印";
                     document.getElementById("btn3").style.background= "Greenyellow"
                    } else if (y1=="己"){
                     document.getElementById("btn3").innerHTML="正印";
                     document.getElementById("btn3").style.background= "Greenyellow"
                    } else if (y1=="庚"){
                     document.getElementById("btn3").innerHTML="比肩";
                     document.getElementById("btn3").style.background= "Greenyellow"
                    } else if (y1=="辛"){
                     document.getElementById("btn3").innerHTML="劫財"; 
                     document.getElementById("btn3").style.background= "Greenyellow"
                    } else if (y1=="壬"){
                     document.getElementById("btn3").innerHTML="食神";
                    } else if (y1=="癸"){
                     document.getElementById("btn3").innerHTML="傷官";
                    }
                 } else if (y5=="辛"){
                  if (y1=="甲") {
                     document.getElementById("btn3").innerHTML="正財"; 
                     } else if (y1=="乙"){
                     document.getElementById("btn3").innerHTML="偏財";
                     } else if (y1=="丙"){
                     document.getElementById("btn3").innerHTML="正官";
                     } else if (y1=="丁"){
                     document.getElementById("btn3").innerHTML="偏官";
                     } else if (y1=="戊"){
                     document.getElementById("btn3").innerHTML="正印";
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } else if (y1=="己"){
                     document.getElementById("btn3").innerHTML="偏印";
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } else if (y1=="庚"){
                     document.getElementById("btn3").innerHTML="劫財";
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } else if (y1=="辛"){
                     document.getElementById("btn3").innerHTML="比肩"; 
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } else if (y1=="壬"){
                     document.getElementById("btn3").innerHTML="傷官";
                     } else if (y1=="癸"){
                     document.getElementById("btn3").innerHTML="食神";
                     } 

                 } else if (y5=="壬"){      
                if (y1=="甲") {
                     document.getElementById("btn3").innerHTML="食神"; 
                    } else if (y1=="乙"){
                     document.getElementById("btn3").innerHTML="傷官";
                    } else if (y1=="丙"){
                     document.getElementById("btn3").innerHTML="偏財";
                    } else if (y1=="丁"){
                     document.getElementById("btn3").innerHTML="正財";
                    } else if (y1=="戊"){
                     document.getElementById("btn3").innerHTML="偏官";
                    } else if (y1=="己"){
                     document.getElementById("btn3").innerHTML="正官";
                    } else if (y1=="庚"){
                     document.getElementById("btn3").innerHTML="偏印";
                     document.getElementById("btn3").style.background= "Greenyellow"
                    } else if (y1=="辛"){
                     document.getElementById("btn3").innerHTML="正印"; 
                     document.getElementById("btn3").style.background= "Greenyellow"
                    } else if (y1=="壬"){
                     document.getElementById("btn3").innerHTML="比肩";
                     document.getElementById("btn3").style.background= "Greenyellow"
                    } else if (y1=="癸"){
                     document.getElementById("btn3").innerHTML="劫財";
                     document.getElementById("btn3").style.background= "Greenyellow"
                    }
                 } else if (y5=="癸"){
                  if (y1=="甲") {
                     document.getElementById("btn3").innerHTML="傷官"; 
                     } else if (y1=="乙"){
                     document.getElementById("btn3").innerHTML="食神";
                     } else if (y1=="丙"){
                     document.getElementById("btn3").innerHTML="正財";
                     } else if (y1=="丁"){
                     document.getElementById("btn3").innerHTML="偏財";
                     } else if (y1=="戊"){
                     document.getElementById("btn3").innerHTML="正官";
                     } else if (y1=="己"){
                     document.getElementById("btn3").innerHTML="偏官";
                     } else if (y1=="庚"){
                     document.getElementById("btn3").innerHTML="正印";
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } else if (y1=="辛"){
                     document.getElementById("btn3").innerHTML="偏印"; 
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } else if (y1=="壬"){
                     document.getElementById("btn3").innerHTML="劫財";
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } else if (y1=="癸"){
                     document.getElementById("btn3").innerHTML="比肩";
                     document.getElementById("btn3").style.background= "Greenyellow"
                     } 
                    }     
     
}
function btn4(){
    if (y5=="甲") {
       if (y8=="子") {
         document.getElementById("btn4").innerHTML="正印"; 
         document.getElementById("btn4").style.background= "Greenyellow"
       } else if (y8=="丑"){
         document.getElementById("btn4").innerHTML="正財";
       } else if (y8=="寅"){
        document.getElementById("btn4").innerHTML="比肩";
        document.getElementById("btn4").style.background= "Greenyellow"
       } else if (y8=="卯"){
        document.getElementById("btn4").innerHTML="劫財";
        document.getElementById("btn4").style.background= "Greenyellow"
       } else if (y8=="辰"){
        document.getElementById("btn4").innerHTML="偏財";
       } else if (y8=="巳"){
        document.getElementById("btn4").innerHTML="食神";
       } else if (y8=="午"){
        document.getElementById("btn4").innerHTML="傷官";
       } else if (y8=="未"){
        document.getElementById("btn4").innerHTML="正財"; 
       } else if (y8=="申"){
        document.getElementById("btn4").innerHTML="偏官";
       } else if (y8=="酉"){
        document.getElementById("btn4").innerHTML="正官";
       } else if (y8=="戌"){
        document.getElementById("btn4").innerHTML="偏財";
       } else if (y8=="亥"){
        document.getElementById("btn4").innerHTML="偏印";
        document.getElementById("btn4").style.background= "Greenyellow"
       }
    } else if (y5=="乙"){
        if (y8=="子") {
            document.getElementById("btn4").innerHTML="偏印"; 
            document.getElementById("btn4").style.background= "Greenyellow"
          } else if (y8=="丑"){
            document.getElementById("btn4").innerHTML="偏財";
          } else if (y8=="寅"){
           document.getElementById("btn4").innerHTML="劫財";
           document.getElementById("btn4").style.background= "Greenyellow"
          } else if (y8=="卯"){
           document.getElementById("btn4").innerHTML="比肩";
           document.getElementById("btn4").style.background= "Greenyellow"
          } else if (y8=="辰"){
           document.getElementById("btn4").innerHTML="正財";
          } else if (y8=="巳"){
           document.getElementById("btn4").innerHTML="傷官";
          } else if (y8=="午"){
           document.getElementById("btn4").innerHTML="食神";
          } else if (y8=="未"){
           document.getElementById("btn4").innerHTML="偏財"; 
          } else if (y8=="申"){
           document.getElementById("btn4").innerHTML="正官";
          } else if (y8=="酉"){
           document.getElementById("btn4").innerHTML="偏官";
          } else if (y8=="戌"){
           document.getElementById("btn4").innerHTML="正財";
          } else if (y8=="亥"){
           document.getElementById("btn4").innerHTML="正印";
           document.getElementById("btn4").style.background= "Greenyellow"
          }
    } else if (y5=="丙"){      
        if (y8=="子") {
            document.getElementById("btn4").innerHTML="正官"; 
          } else if (y8=="丑"){
            document.getElementById("btn4").innerHTML="傷官";
          } else if (y8=="寅"){
           document.getElementById("btn4").innerHTML="偏印";
           document.getElementById("btn4").style.background= "Greenyellow"
          } else if (y8=="卯"){
           document.getElementById("btn4").innerHTML="正印";
           document.getElementById("btn4").style.background= "Greenyellow"
          } else if (y8=="辰"){
           document.getElementById("btn4").innerHTML="食神";
          } else if (y8=="巳"){
           document.getElementById("btn4").innerHTML="比肩";
           document.getElementById("btn4").style.background= "Greenyellow"
          } else if (y8=="午"){
           document.getElementById("btn4").innerHTML="劫財";
           document.getElementById("btn4").style.background= "Greenyellow"
          } else if (y8=="未"){
           document.getElementById("btn4").innerHTML="傷官"; 
          } else if (y8=="申"){
           document.getElementById("btn4").innerHTML="偏財";
          } else if (y8=="酉"){
           document.getElementById("btn4").innerHTML="正財";
          } else if (y8=="戌"){
           document.getElementById("btn4").innerHTML="食神";
          } else if (y8=="亥"){
           document.getElementById("btn4").innerHTML="偏官";
          }
        } else if (y5=="丁"){
            if (y8=="子") {
                document.getElementById("btn4").innerHTML="偏官"; 
              } else if (y8=="丑"){
                document.getElementById("btn4").innerHTML="食神";
              } else if (y8=="寅"){
               document.getElementById("btn4").innerHTML="正印";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="卯"){
               document.getElementById("btn4").innerHTML="偏印";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="辰"){
               document.getElementById("btn4").innerHTML="傷官";
              } else if (y8=="巳"){
               document.getElementById("btn4").innerHTML="劫財";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="午"){
               document.getElementById("btn4").innerHTML="比肩";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="未"){
               document.getElementById("btn4").innerHTML="食神"; 
              } else if (y8=="申"){
               document.getElementById("btn4").innerHTML="正財";
              } else if (y8=="酉"){
               document.getElementById("btn4").innerHTML="偏財";
              } else if (y8=="戌"){
               document.getElementById("btn4").innerHTML="傷官";
              } else if (y8=="亥"){
               document.getElementById("btn4").innerHTML="正官";
              }
        }  else if (y5=="戊"){      
            if (y8=="子") {
                document.getElementById("btn4").innerHTML="正財"; 
              } else if (y8=="丑"){
                document.getElementById("btn4").innerHTML="劫財";
                document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="寅"){
               document.getElementById("btn4").innerHTML="偏官";
              } else if (y8=="卯"){
               document.getElementById("btn4").innerHTML="正官";
              } else if (y8=="辰"){
               document.getElementById("btn4").innerHTML="比肩";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="巳"){
               document.getElementById("btn4").innerHTML="偏印";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="午"){
               document.getElementById("btn4").innerHTML="正印";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="未"){
               document.getElementById("btn4").innerHTML="劫財"; 
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="申"){
               document.getElementById("btn4").innerHTML="食神";
              } else if (y8=="酉"){
               document.getElementById("btn4").innerHTML="傷官";
              } else if (y8=="戌"){
               document.getElementById("btn4").innerHTML="比肩";
               document.getElementById("btn4").style.background= "Greenyellow"
              } else if (y8=="亥"){
               document.getElementById("btn4").innerHTML="偏財";
              }
             } else if (y5=="己"){
                if (y8=="子") {
                    document.getElementById("btn4").innerHTML="偏財"; 
                  } else if (y8=="丑"){
                    document.getElementById("btn4").innerHTML="比肩";
                    document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="寅"){
                   document.getElementById("btn4").innerHTML="正官";
                  } else if (y8=="卯"){
                   document.getElementById("btn4").innerHTML="偏官";
                  } else if (y8=="辰"){
                   document.getElementById("btn4").innerHTML="劫財";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="巳"){
                   document.getElementById("btn4").innerHTML="正印";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="午"){
                   document.getElementById("btn4").innerHTML="偏印";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="未"){
                   document.getElementById("btn4").innerHTML="比肩"; 
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="申"){
                   document.getElementById("btn4").innerHTML="傷官";
                  } else if (y8=="酉"){
                   document.getElementById("btn4").innerHTML="食神";
                  } else if (y8=="戌"){
                   document.getElementById("btn4").innerHTML="劫財";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="亥"){
                   document.getElementById("btn4").innerHTML="正財";
                  }
             }  else if (y5=="庚"){      
                if (y8=="子") {
                    document.getElementById("btn4").innerHTML="傷官"; 
                  } else if (y8=="丑"){
                    document.getElementById("btn4").innerHTML="正印";
                    document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="寅"){
                   document.getElementById("btn4").innerHTML="偏財";
                  } else if (y8=="卯"){
                   document.getElementById("btn4").innerHTML="正財";
                  } else if (y8=="辰"){
                   document.getElementById("btn4").innerHTML="偏印";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="巳"){
                   document.getElementById("btn4").innerHTML="偏官";
                  } else if (y8=="午"){
                   document.getElementById("btn4").innerHTML="正官";
                  } else if (y8=="未"){
                   document.getElementById("btn4").innerHTML="正印"; 
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="申"){
                   document.getElementById("btn4").innerHTML="比肩";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="酉"){
                   document.getElementById("btn4").innerHTML="劫財";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="戌"){
                   document.getElementById("btn4").innerHTML="偏印";
                   document.getElementById("btn4").style.background= "Greenyellow"
                  } else if (y8=="亥"){
                   document.getElementById("btn4").innerHTML="食神";
                  }
                 } else if (y5=="辛"){
                    if (y8=="子") {
                        document.getElementById("btn4").innerHTML="食神"; 
                      } else if (y8=="丑"){
                        document.getElementById("btn4").innerHTML="偏印";
                        document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="寅"){
                       document.getElementById("btn4").innerHTML="正財";
                      } else if (y8=="卯"){
                       document.getElementById("btn4").innerHTML="偏財";
                      } else if (y8=="辰"){
                       document.getElementById("btn4").innerHTML="正印";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="巳"){
                       document.getElementById("btn4").innerHTML="正官";
                      } else if (y8=="午"){
                       document.getElementById("btn4").innerHTML="偏官";
                      } else if (y8=="未"){
                       document.getElementById("btn4").innerHTML="偏印"; 
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="申"){
                       document.getElementById("btn4").innerHTML="劫財";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="酉"){
                       document.getElementById("btn4").innerHTML="比肩";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="戌"){
                       document.getElementById("btn4").innerHTML="正印";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="亥"){
                       document.getElementById("btn4").innerHTML="傷官";
                      }

                 } else if (y5=="壬"){      
                    if (y8=="子") {
                        document.getElementById("btn4").innerHTML="劫財"; 
                        document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="丑"){
                        document.getElementById("btn4").innerHTML="正官";
                      } else if (y8=="寅"){
                       document.getElementById("btn4").innerHTML="食神";
                      } else if (y8=="卯"){
                       document.getElementById("btn4").innerHTML="傷官";
                      } else if (y8=="辰"){
                       document.getElementById("btn4").innerHTML="偏官";
                      } else if (y8=="巳"){
                       document.getElementById("btn4").innerHTML="偏財";
                      } else if (y8=="午"){
                       document.getElementById("btn4").innerHTML="正財";
                      } else if (y8=="未"){
                       document.getElementById("btn4").innerHTML="正官"; 
                      } else if (y8=="申"){
                       document.getElementById("btn4").innerHTML="偏印";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="酉"){
                       document.getElementById("btn4").innerHTML="正印";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="戌"){
                       document.getElementById("btn4").innerHTML="偏官";
                      } else if (y8=="亥"){
                       document.getElementById("btn4").innerHTML="比肩";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      }
                 } else if (y5=="癸"){
                    if (y8=="子") {
                        document.getElementById("btn4").innerHTML="比肩"; 
                        document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="丑"){
                        document.getElementById("btn4").innerHTML="偏官";
                      } else if (y8=="寅"){
                       document.getElementById("btn4").innerHTML="傷官";
                      } else if (y8=="卯"){
                       document.getElementById("btn4").innerHTML="食神";
                      } else if (y8=="辰"){
                       document.getElementById("btn4").innerHTML="正官";
                      } else if (y8=="巳"){
                       document.getElementById("btn4").innerHTML="正財";
                      } else if (y8=="午"){
                       document.getElementById("btn4").innerHTML="偏財";
                      } else if (y8=="未"){
                       document.getElementById("btn4").innerHTML="偏官"; 
                      } else if (y8=="申"){
                       document.getElementById("btn4").innerHTML="正印";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="酉"){
                       document.getElementById("btn4").innerHTML="偏印";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      } else if (y8=="戌"){
                       document.getElementById("btn4").innerHTML="正官";
                      } else if (y8=="亥"){
                       document.getElementById("btn4").innerHTML="劫財";
                       document.getElementById("btn4").style.background= "Greenyellow"
                      }
                    }     
     
}

function btn5(){
    if (y5=="甲") {
       if (y6=="子") {
         document.getElementById("btn5").innerHTML="正印"; 
         document.getElementById("btn5").style.background= "Greenyellow"
       } else if (y6=="丑"){
         document.getElementById("btn5").innerHTML="正財";
       } else if (y6=="寅"){
        document.getElementById("btn5").innerHTML="比肩";
        document.getElementById("btn5").style.background= "Greenyellow"
       } else if (y6=="卯"){
        document.getElementById("btn5").innerHTML="劫財";
        document.getElementById("btn5").style.background= "Greenyellow"
       } else if (y6=="辰"){
        document.getElementById("btn5").innerHTML="偏財";
       } else if (y6=="巳"){
        document.getElementById("btn5").innerHTML="食神";
       } else if (y6=="午"){
        document.getElementById("btn5").innerHTML="傷官";
       } else if (y6=="未"){
        document.getElementById("btn5").innerHTML="正財"; 
       } else if (y6=="申"){
        document.getElementById("btn5").innerHTML="偏官";
       } else if (y6=="酉"){
        document.getElementById("btn5").innerHTML="正官";
       } else if (y6=="戌"){
        document.getElementById("btn5").innerHTML="偏財";
       } else if (y6=="亥"){
        document.getElementById("btn5").innerHTML="偏印";
        document.getElementById("btn5").style.background= "Greenyellow"
       }
    } else if (y5=="乙"){
        if (y6=="子") {
            document.getElementById("btn5").innerHTML="偏印"; 
            document.getElementById("btn5").style.background= "Greenyellow"
          } else if (y6=="丑"){
            document.getElementById("btn5").innerHTML="偏財";
          } else if (y6=="寅"){
           document.getElementById("btn5").innerHTML="劫財";
           document.getElementById("btn5").style.background= "Greenyellow"
          } else if (y6=="卯"){
           document.getElementById("btn5").innerHTML="比肩";
           document.getElementById("btn5").style.background= "Greenyellow"
          } else if (y6=="辰"){
           document.getElementById("btn5").innerHTML="正財";
          } else if (y6=="巳"){
           document.getElementById("btn5").innerHTML="傷官";
          } else if (y6=="午"){
           document.getElementById("btn5").innerHTML="食神";
          } else if (y6=="未"){
           document.getElementById("btn5").innerHTML="偏財"; 
          } else if (y6=="申"){
           document.getElementById("btn5").innerHTML="正官";
          } else if (y6=="酉"){
           document.getElementById("btn5").innerHTML="偏官";
          } else if (y6=="戌"){
           document.getElementById("btn5").innerHTML="正財";
          } else if (y6=="亥"){
           document.getElementById("btn5").innerHTML="正印";
           document.getElementById("btn5").style.background= "Greenyellow"
          }
    } else if (y5=="丙"){      
        if (y6=="子") {
            document.getElementById("btn5").innerHTML="正官"; 
          } else if (y6=="丑"){
            document.getElementById("btn5").innerHTML="傷官";
          } else if (y6=="寅"){
           document.getElementById("btn5").innerHTML="偏印";
           document.getElementById("btn5").style.background= "Greenyellow"
          } else if (y6=="卯"){
           document.getElementById("btn5").innerHTML="正印";
           document.getElementById("btn5").style.background= "Greenyellow"
          } else if (y6=="辰"){
           document.getElementById("btn5").innerHTML="食神";
          } else if (y6=="巳"){
           document.getElementById("btn5").innerHTML="比肩";
           document.getElementById("btn5").style.background= "Greenyellow"
          } else if (y6=="午"){
           document.getElementById("btn5").innerHTML="劫財";
           document.getElementById("btn5").style.background= "Greenyellow"
          } else if (y6=="未"){
           document.getElementById("btn5").innerHTML="傷官"; 
          } else if (y6=="申"){
           document.getElementById("btn5").innerHTML="偏財";
          } else if (y6=="酉"){
           document.getElementById("btn5").innerHTML="正財";
          } else if (y6=="戌"){
           document.getElementById("btn5").innerHTML="食神";
          } else if (y6=="亥"){
           document.getElementById("btn5").innerHTML="偏官";
          }
        } else if (y5=="丁"){
            if (y6=="子") {
                document.getElementById("btn5").innerHTML="偏官"; 
              } else if (y6=="丑"){
                document.getElementById("btn5").innerHTML="食神";
              } else if (y6=="寅"){
               document.getElementById("btn5").innerHTML="正印";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="卯"){
               document.getElementById("btn5").innerHTML="偏印";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="辰"){
               document.getElementById("btn5").innerHTML="傷官";
              } else if (y6=="巳"){
               document.getElementById("btn5").innerHTML="劫財";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="午"){
               document.getElementById("btn5").innerHTML="比肩";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="未"){
               document.getElementById("btn5").innerHTML="食神"; 
              } else if (y6=="申"){
               document.getElementById("btn5").innerHTML="正財";
              } else if (y6=="酉"){
               document.getElementById("btn5").innerHTML="偏財";
              } else if (y6=="戌"){
               document.getElementById("btn5").innerHTML="傷官";
              } else if (y6=="亥"){
               document.getElementById("btn5").innerHTML="正官";
              }
        }  else if (y5=="戊"){      
            if (y6=="子") {
                document.getElementById("btn5").innerHTML="正財"; 
              } else if (y6=="丑"){
                document.getElementById("btn5").innerHTML="劫財";
                document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="寅"){
               document.getElementById("btn5").innerHTML="偏官";
              } else if (y6=="卯"){
               document.getElementById("btn5").innerHTML="正官";
              } else if (y6=="辰"){
               document.getElementById("btn5").innerHTML="比肩";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="巳"){
               document.getElementById("btn5").innerHTML="偏印";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="午"){
               document.getElementById("btn5").innerHTML="正印";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="未"){
               document.getElementById("btn5").innerHTML="劫財"; 
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="申"){
               document.getElementById("btn5").innerHTML="食神";
              } else if (y6=="酉"){
               document.getElementById("btn5").innerHTML="傷官";
              } else if (y6=="戌"){
               document.getElementById("btn5").innerHTML="比肩";
               document.getElementById("btn5").style.background= "Greenyellow"
              } else if (y6=="亥"){
               document.getElementById("btn5").innerHTML="偏財";
              }
             } else if (y5=="己"){
                if (y6=="子") {
                    document.getElementById("btn5").innerHTML="偏財"; 
                  } else if (y6=="丑"){
                    document.getElementById("btn5").innerHTML="比肩";
                    document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="寅"){
                   document.getElementById("btn5").innerHTML="正官";
                  } else if (y6=="卯"){
                   document.getElementById("btn5").innerHTML="偏官";
                  } else if (y6=="辰"){
                   document.getElementById("btn5").innerHTML="劫財";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="巳"){
                   document.getElementById("btn5").innerHTML="正印";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="午"){
                   document.getElementById("btn5").innerHTML="偏印";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="未"){
                   document.getElementById("btn5").innerHTML="比肩"; 
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="申"){
                   document.getElementById("btn5").innerHTML="傷官";
                  } else if (y6=="酉"){
                   document.getElementById("btn5").innerHTML="食神";
                  } else if (y6=="戌"){
                   document.getElementById("btn5").innerHTML="劫財";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="亥"){
                   document.getElementById("btn5").innerHTML="正財";
                  }
             }  else if (y5=="庚"){      
                if (y6=="子") {
                    document.getElementById("btn5").innerHTML="傷官"; 
                  } else if (y6=="丑"){
                    document.getElementById("btn5").innerHTML="正印";
                    document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="寅"){
                   document.getElementById("btn5").innerHTML="偏財";
                  } else if (y6=="卯"){
                   document.getElementById("btn5").innerHTML="正財";
                  } else if (y6=="辰"){
                   document.getElementById("btn5").innerHTML="偏印";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="巳"){
                   document.getElementById("btn5").innerHTML="偏官";
                  } else if (y6=="午"){
                   document.getElementById("btn5").innerHTML="正官";
                  } else if (y6=="未"){
                   document.getElementById("btn5").innerHTML="正印"; 
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="申"){
                   document.getElementById("btn5").innerHTML="比肩";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="酉"){
                   document.getElementById("btn5").innerHTML="劫財";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="戌"){
                   document.getElementById("btn5").innerHTML="偏印";
                   document.getElementById("btn5").style.background= "Greenyellow"
                  } else if (y6=="亥"){
                   document.getElementById("btn5").innerHTML="食神";
                  }
                 } else if (y5=="辛"){
                    if (y6=="子") {
                        document.getElementById("btn5").innerHTML="食神"; 
                      } else if (y6=="丑"){
                        document.getElementById("btn5").innerHTML="偏印";
                        document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="寅"){
                       document.getElementById("btn5").innerHTML="正財";
                      } else if (y6=="卯"){
                       document.getElementById("btn5").innerHTML="偏財";
                      } else if (y6=="辰"){
                       document.getElementById("btn5").innerHTML="正印";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="巳"){
                       document.getElementById("btn5").innerHTML="正官";
                      } else if (y6=="午"){
                       document.getElementById("btn5").innerHTML="偏官";
                      } else if (y6=="未"){
                       document.getElementById("btn5").innerHTML="偏印"; 
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="申"){
                       document.getElementById("btn5").innerHTML="劫財";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="酉"){
                       document.getElementById("btn5").innerHTML="比肩";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="戌"){
                       document.getElementById("btn5").innerHTML="正印";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="亥"){
                       document.getElementById("btn5").innerHTML="傷官";
                      }

                 } else if (y5=="壬"){      
                    if (y6=="子") {
                        document.getElementById("btn5").innerHTML="劫財"; 
                        document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="丑"){
                        document.getElementById("btn5").innerHTML="正官";
                      } else if (y6=="寅"){
                       document.getElementById("btn5").innerHTML="食神";
                      } else if (y6=="卯"){
                       document.getElementById("btn5").innerHTML="傷官";
                      } else if (y6=="辰"){
                       document.getElementById("btn5").innerHTML="偏官";
                      } else if (y6=="巳"){
                       document.getElementById("btn5").innerHTML="偏財";
                      } else if (y6=="午"){
                       document.getElementById("btn5").innerHTML="正財";
                      } else if (y6=="未"){
                       document.getElementById("btn5").innerHTML="正官"; 
                      } else if (y6=="申"){
                       document.getElementById("btn5").innerHTML="偏印";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="酉"){
                       document.getElementById("btn5").innerHTML="正印";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="戌"){
                       document.getElementById("btn5").innerHTML="偏官";
                      } else if (y6=="亥"){
                       document.getElementById("btn5").innerHTML="比肩";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      }
                 } else if (y5=="癸"){
                    if (y6=="子") {
                        document.getElementById("btn5").innerHTML="比肩"; 
                        document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="丑"){
                        document.getElementById("btn5").innerHTML="偏官";
                      } else if (y6=="寅"){
                       document.getElementById("btn5").innerHTML="傷官";
                      } else if (y6=="卯"){
                       document.getElementById("btn5").innerHTML="食神";
                      } else if (y6=="辰"){
                       document.getElementById("btn5").innerHTML="正官";
                      } else if (y6=="巳"){
                       document.getElementById("btn5").innerHTML="正財";
                      } else if (y6=="午"){
                       document.getElementById("btn5").innerHTML="偏財";
                      } else if (y6=="未"){
                       document.getElementById("btn5").innerHTML="偏官"; 
                      } else if (y6=="申"){
                       document.getElementById("btn5").innerHTML="正印";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="酉"){
                       document.getElementById("btn5").innerHTML="偏印";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      } else if (y6=="戌"){
                       document.getElementById("btn5").innerHTML="正官";
                      } else if (y6=="亥"){
                       document.getElementById("btn5").innerHTML="劫財";
                       document.getElementById("btn5").style.background= "Greenyellow"
                      }
                    }     
     
}

function btn6(){
    if (y5=="甲") {
       if (y4=="子") {
         document.getElementById("btn6").innerHTML="正印"; 
         document.getElementById("btn6").style.background= "Greenyellow"
       } else if (y4=="丑"){
         document.getElementById("btn6").innerHTML="正財";
       } else if (y4=="寅"){
        document.getElementById("btn6").innerHTML="比肩";
        document.getElementById("btn6").style.background= "Greenyellow"
       } else if (y4=="卯"){
        document.getElementById("btn6").innerHTML="劫財";
        document.getElementById("btn6").style.background= "Greenyellow"
       } else if (y4=="辰"){
        document.getElementById("btn6").innerHTML="偏財";
       } else if (y4=="巳"){
        document.getElementById("btn6").innerHTML="食神";
       } else if (y4=="午"){
        document.getElementById("btn6").innerHTML="傷官";
       } else if (y4=="未"){
        document.getElementById("btn6").innerHTML="正財"; 
       } else if (y4=="申"){
        document.getElementById("btn6").innerHTML="偏官";
       } else if (y4=="酉"){
        document.getElementById("btn6").innerHTML="正官";
       } else if (y4=="戌"){
        document.getElementById("btn6").innerHTML="偏財";
       } else if (y4=="亥"){
        document.getElementById("btn6").innerHTML="偏印";
        document.getElementById("btn6").style.background= "Greenyellow"
       }
    } else if (y5=="乙"){
        if (y4=="子") {
            document.getElementById("btn6").innerHTML="偏印"; 
            document.getElementById("btn6").style.background= "Greenyellow"
          } else if (y4=="丑"){
            document.getElementById("btn6").innerHTML="偏財";
          } else if (y4=="寅"){
           document.getElementById("btn6").innerHTML="劫財";
           document.getElementById("btn6").style.background= "Greenyellow"
          } else if (y4=="卯"){
           document.getElementById("btn6").innerHTML="比肩";
           document.getElementById("btn6").style.background= "Greenyellow"
          } else if (y4=="辰"){
           document.getElementById("btn6").innerHTML="正財";
          } else if (y4=="巳"){
           document.getElementById("btn6").innerHTML="傷官";
          } else if (y4=="午"){
           document.getElementById("btn6").innerHTML="食神";
          } else if (y4=="未"){
           document.getElementById("btn6").innerHTML="偏財"; 
          } else if (y4=="申"){
           document.getElementById("btn6").innerHTML="正官";
          } else if (y4=="酉"){
           document.getElementById("btn6").innerHTML="偏官";
          } else if (y4=="戌"){
           document.getElementById("btn6").innerHTML="正財";
          } else if (y4=="亥"){
           document.getElementById("btn6").innerHTML="正印";
           document.getElementById("btn6").style.background= "Greenyellow"
          }
    } else if (y5=="丙"){      
        if (y4=="子") {
            document.getElementById("btn6").innerHTML="正官"; 
          } else if (y4=="丑"){
            document.getElementById("btn6").innerHTML="傷官";
          } else if (y4=="寅"){
           document.getElementById("btn6").innerHTML="偏印";
           document.getElementById("btn6").style.background= "Greenyellow"
          } else if (y4=="卯"){
           document.getElementById("btn6").innerHTML="正印";
           document.getElementById("btn6").style.background= "Greenyellow"
          } else if (y4=="辰"){
           document.getElementById("btn6").innerHTML="食神";
          } else if (y4=="巳"){
           document.getElementById("btn6").innerHTML="比肩";
           document.getElementById("btn6").style.background= "Greenyellow"
          } else if (y4=="午"){
           document.getElementById("btn6").innerHTML="劫財";
           document.getElementById("btn6").style.background= "Greenyellow"
          } else if (y4=="未"){
           document.getElementById("btn6").innerHTML="傷官"; 
          } else if (y4=="申"){
           document.getElementById("btn6").innerHTML="偏財";
          } else if (y4=="酉"){
           document.getElementById("btn6").innerHTML="正財";
          } else if (y4=="戌"){
           document.getElementById("btn6").innerHTML="食神";
          } else if (y4=="亥"){
           document.getElementById("btn6").innerHTML="偏官";
          }
        } else if (y5=="丁"){
            if (y4=="子") {
                document.getElementById("btn6").innerHTML="偏官"; 
              } else if (y4=="丑"){
                document.getElementById("btn6").innerHTML="食神";
              } else if (y4=="寅"){
               document.getElementById("btn6").innerHTML="正印";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="卯"){
               document.getElementById("btn6").innerHTML="偏印";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="辰"){
               document.getElementById("btn6").innerHTML="傷官";
              } else if (y4=="巳"){
               document.getElementById("btn6").innerHTML="劫財";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="午"){
               document.getElementById("btn6").innerHTML="比肩";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="未"){
               document.getElementById("btn6").innerHTML="食神"; 
              } else if (y4=="申"){
               document.getElementById("btn6").innerHTML="正財";
              } else if (y4=="酉"){
               document.getElementById("btn6").innerHTML="偏財";
              } else if (y4=="戌"){
               document.getElementById("btn6").innerHTML="傷官";
              } else if (y4=="亥"){
               document.getElementById("btn6").innerHTML="正官";
              }
        }  else if (y5=="戊"){      
            if (y4=="子") {
                document.getElementById("btn6").innerHTML="正財"; 
              } else if (y4=="丑"){
                document.getElementById("btn6").innerHTML="劫財";
                document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="寅"){
               document.getElementById("btn6").innerHTML="偏官";
              } else if (y4=="卯"){
               document.getElementById("btn6").innerHTML="正官";
              } else if (y4=="辰"){
               document.getElementById("btn6").innerHTML="比肩";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="巳"){
               document.getElementById("btn6").innerHTML="偏印";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="午"){
               document.getElementById("btn6").innerHTML="正印";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="未"){
               document.getElementById("btn6").innerHTML="劫財"; 
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="申"){
               document.getElementById("btn6").innerHTML="食神";
              } else if (y4=="酉"){
               document.getElementById("btn6").innerHTML="傷官";
              } else if (y4=="戌"){
               document.getElementById("btn6").innerHTML="比肩";
               document.getElementById("btn6").style.background= "Greenyellow"
              } else if (y4=="亥"){
               document.getElementById("btn6").innerHTML="偏財";
              }
             } else if (y5=="己"){
                if (y4=="子") {
                    document.getElementById("btn6").innerHTML="偏財"; 
                  } else if (y4=="丑"){
                    document.getElementById("btn6").innerHTML="比肩";
                    document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="寅"){
                   document.getElementById("btn6").innerHTML="正官";
                  } else if (y4=="卯"){
                   document.getElementById("btn6").innerHTML="偏官";
                  } else if (y4=="辰"){
                   document.getElementById("btn6").innerHTML="劫財";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="巳"){
                   document.getElementById("btn6").innerHTML="正印";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="午"){
                   document.getElementById("btn6").innerHTML="偏印";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="未"){
                   document.getElementById("btn6").innerHTML="比肩"; 
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="申"){
                   document.getElementById("btn6").innerHTML="傷官";
                  } else if (y4=="酉"){
                   document.getElementById("btn6").innerHTML="食神";
                  } else if (y4=="戌"){
                   document.getElementById("btn6").innerHTML="劫財";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="亥"){
                   document.getElementById("btn6").innerHTML="正財";
                  }
             }  else if (y5=="庚"){      
                if (y4=="子") {
                    document.getElementById("btn6").innerHTML="傷官"; 
                  } else if (y4=="丑"){
                    document.getElementById("btn6").innerHTML="正印";
                    document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="寅"){
                   document.getElementById("btn6").innerHTML="偏財";
                  } else if (y4=="卯"){
                   document.getElementById("btn6").innerHTML="正財";
                  } else if (y4=="辰"){
                   document.getElementById("btn6").innerHTML="偏印";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="巳"){
                   document.getElementById("btn6").innerHTML="偏官";
                  } else if (y4=="午"){
                   document.getElementById("btn6").innerHTML="正官";
                  } else if (y4=="未"){
                   document.getElementById("btn6").innerHTML="正印"; 
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="申"){
                   document.getElementById("btn6").innerHTML="比肩";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="酉"){
                   document.getElementById("btn6").innerHTML="劫財";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="戌"){
                   document.getElementById("btn6").innerHTML="偏印";
                   document.getElementById("btn6").style.background= "Greenyellow"
                  } else if (y4=="亥"){
                   document.getElementById("btn6").innerHTML="食神";
                  }
                 } else if (y5=="辛"){
                    if (y4=="子") {
                        document.getElementById("btn6").innerHTML="食神"; 
                      } else if (y4=="丑"){
                        document.getElementById("btn6").innerHTML="偏印";
                        document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="寅"){
                       document.getElementById("btn6").innerHTML="正財";
                      } else if (y4=="卯"){
                       document.getElementById("btn6").innerHTML="偏財";
                      } else if (y4=="辰"){
                       document.getElementById("btn6").innerHTML="正印";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="巳"){
                       document.getElementById("btn6").innerHTML="正官";
                      } else if (y4=="午"){
                       document.getElementById("btn6").innerHTML="偏官";
                      } else if (y4=="未"){
                       document.getElementById("btn6").innerHTML="偏印"; 
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="申"){
                       document.getElementById("btn6").innerHTML="劫財";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="酉"){
                       document.getElementById("btn6").innerHTML="比肩";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="戌"){
                       document.getElementById("btn6").innerHTML="正印";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="亥"){
                       document.getElementById("btn6").innerHTML="傷官";
                      }

                 } else if (y5=="壬"){      
                    if (y4=="子") {
                        document.getElementById("btn6").innerHTML="劫財"; 
                        document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="丑"){
                        document.getElementById("btn6").innerHTML="正官";
                      } else if (y4=="寅"){
                       document.getElementById("btn6").innerHTML="食神";
                      } else if (y4=="卯"){
                       document.getElementById("btn6").innerHTML="傷官";
                      } else if (y4=="辰"){
                       document.getElementById("btn6").innerHTML="偏官";
                      } else if (y4=="巳"){
                       document.getElementById("btn6").innerHTML="偏財";
                      } else if (y4=="午"){
                       document.getElementById("btn6").innerHTML="正財";
                      } else if (y4=="未"){
                       document.getElementById("btn6").innerHTML="正官"; 
                      } else if (y4=="申"){
                       document.getElementById("btn6").innerHTML="偏印";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="酉"){
                       document.getElementById("btn6").innerHTML="正印";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="戌"){
                       document.getElementById("btn6").innerHTML="偏官";
                      } else if (y4=="亥"){
                       document.getElementById("btn6").innerHTML="比肩";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      }
                 } else if (y5=="癸"){
                    if (y4=="子") {
                        document.getElementById("btn6").innerHTML="比肩"; 
                        document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="丑"){
                        document.getElementById("btn6").innerHTML="偏官";
                      } else if (y4=="寅"){
                       document.getElementById("btn6").innerHTML="傷官";
                      } else if (y4=="卯"){
                       document.getElementById("btn6").innerHTML="食神";
                      } else if (y4=="辰"){
                       document.getElementById("btn6").innerHTML="正官";
                      } else if (y4=="巳"){
                       document.getElementById("btn6").innerHTML="正財";
                      } else if (y4=="午"){
                       document.getElementById("btn6").innerHTML="偏財";
                      } else if (y4=="未"){
                       document.getElementById("btn6").innerHTML="偏官"; 
                      } else if (y4=="申"){
                       document.getElementById("btn6").innerHTML="正印";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="酉"){
                       document.getElementById("btn6").innerHTML="偏印";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      } else if (y4=="戌"){
                       document.getElementById("btn6").innerHTML="正官";
                      } else if (y4=="亥"){
                       document.getElementById("btn6").innerHTML="劫財";
                       document.getElementById("btn6").style.background= "Greenyellow"
                      }
                    }     
     
}

function btn7(){
    if (y5=="甲") {
       if (y2=="子") {
         document.getElementById("btn7").innerHTML="正印"; 
         document.getElementById("btn7").style.background= "Greenyellow"
       } else if (y2=="丑"){
         document.getElementById("btn7").innerHTML="正財";
       } else if (y2=="寅"){
        document.getElementById("btn7").innerHTML="比肩";
        document.getElementById("btn7").style.background= "Greenyellow"
       } else if (y2=="卯"){
        document.getElementById("btn7").innerHTML="劫財";
        document.getElementById("btn7").style.background= "Greenyellow"
       } else if (y2=="辰"){
        document.getElementById("btn7").innerHTML="偏財";
       } else if (y2=="巳"){
        document.getElementById("btn7").innerHTML="食神";
       } else if (y2=="午"){
        document.getElementById("btn7").innerHTML="傷官";
       } else if (y2=="未"){
        document.getElementById("btn7").innerHTML="正財"; 
       } else if (y2=="申"){
        document.getElementById("btn7").innerHTML="偏官";
       } else if (y2=="酉"){
        document.getElementById("btn7").innerHTML="正官";
       } else if (y2=="戌"){
        document.getElementById("btn7").innerHTML="偏財";
       } else if (y2=="亥"){
        document.getElementById("btn7").innerHTML="偏印";
        document.getElementById("btn7").style.background= "Greenyellow"
       }
    } else if (y5=="乙"){
        if (y2=="子") {
            document.getElementById("btn7").innerHTML="偏印"; 
            document.getElementById("btn7").style.background= "Greenyellow"
          } else if (y2=="丑"){
            document.getElementById("btn7").innerHTML="偏財";
          } else if (y2=="寅"){
           document.getElementById("btn7").innerHTML="劫財";
           document.getElementById("btn7").style.background= "Greenyellow"
          } else if (y2=="卯"){
           document.getElementById("btn7").innerHTML="比肩";
           document.getElementById("btn7").style.background= "Greenyellow"
          } else if (y2=="辰"){
           document.getElementById("btn7").innerHTML="正財";
          } else if (y2=="巳"){
           document.getElementById("btn7").innerHTML="傷官";
          } else if (y2=="午"){
           document.getElementById("btn7").innerHTML="食神";
          } else if (y2=="未"){
           document.getElementById("btn7").innerHTML="偏財"; 
          } else if (y2=="申"){
           document.getElementById("btn7").innerHTML="正官";
          } else if (y2=="酉"){
           document.getElementById("btn7").innerHTML="偏官";
          } else if (y2=="戌"){
           document.getElementById("btn7").innerHTML="正財";
          } else if (y2=="亥"){
           document.getElementById("btn7").innerHTML="正印";
           document.getElementById("btn7").style.background= "Greenyellow"
          }
    } else if (y5=="丙"){      
        if (y2=="子") {
            document.getElementById("btn7").innerHTML="正官"; 
          } else if (y2=="丑"){
            document.getElementById("btn7").innerHTML="傷官";
          } else if (y2=="寅"){
           document.getElementById("btn7").innerHTML="偏印";
           document.getElementById("btn7").style.background= "Greenyellow"
          } else if (y2=="卯"){
           document.getElementById("btn7").innerHTML="正印";
           document.getElementById("btn7").style.background= "Greenyellow"
          } else if (y2=="辰"){
           document.getElementById("btn7").innerHTML="食神";
          } else if (y2=="巳"){
           document.getElementById("btn7").innerHTML="比肩";
           document.getElementById("btn7").style.background= "Greenyellow"
          } else if (y2=="午"){
           document.getElementById("btn7").innerHTML="劫財";
           document.getElementById("btn7").style.background= "Greenyellow"
          } else if (y2=="未"){
           document.getElementById("btn7").innerHTML="傷官"; 
          } else if (y2=="申"){
           document.getElementById("btn7").innerHTML="偏財";
          } else if (y2=="酉"){
           document.getElementById("btn7").innerHTML="正財";
          } else if (y2=="戌"){
           document.getElementById("btn7").innerHTML="食神";
          } else if (y2=="亥"){
           document.getElementById("btn7").innerHTML="偏官";
          }
        } else if (y5=="丁"){
            if (y2=="子") {
                document.getElementById("btn7").innerHTML="偏官"; 
              } else if (y2=="丑"){
                document.getElementById("btn7").innerHTML="食神";
              } else if (y2=="寅"){
               document.getElementById("btn7").innerHTML="正印";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="卯"){
               document.getElementById("btn7").innerHTML="偏印";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="辰"){
               document.getElementById("btn7").innerHTML="傷官";
              } else if (y2=="巳"){
               document.getElementById("btn7").innerHTML="劫財";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="午"){
               document.getElementById("btn7").innerHTML="比肩";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="未"){
               document.getElementById("btn7").innerHTML="食神"; 
              } else if (y2=="申"){
               document.getElementById("btn7").innerHTML="正財";
              } else if (y2=="酉"){
               document.getElementById("btn7").innerHTML="偏財";
              } else if (y2=="戌"){
               document.getElementById("btn7").innerHTML="傷官";
              } else if (y2=="亥"){
               document.getElementById("btn7").innerHTML="正官";
              }
        }  else if (y5=="戊"){      
            if (y2=="子") {
                document.getElementById("btn7").innerHTML="正財"; 
              } else if (y2=="丑"){
                document.getElementById("btn7").innerHTML="劫財";
                document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="寅"){
               document.getElementById("btn7").innerHTML="偏官";
              } else if (y2=="卯"){
               document.getElementById("btn7").innerHTML="正官";
              } else if (y2=="辰"){
               document.getElementById("btn7").innerHTML="比肩";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="巳"){
               document.getElementById("btn7").innerHTML="偏印";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="午"){
               document.getElementById("btn7").innerHTML="正印";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="未"){
               document.getElementById("btn7").innerHTML="劫財"; 
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="申"){
               document.getElementById("btn7").innerHTML="食神";
              } else if (y2=="酉"){
               document.getElementById("btn7").innerHTML="傷官";
              } else if (y2=="戌"){
               document.getElementById("btn7").innerHTML="比肩";
               document.getElementById("btn7").style.background= "Greenyellow"
              } else if (y2=="亥"){
               document.getElementById("btn7").innerHTML="偏財";
              }
             } else if (y5=="己"){
                if (y2=="子") {
                    document.getElementById("btn7").innerHTML="偏財"; 
                  } else if (y2=="丑"){
                    document.getElementById("btn7").innerHTML="比肩";
                    document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="寅"){
                   document.getElementById("btn7").innerHTML="正官";
                  } else if (y2=="卯"){
                   document.getElementById("btn7").innerHTML="偏官";
                  } else if (y2=="辰"){
                   document.getElementById("btn7").innerHTML="劫財";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="巳"){
                   document.getElementById("btn7").innerHTML="正印";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="午"){
                   document.getElementById("btn7").innerHTML="偏印";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="未"){
                   document.getElementById("btn7").innerHTML="比肩"; 
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="申"){
                   document.getElementById("btn7").innerHTML="傷官";
                  } else if (y2=="酉"){
                   document.getElementById("btn7").innerHTML="食神";
                  } else if (y2=="戌"){
                   document.getElementById("btn7").innerHTML="劫財";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="亥"){
                   document.getElementById("btn7").innerHTML="正財";
                  }
             }  else if (y5=="庚"){      
                if (y2=="子") {
                    document.getElementById("btn7").innerHTML="傷官"; 
                  } else if (y2=="丑"){
                    document.getElementById("btn7").innerHTML="正印";
                    document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="寅"){
                   document.getElementById("btn7").innerHTML="偏財";
                  } else if (y2=="卯"){
                   document.getElementById("btn7").innerHTML="正財";
                  } else if (y2=="辰"){
                   document.getElementById("btn7").innerHTML="偏印";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="巳"){
                   document.getElementById("btn7").innerHTML="偏官";
                  } else if (y2=="午"){
                   document.getElementById("btn7").innerHTML="正官";
                  } else if (y2=="未"){
                   document.getElementById("btn7").innerHTML="正印"; 
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="申"){
                   document.getElementById("btn7").innerHTML="比肩";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="酉"){
                   document.getElementById("btn7").innerHTML="劫財";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="戌"){
                   document.getElementById("btn7").innerHTML="偏印";
                   document.getElementById("btn7").style.background= "Greenyellow"
                  } else if (y2=="亥"){
                   document.getElementById("btn7").innerHTML="食神";
                  }
                 } else if (y5=="辛"){
                    if (y2=="子") {
                        document.getElementById("btn7").innerHTML="食神"; 
                      } else if (y2=="丑"){
                        document.getElementById("btn7").innerHTML="偏印";
                        document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="寅"){
                       document.getElementById("btn7").innerHTML="正財";
                      } else if (y2=="卯"){
                       document.getElementById("btn7").innerHTML="偏財";
                      } else if (y2=="辰"){
                       document.getElementById("btn7").innerHTML="正印";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="巳"){
                       document.getElementById("btn7").innerHTML="正官";
                      } else if (y2=="午"){
                       document.getElementById("btn7").innerHTML="偏官";
                      } else if (y2=="未"){
                       document.getElementById("btn7").innerHTML="偏印"; 
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="申"){
                       document.getElementById("btn7").innerHTML="劫財";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="酉"){
                       document.getElementById("btn7").innerHTML="比肩";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="戌"){
                       document.getElementById("btn7").innerHTML="正印";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="亥"){
                       document.getElementById("btn7").innerHTML="傷官";
                      }

                 } else if (y5=="壬"){      
                    if (y2=="子") {
                        document.getElementById("btn7").innerHTML="劫財"; 
                        document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="丑"){
                        document.getElementById("btn7").innerHTML="正官";
                      } else if (y2=="寅"){
                       document.getElementById("btn7").innerHTML="食神";
                      } else if (y2=="卯"){
                       document.getElementById("btn7").innerHTML="傷官";
                      } else if (y2=="辰"){
                       document.getElementById("btn7").innerHTML="偏官";
                      } else if (y2=="巳"){
                       document.getElementById("btn7").innerHTML="偏財";
                      } else if (y2=="午"){
                       document.getElementById("btn7").innerHTML="正財";
                      } else if (y2=="未"){
                       document.getElementById("btn7").innerHTML="正官"; 
                      } else if (y2=="申"){
                       document.getElementById("btn7").innerHTML="偏印";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="酉"){
                       document.getElementById("btn7").innerHTML="正印";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="戌"){
                       document.getElementById("btn7").innerHTML="偏官";
                      } else if (y2=="亥"){
                       document.getElementById("btn7").innerHTML="比肩";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      }
                 } else if (y5=="癸"){
                    if (y2=="子") {
                        document.getElementById("btn7").innerHTML="比肩"; 
                        document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="丑"){
                        document.getElementById("btn7").innerHTML="偏官";
                      } else if (y2=="寅"){
                       document.getElementById("btn7").innerHTML="傷官";
                      } else if (y2=="卯"){
                       document.getElementById("btn7").innerHTML="食神";
                      } else if (y2=="辰"){
                       document.getElementById("btn7").innerHTML="正官";
                      } else if (y2=="巳"){
                       document.getElementById("btn7").innerHTML="正財";
                      } else if (y2=="午"){
                       document.getElementById("btn7").innerHTML="偏財";
                      } else if (y2=="未"){
                       document.getElementById("btn7").innerHTML="偏官"; 
                      } else if (y2=="申"){
                       document.getElementById("btn7").innerHTML="正印";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="酉"){
                       document.getElementById("btn7").innerHTML="偏印";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      } else if (y2=="戌"){
                       document.getElementById("btn7").innerHTML="正官";
                      } else if (y2=="亥"){
                       document.getElementById("btn7").innerHTML="劫財";
                       document.getElementById("btn7").style.background= "Greenyellow"
                      }
                    }     
     
}