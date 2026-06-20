<script lang="ts">
	let {
		title,
		description,
		image,
		href,
		tech = []
	} = $props<{
		title: string;
		description: string;
		image: string;
		href: string;
		tech?: string[];
	}>();
</script>

<article class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/8">
	<a href={href} target="_blank" rel="noreferrer" class="block">
		<div class="relative h-64 overflow-hidden">
			<img src={image} alt={title} loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
			<div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent"></div>
		</div>
		<div class="space-y-4 p-6">
			<div class="flex items-center justify-between gap-4">
				<h3 class="text-xl font-semibold text-slate-950">{title}</h3>
				<span class="text-sm font-medium text-slate-500">View</span>
			</div>
			<p class="text-sm leading-6 text-slate-600">{description}</p>
			<div class="flex flex-wrap gap-2">
				{#each tech as item}
					<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">{item}</span>
				{/each}
			</div>
		</div>
	</a>
</article>
