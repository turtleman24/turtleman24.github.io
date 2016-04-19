var playing = null;
function countdown() {
    var t = document.getElementById("startbutton");
    var num = parseInt(t.textContent);
    num--;
    if (num > 0) {
        t.textContent = num;
    }   else {
        clearInterval(playing);
        playing = null;
        var go = document.getElementById("gameover");
        go.style.visibility = 'visible';
        go.onclick = function() {go.style.visibility = 'hidden';}
        t.textContent = "play again";
    }
}
function addbutton() {
    var field = document.getElementById("field");
    var rect = field.getBoundingClientRect();
    var btn = document.createElement("img");
    field.appendChild(btn);
    btn.src = "pika.jpg";
    btn.style.position = 'absolute';
    var y = parseInt(Math.random()*(rect.height-40), 10)+"px";
    var x = parseInt(Math.random()*(rect.width-80), 10)+"px";
    btn.style.top = y;
    btn.style.left = x;
    btn.onclick = function() {
        var score = document.getElementById("score");
        score.textContent = parseInt(score.textContent)+1;
        field.removeChild(btn);
    }
    setTimeout(function() {for (var x=0; x < field.children.length; x++) { if (field.children[x] == btn) field.removeChild(btn);}},
        (Math.random()*200)*5+650);
    addButtonafter();
}

function addButtonafter() {
    if (playing) {
        setTimeout(addbutton, (Math.random()*200)*3+500);
    }
}
function startfn() {
    playing = true;
    var score = document.getElementById("score");
    score.textContent = 0;
    var t = document.getElementById("startbutton");
    t.textContent = 60;
    playing = window.setInterval(countdown, 1000);
    addButtonafter();
}
