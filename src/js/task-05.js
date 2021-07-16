
const outputNode = document.querySelector('#name-output')

document.querySelector('#name-input').addEventListener('input', e => {
    outputNode.textContent = e.target.value.length === 0 ? 'незнакомец' : e.target.value;
}
);