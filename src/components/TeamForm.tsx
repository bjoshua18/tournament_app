'use client';

import React, {useState} from 'react';
import axios from 'axios';
import TeamFormInput from './TeamFormInput';
import {TeamRequest} from '@/schemas';
import {useRouter} from "next/navigation";

export default function TeamForm() {
  const [teamData, setTeamData] = useState<TeamRequest>({
    category: '',
    player1: {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      shirtSize: '',
      availability: ''
    },
    player2: {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      shirtSize: '',
      availability: ''
    }
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    fieldName: string,
    player?: 'player1' | 'player2'
  ) => {
    const {value} = event.target;

    if (!player) {
      if (fieldName === 'category') {
        setTeamData({
          ...teamData,
          [fieldName]: value
        });
      }
      return;
    }

    setTeamData({
      ...teamData,
      [player]: {
        ...teamData[player],
        [fieldName]: value
      }
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, player: 'player1' | 'player2') => {
    const {name, value} = event.target;
    setTeamData({
      ...teamData,
      [player]: {
        ...teamData[player],
        [name]: value
      }
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(teamData);
    try {
      const team = await axios({
        method: 'POST',
        url: '/api/teams',
        data: teamData,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('RESPONSE', team);
      router.push('/teams');
    } catch (error) {
      setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    }
  }

  return (
    <form className="w-10/12 md:w-8/12 mx-auto mt-4 mb-8 p-4 bg-gray-100 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <select
          id="category"
          name="category"
          onChange={e => handleSelectChange(e, 'category')}
          value={teamData.category}
          className="mt-1 mb-4 sm:w-48 md:w-64 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
          required
        >
          <option value="" disabled hidden>Categoría</option>
          <option value="second-male">2ª Masculino</option>
          <option value="third-male">3ª Masculino</option>
          <option value="fourth-male">4ª Masculino</option>
          <option value="second-female">2ª Femenino</option>
          <option value="third-female">3ª Femenino</option>
          <option value="fourth-female">4ª Femenino</option>
          <option value="third-mix">3ª Mixto</option>
          <option value="fourth-mix">4ª Mixto</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* JUGADOR 1 */}

        <div className="my-4">
          <h3 className="text-lg md:text-xl font-medium mb-1">Jugador/a 1</h3>
          <TeamFormInput
            type="text"
            id="name1"
            name="name"
            value={teamData.player1.name}
            onChange={e => handleInputChange(e, 'player1')}
            placeholder="Nombre"
            required
          />
          <TeamFormInput
            type="text"
            id="lastname1"
            name="lastname"
            value={teamData.player1.lastname}
            onChange={e => handleInputChange(e, 'player1')}
            placeholder="Apellido"
            required
          />
          <TeamFormInput
            type="tel"
            id="phone1"
            name="phone"
            value={teamData.player1.phone}
            onChange={e => handleInputChange(e, 'player1')}
            placeholder="Teléfono"
            required
          />
          <TeamFormInput
            type="email"
            id="email1"
            name="email"
            value={teamData.player1.email}
            onChange={e => handleInputChange(e, 'player1')}
            placeholder="Correo electrónico"
            required
          />
          <select
            id="shirtSize1"
            name="shirtSize"
            value={teamData.player1.shirtSize}
            onChange={e => handleSelectChange(e, 'shirtSize', 'player1')}
            className="my-4 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
            required
          >
            <option value="" disabled hidden>Talla de camiseta</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
          <textarea
            id="availability1"
            name="availability"
            placeholder="Disponibilidad - Ej: Lunes y martes por la tarde, jueves por la mañana"
            value={teamData.player1.availability}
            onChange={e => handleInputChange(e, 'player1')}
            className="my-4 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
            required
          />
        </div>

        {/* JUGADOR 2 */}

        <div className="my-4">
          <h3 className="text-lg md:text-xl font-medium mb-1">Jugador/a 2</h3>
          <TeamFormInput
            type="text"
            id="name2"
            name="name"
            value={teamData.player2.name}
            onChange={e => handleInputChange(e, 'player2')}
            placeholder="Nombre"
            required
          />
          <TeamFormInput
            type="text"
            id="lastname2"
            name="lastname"
            value={teamData.player2.lastname}
            onChange={e => handleInputChange(e, 'player2')}
            placeholder="Apellido"
            required
          />
          <TeamFormInput
            type="tel"
            id="phone2"
            name="phone"
            value={teamData.player2.phone}
            onChange={e => handleInputChange(e, 'player2')}
            placeholder="Teléfono"
            required
          />
          <TeamFormInput
            type="email"
            id="email2"
            name="email"
            value={teamData.player2.email}
            onChange={e => handleInputChange(e, 'player2')}
            placeholder="Correo electrónico"
            required
          />
          <select
            id="shirtSize2"
            name="shirtSize"
            value={teamData.player2.shirtSize}
            onChange={e => handleSelectChange(e, 'shirtSize', 'player2')}
            className="my-4 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
            required
          >
            <option value="" disabled hidden>Talla de camiseta</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            <option value="xxl">XXL</option>
          </select>
          <textarea
            id="availability2"
            name="availability"
            placeholder="Disponibilidad - Ej: Lunes y martes por la tarde, jueves por la mañana"
            value={teamData.player2.availability}
            onChange={e => handleInputChange(e, 'player2')}
            className="my-4 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:text-base"
            required
          />
        </div>
      </div>

      <div className="flex justify-center">
        <button type="submit"
                className="w-full sm:w-48 md:w-64 my-4 py-4 px-4 rounded bg-brandPrimary hover:bg-brandSecondary text-white font-semibold">
          Enviar
        </button>
      </div>
    </form>
  );
}