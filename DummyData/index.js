const data1 = [
  {
    _id: 101,
    userId: 1,
    amount: 250,
    status: 'delivered',
    items: ['pen', 'notebook'],
  },
  { _id: 102, userId: 1, amount: 120, status: 'pending', items: ['stapler'] },
  {
    _id: 103,
    userId: 2,
    amount: 550,
    status: 'cancelled',
    items: ['mouse', 'keyboard'],
  },
  { _id: 104, userId: 3, amount: 90, status: 'delivered', items: ['eraser'] },
];

const invoices = [
  {
    id: 201,
    customerId: 10,
    total: 1500,
    status: 'paid',
    items: ['monitor', 'cable'],
  },
  {
    id: 202,
    customerId: 11,
    total: 2300,
    status: 'unpaid',
    items: ['laptop'],
  },
  {
    id: 203,
    customerId: 10,
    total: 600,
    status: 'paid',
    items: ['keyboard', 'mouse'],
  },
  {
    id: 204,
    customerId: 12,
    total: 800,
    status: 'cancelled',
    items: ['webcam'],
  },
];

const bookings = [
  {
    id: 301,
    userId: 21,
    amount: 1200,
    status: 'confirmed',
    services: ['spa', 'dinner'],
  },
  {
    id: 302,
    userId: 22,
    amount: 3000,
    status: 'pending',
    services: ['room', 'breakfast'],
  },
  {
    id: 303,
    userId: 23,
    amount: 1500,
    status: 'cancelled',
    services: ['airport pickup'],
  },
  {
    id: 304,
    userId: 21,
    amount: 2200,
    status: 'confirmed',
    services: ['room', 'dinner'],
  },
];

db.orders.aggregate([
  {
    $group: {
      _id: '$userId', // Group by userId
      totalOrders: { $sum: 1 }, // Count number of orders per userId
    },
  },
]);
// [
//   ({ _id: 1, totalOrders: 2 },
//   { _id: 2, totalOrders: 1 },
//   { _id: 3, totalOrders: 1 })
// ];

const users = [
  {
    id: 1,
    name: 'Alice',
    age: 28,
    email: 'alice@example.com',
    isActive: false,
  },
  { id: 2, name: 'Bob', age: 34, email: 'bob@example.com', isActive: true },
  {
    id: 3,
    name: 'Charlie',
    age: 22,
    email: 'charlie@example.com',
    isActive: true,
  },
  {
    id: 4,
    name: 'Daisy',
    age: 45,
    email: 'daisy@example.com',
    isActive: false,
  },
  { id: 5, name: 'Ram', age: 24, email: 'ram@example.com', isActive: true },
];
