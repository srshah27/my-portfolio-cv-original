<script>
	const links = [
		{ name: 'writing', href: '/blogs' },
		{ name: 'resume', href: '/resume' }
	];
</script>

<header class="header" data-sveltekit-noscroll data-sveltekit-preload-code="eager">
	<div class="header__d1">
		<div class="header__name">
			<a href="/">Aditya Sawant</a>
		</div>
		<nav>
			{#each links as link}
				<a href={link.href} class="header__link">
					{link.name}
				</a>
			{/each}
		</nav>
	</div>
</header>
