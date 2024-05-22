
import './App.css';
import React from "react";
import DisplayClickCount from './components/DisplayClickCount';
import FriutsList from './components/FriutsList';
import Hello from './components/Hello';
import Message from './components/Message';
import UserForm from './components/UserForm';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div>
      <Hello />
      <Message data="Some data" />
      <ProductsList />
      {/* <FriutsList /> */}
      {/* <DisplayClickCount /> */}
      {/* <UserForm /> */}

    </div>
  );
}

export default App;
