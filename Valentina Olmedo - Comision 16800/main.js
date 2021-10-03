//  ENTREGA FINAL


const botonCargar = document.getElementById('btnCargar');
const content = document.getElementById('content');
const inputName = document.getElementById('name');
const inputAge = document.getElementById('age');
const inputExpenses = document.getElementById('expenses');
const inputYears = document.getElementById('years');
const form = document.getElementById('custom-form');


//Primera Forma addEventListenner
botonCargar.addEventListener('click', mostrarCard);


function mostrarCard(event) {
  event.preventDefault();
  const inputNameValue = inputName.value;
  const inputAgeValue = inputAge.value;
  const inputYearsValue = inputYears.value;
  const inputExpensesValue = inputExpenses.value;

  crearCard(inputNameValue, inputAgeValue, inputExpensesValue, inputYearsValue, content);
}
let garantiasCard = [];
var mensaje = JSON.parse(localStorage.getItem("garantias"));
// Este console.log muestra las garantias creadas que fueron guardadas 
// en localStorage aun cuando se hace refresh a la pagina.
// console.log(mensaje);

function crearCard(name, age, expenses, years, element) {
  const newCard = document.createElement('div');

  newCard.className = "newCard";
  // DEFINO VARIABLE GARANTIA 
  let garantia = ((Number(age) + Number(expenses)) * Number(years));

  // AGREGO VARIABLE GARANTIA DECLARADA ARRIBA

  newCard.innerHTML = style = `<h2 class="info">Dirección: ${name}</h2>
  <h3 class="info">Alquiler: ${age}</h3>
  <h4 class="info">Expensas: ${expenses}</h4>
  <h5 class="info" >Años del contrato: ${years}</h5>
  <h6 class="info">Seguro de caución: ${garantia}
  `;

  let garantiaObj = new garantiasObject(name, age, expenses, years, garantia)
  garantiasCard.push(garantiaObj);
  // Este console.log muestra las tarjetas que son pusheadas a las garantias, y que 
  // luego son guardadas en el localStorage
  // console.log(garantiasCard);
  localStorage.setItem("garantias", JSON.stringify(garantiasCard));

  element.appendChild(newCard);
}

function garantiasObject(name, age, expenses, years, garantia) {
  this.name = name,
    this.age = age,
    this.expenses = expenses,
    this.years = years,
    this.garantia = garantia
}

const note = document.querySelector('.card');
note.style.backgroundColor = '#ccc5b9';






