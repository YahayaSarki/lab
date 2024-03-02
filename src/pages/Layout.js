import { Outlet } from "react-router-dom"
import Sidebar from './Bio';
import Header from './Header';


function Layout() {
    return (
        <div className='premitive'>
        <div className='mainContainer'>
          <Sidebar />
          <div className='content'>
                <Header />
                <Outlet />
          </div>
        </div>
          
        <div className='myfooter'>
          <div id="footer">
              <p> &copy; 2024. All Rights Reserved.</p>
            </div>
        </div>
      </div> 
    )
}

export default Layout;