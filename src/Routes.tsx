import Home from "./pages/Home/Home";
import Direct from "./pages/DM/DM";
// import Profile from "pages/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/common/Header/Header";
import { useAppSelector } from "./redux/Hooks";

const AppRoutes = () => {
  const isLogin = useAppSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      {isLogin ? (
        <Routes>
          <Route path="/" element={<AuthedContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/error" element={<h1>404 Page</h1>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

const AuthedContainer = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/direct" element={<Direct />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
