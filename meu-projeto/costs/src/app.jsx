import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/Project";
import Container from "./components/layout/Container";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>
      <Footer />
    </Router >
  )
}
