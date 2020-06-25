function sleepms(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function sleeptest(ms) {
    await sleepms(ms);
    console.log("Test done.")
}

function startGame() {
    switchDayStyles("night", document.getElementById("rootbody"));
}

function switchDayStyles(x, y) { // Must have daytime / nighttime declarations.
    if(x == "day") {
        y.classList.replace('nighttime', 'daytime');
        return true
    } else if(x == "night") {
        y.classList.replace('daytime', 'nighttime');
        return true
    } else {
        return false
    }
}