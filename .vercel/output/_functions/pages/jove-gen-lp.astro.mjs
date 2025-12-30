import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, f as renderScript, a as renderTemplate, b as createAstro } from '../chunks/astro/server_DMPVNDb3.mjs';
import { $ as $$HeroSectionAlt, a as $$STEMStruggle, b as $$FirstCTASection, c as $$JoVECoachSteps, d as $$SecondCTASection, e as $$ConceptsSection, f as $$LearnerPersonas, g as $$PricingSection, h as $$JoveGenLpFaqs, i as $$ZohoForm, j as $$Footer } from '../chunks/pricingSection_D5s70489.mjs';
import { $ as $$Layout } from '../chunks/Layout_qk7T31qc.mjs';
import { a as getImage, $ as $$Image } from '../chunks/_astro_assets_BIVO7GUa.mjs';
import { I as ArrowRight } from '../chunks/Arrow_loCUEN2J.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const testimonialAuthor1 = new Proxy({"src":"/_astro/testimonialAuthor1.BikKT8Bn.png","width":135,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/testimonialAuthor1.png";
							}
							
							return target[name];
						}
					});

const testimonialAuthor2 = new Proxy({"src":"/_astro/testimonialAuthor2.YNTujIxX.png","width":53,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/testimonialAuthor2.png";
							}
							
							return target[name];
						}
					});

const testimonialAuthor3 = new Proxy({"src":"/_astro/testimonialAuthor3.CsjAT6Rw.png","width":135,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/testimonialAuthor3.png";
							}
							
							return target[name];
						}
					});

const testimonialAuthor4 = new Proxy({"src":"/_astro/testimonialAuthor4.dKoMSeCF.png","width":135,"height":96,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/testimonialAuthor4.png";
							}
							
							return target[name];
						}
					});

const r1 = new Proxy({"src":"/_astro/r1.FT7Wsewm.jpg","width":72,"height":72,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/r1.jpg";
							}
							
							return target[name];
						}
					});

const r2 = new Proxy({"src":"/_astro/r2.DamgITFQ.jpg","width":72,"height":72,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/r2.jpg";
							}
							
							return target[name];
						}
					});

const r3 = new Proxy({"src":"/_astro/r3.Dc4wWiZH.jpg","width":72,"height":72,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/r3.jpg";
							}
							
							return target[name];
						}
					});

const r4 = new Proxy({"src":"/_astro/r4.BS1Bnre8.jpg","width":72,"height":72,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/r4.jpg";
							}
							
							return target[name];
						}
					});

const testimonialBg = new Proxy({"src":"/_astro/testimonialBg.B4IqUO4i.png","width":2977,"height":627,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/testimonialBg.png";
							}
							
							return target[name];
						}
					});

