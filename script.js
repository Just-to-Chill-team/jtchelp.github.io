const body = document.body;
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.classList.toggle('moon');
    toggleButton.classList.toggle('sun');
});
