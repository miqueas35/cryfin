import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              
                <Home />
              
            }
          />
          {/* <Route
            path="coin/:coinId"
            element={
              <ProtectedRoutes>
                <CoinScreen />
              </ProtectedRoutes>
            }
          />
          <Route path="login" element={<LoginScreen />} />
          <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default App;
  