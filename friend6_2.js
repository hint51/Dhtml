var yy1, yy2, yy3, yy4, yy5, yy6, yy7, yy8
function result1(){
    ctn1(); 
    ctn2();
    ctn3();
    ctn4();
    ctn5();
    ctn6();
    ctn7();
}

function test1(){
    document.getElementById("ctn1").innerText="확인"
    document.getElementById("ctn2").innerText="확인"
    document.getElementById("ctn3").innerText="확인"
    document.getElementById("ctn4").innerText="확인"
    document.getElementById("ctn5").innerText="확인"
    document.getElementById("ctn6").innerText="확인"
    document.getElementById("ctn7").innerText="확인"
    document.getElementById("ctn1").style.background= "Gainsboro"
    document.getElementById("ctn2").style.background= "Gainsboro"
    document.getElementById("ctn3").style.background= "Gainsboro"
    document.getElementById("ctn4").style.background= "Gainsboro"
    document.getElementById("ctn5").style.background= "Gainsboro"
    document.getElementById("ctn6").style.background= "Gainsboro"
    document.getElementById("ctn7").style.background= "Gainsboro"
    document.getElementById("ctn1").style.borderColor = "cornsilk"
    document.getElementById("ctn2").style.borderColor = "cornsilk"
    document.getElementById("ctn3").style.borderColor = "cornsilk"
    document.getElementById("ctn4").style.borderColor = "cornsilk"
    document.getElementById("ctn5").style.borderColor = "cornsilk"
    document.getElementById("ctn6").style.borderColor = "cornsilk"
    document.getElementById("ctn7").style.borderColor = "cornsilk"

    //document.getElementById("ch7").style.display="none";
    var xx1 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xx2 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var xx4 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var xx5 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xx6 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var xx8 =  Math.floor(Math.random() * 12); // 0 ~ 11
    
   
    if (xx1==0) {
        yy1="甲"
    } else if (xx1==1){ 
        yy1="乙"   
    } else if (xx1==2){
        yy1="丙"
    } else if (xx1==3){
        yy1="丁" 
    } else if (xx1==4){
        yy1="戊" 
    } else if (xx1==5){
        yy1="己" 
    } else if (xx1==6){
        yy1="庚" 
    } else if (xx1==7){
        yy1="辛"
    } else if (xx1==8){
        yy1="壬"
    } else if (xx1==9){
        yy1="癸"
    }
    if (xx1==0 || xx1==2 || xx1==4 || xx1==6 || xx1==8)  {
        if (xx2==0 || xx2==1)  {
            yy2="子"
        } else if (xx2==2 || xx2==3) {
            yy2="寅"
        } else if (xx2==4 || xx2==5) {
            yy2="辰"
        } else if (xx2==6 || xx2==7) {
            yy2="午"
        } else if (xx2==8 || xx2==9) {
            yy2="申" 
        } else if (xx2==10 || xx2==11) {
            yy2="戌"
        }
    } else if (xx1==1 || xx1==3 || xx1==5 || xx1==7 || xx1==9)  { 
       
        if (xx2==1 || xx2==2)  {
            yy2="丑"
        } else if (xx2==3 || xx2==4) {
            yy2="卯"
        } else if (xx2==5 || xx2==6) {
            yy2="巳"
        } else if (xx2==7 || xx2==8) {
            yy2="未"
        } else if (xx2==9 || xx2==10) {
            yy2="酉" 
        } else if (xx2==11 || xx2==0) {
            yy2="亥"
        }
    } 
    if (xx4==0) { 
        yy4="子"  //인성
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="丙"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="戊"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="庚"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="壬"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="甲"
        }
    } else if (xx4==1){ 
        yy4="丑" // 인성
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="丁"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="己"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="辛"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="癸"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="乙" 
        }
    } else if (xx4==2){ //인성
        yy4="寅"
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="丙"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="戊"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="庚"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="壬"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="甲"
        }
    } else if (xx4==3){  //인성
        yy4="卯" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="丁"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="己"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="辛"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="癸"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="乙" 
        }
    } else if (xx4==4){  //비견
        yy4="辰" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="戊"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="庚"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="壬"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="甲"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="丙"
        }
    } else if (xx4==5){  //비견
        yy4="巳" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="己"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="辛"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="癸"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="乙"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="丁" 
        }
    } else if (xx4==6){  //식상
        yy4="午" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="庚"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="壬"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="甲"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="丙"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="戊"
        }
    } else if (xx4==7){  //식상
        yy4="未"
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="辛"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="癸"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="乙"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="丁"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="己" 
        }
    } else if (xx4==8){  //재성
        yy4="申"
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="壬"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="甲"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="丙"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="戊"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="庚"
        }
    } else if (xx4==9){  //재성
        yy4="酉"
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="癸"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="乙"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="丁"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="己"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="辛" 
        }
    } else if (xx4==10){ //관성
        yy4="戌"
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="甲"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="丙"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="戊"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="庚"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="壬"
        }
    } else if (xx4==11){  //관성
        yy4="亥"
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy3="乙"
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy3="丁"
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy3="己"
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy3="辛"
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy3="癸" 
        }
        
    }
    sma1=xx1
    document.getElementById("ch1").innerHTML = yy1;
    document.getElementById("ch2").innerHTML = yy2;
    document.getElementById("ch3").innerHTML = yy3;
    document.getElementById("ch4").innerHTML = yy4;
    //document.getElementById("ch3-1").innerHTML = "  ";
    //document.getElementById("ch7-1").innerHTML = "  ";



    if (xx5==0) {
        yy5="甲"
    } else if (xx5==1){ 
        yy5="乙"   
    } else if (xx5==2){
        yy5="丙"
    } else if (xx5==3){
        yy5="丁" 
    } else if (xx5==4){
        yy5="戊" 
    } else if (xx5==5){
        yy5="己" 
    } else if (xx5==6){
        yy5="庚" 
    } else if (xx5==7){
        yy5="辛"
    } else if (xx5==8){
        yy5="壬"
    } else if (xx5==9){
        yy5="癸"
    }
    if (xx5==0 || xx5==2 || xx5==4 || xx5==6 || xx5==8)  { //양간
        if (xx6==0 || xx6==1)  {
            yy6="子"
        } else if (xx6==2 || xx6==3) {
            yy6="寅"
        } else if (xx6==4 || xx6==5) {
            yy6="辰"
        } else if (xx6==6 || xx6==7) {
            yy6="午"
        } else if (xx6==8 || xx6==9) {
            yy6="申" 
        } else if (xx6==10 || xx6==11) {
            yy6="戌"
        }
    } else if (xx5==1 || xx5==3 || xx5==5 || xx5==7 || xx5==9)  { //음간 
       
        if (xx6==1 || xx6==2)  {
            yy6="丑"
        } else if (xx6==3 || xx6==4) {
            yy6="卯"
        } else if (xx6==5 || xx6==6) {
            yy6="巳"
        } else if (xx6==7 || xx6==8) {
            yy6="未"
        } else if (xx6==9 || xx6==10) {
            yy6="酉" 
        } else if (xx6==11 || xx6==0) {
            yy6="亥"
        }
    } 
    if (xx8==0) { 
        yy8="子"  //관성
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="甲"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="丙"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="戊"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="庚"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="壬"
        }
    } else if (xx8==1){ 
        yy8="丑" // 관성
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="乙"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="丁"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="己"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="辛"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="癸" 
        }
    } else if (xx8==2){ //인성
        yy8="寅"
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="丙"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="戊"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="庚"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="壬"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="甲"
        }
    } else if (xx8==3){  //인성
        yy8="卯" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="丁"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="己"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="辛"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="癸"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="乙" 
        }
    } else if (xx8==4){  //비견
        yy8="辰" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="戊"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="庚"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="壬"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="甲"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="丙"
        }
    } else if (xx8==5){  //비견
        yy8="巳" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="己"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="辛"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="癸"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="乙"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="丁" 
        }
    } else if (xx8==6){  //식상
        yy8="午" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="庚"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="壬"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="甲"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="丙"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="戊"
        }
    } else if (xx8==7){  //식상
        yy8="未"
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="辛"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="癸"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="乙"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="丁"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="己" 
        }
    } else if (xx8==8){  //재성
        yy8="申"
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="壬"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="甲"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="丙"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="戊"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="庚"
        }
    } else if (xx8==9){  //재성
        yy8="酉"
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="癸"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="乙"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="丁"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="己"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="辛" 
        }
    } else if (xx8==10){ //관성
        yy8="戌"
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="甲"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="丙"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="戊"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="庚"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="壬"
        }
    } else if (xx8==11){  //관성
        yy8="亥"
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy7="乙"
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy7="丁"
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy7="己"
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy7="辛"
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy7="癸" 
        }
    }
    
    document.getElementById("ch5").innerHTML = yy5;
    document.getElementById("ch6").innerHTML = yy6;
    document.getElementById("ch7").innerHTML = yy7;
    document.getElementById("ch8").innerHTML = yy8;

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
function ctn1(){
    if (yy5=="甲") {
       if (yy7=="甲") {
        document.getElementById("ctn1").innerHTML="比肩"; 
        document.getElementById("ctn1").style.background= "Greenyellow"        
       } else if (yy7=="乙"){
        document.getElementById("ctn1").innerHTML="劫財";
        document.getElementById("ctn1").style.background= "Greenyellow"        
       } else if (yy7=="丙"){
        document.getElementById("ctn1").innerHTML="食神";
        
       } else if (yy7=="丁"){
        document.getElementById("ctn1").innerHTML="傷官";
        
       } else if (yy7=="戊"){
        document.getElementById("ctn1").innerHTML="偏財";
        
       } else if (yy7=="己"){
        document.getElementById("ctn1").innerHTML="正財";
        
       } else if (yy7=="庚"){
        document.getElementById("ctn1").innerHTML="偏官";
        
       } else if (yy7=="辛"){
        document.getElementById("ctn1").innerHTML="正官"; 
        
       } else if (yy7=="壬"){
        document.getElementById("ctn1").innerHTML="偏印";
        document.getElementById("ctn1").style.background= "Greenyellow"
       } else if (yy7=="癸"){
        document.getElementById("ctn1").innerHTML="正印";
        document.getElementById("ctn1").style.background= "Greenyellow"
       }
    } else if (yy5=="乙"){
     if (yy7=="甲") {
         document.getElementById("ctn1").innerHTML="劫財";
         document.getElementById("ctn1").style.background= "Greenyellow"
       } else if (yy7=="乙"){
         document.getElementById("ctn1").innerHTML="比肩";
         document.getElementById("ctn1").style.background= "Greenyellow"
       } else if (yy7=="丙"){
        document.getElementById("ctn1").innerHTML="傷官";
       } else if (yy7=="丁"){
        document.getElementById("ctn1").innerHTML="食神";
       } else if (yy7=="戊"){
        document.getElementById("ctn1").innerHTML="正財";
       } else if (yy7=="己"){
        document.getElementById("ctn1").innerHTML="偏財";
       } else if (yy7=="庚"){
        document.getElementById("ctn1").innerHTML="正官";
       } else if (yy7=="辛"){
        document.getElementById("ctn1").innerHTML="偏官"; 
       } else if (yy7=="壬"){
        document.getElementById("ctn1").innerHTML="正印";
        document.getElementById("ctn1").style.background= "Greenyellow"
       } else if (yy7=="癸"){
        document.getElementById("ctn1").innerHTML="偏印";
        document.getElementById("ctn1").style.background= "Greenyellow"
       }  
    } else if (yy5=="丙"){      
       if (yy7=="甲") {
            document.getElementById("ctn1").innerHTML="偏印"; 
            document.getElementById("ctn1").style.background= "Greenyellow"
           } else if (yy7=="乙"){
            document.getElementById("ctn1").innerHTML="正印";
            document.getElementById("ctn1").style.background= "Greenyellow"
           } else if (yy7=="丙"){
            document.getElementById("ctn1").innerHTML="比肩";
            document.getElementById("ctn1").style.background= "Greenyellow"
           } else if (yy7=="丁"){
            document.getElementById("ctn1").innerHTML="劫財";
            document.getElementById("ctn1").style.background= "Greenyellow"
           } else if (yy7=="戊"){
            document.getElementById("ctn1").innerHTML="食神";
           } else if (yy7=="己"){
            document.getElementById("ctn1").innerHTML="傷官";
           } else if (yy7=="庚"){
            document.getElementById("ctn1").innerHTML="偏財";
           } else if (yy7=="辛"){
            document.getElementById("ctn1").innerHTML="正財"; 
           } else if (yy7=="壬"){
            document.getElementById("ctn1").innerHTML="偏官";
           } else if (yy7=="癸"){
            document.getElementById("ctn1").innerHTML="正官";
           }
        } else if (yy5=="丁"){
         if (yy7=="甲") {
            document.getElementById("ctn1").innerHTML="正印"; 
            document.getElementById("ctn1").style.background= "Greenyellow"
            } else if (yy7=="乙"){
            document.getElementById("ctn1").innerHTML="偏印";
            document.getElementById("ctn1").style.background= "Greenyellow"
            } else if (yy7=="丙"){
            document.getElementById("ctn1").innerHTML="劫財";
            document.getElementById("ctn1").style.background= "Greenyellow"
            } else if (yy7=="丁"){
            document.getElementById("ctn1").innerHTML="比肩";
            document.getElementById("ctn1").style.background= "Greenyellow"
            } else if (yy7=="戊"){
            document.getElementById("ctn1").innerHTML="傷官";
            } else if (yy7=="己"){
            document.getElementById("ctn1").innerHTML="食神";
            } else if (yy7=="庚"){
            document.getElementById("ctn1").innerHTML="正財";
            } else if (yy7=="辛"){
            document.getElementById("ctn1").innerHTML="偏財"; 
            } else if (yy7=="壬"){
            document.getElementById("ctn1").innerHTML="正官";
            } else if (yy7=="癸"){
            document.getElementById("ctn1").innerHTML="偏官";
            } 
        }  else if (yy5=="戊"){      
            if (yy7=="甲") {
                 document.getElementById("ctn1").innerHTML="偏官"; 
                } else if (yy7=="乙"){
                 document.getElementById("ctn1").innerHTML="正官";
                } else if (yy7=="丙"){
                 document.getElementById("ctn1").innerHTML="偏印";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                } else if (yy7=="丁"){
                 document.getElementById("ctn1").innerHTML="正印";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                } else if (yy7=="戊"){
                 document.getElementById("ctn1").innerHTML="比肩";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                } else if (yy7=="己"){
                 document.getElementById("ctn1").innerHTML="劫財";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                } else if (yy7=="庚"){
                 document.getElementById("ctn1").innerHTML="食神";
                } else if (yy7=="辛"){
                 document.getElementById("ctn1").innerHTML="傷官"; 
                } else if (yy7=="壬"){
                 document.getElementById("ctn1").innerHTML="偏財";
                } else if (yy7=="癸"){
                 document.getElementById("ctn1").innerHTML="正財";
                }
             } else if (yy5=="己"){
              if (yy7=="甲") {
                 document.getElementById("ctn1").innerHTML="正官"; 
                 } else if (yy7=="乙"){
                 document.getElementById("ctn1").innerHTML="偏官";
                 } else if (yy7=="丙"){
                 document.getElementById("ctn1").innerHTML="正印";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                 } else if (yy7=="丁"){
                 document.getElementById("ctn1").innerHTML="偏印";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                 } else if (yy7=="戊"){
                 document.getElementById("ctn1").innerHTML="劫財";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                 } else if (yy7=="己"){
                 document.getElementById("ctn1").innerHTML="比肩";
                 document.getElementById("ctn1").style.background= "Greenyellow"
                 } else if (yy7=="庚"){
                 document.getElementById("ctn1").innerHTML="傷官";
                 } else if (yy7=="辛"){
                 document.getElementById("ctn1").innerHTML="食神"; 
                 } else if (yy7=="壬"){
                 document.getElementById("ctn1").innerHTML="正財";
                 } else if (yy7=="癸"){
                 document.getElementById("ctn1").innerHTML="偏財";
                 } 
             }  else if (yy5=="庚"){      
                if (yy7=="甲") {
                     document.getElementById("ctn1").innerHTML="偏財"; 
                    } else if (yy7=="乙"){
                     document.getElementById("ctn1").innerHTML="正財";
                    } else if (yy7=="丙"){
                     document.getElementById("ctn1").innerHTML="偏官";
                    } else if (yy7=="丁"){
                     document.getElementById("ctn1").innerHTML="正官";
                    } else if (yy7=="戊"){
                     document.getElementById("ctn1").innerHTML="偏印";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    } else if (yy7=="己"){
                     document.getElementById("ctn1").innerHTML="正印";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    } else if (yy7=="庚"){
                     document.getElementById("ctn1").innerHTML="比肩";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    } else if (yy7=="辛"){
                     document.getElementById("ctn1").innerHTML="劫財"; 
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    } else if (yy7=="壬"){
                     document.getElementById("ctn1").innerHTML="食神";
                    } else if (yy7=="癸"){
                     document.getElementById("ctn1").innerHTML="傷官";
                    }
                 } else if (yy5=="辛"){
                  if (yy7=="甲") {
                     document.getElementById("ctn1").innerHTML="正財"; 
                     } else if (yy7=="乙"){
                     document.getElementById("ctn1").innerHTML="偏財";
                     } else if (yy7=="丙"){
                     document.getElementById("ctn1").innerHTML="正官";
                     } else if (yy7=="丁"){
                     document.getElementById("ctn1").innerHTML="偏官";
                     } else if (yy7=="戊"){
                     document.getElementById("ctn1").innerHTML="正印";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } else if (yy7=="己"){
                     document.getElementById("ctn1").innerHTML="偏印";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } else if (yy7=="庚"){
                     document.getElementById("ctn1").innerHTML="劫財";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } else if (yy7=="辛"){
                     document.getElementById("ctn1").innerHTML="比肩"; 
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } else if (yy7=="壬"){
                     document.getElementById("ctn1").innerHTML="傷官";
                     } else if (yy7=="癸"){
                     document.getElementById("ctn1").innerHTML="食神";
                     } 

                 } else if (yy5=="壬"){      
                if (yy7=="甲") {
                     document.getElementById("ctn1").innerHTML="食神"; 
                    } else if (yy7=="乙"){
                     document.getElementById("ctn1").innerHTML="傷官";
                    } else if (yy7=="丙"){
                     document.getElementById("ctn1").innerHTML="偏財";
                    } else if (yy7=="丁"){
                     document.getElementById("ctn1").innerHTML="正財";
                    } else if (yy7=="戊"){
                     document.getElementById("ctn1").innerHTML="偏官";
                    } else if (yy7=="己"){
                     document.getElementById("ctn1").innerHTML="正官";
                    } else if (yy7=="庚"){
                     document.getElementById("ctn1").innerHTML="偏印";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    } else if (yy7=="辛"){
                     document.getElementById("ctn1").innerHTML="正印"; 
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    } else if (yy7=="壬"){
                     document.getElementById("ctn1").innerHTML="比肩";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    } else if (yy7=="癸"){
                     document.getElementById("ctn1").innerHTML="劫財";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                    }
                 } else if (yy5=="癸"){
                  if (yy7=="甲") {
                     document.getElementById("ctn1").innerHTML="傷官"; 
                     } else if (yy7=="乙"){
                     document.getElementById("ctn1").innerHTML="食神";
                     } else if (yy7=="丙"){
                     document.getElementById("ctn1").innerHTML="正財";
                     } else if (yy7=="丁"){
                     document.getElementById("ctn1").innerHTML="偏財";
                     } else if (yy7=="戊"){
                     document.getElementById("ctn1").innerHTML="正官";
                     } else if (yy7=="己"){
                     document.getElementById("ctn1").innerHTML="偏官";
                     } else if (yy7=="庚"){
                     document.getElementById("ctn1").innerHTML="正印";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } else if (yy7=="辛"){
                     document.getElementById("ctn1").innerHTML="偏印"; 
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } else if (yy7=="壬"){
                     document.getElementById("ctn1").innerHTML="劫財";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } else if (yy7=="癸"){
                     document.getElementById("ctn1").innerHTML="比肩";
                     document.getElementById("ctn1").style.background= "Greenyellow"
                     } 
                    }     
     
}
function ctn2(){
    if (yy5=="甲") {
       if (yy3=="甲") {
            document.getElementById("ctn2").innerHTML="比肩"; 
            document.getElementById("ctn2").style.background= "Greenyellow"
       } else if (yy3=="乙"){
            document.getElementById("ctn2").innerHTML="劫財";
            document.getElementById("ctn2").style.background= "Greenyellow"
       } else if (yy3=="丙"){
        document.getElementById("ctn2").innerHTML="食神";
       } else if (yy3=="丁"){
        document.getElementById("ctn2").innerHTML="傷官";
       } else if (yy3=="戊"){
        document.getElementById("ctn2").innerHTML="偏財";
       } else if (yy3=="己"){
        document.getElementById("ctn2").innerHTML="正財";
       } else if (yy3=="庚"){
        document.getElementById("ctn2").innerHTML="偏官";
       } else if (yy3=="辛"){
        document.getElementById("ctn2").innerHTML="正官"; 
       } else if (yy3=="壬"){
        document.getElementById("ctn2").innerHTML="偏印";
        document.getElementById("ctn2").style.background= "Greenyellow"
       } else if (yy3=="癸"){
        document.getElementById("ctn2").innerHTML="正印";
        document.getElementById("ctn2").style.background= "Greenyellow"
       }
    } else if (yy5=="乙"){
     if (yy3=="甲") {
         document.getElementById("ctn2").innerHTML="劫財"; 
         document.getElementById("ctn2").style.background= "Greenyellow"
       } else if (yy3=="乙"){
            document.getElementById("ctn2").innerHTML="比肩";
            document.getElementById("ctn2").style.background= "Greenyellow"
       } else if (yy3=="丙"){
        document.getElementById("ctn2").innerHTML="傷官";
       } else if (yy3=="丁"){
        document.getElementById("ctn2").innerHTML="食神";
       } else if (yy3=="戊"){
        document.getElementById("ctn2").innerHTML="正財";
       } else if (yy3=="己"){
        document.getElementById("ctn2").innerHTML="偏財";
       } else if (yy3=="庚"){
        document.getElementById("ctn2").innerHTML="正官";
       } else if (yy3=="辛"){
        document.getElementById("ctn2").innerHTML="偏官"; 
       } else if (yy3=="壬"){
        document.getElementById("ctn2").innerHTML="正印";
        document.getElementById("ctn2").style.background= "Greenyellow"
       } else if (yy3=="癸"){
        document.getElementById("ctn2").innerHTML="偏印";
        document.getElementById("ctn2").style.background= "Greenyellow"
       }  
    } else if (yy5=="丙"){      
       if (yy3=="甲") {
            document.getElementById("ctn2").innerHTML="偏印";
            document.getElementById("ctn2").style.background= "Greenyellow" 
           } else if (yy3=="乙"){
            document.getElementById("ctn2").innerHTML="正印";
            document.getElementById("ctn2").style.background= "Greenyellow"
           } else if (yy3=="丙"){
            document.getElementById("ctn2").innerHTML="比肩";
            document.getElementById("ctn2").style.background= "Greenyellow"
           } else if (yy3=="丁"){
            document.getElementById("ctn2").innerHTML="劫財";
            document.getElementById("ctn2").style.background= "Greenyellow"
           } else if (yy3=="戊"){
            document.getElementById("ctn2").innerHTML="食神";
           } else if (yy3=="己"){
            document.getElementById("ctn2").innerHTML="傷官";
           } else if (yy3=="庚"){
            document.getElementById("ctn2").innerHTML="偏財";
           } else if (yy3=="辛"){
            document.getElementById("ctn2").innerHTML="正財"; 
           } else if (yy3=="壬"){
            document.getElementById("ctn2").innerHTML="偏官";
           } else if (yy3=="癸"){
            document.getElementById("ctn2").innerHTML="正官";
           }
        } else if (yy5=="丁"){
         if (yy3=="甲") {
            document.getElementById("ctn2").innerHTML="正印"; 
            document.getElementById("ctn2").style.background= "Greenyellow"
            } else if (yy3=="乙"){
            document.getElementById("ctn2").innerHTML="偏印";
            document.getElementById("ctn2").style.background= "Greenyellow"
            } else if (yy3=="丙"){
            document.getElementById("ctn2").innerHTML="劫財";
            document.getElementById("ctn2").style.background= "Greenyellow"
            } else if (yy3=="丁"){
            document.getElementById("ctn2").innerHTML="比肩";
            document.getElementById("ctn2").style.background= "Greenyellow"
            } else if (yy3=="戊"){
            document.getElementById("ctn2").innerHTML="傷官";
            } else if (yy3=="己"){
            document.getElementById("ctn2").innerHTML="食神";
            } else if (yy3=="庚"){
            document.getElementById("ctn2").innerHTML="正財";
            } else if (yy3=="辛"){
            document.getElementById("ctn2").innerHTML="偏財"; 
            } else if (yy3=="壬"){
            document.getElementById("ctn2").innerHTML="正官";
            } else if (yy3=="癸"){
            document.getElementById("ctn2").innerHTML="偏官";
            } 
        }  else if (yy5=="戊"){      
            if (yy3=="甲") {
                 document.getElementById("ctn2").innerHTML="偏官"; 
                } else if (yy3=="乙"){
                 document.getElementById("ctn2").innerHTML="正官";
                } else if (yy3=="丙"){
                 document.getElementById("ctn2").innerHTML="偏印";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                } else if (yy3=="丁"){
                 document.getElementById("ctn2").innerHTML="正印";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                } else if (yy3=="戊"){
                 document.getElementById("ctn2").innerHTML="比肩";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                } else if (yy3=="己"){
                 document.getElementById("ctn2").innerHTML="劫財";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                } else if (yy3=="庚"){
                 document.getElementById("ctn2").innerHTML="食神";
                } else if (yy3=="辛"){
                 document.getElementById("ctn2").innerHTML="傷官"; 
                } else if (yy3=="壬"){
                 document.getElementById("ctn2").innerHTML="偏財";
                } else if (yy3=="癸"){
                 document.getElementById("ctn2").innerHTML="正財";
                }
             } else if (yy5=="己"){
              if (yy3=="甲") {
                 document.getElementById("ctn2").innerHTML="正官"; 
                 } else if (yy3=="乙"){
                 document.getElementById("ctn2").innerHTML="偏官";
                 } else if (yy3=="丙"){
                 document.getElementById("ctn2").innerHTML="正印";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                 } else if (yy3=="丁"){
                 document.getElementById("ctn2").innerHTML="偏印";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                 } else if (yy3=="戊"){
                 document.getElementById("ctn2").innerHTML="劫財";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                 } else if (yy3=="己"){
                 document.getElementById("ctn2").innerHTML="比肩";
                 document.getElementById("ctn2").style.background= "Greenyellow"
                 } else if (yy3=="庚"){
                 document.getElementById("ctn2").innerHTML="傷官";
                 } else if (yy3=="辛"){
                 document.getElementById("ctn2").innerHTML="食神"; 
                 } else if (yy3=="壬"){
                 document.getElementById("ctn2").innerHTML="正財";
                 } else if (yy3=="癸"){
                 document.getElementById("ctn2").innerHTML="偏財";
                 } 
             }  else if (yy5=="庚"){      
                if (yy3=="甲") {
                     document.getElementById("ctn2").innerHTML="偏財"; 
                    } else if (yy3=="乙"){
                     document.getElementById("ctn2").innerHTML="正財";
                    } else if (yy3=="丙"){
                     document.getElementById("ctn2").innerHTML="偏官";
                    } else if (yy3=="丁"){
                     document.getElementById("ctn2").innerHTML="正官";
                    } else if (yy3=="戊"){
                     document.getElementById("ctn2").innerHTML="偏印";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    } else if (yy3=="己"){
                     document.getElementById("ctn2").innerHTML="正印";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    } else if (yy3=="庚"){
                     document.getElementById("ctn2").innerHTML="比肩";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    } else if (yy3=="辛"){
                     document.getElementById("ctn2").innerHTML="劫財"; 
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    } else if (yy3=="壬"){
                     document.getElementById("ctn2").innerHTML="食神";
                    } else if (yy3=="癸"){
                     document.getElementById("ctn2").innerHTML="傷官";
                    }
                 } else if (yy5=="辛"){
                  if (yy3=="甲") {
                     document.getElementById("ctn2").innerHTML="正財"; 
                     } else if (yy3=="乙"){
                     document.getElementById("ctn2").innerHTML="偏財";
                     } else if (yy3=="丙"){
                     document.getElementById("ctn2").innerHTML="正官";
                     } else if (yy3=="丁"){
                     document.getElementById("ctn2").innerHTML="偏官";
                     } else if (yy3=="戊"){
                     document.getElementById("ctn2").innerHTML="正印";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } else if (yy3=="己"){
                     document.getElementById("ctn2").innerHTML="偏印";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } else if (yy3=="庚"){
                     document.getElementById("ctn2").innerHTML="劫財";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } else if (yy3=="辛"){
                     document.getElementById("ctn2").innerHTML="比肩"; 
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } else if (yy3=="壬"){
                     document.getElementById("ctn2").innerHTML="傷官";
                     } else if (yy3=="癸"){
                     document.getElementById("ctn2").innerHTML="食神";
                     } 

                 } else if (yy5=="壬"){      
                if (yy3=="甲") {
                     document.getElementById("ctn2").innerHTML="食神"; 
                    } else if (yy3=="乙"){
                     document.getElementById("ctn2").innerHTML="傷官";
                    } else if (yy3=="丙"){
                     document.getElementById("ctn2").innerHTML="偏財";
                    } else if (yy3=="丁"){
                     document.getElementById("ctn2").innerHTML="正財";
                    } else if (yy3=="戊"){
                     document.getElementById("ctn2").innerHTML="偏官";
                    } else if (yy3=="己"){
                     document.getElementById("ctn2").innerHTML="正官";
                    } else if (yy3=="庚"){
                     document.getElementById("ctn2").innerHTML="偏印";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    } else if (yy3=="辛"){
                     document.getElementById("ctn2").innerHTML="正印"; 
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    } else if (yy3=="壬"){
                     document.getElementById("ctn2").innerHTML="比肩";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    } else if (yy3=="癸"){
                     document.getElementById("ctn2").innerHTML="劫財";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                    }
                 } else if (yy5=="癸"){
                  if (yy3=="甲") {
                     document.getElementById("ctn2").innerHTML="傷官"; 
                     } else if (yy3=="乙"){
                     document.getElementById("ctn2").innerHTML="食神";
                     } else if (yy3=="丙"){
                     document.getElementById("ctn2").innerHTML="正財";
                     } else if (yy3=="丁"){
                     document.getElementById("ctn2").innerHTML="偏財";
                     } else if (yy3=="戊"){
                     document.getElementById("ctn2").innerHTML="正官";
                     } else if (yy3=="己"){
                     document.getElementById("ctn2").innerHTML="偏官";
                     } else if (yy3=="庚"){
                     document.getElementById("ctn2").innerHTML="正印";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } else if (yy3=="辛"){
                     document.getElementById("ctn2").innerHTML="偏印"; 
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } else if (yy3=="壬"){
                     document.getElementById("ctn2").innerHTML="劫財";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } else if (yy3=="癸"){
                     document.getElementById("ctn2").innerHTML="比肩";
                     document.getElementById("ctn2").style.background= "Greenyellow"
                     } 
                    }     
     
}
function ctn3(){
    if (yy5=="甲") {
       if (yy1=="甲") {
            document.getElementById("ctn3").innerHTML="比肩"; 
            document.getElementById("ctn3").style.background= "Greenyellow"
       } else if (yy1=="乙"){
            document.getElementById("ctn3").innerHTML="劫財";
            document.getElementById("ctn3").style.background= "Greenyellow"
       } else if (yy1=="丙"){
        document.getElementById("ctn3").innerHTML="食神";
       } else if (yy1=="丁"){
        document.getElementById("ctn3").innerHTML="傷官";
       } else if (yy1=="戊"){
        document.getElementById("ctn3").innerHTML="偏財";
       } else if (yy1=="己"){
        document.getElementById("ctn3").innerHTML="正財";
       } else if (yy1=="庚"){
        document.getElementById("ctn3").innerHTML="偏官";
       } else if (yy1=="辛"){
        document.getElementById("ctn3").innerHTML="正官"; 
       } else if (yy1=="壬"){
        document.getElementById("ctn3").innerHTML="偏印";
        document.getElementById("ctn3").style.background= "Greenyellow"
       } else if (yy1=="癸"){
        document.getElementById("ctn3").innerHTML="正印";
        document.getElementById("ctn3").style.background= "Greenyellow"
       }
    } else if (yy5=="乙"){
     if (yy1=="甲") {
         document.getElementById("ctn3").innerHTML="劫財"; 
         document.getElementById("ctn3").style.background= "Greenyellow"
       } else if (yy1=="乙"){
            document.getElementById("ctn3").innerHTML="比肩";
            document.getElementById("ctn3").style.background= "Greenyellow"
       } else if (yy1=="丙"){
        document.getElementById("ctn3").innerHTML="傷官";
       } else if (yy1=="丁"){
        document.getElementById("ctn3").innerHTML="食神";
       } else if (yy1=="戊"){
        document.getElementById("ctn3").innerHTML="正財";
       } else if (yy1=="己"){
        document.getElementById("ctn3").innerHTML="偏財";
       } else if (yy1=="庚"){
        document.getElementById("ctn3").innerHTML="正官";
       } else if (yy1=="辛"){
        document.getElementById("ctn3").innerHTML="偏官"; 
       } else if (yy1=="壬"){
        document.getElementById("ctn3").innerHTML="正印";
        document.getElementById("ctn3").style.background= "Greenyellow"
       } else if (yy1=="癸"){
        document.getElementById("ctn3").innerHTML="偏印";
        document.getElementById("ctn3").style.background= "Greenyellow"
       }  
    } else if (yy5=="丙"){      
       if (yy1=="甲") {
            document.getElementById("ctn3").innerHTML="偏印"; 
            document.getElementById("ctn3").style.background= "Greenyellow"
           } else if (yy1=="乙"){
            document.getElementById("ctn3").innerHTML="正印";
            document.getElementById("ctn3").style.background= "Greenyellow"
           } else if (yy1=="丙"){
            document.getElementById("ctn3").innerHTML="比肩";
            document.getElementById("ctn3").style.background= "Greenyellow"
           } else if (yy1=="丁"){
            document.getElementById("ctn3").innerHTML="劫財";
            document.getElementById("ctn3").style.background= "Greenyellow"
           } else if (yy1=="戊"){
            document.getElementById("ctn3").innerHTML="食神";
           } else if (yy1=="己"){
            document.getElementById("ctn3").innerHTML="傷官";
           } else if (yy1=="庚"){
            document.getElementById("ctn3").innerHTML="偏財";
           } else if (yy1=="辛"){
            document.getElementById("ctn3").innerHTML="正財"; 
           } else if (yy1=="壬"){
            document.getElementById("ctn3").innerHTML="偏官";
           } else if (yy1=="癸"){
            document.getElementById("ctn3").innerHTML="正官";
           }
        } else if (yy5=="丁"){
         if (yy1=="甲") {
            document.getElementById("ctn3").innerHTML="正印"; 
            document.getElementById("ctn3").style.background= "Greenyellow"
            } else if (yy1=="乙"){
            document.getElementById("ctn3").innerHTML="偏印";
            document.getElementById("ctn3").style.background= "Greenyellow"
            } else if (yy1=="丙"){
            document.getElementById("ctn3").innerHTML="劫財";
            document.getElementById("ctn3").style.background= "Greenyellow"
            } else if (yy1=="丁"){
            document.getElementById("ctn3").innerHTML="比肩";
            document.getElementById("ctn3").style.background= "Greenyellow"
            } else if (yy1=="戊"){
            document.getElementById("ctn3").innerHTML="傷官";
            } else if (yy1=="己"){
            document.getElementById("ctn3").innerHTML="食神";
            } else if (yy1=="庚"){
            document.getElementById("ctn3").innerHTML="正財";
            } else if (yy1=="辛"){
            document.getElementById("ctn3").innerHTML="偏財"; 
            } else if (yy1=="壬"){
            document.getElementById("ctn3").innerHTML="正官";
            } else if (yy1=="癸"){
            document.getElementById("ctn3").innerHTML="偏官";
            } 
        }  else if (yy5=="戊"){      
            if (yy1=="甲") {
                 document.getElementById("ctn3").innerHTML="偏官"; 
                } else if (yy1=="乙"){
                 document.getElementById("ctn3").innerHTML="正官";
                } else if (yy1=="丙"){
                 document.getElementById("ctn3").innerHTML="偏印";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                } else if (yy1=="丁"){
                 document.getElementById("ctn3").innerHTML="正印";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                } else if (yy1=="戊"){
                 document.getElementById("ctn3").innerHTML="比肩";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                } else if (yy1=="己"){
                 document.getElementById("ctn3").innerHTML="劫財";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                } else if (yy1=="庚"){
                 document.getElementById("ctn3").innerHTML="食神";
                } else if (yy1=="辛"){
                 document.getElementById("ctn3").innerHTML="傷官"; 
                } else if (yy1=="壬"){
                 document.getElementById("ctn3").innerHTML="偏財";
                } else if (yy1=="癸"){
                 document.getElementById("ctn3").innerHTML="正財";
                }
             } else if (yy5=="己"){
              if (yy1=="甲") {
                 document.getElementById("ctn3").innerHTML="正官"; 
                 } else if (yy1=="乙"){
                 document.getElementById("ctn3").innerHTML="偏官";
                 } else if (yy1=="丙"){
                 document.getElementById("ctn3").innerHTML="正印";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                 } else if (yy1=="丁"){
                 document.getElementById("ctn3").innerHTML="偏印";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                 } else if (yy1=="戊"){
                 document.getElementById("ctn3").innerHTML="劫財";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                 } else if (yy1=="己"){
                 document.getElementById("ctn3").innerHTML="比肩";
                 document.getElementById("ctn3").style.background= "Greenyellow"
                 } else if (yy1=="庚"){
                 document.getElementById("ctn3").innerHTML="傷官";
                 } else if (yy1=="辛"){
                 document.getElementById("ctn3").innerHTML="食神"; 
                 } else if (yy1=="壬"){
                 document.getElementById("ctn3").innerHTML="正財";
                 } else if (yy1=="癸"){
                 document.getElementById("ctn3").innerHTML="偏財";
                 } 
             }  else if (yy5=="庚"){      
                if (yy1=="甲") {
                     document.getElementById("ctn3").innerHTML="偏財"; 
                    } else if (yy1=="乙"){
                     document.getElementById("ctn3").innerHTML="正財";
                    } else if (yy1=="丙"){
                     document.getElementById("ctn3").innerHTML="偏官";
                    } else if (yy1=="丁"){
                     document.getElementById("ctn3").innerHTML="正官";
                    } else if (yy1=="戊"){
                     document.getElementById("ctn3").innerHTML="偏印";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    } else if (yy1=="己"){
                     document.getElementById("ctn3").innerHTML="正印";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    } else if (yy1=="庚"){
                     document.getElementById("ctn3").innerHTML="比肩";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    } else if (yy1=="辛"){
                     document.getElementById("ctn3").innerHTML="劫財"; 
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    } else if (yy1=="壬"){
                     document.getElementById("ctn3").innerHTML="食神";
                    } else if (yy1=="癸"){
                     document.getElementById("ctn3").innerHTML="傷官";
                    }
                 } else if (yy5=="辛"){
                  if (yy1=="甲") {
                     document.getElementById("ctn3").innerHTML="正財"; 
                     } else if (yy1=="乙"){
                     document.getElementById("ctn3").innerHTML="偏財";
                     } else if (yy1=="丙"){
                     document.getElementById("ctn3").innerHTML="正官";
                     } else if (yy1=="丁"){
                     document.getElementById("ctn3").innerHTML="偏官";
                     } else if (yy1=="戊"){
                     document.getElementById("ctn3").innerHTML="正印";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } else if (yy1=="己"){
                     document.getElementById("ctn3").innerHTML="偏印";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } else if (yy1=="庚"){
                     document.getElementById("ctn3").innerHTML="劫財";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } else if (yy1=="辛"){
                     document.getElementById("ctn3").innerHTML="比肩"; 
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } else if (yy1=="壬"){
                     document.getElementById("ctn3").innerHTML="傷官";
                     } else if (yy1=="癸"){
                     document.getElementById("ctn3").innerHTML="食神";
                     } 

                 } else if (yy5=="壬"){      
                if (yy1=="甲") {
                     document.getElementById("ctn3").innerHTML="食神"; 
                    } else if (yy1=="乙"){
                     document.getElementById("ctn3").innerHTML="傷官";
                    } else if (yy1=="丙"){
                     document.getElementById("ctn3").innerHTML="偏財";
                    } else if (yy1=="丁"){
                     document.getElementById("ctn3").innerHTML="正財";
                    } else if (yy1=="戊"){
                     document.getElementById("ctn3").innerHTML="偏官";
                    } else if (yy1=="己"){
                     document.getElementById("ctn3").innerHTML="正官";
                    } else if (yy1=="庚"){
                     document.getElementById("ctn3").innerHTML="偏印";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    } else if (yy1=="辛"){
                     document.getElementById("ctn3").innerHTML="正印"; 
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    } else if (yy1=="壬"){
                     document.getElementById("ctn3").innerHTML="比肩";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    } else if (yy1=="癸"){
                     document.getElementById("ctn3").innerHTML="劫財";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                    }
                 } else if (yy5=="癸"){
                  if (yy1=="甲") {
                     document.getElementById("ctn3").innerHTML="傷官"; 
                     } else if (yy1=="乙"){
                     document.getElementById("ctn3").innerHTML="食神";
                     } else if (yy1=="丙"){
                     document.getElementById("ctn3").innerHTML="正財";
                     } else if (yy1=="丁"){
                     document.getElementById("ctn3").innerHTML="偏財";
                     } else if (yy1=="戊"){
                     document.getElementById("ctn3").innerHTML="正官";
                     } else if (yy1=="己"){
                     document.getElementById("ctn3").innerHTML="偏官";
                     } else if (yy1=="庚"){
                     document.getElementById("ctn3").innerHTML="正印";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } else if (yy1=="辛"){
                     document.getElementById("ctn3").innerHTML="偏印"; 
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } else if (yy1=="壬"){
                     document.getElementById("ctn3").innerHTML="劫財";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } else if (yy1=="癸"){
                     document.getElementById("ctn3").innerHTML="比肩";
                     document.getElementById("ctn3").style.background= "Greenyellow"
                     } 
                    }     
     
}
function ctn4(){
    if (yy5=="甲") {
       if (yy8=="子") {
         document.getElementById("ctn4").innerHTML="正印"; 
         document.getElementById("ctn4").style.background= "Greenyellow"
       } else if (yy8=="丑"){
         document.getElementById("ctn4").innerHTML="正財";
       } else if (yy8=="寅"){
        document.getElementById("ctn4").innerHTML="比肩";
        document.getElementById("ctn4").style.background= "Greenyellow"
       } else if (yy8=="卯"){
        document.getElementById("ctn4").innerHTML="劫財";
        document.getElementById("ctn4").style.background= "Greenyellow"
       } else if (yy8=="辰"){
        document.getElementById("ctn4").innerHTML="偏財";
       } else if (yy8=="巳"){
        document.getElementById("ctn4").innerHTML="食神";
       } else if (yy8=="午"){
        document.getElementById("ctn4").innerHTML="傷官";
       } else if (yy8=="未"){
        document.getElementById("ctn4").innerHTML="正財"; 
       } else if (yy8=="申"){
        document.getElementById("ctn4").innerHTML="偏官";
       } else if (yy8=="酉"){
        document.getElementById("ctn4").innerHTML="正官";
       } else if (yy8=="戌"){
        document.getElementById("ctn4").innerHTML="偏財";
       } else if (yy8=="亥"){
        document.getElementById("ctn4").innerHTML="偏印";
        document.getElementById("ctn4").style.background= "Greenyellow"
       }
    } else if (yy5=="乙"){
        if (yy8=="子") {
            document.getElementById("ctn4").innerHTML="偏印"; 
            document.getElementById("ctn4").style.background= "Greenyellow"
          } else if (yy8=="丑"){
            document.getElementById("ctn4").innerHTML="偏財";
          } else if (yy8=="寅"){
           document.getElementById("ctn4").innerHTML="劫財";
           document.getElementById("ctn4").style.background= "Greenyellow"
          } else if (yy8=="卯"){
           document.getElementById("ctn4").innerHTML="比肩";
           document.getElementById("ctn4").style.background= "Greenyellow"
          } else if (yy8=="辰"){
           document.getElementById("ctn4").innerHTML="正財";
          } else if (yy8=="巳"){
           document.getElementById("ctn4").innerHTML="傷官";
          } else if (yy8=="午"){
           document.getElementById("ctn4").innerHTML="食神";
          } else if (yy8=="未"){
           document.getElementById("ctn4").innerHTML="偏財"; 
          } else if (yy8=="申"){
           document.getElementById("ctn4").innerHTML="正官";
          } else if (yy8=="酉"){
           document.getElementById("ctn4").innerHTML="偏官";
          } else if (yy8=="戌"){
           document.getElementById("ctn4").innerHTML="正財";
          } else if (yy8=="亥"){
           document.getElementById("ctn4").innerHTML="正印";
           document.getElementById("ctn4").style.background= "Greenyellow"
          }
    } else if (yy5=="丙"){      
        if (yy8=="子") {
            document.getElementById("ctn4").innerHTML="正官"; 
          } else if (yy8=="丑"){
            document.getElementById("ctn4").innerHTML="傷官";
          } else if (yy8=="寅"){
           document.getElementById("ctn4").innerHTML="偏印";
           document.getElementById("ctn4").style.background= "Greenyellow"
          } else if (yy8=="卯"){
           document.getElementById("ctn4").innerHTML="正印";
           document.getElementById("ctn4").style.background= "Greenyellow"
          } else if (yy8=="辰"){
           document.getElementById("ctn4").innerHTML="食神";
          } else if (yy8=="巳"){
           document.getElementById("ctn4").innerHTML="比肩";
           document.getElementById("ctn4").style.background= "Greenyellow"
          } else if (yy8=="午"){
           document.getElementById("ctn4").innerHTML="劫財";
           document.getElementById("ctn4").style.background= "Greenyellow"
          } else if (yy8=="未"){
           document.getElementById("ctn4").innerHTML="傷官"; 
          } else if (yy8=="申"){
           document.getElementById("ctn4").innerHTML="偏財";
          } else if (yy8=="酉"){
           document.getElementById("ctn4").innerHTML="正財";
          } else if (yy8=="戌"){
           document.getElementById("ctn4").innerHTML="食神";
          } else if (yy8=="亥"){
           document.getElementById("ctn4").innerHTML="偏官";
          }
        } else if (yy5=="丁"){
            if (yy8=="子") {
                document.getElementById("ctn4").innerHTML="偏官"; 
              } else if (yy8=="丑"){
                document.getElementById("ctn4").innerHTML="食神";
              } else if (yy8=="寅"){
               document.getElementById("ctn4").innerHTML="正印";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="卯"){
               document.getElementById("ctn4").innerHTML="偏印";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="辰"){
               document.getElementById("ctn4").innerHTML="傷官";
              } else if (yy8=="巳"){
               document.getElementById("ctn4").innerHTML="劫財";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="午"){
               document.getElementById("ctn4").innerHTML="比肩";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="未"){
               document.getElementById("ctn4").innerHTML="食神"; 
              } else if (yy8=="申"){
               document.getElementById("ctn4").innerHTML="正財";
              } else if (yy8=="酉"){
               document.getElementById("ctn4").innerHTML="偏財";
              } else if (yy8=="戌"){
               document.getElementById("ctn4").innerHTML="傷官";
              } else if (yy8=="亥"){
               document.getElementById("ctn4").innerHTML="正官";
              }
        }  else if (yy5=="戊"){      
            if (yy8=="子") {
                document.getElementById("ctn4").innerHTML="正財"; 
              } else if (yy8=="丑"){
                document.getElementById("ctn4").innerHTML="劫財";
                document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="寅"){
               document.getElementById("ctn4").innerHTML="偏官";
              } else if (yy8=="卯"){
               document.getElementById("ctn4").innerHTML="正官";
              } else if (yy8=="辰"){
               document.getElementById("ctn4").innerHTML="比肩";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="巳"){
               document.getElementById("ctn4").innerHTML="偏印";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="午"){
               document.getElementById("ctn4").innerHTML="正印";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="未"){
               document.getElementById("ctn4").innerHTML="劫財"; 
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="申"){
               document.getElementById("ctn4").innerHTML="食神";
              } else if (yy8=="酉"){
               document.getElementById("ctn4").innerHTML="傷官";
              } else if (yy8=="戌"){
               document.getElementById("ctn4").innerHTML="比肩";
               document.getElementById("ctn4").style.background= "Greenyellow"
              } else if (yy8=="亥"){
               document.getElementById("ctn4").innerHTML="偏財";
              }
             } else if (yy5=="己"){
                if (yy8=="子") {
                    document.getElementById("ctn4").innerHTML="偏財"; 
                  } else if (yy8=="丑"){
                    document.getElementById("ctn4").innerHTML="比肩";
                    document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="寅"){
                   document.getElementById("ctn4").innerHTML="正官";
                  } else if (yy8=="卯"){
                   document.getElementById("ctn4").innerHTML="偏官";
                  } else if (yy8=="辰"){
                   document.getElementById("ctn4").innerHTML="劫財";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="巳"){
                   document.getElementById("ctn4").innerHTML="正印";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="午"){
                   document.getElementById("ctn4").innerHTML="偏印";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="未"){
                   document.getElementById("ctn4").innerHTML="比肩"; 
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="申"){
                   document.getElementById("ctn4").innerHTML="傷官";
                  } else if (yy8=="酉"){
                   document.getElementById("ctn4").innerHTML="食神";
                  } else if (yy8=="戌"){
                   document.getElementById("ctn4").innerHTML="劫財";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="亥"){
                   document.getElementById("ctn4").innerHTML="正財";
                  }
             }  else if (yy5=="庚"){      
                if (yy8=="子") {
                    document.getElementById("ctn4").innerHTML="傷官"; 
                  } else if (yy8=="丑"){
                    document.getElementById("ctn4").innerHTML="正印";
                    document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="寅"){
                   document.getElementById("ctn4").innerHTML="偏財";
                  } else if (yy8=="卯"){
                   document.getElementById("ctn4").innerHTML="正財";
                  } else if (yy8=="辰"){
                   document.getElementById("ctn4").innerHTML="偏印";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="巳"){
                   document.getElementById("ctn4").innerHTML="偏官";
                  } else if (yy8=="午"){
                   document.getElementById("ctn4").innerHTML="正官";
                  } else if (yy8=="未"){
                   document.getElementById("ctn4").innerHTML="正印"; 
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="申"){
                   document.getElementById("ctn4").innerHTML="比肩";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="酉"){
                   document.getElementById("ctn4").innerHTML="劫財";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="戌"){
                   document.getElementById("ctn4").innerHTML="偏印";
                   document.getElementById("ctn4").style.background= "Greenyellow"
                  } else if (yy8=="亥"){
                   document.getElementById("ctn4").innerHTML="食神";
                  }
                 } else if (yy5=="辛"){
                    if (yy8=="子") {
                        document.getElementById("ctn4").innerHTML="食神"; 
                      } else if (yy8=="丑"){
                        document.getElementById("ctn4").innerHTML="偏印";
                        document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="寅"){
                       document.getElementById("ctn4").innerHTML="正財";
                      } else if (yy8=="卯"){
                       document.getElementById("ctn4").innerHTML="偏財";
                      } else if (yy8=="辰"){
                       document.getElementById("ctn4").innerHTML="正印";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="巳"){
                       document.getElementById("ctn4").innerHTML="正官";
                      } else if (yy8=="午"){
                       document.getElementById("ctn4").innerHTML="偏官";
                      } else if (yy8=="未"){
                       document.getElementById("ctn4").innerHTML="偏印"; 
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="申"){
                       document.getElementById("ctn4").innerHTML="劫財";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="酉"){
                       document.getElementById("ctn4").innerHTML="比肩";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="戌"){
                       document.getElementById("ctn4").innerHTML="正印";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="亥"){
                       document.getElementById("ctn4").innerHTML="傷官";
                      }

                 } else if (yy5=="壬"){      
                    if (yy8=="子") {
                        document.getElementById("ctn4").innerHTML="劫財"; 
                        document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="丑"){
                        document.getElementById("ctn4").innerHTML="正官";
                      } else if (yy8=="寅"){
                       document.getElementById("ctn4").innerHTML="食神";
                      } else if (yy8=="卯"){
                       document.getElementById("ctn4").innerHTML="傷官";
                      } else if (yy8=="辰"){
                       document.getElementById("ctn4").innerHTML="偏官";
                      } else if (yy8=="巳"){
                       document.getElementById("ctn4").innerHTML="偏財";
                      } else if (yy8=="午"){
                       document.getElementById("ctn4").innerHTML="正財";
                      } else if (yy8=="未"){
                       document.getElementById("ctn4").innerHTML="正官"; 
                      } else if (yy8=="申"){
                       document.getElementById("ctn4").innerHTML="偏印";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="酉"){
                       document.getElementById("ctn4").innerHTML="正印";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="戌"){
                       document.getElementById("ctn4").innerHTML="偏官";
                      } else if (yy8=="亥"){
                       document.getElementById("ctn4").innerHTML="比肩";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      }
                 } else if (yy5=="癸"){
                    if (yy8=="子") {
                        document.getElementById("ctn4").innerHTML="比肩"; 
                        document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="丑"){
                        document.getElementById("ctn4").innerHTML="偏官";
                      } else if (yy8=="寅"){
                       document.getElementById("ctn4").innerHTML="傷官";
                      } else if (yy8=="卯"){
                       document.getElementById("ctn4").innerHTML="食神";
                      } else if (yy8=="辰"){
                       document.getElementById("ctn4").innerHTML="正官";
                      } else if (yy8=="巳"){
                       document.getElementById("ctn4").innerHTML="正財";
                      } else if (yy8=="午"){
                       document.getElementById("ctn4").innerHTML="偏財";
                      } else if (yy8=="未"){
                       document.getElementById("ctn4").innerHTML="偏官"; 
                      } else if (yy8=="申"){
                       document.getElementById("ctn4").innerHTML="正印";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="酉"){
                       document.getElementById("ctn4").innerHTML="偏印";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      } else if (yy8=="戌"){
                       document.getElementById("ctn4").innerHTML="正官";
                      } else if (yy8=="亥"){
                       document.getElementById("ctn4").innerHTML="劫財";
                       document.getElementById("ctn4").style.background= "Greenyellow"
                      }
                    }     
     
}

