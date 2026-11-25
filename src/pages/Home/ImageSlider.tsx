import './Home.scss';
import IMAGE_1 from '../../assets/images/background_1.webp';
import IMAGE_2 from '../../assets/images/background_2.webp';
import IMAGE_3 from '../../assets/images/background_3.webp';
import IMAGE_4 from '../../assets/images/background_4.webp';
import IMAGE_5 from '../../assets/images/background_5.webp';
import IMAGE_6 from '../../assets/images/background_6.webp';

type ImageSliderProps = {
	direction: 'left' | 'right';
};

const SLIDES = [
	{ src: IMAGE_1, title: 'Monumental Scale' },
	{ src: IMAGE_2, title: 'Structural Integrity' },
	{ src: IMAGE_3, title: 'Global Grid' },
	{ src: IMAGE_4, title: 'Material Precision' },
	{ src: IMAGE_5, title: 'Audit-Proof Stability' },
	{ src: IMAGE_6, title: 'Strategic Foresight' },
];

/** Decorative photo strip. Hidden from screen readers; the set repeats once so the loop is seamless. */
const ImageSlider = ({ direction }: ImageSliderProps) => {
	return (
		<div
			className={`flex flex-row overflow-hidden relative image-slider image-slider--${direction}`}
			aria-hidden="true">
			<div className="flex flex-row gap-4 items-center image-slider__content">
				{[...SLIDES, ...SLIDES].map((slide, index) => (
					<div
						key={`${slide.title}-${index}`}
						className="flex relative image-slider__content__item overflow-hidden">
						<img
							className="flex image-slider__content__item__image"
							src={slide.src}
							alt=""
							loading="lazy"
							decoding="async"
						/>
						<span className="font-mono absolute image-slider__content__item__title">
							{slide.title}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;
