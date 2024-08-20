import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import { AuthProvider, FavoriteProvider, MovieProvider } from "./store";

function App() {
  const Routes = () => useRoutes(routes);
  return (
    <AuthProvider>
      <BrowserRouter>
        <FavoriteProvider>
          <MovieProvider>
            <Routes />
          </MovieProvider>
        </FavoriteProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
