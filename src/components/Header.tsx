import { useEffect, useState } from "react";
import login from "/logo.svg";
import user from "/user.svg";
import heart from "/heart.svg";
import cart from "/cart.svg";
import search from "/search.svg";
import { menuItems } from "../util/helper";
/* eslint-disable */

function Header() {
    const [menu, setMenu] = useState([]);
    const [isSubMenuActive, setSubMenuActive] = useState(false);

    useEffect(() => {

        setMenu((prev) => {
            return menuItems.map((t) => {
                return { title: t, className: 'defaultColor' }
            })
        });

    }, [])

    function actMouseAction (status, item) {
        if (status == 'hover') {
            setMenu((prev) => {
                return prev.map((t) => {
                    if (t.title == item.title) {
                        setSubMenuActive(item.title)
                        return { title: t.title, className: 'defaultColor' } 
                    } else {
                        return { title: t.title, className: 'notHoverItem' }
                    }
                })
            });

        } else if (status == 'down') {
            setSubMenuActive(false)

            setMenu((prev) => {
                return prev.map((t) => {
                    return { title: t.title, className: 'defaultColor' } 
                })
            });

        }
        console.log(item)
    
    }

  return (
    <>
        <div className="header-nav">
        <div className="main-logo">
            <img src={login}></img>
        </div>
        <div className="main-desktop-list">
            <ul>
              { menu.map((item) => {
                return (<li className={item.className} 
                    onMouseOver={() => actMouseAction('hover', item)} 
                    onMouseOut={() => actMouseAction('down',item)}> 
                    {item.title}
                </li>)
              })}
            </ul>
          
        </div>
     
        <div className="header-right-icon">
            <div className="border-search">
                {/* <div> */}
                    <img src={search} alt="search" />
                    <span>SEARCH</span>
                {/* </div> */}
           
            </div>
            <div><img src={heart} alt="heart" /></div>
            <div><img src={cart} alt="cart" /></div>
            <div><img src={user} alt="user" /></div>

        </div>
    
    </div>

    {<div className={`subMenuList ${isSubMenuActive ? 'opacity-1': 'opacity-0'}`}>
            I am in {isSubMenuActive}
        </div>}
    </>

  )
}

export default Header