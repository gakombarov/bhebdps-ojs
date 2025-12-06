const loader = document.getElementById('loader');
const items = document.getElementById('items');

// Показываем лоадер
loader.classList.add('loader_active');

// Делаем запрос
fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => response.json())
    .then(data => {
        // Скрываем лоадер
        loader.classList.remove('loader_active');
        
        // Очищаем список
        items.innerHTML = '';
        
        // Добавляем валюты
        for (let key in data.response.Valute) {
            const currency = data.response.Valute[key];
            
            items.innerHTML += `
                <div class="item">
                    <div class="item__code">${currency.CharCode}</div>
                    <div class="item__value">${currency.Value.toFixed(2)}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `;
        }
    })
    .catch(error => {
        loader.classList.remove('loader_active');
        console.error('Ошибка:', error);
    });