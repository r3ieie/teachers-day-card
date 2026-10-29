/* =========================
   SPECIAL NOTE BUTTON
========================= */

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.toggle("show");

    if (surpriseMessage.classList.contains("show")) {

        surpriseButton.textContent = "📕 Close the Special Note";

    } else {

        surpriseButton.textContent = "📖 Open a Special Note";

    }

});


/* =========================
   MUSIC BUTTON
========================= */

const musicButton = document.getElementById("musicButton");

let playing = false;

musicButton.addEventListener("click", function () {

    playing = !playing;

    if (playing) {

        musicButton.textContent = "❚❚";

    } else {

        musicButton.textContent = "▶";

    }

});