function ctn5(){
    if (yy5=="甲") {
       if (yy6=="子") {
         document.getElementById("ctn5").innerHTML="正印"; 
         document.getElementById("ctn5").style.background= "Greenyellow"
       } else if (yy6=="丑"){
         document.getElementById("ctn5").innerHTML="正財";
       } else if (yy6=="寅"){
        document.getElementById("ctn5").innerHTML="比肩";
        document.getElementById("ctn5").style.background= "Greenyellow"
       } else if (yy6=="卯"){
        document.getElementById("ctn5").innerHTML="劫財";
        document.getElementById("ctn5").style.background= "Greenyellow"
       } else if (yy6=="辰"){
        document.getElementById("ctn5").innerHTML="偏財";
       } else if (yy6=="巳"){
        document.getElementById("ctn5").innerHTML="食神";
       } else if (yy6=="午"){
        document.getElementById("ctn5").innerHTML="傷官";
       } else if (yy6=="未"){
        document.getElementById("ctn5").innerHTML="正財"; 
       } else if (yy6=="申"){
        document.getElementById("ctn5").innerHTML="偏官";
       } else if (yy6=="酉"){
        document.getElementById("ctn5").innerHTML="正官";
       } else if (yy6=="戌"){
        document.getElementById("ctn5").innerHTML="偏財";
       } else if (yy6=="亥"){
        document.getElementById("ctn5").innerHTML="偏印";
        document.getElementById("ctn5").style.background= "Greenyellow"
       }
    } else if (yy5=="乙"){
        if (yy6=="子") {
            document.getElementById("ctn5").innerHTML="偏印"; 
            document.getElementById("ctn5").style.background= "Greenyellow"
          } else if (yy6=="丑"){
            document.getElementById("ctn5").innerHTML="偏財";
          } else if (yy6=="寅"){
           document.getElementById("ctn5").innerHTML="劫財";
           document.getElementById("ctn5").style.background= "Greenyellow"
          } else if (yy6=="卯"){
           document.getElementById("ctn5").innerHTML="比肩";
           document.getElementById("ctn5").style.background= "Greenyellow"
          } else if (yy6=="辰"){
           document.getElementById("ctn5").innerHTML="正財";
          } else if (yy6=="巳"){
           document.getElementById("ctn5").innerHTML="傷官";
          } else if (yy6=="午"){
           document.getElementById("ctn5").innerHTML="食神";
          } else if (yy6=="未"){
           document.getElementById("ctn5").innerHTML="偏財"; 
          } else if (yy6=="申"){
           document.getElementById("ctn5").innerHTML="正官";
          } else if (yy6=="酉"){
           document.getElementById("ctn5").innerHTML="偏官";
          } else if (yy6=="戌"){
           document.getElementById("ctn5").innerHTML="正財";
          } else if (yy6=="亥"){
           document.getElementById("ctn5").innerHTML="正印";
           document.getElementById("ctn5").style.background= "Greenyellow"
          }
    } else if (yy5=="丙"){      
        if (yy6=="子") {
            document.getElementById("ctn5").innerHTML="正官"; 
          } else if (yy6=="丑"){
            document.getElementById("ctn5").innerHTML="傷官";
          } else if (yy6=="寅"){
           document.getElementById("ctn5").innerHTML="偏印";
           document.getElementById("ctn5").style.background= "Greenyellow"
          } else if (yy6=="卯"){
           document.getElementById("ctn5").innerHTML="正印";
           document.getElementById("ctn5").style.background= "Greenyellow"
          } else if (yy6=="辰"){
           document.getElementById("ctn5").innerHTML="食神";
          } else if (yy6=="巳"){
           document.getElementById("ctn5").innerHTML="比肩";
           document.getElementById("ctn5").style.background= "Greenyellow"
          } else if (yy6=="午"){
           document.getElementById("ctn5").innerHTML="劫財";
           document.getElementById("ctn5").style.background= "Greenyellow"
          } else if (yy6=="未"){
           document.getElementById("ctn5").innerHTML="傷官"; 
          } else if (yy6=="申"){
           document.getElementById("ctn5").innerHTML="偏財";
          } else if (yy6=="酉"){
           document.getElementById("ctn5").innerHTML="正財";
          } else if (yy6=="戌"){
           document.getElementById("ctn5").innerHTML="食神";
          } else if (yy6=="亥"){
           document.getElementById("ctn5").innerHTML="偏官";
          }
        } else if (yy5=="丁"){
            if (yy6=="子") {
                document.getElementById("ctn5").innerHTML="偏官"; 
              } else if (yy6=="丑"){
                document.getElementById("ctn5").innerHTML="食神";
              } else if (yy6=="寅"){
               document.getElementById("ctn5").innerHTML="正印";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="卯"){
               document.getElementById("ctn5").innerHTML="偏印";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="辰"){
               document.getElementById("ctn5").innerHTML="傷官";
              } else if (yy6=="巳"){
               document.getElementById("ctn5").innerHTML="劫財";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="午"){
               document.getElementById("ctn5").innerHTML="比肩";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="未"){
               document.getElementById("ctn5").innerHTML="食神"; 
              } else if (yy6=="申"){
               document.getElementById("ctn5").innerHTML="正財";
              } else if (yy6=="酉"){
               document.getElementById("ctn5").innerHTML="偏財";
              } else if (yy6=="戌"){
               document.getElementById("ctn5").innerHTML="傷官";
              } else if (yy6=="亥"){
               document.getElementById("ctn5").innerHTML="正官";
              }
        }  else if (yy5=="戊"){      
            if (yy6=="子") {
                document.getElementById("ctn5").innerHTML="正財"; 
              } else if (yy6=="丑"){
                document.getElementById("ctn5").innerHTML="劫財";
                document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="寅"){
               document.getElementById("ctn5").innerHTML="偏官";
              } else if (yy6=="卯"){
               document.getElementById("ctn5").innerHTML="正官";
              } else if (yy6=="辰"){
               document.getElementById("ctn5").innerHTML="比肩";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="巳"){
               document.getElementById("ctn5").innerHTML="偏印";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="午"){
               document.getElementById("ctn5").innerHTML="正印";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="未"){
               document.getElementById("ctn5").innerHTML="劫財"; 
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="申"){
               document.getElementById("ctn5").innerHTML="食神";
              } else if (yy6=="酉"){
               document.getElementById("ctn5").innerHTML="傷官";
              } else if (yy6=="戌"){
               document.getElementById("ctn5").innerHTML="比肩";
               document.getElementById("ctn5").style.background= "Greenyellow"
              } else if (yy6=="亥"){
               document.getElementById("ctn5").innerHTML="偏財";
              }
             } else if (yy5=="己"){
                if (yy6=="子") {
                    document.getElementById("ctn5").innerHTML="偏財"; 
                  } else if (yy6=="丑"){
                    document.getElementById("ctn5").innerHTML="比肩";
                    document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="寅"){
                   document.getElementById("ctn5").innerHTML="正官";
                  } else if (yy6=="卯"){
                   document.getElementById("ctn5").innerHTML="偏官";
                  } else if (yy6=="辰"){
                   document.getElementById("ctn5").innerHTML="劫財";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="巳"){
                   document.getElementById("ctn5").innerHTML="正印";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="午"){
                   document.getElementById("ctn5").innerHTML="偏印";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="未"){
                   document.getElementById("ctn5").innerHTML="比肩"; 
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="申"){
                   document.getElementById("ctn5").innerHTML="傷官";
                  } else if (yy6=="酉"){
                   document.getElementById("ctn5").innerHTML="食神";
                  } else if (yy6=="戌"){
                   document.getElementById("ctn5").innerHTML="劫財";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="亥"){
                   document.getElementById("ctn5").innerHTML="正財";
                  }
             }  else if (yy5=="庚"){      
                if (yy6=="子") {
                    document.getElementById("ctn5").innerHTML="傷官"; 
                  } else if (yy6=="丑"){
                    document.getElementById("ctn5").innerHTML="正印";
                    document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="寅"){
                   document.getElementById("ctn5").innerHTML="偏財";
                  } else if (yy6=="卯"){
                   document.getElementById("ctn5").innerHTML="正財";
                  } else if (yy6=="辰"){
                   document.getElementById("ctn5").innerHTML="偏印";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="巳"){
                   document.getElementById("ctn5").innerHTML="偏官";
                  } else if (yy6=="午"){
                   document.getElementById("ctn5").innerHTML="正官";
                  } else if (yy6=="未"){
                   document.getElementById("ctn5").innerHTML="正印"; 
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="申"){
                   document.getElementById("ctn5").innerHTML="比肩";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="酉"){
                   document.getElementById("ctn5").innerHTML="劫財";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="戌"){
                   document.getElementById("ctn5").innerHTML="偏印";
                   document.getElementById("ctn5").style.background= "Greenyellow"
                  } else if (yy6=="亥"){
                   document.getElementById("ctn5").innerHTML="食神";
                  }
                 } else if (yy5=="辛"){
                    if (yy6=="子") {
                        document.getElementById("ctn5").innerHTML="食神"; 
                      } else if (yy6=="丑"){
                        document.getElementById("ctn5").innerHTML="偏印";
                        document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="寅"){
                       document.getElementById("ctn5").innerHTML="正財";
                      } else if (yy6=="卯"){
                       document.getElementById("ctn5").innerHTML="偏財";
                      } else if (yy6=="辰"){
                       document.getElementById("ctn5").innerHTML="正印";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="巳"){
                       document.getElementById("ctn5").innerHTML="正官";
                      } else if (yy6=="午"){
                       document.getElementById("ctn5").innerHTML="偏官";
                      } else if (yy6=="未"){
                       document.getElementById("ctn5").innerHTML="偏印"; 
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="申"){
                       document.getElementById("ctn5").innerHTML="劫財";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="酉"){
                       document.getElementById("ctn5").innerHTML="比肩";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="戌"){
                       document.getElementById("ctn5").innerHTML="正印";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="亥"){
                       document.getElementById("ctn5").innerHTML="傷官";
                      }

                 } else if (yy5=="壬"){      
                    if (yy6=="子") {
                        document.getElementById("ctn5").innerHTML="劫財"; 
                        document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="丑"){
                        document.getElementById("ctn5").innerHTML="正官";
                      } else if (yy6=="寅"){
                       document.getElementById("ctn5").innerHTML="食神";
                      } else if (yy6=="卯"){
                       document.getElementById("ctn5").innerHTML="傷官";
                      } else if (yy6=="辰"){
                       document.getElementById("ctn5").innerHTML="偏官";
                      } else if (yy6=="巳"){
                       document.getElementById("ctn5").innerHTML="偏財";
                      } else if (yy6=="午"){
                       document.getElementById("ctn5").innerHTML="正財";
                      } else if (yy6=="未"){
                       document.getElementById("ctn5").innerHTML="正官"; 
                      } else if (yy6=="申"){
                       document.getElementById("ctn5").innerHTML="偏印";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="酉"){
                       document.getElementById("ctn5").innerHTML="正印";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="戌"){
                       document.getElementById("ctn5").innerHTML="偏官";
                      } else if (yy6=="亥"){
                       document.getElementById("ctn5").innerHTML="比肩";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      }
                 } else if (yy5=="癸"){
                    if (yy6=="子") {
                        document.getElementById("ctn5").innerHTML="比肩"; 
                        document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="丑"){
                        document.getElementById("ctn5").innerHTML="偏官";
                      } else if (yy6=="寅"){
                       document.getElementById("ctn5").innerHTML="傷官";
                      } else if (yy6=="卯"){
                       document.getElementById("ctn5").innerHTML="食神";
                      } else if (yy6=="辰"){
                       document.getElementById("ctn5").innerHTML="正官";
                      } else if (yy6=="巳"){
                       document.getElementById("ctn5").innerHTML="正財";
                      } else if (yy6=="午"){
                       document.getElementById("ctn5").innerHTML="偏財";
                      } else if (yy6=="未"){
                       document.getElementById("ctn5").innerHTML="偏官"; 
                      } else if (yy6=="申"){
                       document.getElementById("ctn5").innerHTML="正印";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="酉"){
                       document.getElementById("ctn5").innerHTML="偏印";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      } else if (yy6=="戌"){
                       document.getElementById("ctn5").innerHTML="正官";
                      } else if (yy6=="亥"){
                       document.getElementById("ctn5").innerHTML="劫財";
                       document.getElementById("ctn5").style.background= "Greenyellow"
                      }
                    }     
     
}

