var sam;
function result(){
    
    document.getElementById("result").style.display="inline"; 
}
function test() {
    
    document.getElementById("result").style.display="none";
    var x =  Math.floor(Math.random() * 85); // 0 ~ 84
    var x1, y
    if (x==sam) {
       if(x==0){
           x=x+1;
       } else {
          x=x-1;
       } 
    } 
    if (x==0) {
        x1="曲直"
        y="木  (오성)"
    } else if (x==1){
        x1="새벽 · 아침"
        y="木  (하루)"
    } else if (x==2){
        x1="靑龍"
        y="木  (방위- 東)"
    } else if (x==3){
        x1="소년기"  
        y="木  (인생)"
    } else if (x==4){
        x1="꿈 · 희망"  
        y="木  (마음)"
    } else if (x==5){
        x1="청소년관련" 
        y="木  (직업)"
    } else if (x==6){
        x1="仁" 
        y="木  (오상)"
    } else if (x==7){
        x1="눈" 
        y="木  (얼굴)"
    } else if (x==8){
        x1="신맛"
        y="木   (맛)"
    } else if (x==9){
        x1="신경계" 
        y="木  (신체)"
    } else if (x==10){
        x1="간" 
        y="木  (오장)"
    } else if (x==11){
        x1="담" 
        y="木  (육부)"
    } else if (x==12){
        x1="3, 8" 
        y="木  (선천수)"
    } else if (x==13){
        x1="1, 2" 
        y="木  (후천수)"
    } else if (x==14){
        x1="ㄱ,ㅋ" 
        y="木  (발음)"
    } else if (x==15){
        x1="어금니소리" 
        y="木  (오음)"
    } else if (x==16){
        x1="風" 
        y="木  (오기)"
    } else if (x==17){
        x1="炎上"
        y="火  (오성)"
    } else if (x==18){
        x1="오전 · 한낮"
        y="火  (하루)"
    } else if (x==19){
        x1="朱雀"
        y="火  (방위- 南)"
    } else if (x==20){
        x1="청년기"  
        y="火  (인생)"
    } else if (x==21){
        x1="열정 · 투쟁"  
        y="火  (마음)"
    } else if (x==22){
        x1="연예 · 스포츠" 
        y="火  (직업)"
    } else if (x==23){
        x1="禮" 
        y="火  (오상)"
    } else if (x==24){
        x1="혀" 
        y="火  (얼굴)"
    } else if (x==25){
        x1="쓴맛"
        y="火   (맛)"
    } else if (x==26){
        x1="심장 · 순환계" 
        y="火  (신체)"
    } else if (x==27){
        x1="심장" 
        y="火  (오장)"
    } else if (x==28){
        x1="소장" 
        y="火  (육부)"
    } else if (x==29){
        x1="2, 7" 
        y="火  (선천수)"
    } else if (x==30){
        x1="3, 4" 
        y="火  (후천수)"
    } else if (x==31){
        x1="ㄴ·ㄷ·ㄹ·ㅌ" 
        y="火  (발음)"
    } else if (x==32){
        x1="혓소리" 
        y="火  (오음)"
    } else if (x==33){
        x1="熱" 
        y="火  (오기)"
    } else if (x==34){
        x1="稼穡"
        y="土  (오성)"
    } else if (x==35){
        x1="경계시각"
        y="土  (하루)"
    } else if (x==36){
        x1="中央"
        y="土  (방위-중앙)"
    } else if (x==37){
        x1="중년기"  
        y="土  (인생)"
    } else if (x==38){
        x1="안정 · 평화"  
        y="土  (마음)"
    } else if (x==39){
        x1="공직" 
        y="土  (직업)"
    } else if (x==40){
        x1="信" 
        y="土  (오상)"
    } else if (x==41){
        x1="입" 
        y="土  (얼굴)"
    } else if (x==42){
        x1="단맛"
        y="土   (맛)"
    } else if (x==43){
        x1="피부 · 근육계" 
        y="土  (신체)"
    } else if (x==44){
        x1="비장" 
        y="土  (오장)"
    } else if (x==45){
        x1="위" 
        y="土  (육부)"
    } else if (x==46){
        x1="5, 10" 
        y="土  (선천수)"
    } else if (x==47){
        x1="5, 6" 
        y="土  (후천수)"
    } else if (x==48){
        x1="ㅇ·ㅎ" 
        y="土  (발음)"
    } else if (x==49){
        x1="목구멍소리" 
        y="土  (오음)"
    } else if (x==50){
        x1="濕" 
        y="土  (오기)"
    } else if (x==51){
        x1="從革"
        y="金  (오성)"
    } else if (x==52){
        x1="오후·저녁"
        y="金  (하루)"
    } else if (x==53){
        x1="白虎"
        y="金  (방위- 西)"
    } else if (x==54){
        x1="장년기"  
        y="金  (인생)"
    } else if (x==55){
        x1="순수·평화"  
        y="金  (마음)"
    } else if (x==56){
        x1="군·검찰·경찰" 
        y="金  (직업)"
    } else if (x==57){
        x1="義" 
        y="金 (오상)"
    } else if (x==58){
        x1="코" 
        y="金  (얼굴)"
    } else if (x==59){
        x1="매운맛"
        y="金   (맛)"
    } else if (x==60){
        x1="뼈 · 근골" 
        y="金  (신체)"
    } else if (x==61){
        x1="폐" 
        y="金  (오장)"
    } else if (x==62){
        x1="대장" 
        y="金  (육부)"
    } else if (x==63){
        x1="4, 9" 
        y="金  (선천수)"
    } else if (x==64){
        x1="7, 8" 
        y="金  (후천수)"
    } else if (x==65){
        x1="ㅅ·ㅈ·ㅊ" 
        y="金  (발음)"
    } else if (x==66){
        x1="잇소리" 
        y="金  (오음)"
    } else if (x==67){
        x1="燥" 
        y="金  (오기)"
    } else if (x==68){
        x1="潤下"
        y="水  (오성)"
    } else if (x==69){
        x1="한밤중"
        y="水  (하루)"
    } else if (x==70){
        x1="玄武"
        y="水  (방위-北)"
    } else if (x==71){
        x1="노년기"  
        y="水  (인생)"
    } else if (x==72){
        x1="포용력"  
        y="水  (마음)"
    } else if (x==73){
        x1="연구직" 
        y="水  (직업)"
    } else if (x==74){
        x1="智" 
        y="水  (오상)"
    } else if (x==75){
        x1="귀" 
        y="水  (얼굴)"
    } else if (x==76){
        x1="짠맛"
        y="水   (맛)"
    } else if (x==77){
        x1="혈액계" 
        y="水  (신체)"
    } else if (x==78){
        x1="신장" 
        y="水  (오장)"
    } else if (x==79){
        x1="방광" 
        y="水  (육부)"
    } else if (x==80){
        x1="1, 6" 
        y="水  (선천수)"
    } else if (x==81){
        x1="9, 10" 
        y="水  (후천수)"
    } else if (x==82){
        x1="ㅁ·ㅂ·ㅍ" 
        y="水  (발음)"
    } else if (x==83){
        x1="입술소리" 
        y="水  (오음)"
    } else if (x==84){
        x1="寒" 
        y="水  (오기)"
    }
    sam=x;
    document.getElementById("check").innerHTML = x1;
    document.getElementById("result").innerHTML = y;
}