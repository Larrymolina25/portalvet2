import React, { useState } from 'react';
import { Calendar, Activity, Shield } from 'lucide-react';

interface Vaccination {
  name: string;
  date: string;
  nextDue: string;
}

interface Deworming {
  name: string;
  date: string;
  nextDue: string;
}

interface Pet {
  id: number;
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  owner: string;
  lastVisit: string;
  image: string;
  vaccinations: Vaccination[];
  deworming: Deworming[];
}

interface PetCardProps {
  pet: Pet;
  isClientView?: boolean;
}

const PetCard: React.FC<PetCardProps> = ({ pet, isClientView = false }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{pet.name}</h3>
            <p className="text-sm text-gray-500">
              {pet.breed} • {pet.age} años
            </p>
          </div>
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md"
          >
            {showDetails ? 'Menos' : 'Más'}
          </button>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4 mr-2" />
          Última visita: {pet.lastVisit}
        </div>

        {showDetails && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-900 flex items-center mb-2">
                <Shield className="h-4 w-4 mr-2" />
                Vacunas
              </h4>
              <div className="space-y-2">
                {pet.vaccinations.map((vac, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium">{vac.name}</p>
                    <p className="text-gray-500">
                      Última: {vac.date} • Próxima: {vac.nextDue}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-gray-900 flex items-center mb-2">
                <Activity className="h-4 w-4 mr-2" />
                Desparasitación
              </h4>
              <div className="space-y-2">
                {pet.deworming.map((deworm, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-medium">{deworm.name}</p>
                    <p className="text-gray-500">
                      Última: {deworm.date} • Próxima: {deworm.nextDue}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {!isClientView && (
              <div className="pt-4 flex justify-end space-x-2">
                <button className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md">
                  Editar
                </button>
                <button className="px-3 py-1 text-sm text-red-600 hover:bg-red-50 rounded-md">
                  Eliminar
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCard;