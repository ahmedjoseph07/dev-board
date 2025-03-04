function getColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let color = `rgb(${red},${green},${blue})`
    return color;
}

function formatTime() {
    let activityDate = new Date()

    let h = activityDate.getHours()
    let m = activityDate.getMinutes()
    let s = activityDate.getSeconds()

    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    let amOrpm = h >= 12 ? 'PM' : 'AM';

    h = h % 12
    h = h ? h : 12

    let formattedTime = `${h}:${m}:${s} ${amOrpm}`
    return formattedTime;
}

let themeBtn = document.getElementById("theme-btn").addEventListener('click', function () {
    newBg = getColor()
    document.querySelector("body").style.backgroundColor = newBg;
})

let currDate = new Date()
document.getElementById("hero-right-date").textContent = currDate.toDateString()

let clearBtn = document.getElementById("clear-btn")
clearBtn.addEventListener("click", function () {
    let history = document.querySelector(".history")

    if (history) {
        history.innerHTML = ``;
    }
})

let compBtn = document.querySelectorAll(".comp-btn")

for (btn of compBtn) {
    btn.addEventListener('click', function (event) {
        let taskNumber = document.getElementById('hero-left-number')
        let totalTask = document.getElementById("check-box-number")
        convertedTaskNumber = parseInt(taskNumber.innerText)
        convertedTotalTask = parseInt(totalTask.innerText)
        convertedTaskNumber = convertedTaskNumber - 1;
        convertedTotalTask = convertedTotalTask + 1;
        document.getElementById("check-box-number").innerText = convertedTotalTask
        document.getElementById("hero-left-number").innerText = convertedTaskNumber
        event.target.style.backgroundColor = "white"
        event.target.style.color = "black"
        event.target.disabled = true
        let currentTime = formatTime()
        let taskTitle = event.target.closest('.card').querySelector('.card-heading').innerText;
        let activity = document.createElement('p')
        activity.classList.add("history-para")
        let newPara = activity.innerText = `You completed the task "${taskTitle}" at ${currentTime}`
        let history = document.getElementById("history")
        history.appendChild(activity)
        alert("Board updated succesfully")
        if(taskNumber.innerText == 0){
            alert("Congrats, You have completed all the tasks")
        }
    })
}
