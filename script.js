let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex + 1) % slides.length;
    showSlides();
}

function previousSlide() {
    const slides = document.querySelectorAll('.slide');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(nextSlide, 3000); // Change slide every 2 seconds
});

function toggleCard(element) {
    element.classList.toggle('expanded');
}

function filterCards() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = '';
            card.classList.add('highlight');
        } else {
            card.style.display = 'none';
            card.classList.remove('highlight');
        }
    });
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function filterCardsDropdown() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const dropdown = document.getElementById('dropdown');
    const cards = document.querySelectorAll('.card');
    dropdown.innerHTML = '';

    if (filter) {
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(filter)) {
                const option = document.createElement('a');
                option.textContent = title;
                option.href = `#${card.id}`;
                option.onclick = () => highlightCard(card);
                dropdown.appendChild(option);
            }
        });
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function highlightCard(card) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(c => c.classList.remove('highlight'));
    card.classList.add('highlight');
}
