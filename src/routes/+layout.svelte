<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- profile data contains a static asset URL */
	import { onMount, tick } from 'svelte';
	import { browser } from '$app/environment';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { profile } from '$lib/content';

	let { children } = $props();
	let menuOpen = $state(false);
	let active = $state('work');
	let menuButton = $state<HTMLButtonElement | null>(null);
	let mobileNavigation = $state<HTMLElement | null>(null);
	let mainElement = $state<HTMLElement | null>(null);
	let footerElement = $state<HTMLElement | null>(null);
	let focusBeforeMenu: HTMLElement | null = null;
	const navigation = [
		{ id: 'work', label: 'Work' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'contact', label: 'Contact' }
	];

	$effect(() => {
		if (!browser) return;
		document.body.classList.toggle('menu-open', menuOpen);
		mainElement?.toggleAttribute('inert', menuOpen);
		footerElement?.toggleAttribute('inert', menuOpen);
	});

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
		const scrollToHash = (hash: string) => {
			const target = document.getElementById(hash.slice(1));
			if (!target) return false;
			target.scrollIntoView({
				behavior: prefersReducedMotion.matches ? 'auto' : 'smooth',
				block: 'start'
			});
			return true;
		};
		const onDocumentClick = (event: MouseEvent) => {
			if (
				event.defaultPrevented ||
				event.button !== 0 ||
				event.metaKey ||
				event.ctrlKey ||
				event.shiftKey
			)
				return;
			const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
			if (!link || link.target || link.getAttribute('href') === '#') return;
			const hash = link.getAttribute('href');
			if (!hash || !scrollToHash(hash)) return;
			event.preventDefault();
			history.pushState(null, '', hash);
		};
		const sections = navigation
			.map(({ id }) => document.getElementById(id))
			.filter((section): section is HTMLElement => section !== null);
		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible) active = visible.target.id;
			},
			{ rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.6] }
		);
		sections.forEach((section) => observer.observe(section));
		const onKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && menuOpen) closeMenu();
		};
		window.addEventListener('keydown', onKeydown);
		document.addEventListener('click', onDocumentClick);
		return () => {
			observer.disconnect();
			window.removeEventListener('keydown', onKeydown);
			document.removeEventListener('click', onDocumentClick);
			document.body.classList.remove('menu-open');
		};
	});

	async function openMenu() {
		focusBeforeMenu = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		menuOpen = true;
		await tick();
		mobileNavigation?.querySelector<HTMLElement>('a, button')?.focus();
	}

	function closeMenu(restoreFocus = true) {
		menuOpen = false;
		if (restoreFocus) requestAnimationFrame(() => (focusBeforeMenu ?? menuButton)?.focus());
	}

	function trapMenuFocus(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;
		const controls = [
			...(mobileNavigation?.querySelectorAll<HTMLElement>('a, button:not([disabled])') ?? [])
		];
		if (controls.length === 0) return;
		const first = controls[0];
		const last = controls[controls.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
	<nav class="nav-shell" aria-label="Primary navigation">
		<a class="brand" href="#home" onclick={() => closeMenu()}>Aaditya Jain</a>
		<div class="desktop-nav">
			{#each navigation as item (item.id)}
				<a
					href={`#${item.id}`}
					class:active={active === item.id}
					aria-current={active === item.id ? 'location' : undefined}>{item.label}</a
				>
			{/each}
		</div>
		<a class="resume-link" href={profile.resume} target="_blank" rel="noreferrer">View résumé ↗</a>
		<button
			class="menu-button"
			type="button"
			aria-expanded={menuOpen}
			aria-controls="mobile-navigation"
			aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
			bind:this={menuButton}
			onclick={() => (menuOpen ? closeMenu() : openMenu())}
		>
			<span>{menuOpen ? 'Close' : 'Menu'}</span><i aria-hidden="true"></i>
		</button>
	</nav>
	{#if menuOpen}
		<button
			class="menu-scrim"
			type="button"
			aria-label="Close navigation"
			onclick={() => closeMenu()}
		></button>
		<nav
			class="mobile-nav"
			id="mobile-navigation"
			aria-label="Mobile navigation"
			bind:this={mobileNavigation}
		>
			{#each navigation as item, index (item.id)}
				<a href={`#${item.id}`} onclick={() => closeMenu(false)} onkeydown={trapMenuFocus}
					><span>0{index + 1}</span>{item.label}</a
				>
			{/each}
			<a
				href={profile.resume}
				target="_blank"
				rel="noreferrer"
				onclick={() => closeMenu(false)}
				onkeydown={trapMenuFocus}><span>05</span>View résumé</a
			>
		</nav>
	{/if}
</header>

<main id="main" bind:this={mainElement}>{@render children()}</main>

<footer class="site-footer" bind:this={footerElement}>
	<div class="footer-main">
		<div class="footer-intro">
			<p>{profile.footer.eyebrow}</p>
			<h2>{profile.footer.title}</h2>
			<a class="footer-email" href={`mailto:${profile.email}`}
				>{profile.email}<span aria-hidden="true">↗</span></a
			>
			<span class="availability"><i aria-hidden="true"></i>{profile.footer.availability}</span>
		</div>
		<div class="footer-directory">
			<nav aria-label="Footer navigation">
				<p>Explore</p>
				{#each profile.footer.navigation as item (item.href)}
					<a href={item.href}>{item.label}<span aria-hidden="true">↘</span></a>
				{/each}
			</nav>
			<nav aria-label="Social profiles">
				<p>Elsewhere</p>
				{#each profile.links as link (link.href)}
					<a href={link.href} target="_blank" rel="noreferrer"
						>{link.label}<span aria-hidden="true">↗</span></a
					>
				{/each}
				<a href={profile.resume} target="_blank" rel="noreferrer"
					>View résumé<span aria-hidden="true">↗</span></a
				>
			</nav>
		</div>
	</div>
	<div class="footer-meta">
		<a class="footer-brand" href="#home">{profile.name}<span>{profile.role}</span></a>
		<span>{profile.location}</span><span>© 2026</span>
	</div>
</footer>
