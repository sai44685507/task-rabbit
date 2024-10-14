import React from 'react'

const Upload = () => {
  const valid = () =>{
     
  }
  return (
    <div>
      <form className='upload'>
      <div>
        Upload a photo: <input type="file" id="photo" required></input>
      </div>
      <div>
        <button onClick={valid}></button>
      </div>
      </form>
    </div>
  )
}

export default Upload
