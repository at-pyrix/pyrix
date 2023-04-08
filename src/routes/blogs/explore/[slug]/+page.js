import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'u62jjaxi',
	dataset: 'production',
	apiVersion: '2023-01-05',
	useCdn: false
});

function daysAgo(strDate) {
	let date = new Date(strDate.replaceAll('-', '/'));
	let today = new Date();
	const days = parseInt((today - date) / (1000 * 60 * 60 * 24), 10);

	if (days === 0) {
		return 'today';
	} else if (days < 30) {
		if (days > 7) {
			return Math.floor(days / 7) + (days / 7 <= 1 ? ' week' : ' weeks') + ' ago';
		}
		return days + ' day' + (days > 1 ? 's' : '') + ' ago';
	} else if (days < 365) {
		let months = Math.floor(days / 30);
		return months + ' month' + (months > 1 ? 's' : '') + ' ago';
	} else {
		let years = Math.floor(days / 365);
		let remainingDays = days % 365;
		return (
			years + ' year' + (years > 1 ? 's' : '') + (remainingDays > 0 ? ' ' + remainingDays + ' day' + (remainingDays > 1 ? 's' : '') : '') + ' ago'
		);
	}
}

export async function load({ params }) {
	const category = await client.fetch(`*[_type == "category" && name == "${params.slug}"][0] {
		...,
		image {
			asset->{
				...,
				metadata
			}
		}
	}
	`);
	const blogs = await client.fetch(`*[_type == "blog" && category._ref=="${category._id}"] {
		...,
		category->{
		  name,
		  image,
		  icon,
		  color
		},
		featuredImage{
			asset->{
				...,
				metadata
			}
		}
	  }`);

	if (category && blogs) {
		return {
			blogs: blogs.map((blog) => ({
				...blog,
				daysAgo: daysAgo(blog.date)
			})),
			category
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
