const map = document.querySelector('.block');

map.addEventListener('click', event => {
  event.preventDefault()
  const button = event.target.closest('button');

  if (!button) {
    document.querySelectorAll('.button-active').forEach(btn => {
      btn.classList.remove('button-active');
      btn.classList.add('button-default');
    });
    return;
  }

  button.classList.toggle('button-active');
  button.classList.toggle('button-default');
});