import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../../store';
import HomeLayoutFooter from '../../components/Footer/HomeLayoutFooter';
import HomeLayoutHeader from '../../components/Header/HomeLayoutHeader';
import './HomeLayout.scss';
import NavMenu from '../../components/NavMenu';
import StickyCta from '../../components/StickyCta';
import { pageData } from '../../../data';

const HomeLayout: React.FC<unknown> = () => {
	const theme = useAppSelector((state) => state.theme.theme);
	const language = useAppSelector((state) => state.theme.language);
	const headbarOpen = useAppSelector((state) => state.display.headbarOpen);
	const labels = (language === 'vn' ? pageData.vn : pageData.en).stickyCta;

	return (
		<div className="flex flex-column relative home-layout" data-theme={theme}>
			<a className="skip-link" href="#main">
				{labels.skipToContent}
			</a>
			<HomeLayoutHeader />
			<main id="main" className="home-layout__main" tabIndex={-1}>
				<Outlet />
			</main>
			<HomeLayoutFooter />
			<StickyCta />
			{headbarOpen && <NavMenu />}
		</div>
	);
};

export default HomeLayout;
