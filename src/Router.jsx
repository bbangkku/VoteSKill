import Main from 'pages/Main/Main';
import SignIn from 'pages/SignIn/SignIn';
import TestPage from 'pages/TestPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/lobby" />
        <Route path="/room/:roomId" />
        <Route path="/game/:gameId" />

        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
