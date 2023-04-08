import { writable } from 'svelte/store';

export const showToast = writable(false);
export const message = writable('');
export const description = writable('');
export const savedItems = writable([]);

let $savedItems;
savedItems.subscribe((value) => ($savedItems = value));

export function checkSaved(slug) {
	const $savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
	savedItems.set($savedItems);
	return $savedItems.includes(slug);
}

export function bookmark(slug) {
	if (!checkSaved(slug)) {
		$savedItems.push(slug);
		savedItems.set($savedItems);
	} else {
		$savedItems = $savedItems.filter((item) => item != slug);
		savedItems.set($savedItems);
	}

	localStorage.setItem('savedItems', JSON.stringify($savedItems));
}

export function share(slug, title) {
	if (navigator.share) {
		navigator.share({
			title: title,
			url: `https://notyasho.netlify.app/article/${slug}`
		});
		return;
	}

	message.set('Link copied');
	description.set('Copied link to the clipboard.');
	const currentUrl = `${title}\n\nhttps://notyasho.netlify.app/article/${slug}`;
	navigator.clipboard.writeText(currentUrl);
	showToast.set(true);
	setTimeout(() => showToast.set(false), 2000);
}