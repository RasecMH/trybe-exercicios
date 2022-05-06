import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const arrayTasks = ['Estudar', 'Trabalhar', 'Dormir'];

// const task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

function App() {
  return (
    <div>
    <Header />
    <Content />
    <Footer />
    </div>
  );
}

console.log(Content);
// function App() {
//   return (
//     arrayTasks.map((tasks) => task(tasks))
//   );
// }

export default App;
