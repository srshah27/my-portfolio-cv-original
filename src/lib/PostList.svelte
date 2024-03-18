<script>
	export let posts;
</script>

<div class="post__list">
	{#each posts as post}
		<div>
			<div class="post__list__d1">
				<h2 class="post__heading">
					<div class="link-hidden">
						{post.title}
					</div>
				</h2>
				<p class="pt-0 sm:text-lg">
					<span class="text-neutral-100">{post.createdAt.substring(0, 10)}</span>
				</p>
			</div>
			<p>{post.content}</p>
		</div>
	{/each}
</div>
