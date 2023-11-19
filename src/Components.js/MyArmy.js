import React from "react";
import { useEffect, useState } from "react";

function MyArmy () {
    const [selectedBots, setSelectedBots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/selectedBots')
        .then(res => res.json())
        .then(data => {
            setSelectedBots(data);
        })
    }, [])
    
   function handleRemoveFromMyArmy(id) {
    console.log("Removing bot with ID:", id);

    fetch(`http://localhost:3002/selectedBots/${id}`, {
        method: "DELETE",
    })
    .then((res) => {
        if (res.ok) {
          setSelectedBots((prevSelectedBots) =>
            prevSelectedBots.filter((bot) => bot.id !== id)
          );
        } else {
          console.error("Failed to remove bot from MyArmy");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      }); 
   }

   return (
    <div className="container mt-3">
    <h5 className="text-center mb-3 text-uppercase">My Army</h5>
    <div className="card shadow rounded p-3">
      {selectedBots.map((bot) => (
        <div key={bot.id} className="card mb-3 shadow-sm rounded">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={bot.avatar_url} className="img-fluid rounded-start" alt={bot.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Class: {bot.bot_class}</p>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <button
                  className="btn btn-danger"
                  onClick={ () => handleRemoveFromMyArmy(bot.id)}
                >
                  Remove from MyArmy
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    )
}

export default MyArmy;