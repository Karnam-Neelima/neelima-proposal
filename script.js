// // ========================================
// // PAGE 1
// // YES → SURPRISE PAGE
// // ========================================

// function goToSurprise() {

//     window.location.href =
//         "surprise.html";

// }


// // ========================================
// // PAGE 2
// // SURPRISE BOX → LOVE PAGE
// // ========================================

// function goToLove() {

//     window.location.href =
//         "love.html";

// }


// // ========================================
// // PAGE 3
// // YES → PROPOSAL PAGE
// // ========================================

// function goToProposal() {

//     window.location.href =
//         "proposal.html";

// }


// // ========================================
// // PAGE 1 NO BUTTON
// // ========================================

// const firstNoButton =
//     document.getElementById(
//         "firstNoButton"
//     );


// if (firstNoButton) {

//     firstNoButton.addEventListener(
//         "click",
//         function () {

//             // Change the question
//             const question =
//                 document.getElementById(
//                     "question"
//                 );

//             question.innerText =
//                 "Why are you not excited about me? 🥺❤️";


//             // Move NO button
//             moveNoButton(
//                 firstNoButton
//             );

//         }
//     );

// }


// // ========================================
// // PAGE 3 NO BUTTON
// // ========================================

// const loveNoButton =
//     document.getElementById(
//         "loveNoButton"
//     );


// if (loveNoButton) {

//     loveNoButton.addEventListener(
//         "click",
//         function () {

//             moveNoButton(
//                 loveNoButton
//             );

//         }
//     );

// }


// // ========================================
// // RANDOM NO BUTTON MOVEMENT
// // ========================================

// function moveNoButton(button) {


//     /*
//        First make the button fixed.

//        This means its position is calculated
//        relative to the browser viewport.
//     */

//     button.style.position =
//         "fixed";


//     // Get actual button dimensions

//     const buttonWidth =
//         button.offsetWidth;

//     const buttonHeight =
//         button.offsetHeight;


//     /*
//        Safe space from browser edges.

//        This prevents the button from touching
//        the exact edge of the screen.
//     */

//     const padding = 20;


//     // Get browser viewport size

//     const screenWidth =
//         window.innerWidth;

//     const screenHeight =
//         window.innerHeight;


//     /*
//        Calculate maximum X.

//        Button width is subtracted so that
//        the complete button stays inside.
//     */

//     const maxX =
//         screenWidth -
//         buttonWidth -
//         padding;


//     /*
//        Calculate maximum Y.

//        Button height is subtracted so that
//        the complete button stays inside.
//     */

//     const maxY =
//         screenHeight -
//         buttonHeight -
//         padding;


//     // Generate random X

//     const randomX =
//         padding +
//         Math.random() *
//         (maxX - padding);


//     // Generate random Y

//     const randomY =
//         padding +
//         Math.random() *
//         (maxY - padding);


//     // Apply random position

//     button.style.left =
//         randomX + "px";

//     button.style.top =
//         randomY + "px";

// }






// ========================================
// PAGE 1
// YES → SURPRISE PAGE
// ========================================

function goToSurprise() {
    window.location.href = "surprise.html";
}


// ========================================
// PAGE 2
// SURPRISE BOX → LOVE PAGE
// ========================================

function goToLove() {
    window.location.href = "love.html";
}


// ========================================
// PAGE 3
// YES → PROPOSAL PAGE
// ========================================

function goToProposal() {
    window.location.href = "proposal.html";
}


// ========================================
// GET NO BUTTONS
// ========================================

const firstNoButton =
    document.getElementById("firstNoButton");

const loveNoButton =
    document.getElementById("loveNoButton");


// ========================================
// FIRST PAGE NO BUTTON
// ========================================

if (firstNoButton) {

    firstNoButton.addEventListener("mouseenter", function () {

        const question =
            document.getElementById("question");

        question.innerText =
            "Why are you not excited about me? 🥺❤️";

        moveNoButton(firstNoButton);
    });

    firstNoButton.addEventListener("click", function (event) {

        event.preventDefault();

        const question =
            document.getElementById("question");

        question.innerText =
            "Why are you not excited about me? 🥺❤️";

        moveNoButton(firstNoButton);
    });
}


// ========================================
// LOVE PAGE NO BUTTON
// ========================================

if (loveNoButton) {

    loveNoButton.addEventListener("mouseenter", function () {

        moveNoButton(loveNoButton);
    });

    loveNoButton.addEventListener("click", function (event) {

        event.preventDefault();

        moveNoButton(loveNoButton);
    });
}


// ========================================
// RANDOM NO BUTTON MOVEMENT
// SCREEN LOPALA MATRAM
// ========================================

function moveNoButton(button) {

    // Button screen meeda ekkadaina move avvachu
    button.style.position = "fixed";

    const buttonWidth =
        button.offsetWidth;

    const buttonHeight =
        button.offsetHeight;

    // Screen edges nundi gap
    const padding = 20;

    const screenWidth =
        window.innerWidth;

    const screenHeight =
        window.innerHeight;

    // Safe maximum positions
    const maxX =
        screenWidth -
        buttonWidth -
        padding;

    const maxY =
        screenHeight -
        buttonHeight -
        padding;

    // Random position
    const randomX =
        padding +
        Math.random() *
        (maxX - padding);

    const randomY =
        padding +
        Math.random() *
        (maxY - padding);

    // Apply position
    button.style.left =
        randomX + "px";

    button.style.top =
        randomY + "px";
}