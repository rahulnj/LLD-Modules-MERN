const element = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading', key: 1 }, 'Hello World!'),
    React.createElement('h1', { id: 'heading', key: 2 }, 'Hello World!'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
