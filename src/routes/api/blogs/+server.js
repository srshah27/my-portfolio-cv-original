import db from '$lib/database';
import { json } from '@sveltejs/kit';

export async function GET() {
	const posts = await db.post.findMany();

	return json(posts);
}
