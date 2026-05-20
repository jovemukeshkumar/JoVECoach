// Hero Images
import HeroImage from "../../assets/nme.png";
import HeroImageMobile from "../../assets/stats-hero-image.webp";
import biologyCarouselDesktop from "../../assets/business-carousel-desktop.webm";
import biologyCarouselMobile from "../../assets/business-carousel-mobile.webm";

import conceptsImg1 from "../../assets/41501_Potrait.webp";
import conceptsImg2 from "../../assets/41947_Potrait.webp";
import conceptsImg3 from "../../assets/41948_Potrait.webp";
import conceptsImg4 from "../../assets/41949_Potrait.webp";
import conceptsImg5 from "../../assets/41950_Potrait.webp";

// Steps Images
import aILogo from "../../assets/aILogo.svg";
import videoPlay from "../../assets/videoPlay.svg";
import notePad from "../../assets/notePad.svg";
import cupLogo from "../../assets/cupLogo.svg";
import Jove_chat_video_biology from "../../assets/Jove_chat_video_biology.webm";
import Jove_chat_Image1 from "../../assets/Jove_chat_Image1.png";
import Jove_chat_Image2_Biology from "../../assets/Jove-Chat-Business-2.png";
import Jove_chat_Image3_Biology from "../../assets/Jove-Chat-Business-4.png";
import conceptsSectionIcon1 from "../../assets/micro-courses.svg";

// Concepts Icons (for questions)
import conceptsSectionIcon6 from "../../assets/business-icon-1.svg";

// Learner Personas Images
import LearnerPersonasImg1 from "../../assets/business-persona-1.png";
import LearnerPersonasImg2 from "../../assets/business-persona-2.png";
import LearnerPersonasImg3 from "../../assets/business-persona-3.png";
import LearnerPersonasImg4 from "../../assets/business-persona-4.png";
import LearnerPersonasImg5 from "../../assets/business-persona-5.png";
import LearnerPersonasImg6 from "../../assets/business-persona-6.png";

// Comparison Images
import comparisonTableLogo1 from "../../assets/ComparisonTableLogo1.png";
import comparisonTableLogo4 from "../../assets/ComparisonTableLogo4New.png";
import wrappedLogo1 from "../../assets/wrappedLogo1.svg";
import wrappedcourseralogo from "../../assets/wrappedcoursera.svg";
import footerValuesImage from "../../assets/professional.webp";
import courseraLogo from "../../assets/coursera.svg";
import udemyLogo from "../../assets/udemy.svg";

import type { LandingPageData } from "../landingPageData";

