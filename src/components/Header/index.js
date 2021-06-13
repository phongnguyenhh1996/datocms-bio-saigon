import React from "react";
import Link from 'gatsby-link'
import { TiShoppingCart } from "@react-icons/all-files/ti/TiShoppingCart"
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch"

const Header = ({site}) => {
  return (
    <div className="header">
      <div className="header__inner">
        <div className="Wrap">
          <div className="header__content-wrapper">
            <div className="header__logo">BIOSAIGON</div>
            <div className="navigator">
              <Link className="navigator__item" to="#todos">Home</Link>
              <Link className="navigator__item" to="#todos">Shop</Link>
              <Link className="navigator__item" to="#todos">Blog</Link>
              <Link className="navigator__item" to="#todos">Contact</Link>
              <Link className="navigator__item" to="#todos"><TiShoppingCart size="1.3rem"/></Link>
              <Link className="navigator__item" to="#todos"><AiOutlineSearch size="1.3rem"/></Link>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Header