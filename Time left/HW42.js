const input = document.querySelector("#input"),
    btnStart = document.querySelector("#btnStart"),
    day = document.querySelector("#days"),
    hour = document.querySelector("#hours"),
    minute = document.querySelector("#minutes"),
    second = document.querySelector("#seconds")

btnStart.onclick = () => {
    let id = setInterval(function () {
        let count = input.value
        let first = count.replaceAll('.', '-');
        count = first.split('-').reverse().join('-');
        const deadline = new Date(count)
        const daysLeft = (deadline - new Date())
        const days = Math.floor(daysLeft / (24 * 60 * 60 * 1000)),
            hours = Math.floor((daysLeft / (60 * 60 * 1000)) % 24),
            minutes = Math.floor((daysLeft / (60 * 1000)) % 60),
            seconds = Math.floor((daysLeft / 1000) % 60)
        console.log(days, hours, minutes, seconds);
        day.textContent = `${days}`
        hour.textContent = `${hours}`
        minute.textContent = `${minutes}`
        second.textContent = `${seconds}`

        if (count < 0) {
            timeover.textContent = `Time Is Over`
            input.value = ""
            clearInterval(id)
        }

    }, 1000);


}







