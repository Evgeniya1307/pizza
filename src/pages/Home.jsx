import React from 'react'

import Skeleton from '../components/PizzaBlock/Sceleton';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';
import Categories from '../components/Categories';

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
   React.useEffect(() => {
      fetch("https://62b41f5aa36f3a973d2c669d.mockapi.io/items")
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false)
        });
    }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;