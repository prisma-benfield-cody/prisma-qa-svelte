
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/private';
 * 
 * console.log(ENVIRONMENT); // => "production"
 * console.log(PUBLIC_BASE_URL); // => throws error during build
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/private' {
	export const npm_command: string;
	export const __CURSOR_SANDBOX_ENV_RESTORE: string;
	export const SAND_BOX_SCRIPT_SYNC_DISABLED: string;
	export const AGENT_TRANSCRIPTS: string;
	export const _ZO_DOCTOR: string;
	export const JOBS: string;
	export const NODE: string;
	export const npm_config_local_prefix: string;
	export const SAND_BOX_TENANT_ID: string;
	export const SAND_SUPERVISOR_ENABLED: string;
	export const SAND_BOX_TELEMETRY_LOG: string;
	export const PWD: string;
	export const LOGNAME: string;
	export const SAND_HTTP_PROXY_NAME: string;
	export const BUN_WHICH_IGNORE_CWD: string;
	export const _: string;
	export const SAND_EGRESS_TUNNEL_ENABLED: string;
	export const SAND_BOX_AUTH_ID: string;
	export const HOME: string;
	export const SAND_BOX_STORE_COPY_IN: string;
	export const LANG: string;
	export const SAND_EGRESS_TUNNEL_PROXY_ADDR: string;
	export const LS_COLORS: string;
	export const CURSOR_CONVERSATION_ID: string;
	export const CURSOR_RIPGREP_PATH: string;
	export const SAND_EGRESS_TUNNEL_WS_PORT: string;
	export const SAND_MANIFEST_V2: string;
	export const FORCE_COLOR: string;
	export const CURSOR_AUTH_TOKEN: string;
	export const SAND_BOX_CLUSTER: string;
	export const SAND_HOST_PORT: string;
	export const EXEC_DAEMON_CWD: string;
	export const CURSOR_AGENT_SOCKET: string;
	export const INIT_CWD: string;
	export const SAND_BOX_STORE_ID: string;
	export const npm_lifecycle_script: string;
	export const CURSOR_AGENT: string;
	export const CURSOR_REQUEST_ID: string;
	export const SAND_BOX_BOOT_STARTED_AT_MS: string;
	export const NPM_CONFIG_PREFIX: string;
	export const TERM: string;
	export const USER: string;
	export const SAND_BOX_MAX_WINDOWS: string;
	export const BUN_INTERNAL_BUNX_INSTALL: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const SAND_BOX_LEGACY_STORE: string;
	export const SAND_BOX_STORE_BACKEND: string;
	export const SAND_GATEWAY_BIND_HOST: string;
	export const npm_config_user_agent: string;
	export const NO_COLOR: string;
	export const npm_execpath: string;
	export const SAND_EGRESS_TUNNEL_WS_ADDR: string;
	export const SAND_BOX_BOOT_ID: string;
	export const SAND_USER_NON_ROOT: string;
	export const LC_ALL: string;
	export const SAND_STORE_BETTER_CLI: string;
	export const BROWSER: string;
	export const PATH: string;
	export const SAND_BOX_STORE_SYNC: string;
	export const DEBIAN_FRONTEND: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const NODE_ENV: string;
}

/**
 * This module provides access to environment variables that are injected _statically_ into your bundle at build time and are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Static environment variables are [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env` at build time and then statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * For example, given the following build time environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { ENVIRONMENT, PUBLIC_BASE_URL } from '$env/static/public';
 * 
 * console.log(ENVIRONMENT); // => throws error during build
 * console.log(PUBLIC_BASE_URL); // => "http://site.com"
 * ```
 * 
 * The above values will be the same _even if_ different values for `ENVIRONMENT` or `PUBLIC_BASE_URL` are set at runtime, as they are statically replaced in your code with their build time values.
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are limited to _private_ access.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Private_ access:**
 * 
 * - This module cannot be imported into client-side code
 * - This module includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured)
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://site.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * 
 * console.log(env.ENVIRONMENT); // => "production"
 * console.log(env.PUBLIC_BASE_URL); // => undefined
 * ```
 */
