import { Button } from '@mui/material'
import React from 'react'
import ShowModal from './showModal';

const Modal = () => {

    const[modal,setModal]= React.useState(false);

    const MyModal = ()=>{
        return(
            <>
            <h2>Stay Tuned</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sapiente corrupti totam consectetur eaque nisi sunt et iure possimus, molestias magnam illo quo delectus quae quasi voluptatem porro repellendus facilis?
            </p>
            
            </>
        )
    }

  return (
    <>
    
    
    <Button>
        Open
    </Button>
    {ShowModal && <MyModal/>}
    
    
    </>
  )
}

export default Modal