function ctn6(){
    if (yy5=="甲") {
       if (yy4=="子") {
         document.getElementById("ctn6").innerHTML="正印"; 
         document.getElementById("ctn6").style.background= "Greenyellow"
       } else if (yy4=="丑"){
         document.getElementById("ctn6").innerHTML="正財";
       } else if (yy4=="寅"){
        document.getElementById("ctn6").innerHTML="比肩";
        document.getElementById("ctn6").style.background= "Greenyellow"
       } else if (yy4=="卯"){
        document.getElementById("ctn6").innerHTML="劫財";
        document.getElementById("ctn6").style.background= "Greenyellow"
       } else if (yy4=="辰"){
        document.getElementById("ctn6").innerHTML="偏財";
       } else if (yy4=="巳"){
        document.getElementById("ctn6").innerHTML="食神";
       } else if (yy4=="午"){
        document.getElementById("ctn6").innerHTML="傷官";
       } else if (yy4=="未"){
        document.getElementById("ctn6").innerHTML="正財"; 
       } else if (yy4=="申"){
        document.getElementById("ctn6").innerHTML="偏官";
       } else if (yy4=="酉"){
        document.getElementById("ctn6").innerHTML="正官";
       } else if (yy4=="戌"){
        document.getElementById("ctn6").innerHTML="偏財";
       } else if (yy4=="亥"){
        document.getElementById("ctn6").innerHTML="偏印";
        document.getElementById("ctn6").style.background= "Greenyellow"
       }
    } else if (yy5=="乙"){
        if (yy4=="子") {
            document.getElementById("ctn6").innerHTML="偏印"; 
            document.getElementById("ctn6").style.background= "Greenyellow"
          } else if (yy4=="丑"){
            document.getElementById("ctn6").innerHTML="偏財";
          } else if (yy4=="寅"){
           document.getElementById("ctn6").innerHTML="劫財";
           document.getElementById("ctn6").style.background= "Greenyellow"
          } else if (yy4=="卯"){
           document.getElementById("ctn6").innerHTML="比肩";
           document.getElementById("ctn6").style.background= "Greenyellow"
          } else if (yy4=="辰"){
           document.getElementById("ctn6").innerHTML="正財";
          } else if (yy4=="巳"){
           document.getElementById("ctn6").innerHTML="傷官";
          } else if (yy4=="午"){
           document.getElementById("ctn6").innerHTML="食神";
          } else if (yy4=="未"){
           document.getElementById("ctn6").innerHTML="偏財"; 
          } else if (yy4=="申"){
           document.getElementById("ctn6").innerHTML="正官";
          } else if (yy4=="酉"){
           document.getElementById("ctn6").innerHTML="偏官";
          } else if (yy4=="戌"){
           document.getElementById("ctn6").innerHTML="正財";
          } else if (yy4=="亥"){
           document.getElementById("ctn6").innerHTML="正印";
           document.getElementById("ctn6").style.background= "Greenyellow"
          }
    } else if (yy5=="丙"){      
        if (yy4=="子") {
            document.getElementById("ctn6").innerHTML="正官"; 
          } else if (yy4=="丑"){
            document.getElementById("ctn6").innerHTML="傷官";
          } else if (yy4=="寅"){
           document.getElementById("ctn6").innerHTML="偏印";
           document.getElementById("ctn6").style.background= "Greenyellow"
          } else if (yy4=="卯"){
           document.getElementById("ctn6").innerHTML="正印";
           document.getElementById("ctn6").style.background= "Greenyellow"
          } else if (yy4=="辰"){
           document.getElementById("ctn6").innerHTML="食神";
          } else if (yy4=="巳"){
           document.getElementById("ctn6").innerHTML="比肩";
           document.getElementById("ctn6").style.background= "Greenyellow"
          } else if (yy4=="午"){
           document.getElementById("ctn6").innerHTML="劫財";
           document.getElementById("ctn6").style.background= "Greenyellow"
          } else if (yy4=="未"){
           document.getElementById("ctn6").innerHTML="傷官"; 
          } else if (yy4=="申"){
           document.getElementById("ctn6").innerHTML="偏財";
          } else if (yy4=="酉"){
           document.getElementById("ctn6").innerHTML="正財";
          } else if (yy4=="戌"){
           document.getElementById("ctn6").innerHTML="食神";
          } else if (yy4=="亥"){
           document.getElementById("ctn6").innerHTML="偏官";
          }
        } else if (yy5=="丁"){
            if (yy4=="子") {
                document.getElementById("ctn6").innerHTML="偏官"; 
              } else if (yy4=="丑"){
                document.getElementById("ctn6").innerHTML="食神";
              } else if (yy4=="寅"){
               document.getElementById("ctn6").innerHTML="正印";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="卯"){
               document.getElementById("ctn6").innerHTML="偏印";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="辰"){
               document.getElementById("ctn6").innerHTML="傷官";
              } else if (yy4=="巳"){
               document.getElementById("ctn6").innerHTML="劫財";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="午"){
               document.getElementById("ctn6").innerHTML="比肩";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="未"){
               document.getElementById("ctn6").innerHTML="食神"; 
              } else if (yy4=="申"){
               document.getElementById("ctn6").innerHTML="正財";
              } else if (yy4=="酉"){
               document.getElementById("ctn6").innerHTML="偏財";
              } else if (yy4=="戌"){
               document.getElementById("ctn6").innerHTML="傷官";
              } else if (yy4=="亥"){
               document.getElementById("ctn6").innerHTML="正官";
              }
        }  else if (yy5=="戊"){      
            if (yy4=="子") {
                document.getElementById("ctn6").innerHTML="正財"; 
              } else if (yy4=="丑"){
                document.getElementById("ctn6").innerHTML="劫財";
                document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="寅"){
               document.getElementById("ctn6").innerHTML="偏官";
              } else if (yy4=="卯"){
               document.getElementById("ctn6").innerHTML="正官";
              } else if (yy4=="辰"){
               document.getElementById("ctn6").innerHTML="比肩";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="巳"){
               document.getElementById("ctn6").innerHTML="偏印";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="午"){
               document.getElementById("ctn6").innerHTML="正印";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="未"){
               document.getElementById("ctn6").innerHTML="劫財"; 
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="申"){
               document.getElementById("ctn6").innerHTML="食神";
              } else if (yy4=="酉"){
               document.getElementById("ctn6").innerHTML="傷官";
              } else if (yy4=="戌"){
               document.getElementById("ctn6").innerHTML="比肩";
               document.getElementById("ctn6").style.background= "Greenyellow"
              } else if (yy4=="亥"){
               document.getElementById("ctn6").innerHTML="偏財";
              }
             } else if (yy5=="己"){
                if (yy4=="子") {
                    document.getElementById("ctn6").innerHTML="偏財"; 
                  } else if (yy4=="丑"){
                    document.getElementById("ctn6").innerHTML="比肩";
                    document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="寅"){
                   document.getElementById("ctn6").innerHTML="正官";
                  } else if (yy4=="卯"){
                   document.getElementById("ctn6").innerHTML="偏官";
                  } else if (yy4=="辰"){
                   document.getElementById("ctn6").innerHTML="劫財";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="巳"){
                   document.getElementById("ctn6").innerHTML="正印";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="午"){
                   document.getElementById("ctn6").innerHTML="偏印";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="未"){
                   document.getElementById("ctn6").innerHTML="比肩"; 
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="申"){
                   document.getElementById("ctn6").innerHTML="傷官";
                  } else if (yy4=="酉"){
                   document.getElementById("ctn6").innerHTML="食神";
                  } else if (yy4=="戌"){
                   document.getElementById("ctn6").innerHTML="劫財";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="亥"){
                   document.getElementById("ctn6").innerHTML="正財";
                  }
             }  else if (yy5=="庚"){      
                if (yy4=="子") {
                    document.getElementById("ctn6").innerHTML="傷官"; 
                  } else if (yy4=="丑"){
                    document.getElementById("ctn6").innerHTML="正印";
                    document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="寅"){
                   document.getElementById("ctn6").innerHTML="偏財";
                  } else if (yy4=="卯"){
                   document.getElementById("ctn6").innerHTML="正財";
                  } else if (yy4=="辰"){
                   document.getElementById("ctn6").innerHTML="偏印";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="巳"){
                   document.getElementById("ctn6").innerHTML="偏官";
                  } else if (yy4=="午"){
                   document.getElementById("ctn6").innerHTML="正官";
                  } else if (yy4=="未"){
                   document.getElementById("ctn6").innerHTML="正印"; 
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="申"){
                   document.getElementById("ctn6").innerHTML="比肩";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="酉"){
                   document.getElementById("ctn6").innerHTML="劫財";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="戌"){
                   document.getElementById("ctn6").innerHTML="偏印";
                   document.getElementById("ctn6").style.background= "Greenyellow"
                  } else if (yy4=="亥"){
                   document.getElementById("ctn6").innerHTML="食神";
                  }
                 } else if (yy5=="辛"){
                    if (yy4=="子") {
                        document.getElementById("ctn6").innerHTML="食神"; 
                      } else if (yy4=="丑"){
                        document.getElementById("ctn6").innerHTML="偏印";
                        document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="寅"){
                       document.getElementById("ctn6").innerHTML="正財";
                      } else if (yy4=="卯"){
                       document.getElementById("ctn6").innerHTML="偏財";
                      } else if (yy4=="辰"){
                       document.getElementById("ctn6").innerHTML="正印";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="巳"){
                       document.getElementById("ctn6").innerHTML="正官";
                      } else if (yy4=="午"){
                       document.getElementById("ctn6").innerHTML="偏官";
                      } else if (yy4=="未"){
                       document.getElementById("ctn6").innerHTML="偏印"; 
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="申"){
                       document.getElementById("ctn6").innerHTML="劫財";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="酉"){
                       document.getElementById("ctn6").innerHTML="比肩";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="戌"){
                       document.getElementById("ctn6").innerHTML="正印";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="亥"){
                       document.getElementById("ctn6").innerHTML="傷官";
                      }

                 } else if (yy5=="壬"){      
                    if (yy4=="子") {
                        document.getElementById("ctn6").innerHTML="劫財"; 
                        document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="丑"){
                        document.getElementById("ctn6").innerHTML="正官";
                      } else if (yy4=="寅"){
                       document.getElementById("ctn6").innerHTML="食神";
                      } else if (yy4=="卯"){
                       document.getElementById("ctn6").innerHTML="傷官";
                      } else if (yy4=="辰"){
                       document.getElementById("ctn6").innerHTML="偏官";
                      } else if (yy4=="巳"){
                       document.getElementById("ctn6").innerHTML="偏財";
                      } else if (yy4=="午"){
                       document.getElementById("ctn6").innerHTML="正財";
                      } else if (yy4=="未"){
                       document.getElementById("ctn6").innerHTML="正官"; 
                      } else if (yy4=="申"){
                       document.getElementById("ctn6").innerHTML="偏印";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="酉"){
                       document.getElementById("ctn6").innerHTML="正印";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="戌"){
                       document.getElementById("ctn6").innerHTML="偏官";
                      } else if (yy4=="亥"){
                       document.getElementById("ctn6").innerHTML="比肩";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      }
                 } else if (yy5=="癸"){
                    if (yy4=="子") {
                        document.getElementById("ctn6").innerHTML="比肩"; 
                        document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="丑"){
                        document.getElementById("ctn6").innerHTML="偏官";
                      } else if (yy4=="寅"){
                       document.getElementById("ctn6").innerHTML="傷官";
                      } else if (yy4=="卯"){
                       document.getElementById("ctn6").innerHTML="食神";
                      } else if (yy4=="辰"){
                       document.getElementById("ctn6").innerHTML="正官";
                      } else if (yy4=="巳"){
                       document.getElementById("ctn6").innerHTML="正財";
                      } else if (yy4=="午"){
                       document.getElementById("ctn6").innerHTML="偏財";
                      } else if (yy4=="未"){
                       document.getElementById("ctn6").innerHTML="偏官"; 
                      } else if (yy4=="申"){
                       document.getElementById("ctn6").innerHTML="正印";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="酉"){
                       document.getElementById("ctn6").innerHTML="偏印";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      } else if (yy4=="戌"){
                       document.getElementById("ctn6").innerHTML="正官";
                      } else if (yy4=="亥"){
                       document.getElementById("ctn6").innerHTML="劫財";
                       document.getElementById("ctn6").style.background= "Greenyellow"
                      }
                    }     
     
}

