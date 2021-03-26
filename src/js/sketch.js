let p5;
let delegate;
let font;

export function main(_p5) {
    p5 = _p5

    p5.preload = () => {
        font = p5.loadFont('https://fonts.gstatic.com/ea/notosansjp/v5/NotoSansJP-Bold.otf');
    }

    p5.setup = () => {
        var canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL)
        canvas.parent("p5Canvas");
        p5.disableFriendlyErrors = true;
        p5.textFont(font);
        p5.textSize(96);
        p5.textAlign(p5.CENTER, p5.CENTER);
    };

    p5.draw = () => {
        p5.background(0);
        let time = p5.millis();
        p5.rotateX(time / 1000);
        p5.rotateZ(time / 1234);
        p5.text('p5.js', 0, 0);

        notifyCurrentTime();
    };

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    function notifyCurrentTime() {
        if (delegate !== undefined) {
            const message = p5.hour() + ":" + p5.minute() + ":" + p5.second();
            delegate(message);
        }
    }
}

export function setDelegate(_delegate) {
    delegate = _delegate;
}
