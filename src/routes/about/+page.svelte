<main>
	<h1>ABOUT</h1>
	<hr />
	<img
		src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc4NWMzMjRhYWQzOTNiOTE2ZGYzOTc5ZGVlZDhmOTIxYjM2NGI2MCZjdD1n/ASd0Ukj0y3qMM/giphy.gif"
		alt="goodbye"
	/>
	<p>Hey there!</p>
	<p />
	<p>
		So, I've got some news to share with you about this awesome site we've been working on. I've been working on it for almost 2 years now, and I've
		loved every minute of it - adding features, switching frameworks — wayyy too many times — debugging like crazy, and even deploying some silly code
		to production!
	</p>
	<p>
		It's been a wild ride, but now it's time for me to take a break. <span> (*cough* JEE *cough*) </span>
		Unfortunately, I have some big exams coming up that I need to focus on, which means I won't be able to work on the site for a while. How long, you
		ask? Well, nearly 2 years! I know, it's a bummer. But hey, life happens, right?
		<br />
		<br />
		Like seriously, I've got a LOT of studying to do and I won't be able to code for a while. So, some of the pages might be a little wonky, and some stuff
		might not work right. So apologies for that. I'll try to fix them when I get time, but I can't promise anything.
	</p>
	<p>
		Anyway, I just wanted to let you know what's going on. Don't worry, though - I'll be back at it as soon as I can. In the meantime, keep checking
		the site for updates and don't hesitate to <a href="/contact">drop me a line if you've got any questions or comments.</a>
	</p>
	<p>Take care, stay awesome, and keep reading :)</p>
	<p>
		Best regards, <br />
		<s>Not</s>Yasho
	</p>
</main>

<style lang="scss">
	main {
		min-height: 100vh;
		height: 100%;
		max-width: 800px;
	}

	@font-face {
		font-family: 'Monument Extended';
		src: url('/fonts/Monument/MonumentExtended-Regular.woff2') format('woff2'), url('/fonts/Monument/MonumentExtended-Regular.woff') format('woff');
		font-weight: bold;
		font-style: normal;
		font-display: swap;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 3rem;
		text-align: center;
		font-family: 'Monument Extended', sans-serif !important;
		width: 100%;
		display: block;
		color: hsl(170, 36%, 55%);
	}

	hr {
		border-color: $clr-fg-5;
		margin-block: 2rem;
		width: 100%;
	}

	img {
		float: right;
		margin: 0 1.5rem 1.5rem 1.5rem;
		border-radius: 3rem;
		@media screen and (max-width: $tablet) {
			float: none;
			border-radius: 1rem;
			margin-inline: auto;
		}
	}

	s {
		text-decoration: line-through wavy;
		text-decoration-color: $accent-05;
	}

	p {
		display: block;
		font-size: 1.25rem;
		margin-bottom: 1.6rem;
		hyphens: auto;
		color: $clr-fg-4;
		filter: brightness(1.1);
		line-height: 1.5;
		font-family: 'Larsseit', $body-font, sans-serif;
		span {
			color: $clr-fg-450;
		}
	}

	p {
		font-size: 19px;
		font-family: $body-font;

		@media screen and (max-width: $tablet) {
			font-size: 17px;
		}
	}
</style>
