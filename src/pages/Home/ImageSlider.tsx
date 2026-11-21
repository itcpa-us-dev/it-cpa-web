import StringUtil from '../../utils/String';
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

const ImageSlider = ({direction}: ImageSliderProps) => {
	let classes = `flex flex-row overflow-hidden relative image-slider image-slider--${direction}`;
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);
	return (
		<div className={classes}>
			<div className="flex flex-row gap-4 items-center image-slider__content">
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_1}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Monumental Scale
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_2}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Structural Integrity
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_3}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Global Grid
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_4}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Material Precision
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_5}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Audit-Proof Stability
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_6}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Strategic Foresight
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_1}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Monumental Scale
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_2}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Structural Integrity
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_3}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Global Grid
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_4}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Material Precision
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_5}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Audit-Proof Stability
					</h4>
				</div>
				<div className="flex relative image-slider__content__item overflow-hidden">
					<img
						className="flex image-slider__content__item__image"
						src={IMAGE_6}
						alt=""
					/>
					<h4 className="font-mono absolute bottom-0 left-0 image-slider__content__item__title">
						Strategic Foresight
					</h4>
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
