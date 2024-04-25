import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loaders from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ProtectRoute = lazy(() => import("./components/auth/ProtectRoute"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminLogin = lazy(() => import("./pages/Admin/AdminLogin"));
const DashBoard = lazy(() => import("./pages/Admin/DashBoard"));
const ChatManagement = lazy(() => import("./pages/Admin/ChatManagement"));
const MessageManagement = lazy(() => import("./pages/Admin/MessageManagement"));
const UserManagement = lazy(() => import("./pages/Admin/UserManagement"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loaders />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<DashBoard />} />
          <Route path="/admin/chats-management" element={<ChatManagement />} />
          <Route
            path="/admin/messages-management"
            element={<MessageManagement />}
          />
          <Route path="/admin/users-management" element={<UserManagement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
