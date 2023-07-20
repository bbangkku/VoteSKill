import Main from 'pages/Main/Main';
import SignIn from 'pages/SignIn/SignIn';
import Waiting from 'pages/WaitingRoom/Waiting';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lobby" />
        {/* <Route path="/room/:roomId" element={<Waiting />} /> */}
        <Route path="/room" element={<Waiting />} />

        <Route path="/game/:gameId" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
