import styles from "./styles.module.css";
import Tableau from "../Tableau/index"
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Mern-Auth-Viz</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h3>Have a look at these Vizualizations</h3>
			<Tableau />
		</div>
	);
};

export default Main;
