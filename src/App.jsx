import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import PageLayout from "./components/PageLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<PageLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
