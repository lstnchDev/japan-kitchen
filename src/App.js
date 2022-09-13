import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import React, {useState} from 'react';

const MENU_LIST = [
  {
    id: '1', 
    name: 'Ролл "Наоми"',
    ingrediens: 'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: '$11.99'
  },
  {
      id: '2', 
      name: 'Спайс в лососе',
      ingrediens: 'Рис, лосось, соус спайси',
      price: '$3.99'
    },
  {
      id: '3', 
      name: 'Суши с угрем',
      ingrediens: 'Угорь копченый, соус унаги, кунжут',
      price: '$4.99'
    },
]
function App() {
  return (
    <div className="App">
        <Header />
        <Menu menuList={MENU_LIST}/>
    </div>
  );
}

export default App;
