import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";

function App() {
	return (
		<Routes>
			<Route
				path="/admin"
				element={<AdminLogin />}
			/>
			<Route
				path="/admin/dashboard"
				element={<AdminDashboard />}
			/>
			<Route
				path="*"
				element={
					<div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
						<Navbar />
						<Hero />
						<About />
						<Skills />
						<Projects />
						<Experience />
						<Contact />
						<Footer />
					</div>
				}
			/>
		</Routes>
	);
}

export default App;
