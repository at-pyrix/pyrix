<script>
	import Toast from '$lib/Other/toast.svelte';
	import { fly } from 'svelte/transition';

	let button;

	function onSubmit(e) {
		button.innerText = 'Sending...';
		button.classList.add('loading');
		button.classList.remove('c2a');
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://formspree.io/xyyordbl');
		xhr.send(new FormData(e.target));
		setTimeout(() => {
			button.classList.add('c2a');
			button.classList.remove('loading');
			button.innerText = 'Send Message';
			button.disabled = true;
			e.target.parentNode.querySelectorAll('input, textarea').forEach((e) => {
				const label = e.parentNode.parentNode.querySelector('label');
				label.style.color = '#bfc0cc';
				e.style.borderColor = '#302d421a';
			});
			showToast = true;
			setTimeout(() => (showToast = false), 3000);
			e.target.reset();
		}, Math.random() * (1500 - 500) + 500);
		// I'm seriously laughing at this xD
	}

	function validateEmail(mail) {
		var re = /\S+@\S+\.\S+/;
		return re.test(mail);
	}

	function updateInput(e, valid) {
		const label = e.target.parentNode.parentNode.querySelector('label');
		if (valid) {
			e.target.setAttribute('valid', 'true');
			e.target.style.borderColor = '$clr-accent-0';
			label.style.color = '$clr-accent-0';
		} else {
			e.target.removeAttribute('valid');
			e.target.style.borderColor = '$clr-error';
			label.style.color = '$clr-error';
		}
	}

	function validateInput(e) {
		// Empty check
		if (e.target.value) {
			updateInput(e, true);
		} else {
			updateInput(e, false);
		}

		// Mail Check
		if (e.target.type == 'email') {
			if (validateEmail(e.target.value)) {
				updateInput(e, true);
			} else {
				updateInput(e, false);
			}
		}

		// Check if all fields are valid
		const form = e.target.parentNode.parentNode.parentNode;
		if (form.querySelectorAll('[valid="true"]').length == 3) {
			button.disabled = false;
		} else {
			button.disabled = true;
		}
	}

	let showToast = false;
</script>

{#if showToast}
	<Toast message={'Message Sent'} description={'The message was sent.'} show={showToast} />
{/if}

<div class="contact">
	<form action="https://formspree.io/f/xyyordbl" method="POST" on:submit|preventDefault={onSubmit}>
		<header in:fly={{ y: -10, duration: 500, delay: 100 }}>
			<h2>Say hello!</h2>
			<p>Your email information, name or anything will not be published.</p>
		</header>
		<div class="input-wrapper" in:fly={{ y: 10, duration: 500, delay: 200 }}>
			<div class="input-wrapper__label">
				<label for="name" class="input__label">Your name</label>
			</div>
			<div class="input-container">
				<input name="Name" type="text" placeholder="Anonymous" on:input={validateInput} />
			</div>
		</div>
		<div class="input-wrapper" in:fly={{ y: 10, duration: 500, delay: 250 }}>
			<div class="input-wrapper__label">
				<label for="email" class="input__label">Email Address</label>
			</div>
			<div class="input-container">
				<input name="Email" type="email" placeholder="mail@example.com" on:input={validateInput} />
			</div>
		</div>
		<div class="input-wrapper" in:fly={{ y: 10, duration: 500, delay: 300 }}>
			<div class="input-wrapper__label">
				<label for="name" class="input__label">Message</label>
			</div>
			<div class="input-container">
				<textarea
					name="Message"
					placeholder="We've known each other for so long, your heart's been aching, but you're too shy to say it..."
					rows="8"
					on:input={validateInput}
				/>
			</div>
		</div>

		<button type="submit" in:fly={{ y: 10, duration: 500, delay: 350 }} disabled="true" bind:this={button} class="btn btn-primary c2a"
			>Send Message</button
		>
	</form>
</div>

<style lang="scss">
	.contact {
		width: 70%;
		margin-block: 1rem;
		padding-inline: 10vw;
	}

	.input-wrapper {
		padding-top: 2.5rem;
		box-sizing: border-box;
		width: 100%;
	}

	h2 {
		color: $clr-accent-0;

		font-weight: 500;
		font-size: 2rem;
		line-height: 1.7;
	}

	.contact p {
		font-family: $body-font;
		font-weight: 400;
		line-height: 1.5;
		color: rgba(186, 184, 212, 0.884);
		letter-spacing: 0.0313em;
		margin-bottom: 1rem;
	}

	label {
		font-family: $body-font;
		font-size: 10px;
		line-height: 2.4;
		color: #bfc0cc;
		text-transform: uppercase;
		letter-spacing: 0.125em;
		user-select: none;
	}

	input,
	textarea {
		color: rgb(171, 166, 202);
		font-family: $body-font;
		background: #423e555b;
		width: 100%;
		height: 56px;
		border: 1px solid #302d421a;
		padding: 16px 56px 16px 16px;
		font-size: 16px;
		border-radius: 8px;
		transition: box-shadow 0.2s ease-in-out;
	}

	input::placeholder,
	textarea::placeholder {
		color: $clr-text-450;
	}

	input:-webkit-autofill {
		-webkit-background-clip: text;
	}

	textarea {
		resize: vertical;
		height: auto;
	}

	.btn.btn-primary {
		background: $clr-accent-05;
		margin-inline: auto;
		@include hover {
			filter: brightness(1.1);
		}
		margin-top: 3rem;
	}

	input:focus,
	textarea:focus {
		box-shadow: 0px 0px 0px 2px $clr-text-5;
	}

	@media only screen and (max-width: $tablet) {
		.input-wrapper {
			padding-top: 1rem;
		}

		.contact {
			margin-inline: 0;
			padding-inline: 3vmin;
			width: 100%;
		}

		button {
			width: 100%;
		}
	}

	@media only screen and (max-width: $mobile) {
		textarea {
			height: 10rem;
		}
		input {
			height: 2.8rem;
		}
	}
</style>
