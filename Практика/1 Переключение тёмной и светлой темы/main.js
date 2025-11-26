const body = document.querySelector('body');
const checkbox = document.getElementById('checkbox');
checkbox.onchange = () => body.className = checkbox.checked ? 'light-mode' : '';