const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const optimizedTestimonialBg = await getImage({ src: testimonialBg, format: "webp" });
  const testimonials = [
    {
      rating: 5,
      text: "I finally understand chemistry. Like, actually understand it. Not just memorize-and-forget.",
      name: "Sophomore, Texas",
      avatar: testimonialAuthor1
    },
    {
      rating: 4,
      text: "Bio used to be my worst subject. Now I'm the one explaining stuff to my friends.",
      name: "Junior, California",
      avatar: testimonialAuthor2
    },
    {
      rating: 5,
      text: "I've watched so many YouTube videos and none of them made sense. This actually does.",
      name: "Freshman, Florida",
      avatar: testimonialAuthor3
    },
    {
      rating: 5,
      text: "Used it the night before my physics test. Got a way better grade than I expected to fail.",
      name: "Senior, New York",
      avatar: testimonialAuthor4
    },
    {
      rating: 5,
      text: "Micro courses finally gave me a clear path through organic chem. No more random video hopping.",
      name: "Sophomore, Illinois",
      avatar: r1
    },
    {
      rating: 5,
      text: "I typed my question and it found exactly the video I needed. In seconds.",
      name: "Freshman, Arizona",
      avatar: r2
    },
    {
      rating: 5,
      text: "The AI quizzes showed me what I didn't know. Way better than just rewatching videos.",
      name: "Senior, Georgia",
      avatar: r3
    },
    {
      rating: 5,
      text: "I save every chat. It's like having perfect study notes without actually taking notes.",
      name: "Junior, Ohio",
      avatar: r4
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="testimonial-section"${addAttribute(`--testimonial-bg: url(${optimizedTestimonialBg.src});`, "style")} data-astro-cid-oajvltam> <div class="container" data-astro-cid-oajvltam> <h2 class="title" data-astro-cid-oajvltam>
You are in <span class="highlight" data-astro-cid-oajvltam>good company</span> </h2> <p class="subtitle" data-astro-cid-oajvltam>Students like you are already seeing results</p> <div class="carousel-wrapper" data-astro-cid-oajvltam> <div class="testimonials-grid" id="testimonials-grid" data-astro-cid-oajvltam> ${testimonials.map((testimonial) => renderTemplate`<div class="testimonial-card" data-astro-cid-oajvltam> <div class="stars" data-astro-cid-oajvltam> ${Array.from({ length: 5 }).map((_, i) => renderTemplate`<span${addAttribute(i < testimonial.rating ? "star filled" : "star", "class")} data-astro-cid-oajvltam>★</span>`)} </div> <p class="testimonial-text" data-astro-cid-oajvltam>${testimonial.text}</p> <div class="author" data-astro-cid-oajvltam> ${renderComponent($$result, "Image", $$Image, { "src": testimonial?.avatar, "alt": testimonial?.name, "class": "avatar", "inferSize": true, "data-astro-cid-oajvltam": true })} <span class="author-name" data-astro-cid-oajvltam>${testimonial.name}</span> </div> </div>`)} </div> <div class="navigation" data-astro-cid-oajvltam> <button class="nav-btn prev" id="testimonial-prev" aria-label="Previous" data-astro-cid-oajvltam> ${renderComponent($$result, "Image", $$Image, { "src": ArrowRight, "alt": "Previous", "width": 20, "height": 20, "data-astro-cid-oajvltam": true })} </button> <button class="nav-btn next" id="testimonial-next" aria-label="Next" data-astro-cid-oajvltam> ${renderComponent($$result, "Image", $$Image, { "src": ArrowRight, "alt": "Next", "width": 20, "height": 20, "data-astro-cid-oajvltam": true })} </button> </div> </div> </div> </section>  ${renderScript($$result, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/testimonial.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/testimonial.astro", void 0);

const $$Astro = createAstro();
const $$JoveGenLp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$JoveGenLp;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JoVE Coach | Master STEM with AI | AI-Powered Learning", "description": "Struggling with STEM? Get AI-powered explanations, 2-minute videos, and instant quizzes. Master any concept in minutes. Try free for 7 days.", "robots": "noindex, nofollow" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroSection", $$HeroSectionAlt, {})} ${renderComponent($$result2, "STEMStruggle", $$STEMStruggle, {})} ${renderComponent($$result2, "FirstCTASection", $$FirstCTASection, {})} ${renderComponent($$result2, "JoVECoachSteps", $$JoVECoachSteps, {})} ${renderComponent($$result2, "SecondCTASection", $$SecondCTASection, {})} ${renderComponent($$result2, "ConceptsSection", $$ConceptsSection, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} ${renderComponent($$result2, "LearnerPersonas", $$LearnerPersonas, {})} ${renderComponent($$result2, "PricingSection", $$PricingSection, {})} ${renderComponent($$result2, "JoveGenLpFaqs", $$JoveGenLpFaqs, {})} ${renderComponent($$result2, "ZohoForm", $$ZohoForm, {})}  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/jove-gen-lp.astro", void 0);

const $$file = "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/jove-gen-lp.astro";
const $$url = "/jove-gen-lp";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$JoveGenLp,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
