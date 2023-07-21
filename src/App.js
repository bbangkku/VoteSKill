import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from 'Router';
import { RecoilRoot } from 'recoil';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </div>
  );
}

export default App;
