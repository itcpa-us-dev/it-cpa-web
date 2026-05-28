import { useInView } from 'react-intersection-observer';
import { useAppSelector } from '../../../store';
import './Footer.scss';
import data from '../../../data';
const HomeLayoutFooter = () => {
	const language = useAppSelector((state) => state.theme.language);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	const footerData = language === 'vn' ? data.vn.footer : data.en.footer;
	return (
		<footer
			className={`home-layout__footer ${inView ? 'home-layout__footer--shown' : ''}`}
			ref={ref}>
			<div className="home-layout__footer__content">
				<div className="home-layout__footer__content__group">
					<div className="home-layout__footer__content__group__logo">
						<span className="home-layout__footer__content__group__logo__est">
							EST. 2025
						</span>
						<h2 className="home-layout__footer__content__group__logo__company-name">
							IT CPA &<br /> Advisory, PLLC
						</h2>
						<span className="home-layout__footer__content__group__logo__description">
							{footerData.logoDescription}
						</span>
					</div>
				</div>
				<div className="home-layout__footer__content__group">
					<div className="home-layout__footer__content__group__services">
						<h5>{footerData.titles[0]}</h5>
						<ul>
							{footerData.services.map((service, index) => (
								<li
									key={`footer-service-${index}`}
									style={{ animationDelay: `${index * 100}ms` }}>
									<p>{service}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="home-layout__footer__content__group">
					<div className="home-layout__footer__content__group__navigation">
						<h5>{footerData.titles[1]}</h5>
						<ul>
							{footerData.navigation.map((navItem, index) => (
								<li
									key={`footer-nav-${index}`}
									style={{ animationDelay: `${index * 100}ms` }}>
									<a href={navItem.href}>{navItem.label}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="home-layout__footer__content__group__principals">
						<h5>{footerData.titles[2]}</h5>
						<ul>
							{footerData.principals.map((principal, index) => (
								<li
									key={`footer-principal-${index}`}
									style={{ animationDelay: `${index * 100}ms` }}>
									<a
										href={principal.href}
										target="_blank"
										rel="noopener noreferrer">
										{principal.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<div className="home-layout__footer__copyright">
				<p>{footerData.copyright.text}</p>
				<p>{footerData.copyright.slogan}</p>
			</div>
		</footer>
	);
};

export default HomeLayoutFooter;
