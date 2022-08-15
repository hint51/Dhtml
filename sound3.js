var dd1, dd2,dd3, dd4, dd5;
        function a1(){
               
            if (dd1==1){
                document.getElementById("a2").style.display="none"
                document.getElementById("a3").style.display="none"
                document.getElementById("a4").style.display="none"
                document.getElementById("a5").style.display="none"
                document.getElementById("a6").style.display="none"
                document.getElementById("a7").style.display="none"
                dd1=0
            } else {
                document.getElementById("a2").style.display="inline"
                document.getElementById("a3").style.display="inline"
                document.getElementById("a4").style.display="inline"
                document.getElementById("a5").style.display="inline"
                document.getElementById("a6").style.display="inline"
                document.getElementById("a7").style.display="inline"
                dd1=1
            }
            document.getElementById("a2").innerHTML="해";
            document.getElementById("a3").innerHTML="대";
            document.getElementById("a4").innerHTML="복";
            document.getElementById("a5").innerHTML="사";
            document.getElementById("a6").innerHTML="천";
            document.getElementById("a7").innerHTML="산";
            
        }
        function a8(){   
            if (dd2==1){
                document.getElementById("a9").style.display="none"
                document.getElementById("a10").style.display="none"
                document.getElementById("a11").style.display="none"
                document.getElementById("a12").style.display="none"
                document.getElementById("a13").style.display="none"
                document.getElementById("a14").style.display="none"
                dd2=0
            } else {
                document.getElementById("a9").style.display="inline"
                document.getElementById("a10").style.display="inline"
                document.getElementById("a11").style.display="inline"
                document.getElementById("a12").style.display="inline"
                document.getElementById("a13").style.display="inline"
                document.getElementById("a14").style.display="inline"
                dd2=1
            }
            document.getElementById("a9").innerHTML="간"
            document.getElementById("a10").innerHTML="노"
            document.getElementById("a11").innerHTML="사"
            document.getElementById("a12").innerHTML="천"
            document.getElementById("a13").innerHTML="산"
            document.getElementById("a14").innerHTML="옥"
        }
        function a15(){   
            if (dd3==1){
                document.getElementById("a16").style.display="none"
                document.getElementById("a17").style.display="none"
                document.getElementById("a18").style.display="none"
                document.getElementById("a19").style.display="none"
                document.getElementById("a20").style.display="none"
                document.getElementById("a21").style.display="none"
                dd3=0
            } else {
                document.getElementById("a16").style.display="inline"
                document.getElementById("a17").style.display="inline"
                document.getElementById("a18").style.display="inline"
                document.getElementById("a19").style.display="inline"
                document.getElementById("a20").style.display="inline"
                document.getElementById("a21").style.display="inline"
                dd3=1
            }
            document.getElementById("a16").innerHTML="벽"
            document.getElementById("a17").innerHTML="성"
            document.getElementById("a18").innerHTML="대"
            document.getElementById("a19").innerHTML="천"
            document.getElementById("a20").innerHTML="대"
            document.getElementById("a21").innerHTML="평"
        }
        function a22(){   
            if (dd4==1){
                document.getElementById("a23").style.display="none"
                document.getElementById("a24").style.display="none"
                document.getElementById("a25").style.display="none"
                document.getElementById("a26").style.display="none"
                document.getElementById("a27").style.display="none"
                document.getElementById("a28").style.display="none"
                dd4=0
            } else {
                document.getElementById("a23").style.display="inline"
                document.getElementById("a24").style.display="inline"
                document.getElementById("a25").style.display="inline"
                document.getElementById("a26").style.display="inline"
                document.getElementById("a27").style.display="inline"
                document.getElementById("a28").style.display="inline"
                dd4=1
            }
            document.getElementById("a23").innerHTML="벽"
            document.getElementById("a24").innerHTML="송"
            document.getElementById("a25").innerHTML="백"
            document.getElementById("a26").innerHTML="노"
            document.getElementById("a27").innerHTML="석"
            document.getElementById("a28").innerHTML="채"
        }
        function a29(){   
            if (dd5==1){
                document.getElementById("a30").style.display="none"
                document.getElementById("a31").style.display="none"
                document.getElementById("a32").style.display="none"
                document.getElementById("a33").style.display="none"
                document.getElementById("a34").style.display="none"
                document.getElementById("a35").style.display="none"
                dd5=0
            } else {
                document.getElementById("a30").style.display="inline"
                document.getElementById("a31").style.display="inline"
                document.getElementById("a32").style.display="inline"
                document.getElementById("a33").style.display="inline"
                document.getElementById("a34").style.display="inline"
                document.getElementById("a35").style.display="inline"
                dd5=1
            }
            document.getElementById("a30").innerHTML="상"
            document.getElementById("a31").innerHTML="금"
            document.getElementById("a32").innerHTML="장"
            document.getElementById("a33").innerHTML="양"
            document.getElementById("a34").innerHTML="검"
            document.getElementById("a35").innerHTML="대"
        }
        function a2(){   
            if (document.getElementById("a2").innerText=="해"){
                document.getElementById("a2").innerHTML="해중금"
                document.getElementById("a2").style.background="lightblue"
            } else if (document.getElementById("a2").innerText=="해중금"){
                document.getElementById("a2").innerHTML="갑자을축"
                document.getElementById("a2").style.background="yellow"
            } else {
                document.getElementById("a2").innerHTML="해"
                document.getElementById("a2").style.background="whitesmoke"
            }
        }
        function a3(){   
            if (document.getElementById("a3").innerText=="대"){
                document.getElementById("a3").innerHTML="대계수"
                document.getElementById("a3").style.background="lightblue"
            } else if (document.getElementById("a3").innerText=="대계수"){
                document.getElementById("a3").innerHTML="갑인을묘"
                document.getElementById("a3").style.background="yellow"    
            } else {
                document.getElementById("a3").innerHTML="대"
                document.getElementById("a3").style.background="whitesmoke"
            }
        }
        function a4(){   
            if (document.getElementById("a4").innerText=="복"){
                document.getElementById("a4").innerHTML="복등화"
                document.getElementById("a4").style.background="lightblue"
            } else if (document.getElementById("a4").innerText=="복등화"){
                document.getElementById("a4").innerHTML="갑진을사"
                document.getElementById("a4").style.background="yellow"
            } else {
                document.getElementById("a4").innerHTML="복"
                document.getElementById("a4").style.background="whitesmoke"
            }
        }
        function a5(){   
            if (document.getElementById("a5").innerText=="사"){
                document.getElementById("a5").innerHTML="사중금"
                document.getElementById("a5").style.background="lightblue"
            } else if (document.getElementById("a5").innerText=="사중금"){
                document.getElementById("a5").innerHTML="갑오을미"
                document.getElementById("a5").style.background="yellow"
            } else {
                document.getElementById("a5").innerHTML="사"
                document.getElementById("a5").style.background="whitesmoke"
            }
        }


        function a6(){   
            if (document.getElementById("a6").innerText=="천"){
                document.getElementById("a6").innerHTML="천중수"
                document.getElementById("a6").style.background="lightblue"
            } else if (document.getElementById("a6").innerText=="천중수"){
                document.getElementById("a6").innerHTML="갑신을유"
                document.getElementById("a6").style.background="yellow"
            } else {
                document.getElementById("a6").innerHTML="천"
                document.getElementById("a6").style.background="whitesmoke"
            }
        }
        function a7(){   
            if (document.getElementById("a7").innerText=="산"){
                document.getElementById("a7").innerHTML="산두화"
                document.getElementById("a7").style.background="lightblue"
            } else if (document.getElementById("a7").innerText=="산두화"){
                document.getElementById("a7").innerHTML="갑술을해"
                document.getElementById("a7").style.background="yellow"
            } else {
                document.getElementById("a7").innerHTML="산"
                document.getElementById("a7").style.background="whitesmoke"
            }
        }
        
        function a9(){   
            if (document.getElementById("a9").innerText=="간"){
                document.getElementById("a9").innerHTML="간하수"
                document.getElementById("a9").style.background="lightblue"
            } else if (document.getElementById("a9").innerText=="간하수"){
                document.getElementById("a9").innerHTML="병자정축"
                document.getElementById("a9").style.background="yellow"
            } else {
                document.getElementById("a9").innerHTML="간"
                document.getElementById("a9").style.background="whitesmoke"
            }
        }
        function a10(){   
            if (document.getElementById("a10").innerText=="노"){
                document.getElementById("a10").innerHTML="노중화"
                document.getElementById("a10").style.background="lightblue"
            } else if (document.getElementById("a10").innerText=="노중화"){
                document.getElementById("a10").innerHTML="병인정묘"
                document.getElementById("a10").style.background="yellow"
            } else {
                document.getElementById("a10").innerHTML="노"
                document.getElementById("a10").style.background="whitesmoke"
            }
        }
        function a11(){   
            if (document.getElementById("a11").innerText=="사"){
                document.getElementById("a11").innerHTML="사중토"
                document.getElementById("a11").style.background="lightblue"
            } else if (document.getElementById("a11").innerText=="사중토"){
                document.getElementById("a11").innerHTML="병진정사"
                document.getElementById("a11").style.background="yellow"
            } else {
                document.getElementById("a11").innerHTML="사"
                document.getElementById("a11").style.background="whitesmoke"
            }
        }
        function a12(){   
            if (document.getElementById("a12").innerText=="천"){
                document.getElementById("a12").innerHTML="천하수"
                document.getElementById("a12").style.background="lightblue"
            } else if (document.getElementById("a12").innerText=="천하수"){
                document.getElementById("a12").innerHTML="병오정미"
                document.getElementById("a12").style.background="yellow"
            } else {
                document.getElementById("a12").innerHTML="천"
                document.getElementById("a12").style.background="whitesmoke"
            }
        }
        function a13(){   
            if (document.getElementById("a13").innerText=="산"){
                document.getElementById("a13").innerHTML="산하화"
                document.getElementById("a13").style.background="lightblue"
            } else if (document.getElementById("a13").innerText=="산하화"){
                document.getElementById("a13").innerHTML="병신정유"
                document.getElementById("a13").style.background="yellow"
            } else {
                document.getElementById("a13").innerHTML="산"
                document.getElementById("a13").style.background="whitesmoke"
            }
        }
        function a14(){   
            if (document.getElementById("a14").innerText=="옥"){
                document.getElementById("a14").innerHTML="옥상토"
                document.getElementById("a14").style.background="lightblue"
            } else if (document.getElementById("a14").innerText=="옥상토"){
                document.getElementById("a14").innerHTML="병술정해"
                document.getElementById("a14").style.background="yellow"
            } else {
                document.getElementById("a14").innerHTML="옥"
                document.getElementById("a14").style.background="whitesmoke"
            }
        }
        
        function a16(){   
            if (document.getElementById("a16").innerText=="벽"){
                document.getElementById("a16").innerHTML="벽력화"
                document.getElementById("a16").style.background="lightblue"
            } else if (document.getElementById("a16").innerText=="벽력화"){
                document.getElementById("a16").innerHTML="무자기축"
                document.getElementById("a16").style.background="yellow"} 
            else {
                document.getElementById("a16").innerHTML="벽"
                document.getElementById("a16").style.background="whitesmoke"
            }
        }
        function a17(){   
            if (document.getElementById("a17").innerText=="성"){
                document.getElementById("a17").innerHTML="성두토"
                document.getElementById("a17").style.background="lightblue"
            } else if (document.getElementById("a17").innerText=="성두토"){
                document.getElementById("a17").innerHTML="무인기묘"
                document.getElementById("a17").style.background="yellow"
            } else {
                document.getElementById("a17").innerHTML="성"
                document.getElementById("a17").style.background="whitesmoke"
            }
        }
        function a18(){   
            if (document.getElementById("a18").innerText=="대"){
                document.getElementById("a18").innerHTML="대림목"
                document.getElementById("a18").style.background="lightblue"
            } else if (document.getElementById("a18").innerText=="대림목"){
                document.getElementById("a18").innerHTML="무진기사"
                document.getElementById("a18").style.background="yellow"
            } else {
                document.getElementById("a18").innerHTML="대"
                document.getElementById("a18").style.background="whitesmoke"
            }
        }
        function a19(){   
            if (document.getElementById("a19").innerText=="천"){
                document.getElementById("a19").innerHTML="천상화"
                document.getElementById("a19").style.background="lightblue"
            } else if (document.getElementById("a19").innerText=="천상화"){
                document.getElementById("a19").innerHTML="무오기미"
                document.getElementById("a19").style.background="yellow"
            } else {
                document.getElementById("a19").innerHTML="천"
                document.getElementById("a19").style.background="whitesmoke"
            }
        }

        function a20(){   
            if (document.getElementById("a20").innerText=="대"){
                document.getElementById("a20").innerHTML="대역토"
                document.getElementById("a20").style.background="lightblue"
            } else if (document.getElementById("a20").innerText=="대역토"){
                document.getElementById("a20").innerHTML="무신기유"
                document.getElementById("a20").style.background="yellow"
            } else {
                document.getElementById("a20").innerHTML="대"
                document.getElementById("a20").style.background="whitesmoke"
            }
        }
        function a21(){   
            if (document.getElementById("a21").innerText=="평"){
                document.getElementById("a21").innerHTML="평지목"
                document.getElementById("a21").style.background="lightblue"
            } else if (document.getElementById("a21").innerText=="평지목"){
                document.getElementById("a21").innerHTML="무술기해"
                document.getElementById("a21").style.background="yellow"
            } else {
                document.getElementById("a21").innerHTML="평"
                document.getElementById("a21").style.background="whitesmoke"
            }
        }
        
        function a23(){   
            if (document.getElementById("a23").innerText=="벽"){
                document.getElementById("a23").innerHTML="벽상토"
                document.getElementById("a23").style.background="lightblue"
            } else if (document.getElementById("a23").innerText=="벽상토"){
                document.getElementById("a23").innerHTML="경자신축"
                document.getElementById("a23").style.background="yellow"
            } else {
                document.getElementById("a23").innerHTML="벽"
                document.getElementById("a23").style.background="whitesmoke"
            }
        }
        function a24(){   
            if (document.getElementById("a24").innerText=="송"){
                document.getElementById("a24").innerHTML="송백목"
                document.getElementById("a24").style.background="lightblue"
            } else if (document.getElementById("a24").innerText=="송백목"){
                document.getElementById("a24").innerHTML="경인신묘"
                document.getElementById("a24").style.background="yellow"
            } else {
                document.getElementById("a24").innerHTML="송"
                document.getElementById("a24").style.background="whitesmoke"
            }
        }
        function a25(){   
            if (document.getElementById("a25").innerText=="백"){
                document.getElementById("a25").innerHTML="백납금"
                document.getElementById("a25").style.background="lightblue"
            } else if (document.getElementById("a25").innerText=="백납금"){
                document.getElementById("a25").innerHTML="경진신사"
                document.getElementById("a25").style.background="yellow"
            } else {
                document.getElementById("a25").innerHTML="백"
                document.getElementById("a25").style.background="whitesmoke"
            }
        }
        function a26(){   
            if (document.getElementById("a26").innerText=="노"){
                document.getElementById("a26").innerHTML="노방토"
                document.getElementById("a26").style.background="lightblue"
            } else if (document.getElementById("a26").innerText=="노방토"){
                document.getElementById("a26").innerHTML="경오신미"
                document.getElementById("a26").style.background="yellow"
            } else {
                document.getElementById("a26").innerHTML="노"
                document.getElementById("a26").style.background="whitesmoke"
            }
        }
        function a27(){   
            if (document.getElementById("a27").innerText=="석"){
                document.getElementById("a27").innerHTML="석류목"
                document.getElementById("a27").style.background="lightblue"
            } else if (document.getElementById("a27").innerText=="석류목"){
                document.getElementById("a27").innerHTML="경신신유"
                document.getElementById("a27").style.background="yellow"
            } else {
                document.getElementById("a27").innerHTML="석"
                document.getElementById("a27").style.background="whitesmoke"
            }
        }
        function a28(){   
            if (document.getElementById("a28").innerText=="채"){
                document.getElementById("a28").innerHTML="채천금"
                document.getElementById("a28").style.background="lightblue"
            } else if (document.getElementById("a28").innerText=="채천금"){
                document.getElementById("a28").innerHTML="경술신해"
                document.getElementById("a28").style.background="yellow"
            } else {
                document.getElementById("a28").innerHTML="채"
                document.getElementById("a28").style.background="whitesmoke"
            }
        }
        function a30(){   
            if (document.getElementById("a30").innerText=="상"){
                document.getElementById("a30").innerHTML="상자목"
                document.getElementById("a30").style.background="lightblue"
            } else if (document.getElementById("a30").innerText=="상자목"){
                document.getElementById("a30").innerHTML="임자계축"
                document.getElementById("a30").style.background="yellow"
            } else {
                document.getElementById("a30").innerHTML="상"
                document.getElementById("a30").style.background="whitesmoke"
            }
        }
        function a31(){   
            if (document.getElementById("a31").innerText=="금"){
                document.getElementById("a31").innerHTML="금박금"
                document.getElementById("a31").style.background="lightblue"
            } else if (document.getElementById("a31").innerText=="금박금"){
                document.getElementById("a31").innerHTML="임인계묘"
                document.getElementById("a31").style.background="yellow"
            } else {
                document.getElementById("a31").innerHTML="금"
                document.getElementById("a31").style.background="whitesmoke"
            }
        }
        function a32(){   
            if (document.getElementById("a32").innerText=="장"){
                document.getElementById("a32").innerHTML="장류수"
                document.getElementById("a32").style.background="lightblue"
            } else if (document.getElementById("a32").innerText=="장류수"){
                document.getElementById("a32").innerHTML="임진계사"
                document.getElementById("a32").style.background="yellow"
            } else {
                document.getElementById("a32").innerHTML="장"
                document.getElementById("a32").style.background="whitesmoke"
            }
        }
        function a33(){   
            if (document.getElementById("a33").innerText=="양"){
                document.getElementById("a33").innerHTML="양류목"
                document.getElementById("a33").style.background="lightblue"
            } else if (document.getElementById("a33").innerText=="양류목"){
                document.getElementById("a33").innerHTML="임오계미"
                document.getElementById("a33").style.background="yellow"
            } else {
                document.getElementById("a33").innerHTML="양"
                document.getElementById("a33").style.background="whitesmoke"
            }
        }
        function a34(){   
            if (document.getElementById("a34").innerText=="검"){
                document.getElementById("a34").innerHTML="검봉금"
                document.getElementById("a34").style.background="lightblue"
            } else if (document.getElementById("a34").innerText=="검봉금"){
                document.getElementById("a34").innerHTML="임신계유"
                document.getElementById("a34").style.background="yellow"
            } else {
                document.getElementById("a34").innerHTML="검"
                document.getElementById("a34").style.background="whitesmoke"
            }
        }
        function a35(){   
            if (document.getElementById("a35").innerText=="대"){
                document.getElementById("a35").innerHTML="대해수"
                document.getElementById("a35").style.background="lightblue"
            } else if (document.getElementById("a35").innerText=="대해수"){
                document.getElementById("a35").innerHTML="인술계해"
                document.getElementById("a35").style.background="yellow"
            } else {
                document.getElementById("a35").innerHTML="대"
                document.getElementById("a35").style.background="whitesmoke"
            }
        }