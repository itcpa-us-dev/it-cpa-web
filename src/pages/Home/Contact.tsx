import { useEffect, useRef, useState } from 'react';
import Icon from '../../ui/components/Icon';
import { pageData, emailAPI, firmPhone, firmEmail } from '../../data';
import { useAppDispatch, useAppSelector } from '../../store';
import { setContactPrefill } from '../../store/slice/displaySlice';
import { useReveal } from '../../utils/Reveal';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact = () => {
	const { ref, inView } = useReveal();
	const dispatch = useAppDispatch();
	const language = useAppSelector((state) => state.theme.language);
	const prefill = useAppSelector((state) => state.display.contactPrefill);
	const data = language === 'vn' ? pageData.vn : pageData.en;
	const contactData = data.contact;
	// Phone gets its own big link; the website entry is this very site
	const otherMethods = data.firmContact.filter((m) => m.type !== 'website' && m.type !== 'phone');

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [topic, setTopic] = useState<string | null>(null);
	const [status, setStatus] = useState<Status>('idle');
	const messageRef = useRef<HTMLTextAreaElement>(null);
	const focusTimer = useRef<number | undefined>(undefined);

	useEffect(() => () => window.clearTimeout(focusTimer.current), []);

	// A button elsewhere on the page ("Ask about this service") sent us here with a topic.
	// Put it in the message box, then (once the scroll has finished) place the cursor after it.
	useEffect(() => {
		if (!prefill) return;
		setMessage(`${prefill}\n\n`);
		setStatus('idle');
		dispatch(setContactPrefill(null));
		window.clearTimeout(focusTimer.current);
		focusTimer.current = window.setTimeout(() => {
			const el = messageRef.current;
			if (!el) return;
			el.focus({ preventScroll: true });
			el.setSelectionRange(el.value.length, el.value.length);
		}, 650);
	}, [prefill, dispatch]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (status === 'sending') return;
		if (!fullName.trim() || !email.trim() || !message.trim()) return;

		setStatus('sending');
		const fullMessage = topic
			? `${contactData.topicPrefix}${topic}\n\n${message.trim()}`
			: message.trim();
		try {
			const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					service_id: emailAPI.service_id,
					template_id: emailAPI.template_id,
					user_id: emailAPI.user_id,
					template_params: {
						fullName: fullName.trim(),
						email: email.trim(),
						message: fullMessage,
					},
				}),
			});
			if (!res.ok) throw new Error(`EmailJS responded ${res.status}`);
			setStatus('success');
			setFullName('');
			setEmail('');
			setMessage('');
			setTopic(null);
		} catch {
			setStatus('error');
		}
	};

	const fieldFor = (id: string) => contactData.formFields.find((f) => f.id === id)!;
	const nameField = fieldFor('fullName');
	const emailField = fieldFor('email');
	const messageField = fieldFor('message');
	const sending = status === 'sending';

	return (
		<section
			id="contact"
			className={`contact ${inView ? 'is-shown' : ''}`}
			ref={ref}
			aria-labelledby="contact-title">
			<div className="contact__left">
				<p className="eyebrow reveal">{contactData.label}</p>
				<h2 id="contact-title" className="section-title contact__title">
					<span className="reveal" style={{ '--d': '80ms' } as React.CSSProperties}>
						{contactData.title1}
					</span>
					<span className="contact__title__accent reveal" style={{ '--d': '160ms' } as React.CSSProperties}>
						{contactData.title2}
					</span>
				</h2>
				<p className="section-lead contact__lead reveal" style={{ '--d': '240ms' } as React.CSSProperties}>
					{contactData.headlineDescription}
				</p>

				<div className="contact__call reveal" style={{ '--d': '300ms' } as React.CSSProperties}>
					<p className="font-mono uppercase contact__call__label">{contactData.callLabel}</p>
					<a className="flex items-center font-heading contact__call__number" href={firmPhone.href}>
						<span className="contact__call__icon">
							<Icon name="phone" size="small" className="background--citron" />
						</span>
						{firmPhone.display}
					</a>
				</div>

				<ul className="contact__methods">
					{otherMethods.map((method, index) => {
						const value =
							method.type === 'email' ? (
								<a href={firmEmail.href}>{method.value}</a>
							) : (
								method.value
							);
						return (
							<li
								key={method.id}
								className="flex items-center contact__method reveal"
								style={{ '--d': `${360 + index * 60}ms` } as React.CSSProperties}>
								<span className="contact__method__icon">
									<Icon name={method.icon} size="small" />
								</span>
								<span>
									<span className="font-mono uppercase contact__method__label">{method.label}</span>
									<span className="font-heading contact__method__value">{value}</span>
								</span>
							</li>
						);
					})}
				</ul>
			</div>

			<div className="contact__card reveal" style={{ '--d': '200ms' } as React.CSSProperties}>
				<p className="font-mono uppercase contact__card__label">{contactData.formLabel}</p>
				<p className="font-heading contact__card__headline">{contactData.formHeadline}</p>
				<p className="font-heading contact__card__description">{contactData.formDescription}</p>

				<form className="contact__form" onSubmit={handleSubmit}>
					<fieldset className="contact__topics">
						<legend className="font-mono contact__field__label">{contactData.topicLabel}</legend>
						<div className="flex flex-wrap contact__topics__list">
							{contactData.topics.map((t) => (
								<label
									key={t}
									className={`font-heading contact__topic ${topic === t ? 'contact__topic--selected' : ''}`}>
									<input
										type="radio"
										name="topic"
										value={t}
										className="sr-only"
										checked={topic === t}
										onChange={() => setTopic(t)}
									/>
									{t}
								</label>
							))}
						</div>
					</fieldset>

					<div className="contact__row">
						<div className="contact__field">
							<label className="font-mono contact__field__label" htmlFor="fullName">
								{nameField.label}
							</label>
							<input
								id="fullName"
								name="fullName"
								type="text"
								autoComplete="name"
								className="font-heading"
								value={fullName}
								onChange={(e) => setFullName(e.target.value)}
								placeholder={nameField.placeholder}
								required
							/>
						</div>
						<div className="contact__field">
							<label className="font-mono contact__field__label" htmlFor="email">
								{emailField.label}
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								inputMode="email"
								className="font-heading"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder={emailField.placeholder}
								required
							/>
						</div>
					</div>
					<div className="contact__field">
						<label className="font-mono contact__field__label" htmlFor="message">
							{messageField.label}
						</label>
						<textarea
							id="message"
							name="message"
							ref={messageRef}
							rows={5}
							className="font-heading"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder={messageField.placeholder}
							aria-describedby="contact-privacy-note"
							required
						/>
						<p id="contact-privacy-note" className="flex items-center font-mono contact__privacy">
							<Icon name="lock" size="small" />
							<span>{contactData.privacyNote}</span>
						</p>
					</div>

					<button
						type="submit"
						className="button button--icon-right button--citron contact__submit"
						disabled={sending}
						aria-busy={sending}>
						<span>{sending ? contactData.sending : contactData.formCta.label}</span>
						{!sending && <Icon name={contactData.formCta.icon} size="small" />}
					</button>

					<div aria-live="polite" role="status">
						{status === 'success' && (
							<p className="flex font-heading contact__status contact__status--success">
								<Icon name="check" size="small" className="background--citron" />
								<span>{contactData.success}</span>
							</p>
						)}
						{status === 'error' && (
							<p className="flex font-heading contact__status contact__status--error">
								<Icon name="warning" size="small" className="background--citron" />
								<span>
									{contactData.error.replace(`${firmPhone.display}.`, '')}
									<a href={firmPhone.href}>{firmPhone.display}</a>.
								</span>
							</p>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
