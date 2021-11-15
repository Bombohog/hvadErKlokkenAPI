let timer = document.getElementById('timer');

function tidTaeller() {
    let time = new Date();
    timer.innerHTML = time.toLocaleTimeString();
    setTimeout("tidTaeller()", 1000);
}

tidTaeller();