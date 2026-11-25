import { pageData } from '../../data';
import { useAppSelector, useAppDispatch } from '../../store';
import { setCurrentEntity } from '../../store/slice/displaySlice';
import Icon from '../../ui/components/Icon';
import { useReveal } from '../../utils/Reveal';
import { useGoToContact } from '../../utils/Contact';

const Pricing = () => {
	const { ref, inView } = useReveal();
	const dispatch = useAppDispatch();
	const goToContact = useGoToContact();
	const selectedEntity = useAppSelector((state) => state.display.currentEntity) ?? 'individual';
	const language = useAppSelector((state) => state.theme.language);
	const data = (language === 'vn' ? pageData.vn : pageData.en).pricing;
	const tiers = selectedEntity === 'business' ? data.business_price : data.individual_price;
	const entityLabel = data.entities.find((e) => e.id === selectedEntity)?.label ?? '';

	return (
		<section
			id="pricing"
			className={`background--obsidian pricing ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="pricing-title">
			<div className="pricing__header">
				<div>
					<p className="font-mono uppercase text--citron pricing__eyebrow reveal">{data.label}</p>
					<h2 id="pricing-title" className="section-title section-title--on-dark pricing__title">
						<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
							{data.title1} {data.title2}
						</span>
						<span
							className="section-title__accent reveal"
							style={{ '--d': '160ms' } as React.CSSProperties}>
							{data.title3}
						</span>
					</h2>
				</div>
				<p
					className="font-heading pricing__description reveal"
					style={{ '--d': '240ms' } as React.CSSProperties}>
					{data.description}
				</p>
			</div>

			<div
				className="flex font-mono pricing__toggle reveal"
				role="group"
				aria-label={language === 'vn' ? 'Loại khách hàng' : 'Client type'}
				style={{ '--d': '300ms' } as React.CSSProperties}>
				{data.entities.map((entity) => (
					<button
						type="button"
						key={entity.id}
						aria-pressed={selectedEntity === entity.id}
						className={`uppercase pricing__toggle__item ${selectedEntity === entity.id ? 'pricing__toggle__item--selected' : ''}`}
						onClick={() => dispatch(setCurrentEntity(entity.id))}>
						{entity.label}
					</button>
				))}
			</div>

			<ul className="pricing__tiers" aria-live="polite">
				{tiers.map((tier, i) => (
					<li
						key={tier.id}
						className={`pricing__tier reveal ${tier.popular ? 'pricing__tier--popular' : ''}`}
						style={{ '--d': `${360 + i * 80}ms` } as React.CSSProperties}>
						{tier.popular && (
							<p className="font-mono uppercase pricing__tier__badge">
								{language === 'vn' ? 'Phổ Biến Nhất' : 'Most Popular'}
							</p>
						)}
						<h3 className="font-mono uppercase pricing__tier__label">{tier.label}</h3>
						<p className="pricing__tier__price">
							<span className="font-mono pricing__tier__price__from">{data.startingAt}</span>
							<span className="font-heading pricing__tier__price__amount">
								{tier.price.currency}
								{tier.price.amount.toLocaleString('en-US')}
							</span>
							{tier.price.unit && (
								<span className="font-mono pricing__tier__price__unit">/ {tier.price.unit}</span>
							)}
						</p>
						<p className="font-heading pricing__tier__description">{tier.description}</p>
						<p className="font-mono uppercase pricing__tier__includes-title">
							{language === 'vn' ? 'Gói Dịch Vụ Bao Gồm' : 'What’s Included'}
						</p>
						<ul className="pricing__tier__includes">
							{tier.includes.map((item) => (
								<li className="flex font-heading" key={item}>
									<Icon className="background--citron" name="check" size="small" />
									<span>{item}</span>
								</li>
							))}
						</ul>
						<button
							type="button"
							className={`button ${tier.popular ? 'button--citron-contrast' : 'button--hollow-contrast'} button--icon-right uppercase pricing__tier__cta`}
							onClick={() =>
								goToContact(`${data.askPrefill}${tier.label} (${entityLabel})`)
							}>
							<span>{language === 'vn' ? 'Bắt Đầu' : 'Get Started'}</span>
							<Icon name="arrow-small-right" size="small" />
						</button>
					</li>
				))}
			</ul>

			<div className="pricing__footer reveal" style={{ '--d': '500ms' } as React.CSSProperties}>
				<p className="font-heading pricing__note">{data.note}</p>
				<p className="flex flex-wrap items-center font-mono pricing__advisor">
					<span>{data.additional_info.question}</span>
					<button
						type="button"
						className="flex items-center uppercase text--citron pricing__advisor__link"
						onClick={() => goToContact()}>
						<span>{data.additional_info.cta}</span>
						<Icon className="background--citron" name="arrow-small-right" size="small" />
					</button>
				</p>
			</div>
		</section>
	);
};

export default Pricing;
