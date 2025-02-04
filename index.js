//función que permite obtener un número aleatorio en un rango específico
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//función que genera un objeto con una tarea aleatoria, la aleatoriedad la obtiene de la función getRandomInt()
function generateRandomTask() { //genera un objeto con una tarea aleatoria 
  return {
    text: `Texto aleatorio número ${getRandomInt(1, 1000)}`,
    isCompleted: getRandomInt(0, 1) === 1 //isCompleted será true o false dependiendo del numero aleatorio
  };
}

//función que genera un array con 10 objetos random que representan tareas random, usa un bucle for para llamar 10 veces a la función getRandomTask
function getRandomArray() {
  const randomTasks = []; //define un array vacío
  for (let i = 0; i < 10; i++) { //un bucle de 10 instancias, mete 10 veces en el array randomTasks un objeto con tarea random
    randomTasks.push(generateRandomTask()); 
  }
  return randomTasks; //devuelve el array de objetos
}

/* function getTaskHtml(task){
  return `<div class="task"> 
        <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
        <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
      </div>`;
}
 */
// Estas funciones serán las que iremos cambiando con los ejemplos
//función que regenera el array de tareas random, se activa pulsando el botón de regenerar listado
function regenerateArray() {
  const tasks = getRandomArray(); // la variable llama a la función getRandomArray que genera un array de 10 objetos con tareas aleatorias
  document.querySelector('#tasks').innerHTML = ''; //limpia el contenido del div con id tasks antes de generar las nuevas tareas
  console.log(tasks);

//  let newTasksHTML = ''; //variable para guardar el html

//para cada tarea en el array, llama a la función createTaskNode
  tasks.forEach((task) => { 
    //newTasksHTML += getTaskHtml(task);
    createTaskNode(task, true);
  });
// document.querySelector('#tasks').innerHTML = newTasksHTML; //mete el resultado final en tasks, un div con el id tasks

  /* document.querySelectorAll('.task').forEach((buttonNode) => { //seleccióna todos los botones con la clase like
    buttonNode.addEventListener('click', function (){
      console.log('hola');
      });
    }); */
  }

  //función que genera elementos(tasks), si addToEnd es true entonces lo añade al final, si es false lo añade al principio
function createTaskNode(task, addToEnd){
  const taskNode = document.createElement('div'); //ha creado un div dentro del html
  taskNode.className = 'task'; //añade una nueva clase al div que acabamos de crear reemplazando las clases anteriores, si se usara classList, no se podrían añadir varias clases a la vez
  
  //eliminamos el div <div class=task> debido a que este div es el que creamos con createElement y si lo dejamos estaríamos duplicando un div, meteríamos un div dentro de otro con la misma clase "task"
  taskNode.innerHTML = ` 
        <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
        <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>`;
    
  const tasksNode = document.querySelector('#tasks'); //variable que contiene la parte del html que es un div con el id tasks
  
  //para que se añada una tarea al principio o al final
  if(addToEnd){ //al principio si addToEnd es true
    tasksNode.appendChild(taskNode); //lo añade al final de la etiqueta padre si hay mas elementos
  } else {
    tasksNode.prepend(taskNode); //para que se añada al inicio de la etiqueta padre si hay mas elementos
  };
  
  //hace que solo añada el listener a ese elemento en concreto y no a todos
  taskNode.addEventListener('click', function (){
      console.log('hola', task.text);
      });
}

// function addTask(addToEnd) { //función para añadir una tarea al principio o al final. Dependiendo de si addToEnd es true o false.
//   const task = generateRandomTask(); //definimos un objeto llamado a la función generateRandomTask

// /* `<div class="task"> 
//         <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
//         <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
//       </div>`; */

//   const taskNode = document.createElement('div'); //ha creado un div dentro del html
//   taskNode.className = 'task'; //añade una nueva clase al div que acabamos de crear reemplazando las clases anteriores, si se usara classList, no se podrían añadir varias clases a la vez

// /*   //<span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span>
//   const completedNode = document.createElement('span'); //se crea un span
//   completedNode.className = task.isCompleted ? 'completed' : ''; //se crea la clase del span
//   completedNode.innerText = task.text; //es el texto que va entre la etiqueta <span>
//   taskNode.appendChild(completedNode); //deentro del div taskNode se mete el span completedNode

//       //espacio entre ambos spans
//   const guion = document.createTextNode(' - ');
//   taskNode.appendChild(guion);

//       //<span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
//   const statusNode = document.createElement('span'); //se crea un span con la calss status
//   statusNode.className = 'status';
//   statusNode.innerText = task.isCompleted ? 'completed' : 'pending'; //se le añade el texto de la etiqueta
//   taskNode.appendChild(statusNode); //este span se añade como hijo dentro del div taskNode

//  */
// /* 
//   //definimos una variable que meta la task definida previamente en el html
//   const taskHtml = getTaskHtml(task); */

//   taskNode.innerHTML = `<div class="task"> 
//         <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
//         <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
//       </div>`;
    
//   const tasksNode = document.querySelector('#tasks'); //variable que contiene la parte del html que es un div con el id tasks
  
//   //para que se añada una tarea al principio o al final
//   if(addToEnd){
//     tasksNode.appendChild(taskNode); //lo añade al prinicipio de la etiqueta padre
//   } else {
//     tasksNode.prepend(taskNode); //para que se añada al final de la etiqueta padre
//   };
  
//   //hace que solo añada el listener a ese elemento en concreto y no a todos
//   taskNode.addEventListener('click', function (){
//       console.log('hola', task.text);
//       });
//     };

function addTask(addToEnd){
  const task = generateRandomTask();
  createTaskNode(task, addToEnd); //cada vez que se apriete el botón add task llamama a createTaskNode, creará una task y añadirá al principio o al final 
}

function addLast() {}

//EVENT DELEGATION-------------------------------------------------------------------
const taskList = document.querySelector("#tasks");

taskList.addEventListener('click', function(event){ 
  // Verifica que se ha hecho clic en una tarea
  if(event.target.classList.contains('task')){ //si donde hemos clickado (el div) tiene la clase task
    // Busca el .status dentro de la tarea clicada
    const status = event.target.querySelector('.status');
    
    if (status) { // si el elemento existe
      
      //esta linea de código selecciona el texto "tarea random" de cada div pulsado
      const taskTextSpan = status.previousElementSibling; //crea la variable taskTextSpan que apunta al elemento que tiene justo antes, es decir el texto de tarea random x
      
      if (taskTextSpan) { // verifica que exista un elemento anterior
        if (status.innerHTML === 'completed') {
          status.innerHTML = 'pending'; //lo cambia a pendiente
          taskTextSpan.classList.remove('completed'); //  y quita la clase del span anterior
        } else { //el status es pending entonces
          status.innerHTML = 'completed'; //cambia el texto a completed
          taskTextSpan.classList.add('completed'); // y agrega la clase al span anterior
        }
      }
    }
  }
});


// event listeners para que los botones llamen a las funciones anteriores
document.querySelector('#regenate').addEventListener('click', () => {
  regenerateArray();
});

document.querySelector('#add-first').addEventListener('click', () => {
  addTask(false);
});

document.querySelector('#add-last').addEventListener('click', () => {
  addTask(true);
});