import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate, f as renderScript, b as createAstro } from '../chunks/astro/server_DMPVNDb3.mjs';
import { $ as $$Navbar, a as $$Card, b as $$Footer } from '../chunks/Card_BG5FG1Fk.mjs';
import qs from 'qs';
import { H as HeroSectionImage, N as NavLogo } from '../chunks/NavLogo_DGZv40OJ.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BIVO7GUa.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_qk7T31qc.mjs';
import { s as section10FaqArrow } from '../chunks/section10FaqArrow_B46qvdd7.mjs';
import { i as icon1, a as icon2, b as icon3, c as icon4 } from '../chunks/section8SubHeadingLogo4_SQuTDWxh.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const homePageQuery = qs.stringify(
    {
      populate: {
        HeroSection: {
          on: {
            "layout.hero-section": {
              populate: {
                video: true,
                image: true,
                link: true,
                pointsSlider: {
                  populate: "*"
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
      url.search = homePageQuery;
      const res = await fetch(url.toString());
      if (!res.ok) {
        console.error("❌ Strapi Fetch Failed:", res.status);
        return null;
      }
      const json = await res.json();
      return json?.data ?? null;
    } catch (err) {
      console.error("❌ Error fetching Strapi:", err);
      return null;
    }
  }
  const data = await getStrapiData("/api/home-page");
  const heroSection = Array.isArray(data?.HeroSection) ? data.HeroSection : [];
  return renderTemplate`${heroSection.map((hero) => {
    const heading = hero?.heading ?? "Welcome!";
    const subHeading = hero?.subHeading ?? "";
    const notes = hero?.notes ?? "";
    const linkText = hero?.link?.text ?? "Learn More";
    const linkURL = hero?.link?.url ?? "#";
    const image = hero?.image?.formats?.large;
    const imageUrl = image?.url ?? HeroSectionImage;
    const imageWidth = image?.width ?? 500;
    const imageHeight = image?.height ?? 350;
    const videoUrl = hero?.video?.url ?? null;
    return renderTemplate`${maybeRenderHead()}<section class="hero-section" data-astro-cid-2e6bkggq><div class="hero-container" data-astro-cid-2e6bkggq><div class="hero-content" data-astro-cid-2e6bkggq><h1 class="hero-title" data-astro-cid-2e6bkggq>${heading}</h1><p class="hero-subtitle" data-astro-cid-2e6bkggq>${subHeading}</p><a${addAttribute(linkURL, "href")} data-astro-cid-2e6bkggq><button class="cta-button" data-astro-cid-2e6bkggq>${linkText}</button></a>${notes && renderTemplate`<span class="no-credit" data-astro-cid-2e6bkggq>${notes}</span>`}</div><div class="hero-image" data-astro-cid-2e6bkggq>${videoUrl && renderTemplate`<video autoplay loop muted playsinline class="hero-video" data-astro-cid-2e6bkggq><source${addAttribute(videoUrl, "src")} type="video/webm" media="(min-width: 769px)" data-astro-cid-2e6bkggq></video>`}${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "alt": "Hero Image", "class": "hero-mobile-img", "width": imageWidth, "height": imageHeight, "data-astro-cid-2e6bkggq": true })}</div></div></section>`;
  })}<div class="stats-bar" data-astro-cid-2e6bkggq> <div class="stats-slider" data-astro-cid-2e6bkggq> ${heroSection.flatMap((hero) => {
    const slider = hero?.pointsSlider;
    const iconUrl = slider?.icon?.url ?? "/fallback-icon.png";
    return (slider?.points ?? []).map((point) => renderTemplate`<div class="stat-item" data-astro-cid-2e6bkggq> <img${addAttribute(iconUrl, "src")} alt="Slider Icon" class="check-icon" data-astro-cid-2e6bkggq> <div class="stat-text" data-astro-cid-2e6bkggq>${point?.point ?? ""}</div> </div>`);
  })} <!-- Duplicate for animation --> ${heroSection.flatMap((hero) => {
    const slider = hero?.pointsSlider;
    const iconUrl = slider?.icon?.url ?? "/fallback-icon.png";
    return (slider?.points ?? []).map((point) => renderTemplate`<div class="stat-item" data-astro-cid-2e6bkggq> <img${addAttribute(iconUrl, "src")} alt="Slider Icon" class="check-icon" data-astro-cid-2e6bkggq> <div class="stat-text" data-astro-cid-2e6bkggq>${point?.point ?? ""}</div> </div>`);
  })} </div> </div>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/HeroSection.astro", void 0);

const $$FaqSection = createComponent(async ($$result, $$props, $$slots) => {
  const homePageQuery = qs.stringify(
    {
      populate: {
        faqSection: { populate: "*" }
      }
    },
    { encodeValuesOnly: true }
  );
  async function getStrapiData(path) {
    try {
      const BASE_URL = "https://celebrated-beauty-ac07850f26.strapiapp.com";
      if (!BASE_URL) ;
      const url = new URL(path, BASE_URL);
      url.search = homePageQuery;
      const res = await fetch(url.href);
      if (!res.ok) return null;
      const json = await res.json();
      return json?.data ?? null;
    } catch (err) {
      console.error("Strapi FAQ Fetch Error:", err);
      return null;
    }
  }
  const data = await getStrapiData("/api/home-page");
  const faqSection = data?.faqSection?.find((b) => b.__component === "layout.faq-section") ?? {};
  const faqList = Object.keys(faqSection).filter((key) => key.startsWith("faqSectionQuestion")).map((qKey) => {
    const index = qKey.replace("faqSectionQuestion", "");
    const aKey = `faqSectionAnswer${index}`;
    return {
      question: faqSection[qKey],
      answer: faqSection[aKey]
    };
  }).filter((item) => item.question);
  return renderTemplate`${maybeRenderHead()}<section class="faq-section" data-astro-cid-4rnhuzj7> <div class="faq-container" data-astro-cid-4rnhuzj7> <h2 class="faq-heading" data-astro-cid-4rnhuzj7> ${faqSection?.faqSectionHeading ?? "Frequently Asked Questions"} </h2> ${faqList.length === 0 && renderTemplate`<p style="text-align:center; color:#777;" data-astro-cid-4rnhuzj7>No FAQs available right now.</p>`} ${faqList.map((item, index) => renderTemplate`<div${addAttribute(`faq-item ${index === 0 ? "open" : ""}`, "class")} data-faq data-astro-cid-4rnhuzj7> <div class="faq-question" data-astro-cid-4rnhuzj7> ${item.question} ${renderComponent($$result, "Image", $$Image, { "src": section10FaqArrow, "alt": "Arrow", "class": "faq-arrow", "data-astro-cid-4rnhuzj7": true })} </div> ${item.answer && renderTemplate`<p class="faq-answer" data-astro-cid-4rnhuzj7>${item.answer}</p>`} </div>`)} </div> </section> ${renderScript($$result, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/FaqSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/FaqSection.astro", void 0);

const $$CoachAdvantageSection = createComponent(async ($$result, $$props, $$slots) => {
  const fallbackIcons = [icon1, icon2, icon3, icon4];
  const homePageQuery = qs.stringify(
    {
      populate: {
        coachAdvantageSection: {
          populate: "*"
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
      url.search = homePageQuery;
      const res = await fetch(url.href);
      if (!res.ok) return null;
      const json = await res.json();
      return json?.data ?? null;
    } catch (e) {
      console.error("Strapi Fetch Error:", e);
      return null;
    }
  }
  const data = await getStrapiData("/api/home-page");
  const section = data?.coachAdvantageSection?.find((b) => b.__component === "layout.section8-details") ?? {};
  const items = [
    {
      heading: section.SectionSubHeading1,
      text: section.SectionSubPara1,
      icon: fallbackIcons[0]
    },
    {
      heading: section.SectionSubHeading2,
      text: section.SectionSubPara2,
      icon: fallbackIcons[1]
    },
    {
      heading: section.SectionSubHeading3,
      text: section.SectionSubPara3,
      icon: fallbackIcons[2]
    },
    {
      heading: section.SectionSubHeading4,
      text: section.SectionSubPara4,
      icon: fallbackIcons[3]
    }
  ].filter((item) => item.heading || item.text);
  return renderTemplate`${maybeRenderHead()}<section class="section8Details" data-astro-cid-pzfszk7h> <h2 class="section8-title" data-astro-cid-pzfszk7h>
The <span class="section8-highlight" data-astro-cid-pzfszk7h>Coach</span> Advantage
</h2> <div class="section8-wrapper" data-astro-cid-pzfszk7h> ${items.map((item, i) => renderTemplate`<div class="section8-row" data-astro-cid-pzfszk7h> ${renderComponent($$result, "Image", $$Image, { "alt": "", "src": item.icon, "class": "section8-icon", "data-astro-cid-pzfszk7h": true })} <div class="section8-textbox" data-astro-cid-pzfszk7h> <h3 class="section8-subheading" data-astro-cid-pzfszk7h>${item.heading ?? "—"}</h3> <p class="section8-paragraph" data-astro-cid-pzfszk7h>${item.text ?? ""}</p> </div> </div>`)} </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/coachAdvantageSection.astro", void 0);

const $$ImpactSection = createComponent(async ($$result, $$props, $$slots) => {
  const homePageQuery = qs.stringify(
    {
      populate: {
        impactSection: {
          populate: "*"
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
      url.search = homePageQuery;
      const res = await fetch(url.href);
      if (!res.ok) {
        console.error("❌ Strapi request failed:", res.status);
        return null;
      }
      const json = await res.json();
      return json?.data ?? null;
    } catch (error) {
      console.error("❌ Strapi fetch error:", error);
      return null;
    }
  }
  const data = await getStrapiData("/api/home-page");
  const impactSection = data?.impactSection?.find((b) => b.__component === "components.section9") ?? {
    impactSectionHeading1: "Our Impact"};
  const items = [
    {
      heading: impactSection?.impactSectionSubHeading1,
      text: impactSection?.impactSectionPara1
    },
    {
      heading: impactSection?.impactSectionSubHeading2,
      text: impactSection?.impactSectionPara2
    },
    {
      heading: impactSection?.impactSectionSubHeading3,
      text: impactSection?.impactSectionPara3
    }
  ].filter((item) => item.heading || item.text);
  return renderTemplate`${maybeRenderHead()}<section class="impact-section" data-astro-cid-pnoqih4q> <h2 data-astro-cid-pnoqih4q>${impactSection.impactSectionHeading1 || "Our Impact"}</h2> <div class="impact-grid" data-astro-cid-pnoqih4q> ${items.map((item) => renderTemplate`<div class="impact-item" data-astro-cid-pnoqih4q> <h3 data-astro-cid-pnoqih4q>${item.heading || "—"}</h3> <p data-astro-cid-pnoqih4q>${item.text || ""}</p> </div>`)} </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/ImpactSection.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "robots": "index, follow" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "CoachAdvantageSection", $$CoachAdvantageSection, {})} ${renderComponent($$result2, "ImpactSection", $$ImpactSection, {})} ${renderComponent($$result2, "Section10Faq", $$FaqSection, {})}   ${renderComponent($$result2, "Card", $$Card, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`<link rel="preload"${addAttribute(NavLogo.src, "href")} as="image" type="image/svg+xml" fetchpriority="high">` })}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/index.astro", void 0);

const $$file = "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
