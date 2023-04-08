export function estimateReadTime(post) {
	const wordsPerMinute = 183;
	const wordCount = post.body.split(' ').length;
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
			return Math.floor(days / 7) + (days / 7 <= 1 ? ' week' : ' weeks');
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

function hexToHSL(hex) {
	// Convert hex to RGB
	const r = parseInt(hex.slice(1, 3), 16) / 255;
	const g = parseInt(hex.slice(3, 5), 16) / 255;
	const b = parseInt(hex.slice(5, 7), 16) / 255;

	// Find the maximum and minimum values of R, G, B
	const max = Math.max(r, g, b);
	const min = Math.min(r, g, b);

	// Calculate the hue
	let h = 0;
	if (max === min) {
		h = 0;
	} else if (max === r) {
		h = ((g - b) / (max - min) + 1) * 60;
	} else if (max === g) {
		h = ((b - r) / (max - min) + 3) * 60;
	} else {
		h = ((r - g) / (max - min) + 5) * 60;
	}

	// Calculate the lightness
	const l = (max + min) / 2;

	// Calculate the saturation
	let s = 0;
	if (max === min) {
		s = 0;
	} else if (l < 0.5) {
		s = (max - min) / (max + min);
	} else {
		s = (max - min) / (2 - max - min);
	}

	// Return the HSL color value as an array
	return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
}

function hslToRGB(h, s, l) {
	// Convert HSL to RGB
	let r, g, b;

	if (s === 0) {
		r = g = b = l;
	} else {
		const hue2rgb = (p, q, t) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;

		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

export function lighten(hexColor, value) {
	const colorInt = parseInt(hexColor.slice(1), 16);
	// Extract the RGB components from the integer
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
