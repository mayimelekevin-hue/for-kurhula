// ==========================================
// ELEMENTS
// ==========================================

const loadingScreen = document.getElementById("loadingScreen");
const website = document.getElementById("website");

const openHeart = document.getElementById("openHeart");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

// Sections

const hero = document.getElementById("hero");
const loveLetter = document.getElementById("loveLetter");
const tenThings = document.getElementById("tenThings");
const questions = document.getElementById("questions");
const meetingSection = document.getElementById("meetingSection");
const selfieSection = document.getElementById("selfieSection");
const finalSection = document.getElementById("finalSection");
const endingSection = document.getElementById("endingSection");

// Buttons

const continue1 = document.getElementById("continue1");
const continue2 = document.getElementById("continue2");
const meetingNext = document.getElementById("meetingNext");
const finishButton = document.getElementById("finishButton");
const showFinalMessage = document.getElementById("showFinalMessage");

// ==========================================
// SHOW WEBSITE
// ==========================================

openHeart.addEventListener("click", () => {

    loadingScreen.style.display = "none";

    website.style.display = "block";

    hero.classList.remove("hidden");

    music.play().catch(() => {});

});

// ==========================================
// MUSIC BUTTON
// ==========================================

let playing = true;

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        playing = true;

        musicButton.textContent = "🎵";

    } else {

        music.pause();

        playing = false;

        musicButton.textContent = "🔇";

    }

});

// ==========================================
// CONTINUE BUTTONS
// ==========================================

continue1.addEventListener("click", () => {

    hero.classList.add("hidden");

    loveLetter.classList.remove("hidden");

});

continue2.addEventListener("click", () => {

    loveLetter.classList.add("hidden");

    tenThings.classList.remove("hidden");

});
