import client from '$lib/blogs/sanityClient';

const siteUrl = 'https://notyasho.netlify.app/'

async function getPostsData() {
	const blogs = await client.fetch(`*[_type == "blog"]`)
	return blogs
}

async function categories() {
	const categories = await client.fetch(`*[_type == "category"]`)
	return categories
}

export const GET = async () => {
	const pages = [
		'about',
		'contact',
		'blogs',
		'blogs/saved',
		'blogs/explore',
		...await getPostsData().then((data) => data.map((post) => `article/${post.slug.current}`)),
		...await categories().then((data) => data.map((category) => `blogs/explore/${category.name}`)),
	]

	const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${pages
				.map((page) => {
					return `
            <url>
              <loc>${siteUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
            </url>
          `
				})
				.join('')}
    </urlset>
  `.trim()

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `public, max-age=0, s-maxage=${60 * 60 * 24}`,
		},
	})
}
