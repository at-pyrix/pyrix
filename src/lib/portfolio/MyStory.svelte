<section id="my-story">
	<div class="my-story__content">
		<h1>my story</h1>
		<div class="p__left">
			<p>
				I love to code. I got my first computer back when I was 7. I was always fascinated by
				computers and technology in general. As a kid, I always wanted to learn how to hack.
				Although I didn't always like programming as I do today because I didn't know how much you
				could really do with it. I wrote my first line of code in HTML when I was 10 if only you can
				call that 'code'.
			</p>
		</div>

		<div class="p__right">
			<p>
				I <em>actually</em> started programming about <span class="year">two</span> years ago when a
				friend of mine was getting 'stalked' by someone. The stalker was sending him pictures of him
				during online classes, so we decided to find out who it was
				<em>(because the lecture was boring)</em>. I got to work, I made a
				<a href="https://grabify.link/" target="_blank" rel="noreferrer">Grabbify</a> link of a youtube
				page. We sent the link to him. To our chance, he clicked on the link and we got his IP address.
				I was stupid and didn't know that you could get only an approx. location through the public ip
				address. As I couldn't get the coordinates through grabbify, so I researched on how to get it
				and came across a youtube video of a python tutorial to find someone's location using their IP
				address.
			</p>
		</div>

		<div class="p__left">
			<p>
				I didn't understand anything and just copy-pasted whatever he wrote and I was feeling as I
				was the coolest hacker alive. After 2 hours of trial-and-error I finally got the location of
				the stalker, and well it was the same one as grabbify.
			</p>
		</div>

		<div class="p__right">
			<p>
				After giving up on that one, I tried many projects such as a mobile location "tracker". But
				anyways, that was the thing that got me started. Since then, I'm writing code almost
				everyday I have made many projects over the years and learned a lot although most of them
				are just stupid.
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	#my-story {
		min-height: 120vh;
		background: url('https://raw.githubusercontent.com/NotYasho/personal-portfolio/master/static/img/bg/my-story-bg.webp?token=GHSAT0AAAAAAB4WNDHORQS5PSCDDVJKFNJIY6ABJSA');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}

	#my-story {
		padding-top: 4%;
		font-family: 'Proxima Nova', sans-serif;

		h1 {
			font-weight: 600;
			font-size: 2rem;
			color: #fcfcfc;
			font-family: 'Nofex', sans-serif;
			text-transform: uppercase;
			margin-bottom: 3rem;
			text-align: center;
		}

		p {
			margin: 0 auto;
			width: 55vw;
			font-size: 1.125rem;
			line-height: 1.6rem;
			color: #e9e9e9;
			font-family: $body-font;
			margin-block: 3%;
		}
		
		.p__left {
			width: 100%;
			p {
				margin-right: auto;
			}
		}
		
		.p__right {
			width: 100%;
			p {
				text-align: right;
			}
		}

		p a {
			color: #e2e2e2;
			text-decoration: underline rgb(221, 192, 255);
		}

		p a:hover {
			color: rgb(255, 208, 0);
			text-decoration-color: rgb(255, 217, 0);
		}
	}

	@media screen and (max-width: $tablet) {
		#my-story {
			padding-top: 10%;
			background-attachment: scroll;
		}

		#my-story {
			p {
				width: 85vw;
				text-align: justify !important;
				text-justify: newspaper;
				hyphens: auto;
				padding-bottom: 3%;
			}
			p {
				text-indent: 2em;
			}
		}
	}
</style>
