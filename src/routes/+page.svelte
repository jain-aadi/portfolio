<script lang="ts">
    // No extra imports needed, pure Tailwind and inline styles for the Dota font feel
</script>

<style>
    /* Mimicking Dota's serif header font (Trajan-like) */
    .font-dota {
        font-family: "Cinzel", "Palatino Linotype", "Book Antiqua", Palatino, serif;
    }
</style>

<!-- PORTRAIT / HERO SECTION -->
<section id="home" class="relative overflow-hidden border-b border-neutral-800 px-6 pt-24 pb-20 sm:px-8 lg:px-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-neutral-950">
    
    <!-- Red glowing ambient background -->
    <div class="absolute left-1/2 top-0 h-96 w-[800px] -translate-x-1/2 rounded-full bg-red-900/10 blur-[100px] pointer-events-none"></div>

    <div class="mx-auto flex max-w-5xl flex-col lg:flex-row lg:items-center gap-12 relative z-10">
        
        <div class="flex-1">
            <h2 class="text-sm font-bold tracking-[0.3em] text-red-500 uppercase mb-4">Level 25 Grandmaster</h2>
            <h1 class="font-dota text-5xl font-bold tracking-wide text-neutral-100 sm:text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                AADITYA JAIN
            </h1>
            <p class="font-dota mt-2 text-2xl text-amber-500 italic drop-shadow-md">The Systems Architect</p>
            
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
                A highly elusive backend engineer. Bypasses high-level abstractions to construct raw TCP/IP sockets. Specializes in low-latency systems and algorithmic warfare.
            </p>

            <!-- Hero Attributes Panel -->
            <div class="mt-8 flex max-w-md flex-col gap-2 rounded bg-neutral-900/80 p-4 border border-neutral-700 shadow-[inset_0_0_10px_rgba(0,0,0,1)]">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="h-6 w-6 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)]"></div>
                        <span class="font-bold text-neutral-300">Reliability (STR)</span>
                    </div>
                    <span class="font-mono text-neutral-400">120 + 2.5</span>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="h-6 w-6 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]"></div>
                        <span class="font-bold text-neutral-300">Execution (AGI)</span>
                    </div>
                    <span class="font-mono text-neutral-400">105 + 3.1</span>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div class="h-6 w-6 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                        <span class="font-bold text-neutral-300">Logic & CP (INT)</span>
                    </div>
                    <span class="font-mono text-amber-500 font-bold drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]">140 + 4.2</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- LORE & SPELLBOOK -->
