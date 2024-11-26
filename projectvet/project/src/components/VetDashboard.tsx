import React, { useState } from 'react';
import { Search, Plus, Filter } from 'lucide-react';
import PetCard from './PetCard';
import AddPetModal from './AddPetModal';

const VetDashboard: React.FC = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for demonstration
  const pets = [
    {
      id: 1,
      name: 'Max',
      species: 'Perro',
      breed: 'Golden Retriever',
      age: 3,
      color: 'Dorado',
      owner: 'Juan Pérez',
      lastVisit: '15/02/2024',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=724&q=80',
      vaccinations: [
        { name: 'Rabia', date: '01/12/2023', nextDue: '01/12/2024' },
        { name: 'Múltiple', date: '15/11/2023', nextDue: '15/11/2024' }
      ],
      deworming: [
        { name: 'Heartgard Plus', date: '15/01/2024', nextDue: '15/02/2024' }
      ]
    },
    {
      id: 2,
      name: 'Luna',
      species: 'Gato',
      breed: 'Siamés',
      age: 2,
      color: 'Crema',
      owner: 'María García',
      lastVisit: '10/02/2024',
      image: 'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      vaccinations: [
        { name: 'Triple Felina', date: '01/10/2023', nextDue: '01/10/2024' }
      ],
      deworming: [
        { name: 'Revolution Plus', date: '01/02/2024', nextDue: '01/03/2024' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Panel Veterinario</h1>
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar Mascota
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar mascotas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Filter className="h-4 w-4 mr-2" />
          Filtrar
        </button>
      </div>

      {/* Pet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>

      {/* Add Pet Modal */}
      {isAddModalOpen && (
        <AddPetModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </div>
  );
};

export default VetDashboard;