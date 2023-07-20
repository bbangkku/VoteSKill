import Router from 'Router';
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
