function check(){
    var c=0;
    var q1=document.quiz.qu1.value;
    var q2=document.quiz.qu2.value;
    var q3=document.quiz.qu3.value;
    var q4=document.quiz.qu4.value;
    var q5=document.quiz.qu5.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');


    if(q1=="JAVASCRIPT"){c++}
    if(q1=="CHINA"){c++}
    if(q1=="BEIJING"){c++}
    if(q1=="IIT KHARAGPUR"){c++}
    if(q1=="4"){c++}

    quiz.style.display="none";
    
    if(c<=3)
    {
       
        document.write("Your Result is "+c+". Not so good, needs imorovement.");

    }
    else{
        document.write("Your Result is "+c+".  Awesome, Keep it Up.");
       
    }




}