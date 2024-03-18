export function GET() {
	return new Response(JSON.stringify({ server: 'ok' }));
}
