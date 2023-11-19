import React from "react";
import { useEffect, useState } from "react";


function BotCollection () {
    const [bots, setBots] = useState([]);
    const [selectedClass, setSelectedClass] = useState("All");
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/bots')
        .then(res => res.json())
        .then(data => {
            setBots(data);
            setClasses(data)
        })
    }, [])

    const handleClassChange = (event) => {
        const selectedClass = event.target.value;
        setSelectedClass(selectedClass);

        if (selectedClass === "All") {
            setBots(classes);
        } else {
            const filteredBots = classes.filter((bot) => bot.bot_class === selectedClass);
            setBots(filteredBots);
        }
    }

    
    
    const handleAddToMyArmy = (botId) => {
     const selectedBot = bots.find((bot) => bot.id === botId);
     const botData = {...selectedBot}
     
      fetch('http://localhost:3002/selectedBots', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(botData)
      })
      .then(res => res.json())
      .then(data => {
        console.log("Bot added:", data)

        const updatedBots = bots.map((bot) => 
          bot.id === botId ? { ...bot, addedToMyArmy: true } : bot
        )
        setBots(updatedBots)
      })


    }

    const handleRemoveFromBotCollection = (id) => {

      fetch(`http://localhost:3001/bots/${id}`, {
        method: "DELETE"
      })
      .then((res) => {
        if (res.ok) { 
          setBots((prevBots) => 
          prevBots.filter((bot) => bot.id !== id)
          )
        } else {
          console.error("Failed to remove bot from BotCollection");
        }
      })
    }

    
   

    return (
      <div className="container" style={{ maxWidth: '1500px', margin: '0 auto', padding: '20px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h5 className="text-center mt-3 mb-3 text-uppercase">Bot Collection</h5>
      <div className="text-center mb-4">
      <label htmlFor="class" className="mr-2" style={{ display: 'block', fontSize: '1.2rem' }} > Class: </label>
      <select id="class" onChange={handleClassChange} style={{ width: '200px', padding: '0.5rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc', backgroundColor: 'lightgray' }} >
        <option value="All">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Witch">Witch</option>
        <option value="Defender">Defender</option>
        <option value="Assault">Assault</option>
        <option value="Captain">Captain</option>
      </select>
    </div>
    <div className="row">
    {bots.map((bot) => (
      <div key={bot.id} className="col-md-3 mb-4">
        <div className="card h-80 bg-success shadow-sm">
          <img
            src={bot.avatar_url}
            alt={bot.name}
            className="card-img-top img-fluid rounded-start"
          />
          <div className="card-body">
            <h5 className="card-title mb-2 text-white">{bot.name}</h5>
            <p className="card-text mb-1">
              <small className="text-white">{bot.bot_class}</small>
            </p>
            <p className="card-text text-white mb-1">Damage: {bot.damage}</p>
            <p className="card-text text-white mb-1">Health: {bot.health}</p>
            <p className="card-text text-white mb-1">Armor: {bot.armor}</p>
            <p className="card-text">
              <small className="text-white">
                Created At: {bot.created_at}
              </small>
            </p>
            <p className="card-body d-flex">
              <small className="text-white">
                Updated At: {bot.updated_at}
              </small>
            </p>
            <div>
              <button
                className={`btn ${ bot.addedToMyArmy ? "btn-warning" : "btn-light"} mr-2 mt-3`}
                onClick={() => handleAddToMyArmy(bot.id)}
                >
                {bot.addedToMyArmy ? "Added to MyArmy" : "Add to MyArmy"}
              </button>
            </div>
            <div>
              <button
                className={`btn ${bot.addedToMyArmy ? "btn-outline-danger" : "btn-danger"}  mt-3`}
                onClick={() => handleRemoveFromBotCollection(bot.id)}
                >
                {bot.addedToMyArmy ? "Remove!" : "Remove!"}
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

export default BotCollection;