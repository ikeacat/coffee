function sleepms(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function sleeptest(ms) {
    await sleepms(ms);
    console.log("Test done.")
}

async function startGame() {
    switchStylesheets("day");
    await sleepms(1000);
    opacityeffect(document.getElementById('rootdiv'), 1, "down");
    document.getElementById('')
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

async function opacityeffect(node, slow, way) {
    var i;
    var e;
    for(i = 0; i < 101; i++) {
        if(way == "down") {
            e = 100 - i;
        } else if(way == "up") {
            e = i;
        }
        e = e.toString();
        node.setAttribute('style', 'opacity:' + e + '%;')
        await sleepms(slow)
    }
    return;
}