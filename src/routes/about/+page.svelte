<main>
	<h1>ABOUT</h1>
	<hr class="title-line" />
	<img
		src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzc4NWMzMjRhYWQzOTNiOTE2ZGYzOTc5ZGVlZDhmOTIxYjM2NGI2MCZjdD1n/ASd0Ukj0y3qMM/giphy.gif"
		alt="wave"
	/>

<p>'Sup?</p>
	<p>
		 Hi! I'm @pyrix, a {new Date().getFullYear() - 2007} y/o guy from India. I'm interested in reading books about science, history and philosophy, graphic designing, drawing and tinkering with my computer. I want get into data visualisation, cybersecurity and networking, writing automation scripts, and scientific research. I want to learn everything about computers! <br><br> I started coding back in 2020, during the COVID-19 pandemic, when I taught myself python. This blog was supposed to be an online diary, where I would share my blog my development process and other stuff, but I never really got the time to write anything as I'm quite busy with school currently, and it's tough to manage both. Which is why, nearly all of the articles here are merely placeholders for actual content. Don't worry though, I'll get back here ASAP<s>
	</p>
<h3><strong>this site</strong><hr/></h3>
        <p>
                I publish the articles from a CMS <a href="sanity.io">Sanity</a>. Honestly there's a lot of work left to do on this site, so it's quite janky at times. And now that I look back, some of the elements here really cringe me out lmao
        </p>
<h3><strong>future plans</strong><hr/></h3>
	<p>

		With all the AI stuff going on currently, I'm quite pessimistic about the future of devs lol. However, I still love coding and when I'm back, I'm planning to get into Android app development with the MDY guidelines and want to do more privacy-friendly FOSS projects in the future.
		<br />
		<br />
                   
	</p>
	<p>
		Anyway, I just wanted to say Hi and let you know what's going on.
	</p>
	<p>Until we meet again 👋</p>
	<p>
		Best regards, <br />
		at-pyrix

               <br/>
                <span><i>Last updated: September 28, 2024</i></span>
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
		font-size: 2.3rem;
		margin-bottom: 3rem;
		text-align: center;
		font-family: 'Monument Extended', sans-serif !important;
		width: 100%;
		display: block;
		color: hsl(170, 36%, 55%);
	}

        h3 {
font-family: 'Monument Extended', sans-serif !important;
text-transform: uppercase;
font-size: 1.2rem;
color: hsl(170, 36%, 55%) !important;
margin-top: 2rem !important;
margin-top: 1.5rem !important;
        }

	.title-line {
		border-color: #3f6e6a;
		margin-block: 2rem;
		width: 100%;
	}

        hr:not(.title-line) {
        margin-block: 0.7rem;
        border-color: transparent;
	}


	img {
		float: right;
		margin: 0 1.5rem 2rem 1.5rem;
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
