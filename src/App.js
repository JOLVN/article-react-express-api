
import './App.css';

import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header'
import ArticlePage from './pages/ArticlePage';
import AddArticlePage from './pages/AddArticlePage';
import EditArticlePage from './pages/EditArticlePage';


function App() {
  
  
	return (
		<Router>
			<Header />
			<div className="container">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/articles" element={<Home />} />
					<Route exact path="/articles/:id" element={<ArticlePage />} />
					<Route exact path="/articles/:id/edit" element={<EditArticlePage />} />
					<Route exact path="/articles/new" element={<AddArticlePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
