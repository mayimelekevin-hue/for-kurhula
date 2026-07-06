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

continue1.onclick = function () {

    hero.style.display = "none";

    loveLetter.style.display = "flex";

};

continue2.onclick = function () {

    loveLetter.style.display = "none";

    tenThings.style.display = "flex";

};
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

nextReason.onclick = function () {

    reasonIndex++;

    if (reasonIndex < reasons.length) {

        reasonText.textContent = reasons[reasonIndex];

    } else {

        tenThings.style.display = "none";
        questions.style.display = "flex";

        questions.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

};
// ==========================================
// RUNAWAY NO BUTTON
// ==========================================

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveNoButton() {

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 220 - 110;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

// Desktop
noBtn.addEventListener("mouseover", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
});

yesBtn.onclick = function () {

    questions.style.display = "none";
meetingSection.style.display = "flex";

meetingSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

};
// ==========================================
// MEETING DATE
// ==========================================

meetingNext.onclick = function () {

    const date = document.getElementById("meetingDate").value.trim();

    if (date === "") {

        alert("Please tell me when we're meeting. 🥺");
        return;

    }

    meetingSection.style.display = "none";
selfieSection.style.display = "flex";

selfieSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

};
// ==========================================
// SELFIE PREVIEW
// ==========================================

const selfieInput = document.getElementById("selfieInput");
const previewImage = document.getElementById("previewImage");

selfieInput.onchange = function (event) {

    const file = event.target.files[0];

    if (!file) return;

    previewImage.src = URL.createObjectURL(file);

    previewImage.style.display = "block";

};
// ==========================================
// FINISH
// ==========================================

finishButton.onclick = function () {

    selfieSection.style.display = "none";
finalSection.style.display = "flex";

finalSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
});

};
// ==========================================
// FINAL MESSAGE
// ==========================================

showFinalMessage.onclick = function () {

    finalSection.style.display = "none";
endingSection.style.display = "flex";

endingSection.scrollIntoView({
    behavior: "smooth",
    block: "center"
});


};
