const draw = {

};

draw.path = (context, path, color="black") => {
    context.strokeStyle = color;
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(...path[0]);
    for(let i=1; i<path.length; i++) {
        context.lineTo(...path[i]);
    }
    context.stroke();
}