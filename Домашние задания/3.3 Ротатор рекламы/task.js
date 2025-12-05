document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');

        let currentIndex = 0;

        const activateCase = (index) => {
            cases.forEach(item => {
                item.classList.remove('rotator__case_active');
            });

            const activeCase = cases[index];

            activeCase.classList.add('rotator__case_active');

            const color = activeCase.dataset.color;
            const speed = parseInt(activeCase.dataset.speed, 10);

            activateCase.color = color;

            if (rotator.timer) {
                clearTimeout(rotator.timer);
            }

            rotator.timer = setTimeout(() => {
                currentIndex = (currentIndex + 1) % cases.length;
                activateCase(currentIndex);
            }, speed);
        };

        if (cases.length > 0) { 
            activateCase(currentIndex);
        }
    });
});