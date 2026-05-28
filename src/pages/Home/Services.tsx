import pageData from '../../data';
import { useAppDispatch, useAppSelector } from '../../store';
import { SegmentedCircle } from '../../ui/components/SegmentedCircle';
import { setCurrentSegment } from '../../store/slice/displaySlice';
import Icon from '../../ui/components/Icon';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});
	const [isExiting, setIsExiting] = useState(false);

	const dispatch = useAppDispatch();
	const currentSegment = useAppSelector(
		(state) => state.display.currentSegment,
	);

	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const services = data.services.services;

	const handleSelectSegment = (segmentLabel: string | number | null) => {
		if (currentSegment !== null) {
			setIsExiting(true);
			setTimeout(() => {
				dispatch(setCurrentSegment(segmentLabel));
				setIsExiting(false);
			}, 700); // Match this duration with the CSS exit animation duration
		} else {
			dispatch(setCurrentSegment(segmentLabel));
		}
	};

	return (
		<section
			id="services"
			className={`services ${inView ? 'services--shown' : ''}`}
			ref={ref}>
			<div className="services__content">
				<h4 className="services__content__subheadline">
					{data.services.subHeadline}
				</h4>
				<h1 className="services__content__title">{data.services.title}</h1>
				<p className="services__content__description">
					{data.services.description}
				</p>
			</div>
			<div className="services__details">
				<div className="services__details__wheel">
					<div className="services__details__wheel__circle">
						<SegmentedCircle
							centerText=""
							segments={services}
							size={500}
							gap={5}
							animate={true}
							onSelectSegment={handleSelectSegment}
						/>
						<div className="services__details__wheel__center-container prevent-select">
							<p className="services__details__wheel__center-text">TAX</p>
						</div>
					</div>
				</div>
				<div className="services__details__description">
					{currentSegment === null ? (
						<div className="services__details__description__container services__details__description__container--empty">
							<span className="services__details__description__icon">
								<Icon name="mouse-pointer-click" size="large" title="Click" />
							</span>
							<h2 className="services__details__description__headline">
								{language === 'vn'
									? 'Chọn Một Dịch Vụ'
									: 'Select a Service'}{' '}
							</h2>
							<p className="services__details__description__text">
								{language === 'vn'
									? 'Nhấp vào bất kỳ biểu tượng dịch vụ nào trong vòng tròn để khám phá các giải pháp thuế toàn diện của chúng tôi.'
									: 'Click on any service icon in the circle menu to explore our comprehensive tax solutions.'}
							</p>
						</div>
					) : (
						<div
							className={`services__details__description__container services__details__description__container--service ${currentSegment !== null ? 'services__details__description__container--active' : ''} ${isExiting ? 'services__details__description__container--exiting' : ''}`}>
							<div className="services__details__description__image">
								<img
									src={services.find((s) => s.label === currentSegment)?.image}
									alt={currentSegment}
								/>
							</div>
							<div className="services__details__description__subheadline">
								<p>{language === 'vn' ? 'DỊCH VỤ' : 'SERVICE'}</p>
							</div>
							<h2 className="services__details__description__headline">
								{services.find((s) => s.label === currentSegment)?.label}
							</h2>
							<p className="services__details__description__text">
								{services.find((s) => s.label === currentSegment)?.description}
							</p>
							<div className="services__details__description__compare">
								<div className="services__details__description__compare__item services__details__description__compare__item--problem">
									<h3 className="services__details__description__compare__headline">
										{language === 'vn' ? 'Vấn Đề' : 'The Problem'}
									</h3>
									<p className="services__details__description__compare__text">
										{services.find((s) => s.label === currentSegment)?.problem}
									</p>
								</div>
								<div className="services__details__description__compare__item services__details__description__compare__item--solution">
									<h3 className="services__details__description__compare__headline">
										{language === 'vn' ? 'Giải Pháp' : 'The Solution'}
									</h3>
									<p className="services__details__description__compare__text">
										{services.find((s) => s.label === currentSegment)?.solution}
									</p>
								</div>
							</div>
							<div className="services__details__description__cta">
								<a
									href="#contact"
									className="services__details__description__cta-button">
									{language === 'vn'
										? `Thảo Luận Về ${services.find((s) => s.label === currentSegment)?.label} Ngay`
										: `Discuss ${services.find((s) => s.label === currentSegment)?.label} Now`}
								</a>
								<Icon
									name="arrow-right"
									size="small"
									className="services__details__description__cta-icon"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
			<div
				className={`services__image ${isExiting ? 'services__image--exiting' : ''}`}>
				{currentSegment === null && (
					<div className="services__image__text">
						<span
							className="services__image__text--1"
							style={{ animation: 'fadeIn 500ms 100ms ease-out forwards' }}>
							T
						</span>
						<span
							className="services__image__text--2"
							style={{ animation: 'fadeIn 500ms 200ms ease-out forwards' }}>
							A
						</span>
						<span
							className="services__image__text--3"
							style={{ animation: 'fadeIn 500ms 300ms ease-out forwards' }}>
							X
						</span>
					</div>
				)}
				{currentSegment !== null && (
					<div
						className={`services__image__text ${isExiting ? 'services__image__text--exiting' : ''}`}>
						{services
							.find((services) => services.label === currentSegment)
							?.label.split(' ')
							.map((word, index) =>
								word.split('').map((letter, letterIndex) => (
									<>
										<span
											key={`service-image-text-${index}-${letterIndex}`}
											className={`services__image__text--${letterIndex + 1}`}
											style={{
												animation: `${isExiting ? 'fadeOut' : 'fadeIn'} 500ms ${index * 0.5 + letterIndex * 100}ms ease-out forwards`,
												animationDelay: `${index * 0.5 + letterIndex * 100}ms`,
											}}>
											{letter.toUpperCase()}
										</span>
									</>
								)),
							)}
					</div>
				)}
			</div>
			{currentSegment !== null && (
				<div className={`services__popup`}>
					<button
						className="services__popup__close-button"
						onClick={() => handleSelectSegment(null)}>
						{language === 'vn' ? 'Đóng' : 'Close'}
					</button>
					<div
						className={`services__details__description__container services__details__description__container--service ${currentSegment !== null ? 'services__details__description__container--active' : ''} ${isExiting ? 'services__details__description__container--exiting' : ''}`}>
						<div className="services__details__description__image">
							<img
								src={services.find((s) => s.label === currentSegment)?.image}
								alt={currentSegment}
							/>
						</div>
						<div className="services__details__description__subheadline">
							<p>{language === 'vn' ? 'DỊCH VỤ' : 'SERVICE'}</p>
						</div>
						<h2 className="services__details__description__headline">
							{services.find((s) => s.label === currentSegment)?.label}
						</h2>
						<p className="services__details__description__text">
							{services.find((s) => s.label === currentSegment)?.description}
						</p>
						<div className="services__details__description__compare">
							<div className="services__details__description__compare__item services__details__description__compare__item--problem">
								<h3 className="services__details__description__compare__headline">
									{language === 'vn' ? 'Vấn Đề' : 'The Problem'}
								</h3>
								<p className="services__details__description__compare__text">
									{services.find((s) => s.label === currentSegment)?.problem}
								</p>
							</div>
							<div className="services__details__description__compare__item services__details__description__compare__item--solution">
								<h3 className="services__details__description__compare__headline">
									{language === 'vn' ? 'Giải Pháp' : 'The Solution'}
								</h3>
								<p className="services__details__description__compare__text">
									{services.find((s) => s.label === currentSegment)?.solution}
								</p>
							</div>
						</div>
						<div className="services__details__description__cta">
							<a
								href="#contact"
								className="services__details__description__cta-button">
								{language === 'vn'
									? `Thảo Luận Về ${services.find((s) => s.label === currentSegment)?.label} Ngay`
									: `Discuss ${services.find((s) => s.label === currentSegment)?.label} Now`}
							</a>
							<Icon
								name="arrow-right"
								size="small"
								className="services__details__description__cta-icon"
							/>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Services;
