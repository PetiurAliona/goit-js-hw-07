

document.querySelector('#validation-input').addEventListener('change', e => {
    if (+e.target.dataset.length === e.target.value.length) {
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    }
    else {
        e.target.classList.add('invalid');
        e.target.classList.remove('valid');
    }
    
}
);