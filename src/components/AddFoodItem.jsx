import React, { useState } from 'react';
import { Input } from 'antd';

function AddFoodItem(props) {
  const { FunctionAddFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  //Handler functions

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };
    FunctionAddFood(newFood);
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
    alert(`created: ${name}`);
  };

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.checked);

  return (
    <div>
      <h4>Add Food</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <Input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="image">image</label>
        <Input type="text" name="image" value={image} onChange={handleImage} />

        <label htmlFor="calories">calories</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <label htmlFor="servings">servings</label>
        <Input
          type="number"
          name="servings"
          checked={servings}
          onChange={handleServings}
        />

        <button type="submit">Create Food</button>
      </form>
    </div>
  );
}

export default AddFoodItem;
