import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {

  const [formData, setFromData] = useState(
    {
      "id": "",
      "name": "",
      "image": "",
      "price": ""
    }
  )

  function handleOnChange(e){
    setFromData({...formData, [e.target.name] : e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    addNewPlant(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={handleOnChange} type="text" name="name" placeholder="Plant name" />
        <input value={formData.image}onChange={handleOnChange} type="text" name="image" placeholder="Image URL" />
        <input value={formData.price}onChange={handleOnChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
