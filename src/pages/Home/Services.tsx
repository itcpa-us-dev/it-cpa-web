import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import Icon from '../../ui/components/Icon';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
	const { ref, inView } = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});
	const [hoveringItem, setHoveringItem] = useState<string | null>(null);

	const language = useAppSelector((state) => state.theme.language);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const services = data.services;

	let classes = 'flex flex-column justify-center services';
	classes = `${classes} ${inView ? 'services--shown' : ''}`;

	const handleMouseEnter = (itemId: string | null) => {
		setHoveringItem(itemId);
	};
	return (
		<section id="services" className={classes} ref={ref}>
			<div className="flex flex-column services__content">
				<div className="font-mono text--muted services__content__header">
					{services.label}
				</div>
				<div className="flex flex-row services__content__details">
					<div className="title-style title-style--medium services__content__titles">
						<h1 style={{ animationDelay: '0ms' }}>{services.title1}</h1>
						<h1 style={{ animationDelay: '100ms' }}>{services.title2}</h1>
						<h1 style={{ animationDelay: '200ms' }}>{services.title3}</h1>
					</div>
					<div className="text--muted font-heading services__content__description">
						{services.description}
					</div>
				</div>
			</div>
			<div className="flex flex-column font-mono services__list">
				{services.services.map((item, index) => {
					const isActive = hoveringItem === item.id;
					return (
						<div
							onMouseEnter={() => handleMouseEnter(item.id)}
							onMouseLeave={() => handleMouseEnter(null)}
							className={`services__list__item`}
							key={item.id} style={{ animationDelay: `${index * 100}ms` }}>
								
							<div className="flex flex-row gap-10 items-center services__list__item__top">
								<span className="text--muted services__list__item__top__index">
									{String(index + 1).padStart(2, '0')}
								</span>
								<Icon
									className="services__list__item__top__icon"
									name={item.icon}
									size="small"
								/>
								<h3 className="text--obsidian services__list__item__top__label">
									{item.label}
								</h3>
								<Icon
									className="services__list__item__top__indicator"
									name="arrow-small-right"
									size="large"
								/>
							</div>
							<AnimatePresence>
								{isActive && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className={`services__list__item__bottom`}>
										<h4 className="text--citron font-weight-400 uppercase services__list__item__bottom__title">
											{item.title}
										</h4>
										<div className="text--muted font-heading services__list__item__bottom__description">
											{item.description}
										</div>
										<div className="flex flex-column services__list__item__bottom__includes">
											<h4 className="text--citron font-weight-400 uppercase services__list__item__bottom__includes__title">
												{language === 'vn' ? 'Bao Gồm' : 'Includes'}
											</h4>
											<ul className="services__list__item__bottom__includes__list">
												{item.includes.map((include, index) => (
													<li
														className="text--obsidian services__list__item__bottom__includes__list__item"
														key={`include-${index}`}>
														{include}
													</li>
												))}
											</ul>
										</div>
										<div className="flex flex-row services__list__item__bottom__problem-solution">
											<div className="services__list__item__bottom__problem">
												<h4 className="text--citron font-weight-400 uppercase services__list__item__bottom__problem__title">
													{language === 'vn' ? 'Vấn Đề' : 'Problem'}
												</h4>
												<p className="text--obsidian">{item.problem}</p>
											</div>
											<div className="services__list__item__bottom__solution">
												<h4 className="text--citron font-weight-400 uppercase services__list__item__bottom__solution__title">
													{language === 'vn' ? 'Giải Pháp' : 'Solution'}
												</h4>
												<p className="text--obsidian">{item.solution}</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Services;
