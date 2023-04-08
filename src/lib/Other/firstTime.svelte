<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let showModal = false;

	onMount(() => {
		const hasUnderstood = localStorage.getItem('hasUnderstood');
		if (!hasUnderstood) showModal = true;
	});

	function destroy(e) {
		showModal = false;
		localStorage.setItem('hasUnderstood', true);
	}
</script>

{#if showModal}
	<div class="modal-overlay">
		<div class="modal">
			<div class="modal-header">
				<Icon icon="ic:twotone-construction" />
				<h2>Under Construction</h2>
			</div>
			<div class="modal-body">
				<p>Thanks for visiting! Just a heads up: <strong>this site is still under development</strong>. If something breaks, that's the reason.</p>
				<p>
					The articles are mostly placeholders and AI-generated, so <strong
						>they may contain false information</strong
					>. Once the site is working, I'll delete them and post actual content.
				</p>
				<p><strong>Thank you!</strong></p>
			</div>
			<div class="modal-footer">
				<button class="cta-btn btn" on:click={destroy}>I understand</button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal-overlay {
		z-index: 1000000;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.modal {
		margin: 2rem;
		font-family: 'Larsseit', sans-serif !important;
		background-color: #1d1c2986;
		backdrop-filter: blur(10px);
		color: #fff;
		padding: 20px;
		border-radius: 1rem;
		border: 0.1px solid $clr-accent-0;
		text-align: center;
		max-width: 500px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	}

	.modal-header {
		font-size: larger;
		margin: 1rem 0 1.5rem 0;
		text-align: center;

		:global(svg) {
			font-size: 3rem;
			margin-bottom: 1rem;
		}
	}

	.modal-body {
		color: $clr-text-2;
		padding-inline: 2rem;
		margin-bottom: 20px;

		p {
			text-align: center;
			font-family: 'Larsseit', sans-serif !important;
			margin-bottom: 1rem;

			&:last-child {
				margin-bottom: 0;
			}
		}
	}

	.modal-footer {
		display: flex;
		justify-content: flex-end;
	}

	.cta-btn {
		border: 1px solid $clr-accent-0;
		font-style: bold;
		margin: 1rem auto;
	}

	.cta-btn:hover {
		background: $clr-accent-0;
		color: black;
	}
</style>
