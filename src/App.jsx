import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Slide from './components/Slide/Slide'
import CardSection from './components/Main/Main1/MainContent1'
import ProductList from './components/Main/Main2/MainContent2'
import MainContent3 from './components/Main/Main3/MainContent3'
import MainContent4 from './components/Main/Main4/MainContent4'
import Footer from './components/Footer/Footer'

function App() {
  return (
  <>
  <Header/>
<Slide/>
<CardSection/>
<ProductList/>
<MainContent3/>
<MainContent4/>
<Footer/>
  </>
  )
}

export default App