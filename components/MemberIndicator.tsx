import React, { useState } from 'react';


interface Participant {
  name: string;
  role: string;
}

const ProjectParticipantForm = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [newParticipantRole, setNewParticipantRole] = useState<string>('');

  const addParticipant = () => {
    const participantName = `Participante ${participants.length + 1}`;
    if (newParticipantRole) {
      setParticipants([...participants, { name: participantName, role: newParticipantRole }]);
      setNewParticipantRole('');
    }
  };

  const roles = [
    'Back-End dev',
    'Front-End dev',
    'Software dev',
  ];

  const members = [];

  return (
    <section className="flex absolute ml-[23.2rem] mt-[11.5rem]">
      <div className='grid grid-cols-2 auto-rows-auto justify-center gap-20'>
        <div className='flex flex-col'>
          <h2 className='text-xl mt-4 '>Agregar Participante</h2>
          <label className='text-xs font-raleway font-light tracking-wide mt-2 ml-1'>Rol:</label>
          <select value={newParticipantRole} onChange={(e) => setNewParticipantRole(e.target.value)} className='flex justify-center w-80 h-10 rounded-md bg-gray-800 text-gray-50 p-1'>
            <option value="">Selecciona un rol</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          <div className='flex justify-center '>
           <button onClick={addParticipant} className='px-6 py-2 w-40 bg-purple-500 mt-4 rounded'>Agregar</button>
          </div>
        </div>
        <div className=''>
          <h2>Participantes</h2>
          <ul>
            {participants.map((participant, index) => {
              console.log(participants);
              return (
                <li key={index}>
                  {participant.name}: <strong>Rol:</strong> {participant.role}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectParticipantForm;
