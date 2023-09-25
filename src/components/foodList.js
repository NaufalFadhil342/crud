import React, { useMemo } from 'react';

export const FoodList = (props) => {
  const { remove, searchFood } = props;

  const search = useMemo(() => {
    return searchFood;
  }, [searchFood]);

  const renderedFood = search.map((food) => {
    return (
      <li key={food.id}>
        <p>{food.name}</p>
        <button onClick={() => remove(food.id)}>X</button>
      </li>
    );
  });

  return (
    <div className="foodList">
      <h3>Your Favorit Foods</h3>
      <ul className="render">{renderedFood}</ul>
    </div>
  );
};
