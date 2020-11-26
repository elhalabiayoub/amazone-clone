import React, {useEffect} from "react";
import "./Products.css";
import Product from "./Product";

function Products() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="products">
			<div className="products__row">
				<Product
					id="6"
					description="LLOYD Jersey, Derbys Homme"
					price={65.92}
					currency="$"
					image="https://www.amazon.fr/images/I/81qtL2dh7ML._AC_UX500_.jpg"
					stars={5}
				/>
				<Product
					id="5"
					description="Bose Casque sans fil à réduction de bruit QuietComfort 35 II avec Amazon Alexa intégré - Noir"
					price={249.0}
					currency="$"
					image="https://www.amazon.fr/images/I/71mIBWZJirL._AC_SL1500_.jpg"
					stars={4}
				/>
			</div>
			<div className="products__row">
				<Product
					id="4"
					description="Smarter wi-FI ikettle 3.0"
					price={139.0}
					currency="$"
					image="https://www.amazon.fr/images/I/71Uu4jtx4JL._AC_SL1500_.jpg"
					stars={2}
				/>
				<Product
					id="3"
					description="A0ZBZ 60 Minute Visual Analog Timer Timer Countdown Timer Time Management Tool for Classroom Or Meeting Countdown Clock for Kids and Adults (Black) "
					price={15.49}
					currency="$"
					image="https://www.amazon.fr/images/I/51y-nr0y5nL._AC_SL1000_.jpg"
					stars={1}
				/>
				<Product
					id="2"
					description="Les Espions de l'Elysée: Le Président et les services de renseignement
					(ACTUALITE SOCIE) Format Kindle"
					price={100}
					currency="$"
					image="https://www.amazon.fr/images/I/411XS3mvbbL.jpg"
					stars={5}
				/>
			</div>
			<div className="products__row">
				<Product
					id="1"
					description="NEZIMI Protection du visage imprimée pour enfants Couvertures Bandana en coton réglable lavable Sécurité extérieure des enfants Lovely Foulard Anti-Poussière Filles Garçons (Black-5PC)"
					price={7.55}
					currency="$"
					image="https://www.amazon.fr/images/I/61x70IiENmL._AC_SL1024_.jpg"
					stars={5}
				/>
			</div>
			<div className="products__bottomButton">
				<button
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					{" "}
					Go to top
				</button>
			</div>
		</div>
	);
}

export default Products;
