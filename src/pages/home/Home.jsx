import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Food_Display from '../../components/Food_Display/Food_Display';

const Home = () => {

  const [category,setCategory] = useState('All');


  return (
    <div>
        <Header/>
        <ExploreMenu category ={category} setCategory = {setCategory}/>
        <Food_Display category = {category}/>
    </div>
  )
}

export default Home