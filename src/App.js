
import './App.css';
import DisplayClickCount from './component/DisplayClickCount';
import FriutsList from './component/FriutsList';
import Message from './component/Message';
import UserForm from './component/UserForm';

function App() {
  return (
    <div>
      <Message name="Android" />
      {/* <FriutsList /> */}
      {/* <DisplayClickCount /> */}
      <UserForm />
    </div>
  );
}

export default App;
