import { Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/Root/Root";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import WeatherForecast from "./pages/WeatherForecast/WeatherForecast";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/weather/:key" element={<WeatherForecast />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
