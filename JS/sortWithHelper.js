const data = [
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245,
  },
];

function sortLibrary(data = []) {
  const sortedData = data.sort((a, b) => {
    if (a.title < b.title) return -1; // a should come before b
  });

  return sortedData;
}

sortLibrary(data);
