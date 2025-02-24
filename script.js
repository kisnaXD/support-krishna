const card = document.querySelector('.card');
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / 50}deg) rotateY(${(x - rect.width / 2) / 50}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
});