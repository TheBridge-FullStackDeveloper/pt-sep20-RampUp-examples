function handleClick() {
  const counter = document.querySelector('#counter');
  const counterValue = Number(counter.innerText); // 0

  const inputNumber = document.querySelector('#input-number');
  const inputNumberValue = Number(inputNumber.value); // X

  const sum = counterValue + inputNumberValue;
  counter.innerText = sum;
}

const calculateButton = document.querySelector('#calculate');
calculateButton.addEventListener('click', handleClick);
