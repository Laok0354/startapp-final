import React, { useState, useEffect } from "react";
import { Participant } from "./Participant";

const ProjectParticipantForm = ({
  participants,
  setParticipants
}: {
  participants: Participant[];
  setParticipants: React.Dispatch<React.SetStateAction<Participant[]>>;
}) => {
  const [newParticipantRole, setNewParticipantRole] = useState<string>("");

  const addParticipant = () => {
    const participantName = `Member ${participants.length + 1}`;
    if (newParticipantRole) {
      const newParticipant = {
        name: participantName,
        skill: newParticipantRole,
      };
      setParticipants((participants) => [...participants, newParticipant]);
      setNewParticipantRole("");
    }
  };

  const roles = ["Back-End dev", "Front-End dev", "Software dev"];

  return (
    <section className="flex absolute ml-[23.2rem] mt-[7rem] ">
      <div className="grid grid-cols-2 auto-rows-auto justify-center gap-20">
        <div className="flex flex-col">
          <h2 className="text-xl mt-[6rem] ">Add Members</h2>
          <label className="text-xs font-raleway font-light tracking-wide mt-2 ml-1">
            Skill:
          </label>
          <select
            value={newParticipantRole}
            onChange={(e) => setNewParticipantRole(e.target.value)}
            className="flex justify-center w-80 h-10 rounded-md bg-gray-700 text-gray-50 p-1"
          >
            <option value="">Select a Skill</option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          <div className="flex justify-center ">
            <button
              onClick={addParticipant}
              className="px-6 py-2 w-36 bg-purple-500 mt-4 rounded-md"
            >
              Add Member
            </button>
          </div>
        </div>
        <div className="">
          <h2 className="">Members</h2>
          <ul>
            {participants.map((participant, index) => {
              return (
                <li key={index}>
                  {participant.name}: <strong>Skill:</strong> {participant.skill}
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
