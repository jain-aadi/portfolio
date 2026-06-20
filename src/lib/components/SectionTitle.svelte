<script lang="ts">
	let {
		eyebrow,
		title,
		description,
		align = 'left'
	} = $props<{
		eyebrow?: string;
		title: string;
		description?: string;
		align?: 'left' | 'center';
	}>();
</script>

<div class:items-center={align === 'center'} class="flex flex-col gap-3 {align === 'center' ? 'text-center' : 'text-left'}">
	{#if eyebrow}
		<p class="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">{eyebrow}</p>
	{/if}
	<h2 class="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
	{#if description}
		<p class="max-w-2xl text-base leading-7 text-slate-600">{description}</p>
	{/if}
</div>
