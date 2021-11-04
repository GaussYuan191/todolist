import Header from './components/Header/Header'
import List from './components/List/List'
import Item from './components/Item/Item'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <List>
         <Item></Item>
      </List>
      <Footer></Footer>
    </div>

  );
}

export default App;
