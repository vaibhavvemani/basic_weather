export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.65e4241e.js","imports":["_app/immutable/entry/start.65e4241e.js","_app/immutable/chunks/index.73007eae.js","_app/immutable/chunks/singletons.0147677a.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.5512e4c3.js","imports":["_app/immutable/entry/app.5512e4c3.js","_app/immutable/chunks/index.73007eae.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(weather)/weather/[slug]",
				pattern: /^\/weather\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
