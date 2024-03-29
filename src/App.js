import './App.scss';
import InviteCard from './components/inviteCard';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InviteCard />} />
      </Routes>
    </div>
  );
}

export default App;
