let db;

let name = document.querySelector('#name');
let address = document.querySelector('#add');
let phone = document.querySelector('#ph');
let btn = document.querySelector('button');
let request = indexedDB.open('employees', 1);
let userData = {};

request.onsuccess = (e) => {
  db = request.result;
  console.log('Database opened successfully');
};

request.onerror = (e) => {
  console.error('Database error:', e.target.errorCode);
};

request.onupgradeneeded = (e) => {
  db = request.result;
  db.createObjectStore('employee', { keyPath: 'eId' });
  console.log('Object store created');
};

btn.addEventListener('click', () => {
  addEmployee();
});

function addEmployee() {
  let tx = db.transaction('employee', 'readwrite');
  let store = tx.objectStore('employee');
  let employeeData = {
    eId: Date.now(),
    name: name.value,
    address: address.value,
    phone: phone.value,
  };

  let request = store.add(employeeData);

  request.onsuccess = () => {
    console.log('Employee added to the database successfully');
    console.log(employeeData);
  };

  request.onerror = (e) => {
    console.error('Error adding employee to the database:', e.target.errorCode);
  };
}
