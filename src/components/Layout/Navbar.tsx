import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoAddSharp } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { MdOutlineChair } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import userProfile from "../../assets/img/profileimg.jpg";
import "../../styles/navbar.css";

function Navbar() {
  const [showSearchCnt, setShowSearchCnt] = useState(false);
  return (
    <>
      
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
            <div
              className='navbar-container-search-demo'
              onClick={() => setShowSearchCnt(true)}
            >
              <div className='navbar-container-search-demo-icon'>
                <IoSearchSharp />
              </div>

              <div className='navbar-container-search-demo-text'>Search...</div>
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
                <div className='navbar-container-right-profilename'>
                  Emmanuel
                </div>
                <div className='navbar-container-right-profileusername'>
                  @9trocoder
                </div>
              </div>
            </div>
          </div>
        </div>
      {showSearchCnt && (
        <>
          <div
            className='navbar-container-search-overlay'
            onClick={() => setShowSearchCnt(false)}
          />

          <div className='lsest'>
            <div className='navbar-container-search-demo navbar-container-searchmain'>
              <div className='navbar-container-search-demo-icon'>
                <IoSearchSharp />
              </div>
              <input
                autoFocus={true}
                type='text'
                placeholder='Search...'
                className='navbar-container-search-demo-text navbar-container-search-input'
              />
            </div>
            <div className='navbar-container-suggested'>
              <p className='navbar-container-suggestedsearchlabel'>
                SUGGESTED SEARCHES
              </p>
              <div className='navbar-container-searchlistitems'>
                <label className='navbar-container-searchlistitem'>
                  3 Bedroom luxury with water view
                </label>
                <label className='navbar-container-searchlistitem'>
                  luxury apartments for sale
                </label>
                <label className='navbar-container-searchlistitem'>
                  fully detached 5 bedrooms with cinema
                </label>
              </div>
            </div>
            <div className='navbar-container-sortingfiltering'>
              <p className='navbar-container-suggestedsearchlabel'>
                Sort & Filter all:
              </p>
              <div className='navbar-container-sortingfilteringitems'>
                <div className='navbar-container-sortingfilteringitem'>
                  <div className='ncsfilteringitemleft'>
                    <div className='ncsfilteringitemlefticon'>
                      <IoTimeOutline />
                    </div>
                    <label className='ncfilteringitemlefttext'>Time</label>
                  </div>
                  <div className='ncsfilteringitemright'>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
                <div className='navbar-container-sortingfilteringitem'>
                  <div className='ncsfilteringitemleft'>
                    <div className='ncsfilteringitemlefticon'>
                      <MdOutlineAttachMoney />
                    </div>
                    <label className='ncfilteringitemlefttext'>
                      Price range
                    </label>
                  </div>
                  <div className='ncsfilteringitemright'>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
                <div className='navbar-container-sortingfilteringitem'>
                  <div className='ncsfilteringitemleft'>
                    <div className='ncsfilteringitemlefticon'>
                      <BsHouse />
                    </div>
                    <label className='ncfilteringitemlefttext'>Type</label>
                  </div>
                  <div className='ncsfilteringitemright'>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
                <div className='navbar-container-sortingfilteringitem'>
                  <div className='ncsfilteringitemleft'>
                    <div className='ncsfilteringitemlefticon'>
                      <MdOutlineChair />
                    </div>
                    <label className='ncfilteringitemlefttext'>Furnished</label>
                  </div>
                  <div className='ncsfilteringitemright'>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
                <div className='navbar-container-sortingfilteringitem'>
                  <div className='ncsfilteringitemleft'>
                    <div className='ncsfilteringitemlefticon'>
                      <GiVacuumCleaner />
                    </div>
                    <label className='ncfilteringitemlefttext'>Serviced</label>
                  </div>
                  <div className='ncsfilteringitemright'>
                    <MdOutlineKeyboardArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
