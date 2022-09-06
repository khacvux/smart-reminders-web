import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";


function App() {
  return (
    <div className=" h-screen w-screen bg-light overflow-hidden flex flex-col">
      {/* <Header /> */}
      <Routes>
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
