<script>
	import PostList from '../../lib/PostList.svelte';

	async function getPosts() {
		const res = await fetch('api/blogs');

		const posts = await res.json();
		console.log(posts);
		return posts;
	}
</script>

<h1 class="py-0 text-4xl sm:text-5xl mb-8">Blog</h1>

{#await getPosts()}
	<p>Loading...</p>
{:then posts}
	<PostList {posts} />
{:catch error}
	<p>Error: {error.message}</p>
{/await}
