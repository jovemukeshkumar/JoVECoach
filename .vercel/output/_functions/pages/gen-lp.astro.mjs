import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_DMPVNDb3.mjs';
import { H as HeroSectionVideo, $ as $$HeroSectionAlt, a as $$STEMStruggle, b as $$FirstCTASection, c as $$JoVECoachSteps, d as $$SecondCTASection, e as $$ConceptsSection, f as $$LearnerPersonas, g as $$PricingSection, h as $$JoveGenLpFaqs, i as $$ZohoForm, j as $$Footer } from '../chunks/pricingSection_D5s70489.mjs';
import { $ as $$Layout } from '../chunks/Layout_qk7T31qc.mjs';
import { $ as $$ZohoModal } from '../chunks/ZohoModal_Cjp7pJ4z.mjs';
import { H as HeroSectionImage } from '../chunks/NavLogo_DGZv40OJ.mjs';
import { H as HeroSectionBlueBg } from '../chunks/Arrow_loCUEN2J.mjs';
import { a as getImage } from '../chunks/_astro_assets_BIVO7GUa.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$GenLp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GenLp;
  const optimizedHeroBg = await getImage({ src: HeroSectionBlueBg, format: "webp" });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "JoVE Coach | Master STEM with AI | AI-Powered Learning", "description": "Struggling with STEM? Get AI-powered explanations, 2-minute videos, and instant quizzes. Master any concept in minutes. Try free for 7 days.", "robots": "noindex, nofollow" }, { "default": async ($$result2) => renderTemplate`    ${renderComponent($$result2, "HeroSection", $$HeroSectionAlt, {})} ${renderComponent($$result2, "STEMStruggle", $$STEMStruggle, {})} ${renderComponent($$result2, "FirstCTASection", $$FirstCTASection, {})} ${renderComponent($$result2, "JoVECoachSteps", $$JoVECoachSteps, {})} ${renderComponent($$result2, "SecondCTASection", $$SecondCTASection, {})} ${renderComponent($$result2, "ConceptsSection", $$ConceptsSection, {})}  ${renderComponent($$result2, "LearnerPersonas", $$LearnerPersonas, {})} ${renderComponent($$result2, "PricingSection", $$PricingSection, {})} ${renderComponent($$result2, "JoveGenLpFaqs", $$JoveGenLpFaqs, {})} ${renderComponent($$result2, "ZohoForm", $$ZohoForm, {})} ${renderComponent($$result2, "ZohoModal", $$ZohoModal, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": async ($$result2) => renderTemplate`<link rel="preload"${addAttribute(HeroSectionVideo, "href")} as="video" type="video/webm" fetchpriority="high" media="(min-width: 769px)"><link rel="preload"${addAttribute(optimizedHeroBg.src, "href")} as="image" type="image/webp" fetchpriority="high"><link rel="preload"${addAttribute(HeroSectionImage.src, "href")} as="image" media="(max-width: 768px)" fetchpriority="high">` })}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/gen-lp.astro", void 0);

const $$file = "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/gen-lp.astro";
const $$url = "/gen-lp";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$GenLp,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