export const newManagerEssentialsData: LandingPageData = {
	hero: {
		title: 'Lead with Confidence.<br class="desktop-br" /> Master New Manager Skills in <span class="highlight">2-Min Videos.</span>',
		subtitle: "Delegation, feedback, team communication, and decision-making—explained for your first management role, without long courses. 20 years of trusted education.",
		mobileSubtitle: "Delegation, feedback, and team communication—explained for your first management role.",
		ctaTitle: "Watch management essentials finally click.",
		heroFormCta: "<strong>Get Free Certification - In Minutes</strong>",
		trustText: "Trusted by 1 Million+ learners from 1,800+ organizations",
		image: HeroImage,
		mobileImage: HeroImageMobile,
		heroModal: {
			title: 'Ready for Your Next Promotion ?',
			subtitle: "Try JoVE Coach and build leadership skills that move your career forward.",
			ctaText: "Get Free Certification - in minutes",
			videoSrc: biologyCarouselDesktop,
		},
	},
	concepts: {
		heading: "Every <span>new manager</span> skill you need. <span>Under 2 minutes.</span>",
		subheading: "One concept at a time, explained with short videos.",
		ctaText: "Join 1M+ Professionals",
		features: [
			{ icon: "micro-courses", text: "500+ Micro-courses" },
			{ icon: "curriculum", text: "Curriculum-aligned" },
			{ icon: "ad-free", text: "Ad-free learning" },
			{ icon: "expert", text: "Expert-created content" },
			{ icon: "secure", text: "Secure & private" },
		],
		video: biologyCarouselDesktop,
		mobileVideo: biologyCarouselMobile,
		videoPlaybackSpeed: 0.75,
		conceptCards: [
			{ image: conceptsImg1, title: "From an Individual Contributor to Manager", views: "1k", time: "1:27" },
			{ image: conceptsImg2, title: "Common Mistakes First-Time Managers Make", views: "2.3k", time: "1:23" },
			{ image: conceptsImg3, title: "How to Build Credibility as a New Manager", views: "3.1k", time: "1:17" },
			{ image: conceptsImg4, title: "How to Set Boundaries with Former Peers", views: "1.5k", time: "1:22" },
			{ image: conceptsImg5, title: "Your First 90 Days as a Manager", views: "5.2k", time: "1:24" },
		],
		questions: [
			{ icon: conceptsSectionIcon6, text: "How do I delegate without micromanaging?" },
			{ icon: conceptsSectionIcon6, text: "What makes feedback actually land?" },
			{ icon: conceptsSectionIcon6, text: "How do I run effective 1:1 meetings?" },
			{ icon: conceptsSectionIcon6, text: "How do I set goals my team can hit?" },
			{ icon: conceptsSectionIcon6, text: "What should I do in my first 90 days as a manager?" },
			{ icon: conceptsSectionIcon6, text: "How do I build trust with a new team?" },
			{ icon: conceptsSectionIcon6, text: "How do I handle underperformance?" },
			{ icon: conceptsSectionIcon6, text: "How do I balance being a peer and a boss?" },
			{ icon: conceptsSectionIcon6, text: "What is psychological safety on a team?" },
			{ icon: conceptsSectionIcon6, text: "How do I prioritize when everything feels urgent?" },
			{ icon: conceptsSectionIcon6, text: "How do I give recognition that motivates?" },
		],
	},
	steps: {
		title: `More than a learning tool - <span class="highlight">It's <img src="${conceptsSectionIcon1.src}" alt="JoVE Coach" style="width: 27px; height: auto; margin-bottom: -5px;" /> that makes management skills click.</span>`,
		subtitle: "2-minute videos. AI-backed clarity. Instant practice.",
		discoverText: "Master new manager essentials in 4 simple steps.",
		items: [
			{
				id: "ask",
				icon: aILogo,
				title: "Ask",
				number: "STEP 1",
				headline: "Ask and get unstuck with AI",
				description: "No more scrolling. Just ask—and get the video and insights that clarify your next move as a manager.",
				image: Jove_chat_video_biology,
			},
			{
				id: "watch",
				icon: videoPlay,
				title: "Watch",
				number: "STEP 2",
				headline: "Learn in minutes, not hours",
				description: "Watch expert-verified videos that make management fundamentals practical.",
				image: Jove_chat_Image2_Biology,
			},
			{
				id: "practise",
				icon: notePad,
				title: "Practise",
				number: "STEP 3",
				headline: "Quick quiz to see if it clicks",
				description: "Quick quiz after every video. See where your understanding stands instantly.",
				image: Jove_chat_Image1,
			},
			{
				id: "master",
				icon: cupLogo,
				title: "Master",
				number: "STEP 4",
				headline: 'That "I actually get it" feeling—for real',
				description: "Crush one concept. Then the next. Build momentum as a confident new manager.",
				image: Jove_chat_Image3_Biology,
			},
		],
	},
	personas: {
		title: 'From uncertainty to clarity — <span class="highlight">we’ve got you.</span>',
		subtitle: "Different roles. Same need for management clarity.",
		items: [
			{
				image: LearnerPersonasImg1,
				title: "First-time managers",
				description: "Step into leadership with clarity from day one.",
			},
			{
				image: LearnerPersonasImg2,
				title: "Team leads without formal training",
				description: "Practical skills without a semester-long program.",
			},
			{
				image: LearnerPersonasImg3,
				title: "High performers promoted into management",
				description: "Translate individual excellence into team results.",
			},
			{
				image: LearnerPersonasImg4,
				title: "Managers leading remote or hybrid teams",
				description: "Communication and accountability that still works at a distance.",
			},
			{
				image: LearnerPersonasImg5,
				title: "Professionals preparing for a promotion",
				description: "Build leadership foundations before the title changes.",
			},
			{
				image: LearnerPersonasImg6,
				title: "Busy professionals balancing work and life",
				description: "Packed schedules. 2-minute videos that fit.",
			},
		],
	},
	comparison: {
		title: 'See why professionals <span class="highlight-blue">choose JoVE Coach</span>',
		subtitle: "20 years of trusted learning, built for real-world understanding.",
		tagline: "",
		ctaText: "Try It Free",
		items: [
			{
				id: "jove",
				name: "jove",
				logo: comparisonTableLogo1,
				mobileLogo: wrappedLogo1,
				logoColor: "#2196F3",
				highlighted: true,
			},
			{
				id: "coursera",
				name: "Coursera",
				logo: courseraLogo,
				mobileLogo: wrappedcourseralogo,
			},
			{ id: "chatgpt", name: "ChatGPT", logo: comparisonTableLogo4 },
			{ id: "udemy", name: "Udemy", logo: udemyLogo },
		],
		features: [
			{
				name: "2-minute focused videos",
				values: { jove: true, coursera: false, chatgpt: false, udemy: false },
			},
			{
				name: "Expert-created content",
				values: { jove: true, coursera: true, chatgpt: false, udemy: false },
			},
			{
				name: "Industry-aligned",
				values: { jove: true, coursera: true, chatgpt: false, udemy: true },
			},
			{
				name: "Structured micro-courses",
				values: { jove: true, coursera: false, chatgpt: false, udemy: false },
			},
			{
				name: "Verified accuracy",
				values: { jove: true, coursera: true, chatgpt: false, udemy: false },
			},
			{
				name: "Management-focused",
				values: { jove: true, coursera: true, chatgpt: false, udemy: true },
			},
			{
				name: "20 years of industry trust",
				values: { jove: true, coursera: false, chatgpt: false, udemy: false },
			},
		],
	},
	firstCTA: {
		title: "Ready to lead with confidence?",
		subtitle: "Try it free and build the skills leaders notice.",
	},
	secondCTA: {
		title: "Ready to try the 4 steps",
		subtitle: "Ask a question and watch new manager essentials click.",
	},
	pricing: {
		title: "Built for professionals. <span>Priced sensibly.</span>",
		subtitle: "Expert videos, AI explanations, and quick checks—without long courses.",
		plans: [
			{
				title: "Annual",
				tag: "save 44%",
				price: "$16/month",
				oldPrice: "$29/month",
				buttonText: "Start with Annual - Save 44%",
				featuresListText: [{ listText: "Unlimited access" }, { listText: "One Time payment" }, { listText: "Cancel anytime" }, { listText: "Renews Annually" }],
			},
			{
				title: "Monthly",
				tag: "NA",
				price: "$29/month",
				oldPrice: "NA",
				buttonText: "Try Monthly Plan",
				featuresListText: [{ listText: "Unlimited access" }, { listText: "Cancel anytime" }, { listText: "Renews Monthly" }],
			},
		],
	},
	faq: {
		heading: "Frequently Asked Questions",
		items: [
			{
				"answer": "Yes. Start a 7-day free trial to access the full new manager essentials course online — every video, every micro-course, with no credit card required. You can also browse individual videos for free without signing up.",
				"question": "Does JoVE Coach offer a free new manager essentials course online?"
			  },
			  {
				"answer": "13 chapters covering management fundamentals — transitioning from individual contributor to first time manager, delegation, goal setting, performance management, difficult conversations, emotional intelligence, team management, and managing up. Every leadership skill a first-time manager needs.",
				"question": "What does the new manager essentials course cover?"
			  },
			  {
				"answer": "Yes. The course is built for L&D teams scaling manager development — 13 chapters, 93 lessons, mapped to the first-time manager journey. Deploy it as a self-paced track or a structured 90-day onboarding for newly promoted managers.",
				"question": "Is New Manager Essentials suitable for company-wide manager development programs?"
			  },
			  {
				"answer": "We benchmarked against leading training providers. Most leadership training for new managers is 4–8 hours with low completion rates. We deliver the same coverage in 2-minute videos — resulting in higher completion rates. ",
				"question": "Why choose JoVE Coach over other leadership training for new managers?"
			  },
			  {
				"answer": "Yes — built specifically for working professionals stepping into management. Each lesson is 2 minutes, so learn between Slack messages, before a 1-on-1, or during lunch. Real new manager skills you can apply to your team the same day.",
				"question": "Is JoVE Coach's first-time manager training designed for busy working professionals?"
			  },
			  {
				"answer": "Yes. Learners receive a shareable JoVE Coach certificate verifying their new manager skills — recognised by L&D teams at 1,800+ organisations. Admins can also pull completion reports for internal manager development tracking.",
				"question": "Do I get a certificate after completing the new manager development course?"
			  },
			  {
				"answer": "Yes. Many enterprise customers deploy New Manager Essentials as a structured 90-day onboarding — 1 chapter per week aligned with milestone moments in a new manager's first quarter, supported by manager development cohort discussions.",
				"question": "Can we deploy this as a 90-day onboarding for newly promoted managers?"
			  },
			  {
				"answer": "Start a 7-day free trial as an individual to access the full new manager essentials course — no credit card required. For team rollouts, request a demo and we'll set up your enterprise account and L&D dashboard within a week.",
				"question": "Can I try the new manager essentials course before buying?"
			  },
		],
	},
	modal: {
		title: "Ready for Your Next Promotion?",
		subtitle: "Try JoVE Coach and build leadership skills that move your career forward.",
		ctaText: "Get Free Certification - in minutes",
	},
	footer: {
		title: "The Fast Lane to Career Growth.",
		subtitle: "Build leadership skills that move your career forward — in 2-minute videos.",
		ctaText: "Start My Free Trial",
		image: footerValuesImage,
		seoText: "JoVE Coach offers new manager essentials courses with expert-verified 2-minute videos across essential leadership topics, including Delegation, Feedback, 1:1 Meetings, Goal Setting, Difficult Conversations, Team Communication, and more.",
	},
};

/** Post-login destination passed as redirecturi query param on coach.jove.com/home */
export const newManagerEssentialsRedirectUri =
	"https://coach.jove.com/microcourse/new-manager-essentials/transitioning-from-individual-contributor-to-manager/common-mistakes-first-time-managers-make";
