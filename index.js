function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomTask() { //genera un objeto con una tarea aleatoria 
  return {
    text: `Texto aleatorio número ${getRandomInt(1, 1000)}`,
    isCompleted: getRandomInt(0, 1) === 1
  };
}

function getRandomArray() {
  const randomTasks = []; //define un array vacío
  for (let i = 0; i < 10; i++) { //un bucle de 10 instancias, mete 10 veces en el array randomTasks un objeto con tarea random
    randomTasks.push(generateRandomTask()); 
  }
  return randomTasks;
}

function getTaskHtml(task){
  return `<div class="task"> 
        <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
        <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
      </div>`;
}

// Estas funciones serán las que iremos cambiando con los ejemplos
function regenerateArray() {
  const tasks = getRandomArray(); // la variable llama a la función getRandomArray que genera un array de 10 objetos con tareas aleatorias
  console.log(tasks);
  let newTasksHTML = ''; //variable para guardar el html

  tasks.forEach((task) => {
    newTasksHTML += getTaskHtml(task);
  });
  document.querySelector('#tasks').innerHTML = newTasksHTML; //mete el resultado final en tasks, un div con el id tasks
}

function addTask(addToEnd) { //función para añadir una tarea al principio o al final. Dependiendo de si addToEnd es true o false.
  const task = generateRandomTask(); //definimos un objeto llamado a la función generateRandomTask

  //definimos una variable que meta la task definida previamente en el html
  const taskHtml = getTaskHtml(task);
    
  const tasksNode =  document.querySelector('#tasks'); //variable que contiene la parte del html que es un div con el id tasks
  
  //para que se añada una tarea al principio o al final
  if(addToEnd){
    tasksNode.innerHTML = tasksNode.innerHTML + taskHtml;
  } else {
    tasksNode.innerHTML = taskHtml + tasksNode.innerHTML;
  };
  
}

function addLast() {}

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