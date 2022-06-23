import React,{useState} from 'react';



function Categories(){
  const [activeIndex, setActiveIndex] =useState(0)

const categories=['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']

    const onClickCategory=(index)=>{
      setActiveIndex(index)
    }
  return(
      <div className="categories">
      <ul>

{categories.map((value,index)=><li onClick={()=> onClickCategory(0)} className={activeIndex===0 ? "active" : ""}>{value}</li>)} </ul>
      
    </div>
    )
  }
  
  export default Categories;