<section id="lore" class="border-b border-neutral-800 bg-neutral-950 px-6 py-20 sm:px-8 lg:px-12 relative">
    <div class="mx-auto max-w-5xl">
        <h2 class="font-dota text-3xl font-bold tracking-widest text-neutral-100 uppercase mb-12">Abilities & Lore</h2>
        
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <!-- Spell 1 -->
            <div class="group relative border border-neutral-800 bg-neutral-900 p-5 transition hover:border-red-600 hover:bg-neutral-800 shadow-xl">
                <div class="mb-4 h-14 w-14 border-2 border-neutral-700 bg-[url('https://placehold.co/100x100/1a1a1a/ef4444?text=Q')] bg-cover shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:border-red-500"></div>
                <h3 class="font-bold text-neutral-200">Raw Sockets</h3>
                <p class="mt-1 text-xs font-bold text-amber-500">Target: Backend | Pierces BKB: Yes</p>
                <p class="mt-3 text-sm text-neutral-400">Bypasses standard `net/http` packages to build lightweight HTTP servers directly over TCP sockets in Go.</p>
                <!-- Mana/CD -->
                <div class="mt-4 flex gap-4 text-xs font-bold">
                    <span class="flex items-center gap-1 text-blue-400"><div class="h-2 w-2 bg-blue-500"></div> 50</span>
                    <span class="flex items-center gap-1 text-neutral-300">⏱️ 0s</span>
                </div>
            </div>

            <!-- Spell 2 -->
            <div class="group relative border border-neutral-800 bg-neutral-900 p-5 transition hover:border-emerald-500 hover:bg-neutral-800 shadow-xl">
                <div class="mb-4 h-14 w-14 border-2 border-neutral-700 bg-[url('https://placehold.co/100x100/1a1a1a/10b981?text=W')] bg-cover shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:border-emerald-500"></div>
                <h3 class="font-bold text-neutral-200">Algorithmic Mastery</h3>
                <p class="mt-1 text-xs font-bold text-neutral-500">Type: Passive</p>
                <p class="mt-3 text-sm text-neutral-400">Grants permanent resistance against Time Limit Exceeded (TLE) errors. Master of Union-Find and Heap Sort.</p>
            </div>

            <!-- Spell 3 -->
            <div class="group relative border border-neutral-800 bg-neutral-900 p-5 transition hover:border-amber-500 hover:bg-neutral-800 shadow-xl">
                <div class="mb-4 h-14 w-14 border-2 border-neutral-700 bg-[url('https://placehold.co/100x100/1a1a1a/f59e0b?text=E')] bg-cover shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:border-amber-500"></div>
                <h3 class="font-bold text-neutral-200">Svelte Manifestation</h3>
                <p class="mt-1 text-xs font-bold text-amber-500">Target: Frontend | Range: Global</p>
                <p class="mt-3 text-sm text-neutral-400">Summons highly reactive UI components compiled directly from a FastAPI backend. Deals immense visual damage.</p>
            </div>

            <!-- Ultimate -->
            <div class="group relative border border-neutral-800 bg-neutral-900 p-5 transition hover:border-purple-500 hover:bg-neutral-800 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <div class="mb-4 h-14 w-14 border-2 border-amber-400 bg-[url('https://placehold.co/100x100/1a1a1a/a855f7?text=R')] bg-cover shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
                <h3 class="font-bold text-neutral-200">Agentic Pipeline</h3>
                <p class="mt-1 text-xs font-bold text-amber-500">Type: Ultimate | Channeling</p>
                <p class="mt-3 text-sm text-neutral-400">Connects Model Context Protocol (MCP) servers to Sparrow Mail, orchestrating a massive global automated outreach network.</p>
                <div class="mt-4 flex gap-4 text-xs font-bold">
                    <span class="flex items-center gap-1 text-blue-400"><div class="h-2 w-2 bg-blue-500"></div> 200</span>
                    <span class="flex items-center gap-1 text-neutral-300">⏱️ 120s</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ARMORY (WORK) -> Styled like Item Tooltips -->
