import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DoFvAMPb.mjs';
import { manifest } from './manifest_BTelJHXz.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/ailearning-lp.astro.mjs');
const _page3 = () => import('./pages/gen-lp.astro.mjs');
const _page4 = () => import('./pages/homeschool-lp.astro.mjs');
const _page5 = () => import('./pages/jove-gen-lp.astro.mjs');
const _page6 = () => import('./pages/parents-lp.astro.mjs');
const _page7 = () => import('./pages/pricing.astro.mjs');
const _page8 = () => import('./pages/videotrail.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/ailearning-lp.astro", _page2],
    ["src/pages/gen-lp.astro", _page3],
    ["src/pages/homeschool-lp.astro", _page4],
    ["src/pages/jove-gen-lp.astro", _page5],
    ["src/pages/parents-lp.astro", _page6],
    ["src/pages/pricing.astro", _page7],
    ["src/pages/videoTrail.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "39ef5579-b1f0-44e3-9d15-affc6fe56e5f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
