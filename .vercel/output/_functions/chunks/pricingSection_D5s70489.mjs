import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, b as createAstro, e as defineScriptVars, d as addAttribute, f as renderScript, u as unescapeHTML } from './astro/server_DMPVNDb3.mjs';
import { $ as $$Image, a as getImage } from './_astro_assets_BIVO7GUa.mjs';
import { j as joveWhitelogo, H as HeroSectionBlueBg, c as conceptsSectionIcon1, a as HeroSectionIcon1, b as HeroGridBg, d as HeroSectioncognition, e as HeroSectionStat, S as STEMstruggleIcon3, f as STEMstruggleIcon2, g as STEMstruggleIcon4, h as STEMstruggleIcon1, J as JoVECoachStepsBgImage1, i as JoVECoachStepsBgImage2, k as Jove_chat_video, l as aILogo, m as Jove_chat_Image2, v as videoPlay, n as Jove_chat_Image1, o as notePad, p as Jove_chat_Image3, q as cupLogo, r as aiChatIcon, s as secondCTAIcon, t as conceptsSectionIcon2, u as conceptsSectionIcon3, w as conceptsSectionIcon4, x as conceptsSectionIcon5, y as conceptsSectionIcon10, z as conceptsSectionIcon7, A as conceptsSectionIcon9, B as conceptsSectionIcon8, L as LearnerPersonasImg1, C as LearnerPersonasImg2, D as LearnerPersonasImg3, E as LearnerPersonasImg4, F as LearnerPersonasImg5, G as LearnerPersonasImg6, I as ArrowRight } from './Arrow_loCUEN2J.mjs';
import { H as HeroSectionImage, N as NavLogo } from './NavLogo_DGZv40OJ.mjs';
/* empty css                                 */
import { s as section10FaqArrow } from './section10FaqArrow_B46qvdd7.mjs';
import 'clsx';
import { $ as $$TrustedPartnersSection } from './trustedPartnersSection_BNVMukmD.mjs';
import { T as ThreeDImages } from './3D-Still-Images_DpOYL1ju.mjs';
import { m as mostPopular, p as priceDiscountIcon, a as pricecut } from './priceDiscountIcon_CnM-yfkm.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<style>
	/* Footer */
	/* ROOT FOOTER WRAPPER */
	.footer-wrapper {
		background-color: rgb(26, 26, 26);
		color: rgb(255, 255, 255);
		/* font-family: Inter; */
		margin-top: 150px;
	}

	/* TOP SECTION */
	.footer-top {
		padding: 36px 120px 40px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}

	.footer-logo {
		transform: none;
		transition: transform 0.3s;
		max-width: 150px;
		height: auto;
	}

	.footer-head-text {
		margin: 0px;
		color: var(--Background, #faf9f5);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		display: flex;
		flex-wrap: wrap;
	}

	.footer-head-link {
		text-decoration: none;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
	}

	.footer-head-link-span {
		color: var(--Background, #faf9f5);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-decoration-line: underline;
		margin-left: 5px;
		cursor: pointer;
	}

	.footer-head-arrow {
		width: 12px;
		height: 12px;
		margin-left: 3px;
		cursor: pointer;
	}

	/* MIDDLE SECTION */
	.footer-middle {
		display: flex;
		justify-content: space-between;
		/* flex-wrap: wrap; */
		border-top: 1px solid rgb(63, 63, 63);
		padding: 40px 120px;
		gap: 48px;
	}

	/* LEFT GRID */
	.footer-grid {
		flex: 1 1 auto;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 32px;
		color: rgb(204, 204, 204);
		width: 100%;
	}

	.footer-grid-column {
		margin-bottom: 24px;
	}

	.footer-grid-title {
		font-weight: 700;
		font-size: 16px;
		color: rgb(255, 255, 255);
		margin-bottom: 14px;
		font-style: normal;
		line-height: normal;
	}

	.footer-grid-item {
		font-size: 16px;
		font-weight: 400;
		margin-bottom: 14px;
		cursor: pointer;
		color: rgb(204, 204, 204);
		pointer-events: auto;
		font-style: normal;
		line-height: normal;
	}

	/* CTA RIGHT SECTION */
	.footer-cta {
		flex: 0 0 auto;
		min-width: 280px;
		max-width: 350px;
		width: 100%;
	}

	.footer-cta-primary button {
		width: 100%;
		background-color: rgb(33, 131, 237);
		color: white;
		border: none;
		border-radius: 8px;
		margin: 0px 0px 8px;
		cursor: pointer;
		padding: 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* font-family: Inter; */
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		transition: background-color 0.3s;
	}

	.footer-cta-primary button:hover {
		background-color: rgb(28, 111, 201);
	}

	.footer-cta-secondary button {
		width: 100%;
		color: rgb(179, 179, 179);
		background-color: transparent;
		border: none;
		border-radius: 0px;
		margin: 20px 0px 8px;
		cursor: pointer;
		padding: 12px 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* font-family: Inter; */
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		transition: color 0.3s;
	}

	.footer-cta-secondary button:hover {
		color: rgb(255, 255, 255);
	}

	/* BOTTOM SECTION */
	.footer-bottom {
		padding: 40px 120px 36px;
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 24px;
		color: rgb(255, 255, 255);
		/* font-family: Inter; */
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.footer-bottom-links {
		display: flex;
		gap: 40px;
		flex-wrap: wrap;
	}

	.footer-bottom-link a {
		text-decoration: none;
		color: #fff;
		cursor: pointer;
		transition: color 0.3s;
	}

	.footer-bottom-link a:hover {
		color: rgb(179, 179, 179);
	}

	.footer-copyrightText {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.footer-copyrightText img {
		width: 18px;
		height: auto;
	}

	.footer-copyrightText p {
		margin: 0;
	}

	.footer-copyrightText a {
		color: #fff;
		text-decoration: none;
		transition: opacity 0.3s;
	}

	.footer-copyrightText a:hover {
		opacity: 0.8;
	}

	/* Tablet breakpoint (1024px and below) */
	@media (max-width: 1024px) {
		.footer-top {
			padding: 32px 60px 36px;
			flex-direction: column;
			align-items: flex-start;
		}

		.footer-middle {
			padding: 36px 60px;
			gap: 40px;
			flex-direction: column;
		}

		.footer-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 24px;
		}

		.footer-cta {
			max-width: 100%;
		}

		.footer-bottom {
			padding: 32px 60px;
		}
	}

	/* Mobile breakpoint (768px and below) */
	@media (max-width: 768px) {
		.footer-top {
			padding: 24px 32px 28px;
		}

		.footer-logo {
			max-width: 120px;
		}

		.footer-head-text {
			font-size: 14px;
		}

		.footer-head-link-span {
			font-size: 14px;
		}

		.footer-middle {
			padding: 32px 32px;
			gap: 32px;
			flex-direction: column;
		}

		.footer-grid {
			grid-template-columns: 1fr;
			gap: 0;
		}

		.footer-grid-column {
			margin-bottom: 32px;
		}

		.footer-grid-title {
			font-size: 15px;
		}

		.footer-grid-item {
			font-size: 14px;
		}

		.footer-cta {
			min-width: 100%;
		}

		.footer-cta-primary button,
		.footer-cta-secondary button {
			font-size: 15px;
			padding: 14px;
		}

		.footer-cta-secondary button {
			margin: 16px 0px 8px;
		}

		.footer-bottom {
			padding: 28px 32px;
			flex-direction: column;
			align-items: flex-start;
		}

		.footer-bottom-links {
			gap: 24px;
			flex-direction: column;
		}

		.footer-copyrightText {
			align-self: flex-start;
		}
	}

	/* Small mobile breakpoint (480px and below) */
	@media (max-width: 480px) {
		.footer-top {
			padding: 20px 20px 24px;
		}

		.footer-head-text {
			font-size: 13px;
		}

		.footer-middle {
			padding: 28px 20px;
		}
		.footer-grid {
			flex: 1 1 auto;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 32px;
			color: rgb(204, 204, 204);
			width: 100%;
		}

		.footer-grid-title {
			font-size: 14px;
		}

		.footer-grid-item {
			font-size: 13px;
			margin-bottom: 12px;
		}

		.footer-cta-primary button,
		.footer-cta-secondary button {
			font-size: 14px;
			padding: 12px;
		}

		.footer-bottom {
			padding: 24px 20px;
			font-size: 13px;
		}

		.footer-bottom-links {
			gap: 16px;
		}
	}
</style>${maybeRenderHead()}<div class="footer-wrapper"> <div class="footer-top"> ${renderComponent($$result, "Image", $$Image, { "alt": "FooterLogo", "src": joveWhitelogo, "class": "footer-logo" })} </div> <div class="footer-bottom"> <div class="footer-copyrightText"> <p> <a href="https://coach.jove.com/privacyPolicy">Privacy Policy</a> ·
<a href="https://coach.jove.com/about">About</a></p> </div> <div class="footer-copyrightText"> <p>© 2025 MyJoVE Corporation</p> </div> </div> </div>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/Footer.astro", void 0);

const HeroSectionVideo = "/_astro/LP-Girl-MR.D4L0rveg.webm";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ZohoFormEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ZohoFormEmbed;
  const { formIdSuffix, layout = "vertical" } = Astro2.props;
  const formId = `webform_${formIdSuffix}`;
  const recaptchaId = `recap_${formIdSuffix}`;
  const callbackName = `onCaptchaSuccess_${formIdSuffix}`;
  return renderTemplate(_a || (_a = __template(["", "<form", ' action="https://crm.zoho.in/crm/WebToContactForm"', ' method="POST" accept-charset="UTF-8"', ' data-astro-cid-3pdy7ei3> <!-- Hidden Fields --> <input type="text" style="display:none;" name="xnQsjsdp" value="7cacd23940abbe07ab3afbb0935bce36e48117ac9aa7418df96fe992eea58e0f" data-astro-cid-3pdy7ei3> <input type="hidden" name="zc_gad"', ' value="" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;" name="xmIwtLD" value="b4a7085281b2a284d9cd1b01a00b2acad544d903c838c50c3b230c9587ff8a7243f1d77cf0e9a89f5dc74ad36c77b03a" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;" name="actionType" value="Q29udGFjdHM=" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;" name="returnURL" value="null" data-astro-cid-3pdy7ei3> <!-- UTM Hidden Fields --> <input type="text" style="display:none;"', ' name="CONTACTCF11" value="https://" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF14" value="" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF20" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF19" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF17" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF21" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF18" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF7" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF4" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF5" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF6" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF1" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF3" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF2" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF30" value="-" data-astro-cid-3pdy7ei3> <!-- Default Values --> <!-- Default Values --> <input type="text" style="display:none;"', ' name="CONTACTCF15" value="Paid" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF28" value="Lead" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF16" value="Direc" data-astro-cid-3pdy7ei3> ', ' <div class="cta-bottom" data-astro-cid-3pdy7ei3> <button type="submit" class="cta-button"', " data-astro-cid-3pdy7ei3> ", " </button> ", " </div> <!-- Invisible reCAPTCHA (Global) --> <!-- No local widget needed --> </form>  <script>(function(){", '\n	console.log(`Defining global callback: window.${callbackName}`);\n	// Define the callback function globally with a unique name\n	window[callbackName] = function (token) {\n		console.log(`Captcha validated for ${formIdSuffix}. Submitting...`);\n		const form = document.getElementById(formId);\n\n		// Dynamic Return URL\n		const nameVal = document.getElementById(`Last_Name_${formIdSuffix}`).value;\n		const emailVal = document.getElementById(`Email_${formIdSuffix}`).value;\n		const returnUrlInput = form.querySelector(\'input[name="returnURL"]\');\n\n		if (returnUrlInput) {\n			const baseUrl = "https://coach.jove.com/signup";\n			const redirectUrl = new URL(baseUrl);\n			redirectUrl.searchParams.set("name", nameVal);\n			redirectUrl.searchParams.set("email", emailVal);\n			returnUrlInput.value = redirectUrl.toString();\n		}\n\n		// Submit programmatically\n		console.log(`Submitting form ${formId} now.`);\n		HTMLFormElement.prototype.submit.call(form);\n	};\n\n	// Form Submission Handler\n	const form = document.getElementById(formId);\n	if (form) {\n		console.log(`Attaching submit handler to ${formId}`);\n		form.onsubmit = function (e) {\n			e.preventDefault();\n			console.log(`Submit triggered for ${formId}`);\n\n			// Basic Validation\n			const name = document.getElementById(`Last_Name_${formIdSuffix}`).value;\n			const email = document.getElementById(`Email_${formIdSuffix}`).value;\n\n			if (!name.trim() || !email.trim()) {\n				alert("Please fill in all required fields.");\n				return false;\n			}\n\n			// Execute Global reCAPTCHA\n			console.log(`Executing Global reCAPTCHA for ${formId}`);\n			if (typeof window.executeGlobalRecaptcha === "function") {\n				window.executeGlobalRecaptcha(window[callbackName]);\n			} else {\n				console.error("Global reCAPTCHA function not found.");\n				alert("Please wait for reCAPTCHA to load.");\n			}\n		};\n	}\n\n	// UTM Population\n	(function () {\n		const params = new URLSearchParams(window.location.search);\n\n		const mapping = {\n			utm_source: `CONTACTCF20_${formIdSuffix}`,\n			utm_medium: `CONTACTCF19_${formIdSuffix}`,\n			utm_campaign: `CONTACTCF17_${formIdSuffix}`,\n			utm_term: `CONTACTCF21_${formIdSuffix}`,\n			utm_content: `CONTACTCF18_${formIdSuffix}`,\n			ad_id: `CONTACTCF4_${formIdSuffix}`,\n			ad_set_id: `CONTACTCF7_${formIdSuffix}`,\n			ad_name: `CONTACTCF5_${formIdSuffix}`,\n			ad_platform: `CONTACTCF6_${formIdSuffix}`,\n			ad_campaign_id: `CONTACTCF1_${formIdSuffix}`,\n			ad_group_name: `CONTACTCF3_${formIdSuffix}`,\n			ad_group_id: `CONTACTCF2_${formIdSuffix}`,\n			ad_campaign_name: `CONTACTCF30_${formIdSuffix}`,\n			landing_page_url: `CONTACTCF11_${formIdSuffix}`,\n			referrer_url: `CONTACTCF14_${formIdSuffix}`,\n		};\n\n		for (const key in mapping) {\n			const fieldId = mapping[key];\n			const el = document.getElementById(fieldId);\n			if (el && params.has(key)) {\n				el.value = params.get(key);\n			}\n		}\n\n		// Fallback for adset_id (no underscore)\n		const adSetField = document.getElementById(`CONTACTCF7_${formIdSuffix}`);\n		if (adSetField && (adSetField.value === "-" || !adSetField.value) && params.has("adset_id")) {\n			adSetField.value = params.get("adset_id");\n		}\n\n		// Fallback for campaign_name (if ad_campaign_name is missing)\n		const campaignNameField = document.getElementById(`CONTACTCF30_${formIdSuffix}`);\n		if (campaignNameField && (campaignNameField.value === "-" || !campaignNameField.value) && params.has("campaign_name")) {\n			campaignNameField.value = params.get("campaign_name");\n		}\n\n		// Handle Source/Subsource Logic\n		const sourceSelect = document.getElementById(`CONTACTCF15_${formIdSuffix}`); // Source\n		const subsourceSelect = document.getElementById(`CONTACTCF16_${formIdSuffix}`); // Subsource\n		const platformSelect = document.getElementById(`CONTACTCF6_${formIdSuffix}`); // Ad Platform (Hidden input in this component, but mapped above)\n\n		const gclid = params.get("gclid");\n		const sources = params.getAll("source");\n		const utmSource = params.get("utm_source");\n		const utmMedium = params.get("utm_medium");\n		const adPlatform = params.get("ad_platform");\n\n		// Referrer Logic: Check referrer_url, referrer, ref, then document.referrer\n		const referrerUrlParam = params.get("referrer_url") || params.get("referrer") || params.get("ref");\n\n		// 1. Ad Platform Logic\n		if (platformSelect) {\n			if (adPlatform) platformSelect.value = adPlatform;\n			else if (gclid) platformSelect.value = "Google";\n		}\n\n		// 2. Source Logic\n		if (sourceSelect) {\n			if (sources.some(s => s.toLowerCase() === "paid") || gclid || params.get("ad_id")) {\n				sourceSelect.value = "Paid";\n			} else if (sources.some(s => s.toLowerCase() === "organic")) {\n				sourceSelect.value = "Organic";\n			} else if (sources.some(s => s.toLowerCase() === "social")) {\n				sourceSelect.value = "Social";\n			} else if (utmMedium && (utmMedium.toLowerCase().includes("cpc") || utmMedium.toLowerCase().includes("paid"))) {\n				sourceSelect.value = "Paid";\n			}\n		}\n\n		// 3. Subsource Logic\n		if (subsourceSelect) {\n			let subsourceValue = "";\n			// Check \'source\' params\n			for (const s of sources) {\n				if (s.toLowerCase() === "google") subsourceValue = "Google Ads";\n				else if (s.toLowerCase() === "facebook" || s.toLowerCase() === "meta") subsourceValue = "Meta Ads";\n				else if (s.toLowerCase() === "linkedin") subsourceValue = "LinkedIn";\n			}\n			// Check utm_source\n			if (!subsourceValue && utmSource) {\n				if (utmSource.toLowerCase().includes("google")) subsourceValue = "Google Ads";\n				else if (utmSource.toLowerCase().includes("facebook") || utmSource.toLowerCase().includes("meta")) subsourceValue = "Meta Ads";\n				else if (utmSource.toLowerCase().includes("linkedin")) subsourceValue = "LinkedIn";\n			}\n			if (!subsourceValue && gclid) subsourceValue = "Google Ads";\n\n			if (subsourceValue) subsourceSelect.value = subsourceValue;\n		}\n\n		const landingField = document.getElementById(`CONTACTCF11_${formIdSuffix}`);\n		if (landingField) landingField.value = window.location.href;\n\n		const refField = document.getElementById(`CONTACTCF14_${formIdSuffix}`);\n		if (refField) {\n			if (referrerUrlParam) {\n				refField.value = referrerUrlParam;\n			} else {\n				refField.value = document.referrer || "-";\n			}\n		}\n	})();\n})();<\/script>'], ["", "<form", ' action="https://crm.zoho.in/crm/WebToContactForm"', ' method="POST" accept-charset="UTF-8"', ' data-astro-cid-3pdy7ei3> <!-- Hidden Fields --> <input type="text" style="display:none;" name="xnQsjsdp" value="7cacd23940abbe07ab3afbb0935bce36e48117ac9aa7418df96fe992eea58e0f" data-astro-cid-3pdy7ei3> <input type="hidden" name="zc_gad"', ' value="" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;" name="xmIwtLD" value="b4a7085281b2a284d9cd1b01a00b2acad544d903c838c50c3b230c9587ff8a7243f1d77cf0e9a89f5dc74ad36c77b03a" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;" name="actionType" value="Q29udGFjdHM=" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;" name="returnURL" value="null" data-astro-cid-3pdy7ei3> <!-- UTM Hidden Fields --> <input type="text" style="display:none;"', ' name="CONTACTCF11" value="https://" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF14" value="" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF20" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF19" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF17" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF21" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF18" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF7" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF4" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF5" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF6" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF1" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF3" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF2" value="-" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF30" value="-" data-astro-cid-3pdy7ei3> <!-- Default Values --> <!-- Default Values --> <input type="text" style="display:none;"', ' name="CONTACTCF15" value="Paid" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF28" value="Lead" data-astro-cid-3pdy7ei3> <input type="text" style="display:none;"', ' name="CONTACTCF16" value="Direc" data-astro-cid-3pdy7ei3> ', ' <div class="cta-bottom" data-astro-cid-3pdy7ei3> <button type="submit" class="cta-button"', " data-astro-cid-3pdy7ei3> ", " </button> ", " </div> <!-- Invisible reCAPTCHA (Global) --> <!-- No local widget needed --> </form>  <script>(function(){", '\n	console.log(\\`Defining global callback: window.\\${callbackName}\\`);\n	// Define the callback function globally with a unique name\n	window[callbackName] = function (token) {\n		console.log(\\`Captcha validated for \\${formIdSuffix}. Submitting...\\`);\n		const form = document.getElementById(formId);\n\n		// Dynamic Return URL\n		const nameVal = document.getElementById(\\`Last_Name_\\${formIdSuffix}\\`).value;\n		const emailVal = document.getElementById(\\`Email_\\${formIdSuffix}\\`).value;\n		const returnUrlInput = form.querySelector(\'input[name="returnURL"]\');\n\n		if (returnUrlInput) {\n			const baseUrl = "https://coach.jove.com/signup";\n			const redirectUrl = new URL(baseUrl);\n			redirectUrl.searchParams.set("name", nameVal);\n			redirectUrl.searchParams.set("email", emailVal);\n			returnUrlInput.value = redirectUrl.toString();\n		}\n\n		// Submit programmatically\n		console.log(\\`Submitting form \\${formId} now.\\`);\n		HTMLFormElement.prototype.submit.call(form);\n	};\n\n	// Form Submission Handler\n	const form = document.getElementById(formId);\n	if (form) {\n		console.log(\\`Attaching submit handler to \\${formId}\\`);\n		form.onsubmit = function (e) {\n			e.preventDefault();\n			console.log(\\`Submit triggered for \\${formId}\\`);\n\n			// Basic Validation\n			const name = document.getElementById(\\`Last_Name_\\${formIdSuffix}\\`).value;\n			const email = document.getElementById(\\`Email_\\${formIdSuffix}\\`).value;\n\n			if (!name.trim() || !email.trim()) {\n				alert("Please fill in all required fields.");\n				return false;\n			}\n\n			// Execute Global reCAPTCHA\n			console.log(\\`Executing Global reCAPTCHA for \\${formId}\\`);\n			if (typeof window.executeGlobalRecaptcha === "function") {\n				window.executeGlobalRecaptcha(window[callbackName]);\n			} else {\n				console.error("Global reCAPTCHA function not found.");\n				alert("Please wait for reCAPTCHA to load.");\n			}\n		};\n	}\n\n	// UTM Population\n	(function () {\n		const params = new URLSearchParams(window.location.search);\n\n		const mapping = {\n			utm_source: \\`CONTACTCF20_\\${formIdSuffix}\\`,\n			utm_medium: \\`CONTACTCF19_\\${formIdSuffix}\\`,\n			utm_campaign: \\`CONTACTCF17_\\${formIdSuffix}\\`,\n			utm_term: \\`CONTACTCF21_\\${formIdSuffix}\\`,\n			utm_content: \\`CONTACTCF18_\\${formIdSuffix}\\`,\n			ad_id: \\`CONTACTCF4_\\${formIdSuffix}\\`,\n			ad_set_id: \\`CONTACTCF7_\\${formIdSuffix}\\`,\n			ad_name: \\`CONTACTCF5_\\${formIdSuffix}\\`,\n			ad_platform: \\`CONTACTCF6_\\${formIdSuffix}\\`,\n			ad_campaign_id: \\`CONTACTCF1_\\${formIdSuffix}\\`,\n			ad_group_name: \\`CONTACTCF3_\\${formIdSuffix}\\`,\n			ad_group_id: \\`CONTACTCF2_\\${formIdSuffix}\\`,\n			ad_campaign_name: \\`CONTACTCF30_\\${formIdSuffix}\\`,\n			landing_page_url: \\`CONTACTCF11_\\${formIdSuffix}\\`,\n			referrer_url: \\`CONTACTCF14_\\${formIdSuffix}\\`,\n		};\n\n		for (const key in mapping) {\n			const fieldId = mapping[key];\n			const el = document.getElementById(fieldId);\n			if (el && params.has(key)) {\n				el.value = params.get(key);\n			}\n		}\n\n		// Fallback for adset_id (no underscore)\n		const adSetField = document.getElementById(\\`CONTACTCF7_\\${formIdSuffix}\\`);\n		if (adSetField && (adSetField.value === "-" || !adSetField.value) && params.has("adset_id")) {\n			adSetField.value = params.get("adset_id");\n		}\n\n		// Fallback for campaign_name (if ad_campaign_name is missing)\n		const campaignNameField = document.getElementById(\\`CONTACTCF30_\\${formIdSuffix}\\`);\n		if (campaignNameField && (campaignNameField.value === "-" || !campaignNameField.value) && params.has("campaign_name")) {\n			campaignNameField.value = params.get("campaign_name");\n		}\n\n		// Handle Source/Subsource Logic\n		const sourceSelect = document.getElementById(\\`CONTACTCF15_\\${formIdSuffix}\\`); // Source\n		const subsourceSelect = document.getElementById(\\`CONTACTCF16_\\${formIdSuffix}\\`); // Subsource\n		const platformSelect = document.getElementById(\\`CONTACTCF6_\\${formIdSuffix}\\`); // Ad Platform (Hidden input in this component, but mapped above)\n\n		const gclid = params.get("gclid");\n		const sources = params.getAll("source");\n		const utmSource = params.get("utm_source");\n		const utmMedium = params.get("utm_medium");\n		const adPlatform = params.get("ad_platform");\n\n		// Referrer Logic: Check referrer_url, referrer, ref, then document.referrer\n		const referrerUrlParam = params.get("referrer_url") || params.get("referrer") || params.get("ref");\n\n		// 1. Ad Platform Logic\n		if (platformSelect) {\n			if (adPlatform) platformSelect.value = adPlatform;\n			else if (gclid) platformSelect.value = "Google";\n		}\n\n		// 2. Source Logic\n		if (sourceSelect) {\n			if (sources.some(s => s.toLowerCase() === "paid") || gclid || params.get("ad_id")) {\n				sourceSelect.value = "Paid";\n			} else if (sources.some(s => s.toLowerCase() === "organic")) {\n				sourceSelect.value = "Organic";\n			} else if (sources.some(s => s.toLowerCase() === "social")) {\n				sourceSelect.value = "Social";\n			} else if (utmMedium && (utmMedium.toLowerCase().includes("cpc") || utmMedium.toLowerCase().includes("paid"))) {\n				sourceSelect.value = "Paid";\n			}\n		}\n\n		// 3. Subsource Logic\n		if (subsourceSelect) {\n			let subsourceValue = "";\n			// Check \'source\' params\n			for (const s of sources) {\n				if (s.toLowerCase() === "google") subsourceValue = "Google Ads";\n				else if (s.toLowerCase() === "facebook" || s.toLowerCase() === "meta") subsourceValue = "Meta Ads";\n				else if (s.toLowerCase() === "linkedin") subsourceValue = "LinkedIn";\n			}\n			// Check utm_source\n			if (!subsourceValue && utmSource) {\n				if (utmSource.toLowerCase().includes("google")) subsourceValue = "Google Ads";\n				else if (utmSource.toLowerCase().includes("facebook") || utmSource.toLowerCase().includes("meta")) subsourceValue = "Meta Ads";\n				else if (utmSource.toLowerCase().includes("linkedin")) subsourceValue = "LinkedIn";\n			}\n			if (!subsourceValue && gclid) subsourceValue = "Google Ads";\n\n			if (subsourceValue) subsourceSelect.value = subsourceValue;\n		}\n\n		const landingField = document.getElementById(\\`CONTACTCF11_\\${formIdSuffix}\\`);\n		if (landingField) landingField.value = window.location.href;\n\n		const refField = document.getElementById(\\`CONTACTCF14_\\${formIdSuffix}\\`);\n		if (refField) {\n			if (referrerUrlParam) {\n				refField.value = referrerUrlParam;\n			} else {\n				refField.value = document.referrer || "-";\n			}\n		}\n	})();\n})();<\/script>'])), maybeRenderHead(), addAttribute(formId, "id"), addAttribute(`WebToContacts_${formIdSuffix}`, "name"), addAttribute(layout === "horizontal" ? "zoho-form-horizontal" : "zoho-form-vertical", "class"), addAttribute(`zc_gad_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF11_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF14_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF20_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF19_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF17_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF21_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF18_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF7_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF4_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF5_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF6_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF1_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF3_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF2_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF30_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF15_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF28_${formIdSuffix}`, "id"), addAttribute(`CONTACTCF16_${formIdSuffix}`, "id"), layout === "horizontal" ? renderTemplate`<div class="input-row" data-astro-cid-3pdy7ei3> <input type="text" class="input-field"${addAttribute(`Last_Name_${formIdSuffix}`, "id")} name="Last Name" placeholder="Name*" required data-astro-cid-3pdy7ei3> <input type="email" class="input-field input-field-mail"${addAttribute(`Email_${formIdSuffix}`, "id")} name="Email" placeholder="Email*" required data-astro-cid-3pdy7ei3> </div>` : renderTemplate`<div class="vertical-inputs" data-astro-cid-3pdy7ei3> <input type="text" class="input-field"${addAttribute(`Last_Name_${formIdSuffix}`, "id")} name="Last Name" placeholder="Name*" required data-astro-cid-3pdy7ei3> <input type="email" class="input-field"${addAttribute(`Email_${formIdSuffix}`, "id")} name="Email" placeholder="Email*" required data-astro-cid-3pdy7ei3> </div>`, addAttribute(`btn_${formIdSuffix}`, "id"), layout === "horizontal" ? "Try It Free" : formIdSuffix === "cta2" ? "Ask Your First Question" : "Try an AI Explanation", layout === "horizontal" && renderTemplate`<span class="cta-note" data-astro-cid-3pdy7ei3>• 7 days free • Full access • No credit card</span>`, defineScriptVars({ formId, formIdSuffix, callbackName, recaptchaId }));
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/ZohoFormEmbed.astro", void 0);

const $$Astro = createAstro();
const $$HeroSectionAlt = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  await getImage({ src: HeroSectionBlueBg, format: "webp" });
  const { videoSrc = HeroSectionVideo, posterSrc, mobileImgSrc = HeroSectionImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero-section" data-astro-cid-4bsudnrr> <div class="logo" data-astro-cid-4bsudnrr> ${renderComponent($$result, "Image", $$Image, { "src": NavLogo, "alt": "Logo", "loading": "eager", "data-astro-cid-4bsudnrr": true })} </div> <div class="hero-container" data-astro-cid-4bsudnrr> <!-- Left Content --> <div class="hero-left" data-astro-cid-4bsudnrr> <div class="hero-content" data-astro-cid-4bsudnrr> <h1 class="hero-title" data-astro-cid-4bsudnrr>The Smarter Way to Learn STEM</h1> <span class="hero-span" data-astro-cid-4bsudnrr>with
${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon1, "alt": "Logo", "style": "width: 120px; height: auto; vertical-align: middle;", "data-astro-cid-4bsudnrr": true })}
powered learning
</span> <p class="hero-subtitle" data-astro-cid-4bsudnrr> Learn STEM, the smart way with bite-sized expert videos. Instant practice. Real results. </p> <ul class="features-list" data-astro-cid-4bsudnrr> <li class="feature-item" data-astro-cid-4bsudnrr> ${renderComponent($$result, "Image", $$Image, { "src": HeroSectionIcon1, "alt": "Feature Icon", "data-astro-cid-4bsudnrr": true })} <span class="feature-text" data-astro-cid-4bsudnrr>Trusted by 1 Million+ students. Proven results.</span> </li> <li class="feature-item" data-astro-cid-4bsudnrr> ${renderComponent($$result, "Image", $$Image, { "src": HeroSectionIcon1, "alt": "Feature Icon", "data-astro-cid-4bsudnrr": true })} <span class="feature-text" data-astro-cid-4bsudnrr>19 years of academic credibility</span> </li> <li class="feature-item" data-astro-cid-4bsudnrr> ${renderComponent($$result, "Image", $$Image, { "src": HeroSectionIcon1, "alt": "Feature Icon", "data-astro-cid-4bsudnrr": true })} <span class="feature-text" data-astro-cid-4bsudnrr>2-minute videos made by experts</span> </li> </ul> <div class="cta-box" data-astro-cid-4bsudnrr> <h3 class="cta-title" data-astro-cid-4bsudnrr>See what stress-free STEM learning feels like</h3> ${renderComponent($$result, "ZohoFormEmbed", $$ZohoFormEmbed, { "formIdSuffix": "hero", "layout": "horizontal", "data-astro-cid-4bsudnrr": true })} </div> </div> </div> <!-- Right Visual --> <div class="hero-right" data-astro-cid-4bsudnrr> ${renderComponent($$result, "Image", $$Image, { "src": HeroGridBg, "alt": "", "class": "hero-bg", "data-astro-cid-4bsudnrr": true })} <div class="hero-image" data-astro-cid-4bsudnrr> <div class="visual-container" data-astro-cid-4bsudnrr> <!-- <div class="blue-circle"></div> --> <!-- Animated Pillars (Growing from bottom to top) --> <div class="pillar-container" data-astro-cid-4bsudnrr> <div class="pillar pillar-left" data-astro-cid-4bsudnrr> <div class="pillar-content" data-astro-cid-4bsudnrr> <h3 class="stat-number" data-astro-cid-4bsudnrr>96%</h3> <p class="stat-label" data-astro-cid-4bsudnrr>Enhanced Clarity</p> ${renderComponent($$result, "Image", $$Image, { "src": HeroSectioncognition, "alt": "Enhanced Clarity Icon", "data-astro-cid-4bsudnrr": true })} </div> </div> <div class="pillar pillar-right" data-astro-cid-4bsudnrr> <div class="pillar-content" data-astro-cid-4bsudnrr> <h3 class="stat-number" data-astro-cid-4bsudnrr>2X</h3> <p class="stat-label" data-astro-cid-4bsudnrr>Improved Scores</p> ${renderComponent($$result, "Image", $$Image, { "src": HeroSectionStat, "alt": "Improved Scores Icon", "data-astro-cid-4bsudnrr": true })} </div> </div> </div> <!-- Stat Badges --> <!-- Girl Placeholder --> <video width="900px" height="auto" autoplay muted loop playsinline class="hero-video"${addAttribute(posterSrc, "poster")} preload="auto" fetchpriority="high" data-astro-cid-4bsudnrr> <source${addAttribute(videoSrc, "src")} type="video/webm" media="(min-width: 769px)" data-astro-cid-4bsudnrr>
Your browser does not support the video tag.
</video> ${renderComponent($$result, "Image", $$Image, { "src": mobileImgSrc, "alt": "Hero Video", "class": "hero-video hero-mobile-img", "loading": "eager", "data-astro-cid-4bsudnrr": true })} </div> </div> </div> </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/HeroSectionAlt.astro", void 0);

const $$JoveGenLpFaqs = createComponent(($$result, $$props, $$slots) => {
  const faqSectionHeading = "Frequently Asked Questions";
  const faqList = [
    {
      question: "Is JoVE Coach free?",
      answer: "You can explore videos free-no sign-up needed. Want full access? Start a 7-day free trial to unlock all videos and micro courses."
    },
    {
      question: "How long are the videos?",
      answer: "2 minutes. One concept, clearly explained. No filler."
    },
    {
      question: "What are micro courses?",
      answer: "Bite-sized learning paths that group related videos together. Master a topic step by step-not just video by video."
    },
    {
      question: "How is this different from YouTube?",
      answer: "Every video is made by STEM experts, not content creators. AI finds exactly what you need, and generates quizzes after each video-so you know if it actually clicked."
    },
    {
      question: "Will JoVE Coach help me pass my exams?",
      answer: "That's what it's built for. Students who use JoVE Coach consistently report better understanding and 2X improved test scores."
    },
    {
      question: "What subjects do you cover?",
      answer: "Biology, Chemistry, Physics, Statistics and more. More coming based on what students need."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. No contracts, no fees, no hassle."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="faq-section" data-astro-cid-baqtnvey> <div class="faq-container" data-astro-cid-baqtnvey> <h2 class="faq-heading" data-astro-cid-baqtnvey> ${faqSectionHeading} </h2> ${faqList.length === 0 && renderTemplate`<p style="text-align:center; color:#777;" data-astro-cid-baqtnvey>No FAQs available right now.</p>`} ${faqList.map((item, index) => renderTemplate`<div${addAttribute(`faq-item ${index === 0 ? "open" : ""}`, "class")} data-faq data-astro-cid-baqtnvey> <div class="faq-question" data-astro-cid-baqtnvey> ${item.question} ${renderComponent($$result, "Image", $$Image, { "src": section10FaqArrow, "alt": "Arrow", "class": "faq-arrow", "data-astro-cid-baqtnvey": true })} </div> ${item.answer && renderTemplate`<p class="faq-answer" data-astro-cid-baqtnvey>${item.answer}</p>`} </div>`)} </div> </section> ${renderScript($$result, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/joveGenLpFaqs.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/joveGenLpFaqs.astro", void 0);

const formHtml = "<!-- Note :\n   - You can modify the font style and form style to suit your website. \n   - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code. \n   - The Mandatory check script can modified as to suit your business needs. \n   - It is important that you test the modified form before going live.-->\n<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm'\n\tstyle='background-color: white;color: black;max-width: 600px;'>\n\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n\t<META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>\n\t<META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>\n\t<form id='webform1127844000000480553' action='https://crm.zoho.in/crm/WebToContactForm'\n\t\tname=WebToContacts1127844000000480553 method='POST'\n\t\taccept-charset='UTF-8'\n\t\tonsubmit='javascript:document.charset=\"UTF-8\"; return checkMandatory1127844000000480553()'>\n\t\t<input type='text' style='display:none;' name='xnQsjsdp'\n\t\t\tvalue='7cacd23940abbe07ab3afbb0935bce36e48117ac9aa7418df96fe992eea58e0f'>\n\t\t</input>\n\t\t<input type='hidden' name='zc_gad' id='zc_gad' value=''>\n\t\t</input>\n\t\t<input type='text' style='display:none;' name='xmIwtLD'\n\t\t\tvalue='b4a7085281b2a284d9cd1b01a00b2acad544d903c838c50c3b230c9587ff8a7243f1d77cf0e9a89f5dc74ad36c77b03a'>\n\t\t</input>\n\t\t<input type='text' style='display:none;' name='actionType' value='Q29udGFjdHM='>\n\t\t</input>\n\t\t<input type='text' style='display:none;' name='returnURL' value='https://coach.jove.com/signup'>\n\t\t</input>\n\t\t<!-- Do not remove this code. -->\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody {\n\t\t\t\tmargin: 0px;\n\t\t\t}\n\n\n\t\t\t#crmWebToEntityForm.zcwf_lblLeft {\n\t\t\t\tmargin: 50px auto;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tmax-width: 1200px !important;\n\t\t\t\tdisplay: flex !important;\n\t\t\t\tjustify-content: flex-start !important;\n\t\t\t\tflex-direction: column !important;\n\t\t\t\tcolor: #fff !important;\n\t\t\t\tbackground: #0085F6 !important;\n\t\t\t\tborder-radius: 15px !important;\n\t\t\t\tpadding: 40px 70px 20px 70px !important;\n\t\t\t\tposition: relative !important;\n\t\t\t\tbackground-image: url('/cardBg.svg') !important;\n\t\t\t\tbackground-position: 600px center !important;\n\t\t\t\tbackground-repeat: no-repeat !important;\n\t\t\t\tbackground-size: contain !important;\n\n\t\t\t}\n\t\t\t.zohoCTAImage {\n\t\t\t\tposition: absolute;\n\t\t\t\tbottom: 0;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 450px;\n\t\t\t\theight: auto;\n\t\t\t}\n\n\t\t\t.zcwf_formVisibleFields_row {\n\t\t\t\tgap: 0px !important;\n\t\t\t\tflex-wrap: wrap !important;\n\t\t\t\tmargin: 0 !important;\n\n\t\t\t}\n\n\t\t\t.zcwf_formVisibleFields_row .zcwf_col_fld {\n\t\t\t\tmin-width: 290px !important;\n\t\t\t\twidth: auto !important;\n\t\t\t\tfloat: none !important;\n\t\t\t\tpadding: 0 !important;\n\t\t\t\tmargin: 0 !important;\n\t\t\t}\n\n\t\t\t.zcwf_formVisibleFields_row .zcwf_col_fld input {\n\t\t\t\twidth: 100% !important;\n\t\t\t\tborder: 1px #EEEEEE solid !important;\n\t\t\t\tcolor: #fff !important;\n\t\t\t\tmax-width: 280px !important;\n\t\t\t\tmin-height: 50px !important;\n\t\t\t\tborder-radius: 10px !important;\n\t\t\t}\n\n\t\t\t#crmWebToEntityForm.zcwf_lblLeft * {\n\t\t\t\tbox-sizing: border-box;\n\t\t\t}\n\n\t\t\t#crmWebToEntityForm {\n\t\t\t\ttext-align: left;\n\t\t\t}\n\n\t\t\t#crmWebToEntityForm * {\n\t\t\t\tdirection: ltr;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_title {\n\t\t\t\tword-wrap: break-word;\n\t\t\t\tmargin-bottom: 12px;\n\t\t\t\tcolor: #fff !important;\n\n\t\t\t\tfont-weight: 500 !important;\n\t\t\t\tfont-size: 36px !important;\n\t\t\t\tline-height: 120% !important;\n\t\t\t\tletter-spacing: -0.5px !important;\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\n\t\t\t.zcwf_subtitle {\n\n\t\t\t\tfont-weight: 400 !important;\n\t\t\t\tfont-size: 16px !important;\n\t\t\t\tline-height: 140% !important;\n\t\t\t\tletter-spacing: 0% !important;\n\t\t\t\tcolor: rgba(255, 255, 255, 0.9) !important;\n\t\t\t\tmax-width: 500px;\n\t\t\t\tmargin-bottom: 32px;\n\t\t\t}\n\n\t\t\t.zcwf_form_row {\n\t\t\t\tdisplay: flex !important;\n\t\t\t\tgap: 16px !important;\n\t\t\t\tflex-wrap: wrap !important;\n\t\t\t\tmargin: 0 !important;\n\t\t\t\tmax-width: 520px !important;\n\t\t\t}\n\n\t\t\t.zcwf_input_group {\n\t\t\t\tflex: 1;\n\t\t\t\t/* min-width: 220px; */\n\t\t\t\twidth: auto !important;\n\t\t\t\tfloat: none !important;\n\t\t\t\tpadding: 0 !important;\n\t\t\t\tmargin: 0 !important;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft.cpT_primaryBtn:hover {\n\t\t\t\tbackground: linear-gradient(#02acff 0, #006be4 100%)no-repeat padding-box !important;\n\t\t\t\tbox-shadow: 0 -2px 0 0 #0159b9 inset !important;\n\t\t\t\tborder: 0 !important;\n\t\t\t\tcolor: #fff !important;\n\t\t\t\toutline: 0 !important;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_col_fld input[type=text],\n\t\t\tinput[type=password],\n\t\t\t.zcwf_lblLeft .zcwf_col_fld textarea {\n\t\t\t\twidth: 100%;\n\t\t\t\tborder: 1px solid rgba(255, 255, 255, 0.3) !important;\n\t\t\t\tresize: vertical;\n\t\t\t\tborder-radius: 8px;\n\t\t\t\tfloat: none;\n\t\t\t\tpadding: 12px 16px !important;\n\t\t\t\tbackground-color: rgba(255, 255, 255, 0.95) !important;\n\t\t\t\tcolor: #333 !important;\n\t\t\t\tfont-size: 14px !important;\n\n\t\t\t\ttransition: all 0.3s ease;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_col_fld input[type=text]:focus {\n\t\t\t\tborder-color: #fff;\n\t\t\t\tbox-shadow: 0 0 0 3px rgba(255, 255, 255, 0.35);\n\t\t\t}\n\n\n\t\t\t/* ===========================\n\t\t\tSELECT DROPDOWN\n\t\t\t=========================== */\n\t\t\t.zcwf_lblLeft select.zcwf_col_fld_slt {\n\t\t\t\twidth: 100% !important;\n\t\t\t\tpadding: 12px 16px;\n\t\t\t\tbackground: rgba(255, 255, 255, 0.95);\n\t\t\t\tborder-radius: 8px;\n\t\t\t\tborder: 1px solid rgba(255, 255, 255, 0.4);\n\t\t\t\tfont-size: 15px;\n\n\t\t\t\tcolor: #222;\n\t\t\t\tappearance: none;\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransition: all .25s ease;\n\t\t\t\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='black' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 7L10 12L15 7' stroke='black' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\");\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-position: right 12px center;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft select.zcwf_col_fld_slt:focus {\n\t\t\t\tborder-color: #fff;\n\t\t\t\tbox-shadow: 0 0 0 3px rgba(255, 255, 255, 0.35);\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_col_lab {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_col_fld {\n\t\t\t\tfloat: none;\n\t\t\t\twidth: auto;\n\t\t\t\tpadding: 0px;\n\t\t\t\tposition: relative;\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_privacy {\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .wfrm_fld_dpNn {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.dIB {\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_col_fld_slt {\n\t\t\t\twidth: 60%;\n\t\t\t\tborder: 1px solid #ccc;\n\t\t\t\tbackground: #fff;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfloat: left;\n\t\t\t\tresize: vertical;\n\t\t\t\tpadding: 2px 5px;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_row:after,\n\t\t\t.zcwf_lblLeft .zcwf_col_fld:after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: table;\n\t\t\t\tclear: both;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_col_help {\n\t\t\t\tfloat: left;\n\t\t\t\tmargin-left: 7px;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tmax-width: 35%;\n\t\t\t\tword-break: break-word;\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_help_icon {\n\t\t\t\tcursor: pointer;\n\t\t\t\twidth: 16px;\n\t\t\t\theight: 16px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tbackground: #fff;\n\t\t\t\tborder: 1px solid #c0c6cc;\n\t\t\t\tcolor: #c1c1c1;\n\t\t\t\ttext-align: center;\n\t\t\t\tfont-size: 11px;\n\t\t\t\tline-height: 16px;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tborder-radius: 50%;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_row {\n\t\t\t\tmargin: 15px 0px;\n\t\t\t}\n\n\t\t\t.zcwf_row {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .formsubmit {\n\t\t\t\tmargin-right: 0;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_privacy_txt {\n\t\t\t\twidth: 90%;\n\t\t\t\tcolor: rgb(0, 0, 0);\n\t\t\t\tfont-size: 12px;\n\t\t\t\tfont-family: Arial;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tvertical-align: top;\n\t\t\t\tcolor: #313949;\n\t\t\t\tpadding-top: 2px;\n\t\t\t\tmargin-left: 6px;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_button {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tcolor: #313949;\n\t\t\t\tborder: 1px solid #c0c6cc;\n\t\t\t\tpadding: 3px 9px;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tmax-width: 120px;\n\t\t\t\toverflow: hidden;\n\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\twhite-space: nowrap;\n\t\t\t}\n\n\t\t\t.zcwf_button_row {\n\t\t\t\tdisplay: flex !important;\n\t\t\t\tgap: 12px !important;\n\t\t\t\talign-items: center !important;\n\t\t\t\tmargin: 20px 0px 0px 0px !important;\n\t\t\t}\n\n\t\t\t.zcwf_benefits {\n\t\t\t\tfont-size: 12px;\n\t\t\t\tcolor: rgba(255, 255, 255, 0.6);\n\t\t\t\tline-height: 1.6;\n\n\t\t\t\tmargin-top: 20px;\n\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 13px;\n\t\t\t\tline-height: 28px;\n\t\t\t\tletter-spacing: 0%;\n\t\t\t\tvertical-align: middle;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_tooltip_over {\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_tooltip_ctn {\n\t\t\t\tposition: absolute;\n\t\t\t\tbackground: #dedede;\n\t\t\t\tpadding: 3px 6px;\n\t\t\t\ttop: 3px;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tword-break: break-word;\n\t\t\t\tmin-width: 100px;\n\t\t\t\tmax-width: 150px;\n\t\t\t\tcolor: #313949;\n\t\t\t\tz-index: 100;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_ckbox {\n\t\t\t\tfloat: left;\n\t\t\t}\n\n\t\t\t.zcwf_lblLeft .zcwf_file {\n\t\t\t\twidth: 55%;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tfloat: left;\n\t\t\t}\n\n\t\t\t.cBoth:after {\n\t\t\t\tcontent: '';\n\t\t\t\tdisplay: block;\n\t\t\t\tclear: both;\n\t\t\t}\n\n\n\t\t\t/* ===========================\n\t\t\tBUTTON GROUP\n\t\t\t=========================== */\n\t\t\t.zcwf_button_row,\n\t\t\t.zcwf_lblLeft .zcwf_col_fld {\n\t\t\t\tdisplay: flex;\n\t\t\t\tgap: 12px;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.formsubmit.zcwf_button {\n\t\t\t\tcolor: #fff !important;\n\t\t\t\tbackground: transparent !important;\n\t\t\t\tborder: 1px solid white !important;\n\t\t\t\tpadding: 12px 28px !important;\n\t\t\t\tborder-radius: 50px !important;\n\t\t\t\tcursor: pointer !important;\n\t\t\t\ttransition: all 0.3s ease !important;\n\n\t\t\t\toverflow: visible;\n\t\t\t\ttext-overflow: unset;\n\n\t\t\t\tfont-weight: 500 !important;\n\t\t\t\tfont-size: 18px !important;\n\t\t\t\tline-height: 28px !important;\n\t\t\t\tletter-spacing: 0% !important;\n\t\t\t\ttext-align: center;\n\t\t\t\tvertical-align: middle;\n\t\t\t\tmin-width: 200px !important\n\t\t\t}\n\n\t\t\t.formsubmit.zcwf_button:hover {\n\t\t\t\tbackground: rgba(255, 255, 255, 0.15) !important;\n\t\t\t\ttransform: translateY(-2px);\n\t\t\t}\n\n\t\t\t.formsubmit.zcwf_button:active {\n\t\t\t\ttransform: translateY(0);\n\t\t\t}\n\n\t\t\t.formsubmit.zcwf_button:disabled {\n\t\t\t\topacity: 0.6;\n\t\t\t\tcursor: not-allowed;\n\t\t\t}\n\n\t\t\t/* Reset Button */\n\t\t\t.zcwf_button {\n\t\t\t\tbackground: transparent !important;\n\t\t\t\tcolor: white !important;\n\t\t\t\tborder: 1px solid rgba(255, 255, 255, 0.4) !important;\n\t\t\t\tpadding: 12px 28px !important;\n\t\t\t\tfont-size: 18px !important;\n\t\t\t\tfont-weight: 400 !important;\n\t\t\t\tline-height: 28px !important;\n\t\t\t\tletter-spacing: 0% !important;\n\t\t\t\tborder-radius: 50px !important;\n\n\t\t\t\tcursor: pointer;\n\t\t\t\ttransition: all .25s ease;\n\t\t\t}\n\n\t\t\t.zcwf_button:hover {\n\t\t\t\tbackground: rgba(255, 255, 255, 0.28) !important;\n\t\t\t\ttransform: translateY(-2px);\n\t\t\t\tfont-weight: 500 !important;\n\n\t\t\t}\n\n\t\t\t#crmWebToEntityForm.zcwf_lblLeft input::placeholder {\n\n\t\t\t\tfont-weight: 400 !important;\n\t\t\t\tfont-size: 18px !important;\n\t\t\t\tline-height: 140% !important;\n\t\t\t\tletter-spacing: 0% !important;\n\t\t\t\tcolor: #C8C1C1;\n\t\t\t}\n\n\n\t\t\t@media all and (max-width: 600px) {\n\n\t\t\t\t.zcwf_lblLeft .zcwf_col_lab,\n\t\t\t\t.zcwf_lblLeft .zcwf_col_fld {\n\t\t\t\t\twidth: auto;\n\t\t\t\t\tfloat: none !important;\n\t\t\t\t}\n\n\t\t\t\t.zcwf_lblLeft .zcwf_col_help {\n\t\t\t\t\twidth: 40%;\n\t\t\t\t}\n\n\t\t\t\t#crmWebToEntityForm.zcwf_lblLeft {\n\t\t\t\t\tpadding: 40px 24px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t/* ==============================\n\t\t\tRESPONSIVE FIXES (SAFE)\n\t\t\t================================= */\n\n\t\t\t@media (max-width: 1024px) {\n\t\t\t\t#crmWebToEntityForm.zcwf_lblLeft {\n\t\t\t\t\tbackground-size: 55% auto !important;\n\t\t\t\t\tpadding: 48px 40px !important;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (max-width: 768px) {\n\n\t\t\t\t#crmWebToEntityForm.zcwf_lblLeft {\n\t\t\t\t\tpadding: 40px 28px !important;\n\t\t\t\t\tbackground-position: center bottom !important;\n\t\t\t\t\tbackground-size: 80% !important;\n\t\t\t\t\tbackground-image: none !important;\n\t\t\t\t\tmargin: 20px auto !important; /* Center with margin */\n\t\t\t\t\twidth: 90% !important; /* Ensure white space around */\n\t\t\t\t}\n\n\t\t\t\t.zcwf_title {\n\t\t\t\t\tfont-size: 26px !important;\n\t\t\t\t}\n\n\t\t\t\t.zcwf_subtitle {\n\t\t\t\t\tfont-size: 14px !important;\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t}\n\n\t\t\t\t.zcwf_row {\n\t\t\t\t\tflex-direction: column !important;\n\t\t\t\t\tgap: 12px !important;\n\t\t\t\t}\n\n\t\t\t\t.zcwf_col_fld,\n\t\t\t\t.zcwf_col_lab {\n\t\t\t\t\twidth: 100% !important;\n\t\t\t\t}\n\n\t\t\t\t#crmWebToEntityForm.zcwf_lblLeft input,\n\t\t\t\t#crmWebToEntityForm.zcwf_lblLeft select {\n\t\t\t\t\tfont-size: 16px !important;\n\t\t\t\t\tpadding: 12px 24px 12px 16px !important; /* Added right padding */\n\t\t\t\t}\n\n\t\t\t\t#crmWebToEntityForm.zcwf_lblLeft input::placeholder {\n\t\t\t\t\tfont-size: 16px !important;\n\t\t\t\t}\n\n\t\t\t\t.button_wrapper {\n\t\t\t\t\tflex-direction: row !important;\n\t\t\t\t\talign-items: stretch !important;\n\t\t\t\t}\n\n\t\t\t\t.captcha_wrapper {\n\t\t\t\t\tdisplay: block !important;\n\t\t\t\t}\n\n\t\t\t\t.formsubmit.zcwf_button,\n\t\t\t\t.zcwf_button {\n\t\t\t\t\twidth: 100% !important;\n\t\t\t\t\ttext-align: center !important;\n\t\t\t\t}\n\n\t\t\t\t.g-recaptcha_div_wrapper {\n\t\t\t\t\tdisplay: block !important;\n\t\t\t\t}\n\n\t\t\t\t.zohoCTAImage {\n\t\t\t\t\tdisplay: none !important;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media (max-width: 480px) {\n\n\t\t\t\t#crmWebToEntityForm.zcwf_lblLeft {\n\t\t\t\t\tpadding: 40px 30px !important; /* Increased padding */\n\t\t\t\t\tbackground-size: 100% !important;\n\t\t\t\t\twidth: 90% !important; /* Explicit width */\n\t\t\t\t\tmargin: 20px auto !important; /* Explicit margin */\n\t\t\t\t}\n\n\t\t\t\t.zcwf_title {\n\t\t\t\t\tfont-size: 22px !important;\n\t\t\t\t}\n\n\t\t\t\t.zcwf_subtitle {\n\t\t\t\t\tfont-size: 13px !important;\n\t\t\t\t}\n\n\t\t\t\t.zcwf_benefits {\n\t\t\t\t\tfont-size: 11px !important;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t\t<div class=\"zcwf_title\">The Smarter Way to Learn STEM</div>\n\t\t<div class=\"zcwf_subtitle\">Try Jove Coach free for 7 days and experience AI-powered clarity for yourself.</div>\n\t\t<div class='zcwf_row zcwf_formVisibleFields_row'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='Last_Name'>Name\n\t\t\t\t\t<span style='color:red;'>*</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='Last_Name' aria-required='true' aria-label='Last Name' name='Last Name'\n\t\t\t\t\taria-valuemax='80' maxlength='80' placeholder=\"Name*\" required>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='Email'>Email\n\t\t\t\t\t<span style='color:red;'>*</span>\n\t\t\t\t</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' data-ftype='email' autocomplete='false' id='Email' aria-required='true' aria-label='Email'\n\t\t\t\t\tname='Email' aria-valuemax='100' data-crmlabel='' maxlength='100' placeholder=\"Email*\" required>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF11'>Landing Page URL</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF11' aria-required='false' aria-label='CONTACTCF11' name='CONTACTCF11'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='https&#x3a;&#x2f;&#x2f;'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF14'>Referrer URL</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF14' aria-required='false' aria-label='CONTACTCF14' name='CONTACTCF14'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value=''>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF20'>UTM Source</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF20' aria-required='false' aria-label='CONTACTCF20' name='CONTACTCF20'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF21'>UTM Term</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF21' aria-required='false' aria-label='CONTACTCF21' name='CONTACTCF21'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF18'>UTM Content</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF18' aria-required='false' aria-label='CONTACTCF18' name='CONTACTCF18'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF19'>UTM Medium</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF19' aria-required='false' aria-label='CONTACTCF19' name='CONTACTCF19'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF17'>UTM Campaign</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF17' aria-required='false' aria-label='CONTACTCF17' name='CONTACTCF17'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF4'>Ad ID</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF4' aria-required='false' aria-label='CONTACTCF4' name='CONTACTCF4'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF7'>Ad Set ID</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF7' aria-required='false' aria-label='CONTACTCF7' name='CONTACTCF7'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF5'>Ad Name</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF5' aria-required='false' aria-label='CONTACTCF5' name='CONTACTCF5'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='&quot;'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF6'>Ad Platform</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox'\n\t\t\t\t\tid='CONTACTCF6' onChange='addAriaSelected1127844000000480553()' aria-required='false'\n\t\t\t\t\taria-label='CONTACTCF6' name='CONTACTCF6'>\n\t\t\t\t\t<option value='-None-'>-None-</option>\n\t\t\t\t\t<option selected value='Google'>Google</option>\n\t\t\t\t\t<option value='Meta'>Meta</option>\n\t\t\t\t\t<option value='TikTok'>TikTok</option>\n\t\t\t\t\t<option value='Reddit'>Reddit</option>\n\t\t\t\t</select>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF1'>Ad Campaign ID</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF1' aria-required='false' aria-label='CONTACTCF1' name='CONTACTCF1'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF3'>Ad Group Name</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF3' aria-required='false' aria-label='CONTACTCF3' name='CONTACTCF3'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF2'>Ad Group ID</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF2' aria-required='false' aria-label='CONTACTCF2' name='CONTACTCF2'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF30'>Ad Campaign Name</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<input type='text' id='CONTACTCF30' aria-required='false' aria-label='CONTACTCF30' name='CONTACTCF30'\n\t\t\t\t\taria-valuemax='255' maxlength='255' value='-'>\n\t\t\t\t</input>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF15'>Source</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox'\n\t\t\t\t\tid='CONTACTCF15' onChange='addAriaSelected1127844000000480553()' aria-required='false'\n\t\t\t\t\taria-label='CONTACTCF15' name='CONTACTCF15'>\n\t\t\t\t\t<option value='-None-'>-None-</option>\n\t\t\t\t\t<option value='Organic'>Organic</option>\n\t\t\t\t\t<option selected value='Paid'>Paid</option>\n\t\t\t\t\t<option value='Social'>Social</option>\n\t\t\t\t</select>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF28'>Record Type</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox'\n\t\t\t\t\tid='CONTACTCF28' onChange='addAriaSelected1127844000000480553()' aria-required='false'\n\t\t\t\t\taria-label='CONTACTCF28' name='CONTACTCF28'>\n\t\t\t\t\t<option value='-None-'>-None-</option>\n\t\t\t\t\t<option selected value='Lead'>Lead</option>\n\t\t\t\t\t<option value='Customer'>Customer</option>\n\t\t\t\t</select>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row wfrm_fld_dpNn'>\n\t\t\t<div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'>\n\t\t\t\t<label for='CONTACTCF16'>Subsource</label>\n\t\t\t</div>\n\t\t\t<div class='zcwf_col_fld'>\n\t\t\t\t<select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox'\n\t\t\t\t\tid='CONTACTCF16' onChange='addAriaSelected1127844000000480553()' aria-required='false'\n\t\t\t\t\taria-label='CONTACTCF16' name='CONTACTCF16'>\n\t\t\t\t\t<option value='-None-'>-None-</option>\n\t\t\t\t\t<option value='SEO'>SEO</option>\n\t\t\t\t\t<option value='Blog'>Blog</option>\n\t\t\t\t\t<option value='Direct'>Direct</option>\n\t\t\t\t\t<option value='Google&#x20;Ads'>Google Ads</option>\n\t\t\t\t\t<option value='Meta&#x20;Ads'>Meta Ads</option>\n\t\t\t\t\t<option value='Reddit&#x20;Ads'>Reddit Ads</option>\n\t\t\t\t\t<option value='Tiktok&#x20;Ads'>Tiktok Ads</option>\n\t\t\t\t\t<option value='Other&#x20;Paid'>Other Paid</option>\n\t\t\t\t\t<option value='Instagram'>Instagram</option>\n\t\t\t\t\t<option value='Facebook'>Facebook</option>\n\t\t\t\t\t<option value='LinkedIn'>LinkedIn</option>\n\t\t\t\t\t<option value='Twitter&#x2f;X'>Twitter&#x2f;X</option>\n\t\t\t\t\t<option value='YouTube'>YouTube</option>\n\t\t\t\t\t<option value='Other&#x20;Socials'>Other Socials</option>\n\t\t\t\t\t<option selected value='Direc'>Direc</option>\n\t\t\t\t</select>\n\t\t\t\t<div class='zcwf_col_help'>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='zcwf_row'>\n\t\t\t<div class='zcwf_col_lab'></div>\n\t\t\t<div class='zcwf_col_fld'>\n\n\t\t\t\t\n\t\t\t\t<div class='button_wrapper'>\n\t\t\t\t\t<input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Get Started Free' title='Submit'>\n\t\t\t\t\t<input type='reset' class='zcwf_button' name='reset' value='Reset' title='Reset' style=\"display: none;\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"zcwf_benefits\">\n\t\t\t<span>• No credit card required • No commitment • Cancel anytime</span>\n\t\t</div>\n\t\t<div class=\"image-container\">\n\t\t\t<img src=\"/zohoCTAImage.webp\"\n\t\t\t\talt=\"Jove Coach Free Trial Illustration\" \n\t\t\t\tclass=\"zohoCTAImage\"\n\t\t\t/>\n\t\t</div>\n\t\t<!-- Invisible reCAPTCHA (Global) -->\n\t\t<!-- No local widget needed -->\n\n\t\t<script>\n\t\t\t// Callback function executed when reCAPTCHA is solved (or invisible check passes)\n\t\t\tfunction onCaptchaSuccess(token) {\n\t\t\t\tconsole.log(\"Captcha validated. Submitting form...\");\n\t\t\t\tconst form = document.forms['WebToContacts1127844000000480553'];\n\t\t\t\t\n\t\t\t\t// Dynamic Return URL Logic (ensure it's set before final submit)\n\t\t\t\tconst nameVal = document.getElementById('Last_Name').value;\n\t\t\t\tconst emailVal = document.getElementById('Email').value;\n\t\t\t\tconst returnUrlInput = form['returnURL'];\n\t\t\t\t\n\t\t\t\tif (returnUrlInput) {\n\t\t\t\t\tconst baseUrl = 'https://coach.jove.com/signup';\n\t\t\t\t\tconst redirectUrl = new URL(baseUrl);\n\t\t\t\t\tredirectUrl.searchParams.set('name', nameVal);\n\t\t\t\t\tredirectUrl.searchParams.set('email', emailVal);\n\t\t\t\t\treturnUrlInput.value = redirectUrl.toString();\n\t\t\t\t}\n\n\t\t\t\t// Submit the form programmatically, bypassing the onsubmit handler to avoid loop\n\t\t\t\t// We use HTMLFormElement.prototype.submit.call(form) to be safe if there's an input named 'submit'\n\t\t\t\tHTMLFormElement.prototype.submit.call(form);\n\t\t\t}\n\n\t\t\tfunction validateEmail2127844000000480553() {\n\t\tvar form = document.forms[\"WebToContacts2127844000000480553\"];\n\t\tvar emailFld = form.querySelectorAll(\"[data-ftype=email]\");\n\t\tvar i;\n\t\tfor (i = 0; i < emailFld.length; i++) {\n\t\t\t\t\tvar emailVal = emailFld[i].value;\n\t\t\t\t\tif ((emailVal.replace(/^\\s+|\\s+$/g, '')).length != 0) {\n\t\t\t\t\t\tvar atpos = emailVal.indexOf('@');\n\t\t\t\t\t\tvar dotpos = emailVal.lastIndexOf('.');\n\t\t\t\t\t\tif (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {\n\t\t\t\t\t\t\talert('Please enter a valid email address. ');\n\t\t\t\t\t\t\temailFld[i].focus();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn true;\n\t\t\t}\n\n\t\t\tfunction checkMandatory1127844000000480553() {\n\t\t\t\tvar mndFileds = new Array('Last Name', 'Email');\n\t\t\t\tvar fldLangVal = new Array('Name', 'Email');\n\t\t\t\tfor (i = 0; i < mndFileds.length; i++) {\n\t\t\t\t\tvar fieldObj = document.forms['WebToContacts1127844000000480553'][mndFileds[i]];\n\t\t\t\t\tif (fieldObj) {\n\t\t\t\t\t\tif (((fieldObj.value).replace(/^\\s+|\\s+$/g, '')).length == 0) {\n\t\t\t\t\t\t\tif (fieldObj.type == 'file') {\n\t\t\t\t\t\t\t\talert('Please select a file to upload.');\n\t\t\t\t\t\t\t\tfieldObj.focus();\n\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\talert(fldLangVal[i] + ' cannot be empty.');\n\t\t\t\t\t\t\tfieldObj.focus();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t} else if (fieldObj.nodeName == 'SELECT') {\n\t\t\t\t\t\t\tif (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {\n\t\t\t\t\t\t\t\talert(fldLangVal[i] + ' cannot be none.');\n\t\t\t\t\t\t\t\tfieldObj.focus();\n\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} else if (fieldObj.type == 'checkbox') {\n\t\t\t\t\t\t\tif (fieldObj.checked == false) {\n\t\t\t\t\t\t\t\talert('Please accept  ' + fldLangVal[i]);\n\t\t\t\t\t\t\t\tfieldObj.focus();\n\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\tif (fieldObj.name == 'Last Name') {\n\t\t\t\t\t\t\t\tname = fieldObj.value;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t} catch (e) { }\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (!validateEmail1127844000000480553()) { return false; }\n\t\t\t\t\n\t\t\t\t// Validation passed. Now execute Global reCAPTCHA.\n\t\t\t\tif (typeof window.executeGlobalRecaptcha === 'function') {\n\t\t\t\t\twindow.executeGlobalRecaptcha(onCaptchaSuccess);\n\t\t\t\t} else {\n\t\t\t\t\tconsole.error(\"Global reCAPTCHA function not found.\");\n\t\t\t\t\talert(\"Please wait for reCAPTCHA to load.\");\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t// Return false to stop the immediate form submission.\n\t\t\t\t// The form will be submitted by onCaptchaSuccess.\n\t\t\t\treturn false;\n\t\t\t}\n\n\t\t\tfunction tooltipShow1127844000000480553(el) {\n\t\t\t\tvar tooltip = el.nextElementSibling;\n\t\t\t\tvar tooltipDisplay = tooltip.style.display;\n\t\t\t\tif (tooltipDisplay == 'none') {\n\t\t\t\t\tvar allTooltip = document.getElementsByClassName('zcwf_tooltip_over');\n\t\t\t\t\tfor (i = 0; i < allTooltip.length; i++) {\n\t\t\t\t\t\tallTooltip[i].style.display = 'none';\n\t\t\t\t\t}\n\t\t\t\t\ttooltip.style.display = 'block';\n\t\t\t\t} else {\n\t\t\t\t\ttooltip.style.display = 'none';\n\t\t\t\t}\n\t\t\t}\n\t\t\t\n\t\t\tfunction addAriaSelected1127844000000480553() {\n\t\t\t\tvar selectElements = document.querySelectorAll('select.zcwf_col_fld_slt');\n\t\t\t\tselectElements.forEach(function (select) {\n\t\t\t\t\tselect.setAttribute('aria-selected', 'true');\n\t\t\t\t});\n\t\t\t}\n\n\t\t\t// Populate hidden fields on load\n\t\t\twindow.addEventListener('DOMContentLoaded', (event) => {\n\t\t\t\tconst form = document.forms['WebToContacts1127844000000480553'];\n\t\t\t\tconst params = new URLSearchParams(window.location.search);\n\t\t\t\t\n\t\t\t\t// Helper to get param\n\t\t\t\tconst getParam = (key) => params.get(key) || '';\n\n\t\t\t\tconst utmSource = getParam('utm_source');\n\t\t\t\tconst utmMedium = getParam('utm_medium');\n\t\t\t\tconst utmCampaign = getParam('utm_campaign');\n\t\t\t\tconst utmTerm = getParam('utm_term');\n\t\t\t\tconst utmContent = getParam('utm_content');\n\t\t\t\t\n\t\t\t\tconst adId = getParam('ad_id');\n\t\t\t\tconst adGroupId = getParam('ad_group_id');\n\t\t\t\tconst adGroupName = getParam('ad_group_name');\n\t\t\t\tconst adCampaignId = getParam('ad_campaign_id');\n\t\t\t\tconst adCampaignName = getParam('ad_campaign_name') || getParam('campaign_name'); // Support both\n\t\t\t\tconst adName = getParam('ad_name');\n\t\t\t\tconst adPlatform = getParam('ad_platform');\n\t\t\t\t\n\t\t\t\tlet adSetId = getParam('ad_set_id');\n\t\t\t\tif (!adSetId) adSetId = getParam('adset_id');\n\n\t\t\t\tconst gclid = getParam('gclid');\n\t\t\t\tconst sources = params.getAll('source'); // Capture all source params\n\t\t\t\tconst referrerUrlParam = getParam('referrer_url') || getParam('referrer') || getParam('ref');\n\t\t\t\t// Map to Zoho CRM fields\n\t\t\t\tif (utmSource && form['CONTACTCF20']) form['CONTACTCF20'].value = utmSource;\n\t\t\t\tif (utmMedium && form['CONTACTCF19']) form['CONTACTCF19'].value = utmMedium;\n\t\t\t\tif (utmCampaign && form['CONTACTCF17']) form['CONTACTCF17'].value = utmCampaign;\n\t\t\t\tif (utmTerm && form['CONTACTCF21']) form['CONTACTCF21'].value = utmTerm;\n\t\t\t\tif (utmContent && form['CONTACTCF18']) form['CONTACTCF18'].value = utmContent;\n\t\t\t\t\n\t\t\t\tif (adId && form['CONTACTCF4']) form['CONTACTCF4'].value = adId;\n\t\t\t\tif (adGroupId && form['CONTACTCF2']) form['CONTACTCF2'].value = adGroupId;\n\t\t\t\tif (adGroupName && form['CONTACTCF3']) form['CONTACTCF3'].value = adGroupName;\n\t\t\t\tif (adCampaignId && form['CONTACTCF1']) form['CONTACTCF1'].value = adCampaignId;\n\t\t\t\tif (adName && form['CONTACTCF5']) form['CONTACTCF5'].value = adName;\n\t\t\t\tif (adCampaignName && form['CONTACTCF30']) form['CONTACTCF30'].value = adCampaignName;\n\t\t\t\t\n\t\t\t\tif (adSetId && form['CONTACTCF7']) {\n\t\t\t\t\tconsole.log(\"Captured ad_set_id:\", adSetId);\n\t\t\t\t\tform['CONTACTCF7'].value = adSetId;\n\t\t\t\t}\n\n\t\t\t\t// Handle Dropdowns\n\t\t\t\tconst subsourceSelect = form['CONTACTCF16']; // Subsource\n\t\t\t\tconst sourceSelect = form['CONTACTCF15']; // Source\n\t\t\t\tconst platformSelect = form['CONTACTCF6']; // Ad Platform\n\n\t\t\t\t// 1. Ad Platform\n\t\t\t\tif (adPlatform && platformSelect) {\n\t\t\t\t\tconst options = Array.from(platformSelect.options).map(o => o.value);\n\t\t\t\t\tif (options.includes(adPlatform)) {\n\t\t\t\t\t\tplatformSelect.value = adPlatform;\n\t\t\t\t\t} else if (adPlatform.toLowerCase() === 'google') {\n\t\t\t\t\t\tplatformSelect.value = 'Google';\n\t\t\t\t\t} else if (adPlatform.toLowerCase() === 'meta' || adPlatform.toLowerCase() === 'facebook') {\n\t\t\t\t\t\tplatformSelect.value = 'Meta';\n\t\t\t\t\t}\n\t\t\t\t} else if (gclid && platformSelect) {\n\t\t\t\t\tplatformSelect.value = 'Google';\n\t\t\t\t}\n\n\t\t\t\t// 2. Source (Paid, Organic, Social)\n\t\t\t\tif (sourceSelect) {\n\t\t\t\t\tif (sources.some(s => s.toLowerCase() === 'paid') || gclid || adId) {\n\t\t\t\t\t\tsourceSelect.value = 'Paid';\n\t\t\t\t\t} else if (sources.some(s => s.toLowerCase() === 'organic')) {\n\t\t\t\t\t\tsourceSelect.value = 'Organic';\n\t\t\t\t\t} else if (sources.some(s => s.toLowerCase() === 'social')) {\n\t\t\t\t\t\tsourceSelect.value = 'Social';\n\t\t\t\t\t} else if (utmMedium && (utmMedium.toLowerCase().includes('cpc') || utmMedium.toLowerCase().includes('paid'))) {\n\t\t\t\t\t\tsourceSelect.value = 'Paid';\n\t\t\t\t\t} else {\n\t\t\t\t\t\tsourceSelect.value = 'Organic'; // Default\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t// 3. Subsource\n\t\t\t\tif (subsourceSelect) {\n\t\t\t\t\tlet subsourceValue = '';\n\t\t\t\t\tconst subsourceOptions = Array.from(subsourceSelect.options).map(o => o.value);\n\t\t\t\t\t\n\t\t\t\t\t// Check 'source' params\n\t\t\t\t\tfor (const s of sources) {\n\t\t\t\t\t\tif (s.toLowerCase() === 'google') subsourceValue = 'Google Ads';\n\t\t\t\t\t\telse if (s.toLowerCase() === 'facebook' || s.toLowerCase() === 'meta') subsourceValue = 'Meta Ads';\n\t\t\t\t\t\telse if (s.toLowerCase() === 'linkedin') subsourceValue = 'LinkedIn';\n\t\t\t\t\t}\n\n\t\t\t\t\t// Check utm_source\n\t\t\t\t\tif (!subsourceValue && utmSource) {\n\t\t\t\t\t\tif (utmSource.toLowerCase().includes('google')) subsourceValue = 'Google Ads';\n\t\t\t\t\t\telse if (utmSource.toLowerCase().includes('facebook') || utmSource.toLowerCase().includes('meta')) subsourceValue = 'Meta Ads';\n\t\t\t\t\t\telse if (utmSource.toLowerCase().includes('linkedin')) subsourceValue = 'LinkedIn';\n\t\t\t\t\t\telse if (subsourceOptions.includes(utmSource)) subsourceValue = utmSource;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (!subsourceValue && gclid) {\n\t\t\t\t\t\tsubsourceValue = 'Google Ads';\n\t\t\t\t\t}\n\n\t\t\t\t\tif (subsourceValue) {\n\t\t\t\t\t\tsubsourceSelect.value = subsourceValue;\n\t\t\t\t\t} else if (!subsourceValue && !utmSource && !gclid) {\n\t\t\t\t\t\tsubsourceSelect.value = 'Direct';\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t// Set Landing Page URL\n\t\t\t\tif (form['CONTACTCF11']) form['CONTACTCF11'].value = window.location.href;\n\t\t\t\t\n\t\t\t\t// Set Referrer URL (Prioritize URL param, fallback to document.referrer)\n\t\t\t\tif (form['CONTACTCF14']) {\n\t\t\t\t\tif (referrerUrlParam) {\n\t\t\t\t\t\tform['CONTACTCF14'].value = referrerUrlParam;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tform['CONTACTCF14'].value = document.referrer || \"-\";\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tconsole.log(\"Form populated with params:\", Object.fromEntries(params));\n\t\t\t});\n\t\t</script>\n\t</form>\n</div>";

const $$ZohoForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div>${unescapeHTML(formHtml)}</div>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/zohoForm.astro", void 0);

const STEMstruggleImg1 = new Proxy({"src":"/_astro/STEMstruggleImg1.BrtDU6ob.png","width":470,"height":318,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/STEMstruggleImg1.png";
							}
							
							return target[name];
						}
					});

const STEMstruggleImg2 = new Proxy({"src":"/_astro/STEMstruggleImg2.D8GZptRt.png","width":476,"height":318,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/STEMstruggleImg2.png";
							}
							
							return target[name];
						}
					});

const STEMstruggleImg3 = new Proxy({"src":"/_astro/STEMstruggleImg3.BWSjgRbn.png","width":476,"height":318,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/STEMstruggleImg3.png";
							}
							
							return target[name];
						}
					});

