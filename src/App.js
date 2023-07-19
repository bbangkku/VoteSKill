import GlobalStyle from 'styles/globalStyle';
import Router from 'Router';
import './App.css';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </div>
  );
}

export default App;
