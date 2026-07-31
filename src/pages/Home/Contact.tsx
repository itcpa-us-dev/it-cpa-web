import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Icon from '../../ui/components/Icon';
import { pageData, emailAPI } from '../../data';
import { useAppSelector } from '../../store';
import StringUtil from '../../utils/String';
import Button from '../../ui/components/Button/Button';
import { toast } from 'react-toastify';

const Contact = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});

	const language = useAppSelector(
		(state: { theme: { language: string } }) => state.theme.language,
	);
	const contactData =
		language === 'vn' ? pageData.vn.contact : pageData.en.contact;
	const firmContact =
		language === 'vn' ? pageData.vn.firmContact : pageData.en.firmContact;

	const [fullNameValue, setFullNameValue] = useState('');
	const [emailValue, setEmailValue] = useState('');
	const [messageValue, setMessageValue] = useState('');

	const fullName = useRef<HTMLInputElement>(null);
	const email = useRef<HTMLInputElement>(null);
	const message = useRef<HTMLTextAreaElement>(null);
	const form = useRef<HTMLFormElement>(null);

	const onChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFullNameValue(e.target.value);
	};

	const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmailValue(e.target.value);
	};

	const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setMessageValue(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Submitting form with values:', {
			fullName: fullNameValue,
			email: emailValue,
			message: messageValue,
		});
		if (!fullNameValue || !emailValue || !messageValue) return;

		const submitData = {
			service_id: emailAPI.service_id,
			template_id: emailAPI.template_id,
			user_id: emailAPI.user_id,
			template_params: {
				fullName: fullNameValue,
				email: emailValue,
				message: messageValue,
			},
		};
		try {
			const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(submitData),
			});

			if (res.ok) {
				toast.success('Your message has been sent successfully!', {
					position: 'top-center',
					autoClose: 10000,
					hideProgressBar: true,
					closeOnClick: true,
				});
				if (form.current) {
					form.current.reset();
					setFullNameValue('');
					setEmailValue('');
					setMessageValue('');
				}
			} else {
				toast.error('Failed to send message. Please try again later.', {
					position: 'top-center',
					autoClose: 10000,
					hideProgressBar: true,
					closeOnClick: true,
				});
			}
		} catch (error: unknown) {
			toast.error('Failed to send message. Please try again later.', {
				position: 'top-center',
				autoClose: 10000,
				hideProgressBar: true,
				closeOnClick: true,
			});
			console.log(error instanceof Error ? error.message : error);
		}
	};

	let classes = `flex flex-row gap-8 relative contact ${inView ? 'contact--shown' : ''}`;
	classes = StringUtil.removeDoubleAndTrailingSpace(classes);

	return (
		<section id="contact" className={classes} ref={ref}>
			<div className="flex flex-column contact__left">
				<div className="contact__left__header">
					<h4 className="font-mono text--muted font-weight-400">
						{contactData.label}
					</h4>
					<div className="font-heading font-weight-1000 contact__left__header__titles">
						<h1 className="text--obsidian" style={{ animationDelay: '200ms' }}>
							{contactData.title1}
						</h1>
						<h1 className="text--citron" style={{ animationDelay: '300ms' }}>
							{contactData.title2}
						</h1>
					</div>
					<p className="font-heading text--muted">
						{contactData.headlineDescription}
					</p>
				</div>
				<div className="flex flex-column contact__left__contact">
					{firmContact.map((method, index) => (
						<div
							key={index}
							className="flex flex-row items-center font-mono contact__left__contact__method"
							style={{ animationDelay: `${index * 200}ms` }}>
							<div className="contact__left__contact__method__icon-wrapper">
								<Icon name={method.icon} size="small" />
							</div>
							<div className="contact__left__contact__method__value">
								<span className="font-mono text--muted font-weight-400 uppercase contact__left__contact__method__value__label">
									{method.label}
								</span>
								<h4 className="font-heading text--obsidian">{method.value}</h4>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-column contact__right">
				<div className="contact__right__header">
					<h4 className="font-mono text--muted font-weight-400 contact__right__header__label">
						{contactData.formLabel}
					</h4>
					<div className="contact__right__header__content">
						<p className="font-heading text--obsidian">
							{contactData.formHeadline}
						</p>
						<p className="font-heading text--muted">
							{contactData.formDescription}
						</p>
					</div>
				</div>
				<form
					ref={form}
					onSubmit={handleSubmit}
					className="flex flex-column contact__right__form">
					{contactData.formFields.map((field, index) => (
						<div
							key={index}
							className="flex flex-column font-heading contact__right__form__field"
							style={{ animationDelay: `${index * 300}ms` }}>
							<label
								className="text--obsidian font-weight-400 font-mono"
								htmlFor={field.id}>
								{field.label}
							</label>
							{field.type === 'textarea' ? (
								<textarea
									id={field.id}
									ref={message}
									value={messageValue}
									onChange={onChangeMessage}
									placeholder={field.placeholder}
									required></textarea>
							) : (
								<input
									type={field.type}
									id={field.id}
									ref={
										field.id === 'fullName'
											? fullName
											: field.id === 'email'
												? email
												: null
									}
									value={
										field.id === 'fullName'
											? fullNameValue
											: field.id === 'email'
												? emailValue
												: ''
									}
									onChange={
										field.id === 'fullName'
											? onChangeFullName
											: field.id === 'email'
												? onChangeEmail
												: undefined
									}
									placeholder={field.placeholder}
									required
								/>
							)}
						</div>
					))}
					<Button
						className="button button--icon-right button--citron contact__right__form__field__button"
						type={contactData.formCta.type as 'button' | 'submit' | 'reset'}>
						<span>{contactData.formCta.label}</span>
						<Icon name={contactData.formCta.icon} size="small" />
					</Button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
