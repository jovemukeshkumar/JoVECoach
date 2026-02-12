import HeroImage from "../assets/generic-desktop.webp";
import HeroImageMobile from "../assets/HeroSectionMobileImage.webp";
import threeDStillImages from "../assets/3D-Still-Images.webm";
import mobileCarouselVideo from "../assets/Generic-Carousel-Mobile.webm";

// Steps Images
import aILogo from "../assets/aILogo.svg";
import videoPlay from "../assets/videoPlay.svg";
import notePad from "../assets/notePad.svg";
import cupLogo from "../assets/cupLogo.svg";
import Jove_chat_video from "../assets/Jove_chat_video.webm"; 
import Jove_chat_Image1 from "../assets/Jove_chat_Image1.png";
import Jove_chat_Image2 from "../assets/Jove_chat_Image2.png";
import Jove_chat_Image3 from "../assets/Jove_chat_Image3.png";
import conceptsSectionIcon1 from "../assets/conceptsSectionIcon1.svg";

// Concepts Icons (for questions)
import conceptsSectionIcon6 from "../assets/conceptsSectionIcon6.svg";
import conceptsSectionIcon7 from "../assets/conceptsSectionIcon7.svg";
import conceptsSectionIcon8 from "../assets/conceptsSectionIcon8.svg";
import conceptsSectionIcon9 from "../assets/conceptsSectionIcon9.svg";
// conceptsSectionIcon10 seems to be conceptsSectionIcon6 based on file content/usage in component, mapping accordingly or using correct imports if distinct.
// Component imported: import conceptsSectionIcon10 from "../../assets/conceptsSectionIcon6.svg"; -> So it's Icon6.

// Learner Personas Images
import LearnerPersonasImg1 from "../assets/LearnersPersonasImage1.png";
import LearnerPersonasImg2 from "../assets/LearnersPersonasImage2.png";
import LearnerPersonasImg3 from "../assets/LearnersPersonasImage3.png";
import LearnerPersonasImg4 from "../assets/LearnersPersonasImage4.png";
import LearnerPersonasImg5 from "../assets/LearnersPersonasImage5.png";
import LearnerPersonasImg6 from "../assets/LearnersPersonasImage6.png";

// Comparison Images (We might just use string IDs and map them in component if there are too many, but let's try direct imports for flexibility)
import comparisonTableLogo1 from "../assets/ComparisonTableLogo1.png";
import comparisonTableLogo2 from "../assets/ComparisonTableLogo2.png";
import comparisonTableLogo3 from "../assets/ComparisonTableLogo3.png";
import comparisonTableLogo4 from "../assets/ComparisonTableLogo4New.png";
import comparisonTableLogo5 from "../assets/ComparisonTableLogo5.png";
import wrappedLogo1 from "../assets/wrappedLogo1.svg";
import wrappedLogo2 from "../assets/wrappedLogo2.svg";
import wrappedLogo3 from "../assets/wrappedLogo3.svg";


// Define interfaces
export interface Step {
	id: string;
	icon: ImageMetadata;
	title: string;
	number: string;
	headline: string;
	description: string;
	image: ImageMetadata | string; // video can be string path
}

export interface LearnerPersona {
	image: ImageMetadata;
	title: string;
	description: string;
}

export interface ComparisonItem {
	id: string;
	name: string;
	logo: ImageMetadata;
	mobileLogo?: ImageMetadata;
	logoColor?: string;
	highlighted?: boolean;
}

export interface ComparisonFeature {
	name: string;
	values: Record<string, boolean | string>;
}

// CTA interfaces
export interface CTAData {
	title: string;
	subtitle: string;
	ctaText?: string;
}

// Pricing Interfaces
export interface PricingFeature {
	listText: string;
}

export interface PricingPlan {
	title: string;
	tag: string;
	price: string;
	oldPrice: string;
	buttonText: string;
	featuresListText: PricingFeature[];
}

export interface PricingData {
	title: string;
	subtitle: string;
	plans: PricingPlan[];
}

// FAQ Interface
export interface FAQItem {
	question: string;
	answer: string;
}

export interface FAQData {
	heading: string;
	items: FAQItem[];
}

export interface LandingPageData {
	hero: {
		title: string;
		subtitle: string;
		mobileSubtitle?: string;
		ctaText?: string;
		ctaTitle?: string;
		heroFormCta?: string;
		trustText: string;
		image: ImageMetadata;
		mobileImage: ImageMetadata;
	};
	concepts: {
		heading: string;
		subheading: string;
		features: {
			icon: string; 
			text: string;
		}[];
		video: string; 
		mobileVideo: string;
		videoPlaybackSpeed?: number;
		conceptCards?: {
			image: ImageMetadata;
			title: string;
			views: string;
			time: string;
		}[];
		questions: {
			icon: ImageMetadata;
			text: string;
		}[];
	};
	steps: {
		title: string;
		subtitle: string;
		discoverText: string;
		items: Step[];
	};
	personas: {
		title: string;
		subtitle: string;
		items: LearnerPersona[];
	};
	comparison: {
		title: string;
		subtitle: string;
		tagline: string;
		ctaText: string;
		items: ComparisonItem[];
		features: ComparisonFeature[];
	};
	firstCTA: CTAData;
	secondCTA: CTAData;
	pricing: PricingData;
	modal: {
		title: string;
		subtitle: string;
		ctaText: string;
	};
	faq: FAQData;
	footer?: {
		title: string;
		subtitle: string;
		ctaText: string;
		image?: ImageMetadata;
	};
	heroModal?: {
		title: string;
		subtitle: string;
		ctaText: string;
		videoSrc?: string;
	};
}
