import React, { useContext, useEffect } from 'react'
import Pagination from './components/Pagination'
import Blogs from './components/Blogs'
import Header from './components/Header'
import Spinner from './components/Spinner'
import { AppContext } from './context/AppContext'

function App() {
  const{fetchData} = useContext(AppContext)
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='flex flex-col items-center w-[100vw] h-100vh text-xs sm:text-base'>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination/>
    </div>
  )
}

export default App;
