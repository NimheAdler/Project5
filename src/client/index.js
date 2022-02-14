import { handleSubmit } from './js/formHandler'
import { final } from './js/formHandler'

import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const dateInput = document.getElementById("date");
const city = document.getElementById("city");
const forecast = document.getElementById("forecast");
const error = document.getElementById("error");
let pic = document.getElementById('pic');


document.getElementById('submitbutton').addEventListener('click', start);

function start(e) {
  e.preventDefault();

  handleSubmit('/postData', {
    //body of the postcall
    City: city.value,
    Date: dateInput.value,
  })
  .then(() => {
    final();
  });
};

// Button to print the trip details
document.getElementById('printbutton').addEventListener('click', printButton);

function printButton(e) {
  e.preventDefault();
  window.print();
}

// Button to delete the data from last search 
document.getElementById('clearbutton').addEventListener('click', clearSearch);

function clearSearch(e) {
  e.preventDefault();
  forecast.innerHTML = "";
  pic.innerHTML = "";
  error.innerHTML = "";
}

export {
  handleSubmit,
  final
}