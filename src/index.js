const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

const timer = {
    intervalId: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }

        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            setBodyBgColor(deltaTime);
            
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
    }
};

timer.start();

refs.startBtn.addEventListener('click', () => {
    timer.start();
});

refs.stopBtn.addEventListener('click', () => {
    timer.stop();
});

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function setBodyBgColor() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length)];
};



