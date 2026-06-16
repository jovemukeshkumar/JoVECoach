// Hero Images
import HeroImage from "../../assets/marketing-hero-image.webp";
import HeroImageMobile from "../../assets/marketing-hero-image.webp";
import biologyCarouselDesktop from "../../assets/business-carousel-desktop.webm";
import biologyCarouselMobile from "../../assets/business-carousel-mobile.webm";

import conceptsImg1 from "../../assets/marketing-concept-1.webp";
import conceptsImg2 from "../../assets/marketing-concept-2.webp";
import conceptsImg3 from "../../assets/marketing-concept-3.webp";
import conceptsImg4 from "../../assets/marketing-concept-4.webp";
import conceptsImg5 from "../../assets/marketing-concept-5.webp";

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
import comparisonTableLogo4 from "../../assets/ComparisonTableLogo4New.png";
import wrappedLogo1 from "../../assets/wrappedLogo1.svg";
import wrappedcourseralogo from "../../assets/wrappedcoursera.svg";
import footerValuesImage from "../../assets/professional.webp";
import courseraLogo from "../../assets/coursera.svg";
import udemyLogo from "../../assets/udemy.svg";

import type { LandingPageData } from "../landingPageData";

export const marketingData: LandingPageData = {
	hero: {
		title: 'Fast-Track Your Career.<br class="desktop-br" /> Master Marketing with <span class="highlight">2-Min Videos.</span>',
		subtitle: "Data analysis, probability, and hypothesis testing—explained for real work, without long courses. 20 years of trusted education.",
		mobileSubtitle: "Data analysis, probability, and hypothesis testing—explained for real work.",
		ctaTitle: "Watch statistics concepts finally click.",
		heroFormCta: "<strong>Get Free Certification - In Minutes</strong>",
		trustText: "Trusted by 5 Million+ learners from 1,800+ organizations",
		image: HeroImage,
		mobileImage: HeroImage,
		heroModal: {
			title: 'Master Marketing with 2-Minute Videos <br class="modal-break" />- Join 5M+ Learners',
			// subtitle: "Enter your details for instant access.",
			ctaText: "Get Certified In Minutes",
			videoSrc: biologyCarouselDesktop,
		},
	},
	concepts: {
		heading: "Every <span>marketing</span> concept you need. <span>Under 2 minutes.</span>",
		subheading: "One concept at a time, explained with short videos.",
		ctaText: "Join 5M+ Professionals",
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
			{ image: conceptsImg1, title: "Defining Marketing", views: "63k", time: "1:16" },
			{ image: conceptsImg2, title: "Value Creation in Marketing", views: "63k", time: "1:23" },
			{ image: conceptsImg3, title: "Marketing Plan", views: "63k", time: "1:26" },
			{ image: conceptsImg4, title: "Marketing Environment", views: "22.7k", time: "1:24" },
			{ image: conceptsImg5, title: "Buying Behavior", views: "36k", time: "1:19" },
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
		title: 'From uncertainty to clarity — <span class="highlight">we\'ve got you.</span>',
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
				name: "Data-focused",
				values: { jove: true, coursera: true, chatgpt: false, udemy: true },
			},
			{
				name: "20 years of industry trust",
				values: { jove: true, coursera: false, chatgpt: false, udemy: false },
			},
		],
	},
	firstCTA: {
		title: "Ready to fast-track your career?",
		subtitle: "Try it free and build the skills leaders notice.",
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
				question: "Does JoVE Coach offer a free marketing course online?",
				answer: "Yes. Start a 7-day free trial to access the full marketing course online—every video and micro-course, with no credit card required. You can also browse individual videos for free without signing up.",
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
				question: "How is this different from other marketing courses online?",
				answer: "Most marketing courses online run for weeks and assume you have time for full lectures. JoVE Coach delivers the same core marketing concepts—strategy, consumer behavior, digital marketing, analytics—in focused 2-minute videos, built for working professionals who need answers fast.",
			},
			{
				question: "How is this different from YouTube?",
				answer: "Videos are created by marketing experts and academic authors, not content creators. AI finds exactly what you need and adds quick quizzes to confirm it clicked.",
			},
			{
				question: "Is this a good marketing course online for working professionals?",
				answer: "Yes. JoVE Coach is built for marketers and business professionals who need practical marketing training without committing to an MBA or semester-long program. Learn on your schedule—apply what you learn in your next campaign, brief, or meeting.",
			},
			{
				question: "Can I learn digital marketing, market research, and B2B marketing?",
				answer: "Yes. JoVE Coach covers the full marketing curriculum: marketing fundamentals, consumer behavior, segmentation and positioning, the 4Ps/4Es, market research, marketing metrics, digital marketing (SEO, SEM, social media, email, e-commerce), services marketing, B2B marketing, global marketing, and contemporary topics like AI, AR, and neuromarketing—all in 2-minute videos.",
			},
			{
				question: "Does JoVE Coach offer a marketing certification?",
				answer: "Yes. JoVE Coach issues a certificate of completion when you finish a micro-course—proof of the marketing skills you've built.",
			},
			{
				question: "Will JoVE Coach help me with my work projects?",
				answer: "Yes. Marketers use JoVE Coach to sharpen campaign planning, run better market research, interpret metrics, and lead stronger strategy conversations with their teams.",
			},
			{
				question: "Can I cancel anytime?",
				answer: "Yes. No contracts, no fees, no hassle.",
			},
		],
	},
	modal: {
		title: "Ready for Your Next Promotion?",
		subtitle: "Try JoVE Coach and build marketing skills that move your career forward.",
		ctaText: "Get Certified In Minutes",
	},
	footer: {
		title: "The Fast Lane to Career Growth.",
		subtitle: "Build marketing skills that move your career forward — in 2-minute videos.",
		ctaText: "Start My Free Trial",
		image: footerValuesImage,
		seoText: "JoVE Coach offers marketing courses with expert-verified 2-minute videos across essential marketing topics, including Consumer Behavior, Digital Marketing, Market Research, B2B Marketing, Marketing Metrics, SEO, and more.JoVE Coach offers statistics courses with expert-verified 2-minute videos across essential statistics topics, including Data Analysis, Probability, Hypothesis Testing, Regression Analysis, Data Visualization, Statistical Inference, and more.",
	},
};
