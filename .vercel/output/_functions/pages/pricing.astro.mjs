import { c as createComponent, m as maybeRenderHead, f as renderScript, a as renderTemplate, d as addAttribute, r as renderComponent, u as unescapeHTML, b as createAstro } from '../chunks/astro/server_DMPVNDb3.mjs';
import { $ as $$Navbar, a as $$Card, b as $$Footer } from '../chunks/Card_BG5FG1Fk.mjs';
import { $ as $$Layout } from '../chunks/Layout_qk7T31qc.mjs';
import qs from 'qs';
import { m as mostPopular, p as priceDiscountIcon, a as pricecut } from '../chunks/priceDiscountIcon_CnM-yfkm.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BIVO7GUa.mjs';
/* empty css                                   */
import { i as icon1, a as icon2, b as icon3, c as icon4 } from '../chunks/section8SubHeadingLogo4_SQuTDWxh.mjs';
import { s as section10FaqArrow } from '../chunks/section10FaqArrow_B46qvdd7.mjs';
export { renderers } from '../renderers.mjs';

const $$Section1 = createComponent(async ($$result, $$props, $$slots) => {
  const aboutPageQuery = qs.stringify(
    {
      populate: {
        pricingSection: {
          on: {
            "layout.price-details-section": {
              populate: {
                pricingSection: {
                  populate: {
                    featuresListText: { populate: "*" }
                  }
                }
              }
            }
          }
        }
      }
    },
    { encodeValuesOnly: true }
  );
  async function getStrapiData(path) {
    try {
      const BASE_URL = "https://celebrated-beauty-ac07850f26.strapiapp.com";
      if (!BASE_URL) ;
      const url = new URL(path, BASE_URL);
      url.search = aboutPageQuery;
      const res = await fetch(url.href);
      if (!res.ok) return null;
      const json = await res.json();
      return json?.data ?? null;
    } catch (err) {
      console.error("Strapi pricing fetch error:", err);
      return null;
    }
  }
  const data = await getStrapiData("/api/pricing-page");
  const priceDetailsSection = data?.pricingSection?.find((b) => b.__component === "layout.price-details-section") ?? {};
  const pricingPlans = priceDetailsSection?.pricingSection ?? [];
  return renderTemplate`${maybeRenderHead()}<section class="pricing-section" data-astro-cid-wjyznsgq> <div class="pricing-container" data-astro-cid-wjyznsgq> <p class="pricing-title" data-astro-cid-wjyznsgq> ${priceDetailsSection?.title ?? "Pricing"} </p> <p class="pricing-subtitle" data-astro-cid-wjyznsgq> ${priceDetailsSection?.subTitle ?? ""} </p> <div class="pricing-row ant-row ant-row-center css-vrrzze" data-astro-cid-wjyznsgq> ${pricingPlans.length === 0 && renderTemplate`<p style="text-align:center; color:#777;" data-astro-cid-wjyznsgq>Pricing details will be updated soon.</p>`} ${pricingPlans.map((plan) => renderTemplate`<div class="pricing-col" data-astro-cid-wjyznsgq> ${plan?.tag && plan.tag !== "NA" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": mostPopular, "alt": "Popular", "class": "popular-badge", "data-astro-cid-wjyznsgq": true })}`} <div${addAttribute(`pricing-card ${plan?.tag && plan.tag !== "NA" ? "featured-card selected" : "basic-card"}`, "class")}${addAttribute(plan?.title?.toLowerCase() ?? "", "data-card")} data-astro-cid-wjyznsgq> <div class="ant-card-body pricing-card-body" data-astro-cid-wjyznsgq> <div class="pricing-header" data-astro-cid-wjyznsgq> <div class="pricing-label-row" data-astro-cid-wjyznsgq> <p class="plan-type" data-astro-cid-wjyznsgq>${plan?.title ?? ""}</p> ${plan?.tag && plan.tag !== "NA" && renderTemplate`<span class="discount-tag" data-astro-cid-wjyznsgq> ${renderComponent($$result, "Image", $$Image, { "src": priceDiscountIcon, "alt": "", "class": "discount-icon", "data-astro-cid-wjyznsgq": true })} <span class="discount-text" data-astro-cid-wjyznsgq>${plan.tag}</span> </span>`} </div> <h3 class="price-text" data-astro-cid-wjyznsgq>${plan?.price ?? ""}</h3> </div> ${plan?.oldPrice && plan.oldPrice !== "NA" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": pricecut, "alt": "Pricecut", "class": "pricecut-img", "data-astro-cid-wjyznsgq": true })}`} <hr class="card-divider" data-astro-cid-wjyznsgq> <ul class="feature-list" data-astro-cid-wjyznsgq> ${plan?.featuresListText?.map((item) => renderTemplate`<li class="feature-item" data-astro-cid-wjyznsgq> <span class="feature-dot" data-astro-cid-wjyznsgq></span> ${item?.listText ?? ""} </li>`)} </ul> <div class="button-row" data-astro-cid-wjyznsgq> <button class="primary-btn ant-btn ant-btn-default" data-astro-cid-wjyznsgq> <span data-astro-cid-wjyznsgq>${plan?.buttonText ?? "Select"}</span> </button> </div> </div> </div> </div>`)} </div> </div> </section> ${renderScript($$result, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/pricingPage/Section1.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/pricingPage/Section1.astro", void 0);

const $$Section2 = createComponent(async ($$result, $$props, $$slots) => {
  const icons = [icon1, icon2, icon3, icon4];
  const homePageQuery = qs.stringify(
    {
      populate: {
        pricingSection2: {
          on: {
            "layout.section8-details": {
              populate: "*"
            }
          }
        }
      }
    },
    { encodeValuesOnly: true }
  );
  async function getStrapiData(path) {
    const BASE_URL = "https://celebrated-beauty-ac07850f26.strapiapp.com";
    const url = new URL(path, BASE_URL);
    url.search = homePageQuery;
    try {
      const res = await fetch(url.href);
      const json = await res.json();
      return json.data;
    } catch (error) {
      console.error("Strapi fetch error:", error);
    }
  }
  const data = await getStrapiData("/api/pricing-page");
  const section8Details = data?.pricingSection2?.find((b) => b.__component === "layout.section8-details");
  const rows = [
    {
      heading: section8Details?.SectionSubHeading1,
      paragraph: section8Details?.SectionSubPara1,
      icon: icons[0]
    },
    {
      heading: section8Details?.SectionSubHeading2,
      paragraph: section8Details?.SectionSubPara2,
      icon: icons[1]
    },
    {
      heading: section8Details?.SectionSubHeading3,
      paragraph: section8Details?.SectionSubPara3,
      icon: icons[2]
    },
    {
      heading: section8Details?.SectionSubHeading4,
      paragraph: section8Details?.SectionSubPara4,
      icon: icons[3]
    }
  ];
  const filteredRows = rows.filter((row) => row.heading && row.heading !== "NA");
  return renderTemplate`${maybeRenderHead()}<section class="section8Details" data-astro-cid-j4fw5dh5> <div class="section8Details-header" data-astro-cid-j4fw5dh5> <h2 class="section8-title" data-astro-cid-j4fw5dh5> ${section8Details?.SectionHeading} <span class="section8-highlight" data-astro-cid-j4fw5dh5></span> </h2> <p data-astro-cid-j4fw5dh5>${section8Details?.SectionPara}</p> </div> <div class="section8-wrapper" data-astro-cid-j4fw5dh5> ${filteredRows.map((item) => renderTemplate`<div class="section8-row" data-astro-cid-j4fw5dh5> ${renderComponent($$result, "Image", $$Image, { "alt": "", "src": item.icon, "class": "section8-icon", "data-astro-cid-j4fw5dh5": true })} <div class="section8-textbox" data-astro-cid-j4fw5dh5> <h3 class="section8-subheading" data-astro-cid-j4fw5dh5>${item.heading}</h3> <p class="section8-paragraph" data-astro-cid-j4fw5dh5>${item.paragraph}</p> </div> </div>`)} </div> </section> `;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/pricingPage/Section2.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Section5 = createComponent(async ($$result, $$props, $$slots) => {
  const homePageQuery = qs.stringify(
    {
      populate: {
        faqSection: {
          populate: "*"
        }
      }
    },
    { encodeValuesOnly: true }
  );
  async function getStrapiData(path) {
    const BASE_URL = "https://celebrated-beauty-ac07850f26.strapiapp.com";
    const url = new URL(path, BASE_URL);
    url.search = homePageQuery;
    const res = await fetch(url?.href);
    const json = await res.json();
    return json.data;
  }
  const data = await getStrapiData("/api/pricing-page");
  const faqSection = data?.faqSection?.find((b) => b.__component === "layout.faq-section");
  const visibleFaqs = (() => {
    const items = [];
    for (let i = 0; i < 10; i++) {
      const q = faqSection?.[`faqSectionQuestion${i + 1}`];
      const a = faqSection?.[`faqSectionAnswer${i + 1}`];
      if (!q || q === "NA") continue;
      items.push({ q, a });
    }
    return items;
  })();
  return renderTemplate(_a || (_a = __template(["", '<section class="faq-section" data-astro-cid-btxh25n6> <div class="faq-container" data-astro-cid-btxh25n6> <h2 class="faq-heading" data-astro-cid-btxh25n6>', "</h2> ", ' </div> </section> <script>\n	document.addEventListener("DOMContentLoaded", () => {\n		const faqItems = document.querySelectorAll("[data-faq]");\n\n		faqItems.forEach(faq => {\n			faq.addEventListener("click", () => {\n				const open = faq.classList.contains("open");\n\n				faqItems.forEach(item => item.classList.remove("open"));\n\n				if (!open) faq.classList.add("open");\n			});\n		});\n	});\n</script>'])), maybeRenderHead(), faqSection?.faqSectionHeading, visibleFaqs.map((item, idx) => renderTemplate`<div${addAttribute(`faq-item ${idx === 0 ? "open" : ""}`, "class")} data-faq data-astro-cid-btxh25n6> <div class="faq-question" data-astro-cid-btxh25n6> ${item.q} ${renderComponent($$result, "Image", $$Image, { "alt": "Arrow", "src": section10FaqArrow, "class": "faq-arrow", "data-astro-cid-btxh25n6": true })} </div> ${item.a && item.a !== "NA" ? renderTemplate`<div class="faq-answer" data-astro-cid-btxh25n6> <div class="faq-html" data-astro-cid-btxh25n6>${unescapeHTML(item.a)}</div> </div>` : null} </div>`));
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/pricingPage/Section5.astro", void 0);

const $$Astro = createAstro();
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Section1", $$Section1, {})} ${renderComponent($$result2, "Section2", $$Section2, {})}  ${renderComponent($$result2, "Section5", $$Section5, {})} ${renderComponent($$result2, "Section11Card", $$Card, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/pricing.astro", void 0);

const $$file = "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Pricing,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
