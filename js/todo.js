let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo')

let todoList = [];

if (localStorage.getItem('todo')) {
  todoList = JSON.parse(localStorage.getItem('todo'));
  displayMessages();
}

    addButton.addEventListener('click', function() {
      if (!addMessage.value) return
      let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
      };

      todoList.push(newTodo)
      displayMessages();
      localStorage.setItem('todo', JSON.stringify(todoList));
      addMessage.value = '';
    });

    function displayMessages() {
      let displayMessage = '';
      if (todoList.length === 0) {
        todo.innerHTML = ''
      }

      todoList.forEach(function(item, i) {
       displayMessage += `
       <li>
        <input class="todo__input" type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
        <label class='todo__label ${item.important? 'important-task' : ''}' for='item_${i}'>${item.todo}</label>
        </li>
       `;
       todo.innerHTML = displayMessage;
      })
    }

    todo.addEventListener('change', function(event) {
      let idInput = event.target.getAttribute('id');
      let forLabel = todo.querySelector('[for='+ idInput + ']');
      let valueLabel = forLabel.innerHTML

      todoList.forEach(function(item){
        if (item.todo === valueLabel) {
          item.checked = !item.checked // ПРИ ОДИНАКОВЫХ ЗНАЧЕНИЯХ - БАГУЕТСЯ
          localStorage.setItem('todo', JSON.stringify(todoList)); 
        }
      })
    })

    todo.addEventListener('contextmenu', function(event){ 
      event.preventDefault();
      todoList.forEach(function(item, i){
        if(item.todo === event.target.innerHTML){
          if(event.ctrlKey) {
            todoList.splice(i, 1);
          } else {
          item.important = !item.important;
        }
        displayMessages();
        localStorage.setItem('todo', JSON.stringify(todoList));
        }

      })
    })

    // todo.addEventListener('click', function(e) { 

    //   todoList.forEach(function(item){
    //     if(i.target.getAttribute('checked')){
    //       alert('asdasd')
    //       displayMessages();
    //       localStorage.setItem('todo', JSON.stringify(todoList));
    //     }

    //   })
    // })


    const showmoreButton = document.querySelector('.show-more__button')
    const showmoreContainer = document.querySelector('.show-more__container')
    const resetAllButton = document.querySelector('.reset-all__button')

    showmoreButton.addEventListener('click', ( )=> {
      showmoreContainer.classList.toggle('active')
    })

    resetAllButton.addEventListener('click', () => {
      todoList = [];
      displayMessages();
      localStorage.setItem('todo', JSON.stringify(todoList));
      showmoreContainer.classList.toggle('active')

    })