export const profile = {
	fullName: 'Aiden Chen',
	title: '',
	institute: 'University of Southern California',
	author_name: 'Shuheng Chen', // Author name to be highlighted in the papers section
	research_areas: [
		{ title: 'AI Applications', description: 'I am extremely interested in AI+X (Healthcare, Finance and Transportation)', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
	x: 'https://x.com/aiden_chen3978',
	github: 'https://github.com/Cryo3978',
	gitlab: '',
	scholar: 'https://scholar.google.com/citations?user=7jKYmkMAAAAJ&hl=en',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Aiden',
	default_description: '',
	default_image: '/images/astro-academia.png',
}
