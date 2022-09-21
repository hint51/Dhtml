var sam;

function result(){
    
    document.getElementById("result").style.display="inline";
       
    /*document.getElementById("eight").style.visibility="visible"*/
}
function result1(){
     document.getElementById("result1").style.display="inline"; 
     /*document.getElementById("eight").style.visibility="visible"*/
}
function result2(){
    document.getElementById("result2").style.display="inline";
    /*document.getElementById("eight").style.visibility="visible"*/
}
function result3(){
    document.getElementById("result3").style.display="inline";
    /*document.getElementById("eight").style.visibility="visible"*/
}
function result4(){
    document.getElementById("result4").style.display="inline";
    /*document.getElementById("eight").style.visibility="visible"*/
}
function test() {
    document.getElementById("eight").style.visibility="hidden"
    document.getElementById("result").style.display="none";
    document.getElementById("result1").style.display="none";
    document.getElementById("result2").style.display="none";
    document.getElementById("result3").style.display="none";
    document.getElementById("result4").style.display="none";
    
    var x =  Math.floor(Math.random() * 64); // 0 ~ 63
    var x1, y,y1,y2,y3,y4,y5
    if (x==sam) {
       if(x==0){
           x=x+1;
       } else {
          x=x-1;
       } 
    } 
    if (x==0) {
        x1="1.乾天"
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)"
        y4="건삼련"
        y5="午+"
        document.getElementById("eight").src ="\건.png"
    } else if (x==1){
        x1="2.兌澤"
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-)"
        y4="태상절"
        y5="巳"
        document.getElementById("eight").src ="\태.png"
    } else if (x==2){
        x1="3.離火"
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-)"
        y4="이허중"
        y4="亥-"
        document.getElementById("eight").src ="\리.png"
    } else if (x==3){
        x1="4.震雷"  
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==4){
        x1="5.巽風"  
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(卯-) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==5){
        x1="6.坎水" 
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==6){
        x1="7.艮山" 
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==7){
        x1="8.坤地" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    } else if (x==8){
        x1="父"
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)  <->  午+"
        y4="건삼련"
        document.getElementById("eight").src ="\건.png"
    } else if (x==9){
        x1="少女" 
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-) <-> 巳"
        y4="태상절"
        document.getElementById("eight").src ="\태.png"
    } else if (x==10){
        x1="中女" 
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-) <-> 亥-"
        y4="이허중"
        document.getElementById("eight").src ="\리.png"
    } else if (x==11){
        x1="長男" 
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==12){
        x1="長女" 
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(卯-) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==13){
        x1="中男" 
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==14){
        x1="少男" 
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==15){
        x1="母" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    } else if (x==16){
        x1="서북" 
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)  <->  午+"
        y4="건삼련"
        document.getElementById("eight").src ="\건.png"
    } else if (x==17){
        x1="서"
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-) <-> 巳"
        y4="태상절"
        document.getElementById("eight").src ="\태.png"
    } else if (x==18){
        x1="남"
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-) <-> 亥-"
        y4="이허중"
        document.getElementById("eight").src ="\리.png"
    } else if (x==19){
        x1="동"
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==20){
        x1="동남"  
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(卯-) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==21){
        x1="북"  
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==22){
        x1="동북" 
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==23){
        x1="서남" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    } else if (x==24){
        x1="戌乾亥" 
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)  <->  午+"
        y4="건삼련"
        document.getElementById("eight").src ="\건.png"
    } else if (x==25){
        x1="庚酉辛"
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-) <-> 巳"
        y4="태상절"
        document.getElementById("eight").src ="\태.png"
    } else if (x==26){
        x1="丙午丁" 
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-) <-> 亥-"
        y4="이허중"
        document.getElementById("eight").src ="\리.png"
    } else if (x==27){
        x1="甲卯乙" 
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==28){
        x1="辰巽巳" 
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(卯-) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==29){
        x1="壬子癸" 
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==30){
        x1="丑艮寅" 
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==31){
        x1="未坤申" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    } else if (x==32){
        x1="金+" 
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)  <->  午+"
        y4="건삼련"
        document.getElementById("eight").src ="\건.png"
    } else if (x==33){
        x1="金-" 
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-) <-> 巳"
        y4="태상절"
        document.getElementById("eight").src ="\태.png"
    } else if (x==34){
        x1="火"
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-) <-> 亥-"
        y4="이허중"
        document.getElementById("eight").src ="\리.png"
    } else if (x==35){
        x1="木+"
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==36){
        x1="木-"
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(卯-) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==37){
        x1="水"  
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==38){
        x1="土+"  
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==39){
        x1="土-" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    } else if (x==40){
        x1="오행 申" 
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)  <->  午+"
        y4="건삼련"
        document.getElementById("eight").src ="\건.png"
    } else if (x==41){
        x1="오행 酉" 
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-) <-> 巳"
        y4="태상절"
        document.getElementById("eight").src ="\태.png"
    } else if (x==42){
        x1="오행 巳"
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-) <-> 亥-"
        y4="이허중"
        document.getElementById("eight").src ="\리.png"
    } else if (x==43){
        x1="오행 寅" 
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==44){
        x1="오행 卯" 
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(卯-) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==45){
        x1="오행 子" 
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==46){
        x1="오행 辰戌" 
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==47){
        x1="오행 丑未" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    } else if (x==48){
        x1="1층 午" 
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)  <->  午+"
        y4="건삼련"
        document.getElementById("eight").src ="\건.png"
    } else if (x==49){
        x1="1층 巳" 
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-) <-> 巳-"
        y4="태상절"
        document.getElementById("eight").src ="\태.png"
    } else if (x==50){
        x1="1층 亥"
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-) <-> 亥-"
        y4="이허중"
        document.getElementById("eight").src ="\리.png"
    } else if (x==51){
        x1="1층 申" 
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==52){
        x1="1층 酉" 
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(-卯) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==53){
        x1="1층 辰戌" 
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==54){
        x1="1층 寅" 
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==55){
        x1="1층 卯" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    }else if (x==56){
        x1="건삼련" 
        y="1.乾天(하늘)"
        y1= "父"
        y2="서북 戌乾亥"
        y3="金+(申+)  <->  午+"
        y4="건삼련"
        document.getElementById("eight").src ="\건.png"
    } else if (x==57){
        x1="태상절" 
        y="2.兌澤(연못)"
        y1= "少女"
        y2="서 庚酉辛"
        y3="金-(酉-) <-> 巳"
        y4="태상절"
        document.getElementById("eight").src ="\태.png"
    } else if (x==58){
        x1="이허중"
        y="3.離火 (불)"
        y1= "中女"
        y2="남 丙午丁"
        y3="火(巳-) <-> 亥-"
        y4="이허중"
        document.getElementById("eight").src ="\리.png"
    } else if (x==59){
        x1="진하련" 
        y="4.震雷 (우레)"
        y1= "長男"
        y2="동 甲卯乙"
        y3="木+(寅+) <-> 申+"
        y4="진하련"
        document.getElementById("eight").src ="\진.png"
    } else if (x==60){
        x1="손하절" 
        y="5.巽風  (바람)"
        y1= "長女"
        y2="동남 辰巽巳"
        y3="木-(-卯) <-> 酉-"
        y4="손하절"
        document.getElementById("eight").src ="\손.png"
    } else if (x==61){
        x1="감중연" 
        y="6.坎水 (물)"
        y1= "中男"
        y2="북 壬子癸"
        y3="水(子+) <-> 辰戌+"
        y4="감중연"
        document.getElementById("eight").src ="\감.png"
    } else if (x==62){
        x1="간상연" 
        y="7.艮山 (산)"
        y1= "少男"
        y2="동북 丑艮寅"
        y3="土+(辰戌+) <-> 寅+"
        y4="간상연"
        document.getElementById("eight").src ="\간.png"
    } else if (x==63){
        x1="곤삼절" 
        y="8.坤地 (땅)"
        y1= "母"
        y2="서남 未坤申"
        y3="土-(丑未-) <-> 卯-"
        y4="곤삼절"
        document.getElementById("eight").src ="\곤.png"
    }
    sam=x;
    document.getElementById("check").innerHTML = x1;
    document.getElementById("result").innerHTML = y;
    document.getElementById("result1").innerHTML = y1;
    document.getElementById("result2").innerHTML = y2;
    document.getElementById("result3").innerHTML = y3;
    document.getElementById("result4").innerHTML = y4;
    
}