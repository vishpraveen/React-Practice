
import './App.css';
import DisplayClickCount from './component/DisplayClickCount';
import FriutsList from './component/FriutsList';
import Message from './component/Message';

function App() {
  return (
    <div>
      <Message name="Android" />
      {/* <FriutsList /> */}
      <DisplayClickCount />
    </div>
  );
}

export default App;