declare module '$env/dynamic/private' {
	export const env: {
		npm_command: string;
		__CURSOR_SANDBOX_ENV_RESTORE: string;
		SAND_BOX_SCRIPT_SYNC_DISABLED: string;
		AGENT_TRANSCRIPTS: string;
		_ZO_DOCTOR: string;
		JOBS: string;
		NODE: string;
		npm_config_local_prefix: string;
		SAND_BOX_TENANT_ID: string;
		SAND_SUPERVISOR_ENABLED: string;
		SAND_BOX_TELEMETRY_LOG: string;
		PWD: string;
		LOGNAME: string;
		SAND_HTTP_PROXY_NAME: string;
		BUN_WHICH_IGNORE_CWD: string;
		_: string;
		SAND_EGRESS_TUNNEL_ENABLED: string;
		SAND_BOX_AUTH_ID: string;
		HOME: string;
		SAND_BOX_STORE_COPY_IN: string;
		LANG: string;
		SAND_EGRESS_TUNNEL_PROXY_ADDR: string;
		LS_COLORS: string;
		CURSOR_CONVERSATION_ID: string;
		CURSOR_RIPGREP_PATH: string;
		SAND_EGRESS_TUNNEL_WS_PORT: string;
		SAND_MANIFEST_V2: string;
		FORCE_COLOR: string;
		CURSOR_AUTH_TOKEN: string;
		SAND_BOX_CLUSTER: string;
		SAND_HOST_PORT: string;
		EXEC_DAEMON_CWD: string;
		CURSOR_AGENT_SOCKET: string;
		INIT_CWD: string;
		SAND_BOX_STORE_ID: string;
		npm_lifecycle_script: string;
		CURSOR_AGENT: string;
		CURSOR_REQUEST_ID: string;
		SAND_BOX_BOOT_STARTED_AT_MS: string;
		NPM_CONFIG_PREFIX: string;
		TERM: string;
		USER: string;
		SAND_BOX_MAX_WINDOWS: string;
		BUN_INTERNAL_BUNX_INSTALL: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		SAND_BOX_LEGACY_STORE: string;
		SAND_BOX_STORE_BACKEND: string;
		SAND_GATEWAY_BIND_HOST: string;
		npm_config_user_agent: string;
		NO_COLOR: string;
		npm_execpath: string;
		SAND_EGRESS_TUNNEL_WS_ADDR: string;
		SAND_BOX_BOOT_ID: string;
		SAND_USER_NON_ROOT: string;
		LC_ALL: string;
		SAND_STORE_BETTER_CLI: string;
		BROWSER: string;
		PATH: string;
		SAND_BOX_STORE_SYNC: string;
		DEBIAN_FRONTEND: string;
		npm_node_execpath: string;
		OLDPWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * This module provides access to environment variables set _dynamically_ at runtime and that are _publicly_ accessible.
 * 
 * |         | Runtime                                                                    | Build time                                                               |
 * | ------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
 * | Private | [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private) | [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private) |
 * | Public  | [`$env/dynamic/public`](https://svelte.dev/docs/kit/$env-dynamic-public)   | [`$env/static/public`](https://svelte.dev/docs/kit/$env-static-public)   |
 * 
 * Dynamic environment variables are defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`.
 * 
 * **_Public_ access:**
 * 
 * - This module _can_ be imported into client-side code
 * - **Only** variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`) are included
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 * 
 * > [!NOTE] To get correct types, environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * >
 * > ```env
 * > MY_FEATURE_FLAG=
 * > ```
 * >
 * > You can override `.env` values from the command line like so:
 * >
 * > ```sh
 * > MY_FEATURE_FLAG="enabled" npm run dev
 * > ```
 * 
 * For example, given the following runtime environment:
 * 
 * ```env
 * ENVIRONMENT=production
 * PUBLIC_BASE_URL=http://example.com
 * ```
 * 
 * With the default `publicPrefix` and `privatePrefix`:
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.ENVIRONMENT); // => undefined, not public
 * console.log(env.PUBLIC_BASE_URL); // => "http://example.com"
 * ```
 * 
 * ```
 * 
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
