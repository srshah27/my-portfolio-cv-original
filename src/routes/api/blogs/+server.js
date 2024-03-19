import db from '$lib/database';
import { json } from '@sveltejs/kit';

export async function GET() {
	const [posts, columns] = await db.execute('SELECT * FROM `Post`');
	console.log(columns)
	return json(posts);
}
