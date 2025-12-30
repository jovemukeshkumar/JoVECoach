import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DMPVNDb3.mjs';
import 'clsx';
import qs from 'qs';
/* empty css                                 */

const $$TrustedPartnersSection = createComponent(async ($$result, $$props, $$slots) => {
  const homePageQuery = qs.stringify(
    {
      populate: {
        trustedPartners: {
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
  const trustedPartners = data?.trustedPartners?.find((b) => b.__component === "layout.section7") ?? { trustedPartnersHeading: "", trustedPartnersLogoImage: [] };
  return renderTemplate`${maybeRenderHead()}<section class="section7" data-astro-cid-abudbza7> <div class="section7-container" data-astro-cid-abudbza7> <div class="section7-heading-wrapper" data-astro-cid-abudbza7> <div class="section7-heading" data-astro-cid-abudbza7> ${trustedPartners.trustedPartnersHeading || "Trusted by 1 Million+ students across"} </div> <p data-astro-cid-abudbza7>1,800+ top school and universities</p> </div> <div class="section7-slider-wrapper" data-astro-cid-abudbza7> <div class="section7-slider" data-astro-cid-abudbza7> ${(trustedPartners.trustedPartnersLogoImage ?? []).map((img) => {
    const imgUrl = img?.url ?? "/fallback-logo.png";
    const imgAlt = img?.name ?? "Partner Logo";
    return renderTemplate`<img${addAttribute(imgUrl, "src")}${addAttribute(imgAlt, "alt")} class="section7-logo" loading="lazy" data-astro-cid-abudbza7>`;
  })} </div> </div> </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/trustedPartnersSection.astro", void 0);

export { $$TrustedPartnersSection as $ };
