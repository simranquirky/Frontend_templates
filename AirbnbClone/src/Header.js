import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./setting.css"
import "./Header.css"


function Header() {
	return (
		<div className="header">
			<Link to="/home">
			<img
				className="header__icon"
				src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
				alt=""
			/>
			</Link>
			<div className="header__center">
				<input type="text" placeholder="Start your search" />
				<Button>
					<SearchIcon />
				</Button>
			</div>

			<div className="header__right">
				<p>Become a host</p>
				<LanguageIcon />
			
			</div>
			<Link to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
		</div>

	);
}

export default Header;
