//!Task 1
// function performTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             alert("Task completed!");
//             resolve(); // Завершаем промис успешно
//         }, 3000);
//     });
// }

// // Вызываем функцию и обрабатываем промис
// performTask()

//! Task 2
// function wait(ms){
//     return new Promise((res) =>{
//         setTimeout(()=> {
//             res(`Прошло ${ms} ms`)
//         }, ms)
//     })
// }

// wait(2000).then((message) => alert(message));

// function randomOperation(){
//     return new Promise((res, rej) => {
//         setTimeout(()=> {
//             let random = Math.random() < 0.7;
//             if (random){
//                 res("Успех");
//             }else{
//                 rej("Ошибка");
//             }
//         }, 1000);
//     })
// }

// randomOperation()
// .then((result) => console.log(result))
// .catch((error) => {
//     console.error(error);
// })