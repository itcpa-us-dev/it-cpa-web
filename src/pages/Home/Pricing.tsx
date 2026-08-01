import { pageData } from '../../data';
import { useAppSelector, useAppDispatch } from '../../store';
import { setCurrentEntity } from '../../store/slice/displaySlice';
import Card from '../../ui/components/Card';
import Icon from '../../ui/components/Icon';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';
import Button from '../../ui/components/Button/Button';
import StringUtil from '../../utils/String';
import { scrollTo } from '../../utils/Scroll';

const Pricing = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});
	const dispatch = useAppDispatch();
	const selectedEntity = useAppSelector((state) => state.display.currentEntity);
	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const pricing =
		selectedEntity === 'individual'
			? data.pricing.individual_price
			: data.pricing.business_price;
	const handleSelectEntity = (entity: string) => {
		if (selectedEntity !== null) {
			dispatch(setCurrentEntity(entity));
		} else {
			dispatch(setCurrentEntity(entity));
		}
	};

	let classes = `flex flex-column background--obsidian pricing ${inView ? 'pricing--shown' : ''}`;
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<section id="pricing" className={classes} ref={ref}>
			<div className="pricing__content">
				<div className="font-mono uppercase text--citron pricing__content__header">
					{data.pricing.label}
				</div>
				<div className="flex font-heading text--alabaster pricing__content__titles">
					<div className="pricing__content__titles__titles">
						<h1 style={{ animationDelay: '0ms' }}>{data.pricing.title1}</h1>
						<h1 style={{ animationDelay: '100ms' }}>{data.pricing.title2}</h1>
						<h1 style={{ animationDelay: '200ms' }}>{data.pricing.title3}</h1>
					</div>
					<div className="pricing__content__titles__description">
						<p>{data.pricing.description}</p>
					</div>
				</div>
			</div>
			<div className="flex flex-row pricing__entities">
				{data.pricing.entities.map((entity) => (
					<div
						key={entity.id}
						className={`flex flex-row font-mono justify-center items-center text--alabaster uppercase pricing__entities__item ${selectedEntity === entity.id ? 'pricing__entities__item--selected' : ''}`}
						onClick={() => handleSelectEntity(entity.id)}>
						{entity.label}
					</div>
				))}
			</div>
			<div className="flex flex-row justify-center pricing__tiers">
				{pricing.map((tier, i) => (
					<Card
						key={tier.id}
						className={`flex flex-column relative pricing__tiers__item ${tier.popular ? 'pricing__tiers__item--popular' : ''}`}
						style={{ animationDelay: `${i * 100}ms` }}>
						{tier.popular && (
							<div className="font-mono uppercase top-0 right-0 absolute pricing__tiers__item__popular-badge">
								{language === 'vn' ? 'Phổ Biến Nhất' : 'Most Popular'}
							</div>
						)}
						<div className="font-mono text--alabaster pricing__tiers__item__header">
							<h3 className="font-mono uppercase pricing__tiers__item__header__label">
								{tier.label}
							</h3>
							<p className="font-mono font-weight-1000 pricing__tiers__item__header__price">
								<span className="font-heading">{tier.price.currency}</span>
								<span className="font-heading">{tier.price.amount}</span>
								<span>{tier.price.unit && `/ ${tier.price.unit}`}</span>
							</p>
							<p className="font-heading pricing__tiers__item__header__description">
								{tier.description}
							</p>
						</div>
						<div className="text--alabaster pricing__tiers__item__details">
							<h4 className="font-mono uppercase">
								{language === 'vn' ? 'Gói Dịch Vụ Bao Gồm' : "What's Included"}
							</h4>
							<ul className="font-mono">
								{tier.includes.map((item, index) => (
									<li className="flex flex-row items-center" key={index}>
										<Icon
											className="background--citron"
											name="check"
											size="small"
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="flex flex-row justify-center pricing__tiers__item__cta">
							<Button
								className={`button ${tier.popular ? 'button--citron-contrast' : 'button--hollow-contrast'} button--icon-right uppercase`}
								onClick={() => scrollTo('#contact')}>
								<span>{language === 'vn' ? 'Bắt Đầu' : 'Get Started'}</span>
								<Icon name="arrow-small-up" size="small" />
							</Button>
						</div>
					</Card>
				))}
			</div>
			<div className="flex font-mono justify-center text--alabaster pricing__additional-info">
				<p className="pricing__additional-info__question">
					{data.pricing.additional_info.question}
				</p>
				<NavLink
					className="flex items-center font-mono text--citron uppercase font-weight-700 pricing__additional-info__cta"
					to={'#contact'} onClick={() => scrollTo('#contact')}>
					<span>{data.pricing.additional_info.cta}</span>
					<Icon
						className="background--citron"
						name="arrow-small-right"
						size="small"
					/>
				</NavLink>
			</div>
		</section>
	);
};

export default Pricing;
