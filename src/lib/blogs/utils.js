export function estimateReadTime(body) {
	const wordsPerMinute = 183;
	const wordCount = body.split(' ').length;
	const readTime = Math.ceil(wordCount / wordsPerMinute);
	return readTime;
}

export function daysAgo(strDate) {
	let date = new Date(strDate.replaceAll('-', '/'));
	let today = new Date();
	const days = parseInt((today - date) / (1000 * 60 * 60 * 24), 10);

	if (days === 0) {
		return 'Today';
	} else if (days < 30) {
		if (days > 7) {
			return Math.floor(days / 7) + (Math.floor(days / 7) == 1 ? ' week' : ' weeks');
		}
		return days + ' day' + (days > 1 ? 's' : '');
	} else if (days < 365) {
		let months = Math.floor(days / 30);
		return months + ' month' + (months > 1 ? 's' : '');
	} else {
		let years = Math.floor(days / 365);
		let remainingDays = days % 365;
		return years + ' year' + (years > 1 ? 's' : '') + (remainingDays > 0 ? ' ' + remainingDays + ' day' + (remainingDays > 1 ? 's' : '') : '');
	}
}

export function lighten(hexColor, value) {
	// Extract the RGB components from the integer
	const colorInt = parseInt(hexColor.slice(1), 16);
	const red = (colorInt >> 16) & 255;
	const green = (colorInt >> 8) & 255;
	const blue = colorInt & 255;

	// Convert the RGB values to HSL
	const r = red / 255;
	const g = green / 255;
	const b = blue / 255;

	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);
	let h,
		s,
		l = (max + min) / 2;

	if (max === min) {
		h = s = 0;
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

		switch (max) {
			case r:
				h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
				break;
			case g:
				h = ((b - r) / d + 2) / 6;
				break;
			case b:
				h = ((r - g) / d + 4) / 6;
				break;
		}
	}

	l = value;

	// Convert the HSL values back to RGB
	let c = (1 - Math.abs(2 * l - 1)) * s;
	let x = c * (1 - Math.abs(((h * 6) % 2) - 1));
	let m = l - c / 2;

	let newRed, newGreen, newBlue;
	if (h < 1 / 6) {
		newRed = c;
		newGreen = x;
		newBlue = 0;
	} else if (h < 2 / 6) {
		newRed = x;
		newGreen = c;
		newBlue = 0;
	} else if (h < 3 / 6) {
		newRed = 0;
		newGreen = c;
		newBlue = x;
	} else if (h < 4 / 6) {
		newRed = 0;
		newGreen = x;
		newBlue = c;
	} else if (h < 5 / 6) {
		newRed = x;
		newGreen = 0;
		newBlue = c;
	} else {
		newRed = c;
		newGreen = 0;
		newBlue = x;
	}

	newRed = Math.round((newRed + m) * 255);
	newGreen = Math.round((newGreen + m) * 255);
	newBlue = Math.round((newBlue + m) * 255);

	// Format the new color as an RGB string
	const newColor = `${newRed}, ${newGreen}, ${newBlue}`;
	return newColor;
}