function ctn7(){
    if (yy5=="甲") {
       if (yy2=="子") {
         document.getElementById("ctn7").innerHTML="正印"; 
         document.getElementById("ctn7").style.background= "Greenyellow"
       } else if (yy2=="丑"){
         document.getElementById("ctn7").innerHTML="正財";
       } else if (yy2=="寅"){
        document.getElementById("ctn7").innerHTML="比肩";
        document.getElementById("ctn7").style.background= "Greenyellow"
       } else if (yy2=="卯"){
        document.getElementById("ctn7").innerHTML="劫財";
        document.getElementById("ctn7").style.background= "Greenyellow"
       } else if (yy2=="辰"){
        document.getElementById("ctn7").innerHTML="偏財";
       } else if (yy2=="巳"){
        document.getElementById("ctn7").innerHTML="食神";
       } else if (yy2=="午"){
        document.getElementById("ctn7").innerHTML="傷官";
       } else if (yy2=="未"){
        document.getElementById("ctn7").innerHTML="正財"; 
       } else if (yy2=="申"){
        document.getElementById("ctn7").innerHTML="偏官";
       } else if (yy2=="酉"){
        document.getElementById("ctn7").innerHTML="正官";
       } else if (yy2=="戌"){
        document.getElementById("ctn7").innerHTML="偏財";
       } else if (yy2=="亥"){
        document.getElementById("ctn7").innerHTML="偏印";
        document.getElementById("ctn7").style.background= "Greenyellow"
       }
    } else if (yy5=="乙"){
        if (yy2=="子") {
            document.getElementById("ctn7").innerHTML="偏印"; 
            document.getElementById("ctn7").style.background= "Greenyellow"
          } else if (yy2=="丑"){
            document.getElementById("ctn7").innerHTML="偏財";
          } else if (yy2=="寅"){
           document.getElementById("ctn7").innerHTML="劫財";
           document.getElementById("ctn7").style.background= "Greenyellow"
          } else if (yy2=="卯"){
           document.getElementById("ctn7").innerHTML="比肩";
           document.getElementById("ctn7").style.background= "Greenyellow"
          } else if (yy2=="辰"){
           document.getElementById("ctn7").innerHTML="正財";
          } else if (yy2=="巳"){
           document.getElementById("ctn7").innerHTML="傷官";
          } else if (yy2=="午"){
           document.getElementById("ctn7").innerHTML="食神";
          } else if (yy2=="未"){
           document.getElementById("ctn7").innerHTML="偏財"; 
          } else if (yy2=="申"){
           document.getElementById("ctn7").innerHTML="正官";
          } else if (yy2=="酉"){
           document.getElementById("ctn7").innerHTML="偏官";
          } else if (yy2=="戌"){
           document.getElementById("ctn7").innerHTML="正財";
          } else if (yy2=="亥"){
           document.getElementById("ctn7").innerHTML="正印";
           document.getElementById("ctn7").style.background= "Greenyellow"
          }
    } else if (yy5=="丙"){      
        if (yy2=="子") {
            document.getElementById("ctn7").innerHTML="正官"; 
          } else if (yy2=="丑"){
            document.getElementById("ctn7").innerHTML="傷官";
          } else if (yy2=="寅"){
           document.getElementById("ctn7").innerHTML="偏印";
           document.getElementById("ctn7").style.background= "Greenyellow"
          } else if (yy2=="卯"){
           document.getElementById("ctn7").innerHTML="正印";
           document.getElementById("ctn7").style.background= "Greenyellow"
          } else if (yy2=="辰"){
           document.getElementById("ctn7").innerHTML="食神";
          } else if (yy2=="巳"){
           document.getElementById("ctn7").innerHTML="比肩";
           document.getElementById("ctn7").style.background= "Greenyellow"
          } else if (yy2=="午"){
           document.getElementById("ctn7").innerHTML="劫財";
           document.getElementById("ctn7").style.background= "Greenyellow"
          } else if (yy2=="未"){
           document.getElementById("ctn7").innerHTML="傷官"; 
          } else if (yy2=="申"){
           document.getElementById("ctn7").innerHTML="偏財";
          } else if (yy2=="酉"){
           document.getElementById("ctn7").innerHTML="正財";
          } else if (yy2=="戌"){
           document.getElementById("ctn7").innerHTML="食神";
          } else if (yy2=="亥"){
           document.getElementById("ctn7").innerHTML="偏官";
          }
        } else if (yy5=="丁"){
            if (yy2=="子") {
                document.getElementById("ctn7").innerHTML="偏官"; 
              } else if (yy2=="丑"){
                document.getElementById("ctn7").innerHTML="食神";
              } else if (yy2=="寅"){
               document.getElementById("ctn7").innerHTML="正印";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="卯"){
               document.getElementById("ctn7").innerHTML="偏印";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="辰"){
               document.getElementById("ctn7").innerHTML="傷官";
              } else if (yy2=="巳"){
               document.getElementById("ctn7").innerHTML="劫財";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="午"){
               document.getElementById("ctn7").innerHTML="比肩";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="未"){
               document.getElementById("ctn7").innerHTML="食神"; 
              } else if (yy2=="申"){
               document.getElementById("ctn7").innerHTML="正財";
              } else if (yy2=="酉"){
               document.getElementById("ctn7").innerHTML="偏財";
              } else if (yy2=="戌"){
               document.getElementById("ctn7").innerHTML="傷官";
              } else if (yy2=="亥"){
               document.getElementById("ctn7").innerHTML="正官";
              }
        }  else if (yy5=="戊"){      
            if (yy2=="子") {
                document.getElementById("ctn7").innerHTML="正財"; 
              } else if (yy2=="丑"){
                document.getElementById("ctn7").innerHTML="劫財";
                document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="寅"){
               document.getElementById("ctn7").innerHTML="偏官";
              } else if (yy2=="卯"){
               document.getElementById("ctn7").innerHTML="正官";
              } else if (yy2=="辰"){
               document.getElementById("ctn7").innerHTML="比肩";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="巳"){
               document.getElementById("ctn7").innerHTML="偏印";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="午"){
               document.getElementById("ctn7").innerHTML="正印";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="未"){
               document.getElementById("ctn7").innerHTML="劫財"; 
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="申"){
               document.getElementById("ctn7").innerHTML="食神";
              } else if (yy2=="酉"){
               document.getElementById("ctn7").innerHTML="傷官";
              } else if (yy2=="戌"){
               document.getElementById("ctn7").innerHTML="比肩";
               document.getElementById("ctn7").style.background= "Greenyellow"
              } else if (yy2=="亥"){
               document.getElementById("ctn7").innerHTML="偏財";
              }
             } else if (yy5=="己"){
                if (yy2=="子") {
                    document.getElementById("ctn7").innerHTML="偏財"; 
                  } else if (yy2=="丑"){
                    document.getElementById("ctn7").innerHTML="比肩";
                    document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="寅"){
                   document.getElementById("ctn7").innerHTML="正官";
                  } else if (yy2=="卯"){
                   document.getElementById("ctn7").innerHTML="偏官";
                  } else if (yy2=="辰"){
                   document.getElementById("ctn7").innerHTML="劫財";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="巳"){
                   document.getElementById("ctn7").innerHTML="正印";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="午"){
                   document.getElementById("ctn7").innerHTML="偏印";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="未"){
                   document.getElementById("ctn7").innerHTML="比肩"; 
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="申"){
                   document.getElementById("ctn7").innerHTML="傷官";
                  } else if (yy2=="酉"){
                   document.getElementById("ctn7").innerHTML="食神";
                  } else if (yy2=="戌"){
                   document.getElementById("ctn7").innerHTML="劫財";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="亥"){
                   document.getElementById("ctn7").innerHTML="正財";
                  }
             }  else if (yy5=="庚"){      
                if (yy2=="子") {
                    document.getElementById("ctn7").innerHTML="傷官"; 
                  } else if (yy2=="丑"){
                    document.getElementById("ctn7").innerHTML="正印";
                    document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="寅"){
                   document.getElementById("ctn7").innerHTML="偏財";
                  } else if (yy2=="卯"){
                   document.getElementById("ctn7").innerHTML="正財";
                  } else if (yy2=="辰"){
                   document.getElementById("ctn7").innerHTML="偏印";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="巳"){
                   document.getElementById("ctn7").innerHTML="偏官";
                  } else if (yy2=="午"){
                   document.getElementById("ctn7").innerHTML="正官";
                  } else if (yy2=="未"){
                   document.getElementById("ctn7").innerHTML="正印"; 
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="申"){
                   document.getElementById("ctn7").innerHTML="比肩";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="酉"){
                   document.getElementById("ctn7").innerHTML="劫財";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="戌"){
                   document.getElementById("ctn7").innerHTML="偏印";
                   document.getElementById("ctn7").style.background= "Greenyellow"
                  } else if (yy2=="亥"){
                   document.getElementById("ctn7").innerHTML="食神";
                  }
                 } else if (yy5=="辛"){
                    if (yy2=="子") {
                        document.getElementById("ctn7").innerHTML="食神"; 
                      } else if (yy2=="丑"){
                        document.getElementById("ctn7").innerHTML="偏印";
                        document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="寅"){
                       document.getElementById("ctn7").innerHTML="正財";
                      } else if (yy2=="卯"){
                       document.getElementById("ctn7").innerHTML="偏財";
                      } else if (yy2=="辰"){
                       document.getElementById("ctn7").innerHTML="正印";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="巳"){
                       document.getElementById("ctn7").innerHTML="正官";
                      } else if (yy2=="午"){
                       document.getElementById("ctn7").innerHTML="偏官";
                      } else if (yy2=="未"){
                       document.getElementById("ctn7").innerHTML="偏印"; 
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="申"){
                       document.getElementById("ctn7").innerHTML="劫財";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="酉"){
                       document.getElementById("ctn7").innerHTML="比肩";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="戌"){
                       document.getElementById("ctn7").innerHTML="正印";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="亥"){
                       document.getElementById("ctn7").innerHTML="傷官";
                      }

                 } else if (yy5=="壬"){      
                    if (yy2=="子") {
                        document.getElementById("ctn7").innerHTML="劫財"; 
                        document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="丑"){
                        document.getElementById("ctn7").innerHTML="正官";
                      } else if (yy2=="寅"){
                       document.getElementById("ctn7").innerHTML="食神";
                      } else if (yy2=="卯"){
                       document.getElementById("ctn7").innerHTML="傷官";
                      } else if (yy2=="辰"){
                       document.getElementById("ctn7").innerHTML="偏官";
                      } else if (yy2=="巳"){
                       document.getElementById("ctn7").innerHTML="偏財";
                      } else if (yy2=="午"){
                       document.getElementById("ctn7").innerHTML="正財";
                      } else if (yy2=="未"){
                       document.getElementById("ctn7").innerHTML="正官"; 
                      } else if (yy2=="申"){
                       document.getElementById("ctn7").innerHTML="偏印";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="酉"){
                       document.getElementById("ctn7").innerHTML="正印";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="戌"){
                       document.getElementById("ctn7").innerHTML="偏官";
                      } else if (yy2=="亥"){
                       document.getElementById("ctn7").innerHTML="比肩";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      }
                 } else if (yy5=="癸"){
                    if (yy2=="子") {
                        document.getElementById("ctn7").innerHTML="比肩"; 
                        document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="丑"){
                        document.getElementById("ctn7").innerHTML="偏官";
                      } else if (yy2=="寅"){
                       document.getElementById("ctn7").innerHTML="傷官";
                      } else if (yy2=="卯"){
                       document.getElementById("ctn7").innerHTML="食神";
                      } else if (yy2=="辰"){
                       document.getElementById("ctn7").innerHTML="正官";
                      } else if (yy2=="巳"){
                       document.getElementById("ctn7").innerHTML="正財";
                      } else if (yy2=="午"){
                       document.getElementById("ctn7").innerHTML="偏財";
                      } else if (yy2=="未"){
                       document.getElementById("ctn7").innerHTML="偏官"; 
                      } else if (yy2=="申"){
                       document.getElementById("ctn7").innerHTML="正印";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="酉"){
                       document.getElementById("ctn7").innerHTML="偏印";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      } else if (yy2=="戌"){
                       document.getElementById("ctn7").innerHTML="正官";
                      } else if (yy2=="亥"){
                       document.getElementById("ctn7").innerHTML="劫財";
                       document.getElementById("ctn7").style.background= "Greenyellow"
                      }
                    }     
     
}