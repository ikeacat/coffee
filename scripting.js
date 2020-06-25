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

function switchStylesheets(to) {
    if(to == "night") {
        console.log("Switching to night!")
        document.getElementById("timeSpecificSheet").setAttribute("href", "nighttime.css")
        return "Success!"
    } else if(to == "day") {
        console.log("Switching to day!")
        document.getElementById("timeSpecificSheet").setAttribute("href", "daytime.css")
        return "Success!"
    } else {
        console.error("Specified Switch is not valid! (f)switchStylesheets(to:)");
    }
}