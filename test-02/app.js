const seasons = {
    winter: {
        months: ['December', 'January', 'February'],
        color: '#74b9ff',
        background: "url('images/image-1.png')" // Зима
    },
    spring: {
        months: ['March', 'April', 'May'],
        color: '#76c893',
        background: "url('images/image-2.jpg')" // Весна
    },
    summer: {
        months: ['June', 'July', 'August'],
        color: '#ffbe76',
        background: "url('images/image-3.jpg')" // Лето
    },
    autumn: {
        months: ['September', 'October', 'November'],
        color: '#d35400',
        background: "url('images/image-4png.jpg')" // Осень
    }
};

function showSeason(season) {
    const monthsDiv = document.getElementById('months');
    const selectedSeason = seasons[season];

    // Очистить предыдущие данные
    monthsDiv.innerHTML = '';

    // Установить изображение фона
    document.body.style.backgroundImage = selectedSeason.background;

    // Добавить месяцы с цветом сезона
    selectedSeason.months.forEach(month => {
        const span = document.createElement('span');
        span.textContent = month;
        span.style.backgroundColor = selectedSeason.color;
        span.style.color = 'white';
        monthsDiv.appendChild(span);
    });
}