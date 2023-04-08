import client from '$lib/blogs/sanityClient';

export async function load({ params }) {
  const data = await client.fetch(`*[_type=="blog" && slug.current == '${params.slug}'][0]{
    ...,
    category->{
      name,
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

  if (data) {
    return {
      blogs: data
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}