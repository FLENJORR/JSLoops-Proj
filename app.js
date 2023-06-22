//for loop
// sum numbers

const calculateSum = document.getElementById('btn1')

function calcSum() {
  const userNum = document.getElementById('user-number') //allows us get the entered number
  const enteredNumber = userNum.value;

  //sum up all the values leading up to the number
  
  let sumUpToNumber = 0;

  for (let i = 0; i <= enteredNumber; i++) {
    sumUpToNumber = sumUpToNumber + i;

  }  // sumUpToNumber will be the sum of all the numbers up to the entered number
  
  // outputing the value

  const outputResult = document.getElementById('calculated-sum');

  outputResult.textContent = sumUpToNumber;
  outputResult.style.display = 'block';

}

calculateSum.addEventListener('click', calcSum)


// for...of loop
// highlight links

const highlightLink = document.getElementById('btn2');

function higlightLinks() {
  const anchorElements = document.querySelectorAll('#highlight-links a') //returns an array

  for (const anchorElement of anchorElements) {
    anchorElement.classList.add('highlight')
  }
}

highlightLink.addEventListener('click', higlightLinks)


// display user information

const userData = {
  firstName: 'Flenjorr',
  lastName: 'Agara',
  age: 23,
  country: 'Nigeria'
};

const displayUserBtn = document.getElementById('btn3');

function displayUser() {
    const outputData = document.getElementById('output-user-data');

    outputData.innerHTML = '';

    for (const key in userData) {
      const userList = document.createElement('li');
      const outputText = key.toUpperCase()  + ': ' + userData[key];
      userList.textContent = outputText;
      outputData.append(userList);

    }
}

displayUserBtn.addEventListener('click', displayUser);