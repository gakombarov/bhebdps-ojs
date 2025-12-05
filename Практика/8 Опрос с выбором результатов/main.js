const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest;
xhr.open( 'GET', 'https://students.netoservices.ru/nestjs-backend/poll' );
xhr.send();
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
     pollTitle.textContent = xhr.response.data.title;
     pollTitle.dataset.id = xhr.response.id;
     pollAnswers.innerHTML = xhr.response.data.answers.map((text, dataId) => `<button class="poll__answer" data-id="${dataId}">
              ${text} 
            </button>`
     ).join(' ');
});

pollAnswers.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded');
        xhr.send( `vote=${pollTitle.dataset.id}&answer=${event.target.dataset.id}`);
        xhr.addEventListener('load', () => {
            pollTitle.parentElement.innerHTML = JSON.stringify(xhr.response, null, 2);
        })
    }
});