import { Routes, Route } from "react-router-dom";
import React from "react";

import Header from "./components/Header";
import "./scss/app.scss";
import Home from "./pages/Home";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound";

function App() {
  const [searchValue,setSearchValue]=React.useState("")//стейт который хранит поле поиска
  return (
    <div className="wrapper">
      <Header searchValue={searchValue}setSearchValue={setSearchValue}/> 
      <div className="content">
     
          <Routes>
            {/*логика react route */}
            <Route path="/" element={<Home searchValue={searchValue}/>} />{" "}
            {/*если указан "/" то рендери Home*/}
            <Route path="/cart" element={<Cart />} /> {/* */}
            <Route path="*" element={<NotFound />} />
            {/* "*"это значит если один из этих роутеров не подойдёт то это последний что подошло  NotFound/>*/}
          </Routes>
        </div>
      </div>
   
  );
}

export default App;

// <PizzaBlock
//   key={obj.id}
//   title={obj.title}
//   price={obj.price}
//   image={obj.imageUrl}
//   sizes={obj.sizes}
//   types={obj.types}
// /> //можно так а можно и если увереная что будут точно такие объекты по корече {...obj}/>)
