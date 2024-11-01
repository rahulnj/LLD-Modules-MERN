let db;

let name = document.querySelector('#name');
let address = document.querySelector('#add');
let phone = document.querySelector('#ph');
let btn = document.querySelector('button');
let request = indexedDB.open('employees', 1);

request.onsuccess = function (e) {
  db = request.result;
};

request.onerror = function (e) {
  console.log(e);
};

request.onupgradeneeded = function (e) {
  db = request.result;
  db.createObjectStore('employee', { keyPath: 'eId' });
};

btn.addEventListener('click', function () {
  addEmployee();
});
function addEmployee() {
  let tx = db.transaction('employee', 'readwrite');

  let store = tx.objectStore('employee');
  store.add({
    eId: Date.now(),
    name: name.value,
    address: address.value,
    phone: phone.value,
  });
}
