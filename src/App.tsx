import React, { useState, ReactElement } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import components

import QuestionaryStepForm from './components/questionary/QuestionaryStepForm.jsx';
import RegistrationForm from './components/registration/RegistrationForm.jsx';
import LoginForm from './components/login/LoginForm.jsx';
import Index from './components/index/Index.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import OtherPage from './pages/profile/OtherPage.jsx';
import OrganizationsPage from './pages/profile/OrganizationsPage.jsx';
import EducationPage from './pages/profile/EducationPage.jsx';
import SchedulePage from './pages/profile/SchedulePage.jsx';
import StatisticPage from './pages/profile/StatisticPage.jsx';
import ClientsPage from './pages/profile/ClientsPage.jsx';
import SessionsPage from './pages/profile/SessionsPage.jsx';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

// Import context
import { MenuContext} from './components/menu/MenuContext.jsx';

function App(): ReactElement {
  const mmLogin = true;

  const [isLoggedIn] = useState<boolean>(mmLogin ? true : false);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenuMobile = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContext.Provider value={{isMenuOpen, toggleMenuMobile}}>
      <div className="wrapper">
        <Header />
        <main className="main">
          {isLoggedIn && <Sidebar />}
          <div className="main__content">
            <div className="main__container container">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="login" element={<LoginForm />} />
                  <Route path="/registration">
                    <Route index element={<RegistrationForm />} />
                    <Route path="questionary" element={<QuestionaryStepForm />} />
                  </Route>
                  <Route
                    path="/sessions"
                    element={isLoggedIn ? <SessionsPage /> : <Navigate to="/clients" />}
                  />
                  <Route path="/profile">
                    <Route
                      index
                      element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />}
                    />
                    <Route
                      path="other"
                      element={isLoggedIn ? <OtherPage /> : <Navigate to="/login" />}
                    />
                    <Route
                      path="organizations"
                      element={isLoggedIn ? <OrganizationsPage /> : <Navigate to="/login" />}
                    />
                    <Route
                      path="education"
                      element={isLoggedIn ? <EducationPage /> : <Navigate to="/login" />}
                    />
                  </Route>
                  <Route
                    path="/schedule"
                    element={isLoggedIn ? <SchedulePage /> : <Navigate to="/login" />}
                  />
                  <Route
                    path="/clients"
                    element={isLoggedIn ? <ClientsPage /> : <Navigate to="/clients" />}
                  />
                  <Route
                    path="/statistics"
                    element={isLoggedIn ? <StatisticPage /> : <Navigate to="/login" />}
                  />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </MenuContext.Provider>
  );
}

export default App;