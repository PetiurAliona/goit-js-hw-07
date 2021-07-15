const searchNode = () => {
    const liNode = document.querySelectorAll('.item');
    
    let counter = 0;
    const res = liNode.forEach(() => counter++);
    console.log(`В списке ${counter} категории.`)

}
searchNode();
 
const getInfo = () => {
    document.querySelectorAll('.item').forEach(itemNode => {
    const headersNodes = itemNode.querySelector('h2').textContent;
    console.log(`Категория ${headersNodes}`);
    const counterOfEl = itemNode.querySelectorAll('li').length;
    console.log(`Количество элементов ${counterOfEl}`);
});
};

getInfo();