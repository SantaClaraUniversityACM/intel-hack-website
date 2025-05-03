let intervalId = setInterval(updateCountdown, 1000);

const timer = document.querySelector("span.timer");
const header = document.querySelector("h2.timerHeader");

function updateCountdown() {
    const countdown = new Date("May 17, 2025 16:00:00Z").getTime() - new Date().getTime();
    if (countdown < 0) {
        const duration = new Date("May 18, 2025 03:00:00Z").getTime() - new Date().getTime();
        if (duration < 0) {
            timer.innerHTML = "Time's up!";
        }
        else {
            header.innerHTML = "Hackathon in session!";
            timer.innerHTML = generateTime(duration);
        }
    }
    else {
        timer.innerHTML = generateTime(countdown);
    }
}

function generateTime(ms) {
    let days = Math.floor(ms / (1000 * 60 * 60 * 24));
    let hrs = Math.floor(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let mins = Math.floor(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60));
    let secs = Math.floor(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000);
    console.log(ms, days, hrs, mins, secs);
    let text = "";
    if (days < 10)
        text += "0";
    text += days + ":";
    if (hrs < 10)
        text += "0";
    text += hrs + ":";
    if (mins < 10)
        text += "0";
    text += mins + ":";
    if (secs < 10)
        text += "0";
    text += secs;
    return text;
}