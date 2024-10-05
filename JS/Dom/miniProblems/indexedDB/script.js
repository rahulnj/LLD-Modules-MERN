let db;

let name = document.querySelector('#name');
let address = document.querySelector('#add');
let phone = document.querySelector('#ph');
let btn = document.querySelector('button');
let request = indexedDB.open('employees', 1);