<section id="armory" class="bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] bg-neutral-900 px-6 py-20 sm:px-8 lg:px-12">
    <div class="mx-auto max-w-5xl">
        <h2 class="font-dota text-3xl font-bold tracking-widest text-neutral-100 uppercase mb-12">The Armory</h2>

        <div class="grid gap-8 md:grid-cols-2">
            
            <!-- Item 1 Tooltip -->
            <div class="flex flex-col border-2 border-neutral-700 bg-neutral-950 shadow-[5px_5px_20px_rgba(0,0,0,0.9)] max-w-md hover:border-neutral-500 transition-colors">
                <!-- Header -->
                <div class="border-b border-neutral-800 bg-gradient-to-r from-green-900/40 to-neutral-900 p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <h3 class="font-dota text-xl font-bold text-green-400 drop-shadow-md">HTTP Client Workspace</h3>
                            <p class="text-xs font-bold text-neutral-500">Artifact / Open Source</p>
                        </div>
                        <span class="text-amber-500 font-bold text-sm">Cost: Free</span>
                    </div>
                </div>
                <!-- Stats -->
                <div class="p-4 bg-neutral-900/50">
                    <p class="text-sm font-bold text-neutral-300"><span class="text-emerald-400">+ 15</span> Testing Speed</p>
                    <p class="text-sm font-bold text-neutral-300"><span class="text-emerald-400">+ 10</span> Flow Clarity</p>
                </div>
                <!-- Description -->
                <div class="p-4 flex-grow">
                    <p class="text-sm text-neutral-400 mb-4"><span class="font-bold text-emerald-400">Active: Execute Request</span><br/>Sends organized, noise-free API requests over custom Go protocols.</p>
                    <p class="text-xs italic text-neutral-600 font-serif">"Forged by one who grew tired of bloated electron apps."</p>
                </div>
                <!-- Action -->
                <div class="p-4 border-t border-neutral-800 bg-neutral-900">
                    <a href="https://github.com/jain-aadi/http" target="_blank" class="block w-full text-center bg-neutral-800 border border-neutral-600 py-2 text-sm font-bold text-neutral-300 hover:bg-neutral-700 hover:text-white transition">EQUIP (VIEW ON GITHUB)</a>
                </div>
            </div>

            <!-- Item 2 Tooltip -->
            <div class="flex flex-col border-2 border-neutral-700 bg-neutral-950 shadow-[5px_5px_20px_rgba(0,0,0,0.9)] max-w-md hover:border-neutral-500 transition-colors">
                <div class="border-b border-neutral-800 bg-gradient-to-r from-purple-900/40 to-neutral-900 p-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <h3 class="font-dota text-xl font-bold text-purple-400 drop-shadow-md">Sparrow Mail System</h3>
                            <p class="text-xs font-bold text-neutral-500">Mythical Agent</p>
                        </div>
                        <span class="text-amber-500 font-bold text-sm">Cost: Scale</span>
                    </div>
                </div>
                <div class="p-4 bg-neutral-900/50">
                    <p class="text-sm font-bold text-neutral-300"><span class="text-emerald-400">+ 100%</span> Automation Radius</p>
                </div>
                <div class="p-4 flex-grow">
                    <p class="text-sm text-neutral-400 mb-4"><span class="font-bold text-purple-400">Passive: Cold Outreach</span><br/>Automatically routes lead generation data via the Resend API. Acts as a standalone agentic pipeline.</p>
                    <p class="text-xs italic text-neutral-600 font-serif">"The messenger of the Grand Magus never sleeps."</p>
                </div>
                <div class="p-4 border-t border-neutral-800 bg-neutral-900">
                    <a href="https://github.com/jain-aadi/sparrow-mail" target="_blank" class="block w-full text-center bg-neutral-800 border border-neutral-600 py-2 text-sm font-bold text-neutral-300 hover:bg-neutral-700 hover:text-white transition">EQUIP (VIEW ON GITHUB)</a>
                </div>
            </div>

        </div>
    </div>
</section>

<!-- FIND MATCH (CONTACT) -->
<section id="commend" class="relative bg-neutral-950 px-6 py-32 sm:px-8 lg:px-12 text-center border-t border-neutral-800 overflow-hidden">
    
    <!-- Ambient Glow behind button -->
    <div class="absolute left-1/2 top-1/2 h-64 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-900/20 blur-[80px] pointer-events-none"></div>

    <div class="relative z-10 mx-auto max-w-2xl">
        <h2 class="font-dota text-4xl font-bold tracking-widest text-neutral-100 uppercase mb-4">Ready for the Next Match?</h2>
        <p class="text-neutral-400 mb-12 max-w-md mx-auto">
            Need a reliable mid-laner for your backend architecture? Commend me or add me to your party.
        </p>

        <!-- The iconic glowing green FIND MATCH button -->
        <a href="mailto:jainaadi333@gmail.com" class="inline-block group relative">
            <div class="absolute -inset-1 rounded-sm bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-70 blur transition duration-200 group-hover:opacity-100 group-hover:duration-200"></div>
            <div class="relative flex items-center justify-center border-y-2 border-emerald-300 bg-gradient-to-b from-emerald-500 to-emerald-700 px-16 py-5 shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]">
                <span class="font-dota text-2xl font-bold tracking-[0.2em] text-neutral-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] uppercase">
                    Find Match
                </span>
            </div>
        </a>
        
        <p class="mt-6 text-xs font-bold text-neutral-600 uppercase tracking-widest">Server: Delhi, India (Ping: 5ms)</p>
    </div>
</section>