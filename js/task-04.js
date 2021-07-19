let counterValue = 0;

document.querySelector('#counter').addEventListener('click', e => {
    if (e.target.getAttribute('data-action') === 'decrement') {
        document.querySelector('#value').textContent = counterValue -= 1;
    }
   if (e.target.getAttribute('data-action') === 'increment') {
        document.querySelector('#value').textContent = ++counterValue;
    }

}
)