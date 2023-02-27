"use strict";

window.onload = function () {
  ContainerGenerator(4);
};

function ContainerGenerator(n) {
  for (let i = 0; i < n; i++) {
    var container = document.createElement("div");
    container.setAttribute("id", "GenContainer");
    let color = "rgba(" + (Math.floor(Math.random() * 256 + 47) / 2) + "," + (Math.floor(Math.random() * 256 + 79) / 2) + "," + (Math.floor(Math.random() * 256 + 79) / 2);
    //Случайный цвет сведенный к darkslategrey
    color.toString();
    container.style.backgroundColor = color + ",0.54)";
    container.style.color = color + ",0.95)";
    let ipsum = new LoremIpsum();
    container.innerHTML = ("<div>" + ipsum.paragraph((10, 20)) + "</div>");
    container.innerHTML += "<button  id='Route' hidden onclick='ContainerGenerator(4)'></button>";
    container.innerHTML += "<label for='Route'>Contact our helplines</label>";
    document.getElementById('view').appendChild(container);
  }
}

