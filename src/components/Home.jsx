import React, {useState} from 'react'
import Moviecard from './inHomeComponent/Moviecard'
import Modal from './inHomeComponent/Modal'

const Home = () => {
  const[isOpenModal, setIsOpenModal] = useState(false)
  const [modalData, setModelData] = useState(null)
  function handleModal (data){
    setIsOpenModal(isOpenModal==false? true : false)
    console.log(data)
    setModelData(data)
  }
  return (
    <>
    <div className='p-5 flex flex-wrap content-center justify-center gap-5 bg-[#030812] mt-11'>
    <Moviecard handleModal={handleModal}/></div>
    
    {isOpenModal && (
        <>
          <div className='w-[100vw] h-[100vh] fixed top-0 left-0 backdrop-blur-lg z-10'></div>
          <div className='w-[100vw] h-[100vh] flex items-center justify-center fixed top-0 z-20'>
            <Modal modalData={modalData} handleModal={handleModal}/>
          </div>
        </>
      )}
    </>
  )
}

export default Home