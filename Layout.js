import React from 'react'
import {Link,Outlet} from 'react-router-dom';
const Layout = () => {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Main</Link>
                </li>

                <li>
                    <Link to='/App'>App</Link>
                </li>

                <li>
                    <Link to='/Upload'>Upload</Link>
                </li>
                <li>
                    <Link to='/UserProfiles'>UserProfiles</Link>
                </li>
                <li>
                    <Link to='/TaskManagment'>TaskManagmenet</Link>
                </li>
            </ul>
        </nav>

        <Outlet/>

    </>
  )
}

export default Layout
