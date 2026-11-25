import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import Icon from '../../ui/components/Icon';
import { useReveal } from '../../utils/Reveal';

/** "How it works": three plain steps so a first-time visitor knows what happens after they reach out. */
const Process = () => {
	const { ref, inView } = useReveal();
	const language = useAppSelector((state) => state.theme.language);
	const process = (language === 'vn' ? pageData.vn : pageData.en).process;

	return (
		<section
			id="process"
			className={`process ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="process-title">
			<p className="eyebrow reveal">{process.label}</p>
			<h2 id="process-title" className="section-title process__title">
				<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
					{process.title1}
				</span>
				<span
					className="section-title__accent reveal"
					style={{ '--d': '160ms' } as React.CSSProperties}>
					{process.title2}
				</span>
			</h2>
			<ol className="process__steps">
				{process.steps.map((step, index) => (
					<li
						key={step.id}
						className="process__step reveal"
						style={{ '--d': `${240 + index * 100}ms` } as React.CSSProperties}>
						<div className="flex items-center justify-between process__step__top">
							<span className="font-mono process__step__number">
								{String(index + 1).padStart(2, '0')}
							</span>
							<span className="process__step__icon">
								<Icon name={step.icon} size="small" className="background--citron" />
							</span>
						</div>
						<h3 className="font-heading process__step__title">{step.title}</h3>
						<p className="font-heading process__step__text">{step.text}</p>
					</li>
				))}
			</ol>
		</section>
	);
};

export default Process;
