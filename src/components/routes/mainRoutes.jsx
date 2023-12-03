import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ContactUs from "../pages/contact-us/ContactUs";
import Enrollment from "../pages/enrollment/Enrollment";

export const mainRoutes = [
  {
    name: "Home",
    path: "/*",
    element: <Home />,
  },
  {
    name: "About",
    path: "/about/*",
    element: <About />,
  },
  {
    name: "Enrollment",
    path: "/enrollment/*",
    element: <Enrollment />,
  },
  {
    name: "Contact Us",
    path: "/contact-us/*",
    element: <ContactUs />,
  },
];
