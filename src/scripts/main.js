'use strict';
// TASK!!
// Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає елементи зі значеннями більшими або рівними a і меншими або рівними b і повертає результат у вигляді масиву.

// Функція повинна повертати новий масив та не змінювати вихідний.

//     Наприклад:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (збігаються значення)
// alert(arr); // 5,3,8,1 (без змін)

function filterRange(arr, a, b) {
    console.log(arr.filter(item => item >= a && item <= b));
    return arr.filter(item => (item >= a && item <= b));
}

filterRange([1,3,5,6,7,9], 3, 7)