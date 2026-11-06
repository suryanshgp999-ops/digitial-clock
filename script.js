
function showTime() {
    let time = new Date().toLocaleTimeString();
    document.getElementById("time").innerText = time;
}

setInterval(showTime, 1000);
showTime();
