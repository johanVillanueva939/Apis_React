import "./Nav.css";
import { NavLink } from "react-router-dom";

export const Nav = ({ route, style, children }) => {
	return (
		<div className="w-fit">
			<NavLink className={style} to={route}>
				{children}
			</NavLink>
		</div>
	);
};

export default Nav;
