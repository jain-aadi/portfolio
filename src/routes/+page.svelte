<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- content data contains external and static asset URLs */
	import {
		capabilities,
		experience,
		offerings,
		profile,
		projects,
		workingStyle
	} from '$lib/content';
</script>

<svelte:head>
	<title>{profile.name} - Full-stack engineer</title>
	<meta name="description" content={profile.role} />
	<meta name="robots" content="index,follow" />
	<meta name="theme-color" content="#064e7a" />
	<link rel="canonical" href={profile.siteUrl} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={profile.siteUrl} />
	<meta property="og:title" content={`${profile.name} - Full-stack engineer`} />
	<meta property="og:description" content={profile.intro} />
	<meta property="og:image" content={`${profile.siteUrl}${profile.socialImage}`} />
	<meta property="og:image:width" content="1728" />
	<meta property="og:image:height" content="912" />
	<meta
		property="og:image:alt"
		content="Abstract blue geometric orb from Aaditya Jain's portfolio"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${profile.name} - Full-stack engineer`} />
	<meta name="twitter:description" content={profile.intro} />
	<meta name="twitter:image" content={`${profile.siteUrl}${profile.socialImage}`} />
	<meta
		name="twitter:image:alt"
		content="Abstract blue geometric orb from Aaditya Jain's portfolio"
	/>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Aaditya Jain",
			"url": "https://portfolio-one-black-33.vercel.app",
			"image": "https://portfolio-one-black-33.vercel.app/portfolio-social.png",
			"jobTitle": "Full-stack engineer",
			"description": "Full-stack engineer building practical web products and backend systems.",
			"email": "jainaadi333@gmail.com",
			"sameAs": [
				"https://github.com/jain-aadi",
				"https://www.linkedin.com/in/aaditya-jain-62baa12aa/",
				"https://x.com/aadi_jain333"
			]
		}
	</script>
</svelte:head>

<section class="hero" id="home">
	<div class="thirds" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
	<svg class="hero-curve" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true"
		><path d="M-100 570 C 260 830 520 780 735 590 S 1120 250 1540 380" /></svg
	>
	<div class="hero-copy">
		<p class="role">Aaditya Jain - Full-stack engineer - Delhi</p>
		<h1><span>USEFUL PRODUCTS.</span><span>RELIABLE</span><span>SYSTEMS.</span></h1>
	</div>
	<div class="hero-intro">
		<p>{profile.intro}</p>
		<a class="hero-resume" href={profile.resume} target="_blank" rel="noreferrer"
			>Resume (PDF) <span aria-hidden="true">↗</span></a
		>
	</div>
	<div class="hero-actions">
		<a class="hero-cta" href="#work">View selected work <span>↓</span></a>
		<a class="hero-cta quiet" href="#contact">Discuss a project <span>↗</span></a>
	</div>
	<div class="proof-strip" aria-label="Areas of work">
		{#each profile.heroProof as item (item.label)}
			<div><strong>{item.label}</strong><span>{item.detail}</span></div>
		{/each}
	</div>
</section>

<section class="work section" id="work">
	<header class="section-heading">
		<p>01 / Selected work</p>
		<h2>Selected work.<br />The actual decisions.</h2>
	</header>
	<div class="projects">
		{#each projects as project (project.title)}
			<article class="project">
				<header>
					<span class="project-index">{project.index}</span>
					<p class="project-type">{project.type}</p>
					<a class="project-source" href={project.href} target="_blank" rel="noreferrer"
						><span>View source</span><b aria-hidden="true">↗</b></a
					>
				</header>
				<div class="project-content">
					<div class="project-story">
						<h3>{project.title}</h3>
						<p>{project.summary}</p>
						<dl class="project-evidence">
							<div>
								<dt>Role</dt>
								<dd>{project.role}</dd>
							</div>
							<div>
								<dt>Proof point</dt>
								<dd>{project.proof}</dd>
							</div>
						</dl>
						<div class="project-outcome">
							<span>Result</span>
							<strong>{project.outcome}</strong>
						</div>
					</div>
					<figure class="project-diagram">
						<figcaption>Architecture snapshot</figcaption>
						<ol class="system-map" aria-label={`${project.title} flow`}>
							{#each project.map as step, index (step)}
								<li class:entry={index === 0} class:exit={index === project.map.length - 1}>
									<span>0{index + 1}</span><strong>{step}</strong>
								</li>
							{/each}
						</ol>
					</figure>
				</div>
				<details class="project-notes">
					<summary>Read the build notes <span>+</span></summary>
					<div>
						<p>{project.problem}</p>
						<ul>
							{#each project.notes as note (note)}<li>{note}</li>{/each}
						</ul>
						<p class="tradeoff">{project.tradeoff}</p>
					</div>
				</details>
				<footer aria-label={`${project.title} technologies`}>
					<span class="stack-label">Built with</span>
					{#each project.stack as technology (technology)}<span>{technology}</span>{/each}
				</footer>
			</article>
		{/each}
	</div>
</section>

<section class="services section" aria-labelledby="services-title">
	<header class="section-heading">
		<p>02 / Project work</p>
		<h2 id="services-title">Where I can help.</h2>
	</header>
	<div class="offerings">
		{#each offerings as offering, index (offering.title)}<article>
				<span>0{index + 1}</span>
				<h3>{offering.title}</h3>
				<p>{offering.body}</p>
			</article>{/each}
	</div>
</section>

<section class="skills section" id="skills">
	<header class="section-heading">
		<p>03 / Capabilities</p>
		<h2>What I work on.</h2>
	</header>
	<div class="capabilities">
		{#each capabilities as capability, index (capability.label)}<article>
				<span>0{index + 1}</span>
				<h3>{capability.label}</h3>
				<p>{capability.proof}</p>
				<div>
					{#each capability.tools as tool (tool)}<b>{tool}</b>{/each}
				</div>
			</article>{/each}
	</div>
</section>

<section class="experience section" id="experience">
	<header class="section-heading compact">
		<p>04 / Experience</p>
		<h2>Work with other people’s systems.</h2>
	</header>
	<div class="jobs">
		{#each experience as job, index (job.company)}<article>
				<div class="job-meta">
					<span>0{index + 1}</span>
					<p>{job.period}</p>
				</div>
				<div class="job-main">
					<h3>{job.company}</h3>
					<h4>{job.role}</h4>
					<p>{job.summary}</p>
					<ul>
						{#each job.highlights as item (item)}<li>{item}</li>{/each}
					</ul>
				</div>
				<div class="job-stack">
					{#each job.stack as technology (technology)}<span>{technology}</span>{/each}
				</div>
			</article>{/each}
	</div>
</section>

<section class="process section" aria-labelledby="process-title">
	<header class="section-heading">
		<p>05 / Working together</p>
		<h2 id="process-title">A simple way to work.</h2>
	</header>
	<div class="process-grid">
		<p>{profile.availability}</p>
		<ol>
			{#each workingStyle as step, index (step)}<li><span>0{index + 1}</span>{step}</li>{/each}
		</ol>
	</div>
</section>

<section class="contact section" id="contact">
	<div class="contact-heading">
		<p class="contact-eyebrow">06 / Contact</p>
		<h2>Hiring for a role?<br />Have a defined project?</h2>
		<p class="contact-note">
			A good starting point is a feature, integration, API or workflow with someone available to
			make decisions.
		</p>
	</div>
	<div class="contact-actions">
		<a class="email" href={`mailto:${profile.email}`}>
			<span class="email-label">Email</span>
			<span class="email-address">{profile.email}</span>
			<span class="email-arrow" aria-hidden="true">↗</span>
		</a>
		<nav class="contact-links" aria-label="Professional links">
			{#each profile.links as link (link.href)}<a href={link.href} target="_blank" rel="noreferrer"
					>{link.label} <span aria-hidden="true">↗</span></a
				>{/each}<a href={profile.resume} target="_blank" rel="noreferrer"
				>View Resume <span aria-hidden="true">↗</span></a
			>
		</nav>
	</div>
</section>
