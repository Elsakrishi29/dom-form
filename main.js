function total(){
    let text1=parseInt(document.getElementById("text1").value);
    let text2=document.getElementById("text2").value;
    let a=parseInt(text2/100*text1);
    document.getElementById("text3").value=a;
    
    var total=text1+a;
    document.getElementById("text4").value=total;
    document.getElementById("output").innerText="your total amount:  "+total;
    }

