document.addEventListener('DOMContentLoaded', function() {
    const sphere = document.getElementById('sphere');

    setTimeout(function() {
        sphere.classList.add('explode'); // Добавляем класс 'explode' для активации анимации
    }, 1000); // Время задержки перед началом разрушения
});