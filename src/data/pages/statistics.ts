// Hero Images
import HeroImage from "../../assets/stats-hero-image.webp";
import HeroImageMobile from "../../assets/stats-hero-image.webp";
import biologyCarouselDesktop from "../../assets/business-carousel-desktop.webm";
import biologyCarouselMobile from "../../assets/business-carousel-mobile.webm";

import conceptsImg1 from "../../assets/stats-concept-1.webp";
import conceptsImg2 from "../../assets/stats-concept-2.webp";
import conceptsImg3 from "../../assets/stats-concept-3.webp";
import conceptsImg4 from "../../assets/stats-concept-4.webp";
import conceptsImg5 from "../../assets/stats-concept-5.webp";

// Steps Images
import aILogo from "../../assets/aILogo.svg";
import videoPlay from "../../assets/videoPlay.svg";
import notePad from "../../assets/notePad.svg";
import cupLogo from "../../assets/cupLogo.svg";
import Jove_chat_video from "../../assets/Jove_chat_video.webm";
import Jove_chat_video_biology from "../../assets/Jove_chat_video_biology.webm";
import Jove_chat_Image1 from "../../assets/Jove_chat_Image1.png";
import Jove_chat_Image2 from "../../assets/Jove_chat_Image2.png";
import Jove_chat_Image3 from "../../assets/Jove_chat_Image3.png";
import Jove_chat_Image2_Biology from "../../assets/Jove-Chat-Business-2.png";
import Jove_chat_Image3_Biology from "../../assets/Jove-Chat-Business-4.png";
import conceptsSectionIcon1 from "../../assets/micro-courses.svg";

// Concepts Icons (for questions)
import conceptsSectionIcon6 from "../../assets/business-icon-1.svg";
import conceptsSectionIcon7 from "../../assets/business-icon-2.svg";
import conceptsSectionIcon8 from "../../assets/business-icon-3.svg";
import conceptsSectionIcon9 from "../../assets/business-icon-4.svg";

// Learner Personas Images
import LearnerPersonasImg1 from "../../assets/business-persona-1.png";
import LearnerPersonasImg2 from "../../assets/business-persona-2.png";
import LearnerPersonasImg3 from "../../assets/business-persona-3.png";
import LearnerPersonasImg4 from "../../assets/business-persona-4.png";
import LearnerPersonasImg5 from "../../assets/business-persona-5.png";
import LearnerPersonasImg6 from "../../assets/business-persona-6.png";

// Comparison Images
import comparisonTableLogo1 from "../../assets/ComparisonTableLogo1.png";
import comparisonTableLogo3 from "../../assets/ComparisonTableLogo3.png";
import comparisonTableLogo4 from "../../assets/ComparisonTableLogo4New.png";
import wrappedLogo1 from "../../assets/wrappedLogo1.svg";
import wrappedLogo3 from "../../assets/wrappedLogo3.svg";
import wrappedcourseralogo from "../../assets/wrappedcoursera.svg";
import footerValuesImage from "../../assets/professional.webp";
import courseraLogo from "../../assets/coursera.svg";
import udemyLogo from "../../assets/udemy.svg";

import type { LandingPageData } from "../landingPageData";

