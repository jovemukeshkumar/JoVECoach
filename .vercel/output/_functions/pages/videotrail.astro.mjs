import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from '../chunks/astro/server_DMPVNDb3.mjs';
import 'clsx';
import { T as ThreeDImages } from '../chunks/3D-Still-Images_DpOYL1ju.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const ThreeDCarousel = "/_astro/3D-Carousel.s-9lHz1u.webm";

const $$VideoTrail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<body data-astro-cid-z7faz7zu> <!-- Section 1 --> <section data-astro-cid-z7faz7zu> <video autoplay muted loop playsinline data-astro-cid-z7faz7zu> <source${addAttribute(ThreeDImages, "src")} type="video/webm" data-astro-cid-z7faz7zu>
Your browser does not support the video tag.
</video> </section> <!-- Section 2 --> <section data-astro-cid-z7faz7zu> <video autoplay muted loop playsinline data-astro-cid-z7faz7zu> <source${addAttribute(ThreeDCarousel, "src")} type="video/webm" data-astro-cid-z7faz7zu>
Your browser does not support the video tag.
</video> </section> </body>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/videoTrail.astro", void 0);

const $$file = "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/videoTrail.astro";
const $$url = "/videoTrail";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$VideoTrail,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
