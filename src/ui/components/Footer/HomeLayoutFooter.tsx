import { useInView } from 'react-intersection-observer';
import { useAppSelector } from '../../../store';
import './Footer.scss';
import '../../../pages/Home/Home.scss';
import { pageData } from '../../../data';
import StringUtil from '../../../utils/String';

const HomeLayoutFooter = () => {
	const language = useAppSelector((state) => state.theme.language);
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
	const footerData =
		language === 'vn' ? pageData.vn.footer : pageData.en.footer;

	let classes = `flex flex-column home-layout__footer ${inView ? 'home-layout__footer--shown' : ''}`;
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<footer className={classes} ref={ref}>
			<div className="flex background--obsidian home-layout__footer__content">
				<div className="home-layout__footer__content__group">
					<div className="home-layout__footer__content__group__logo">
						<span className="text--citron home-layout__footer__content__group__logo__est">
							EST. 2025
						</span>
						<h2 className="text--muted home-layout__footer__content__group__logo__company-name">
							IT CPA &<br /> Advisory, PLLC
						</h2>
						<span className="flex text--muted home-layout__footer__content__group__logo__description">
							{footerData.tagline}
						</span>
					</div>
				</div>
				<div className="home-layout__footer__content__group">
					<div className="home-layout__footer__content__group__services">
						<h4 className="text--citron font-mono">{footerData.titles[0]}</h4>
						<ul>
							{footerData.services.map((service, index) => (
								<li
									key={`footer-service-${index}`}
									style={{ animationDelay: `${index * 100}ms` }}>
									<p className="font-mono text--alabaster">{service}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="home-layout__footer__content__group">
					<div className="home-layout__footer__content__group__navigation">
						<h4 className="text--citron font-mono">{footerData.titles[1]}</h4>
						<ul>
							{footerData.navigation.map((navItem, index) => (
								<li
									key={`footer-nav-${index}`}
									style={{ animationDelay: `${index * 100}ms` }}>
									<a className="font-mono text--alabaster" href={navItem.href}>
										{navItem.label}
									</a>
								</li>
							))}
							<li
								key={`footer-nav-${footerData.navigation.length}`}
								style={{
									animationDelay: `${footerData.navigation.length * 100}ms`,
								}}>
								<a className="font-mono text--alabaster" href="/privacy-policy">
									{language === 'vn' ? 'Chính sách bảo mật' : 'Privacy Policy'}
								</a>
							</li>
							<li
								key={`footer-nav-${footerData.navigation.length + 1}`}
								style={{
									animationDelay: `${(footerData.navigation.length + 1) * 100}ms`,
								}}>
								<a
									className="font-mono text--alabaster"
									href="/terms-of-service">
									{language === 'vn'
										? 'Điều khoản dịch vụ'
										: 'Terms of Service'}
								</a>
							</li>
						</ul>
					</div>
					<div className="home-layout__footer__content__group__principals">
						<h4 className="text--citron font-mono">{footerData.titles[2]}</h4>
						<ul>
							{footerData.principals.map((principal, index) => (
								<li
									key={`footer-principal-${index}`}
									style={{ animationDelay: `${index * 100}ms` }}>
									<a
										className="font-mono text--alabaster"
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
			<div className="flex font-mono background--obsidian home-layout__footer__copyright">
				<p className="text--muted">{footerData.copyright.text}</p>
				<p className="text--muted">{footerData.copyright.slogan}</p>
			</div>
		</footer>
	);
};

export default HomeLayoutFooter;
