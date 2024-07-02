var texttoshow = "";
$(".btn").click(function(e){
    if(e.target.innerHTML == "="){
        texttoshow = eval(texttoshow);
        $("input").val(texttoshow);
    }
    else if(e.target.innerHTML == "AC"){
        texttoshow = "";
        $("input").val(texttoshow);
    }
    else if(e.target.innerHTML == "DEL"){
        texttoshow = texttoshow.slice(0, texttoshow.length - 1);
        $("input").val(texttoshow);
    }
    else{
        texttoshow = texttoshow + e.target.innerHTML;
        $("input").val(texttoshow);
    }
});