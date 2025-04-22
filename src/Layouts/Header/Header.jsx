import "./Header.css";
import Nav from "../../UI/Navbarr/Nav";
import giphyImg from "../../assets/giphy.webp";
import Rickimg from "../../assets/Rick_Morty_Api.webp";
import catApi from "../../assets/catApi.webp";

export const Header = () => {
	return (
		<div id="Head" className="card_neomorfism h-fit flex flex-col">
			<div>
				<h1 className="Title font-bold">Consumo de Api's</h1>
			</div>
			<div id="NavsHeader" className="w-[80%] h-fit fixed bottom-0 flex justify-around place-self-center items-center card_neomorfism">
				<Nav to="/" children={<div className="logoApi" ><img src= {giphyImg} alt="" className="logoGiphy" /><p className="ApiName">Giphy</p></div>} className="navigation" />
				<Nav to="/" children={<div className="logoApi" ><img src={Rickimg} alt="" className="logoRick" /><p className="ApiName">R&M</p></div>} className="navigation" />
				<Nav to="/" children={<div className="logoApi" ><img src={catApi} alt="" className="logoCat" /><p className="ApiName">Cats</p></div>} className="navigation" />
			</div>
		</div>
	);
};
export default Header;
