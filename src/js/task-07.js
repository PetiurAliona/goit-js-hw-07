
const input = document.querySelector('#font-size-control');

input.addEventListener('input', e => {
    document.querySelector('#text').style.fontSize = `${Number(input.value) / 2}px`;
}
);