const STEMstruggleImg4 = new Proxy({"src":"/_astro/STEMstruggleImg5.CRbu9q3M.png","width":476,"height":328,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/assets/STEMstruggleImg5.png";
							}
							
							return target[name];
						}
					});

const $$STEMStruggle = createComponent(($$result, $$props, $$slots) => {
  const struggles = [
    {
      icon: STEMstruggleIcon3,
      title: "Lecture fog",
      subtitle: "50 minutes in.",
      description: "Still confused.",
      image: STEMstruggleImg1
    },
    {
      icon: STEMstruggleIcon2,
      title: "Textbook loop",
      subtitle: "Read it three times.",
      description: "Still lost.",
      image: STEMstruggleImg2
    },
    {
      icon: STEMstruggleIcon4,
      title: "YouTube spiral",
      subtitle: "20 minutes in.",
      description: "Still no answer.",
      image: STEMstruggleImg3
    },
    {
      icon: STEMstruggleIcon1,
      title: "Exam panic",
      subtitle: "Exam tomorrow.",
      description: "Still unsure.",
      image: STEMstruggleImg4
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="stem-struggle" data-astro-cid-zaazsmni> ${renderComponent($$result, "TrustedPartnersSection", $$TrustedPartnersSection, { "data-astro-cid-zaazsmni": true })} <div class="container" data-astro-cid-zaazsmni> <h2 class="main-title" data-astro-cid-zaazsmni>
The <span class="highlight" data-astro-cid-zaazsmni>STEM struggle</span> is real.
</h2> <p class="subtitle" data-astro-cid-zaazsmni> Let's be honest - STEM can feel impossible sometimes. Sound familiar? </p> <div class="cards-grid" data-astro-cid-zaazsmni> ${struggles?.map((struggle) => renderTemplate`<div class="struggle-card" data-astro-cid-zaazsmni> <div class="card-text-contents" data-astro-cid-zaazsmni> ${renderComponent($$result, "Image", $$Image, { "class": "card-icon", "src": struggle?.icon, "alt": struggle?.title, "data-astro-cid-zaazsmni": true })} <h3 class="card-title" data-astro-cid-zaazsmni>${struggle?.title}</h3> <p class="card-subtitle" data-astro-cid-zaazsmni>${struggle?.subtitle}</p> <p class="card-description" data-astro-cid-zaazsmni>${struggle?.description}</p> </div> <div class="card-image" data-astro-cid-zaazsmni> ${renderComponent($$result, "Image", $$Image, { "src": struggle?.image, "alt": struggle?.title, "loading": "lazy", "data-astro-cid-zaazsmni": true })} </div> </div>`)} </div> <p class="bottom-text" data-astro-cid-zaazsmni> You're not bad at science. You just needed the right way to learn it... </p> <p class="cta-text" data-astro-cid-zaazsmni>
19 years of JoVE clarity, Trusted by 1 Million+ students,<span data-astro-cid-zaazsmni> now supercharged with</span> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon1, "alt": "AI", "data-astro-cid-zaazsmni": true })} </p> </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/STEMStruggle.astro", void 0);

const $$JoVECoachSteps = createComponent(async ($$result, $$props, $$slots) => {
  const optimizedBg1 = await getImage({ src: JoVECoachStepsBgImage1, format: "webp" });
  const optimizedBg2 = await getImage({ src: JoVECoachStepsBgImage2, format: "webp" });
  const steps = [
    {
      id: "ask",
      icon: aILogo,
      title: "Ask",
      number: "STEP 1",
      headline: "Ask and get unstuck with AI",
      description: "No more scrolling. Just ask - and get the video and insights that crack it.",
      image: Jove_chat_video
    },
    {
      id: "watch",
      icon: videoPlay,
      title: "Watch",
      number: "STEP 2",
      headline: "Learn in minutes, Not hours",
      description: "Watch expert-made videos that actually make sense",
      image: Jove_chat_Image2
    },
    {
      id: "practise",
      icon: notePad,
      title: "Practise",
      number: "STEP 3",
      headline: "Quick quiz to see if it clicks",
      description: "Quick quiz after every video. See where you stand instantly.",
      image: Jove_chat_Image1
    },
    {
      id: "master",
      icon: cupLogo,
      title: "Master",
      number: "STEP 4",
      headline: 'That "I actually get it" feeling-for real',
      description: "Crush one concept. Then the next. Build momentum.",
      image: Jove_chat_Image3
    }
  ];
  const isVideo = (file) => typeof file === "string" && /\.(mp4|webm|ogg|mov|m4v)$/i.test(file);
  return renderTemplate`${maybeRenderHead()}<section class="jove-coach-section"${addAttribute(`--bg-image-1: url(${optimizedBg1.src}); --bg-image-2: url(${optimizedBg2.src});`, "style")} data-astro-cid-7taf3tsj> <div class="scroll-track" data-astro-cid-7taf3tsj> <div class="sticky-wrapper" data-astro-cid-7taf3tsj> <div class="container" data-astro-cid-7taf3tsj> <!-- Header --> <div class="header-content" data-astro-cid-7taf3tsj> <h2 class="main-title" data-astro-cid-7taf3tsj>
JoVE Coach is more than a study tool - <br data-astro-cid-7taf3tsj> <span class="highlight" data-astro-cid-7taf3tsj>
it's
${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon1, "alt": "JoVE Coach", "data-astro-cid-7taf3tsj": true })}
that helps you finally get it.
</span> </h2> <p class="subtitle" data-astro-cid-7taf3tsj> 2-minute videos. AI-backed clarity. Instant practice. </p> <p class="discover-text" data-astro-cid-7taf3tsj>Discover JoVE's 4 steps to Mastery.</p> <!-- Navigation Tabs --> <div class="tabs-container" data-astro-cid-7taf3tsj> ${steps.map((step) => renderTemplate`<button class="tab-button"${addAttribute(step.id, "data-step")}${addAttribute(`View ${step.title} step`, "aria-label")} data-astro-cid-7taf3tsj> ${renderComponent($$result, "Image", $$Image, { "src": step?.icon, "alt": step.title, "class": "tab-icon", "loading": "lazy", "data-astro-cid-7taf3tsj": true })} <span class="tab-title" data-astro-cid-7taf3tsj>${step.title}</span> </button>`)} </div> </div> <!-- Steps Content --> <div class="steps-wrapper" data-astro-cid-7taf3tsj> ${steps.map((step, index) => renderTemplate`<div${addAttribute(`step-content ${index === 0 ? "active" : ""}`, "class")}${addAttribute(step.id, "data-step")} data-astro-cid-7taf3tsj> <div${addAttribute(`content-grid bg-gradient-to-br`, "class")} data-astro-cid-7taf3tsj> <div class="step-visual" data-astro-cid-7taf3tsj> <div class="mockup-container" data-astro-cid-7taf3tsj> ${isVideo(step.image) ? renderTemplate`<video class="mockup-image" autoplay muted loop playsinline preload="metadata" data-astro-cid-7taf3tsj> <source${addAttribute(step.image, "src")} data-astro-cid-7taf3tsj>
Your browser does not support the video tag.
</video>` : renderTemplate`<div class="image-wrapper" data-astro-cid-7taf3tsj> ${renderComponent($$result, "Image", $$Image, { "src": step.image, "alt": step.title, "class": "mockup-image", "inferSize": true, "data-astro-cid-7taf3tsj": true })} </div>`} </div> </div> <div class="step-info" data-astro-cid-7taf3tsj> <span class="step-number" data-astro-cid-7taf3tsj>${step.number}</span> <h3 class="step-headline" data-astro-cid-7taf3tsj>${step.headline}</h3> <p class="step-description" data-astro-cid-7taf3tsj>${step.description}</p> </div> </div> </div>`)} </div> </div> </div> </div> </section> ${renderScript($$result, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/JoVECoachSteps.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/JoVECoachSteps.astro", void 0);

const $$FirstCTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="ai-cta-section" data-astro-cid-77gwxyw5> <div class="ai-cta-card" data-astro-cid-77gwxyw5> <!-- Left content --> <div class="ai-cta-content" data-astro-cid-77gwxyw5> <h3 data-astro-cid-77gwxyw5>Stuck on a concept right now?</h3> <p data-astro-cid-77gwxyw5>See how JoVE Coach explains it clearly - with AI.</p> </div> <!-- Right form --> <div class="ai-cta-form" data-astro-cid-77gwxyw5> ${renderComponent($$result, "ZohoFormEmbed", $$ZohoFormEmbed, { "formIdSuffix": "cta1", "layout": "vertical", "data-astro-cid-77gwxyw5": true })} </div> <!-- Center icon --> <div class="ai-cta-icon" data-astro-cid-77gwxyw5> ${renderComponent($$result, "Image", $$Image, { "src": aiChatIcon, "alt": "AI Chat Icon", "data-astro-cid-77gwxyw5": true })} </div> </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/FirstCTASection.astro", void 0);

const $$SecondCTASection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="ai-cta-section" data-astro-cid-sc4vhb52> <div class="ai-cta-card" data-astro-cid-sc4vhb52> <!-- Left content --> <div class="ai-cta-content" data-astro-cid-sc4vhb52> <h3 data-astro-cid-sc4vhb52>Ready to try the <br data-astro-cid-sc4vhb52> “Ask → Watch → Practice” flow?</h3> <p data-astro-cid-sc4vhb52>Ask a question and see how AI breaks it down in minutes.</p> </div> <!-- Right form --> <div class="ai-cta-form" data-astro-cid-sc4vhb52> ${renderComponent($$result, "ZohoFormEmbed", $$ZohoFormEmbed, { "formIdSuffix": "cta2", "layout": "vertical", "data-astro-cid-sc4vhb52": true })} </div> <!-- Center icon --> <div class="ai-cta-icon" data-astro-cid-sc4vhb52> ${renderComponent($$result, "Image", $$Image, { "src": secondCTAIcon, "alt": "AI Chat Icon", "data-astro-cid-sc4vhb52": true })} </div> </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/SecondCTASection.astro", void 0);

const $$ConceptsSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="concepts-section" data-astro-cid-ecccf3bh> <!-- Heading --> <div class="heading" data-astro-cid-ecccf3bh> <h2 data-astro-cid-ecccf3bh> <span data-astro-cid-ecccf3bh>Every concept you need. </span>Zero fluff.
</h2> <p data-astro-cid-ecccf3bh> One concept at a time, explained with AI-backed clarity. </p> </div> <!-- Feature icons --> <div class="features" data-astro-cid-ecccf3bh> <div class="feature" data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon1, "alt": "AI powered", "data-astro-cid-ecccf3bh": true })} <p data-astro-cid-ecccf3bh>AI-powered Platform</p> </div> <div class="feature" data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon2, "alt": "Curriculum aligned", "data-astro-cid-ecccf3bh": true })} <p data-astro-cid-ecccf3bh>Curriculum-aligned</p> </div> <div class="feature" data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon3, "alt": "Ad free", "data-astro-cid-ecccf3bh": true })} <p data-astro-cid-ecccf3bh>Ad-free learning</p> </div> <div class="feature" data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon4, "alt": "Expert created", "data-astro-cid-ecccf3bh": true })} <p data-astro-cid-ecccf3bh>Expert-created content</p> </div> <div class="feature" data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon5, "alt": "Secure", "data-astro-cid-ecccf3bh": true })} <p data-astro-cid-ecccf3bh>Secure & private</p> </div> </div> <!-- 3D Video --> <div class="video-wrapper" data-astro-cid-ecccf3bh> <video class="concepts-video" autoplay muted loop playsinline data-astro-cid-ecccf3bh> <source${addAttribute(ThreeDImages, "src")} type="video/webm" data-astro-cid-ecccf3bh>
Your browser does not support the video tag.
</video> </div> <!-- Question slider --> <div class="questions-slider" data-astro-cid-ecccf3bh> <div class="questions-track" data-astro-cid-ecccf3bh> <div class="questions" data-astro-cid-ecccf3bh> <!-- First set --> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "AI powered", "data-astro-cid-ecccf3bh": true })}
Why does respiration release energy?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon7, "alt": "Curriculum aligned", "data-astro-cid-ecccf3bh": true })}
How does Newton's third law work?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon9, "alt": "Expert created", "data-astro-cid-ecccf3bh": true })}
Why don't satellites fall to Earth?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Why do enzymes speed up reactions?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon8, "alt": "Ad free", "data-astro-cid-ecccf3bh": true })}
How do catalysts work in chemistry?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
What happens during DNA replication?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon7, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Why does light bend in water or glass?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon9, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
How do chemical reactions reach equilibrium?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Difference between mitosis and meiosis?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon7, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Why don't satellites fall to Earth?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon9, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
What causes an electric current to flow?
</span> <!-- Duplicate set for seamless loop --> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "AI powered", "data-astro-cid-ecccf3bh": true })}
Why does respiration release energy?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon7, "alt": "Curriculum aligned", "data-astro-cid-ecccf3bh": true })}
How does Newton's third law work?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon9, "alt": "Expert created", "data-astro-cid-ecccf3bh": true })}
Why don't satellites fall to Earth?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Why do enzymes speed up reactions?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon8, "alt": "Ad free", "data-astro-cid-ecccf3bh": true })}
How do catalysts work in chemistry?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
What happens during DNA replication?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon7, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Why does light bend in water or glass?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon9, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
How do chemical reactions reach equilibrium?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon10, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Difference between mitosis and meiosis?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon7, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
Why don't satellites fall to Earth?
</span> <span data-astro-cid-ecccf3bh> ${renderComponent($$result, "Image", $$Image, { "src": conceptsSectionIcon9, "alt": "Secure", "data-astro-cid-ecccf3bh": true })}
What causes an electric current to flow?
</span> </div> </div> </div> <!-- CTA --> <div class="cta" data-astro-cid-ecccf3bh> <button onclick="window.openZohoModal && window.openZohoModal()" data-astro-cid-ecccf3bh>Explore More</button> </div> </section>`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/ConceptsSection.astro", void 0);

const $$LearnerPersonas = createComponent(($$result, $$props, $$slots) => {
  const learnerTypes = [
    {
      image: LearnerPersonasImg1,
      title: "Visual learners who learn best by watching",
      description: "Not random videos. Expert explanations that click."
    },
    {
      image: LearnerPersonasImg2,
      title: "Curious minds going beyond the syllabus",
      description: 'Understand the "why" behind the formula.'
    },
    {
      image: LearnerPersonasImg3,
      title: "Mastery seekers, not memorizers",
      description: "You're not here to memorize. You're here to actually get it."
    },
    {
      image: LearnerPersonasImg4,
      title: "High schoolers building strong foundations",
      description: "Get the concepts right now. Ace exams later."
    },
    {
      image: LearnerPersonasImg5,
      title: "Busy students juggling work, sports, and life",
      description: "Self-paced STEM learning that fits their schedule."
    },
    {
      image: LearnerPersonasImg6,
      title: "College freshmen tackling STEM 101s",
      description: "New subjects, fast pace. Master them from day one."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="learner-types-section" data-astro-cid-yadddqbx> <div class="container" data-astro-cid-yadddqbx> <h2 class="title" data-astro-cid-yadddqbx>
From struggling to mastery - <span class="highlight" data-astro-cid-yadddqbx>we've got you.</span> </h2> <p class="subtitle" data-astro-cid-yadddqbx>Every learner is different. JoVE Coach fits them all.</p> <div class="carousel-wrapper" data-astro-cid-yadddqbx> <div class="learner-grid" id="learner-grid" data-astro-cid-yadddqbx> ${learnerTypes.map((learner) => renderTemplate`<div class="learner-card" data-astro-cid-yadddqbx> <div class="image-container" data-astro-cid-yadddqbx> ${renderComponent($$result, "Image", $$Image, { "src": learner.image, "alt": learner.title, "class": "learner-image", "data-astro-cid-yadddqbx": true })} </div> <div class="card-content" data-astro-cid-yadddqbx> <h3 class="card-title" data-astro-cid-yadddqbx>${learner.title}</h3> <p class="card-description" data-astro-cid-yadddqbx>${learner.description}</p> </div> </div>`)} </div> <div class="navigation" data-astro-cid-yadddqbx> <button class="nav-btn prev" id="prev-btn-learner" aria-label="Previous" data-astro-cid-yadddqbx> ${renderComponent($$result, "Image", $$Image, { "src": ArrowRight, "alt": "Previous", "width": 20, "height": 20, "data-astro-cid-yadddqbx": true })} </button> <button class="nav-btn next" id="next-btn-learner" aria-label="Next" data-astro-cid-yadddqbx> ${renderComponent($$result, "Image", $$Image, { "src": ArrowRight, "alt": "Next", "width": 20, "height": 20, "data-astro-cid-yadddqbx": true })} </button> </div> </div> </div> </section> ${renderScript($$result, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/LearnerPersonas.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/LearnerPersonas.astro", void 0);

const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  const pricingPlans = [
    {
      title: "Annual",
      tag: "save 44%",
      price: "$16/month",
      oldPrice: "$29/month",
      buttonText: "Start with Annual - Save 44%",
      featuresListText: [{ listText: "Unlimited access" }, { listText: "One Time payment" }, { listText: "Cancel anytime" }, { listText: "Renews Annually" }]
    },
    {
      title: "Monthly",
      tag: "NA",
      price: "$29 / month",
      oldPrice: "NA",
      buttonText: "Try Monthly Plan",
      featuresListText: [{ listText: "Unlimited access" }, { listText: "Cancel anytime" }, { listText: "Renews Monthly" }]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="pricing-section" data-astro-cid-2qwqouol> <div class="pricing-container" data-astro-cid-2qwqouol> <h2 class="pricing-title" data-astro-cid-2qwqouol>Built for students. <span data-astro-cid-2qwqouol>Priced like it.</span></h2> <p class="pricing-subtitle" data-astro-cid-2qwqouol> ${"Expert videos, AI explanations, and instant quizzes - without the stress (or the heavy price tag)."} </p> <div class="pricing-row ant-row ant-row-center css-vrrzze" data-astro-cid-2qwqouol> ${pricingPlans.length === 0 && renderTemplate`<p style="text-align:center; color:#777;" data-astro-cid-2qwqouol>Pricing details will be updated soon.</p>`} ${pricingPlans.map((plan) => renderTemplate`<div class="pricing-col" data-astro-cid-2qwqouol> ${plan?.tag && plan.tag !== "NA" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": mostPopular, "alt": "Popular", "class": "popular-badge", "data-astro-cid-2qwqouol": true })}`} <div${addAttribute(`pricing-card ${plan?.tag && plan.tag !== "NA" ? "featured-card selected" : "basic-card"}`, "class")}${addAttribute(plan?.title?.toLowerCase() ?? "", "data-card")} data-astro-cid-2qwqouol> <div class="ant-card-body pricing-card-body" data-astro-cid-2qwqouol> <div class="pricing-header" data-astro-cid-2qwqouol> <div class="pricing-label-row" data-astro-cid-2qwqouol> <p class="plan-type" data-astro-cid-2qwqouol>${plan?.title ?? ""}</p> ${plan?.tag && plan.tag !== "NA" && renderTemplate`<span class="discount-tag" data-astro-cid-2qwqouol> ${renderComponent($$result, "Image", $$Image, { "src": priceDiscountIcon, "alt": "", "class": "discount-icon", "data-astro-cid-2qwqouol": true })} <span class="discount-text" data-astro-cid-2qwqouol>${plan.tag}</span> </span>`} </div> <h3 class="price-text" data-astro-cid-2qwqouol>${plan?.price ?? ""}</h3> </div> ${plan?.oldPrice && plan.oldPrice !== "NA" && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": pricecut, "alt": "Pricecut", "class": "pricecut-img", "data-astro-cid-2qwqouol": true })}`} <hr class="card-divider" data-astro-cid-2qwqouol> <ul class="feature-list" data-astro-cid-2qwqouol> ${plan?.featuresListText?.map((item) => renderTemplate`<li class="feature-item" data-astro-cid-2qwqouol> <span class="feature-dot" data-astro-cid-2qwqouol></span> ${item?.listText ?? ""} </li>`)} </ul> <div class="button-row" data-astro-cid-2qwqouol> <button class="primary-btn ant-btn ant-btn-default" onclick="window.openZohoModal && window.openZohoModal()" data-astro-cid-2qwqouol> <span data-astro-cid-2qwqouol>${plan?.buttonText ?? "Select"}</span> </button> </div> </div> </div> </div>`)} </div> <p class="notes" data-astro-cid-2qwqouol>What </p> <p class="notes" data-astro-cid-2qwqouol>What </p> <!-- <p class="pricing-notes">• No contracts • Cancel anytime • Student discounts</p> --> </div> </section> ${renderScript($$result, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/pricingSection.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mparunkumar/Dropbox/VisualStudio/joveastro/JoVe/src/components/homePage/pricingSection.astro", void 0);

export { $$HeroSectionAlt as $, HeroSectionVideo as H, $$STEMStruggle as a, $$FirstCTASection as b, $$JoVECoachSteps as c, $$SecondCTASection as d, $$ConceptsSection as e, $$LearnerPersonas as f, $$PricingSection as g, $$JoveGenLpFaqs as h, $$ZohoForm as i, $$Footer as j };
