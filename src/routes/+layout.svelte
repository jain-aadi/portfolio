<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-950 flex flex-col">
	<nav class="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur shadow-sm">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
			<a href="#home" class="text-2xl font-medium">Aaditya</a>

			<div class="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
				<a href="#home" class="group relative inline-flex transition hover:text-slate-950">
					Home
					<span class="absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 bg-slate-950 transition-transform duration-300 group-hover:scale-x-100"></span>
				</a>
				<a href="#about" class="group relative inline-flex transition hover:text-slate-950">
					About
					<span class="absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 bg-slate-950 transition-transform duration-300 group-hover:scale-x-100"></span>
				</a>
				<a href="#projects" class="group relative inline-flex transition hover:text-slate-950">
					Projects
					<span class="absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 bg-slate-950 transition-transform duration-300 group-hover:scale-x-100"></span>
				</a>
				<a href="#contact" class="group relative inline-flex transition hover:text-slate-950">
					Contacts
					<span class="absolute inset-x-0 -bottom-0.5 h-[2px] scale-x-0 bg-slate-950 transition-transform duration-300 group-hover:scale-x-100"></span>
				</a>
			</div>

			<a href="#contact" class="inline-flex rounded-full border border-slate-900 bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white">
				Resume
			</a>
		</div>
	</nav>

	<div class="hidden lg:flex fixed right-6 top-1/2 z-40 -translate-y-1/2 flex-col items-center rounded-[10px] border border-slate-200 bg-white/85 shadow-xl shadow-slate-900/5 backdrop-blur-sm">
		<span class="sr-only">Social links</span>
		<a href="https://x.com/aadi_jain333" target="_blank" rel="noreferrer" aria-label="X" class="group flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-400 transition hover:bg-white hover:text-sky-600">
			<img class="h-5 w-5 fill-current grayscale hover:grayscale-0" src="/x.png" alt="X"/>
		</a>
		<a href="https://x.com/aadi_jain333" target="_blank" rel="noreferrer" aria-label="X" class="group flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-400 transition hover:bg-white hover:text-sky-600">
			<img class="h-5 w-5 fill-current grayscale hover:grayscale-0" src="/link.png" alt="linkedin"/>
		</a>
		<a href="https://x.com/aadi_jain333" target="_blank" rel="noreferrer" aria-label="X" class="group flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-400 transition hover:bg-white hover:text-sky-600">
			<img class="h-5 w-5 fill-current grayscale hover:grayscale-0" src="/github.png" alt="GitHub"/>
		</a>
		<a href="https://x.com/aadi_jain333" target="_blank" rel="noreferrer" aria-label="X" class="group flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-400 transition hover:bg-white hover:text-sky-600">
			<img class="h-5 w-5 fill-current grayscale hover:grayscale-0" src="/leet.svg" alt="LeetCode"/>
		</a>
		<a href="https://x.com/aadi_jain333" target="_blank" rel="noreferrer" aria-label="X" class="group flex h-10 w-10 items-center justify-center bg-slate-100 text-slate-400 transition hover:bg-white hover:text-sky-600">
			<img class="h-5 w-5 fill-current grayscale hover:grayscale-0" src="/bsky.png" alt="Bluesky"/>
		</a>
	</div>

	<main class="grow flex flex-col">
		{@render children()}
	</main>
</div>

