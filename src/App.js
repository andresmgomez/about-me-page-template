import Navbar from "./components/Navbar/Navbar";
import AboutRight from "./components/About/AboutRight/AboutRight";
import QuoteRight from "./components/Quotes/QuoteRight/QuoteRight";
import WhyBocaLeft from "./components/WhyBoca/WhyBocaLeft";
import ProjectDetail from "./components/Projects/ProjectDetail";
import WorkplaceCols from "./components/Workplace/WorkplaceCols";

import "./App.css";

function App() {
	return (
		<div className="App">
			<header>
				<Navbar />
			</header>
			<main>
				<AboutRight />
				<QuoteRight />
				<WhyBocaLeft />
				<WorkplaceCols />
				<ProjectDetail />
			</main>
		</div>
	);
}

export default App;
