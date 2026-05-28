import { useState } from 'react';
import pageData from '../../data';
import { useAppSelector, useAppDispatch } from '../../store';
import { setCurrentEntity } from '../../store/slice/displaySlice';
import Card from '../../ui/components/Card';
import Icon from '../../ui/components/Icon';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
	const [isExiting, setisExiting] = useState(false);

	const { ref, inView } = useInView({
		threshold: 0.1,
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
			setisExiting(true);
			setTimeout(() => {
				dispatch(setCurrentEntity(entity));
				setisExiting(false);
			}, 500);
		} else {
			dispatch(setCurrentEntity(entity));
		}
	};

	return (
		<section
			id="pricing"
			className={`pricing ${inView ? 'pricing--shown' : ''}`}
			ref={ref}>
			<div className="pricing__content">
				<div className="pricing__content__subheadline">
					{data.pricing.subheadline.split(' ').map((word, index) => {
						if (word) {
							return (
								<h3
									key={`subheadline-word-${index}`}
									className={`pricing__content__subheadline__word pricing__content__subheadline__word--${index}`}
									style={{ animationDelay: `${index * 100}ms` }}>
									{word}
								</h3>
							);
						}
					})}
				</div>
				<h1 className="pricing__content__title">{data.pricing.title}</h1>
				<p className="pricing__content__description">
					{data.pricing.description}
				</p>
			</div>
			<div className="pricing__select">
				<div className="pricing__select__options">
					{data.pricing.entitiesID.map((entity) => (
						<button
							type="button"
							key={entity}
							className={`pricing__select__options__selection pricing__select__options__selection--${entity} ${selectedEntity === entity ? 'pricing__select__options__selection--active' : ''}`}
							aria-pressed={selectedEntity === entity}
							onClick={() => handleSelectEntity(entity)}>
							{data.pricing.entities[data.pricing.entitiesID.indexOf(entity)]
								.charAt(0)
								.toUpperCase() +
								data.pricing.entities[
									data.pricing.entitiesID.indexOf(entity)
								].slice(1)}
						</button>
					))}
				</div>
			</div>
			<div className="pricing__cards">
				{selectedEntity !== null &&
					pricing.map((price, index) => (
						<Card
							className={`pricing__cards__card ${`pricing__cards__card--${index + 1}`} ${price.popular ? 'pricing__cards__card--popular' : ''} ${isExiting ? 'pricing__cards__card--exiting' : ''}`}
							key={price.id}>
							{price.popular && (
								<div className="pricing__cards__card__popular-label">
									<Icon name="sparkles" size="small" />
									<p>Most Popular</p>
								</div>
							)}
							<div className="pricing__cards__card__header">
								<h3 className="pricing__cards__card__header__title">
									{price.subheadline}
								</h3>
								<h1 className="pricing__cards__card__header__label">
									{price.label}
								</h1>
								<p className="pricing__cards__card__header__description">
									{price.description}
								</p>
							</div>
							<div className="pricing__cards__card__price">
								<h2>{`${price.price.currency}${price.price.amount}`}</h2>
								<p>{`
								 / ${price.price.unit}
								`}</p>
							</div>
							<div className="pricing__cards__card__cta">
								<button>
									<span>Get Started</span>
									<Icon name="arrow-right" size="small" />
								</button>
							</div>
							<br />
							<div className="pricing__cards__card__includes">
								<h4>WHAT'S INCLUDED:</h4>
							</div>
							<ul className="pricing__cards__card__includes__list">
								{price.includes?.map((item, index) => (
									<li key={`${price.id}-include-${index}`}>
										<Icon name="shield-check" size="small" />
										<p>{item}</p>
									</li>
								))}
							</ul>
						</Card>
					))}
			</div>
			<div className="pricing__additional">
				<h5>{data.pricing.additional_info.question}</h5>
				<button>
					<Icon name="comment" size="small" />
					<span>{data.pricing.additional_info.cta}</span>
				</button>
			</div>
		</section>
	);
};

export default Pricing;
