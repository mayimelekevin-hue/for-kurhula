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
// ==========================================
// 10 THINGS I APPRECIATE ABOUT YOU
// ==========================================

const reasons = [

"1. Your beautiful smile 😊",

"2. Your kindness ❤️",

"3. The way you make me laugh 😂",

"4. Your caring heart 💖",

"5. Your honesty 🌸",

"6. Your strength 💪",

"7. Your beautiful personality ✨",

"8. The peace you bring 🕊️",

"9. The happiness you spread ☀️",

"10. Simply because you're Kurhula ❤️"

];

let reasonIndex = 0;

const reasonText = document.getElementById("reasonText");

const nextReason = document.getElementById("nextReason");

nextReason.addEventListener("click", () => {

    reasonIndex++;

    if(reasonIndex < reasons.length){

        reasonText.textContent = reasons[reasonIndex];

    }

    else{

        tenThings.classList.add("hidden");

        questions.classList.remove("hidden");

    }

});