export const statisticsJanData: LandingPageData = {
	hero: {
		title: 'Work Requires Statistics? <br class="desktop-br" /> Master It in <span class="highlight">2-Minute Videos.</span>',
		subtitle: "Data analysis, probability, and hypothesis testing—explained for real work, without long courses. 20 years of trusted education.",
		mobileSubtitle: "Data analysis, probability, and hypothesis testing—explained for real work.",
		ctaTitle: "See statistics concepts finally make sense",
		heroFormCta: "<strong>Get Certified</strong>&nbsp;- It's Free",
		trustText: "Trusted by 1 Million+ learners",
		image: HeroImage,
		mobileImage: HeroImage,
		heroModal: {
			title: 'Master Statistics in 2-Minute Videos <br class="modal-break" />- Join 1M+ Learners',
			// subtitle: "Enter your details for instant access.",
			ctaText: "Watch Statistics Videos Free - No Signup",
			videoSrc: biologyCarouselDesktop,
		},
	},
	concepts: {
		heading: "Every <span>Statistics</span> concept you need. <span>Under 2 minutes.</span>",
		subheading: "One concept at a time, explained with short videos.",
		ctaText: "Explore what 1M+ professionals see",
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
			{ image: conceptsImg1, title: "What is an Experiment", views: "100k", time: "1:12" },
			{ image: conceptsImg2, title: "Ordinal Level of Measurement", views: "340K", time: "0:55" },
			{ image: conceptsImg3, title: "How Data are Classified?", views: "340k", time: "0:59" },
			{ image: conceptsImg4, title: "Nominal Level of Measurement", views: "340k", time: "0:56" },
			{ image: conceptsImg5, title: "Data Collection by Experiments", views: "340k", time: "1:13" },
		],
		questions: [
			{ icon: conceptsSectionIcon6, text: "How do I interpret a p-value?" },
			{ icon: conceptsSectionIcon6, text: "What is the difference between mean and median?" },
			{ icon: conceptsSectionIcon6, text: "How does a normal distribution work?" },
			{ icon: conceptsSectionIcon6, text: "When should I use a t-test versus ANOVA?" },
			{ icon: conceptsSectionIcon6, text: "What is statistical significance?" },
			{ icon: conceptsSectionIcon6, text: "How do I calculate standard deviation?" },
			{ icon: conceptsSectionIcon6, text: "What is correlation vs causation?" },
			{ icon: conceptsSectionIcon6, text: "How do confidence intervals work?" },
			{ icon: conceptsSectionIcon6, text: "What are Type I and Type II errors?" },
			{ icon: conceptsSectionIcon6, text: "How do I perform a linear regression?" },
			{ icon: conceptsSectionIcon6, text: "What is a sampling distribution?" },
		],
	},
	steps: {
		title: `More than a learning tool - <span class="highlight">It's <img src="${conceptsSectionIcon1.src}" alt="JoVE Coach" style="width: 27px; height: auto; margin-bottom: -5px;" /> that makes statistics click.</span>`,
		subtitle: "2-minute videos. AI-backed clarity. Instant practice.",
		discoverText: "Master statistics concepts in 4 simple steps.",
		items: [
			{
				id: "ask",
				icon: aILogo,
				title: "Ask",
				number: "STEP 1",
				headline: "Ask and get unstuck with AI",
				description: "No more scrolling. Just ask - and get the video and insights that crack the data.",
				image: Jove_chat_video_biology,
			},
			{
				id: "watch",
				icon: videoPlay,
				title: "Watch",
				number: "STEP 2",
				headline: "Learn in minutes, Not hours",
				description: "Watch expert-verified videos that actually make sense of statistics.",
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
				headline: 'That "I actually get it" feeling-for real',
				description: "Crush one concept. Then the next. Build momentum in data literacy.",
				image: Jove_chat_Image3_Biology,
			},
		],
	},
	personas: {
		title: 'From uncertainty to clarity — <span class="highlight">we’ve got you.</span>',
		subtitle: "Different roles. Same need for statistical clarity.",
		items: [
			{
				image: LearnerPersonasImg1,
				title: "Managers making data-driven decisions",
				description: "Everyday operations. Clear statistical thinking.",
			},
			{
				image: LearnerPersonasImg2,
				title: "Market researchers analyzing trends",
				description: "Less guesswork. More confident conclusions.",
			},
			{
				image: LearnerPersonasImg3,
				title: "Professionals stepping into data roles",
				description: "Build the foundations that analysts expect.",
			},
			{
				image: LearnerPersonasImg4,
				title: "Non-technical roles with reports",
				description: "Clarity on data without becoming a data scientist.",
			},
			{
				image: LearnerPersonasImg5,
				title: "Career switchers in tech roles",
				description: "Strong foundations to transition with confidence.",
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
		subtitle: "20 years of trusted education, built for real-world understanding.",
		tagline: 'Better <span class="highlight-blue">clarity</span>. Better <span class="highlight-blue">focus</span>. Better <span class="highlight-blue">decisions</span>.',
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
			{
				id: "youtube",
				name: "YouTube",
				logo: comparisonTableLogo3,
				mobileLogo: wrappedLogo3,
			},
			{ id: "chatgpt", name: "ChatGPT", logo: comparisonTableLogo4 },
			{ id: "udemy", name: "Udemy", logo: udemyLogo },
		],
		features: [
			{
				name: "2-minute focused videos",
				values: { jove: true, coursera: false, youtube: false, chatgpt: false, udemy: false },
			},
			{
				name: "Expert-created content",
				values: { jove: true, coursera: true, youtube: false, chatgpt: false, udemy: false },
			},
			{
				name: "Industry-aligned",
				values: { jove: true, coursera: true, youtube: false, chatgpt: false, udemy: true },
			},
			{
				name: "Structured micro-courses",
				values: { jove: true, coursera: false, youtube: false, chatgpt: false, udemy: false },
			},
			{
				name: "Verified accuracy",
				values: { jove: true, coursera: true, youtube: false, chatgpt: false, udemy: false },
			},
			{
				name: "Data-focused",
				values: { jove: true, coursera: true, youtube: false, chatgpt: false, udemy: true },
			},
			{
				name: "20 years of academic trust",
				values: { jove: true, coursera: false, youtube: false, chatgpt: false, udemy: false },
			},
		],
	},
	firstCTA: {
		title: "Ready for clearer data-driven decisions?",
		subtitle: "Try it free and see how it fits your workday.",
	},
	secondCTA: {
		title: "Ready to try the 4 steps",
		subtitle: "Ask a question and watch statistics fundamentals click.",
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
				question: "Is JoVE Coach free?",
				answer: "You can explore videos for free—no sign-up needed. For full access, start a 7-day free trial to unlock all videos and micro-courses.",
			},
			{
				question: "How long are the videos?",
				answer: "About 2 minutes each. One concept, clearly explained. No filler.",
			},
			{
				question: "What is a micro-course?",
				answer: "A structured set of bite-sized lessons with 2-minute videos and quick quizzes—designed to take you from confused to confident without long courses.",
			},
			{
				question: "How is this different from YouTube?",
				answer: "Videos are created by statistics experts, not content creators. AI finds exactly what you need and adds quick quizzes to confirm it clicked.",
			},
			{
				question: "Will JoVE Coach help me with my work projects?",
				answer: "Yes. Professionals report better data literacy and more confident decision-making with consistent use.",
			},
			{
				question: "What statistics topics do you cover?",
				answer: "Statistics fundamentals including Data Analysis, Probability, Hypothesis Testing, Regression, and more.",
			},
			{
				question: "Can I cancel anytime?",
				answer: "Yes. No contracts, no fees, no hassle.",
			},
		],
	},
	modal: {
		title: "A Smarter Way to Understand Statistics Fundamentals",
		subtitle: "Try Jove Coach and understand Data Analysis, Probability, and Hypothesis Testing-fast.",
		ctaText: "Start My Free Trial",
	},
	footer: {
		title: "A Smarter Way to Understand Statistics Fundamentals",
		subtitle: "Try Jove Coach and understand Data Analysis, Probability, and Hypothesis Testing-fast.",
		ctaText: "Start My Free Trial",
		image: footerValuesImage,
		seoText: "JoVE Coach offers Statistics courses with expert-verified 2-minute videos across essential statistics topics, including Data Analysis, Probability, Hypothesis Testing, Regression Analysis, Data Visualization, Statistical Inference, and more.",
	},
};
