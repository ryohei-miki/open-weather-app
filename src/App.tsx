import { Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/Root/Root";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
