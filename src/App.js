import React, { useState } from 'react';
import { FoodForm } from './components/foodForm';
import { FoodList } from './components/foodList';

function App() {
  const [text, setText] = useState('');
  const [foods, setFoods] = useState([]);

  const removeFood = (id) => {
    const filter = foods.filter((food) => food.id !== id);

    setFoods(filter);
  };

  const searchFood = foods.filter((food) => food.name.toLowerCase().includes(text.toLowerCase()));

  return (
    <div className="app">
      <FoodForm setFoods={setFoods} foods={foods} text={text} setText={setText} />
      <FoodList foods={foods} remove={removeFood} text={text} searchFood={searchFood} />
    </div>
  );
}

export default App;
