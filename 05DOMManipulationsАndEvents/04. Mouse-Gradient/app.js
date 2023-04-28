function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');

    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event) {
        let percentage = Math.floor(event.offsetX / (event.target.clientWidth - 1) * 100);
        result.textContent = percentage + '%';
    }

    function gradientOut() {
        result.textContent = '';
    }

}