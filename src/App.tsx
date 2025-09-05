import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <h1>Hello World</h1>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
