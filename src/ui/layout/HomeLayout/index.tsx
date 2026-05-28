import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../store';
import HomeLayoutFooter from '../../components/Footer/HomeLayoutFooter';
import HomeLayoutHeader from '../../components/Header/HomeLayoutHeader';
import './HomeLayout.scss';
import NavMenu from '../../components/NavMenu';
import Portal from '../../components/Portal';

const HomeLayout: React.FC<unknown> = () => {
	const theme = useAppSelector((state) => state.theme.theme);
	const headbarOpen = useAppSelector((state) => state.display.headbarOpen);

	return (
		<div className={`home-layout ${headbarOpen ? 'home-layout--stop-scroll' : ''}`} data-theme={theme}>
			<HomeLayoutHeader />
			<main className="home-layout__main">
				<Outlet />
			</main>
			<HomeLayoutFooter />
			{headbarOpen && <Portal><NavMenu /></Portal>}
		</div>
	);
};

export default HomeLayout;
