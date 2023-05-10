import { Home, Job } from "./pages/index";
import { Footer, Navbar } from "./components/index";
import {
  BrowserRouter,
  Routes,
  Route,
} from "../node_modules/react-router-dom/dist/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<Job />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
