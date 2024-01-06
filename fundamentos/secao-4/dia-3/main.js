const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('myself');

const handleChangeTech = (event) => {
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
};

firstLi.addEventListener('click', handleChangeTech);
secondLi.addEventListener('click', handleChangeTech);
thirdLi.addEventListener('click', handleChangeTech);

input.addEventListener('input', (event) => {
    const techElement = document.querySelector('.tech');
    techElement.innerText = event.target.value;
});

myWebpage.addEventListener('click', () => {
    window.open('https://devfelipedarosa.github.io/');
});

myWebpage.addEventListener('mouseover', (event) => {

    event.target.style.color = 'red';
    event.target.style.cursor = 'pointer';

  });

myWebpage.addEventListener('mouseout', (event) => {
  event.target.style.color = 'unset';
  event.target.style.cursor = 'auto';
});


myWebpage.addEventListener('mouseout', (event) => {

  event.target.style.color = 'unset';

});

const resetText = (event) => {
  event.target.innerText = 'Opção reiniciada';
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);
