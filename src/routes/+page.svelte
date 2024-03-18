<script>
	import Icon from '@iconify/svelte';
	import { projects } from '$lib/Constants';
</script>

<svelte:head>
	<title>Aditya Sawant</title>
</svelte:head>

<div class="pb-6">
	<h1 class="text-4xl sm:text-5xl my-0">Hi, I'm Aditya Sawant 🦥</h1>
	<p class="text-lg text-neutral-500">Computer Engineer | Web Developer</p>
</div>

<!-- <div class="space-y-6"> -->
<!-- <p>
			Hey there! I'm deeply passionate about technology and as a dedicated software engineering
			student at SAKEC, I'm on a mission to make a meaningful impact through my work. You are
			currently looking at my website that <b>my friends</b> built with <b>SvelteKit</b> and
			<b>TailwindCSS</b>. My expertise lies in <u>web development </u> and
			<u>software engineering</u>, with a strong command over technologies like
			<b>Node.js, Next.js, P5.js, PHP, Python, and JavaScript.</b>
		</p> -->
<!-- <p>
			I serve as <b>Student Co-ordinator</b> at
			<a class="link" href="https://shahandanchor.com/csisakec/">CSI</a>.
		</p>
		<p>
			I'm driven by creativity and technology's endless possibilities. Whether it's crafting elegant
			code or envisioning groundbreaking research, I'm committed to <u
				>harnessing technology for positive change and innovation.</u
			>
		</p>
		<p>
			Working towards that goal, I am currently pursuing a <b>B.E. in Computer Science</b> at
			<a class="link" href="https://www.sakec.ac.in/">Shah & Anchor</a>.
		</p>
		<p>
			I am deeply passionate about the intersection of computer science and artificial intelligence.
			My interests span all the way from front-end development to machine learning, and I thrive on
			solving challenges in algorithms and data structures.
		</p>
		<p>
			And I also like to talk about technolgies I work with sometimes. <br />
			<a target="_blank" class="link" href="https://www.sakec.ac.in/csi-sakec/mastering-the-web/"
				>1. Mastering the Web</a
			>
			<br />
			<a
				target="_blank"
				class="link"
				href="https://www.sakec.ac.in/csi-sakec/level-up-creative-coding-with-p5-js/"
				>2. Level Up: Creative Coding with P5*JS</a
			>
		</p> -->
<!-- </div> -->
<div class="text-xl space-y-12">
	<section>
		<h2 class="mb-6">My notable projects:</h2>
		<div class="project__grid">
			{#each projects as project}
				<a href={project.href} class="project__link">
					<div class="flex flex-col gap-y-2">
						<h3 class="project__heading">{project.name}</h3>
						<p clas="project__desc">{project.desc}</p>
					</div>
					<div class="flex flex-row-reverse justify-between">
						{#if project.github}
							<Icon icon="mdi:github" width="18" height="18" class="block mt-4 text-neutral-400" />
						{:else}
							<Icon
								icon="prime:arrow-up-right"
								width="18"
								height="18"
								class="block mt-4 text-neutral-400"
							/>
						{/if}
						<div class="flex gap-2">
							{#each project.tool_icons as icon}
								<Icon {icon} width="18" height="18" class="block mt-4 text-neutral-400" />
							{/each}
						</div>
					</div>
				</a>
			{/each}
		</div>
	</section>
</div>
