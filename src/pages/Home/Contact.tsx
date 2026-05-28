import { useInView } from 'react-intersection-observer';
import Card from '../../ui/components/Card';
import Icon from '../../ui/components/Icon';
import data from '../../data';
import { useAppSelector } from '../../store';

const Contact = () => {
	const language = useAppSelector((state) => state.theme.language);
	const contactData = language === 'vn' ? data.vn.contact : data.en.contact;
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<section
			id="contact"
			className={`contact ${inView ? 'contact--shown' : ''}`}
			ref={ref}>
			<div className="contact__content">
				<div className="contact__content__detail contact__content__detail--left">
					<h5>{contactData.subheadline}</h5>
					<h2>{contactData.headlineOne}</h2>
					<h2>{contactData.headlineTwo}</h2>
					<p>{contactData.headlineDescription}</p>
				</div>
				<div className="contact__content__detail contact__content__detail--right">
					<Card
						className="contact__content__detail__card contact__content__detail__card--1"
						style={{ animationDelay: '200ms' }}>
						<div className="contact__content__detail__card__icon">
							<Icon name="phone" size="small" />
						</div>
						<div
							className="contact__content__detail__card__info"
							style={{ animationDelay: '400ms' }}>
							<h4>{contactData.contactMethods[0].label}</h4>
							<p>{contactData.contactMethods[0].value}</p>
						</div>
						<div
							className="contact__content__detail__card__arrow"
							style={{ animationDelay: '600ms' }}>
							<Icon name="arrow-right" size="small" />
						</div>
					</Card>
					<Card
						className="contact__content__detail__card contact__content__detail__card--2"
						style={{ animationDelay: '400ms' }}>
						<div className="contact__content__detail__card__icon">
							<Icon name="email" size="small" />
						</div>
						<div
							className="contact__content__detail__card__info"
							style={{ animationDelay: '600ms' }}>
							<h4>{contactData.contactMethods[1].label}</h4>
							<p>{contactData.contactMethods[1].value}</p>
						</div>
						<div
							className="contact__content__detail__card__arrow"
							style={{ animationDelay: '800ms' }}>
							<Icon name="arrow-right" size="small" />
						</div>
					</Card>
					<Card
						className="contact__content__detail__card contact__content__detail__card--3"
						style={{ animationDelay: '600ms' }}>
						<div className="contact__content__detail__card__icon">
							<Icon name="marker" size="small" />
						</div>
						<div
							className="contact__content__detail__card__info"
							style={{ animationDelay: '800ms' }}>
							<h4>{contactData.contactMethods[2].label}</h4>
							<p>{contactData.contactMethods[2].value}</p>
						</div>
						<div
							className="contact__content__detail__card__arrow"
							style={{ animationDelay: '1000ms' }}>
							<Icon name="arrow-right" size="small" />
						</div>
					</Card>
				</div>
			</div>
			<span className="contact__divider"></span>
			<div className="contact__form">
				<div className="contact__form__description">
					<h4>{contactData.formSubheadline}</h4>
					<h2>{contactData.formHeadline}</h2>
					<p>{contactData.formDescription}</p>
				</div>
				<div className="contact__form__form">
					<form>
						<div className="contact__form__form__group">
							<div className="contact__form__form__group__field">
								<label htmlFor="name" style={{ animationDelay: '2000ms' }}>
									{contactData.formFields[0].label}
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									placeholder={contactData.formFields[0].label}
									style={{ animationDelay: '2000ms' }}
								/>
							</div>
							<div className="contact__form__form__group__field">
								<label htmlFor="email" style={{ animationDelay: '2300ms' }}>
									{contactData.formFields[1].label}
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									placeholder="Email"
									style={{ animationDelay: '2300ms' }}
								/>
							</div>
						</div>
						<div className="contact__form__form__group">
							<div className="contact__form__form__group__field">
								<label htmlFor="message" style={{ animationDelay: '2600ms' }}>
									{contactData.formFields[2].label}
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									placeholder={contactData.formFields[2].label}
									style={{ animationDelay: '2600ms' }}></textarea>
							</div>
						</div>
						<button className="contact__form__form__btn" type="submit">
							<p>Send Message</p>
							<Icon name="paper-plane" size="small" />
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
