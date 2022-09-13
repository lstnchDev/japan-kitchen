import './App.css';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';
import React, {useState} from 'react';
import ModalWindow from './components/UI/ModalWindow';

const MENU_LIST = [
  {
    id: '1', 
    name: 'Ролл "Наоми"',
    ingrediens: 'Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут',
    price: '11.99'
  },
  {
      id: '2', 
      name: 'Спайс в лососе',
      ingrediens: 'Рис, лосось, соус спайси',
      price: '3.99'
    },
  {
      id: '3', 
      name: 'Суши с угрем',
      ingrediens: 'Угорь копченый, соус унаги, кунжут',
      price: '4.99'
    },
]
function App() {
  const [menu, setOrderMenu] = useState("")
  const [busketState, setBusketState] = useState(false)

  const onAddMenuHandler = (orderMenu)=>{
      setOrderMenu((prevMenu)=>{
        return [orderMenu, ...prevMenu]
      })
  }
  const onShowBusket = (state)=>{
      setBusketState(state)
  }
  const modal = busketState ? <ModalWindow menu={menu} showBusket={onShowBusket}/> : null
  return (
    <div className="App">
        <Header showBusket={onShowBusket} menu={menu}/>
        <Menu onAddMenu={onAddMenuHandler} menuList={MENU_LIST}/>
        {modal}
    </div>
  );
}

export default App;
