/** Static modal redirects (redirecturi on coach.jove.com/home). */
const NME_MICROCOURSE_BASE = "https://coach.jove.com/microcourse/new-manager-essentials";

/** Open forms / modals when utm_term (or utm_keyword / keyword) is empty. */
export const newManagerEssentialsNoUtmRedirect =
	`${NME_MICROCOURSE_BASE}/transitioning-from-individual-contributor-to-manager/from-individual-contributor-to-manager`;

/** Hero image click → modal submit. */
export const newManagerEssentialsHeroImageRedirect =
	`${NME_MICROCOURSE_BASE}/transitioning-from-individual-contributor-to-manager/common-mistakes-first-time-managers-make`;

/** One static redirect per concept thumbnail (thumbnail-1 … thumbnail-5). */
export const newManagerEssentialsThumbnailRedirects = [
	`${NME_MICROCOURSE_BASE}/transitioning-from-individual-contributor-to-manager/from-individual-contributor-to-manager`,
	`${NME_MICROCOURSE_BASE}/transitioning-from-individual-contributor-to-manager/common-mistakes-first-time-managers-make`,
	`${NME_MICROCOURSE_BASE}/transitioning-from-individual-contributor-to-manager/how-to-build-credibility-as-a-new-manager`,
	`${NME_MICROCOURSE_BASE}/transitioning-from-individual-contributor-to-manager/how-to-set-boundaries-with-former-peers`,
	`${NME_MICROCOURSE_BASE}/transitioning-from-individual-contributor-to-manager/your-first-90-days-as-a-manager`,
] as const;

export const newManagerEssentialsRedirects = {
	noUtm: newManagerEssentialsNoUtmRedirect,
	heroImageClick: newManagerEssentialsHeroImageRedirect,
} as const;

/** @deprecated Use newManagerEssentialsHeroImageRedirect */
export const newManagerEssentialsRedirectUri = newManagerEssentialsHeroImageRedirect;

/** Final Zoho return URL base for every touchpoint. */
export const COACH_HOME_RETURN_URL = "https://coach.jove.com/home";

/** Open-form redirecturi when utm_term is present (searchQuery appended client-side). */
export const COACH_SEARCH_REDIRECT_BASE = "https://coach.jove.com/microcourse/new-manager-essentials";
