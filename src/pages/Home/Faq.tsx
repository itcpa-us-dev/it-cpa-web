import { pageData } from '../../data';
import { useAppSelector } from '../../store';
import { useReveal } from '../../utils/Reveal';

/** Common questions, answered before the visitor has to ask. Uses native <details> so it works without JS and with any keyboard or screen reader. */
const Faq = () => {
	const { ref, inView } = useReveal();
	const language = useAppSelector((state) => state.theme.language);
	const faq = (language === 'vn' ? pageData.vn : pageData.en).faq;

	return (
		<section
			id="faq"
			className={`faq ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="faq-title">
			<div className="faq__intro">
				<p className="eyebrow reveal">{faq.label}</p>
				<h2 id="faq-title" className="section-title faq__title">
					<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
						{faq.title1}
					</span>
					<span
						className="section-title__accent reveal"
						style={{ '--d': '160ms' } as React.CSSProperties}>
						{faq.title2}
					</span>
				</h2>
			</div>
			<div className="faq__list">
				{faq.items.map((item, index) => (
					<details
						key={item.id}
						className="faq__item reveal"
						style={{ '--d': `${200 + index * 60}ms` } as React.CSSProperties}>
						<summary className="font-heading faq__item__question">
							<span>{item.q}</span>
							<span className="faq__item__toggle" aria-hidden="true" />
						</summary>
						<p className="font-heading faq__item__answer">{item.a}</p>
					</details>
				))}
			</div>
		</section>
	);
};

export default Faq;
