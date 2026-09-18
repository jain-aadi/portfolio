export const profile = {
	name: 'Aaditya Jain',
	shortName: 'AJ',
	role: 'Full-stack engineer who turns product needs into reliable software.',
	intro:
		'I turn product needs into interfaces, services and automation—choosing and learning the tools the problem actually needs.',
	siteUrl: 'https://portfolio-one-black-33.vercel.app',
	socialImage: '/portfolio-social.png',
	location: 'Delhi, India',
	heroProof: [
		{ label: 'Clarify', detail: 'Turn an open need into a focused plan' },
		{ label: 'Build', detail: 'Connect interface, service and workflow' },
		{ label: 'Adapt', detail: 'Use the tools that fit the problem' }
	],
	email: 'jainaadi333@gmail.com',
	availability: 'Open to engineering roles and scoped product work.',
	resume: '/Aaditya-Jain-Resume.pdf',
	footer: {
		eyebrow: 'Open to the right next problem',
		title: 'Let’s build something\nthat holds up.',
		availability: 'Available for full-time engineering roles and focused product work.',
		navigation: [
			{ label: 'Selected work', href: '#work' },
			{ label: 'Experience', href: '#experience' },
			{ label: 'Capabilities', href: '#skills' },
			{ label: 'Contact', href: '#contact' }
		]
	},
	links: [
		{ label: 'GitHub', href: 'https://github.com/jain-aadi' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/aaditya-jain-62baa12aa/' },
		{ label: 'X', href: 'https://x.com/aadi_jain333' }
	]
};

export const projects = [
	{
		index: '01',
		title: 'GetPlaced',
		type: 'Job-search aggregation tool',
		summary:
			'One search flow for Adzuna, Jooble and Remotive, with a person making the final shortlist.',
		problem:
			'Job APIs return similar information in different shapes. A provider going down should not stop the rest of the search.',
		outcome: 'Normalises, deduplicates and caches search results before a user reviews them.',
		role: 'Independent end-to-end build',
		proof: '3 job providers normalised into one search flow.',
		stack: ['Python', 'OpenAI-compatible APIs', 'Provider adapters', 'Local storage'],
		map: ['Profile', '3 sources', 'Deduplicate', 'Shortlist'],
		notes: [
			'Normalised Adzuna, Jooble and Remotive results into one job model.',
			'Continued searching and logged the error when an individual provider failed.',
			'Used a 0–100 fit score as a ranking aid, then let the user check the final shortlist.',
			'Cached the aggregated result instead of repeating upstream requests.'
		],
		tradeoff:
			'The fit score helps compare listings. It does not decide where someone should apply.',
		href: 'https://github.com/jain-aadi/get_placed'
	},
	{
		index: '02',
		title: 'HTTP server in Go',
		type: 'TCP and request-parsing exercise',
		summary: 'A small HTTP/1.1 server built on Go TCP primitives rather than net/http.',
		problem:
			'Frameworks hide request boundaries, connection lifecycles and streaming. This was a way to work through those pieces directly.',
		outcome:
			'A working server with explicit parser states, basic keep-alive and a streaming HTTPBin route.',
		role: 'Independent systems-learning build',
		proof: '4 explicit stages from TCP connection to HTTP response.',
		stack: ['Go', 'net.Listen', 'TCP', 'State machine'],
		map: ['TCP', 'Request line', 'Headers', 'Response'],
		notes: [
			'Accepted TCP connections with net.Listen and handled each one in its own goroutine.',
			'Parsed request lines, headers and Content-Length bodies through distinct parser states.',
			'Added basic keep-alive behavior for multiple requests on a connection.',
			'Built /httpbin/stream/<N> to forward and stream an upstream response.'
		],
		tradeoff:
			'This is a learning implementation, not a replacement for Go’s production HTTP server.',
		href: 'https://github.com/jain-aadi/http'
	}
];

export const experience = [
	{
		company: 'Gravity',
		role: 'AI Agent Builder Intern',
		period: 'Aug 2026 — Present',
		stack: ['Activepieces', 'LLM orchestration', 'Slack API', 'GitHub API'],
		summary: 'I build agent workflows for release communication and internal review loops.',
		highlights: [
			'Turned merged pull requests into internal changelogs and customer release notes.',
			'Built a Slack approval loop that sends reviewer feedback back into the next revision.'
		]
	},
	{
		company: 'Sage Learning',
		role: 'Full-Stack Developer Intern',
		period: 'Aug 2026 — Present',
		stack: ['Angular', 'Azure Functions', 'TypeScript', 'Make.com'],
		summary: 'I work on Azure-backed product features and Angular interfaces for internal teams.',
		highlights: [
			'Built notification work around preferences and delivery history without blocking the request path.',
			'Replaced recurring reporting work with a scheduled automation and cleaner API handling.'
		]
	}
];

export const capabilities = [
	{
		label: 'Product engineering',
		proof: 'Interfaces and product features',
		tools: ['TypeScript', 'Angular', 'React', 'SvelteKit']
	},
	{
		label: 'Backend work',
		proof: 'HTTP services, APIs and integrations',
		tools: ['Go', 'Python', 'Azure Functions', 'Express']
	},
	{
		label: 'Workflow automation',
		proof: 'Internal operations and approval loops',
		tools: ['Activepieces', 'Make.com', 'Slack API', 'GitHub API']
	}
];

export const offerings = [
	{
		title: 'Product features',
		body: 'A defined interface or workflow that needs to be designed, built and handed back in working order.'
	},
	{
		title: 'APIs and integrations',
		body: 'Backend services, third-party integrations and data flow that stay understandable when requirements change.'
	},
	{
		title: 'Internal automation',
		body: 'Operational steps that are repetitive enough to deserve a reliable workflow instead of another spreadsheet.'
	}
];

export const workingStyle = [
	'Get clear on the problem and what “done” means.',
	'Write down a small technical approach before implementation starts.',
	'Share work in reviewable pieces instead of disappearing until the end.',
	'Leave setup notes, tradeoffs and next steps with the handoff.'
];
