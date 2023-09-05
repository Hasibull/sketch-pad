class SketchPad {
    constructor(container, size = 400) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style = `
            background-color: white;
            box-shadow: 0px 0px 20px 2px white;
        `;
        container.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        this.path = [];
        this.isDrawing = false;
        this.#addEventListeners();
    }

    #addEventListeners() {
        this.canvas.onmousedown = (event) => {
            const mouse = this.#getMouse(event);
            this.path = [mouse];
            this.isDrawing = true;
        }

        this.canvas.onmousemove = (event) => {
            if(this.isDrawing) {
                const mouse = this.#getMouse(event);
                this.path.push(mouse);
                this.#startDraw();
            }
        }

        this.canvas.onmouseup = () => {
            this.isDrawing = false;
        }
    }

    #startDraw() {
        this.context.clearRect(0, 0,
            this.canvas.width, this.canvas.height);
        
        draw.path(this.context, this.path);
    }

    #getMouse = (event) => {
        const rectangle = this.canvas.getBoundingClientRect();
        return [
            Math.round(event.clientX - rectangle.left),
            Math.round(event.clientY - rectangle.top)
        ];
    }
}