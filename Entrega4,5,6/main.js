// SEGUNDA ENTREGA FINAL

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

function crearCard(name, age, expenses, years, element) {
  const card = document.createElement('div');

  card.className = "card m-2 p-3";

  // DEFINO VARIABLE GARANTIA 
  let garantia = ((Number(age) + Number(expenses)) * Number(years));

  // AGREGO VARIABLE GARANTIA DECLARADA ARRIBA

  card.innerHTML = `<h2>Dirección: ${name}</h2>
  <h3>Alquiler: ${age}</h3>
  <h4>Expensas: ${expenses}</h4>
  <h5>Años del contrato: ${years}</h5>
  <h6>Seguro de caución: ${garantia}
  `;
  console.log("age: ", age);
  console.log("expenses: ", expenses);
  console.log("years: ", years);
  console.log("garantia: ", garantia);

  let garantiasCard = [];

  function garantiasObject() {
    this.name = name,
    this.age = age,
    this.expenses = expenses,
    this.years = years,
    this.garantia = garantia
  }

  function cargarGarantia() {
    garantiasObject.push(garantiasCard);
  }
  console.log("garantiasCard", garantiasCard);

  element.appendChild(card);
}




//PROBLEMA: No me trae la formula de garantia , me la incluye en la card pero NAN
// quiero agregar un console log para que me mande la info a la consola
// ver array y objetos


//Segunda forma

/*  botonCargar.onclick = (event) => {
  crearCard('Ariel', 40, content);
}  */



// inputName.addEventListener('change', onNameChange);

// function onNameChange(event) {
//   console.log('Target:', event.target);
//   console.log('Value:', event.target.value);
// }

// inputName.onkeydown = (event) => {
//   if(event.key == 2) {
//     //console.log('aprete el 2');
//   }
// }

// inputName.onkeyup = function(event) {
//   console.log(event)
// }

// form.onmouseenter = () => {
//   document.body.style.backgroundColor = "green";
// }


// form.onmouseleave = () => {
//   document.body.style.backgroundColor = "blue";
// }



// form.onsubmit = (e) => {
//   e.preventDefault();
//   if(Number(inputAge.value) < 18) {
//     const alert = document.createElement('div');
//     alert.className ="alert alert-danger";
//     alert.innerHTML = 'Sos menor de edad'

//     form.appendChild(alert);
//   }
// }



//Tercera forma No es recomendada ya que no es buena práctica utilizar el js en el html.






