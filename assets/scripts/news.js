const card = document.querySelectorAll('.news-card');
const openCardBtn = document.querySelectorAll('#read-more-btn');
const closeCardBtn = document.querySelectorAll('#close-btn');

openCardBtn.forEach(el => el.addEventListener('click', openCard));
closeCardBtn.forEach(el => el.addEventListener('click', closeCard));

function openCard() {
    card.forEach(el => el.classList.toggle('opened-news-card'));
}

function closeCard() {
    card.forEach(el => el.classList.toggle('opened-news-card'));
}
