import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import userProfile from "../../assets/img/profileimg.jpg";
import "../../styles/navbar.css";

function Navbar() {
  const [showSearchCnt, setShowSearchCnt] = useState(false);
  return (
    <div className='navbar-container'>
      <div className='navbar-container-left'>
        <div className='navbar-logo'>Githarita</div>
        <div className='navbar-container-left-links'>
          <div className='navbar-left-links'>Message</div>
          <div className='navbar-left-links'>Lists</div>
          <div className='navbar-left-links'>Bookmarks</div>
          <div className='navbar-left-links'>Communities</div>
        </div>
      </div>
      <div className='navbar-container-center'>
        <div className='navbar-container-search'>
          <div className='navbar-container-search-demo'>
            <div className='navbar-container-search-demo-icon'>
              <IoSearchSharp />
            </div>

            <div className='navbar-container-search-demo-text'>Search...</div>
          </div>
        </div>
        <div className="navbar-container-search-overlay"/>
        <div className="navbar-container-search-body">
          <div className="navbar-container-search-top">
            <div className="navbar-container-search-demo-icon">
              <IoSearchSharp />
            </div>
            <input autoFocus={true} type="text" placeholder="Search..." className="navbar-container-search-input"/>
          </div>
        </div>
      </div>
      <div className='navbar-container-right'>
        <div className='navbar-container-right-sharepost'>
          <IoAddSharp />
          <div className='navbar-container-right-shareposttext'>
            Share a post
          </div>
        </div>
        <div className='navbar-container-right-notification'>
          <IoNotificationsSharp />
        </div>
        <div className='navbar-container-right-profile'>
          <div className='navbar-container-right-profileimg'>
            <img src={userProfile} alt='Profile' />
          </div>
          <div className='navbar-container-right-profileinfo'>
            <div className='navbar-container-right-profilename'>Emmanuel</div>
            <div className='navbar-container-right-profileusername'>
              @9trocoder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
