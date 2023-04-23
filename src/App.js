import AboutRight from "./components/About/AboutRight/AboutRight";
import QuoteRight from "./components/Quotes/QuoteRight/QuoteRight";
import WhyBocaLeft from "./components/WhyBoca/WhyBocaLeft";
import ProjectDetail from "./components/Projects/ProjectDetail";
import WorkplaceCols from "./components/Workplace/WorkplaceCols";

import "./App.css";

function App() {
	return (
		<div className="App">
			<AboutRight />
			<QuoteRight />
			<WhyBocaLeft />
			<WorkplaceCols />
			<ProjectDetail />
		</div>
	);
}

export default App;
