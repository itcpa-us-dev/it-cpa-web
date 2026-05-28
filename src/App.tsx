import './App.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './ui/layout/HomeLayout';
import Home from './pages/Home';
import { useEffect } from 'react';
import { setHeadbarState } from './store/slice/displaySlice';
import { useAppDispatch } from './store';

const router = createBrowserRouter([
	{
		element: <HomeLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
		],
	},
]);

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const handleTabClose = (e: Event) => {
			e.preventDefault();
			dispatch(setHeadbarState(false));
		};
		window.addEventListener('unload', handleTabClose);
		return () => {
			window.removeEventListener('unload', handleTabClose);
		};
	});

	return <RouterProvider router={router} />;
}

export default App;
