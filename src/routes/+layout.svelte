<script lang="ts">
    import './layout.css';
    import favicon from '$lib/assets/favicon.svg';

    let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<!-- Dota Theme: Dark, stone-like backgrounds, serif/sans-serif mix -->
<div class="min-h-screen flex flex-col bg-neutral-950 text-neutral-300 selection:bg-red-900/60 selection:text-white font-sans">
    
    <!-- Top Bar (Mimicking the Dota match timer/score bar) -->
    <div class="fixed top-0 inset-x-0 z-50 border-b-2 border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950/90 shadow-[0_4px_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
            
            <!-- Radiant / Dire Logo style -->
            <a href="#home" class="group flex items-center gap-3 transition-all hover:brightness-125">
                <div class="relative flex h-8 w-8 items-center justify-center rounded bg-red-800 border border-red-500/50 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
                    <!-- Faux Dota slash -->
                    <div class="absolute h-full w-1 bg-red-400 rotate-45 transform"></div>
                </div>
                <span class="text-lg font-bold tracking-widest text-neutral-100 uppercase style-serif">Aaditya Jain</span>
            </a>

            <!-- Central HUD Links -->
            <div class="hidden items-center gap-1 rounded-sm border border-neutral-700 bg-neutral-900/50 p-1 md:flex shadow-inner">
                <a href="#lore" class="px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-400 transition hover:bg-neutral-800 hover:text-amber-500 hover:shadow-[0_0_8px_rgba(245,158,11,0.2)]">Lore</a>
                <a href="#armory" class="px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-400 transition hover:bg-neutral-800 hover:text-amber-500 hover:shadow-[0_0_8px_rgba(245,158,11,0.2)]">Armory</a>
                <a href="#commend" class="px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-400 transition hover:bg-neutral-800 hover:text-amber-500 hover:shadow-[0_0_8px_rgba(245,158,11,0.2)]">Commend</a>
            </div>

            <!-- Net Worth / Gold CTA -->
            <div class="flex items-center gap-4">
                <a href="https://drive.google.com/file/d/18R4WFKFWyoyLzBlgGqtro5wixCuaAH_O/view?usp=sharing" class="flex items-center gap-2 rounded border border-amber-600/50 bg-gradient-to-b from-amber-600/20 to-neutral-900 px-4 py-1.5 text-sm font-bold text-amber-500 transition hover:border-amber-400 hover:brightness-125 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                    <span class="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_5px_#fbbf24]"></span>
                    VIEW SCROLL
                </a>
            </div>
        </nav>
    </div>

    <!-- 6-Slot Inventory (Socials) - Fixed Bottom Right -->
    <div class="hidden lg:block fixed right-6 bottom-6 z-40">
        <p class="mb-2 text-center text-[10px] font-bold uppercase tracking-widest text-neutral-500">Inventory</p>
        <div class="grid grid-cols-3 gap-1 rounded border-2 border-neutral-700 bg-neutral-900 p-2 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
            <a href="https://github.com/jain-aadi" target="_blank" class="group relative flex h-12 w-12 items-center justify-center border border-neutral-600 bg-gradient-to-br from-neutral-700 to-neutral-800 shadow-inner hover:border-amber-400">
                <img class="h-6 w-6 opacity-60 transition group-hover:opacity-100" src="/github.png" alt="GitHub"/>
                <div class="absolute bottom-0 right-0 px-1 text-[9px] font-bold text-amber-500">TP</div>
            </a>
            <a href="https://leetcode.com/u/jain_aadi/" target="_blank" class="group relative flex h-12 w-12 items-center justify-center border border-neutral-600 bg-gradient-to-br from-neutral-700 to-neutral-800 shadow-inner hover:border-amber-400">
                <img class="h-6 w-6 opacity-60 transition group-hover:opacity-100" src="/leet.svg" alt="LeetCode"/>
            </a>
            <a href="https://www.linkedin.com/in/aaditya-jain-62baa12aa/" target="_blank" class="group relative flex h-12 w-12 items-center justify-center border border-neutral-600 bg-gradient-to-br from-neutral-700 to-neutral-800 shadow-inner hover:border-amber-400">
                <img class="h-6 w-6 opacity-60 transition group-hover:opacity-100" src="/link.png" alt="LinkedIn"/>
            </a>
            <a href="https://x.com/aadi_jain333" target="_blank" class="group relative flex h-12 w-12 items-center justify-center border border-neutral-600 bg-gradient-to-br from-neutral-700 to-neutral-800 shadow-inner hover:border-amber-400">
                <img class="h-6 w-6 opacity-60 transition group-hover:opacity-100" src="/x.png" alt="X"/>
            </a>
            <a href="https://bsky.app/profile/jainaadi333.bsky.social" target="_blank" class="group relative flex h-12 w-12 items-center justify-center border border-neutral-600 bg-gradient-to-br from-neutral-700 to-neutral-800 shadow-inner hover:border-amber-400">
                <img class="h-6 w-6 opacity-60 transition group-hover:opacity-100" src="/bsky.png" alt="Bluesky"/>
            </a>
            <!-- Empty Slot -->
            <div class="h-12 w-12 border border-neutral-700 bg-neutral-800 shadow-inner"></div>
        </div>
    </div>

    <main class="flex grow flex-col pt-16">
        {@render children()}
    </main>
</div>
