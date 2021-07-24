// Cards
const importantNoticeCard = document.querySelector('#important-notice-card');
const communiqueCard = document.querySelector('#communique-card');
const disclaimerCard = document.querySelector('#disclaimer-card');


// Togglers
const importantNoticeToggler = document.querySelector('#important-notice-toggler');
const communiqueToggler = document.querySelector('#communique-toggler');
const disclaimerToggler = document.querySelector('#disclaimer-toggler');

// Untogglers (if that's an actual word)
const importantNoticeUntoggler = document.querySelector('#important-notice-untoggler');
const communiqueUntoggler = document.querySelector('#communique-untoggler');
const disclaimerUntoggler = document.querySelector('#disclaimer-untoggler');


// Making shit work
function toggleActiveCard(toggler, card) {
    toggler.addEventListener('click', function() {
        card.classList.toggle('opened-news-card');
    })
}

function untoggleActiveCard(untoggler, card) {
    untoggler.addEventListener('click', function() {
        card.classList.toggle('opened-news-card');
    })
}

// Opening the card
toggleActiveCard(importantNoticeToggler, importantNoticeCard);
toggleActiveCard(communiqueToggler, communiqueCard);
toggleActiveCard(disclaimerToggler, disclaimerCard);

// Closing the card
untoggleActiveCard(importantNoticeUntoggler, importantNoticeCard);
untoggleActiveCard(communiqueUntoggler, communiqueCard);
untoggleActiveCard(disclaimerUntoggler, disclaimerCard);
