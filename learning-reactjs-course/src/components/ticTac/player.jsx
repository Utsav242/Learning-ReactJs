import { useState } from "react";

const Player = ({ initialName, symbol,isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
const [playerName, setPlayerName] = useState(initialName);

  const handleEdit = () => {
    setIsEditing((editing) => !editing);
  };
const handleChange=(event)=>{
    setPlayerName(event.target.value)
}

  let editablePlayerName = (
    <span className="player-name">
     {playerName}
    </span>
  );
  if (isEditing) {
    editablePlayerName = <input type="text" value={playerName} onChange={handleChange} required />;
  }

  return (
    <>
      <li className={isActive ? 'active' : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEdit}>{isEditing ? "save" : "edit"}</button>
      </li>
    </>
  );
};

export default Player;
