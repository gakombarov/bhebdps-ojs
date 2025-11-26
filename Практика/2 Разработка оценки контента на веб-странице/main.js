const stars = document.getElementsByClassName('star');
for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener('click', () => {
    for (let j = 0; j < stars.length; j++) {
      stars[j].classList.remove('star_active');
    }
    for (let j = 0; j <= i; j++) {
      stars[j].classList.add('star_active');
    }
  })
}
// можно сделать через toggle одним циклом