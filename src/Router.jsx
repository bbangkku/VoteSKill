import Main from 'pages/Main/Main';
import SignIn from 'pages/SignIn/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SignIn" element={<SignIn />} />

        <Route path="/lobby" />
        <Route path="/room/:roomId" />
        <Route path="/game/:gameId" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
