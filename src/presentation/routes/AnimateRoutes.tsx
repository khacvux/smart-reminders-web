import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NewCategoryPage from "../pages/NewCategoryPage";
import NotesPage from "../pages/NotesPage";

export default function AnimateAuthRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/new-category" element={<NewCategoryPage />} />
      </Routes>
    </AnimatePresence>
  );
}
