
const todoList = [{name: 'make coffee', 
dueDate: '2024-01-15'},

{name: 'write code',
dueDate: '2024-01-15'}];

renderTodoList();  

function renderTodoList(){
   let todoListHTML = '';

   todoList.forEach(function(todoObject, index){
   
            const name = todoObject.name; 
            
            const dueDate = todoObject.dueDate;
           
            const html = 
   
            `<div>${name}</div>
            <div>${dueDate}</div>
             
            <button onclick="
               todoList.splice(${index}, 1);
               renderTodoList();
            " class="delete-button">Delete</button>
            `;
   
            todoListHTML += html;
   });

      
      console.log(todoListHTML);

   document.querySelector('.js-todo-list').innerHTML
   = todoListHTML;
   };

  



function addTodo (){
   const inputElement =  document.querySelector('.js-name-input') 
   inputElement.value  
   const name = inputElement.value 

   const dateInputElement = document.querySelector
   ('.js-due-date-input');

   const dueDate = dateInputElement.value; 

   todoList.push({
       

       name: name,
       dueDate: dueDate

      });
     

   console.log(todoList);

   inputElement.value = ''; 
   
   renderTodoList();
};                                  


