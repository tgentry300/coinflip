const coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random());
        return this.state;
    },
    toString: function () {
        if (this.state == 0) {
            return "H";
        } else {
            return "T";
        }
    },
    toHTML: function () {
        let pic = document.getElementById("pic");
        let img = document.createElement("img");
        let img2 = document.createElement("img");
        img.setAttribute("src", "heads.png")
        img2.setAttribute("src", "tails.png")
        if (this.toString() === "H") {
            pic.appendChild(img)
        } else if (this.toString() === "T") {
            pic.appendChild(img2)
        }
    }
};

function runTwentyTimes() {
    for (i = 1; i <= 20; i++) {
        let string = document.createElement("div")
        coin.flip();
        coin.toString()
        coin.toHTML()
        string.textContent = coin.toString()
        pic.appendChild(string)
    }
}
runTwentyTimes()