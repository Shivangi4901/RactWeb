// import "./styles.css";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

export default function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 89)",
      text: "rgb(24 24 89)",
      white: "#fff",
      black: "#212159",
      helper: "#8490ff",
      bg: "rgb(232 255 255)",
      hover: "rgb(78 144 187)"
    },
    media: { mobile: "768px", tab: "998px" }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
