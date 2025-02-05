
function playSong() {
    var song = document.getElementById("song");
    var playButton = document.getElementById("playButton");
    song.play(); 
    playButton.style.display = "none";
    song.onended = function () {
        document.getElementById("proceedButton").style.display = "inline-block";
    };
}

function startFlowerAnimation() {
    var flowerContainer = document.getElementById("flower-container");
    flowerContainer.style.display = "block"; 

    for (var i = 0; i < 10; i++) {
        var flower = document.createElement("div");
        flower.classList.add("flower");

        var randomTop = Math.random() * 200 + 50; 
        var randomLeft = Math.random() * 100 + 50; 

        flower.style.top = `${randomTop}px`;
        flower.style.left = `${randomLeft}px`;

        var stem = document.createElement("div");
        stem.classList.add("stem");
        flower.appendChild(stem);

        var leafLeft = document.createElement("div");
        leafLeft.classList.add("leaf-left");
        flower.appendChild(leafLeft);

        var leafRight = document.createElement("div");
        leafRight.classList.add("leaf-right");
        flower.appendChild(leafRight);

        flowerContainer.appendChild(flower);
    }

    setTimeout(function () {
        document.getElementById("message").style.display = "block";
    }, 3000);
}
