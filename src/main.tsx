import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home";
import { NotFound } from "./NotFound";
import { Login } from "./pages/login/Login";
import { UserProvider } from "./context/user";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
);
