function result1(){
            
    document.getElementById("ch4").style.display="inline"; 
    document.getElementById("ch8").style.display="inline";
}
function test1(){
    document.getElementById("ch4").style.display="none";
    document.getElementById("ch8").style.display="none";
    var xx1 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xx2 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var xx3 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xx5 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var xx6 =  Math.floor(Math.random() * 12); // 0 ~ 11
    var xx7 =  Math.floor(Math.random() * 10); // 0 ~ 9
    var yy1, yy2, yy3, yy4, yy5, yy6, yy7, yy8
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
    if (xx3==0) { 
        yy3="甲"  
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="戌" //관성
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="申" //재성
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="午"  //식상
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="辰"   //비견
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="子(寅)" //인성
        }
    } else if (xx3==1){ 
        yy3="乙" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="亥"  //관성
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="酉"  //재성
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="未"  //식상
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="巳"  //비견
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="丑(卯)"  //인성
        }
    } else if (xx3==2){ 
        yy3="丙"
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="子(寅)" //인성
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="戌"   //관성
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="申"   //재성
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="午"   //식상
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="辰"   //비견
        }
    } else if (xx3==3){  
        yy3="丁" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="丑(卯)"   //인성
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="亥"  //관성
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="酉"  //재성
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="未"  //식상
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="巳"  //비견
        }
    } else if (xx3==4){  
        yy3="戊" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="辰"  //비견
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="子(寅)"  //인성
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="戌"  //관성
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="申"  //재성
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="午"  //식상
        }
    } else if (xx3==5){  
        yy3="己" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="巳"  //비견
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="丑(卯)"  //인성
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="亥"  //관성
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="酉"  //재성
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="未"  //식상
        }
    } else if (xx3==6){  
        yy3="庚" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="午"  //식상
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="辰"  //비견
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="子(寅)"  //인성
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="戌"  //관성
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="申"  //재성
        }
    } else if (xx3==7){  
        yy3="辛" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="未"  //식상
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="巳"  //비견
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="丑(卯)"  //인성
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="亥"  //관성
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="酉"  //재성
        }
    } else if (xx3==8){  
        yy3="壬" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="申"  //재성
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="午"  //식상
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="辰"  //비견
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="子(寅)"  //인성
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="戌"  //관성
        }
    } else if (xx3==9){  
        yy3="癸" 
        if (xx1==0 || xx1==5) {  //갑-토  기-토
            yy4="酉"  //재성
        } else if (xx1==1 || xx1==6) {  //을-금  경-금
            yy4="未"  //식상
        } else if (xx1==2 || xx1==7) { //병-수  신-수
            yy4="巳"  //비견
        } else if (xx1==3 || xx1==8) { //정-목   임-목
            yy4="丑(卯)"  //인성
        } else if (xx1==4 || xx1==9) { //무-화   계-화
            yy4="亥"  //관성
        } 
        
    }
    document.getElementById("ch1").innerHTML = yy1;
    document.getElementById("ch2").innerHTML = yy2;
    document.getElementById("ch3").innerHTML = yy3;
    document.getElementById("ch4").innerHTML = yy4;
    document.getElementById("ch4-1").innerHTML = "  ";
    document.getElementById("ch8-1").innerHTML = "  ";



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
    if (xx7==0) { 
        yy7="甲"  
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="子(戌)" //관성
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="申" //재성
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="午"  //식상
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="辰"   //비견
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="寅" //인성
        }
    } else if (xx7==1){ 
        yy7="乙" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="丑(亥)"  //관성
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="酉"  //재성
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="未"  //식상
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="巳"  //비견
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="卯"  //인성
        }
    } else if (xx7==2){ 
        yy7="丙"
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="寅" //인성
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="子(戌)"   //관성
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="申"   //재성
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="午"   //식상
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="辰"   //비견
        }
    } else if (xx7==3){  
        yy7="丁" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="卯"   //인성
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="丑(亥)"  //관성
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="酉"  //재성
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="未"  //식상
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="巳"  //비견
        }
    } else if (xx7==4){  
        yy7="戊" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="辰"  //비견
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="寅"  //인성
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="子(戌)"  //관성
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="申"  //재성
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="午"  //식상
        }
    } else if (xx7==5){  
        yy7="己" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="巳"  //비견
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="卯"  //인성
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="丑(亥)"  //관성
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="酉"  //재성
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="未"  //식상
        }
    } else if (xx7==6){  
        yy7="庚" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="午"  //식상
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="辰"  //비견
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="寅"  //인성
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="子(戌)"  //관성
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="申"  //재성
        }
    } else if (xx7==7){  
        yy7="辛" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="未"  //식상
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="巳"  //비견
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="卯"  //인성
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="丑(亥)"  //관성
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="酉"  //재성
        }
    } else if (xx7==8){  
        yy7="壬" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="申"  //재성
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="午"  //식상
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="辰"  //비견
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="寅"  //인성
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="子(戌)"  //관성
        }
    } else if (xx7==9){  
        yy7="癸" 
        if (xx5==0 || xx5==5) {  //갑-토  기-토
            yy8="酉"  //재성
        } else if (xx5==1 || xx5==6) {  //을-금  경-금
            yy8="未"  //식상
        } else if (xx5==2 || xx5==7) { //병-수  신-수
            yy8="巳"  //비견
        } else if (xx5==3 || xx5==8) { //정-목   임-목
            yy8="卯"  //인성
        } else if (xx5==4 || xx5==9) { //무-화   계-화
            yy8="丑(亥)"  //관성
        } 
        
    }
    
    document.getElementById("ch5").innerHTML = yy5;
    document.getElementById("ch6").innerHTML = yy6;
    document.getElementById("ch7").innerHTML = yy7;
    document.getElementById("ch8").innerHTML = yy8;

}