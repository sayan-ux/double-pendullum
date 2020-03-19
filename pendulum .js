let g = 3;
let pi = 3.1421;
let ar = 0;
//data of forst pendulum
let r1 = 350;
let a1 = pi / 2;
let m1 = 100;
let x1 = 0, y1 = 0;
let a1v = 0, a1a = 0;
//data of second pendulum
let r2 = 550;
let a2 = 0;
let m2 = 30;
let x2 = 0, y2 = 0;
let a2v = 0., a2a = 0;

let history
function setup() {
    createCanvas(1600, 1600);

}


function draw() {
    background(150);
    translate(800, 300);
    square (-2.5,-2.5,5);



    a1a = (-g * (2 * m1 + m2) * sin(a1) - m2 * g * sin(a1 - 2 * a2) - 2 * sin(a1 - a2) * m2 * (a2v * a2v * r2 + a1v * a1v * r1 * cos(a1 - a2))) / (r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));

    a2a = (2 * sin(a1 - a2) * (a1v * a1v * r1 * (m1 + m1) + g * (m1 + m2) * cos(a1) + a2v * a2v * r2 * m2 * cos(a1 - a2))) / (r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2)));

    stroke(80, 23, 43);
    strokeWeight(4);

    x1 = r1 * sin(a1);
    y1 = r1 * cos(a1);

    (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2))
    x2 = x1 + r2 * sin(a2);
    y2 = y1 + r2 * cos(a2);

    line(0, 0, x1, y1);
    line(x1, y1, x2, y2);
    circle(x1, y1, m1);
    circle(x2, y2, m2);

    a1v += a1a;
    a2v += a2a;
    a1 += a1v;
    a2 += a2v;
    ar = random(0.00001, 0.00005);
    if (a1v > 0) {
        a1v -= ar;
    }
    else if(a1v<0){
        a1v += ar;
    }
    if (a2v > 0) {
        a2v -= ar;
    }
    else if(a2v<0){
        a2v += ar;
    }



}