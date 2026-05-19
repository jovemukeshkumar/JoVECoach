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
			title: 'Master New Manager Essentials in 2-Minute Videos <br class="modal-break" />- Join 1M+ Learners',
			ctaText: "Watch Manager Training Videos Free - No Signup",
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
			{ image: conceptsImg1, title: "Giving Effective Feedback", views: "100k", time: "1:27" },
			{ image: conceptsImg2, title: "Delegation That Works", views: "340k", time: "1:23" },
			{ image: conceptsImg3, title: "Running Better 1:1s", views: "340k", time: "1:17" },
			{ image: conceptsImg4, title: "Setting Clear Expectations", views: "340k", time: "1:22" },
			{ image: conceptsImg5, title: "Handling Difficult Conversations", views: "340k", time: "1:24" },
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
				question: "Does JoVE Coach offer a free new manager essentials course online?",
				answer: "Yes. Start a 7-day free trial to access the full course online—every video, every micro-course, with no credit card required. You can also browse individual videos for free without signing up.",
			},
			{
				question: "How long are the videos?",
				answer: "About 2 minutes each. One concept, clearly explained. No filler.",
			},
			{
				question: "What is a micro-course?",
				answer: "A structured set of bite-sized lessons with 2-minute videos and quick quizzes—designed to take you from uncertain to confident without long courses.",
			},
			{
				question: "How is this different from other leadership courses online?",
				answer: "Most leadership training runs for weeks and assumes you have time for full lectures. JoVE Coach delivers core management concepts in 2-minute videos—built for working professionals who need answers fast.",
			},
			{
				question: "How is this different from YouTube?",
				answer: "Videos are created by experts, not content creators. AI finds exactly what you need and adds quick quizzes to confirm it clicked.",
			},
			{
				question: "Is this good for first-time managers?",
				answer: "Yes. JoVE Coach is built for professionals stepping into management who need practical skills without committing to a degree or semester-long program. Learn on your schedule, apply what you learn the next day.",
			},
			{
				question: "What topics are covered?",
				answer: "New manager essentials including delegation, feedback, 1:1s, goal setting, difficult conversations, team communication, and more—each in 2-minute videos with quick quizzes.",
			},
			{
				question: "Does JoVE Coach offer a certificate?",
				answer: "Yes. JoVE Coach issues a certificate of completion when you finish a micro-course—proof of the management skills you've built.",
			},
			{
				question: "Will JoVE Coach help me at work?",
				answer: "Yes. Professionals report clearer communication, better delegation, and more confident leadership with consistent use.",
			},
			{
				question: "Can I cancel anytime?",
				answer: "Yes. No contracts, no fees, no hassle.",
			},
		],
	},
	modal: {
		title: "Ready for Your Next Promotion?",
		subtitle: "Try JoVE Coach and build leadership skills that move your career forward.",
		ctaText: "Start My Free Trial",
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
