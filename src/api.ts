/* 
С помощью API https://jsonplaceholder.typicode.com реализовать 
функцию getTodosByCount(count) - где count - количество todo, которое 
должно прийти и вывести это в консоль
Вывести 10 TODO в консоль и типизировать response
*/

interface TODO {
   userId: number,
   id: number,
   title: string,
   completed: boolean
}

export function getTodosByCount(count: number) {

   for (count = 1; count <= 10; count++) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
         .then<TODO>(response => response.json())
         .then(json => console.log(json))
   }
}
