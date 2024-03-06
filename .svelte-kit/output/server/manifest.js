export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["pexels-arnie-chou-1229042.jpg"]),
	mimeTypes: {".jpg":"image/jpeg"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.31929abe.js","imports":["_app/immutable/entry/start.31929abe.js","_app/immutable/chunks/index.18fc26b9.js","_app/immutable/chunks/singletons.5e182bee.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.45aa5db2.js","imports":["_app/immutable/entry/app.45aa5db2.js","_app/immutable/chunks/index.18fc26b9.js"],"stylesheets":[],"fonts":[]}},
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
