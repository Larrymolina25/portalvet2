import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import PetCard from './PetCard';

const ClientDashboard: React.FC = () => {
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
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      petName: 'Max',
      date: '01/03/2024',
      time: '10:00',
      type: 'Vacunación'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Mis Mascotas</h1>
      </div>

      {/* Upcoming Appointments */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Próximas Citas</h2>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Calendar className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="font-medium text-gray-900">{appointment.petName}</p>
                  <p className="text-sm text-gray-500">{appointment.type}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="h-4 w-4" />
                <span>{appointment.date} a las {appointment.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} isClientView />
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;