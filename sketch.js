var colorList1 = ['Crimson', 'Tomato', 'Darkred', 'Lightcoral']; //var libreria colori 1
var colorList2 = ['PaleVioletRed', 'Tomato', 'MediumVioletRed', 'HotPink']; //var libreria colori 2
var colorList3 = ['DeepPink', 'HotPink', 'PaleVioletRed', 'OrangeRed']; //var libreria colori 3
var colorList4 = ['LightSkyBlue', 'SteelBlue', 'LightCyan', 'Aquamarine']; //var libreria colori 4
var colorList5 = ['Magenta', 'Plum', 'DarkSlateBlue', 'Orchid']; //var libreria colori 5
var colorList6 = ['MediumSlateBlue', 'RoyalBlue', 'Navy', 'DodgerBlue']; //var libreria colori 6
var colorList7 = ['DarkOliveGreen', 'YellowGreen', 'PaleGreen', 'SeaGreen']; //var libreria colori 7
var colorList8 = ['DarkOrange', 'OrangeRed', 'LightSalmon', 'Gold']; //var libreria colori 8
var colorList9 = ['#212121', '#263238', 'black', '#f5f5f5']; //var libreria colori 9


function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(10);
}

function draw() {
  var a = windowWidth / 16;
  var b = windowHeight / 16;

  translate(-a, -b); //transl.rect

  for (var x = a; x < windowWidth + a; x += a) { //ciclo for
    for (var y = b; y < windowHeight + b; y += b) {
      var index1 = floor(random() * colorList1.length);
      var colorHex1 = colorList1[index1];

      var index2 = floor(random() * colorList2.length);
      var colorHex2 = colorList2[index2];

      var index3 = floor(random() * colorList3.length);
      var colorHex3 = colorList3[index3];

      var index4 = floor(random() * colorList4.length);
      var colorHex4 = colorList4[index4];

      var index5 = floor(random() * colorList5.length);
      var colorHex5 = colorList5[index5];

      var index6 = floor(random() * colorList6.length);
      var colorHex6 = colorList6[index6];

      var index7 = floor(random() * colorList7.length);
      var colorHex7 = colorList7[index7];

      var index8 = floor(random() * colorList8.length);
      var colorHex8 = colorList8[index8];

      var index9 = floor(random() * colorList9.length);
      var colorHex9 = colorList9[index9];
      stroke(255);

      if (pmouseX < windowWidth / 4 && pmouseY < windowHeight / 2 && x < windowWidth / 4 + a && y < windowHeight / 2 + b) { //1a quadrante
        fill(color(colorHex1));
      } else if (
        pmouseX < windowWidth / 4 &&
        pmouseY > windowHeight / 2 &&
        x < windowWidth / 4 + a &&
        y > windowHeight / 2) { //1b quadrante
        fill(color(colorHex2));
      } else if (
        pmouseX > windowWidth / 4 &&
        pmouseX < windowWidth * 2 / 4 &&
        pmouseY > windowHeight / 2 &&
        x > windowWidth * 1 / 4 &&
        x < windowWidth * 2 / 4 + a &&
        y > windowHeight / 2) {
        fill(color(colorHex3));
      } else if (
        pmouseX > windowWidth * 2 / 4 &&
        pmouseX < windowWidth * 3 / 4 &&
        pmouseY > windowHeight / 2 &&
        x > windowWidth * 2 / 4 &&
        x < windowWidth * 3 / 4 + a &&
        y > windowHeight / 2) {
        fill(color(colorHex4));
      } else if (
        pmouseX > windowWidth * 3 / 4 &&
        pmouseY > windowHeight / 2 &&
        x > windowWidth * 3 / 4&&
        y > windowHeight / 2) {
        fill(color(colorHex5));
      } else if (
        pmouseX > windowWidth * 2 / 4 &&
        pmouseX < windowWidth * 3 / 4 &&
        pmouseY < windowHeight / 2 &&
        x > windowWidth * 2 / 4 &&
        x < windowWidth * 3 / 4 + a &&
        y < windowHeight / 2 +b) {
        fill(color(colorHex6));
      } else if (
        pmouseX > windowWidth / 4 &&
        pmouseX < windowWidth * 2 / 4 &&
        pmouseY < windowHeight / 2 &&
        x > windowWidth / 4 &&
        x < windowWidth * 2 / 4 +a &&
        y < windowHeight / 2 + b) {
        fill(color(colorHex7));
      } else if (
        pmouseX > windowWidth * 3 / 4 &&
        pmouseY < windowHeight / 2 &&
        x > windowWidth * 3 / 4 &&
        y < windowHeight / 2 + b) {
        fill(color(colorHex8));
      } else {
        fill(color(colorHex9));
      }

      rect(x, y, x, y);
    }
  };
}
