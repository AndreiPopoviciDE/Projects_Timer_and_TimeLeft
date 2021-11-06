let input = document.querySelector("#input"),
    btnStart = document.querySelector("#btnStart"),
    btnStop = document.querySelector("#btnStop"),
    timeover = document.querySelector("#timeover")
input.focus()
btnStart.onclick = start

function start() {
    let count = parseInt(input.value)
    if (isNaN(count)) return;
    timeover.textContent = ``
    btnStop.classList.remove("btn-disable")
    btnStart.classList.add("btn-disable")
    let id = setInterval(function () {
        timeover.textContent = `${count--}`
        if (count < 0) {
            timeover.textContent = `Time Is Over`
            input.value = ""
            clearInterval(id)
        }

    }, 1000);

    btnStop.onclick = end
    function end() {
        clearInterval(id)
        input.value = `${count--}`
        timeover.textContent = `Timer is stopped`
        btnStop.classList.add("btn-disable")
        btnStart.classList.remove("btn-disable")
    }
}







