import React from 'react';

export const FoodForm = (props) => {
  const { text, setText, foods, setFoods } = props;

  const changeText = (e) => {
    setText(e.target.value);
  };

  const onClickFood = (e) => {
    e.preventDefault();

    if (foods.some((food) => food.name.toLowerCase() === text.toLowerCase())) {
      alert('This food already existed!');
    } else {
      const food = {
        id: foods.length === 0 ? 1 : foods[foods.length - 1].id + 1,
        name: text,
      };

      setFoods([...foods, food]);
    }
    setText('');
  };

  return (
    <div className="foodForm">
      <form>
        <div className="food">
          <label htmlFor="food">Your Food</label>
          <input type="text" id="food" value={text} onChange={changeText} />
        </div>
        <button type="submit" onClick={onClickFood}>
          Submit
        </button>
      </form>
    </div>
  );
};
