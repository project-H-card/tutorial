const canvas: HTMLCanvasElement = document.querySelector("#canvas") || document.createElement("canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.querySelector("#startBtn");

const main = async () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx?.fillStyle = "red";
    ctx?.fillRect(0, 0, canvas.width, canvas.height);

    if (canvas.requestFullscreen) {
        await canvas.requestFullscreen();
    }
}


startBtn?.addEventListener("click", () => {
    main();
})
