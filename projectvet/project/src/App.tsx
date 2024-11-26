import React from 'react';
import { useState } from 'react';
import { Stethoscope, PawPrint, User, Lock, Menu } from 'lucide-react';
import Login from './components/Login';
import VetDashboard from './components/VetDashboard';
import ClientDashboard from './components/ClientDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'vet' | 'client' | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogin = (type: 'vet' | 'client') => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Stethoscope className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Portal Veterinario</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500">
                  <User className="h-4 w-4 mr-2" />
                  Perfil
                </button>
                <button 
                  onClick={() => {
                    setIsLoggedIn(false);
                    setUserType(null);
                  }}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-indigo-500"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 w-full">
                <User className="h-4 w-4 mr-2" />
                Perfil
              </button>
              <button 
                onClick={() => {
                  setIsLoggedIn(false);
                  setUserType(null);
                }}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 w-full"
              >
                <Lock className="h-4 w-4 mr-2" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userType === 'vet' ? <VetDashboard /> : <ClientDashboard />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <PawPrint className="h-6 w-6" />
              <span className="ml-2 text-sm">© 2024 Portal Veterinario</span>
            </div>
            <div className="text-sm">
              <a href="#" className="hover:text-indigo-400">Política de Privacidad</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-indigo-400">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;