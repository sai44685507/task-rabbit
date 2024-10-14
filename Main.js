import React from 'react'
import App from './App'
import UserProfiles from './UserProfiles'
import Upload from './Upload'
import TaskManagement from './TaskManagement'
import Layout from './Layout'
import {Routes,Route} from "react-router-dom";
function Main() {
  return (
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route path="App" element = {<App/>}/>
          <Route path="upload" element = {<Upload/>}/>
          <Route path="Userprofiles" element = {<UserProfiles/>}/>
          <Route path="TasManagement" element = {<TaskManagement/>}/>
        </Route>
      </Routes>
     
  )
}

export default Main
