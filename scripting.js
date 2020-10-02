var version = "1.0"

function sleepms(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function sleeptest(ms) {
    await sleepms(ms);
    console.log("Test done.")
}

function bodyLoad() {
    document.getElementById("versnum").innerHTML = "v" + version;
}

async function startGame() {
    switchStylesheets("day");
    await sleepms(1000);
    await opacityIO(document.getElementById('rootdiv'), 1, "out")
    await sleepms(150);
    document.getElementById("rootdiv").innerHTML = "";
    document.getElementById("rootdiv").classList.add("completecenter");
    document.getElementById("rootdiv").innerHTML = "<p>test</p>"
    await opacityIO(document.getElementById('rootdiv'), 1, "in");
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

async function opacityIO(node, milliseconds, fadetype) {
    if(node == null) {
        console.error("No node specified to run function on.")
        return;
    }
    if(milliseconds == null) {
        milliseconds = 20
        console.warn("No time specified. Defaulting to 20ms.")
    }

    var i;
    for(i = 0; i != 101; i++) {
        var b;
        if(fadetype == "out") {
            b = 100 - i
        } else if(fadetype == "in") {
            b = i
        } else {
            console.error("No Fadetype defined or its defined wrong. Use 'out' or 'in'.")
        }

        node.setAttribute("style", "opacity:" + b.toString() + "%;");
        await sleepms(milliseconds)
    }
}