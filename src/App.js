import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import React, {useState} from 'react';
import ModalWindow from './components/UI/ModalWindow';
import CartContextProvider from './store/CartContextProvider';

const MENU_LIST = [
  {
    id: 1, 
    name: 'Ролл "Наоми"',
    ingrediens: 'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: '11.99'
  },
  {
      id: 2, 
      name: 'Спайс в лососе',
      ingrediens: 'Рис, лосось, соус спайси',
      price: '3.99'
    },
  {
      id: 3, 
      name: 'Суши с угрем',
      ingrediens: 'Угорь копченый, соус унаги, кунжут',
      price: '4.99'
    },
]
function App() {
  const [busketState, setBusketState] = useState(false)
  const onShowBusket = (state)=>setBusketState(state)

  return (
      <CartContextProvider >
        <Header showBusket={onShowBusket} />
        <Menu  menuList={MENU_LIST}/>
        {busketState && <ModalWindow  showBusket={onShowBusket}/>}
      </CartContextProvider>
    
  );
}

export default App;
