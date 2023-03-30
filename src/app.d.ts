// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="@sveltejs/kit" />
/// <reference types="@sveltejs/adapter-cloudflare" />

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface Platform {
			env?: {
			  YOUR_KV_NAMESPACE: KVNamespace
			  YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace
			}
		}
	}
}

// export {};
export async function actions({ request, platform }) {
	const x = platform.env.YOUR_DURABLE_OBJECT_NAMESPACE.idFromName('x');
}