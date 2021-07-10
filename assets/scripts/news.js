const card = document.querySelector('.news-card');
const openCardBtn = document.querySelector('#read-more-btn');
const closeCardBtn = document.querySelector('#close-btn');

openCardBtn.addEventListener('click', openCard);
closeCardBtn.addEventListener('click', closeCard);

function openCard() {
    card.classList.toggle('opened-news-card');
}

function closeCard() {
    card.classList.toggle('opened-news-card');
    document.body.style.overflow = 'auto';
}
