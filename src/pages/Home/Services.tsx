import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import Icon from '../../ui/components/Icon';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReveal } from '../../utils/Reveal';
import { useGoToContact } from '../../utils/Contact';

const Services = () => {
	const { ref, inView } = useReveal();
	const language = useAppSelector((state) => state.theme.language);
	const services = (language === 'vn' ? pageData.vn : pageData.en).services;
	const goToContact = useGoToContact();
	// One panel open at a time; start with the first so visitors see what's inside
	const [openId, setOpenId] = useState<string | null>(services.services[0]?.id ?? null);

	const t = {
		includes: language === 'vn' ? 'Bao Gồm' : 'What’s included',
		problem: language === 'vn' ? 'Vấn Đề' : 'The problem',
		solution: language === 'vn' ? 'Giải Pháp' : 'How we help',
	};

	return (
		<section
			id="services"
			className={`services ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="services-title">
			<div className="services__header">
				<div>
					<p className="eyebrow reveal">{services.label}</p>
					<h2 id="services-title" className="section-title services__title">
						<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
							{services.title1} {services.title2}
						</span>
						<span
							className="section-title__accent reveal"
							style={{ '--d': '160ms' } as React.CSSProperties}>
							{services.title3}
						</span>
					</h2>
				</div>
				<div className="reveal" style={{ '--d': '240ms' } as React.CSSProperties}>
					<p className="section-lead">{services.description}</p>
					<p className="font-mono services__hint">{services.hint}</p>
				</div>
			</div>

			<ul className="font-mono services__list">
				{services.services.map((item, index) => {
					const isOpen = openId === item.id;
					const panelId = `${item.id}-panel`;
					const buttonId = `${item.id}-button`;
					return (
						<li
							key={item.id}
							className={`services__item reveal ${isOpen ? 'services__item--open' : ''}`}
							style={{ '--d': `${index * 60}ms` } as React.CSSProperties}>
							<h3 className="services__item__heading">
								<button
									type="button"
									id={buttonId}
									className="services__item__trigger"
									aria-expanded={isOpen}
									aria-controls={panelId}
									onClick={() => setOpenId(isOpen ? null : item.id)}>
									<span className="services__item__index">
										{String(index + 1).padStart(2, '0')}
									</span>
									<span className="services__item__icon">
										<Icon name={item.icon} size="small" />
									</span>
									<span className="font-heading services__item__label">{item.label}</span>
									<span className="services__item__toggle" aria-hidden="true" />
								</button>
							</h3>
							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										id={panelId}
										role="region"
										aria-labelledby={buttonId}
										key="panel"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
										className="services__panel">
										<div className="services__panel__inner">
											<div className="services__panel__main">
												<p className="font-mono uppercase text--citron services__panel__kicker">
													{item.title}
												</p>
												<p className="font-heading services__panel__description">
													{item.description}
												</p>
												<div className="services__panel__problem-solution">
													<div>
														<p className="font-mono uppercase services__panel__subhead">
															{t.problem}
														</p>
														<p className="font-heading">{item.problem}</p>
													</div>
													<div>
														<p className="font-mono uppercase services__panel__subhead">
															{t.solution}
														</p>
														<p className="font-heading">{item.solution}</p>
													</div>
												</div>
												<button
													type="button"
													className="button button--citron button--icon-right services__panel__cta"
													onClick={() => goToContact(`${services.askPrefill}${item.title}`)}>
													<span>{services.askCta}</span>
													<Icon name="arrow-small-right" size="small" />
												</button>
											</div>
											<div className="services__panel__includes">
												<p className="font-mono uppercase services__panel__subhead">
													{t.includes}
												</p>
												<ul>
													{item.includes.map((include) => (
														<li key={include} className="font-heading">
															<Icon name="check" size="small" className="background--citron" />
															<span>{include}</span>
														</li>
													))}
												</ul>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Services;
