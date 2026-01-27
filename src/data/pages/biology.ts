
// Hero Images
import HeroImage from "../../assets/generic-desktop.webp";
import HeroImageMobile from "../../assets/HeroSectionMobileImage.webp";
import threeDStillImages from "../../assets/3D-Still-Images.webm";
import mobileCarouselVideo from "../../assets/Generic-Carousel-Mobile.webm";

// Steps Images
import aILogo from "../../assets/aILogo.svg";
import videoPlay from "../../assets/videoPlay.svg";
import notePad from "../../assets/notePad.svg";
import cupLogo from "../../assets/cupLogo.svg";
import Jove_chat_video from "../../assets/Jove_chat_video.webm"; 
import Jove_chat_Image1 from "../../assets/Jove_chat_Image1.png";
import Jove_chat_Image2 from "../../assets/Jove_chat_Image2.png";
import Jove_chat_Image3 from "../../assets/Jove_chat_Image3.png";
import conceptsSectionIcon1 from "../../assets/conceptsSectionIcon1.svg";

// Concepts Icons (for questions)
import conceptsSectionIcon6 from "../../assets/conceptsSectionIcon6.svg";
import conceptsSectionIcon7 from "../../assets/conceptsSectionIcon7.svg";
import conceptsSectionIcon8 from "../../assets/conceptsSectionIcon8.svg";
import conceptsSectionIcon9 from "../../assets/conceptsSectionIcon9.svg";

// Learner Personas Images
import LearnerPersonasImg1 from "../../assets/LearnersPersonasImage1.png";
import LearnerPersonasImg2 from "../../assets/LearnersPersonasImage2.png";
import LearnerPersonasImg3 from "../../assets/LearnersPersonasImage3.png";
import LearnerPersonasImg4 from "../../assets/LearnersPersonasImage4.png";
import LearnerPersonasImg5 from "../../assets/LearnersPersonasImage5.png";
import LearnerPersonasImg6 from "../../assets/LearnersPersonasImage6.png";

// Comparison Images
import comparisonTableLogo1 from "../../assets/ComparisonTableLogo1.png";
import comparisonTableLogo2 from "../../assets/ComparisonTableLogo2.png";
import comparisonTableLogo3 from "../../assets/ComparisonTableLogo3.png";
import comparisonTableLogo4 from "../../assets/ComparisonTableLogo4New.png";
import comparisonTableLogo5 from "../../assets/ComparisonTableLogo5.png";
import wrappedLogo1 from "../../assets/wrappedLogo1.svg";
import wrappedLogo2 from "../../assets/wrappedLogo2.svg";
import wrappedLogo3 from "../../assets/wrappedLogo3.svg";

import type { LandingPageData } from "../landingPageData";

export const scienceGenJanData: LandingPageData = {
    hero: {
        title: 'Biology Feeling Impossible? <br class="desktop-br" /> Master It in <span class="highlight">2-Minute Videos.</span>',
        subtitle: "From confused to confident. Biology finally made simple. 20 years of trusted science education.",
        mobileSubtitle: "From confused to confident. Biology finally made simple.",
        ctaTitle: "See what stress-free learning looks like",
        heroFormCta: "Start My Free Trial",
        trustText: "1,000,000+ students at 1,800+ universities trust JoVE",
        image: HeroImage,
        mobileImage: HeroImageMobile,
    },
    concepts: {
        heading: '<span>Every concept you need. </span>Zero fluff.',
        subheading: "One concept at a time, explained with AI-backed clarity.",
        features: [
            { icon: "ai", text: "AI-powered Platform" },
            { icon: "curriculum", text: "Curriculum-aligned" },
            { icon: "ad-free", text: "Ad-free learning" },
            { icon: "expert", text: "Expert-created content" },
            { icon: "secure", text: "Secure & private" },
        ],
        video: threeDStillImages,
        mobileVideo: mobileCarouselVideo,
        questions: [
            { icon: conceptsSectionIcon6, text: "Why does respiration release energy?" },
            { icon: conceptsSectionIcon7, text: "How does Newton's third law work?" },
            { icon: conceptsSectionIcon9, text: "Why don't satellites fall to Earth?" },
            { icon: conceptsSectionIcon6, text: "Why do enzymes speed up reactions?" }, 
            { icon: conceptsSectionIcon8, text: "How do catalysts work in chemistry?" },
            { icon: conceptsSectionIcon6, text: "What happens during DNA replication?" }, 
            { icon: conceptsSectionIcon7, text: "Why does light bend in water or glass?" },
            { icon: conceptsSectionIcon9, text: "How do chemical reactions reach equilibrium?" },
            { icon: conceptsSectionIcon6, text: "Difference between mitosis and meiosis?" }, 
            { icon: conceptsSectionIcon7, text: "Why don't satellites fall to Earth?" }, 
            { icon: conceptsSectionIcon9, text: "What causes an electric current to flow?" },
        ]
    },
    steps: {
        title: `JoVE Coach is more than a study tool - <span class="highlight">it's <img src="${conceptsSectionIcon1.src}" alt="JoVE Coach" style="width: 27px; height: auto; margin-bottom: -5px;" /> that helps you finally get it.</span>`,
        subtitle: "2-minute videos. AI-backed clarity. Instant practice.",
        discoverText: "Master Biology in 4 easy steps",
        items: [
            {
                id: "ask",
                icon: aILogo,
                title: "Ask",
                number: "STEP 1",
                headline: "Ask and get unstuck with AI",
                description: "No more scrolling. Just ask - and get the video and insights that crack it.",
                image: Jove_chat_video, 
            },
            {
                id: "watch",
                icon: videoPlay,
                title: "Watch",
                number: "STEP 2",
                headline: "Learn in minutes, Not hours",
                description: "Watch expert-verified videos that actually make sense",
                image: Jove_chat_Image2,
            },
            {
                id: "practise",
                icon: notePad,
                title: "Practise",
                number: "STEP 3",
                headline: "Quick quiz to see if it clicks",
                description: "Quick quiz after every video. See where you stand instantly.",
                image: Jove_chat_Image1,
            },
            {
                id: "master",
                icon: cupLogo,
                title: "Master",
                number: "STEP 4",
                headline: 'That "I actually get it" feeling-for real',
                description: "Crush one concept. Then the next. Build momentum.",
                image: Jove_chat_Image3,
            },
        ]
    },
    personas: {
        title: 'From struggling to mastery - <span class="highlight">we\'ve got you.</span>',
        subtitle: "Every learner is different. JoVE Coach fits them all.",
        items: [
            {
                image: LearnerPersonasImg1,
                title: "Visual learners who learn best by watching",
                description: "Not random videos. Expert explanations that click.",
            },
            {
                image: LearnerPersonasImg2,
                title: "Curious minds going beyond the syllabus",
                description: 'Understand the "why" behind the formula.',
            },
            {
                image: LearnerPersonasImg3,
                title: "Mastery seekers, not memorizers",
                description: "You're not here to memorize. You're here to actually get it.",
            },
            {
                image: LearnerPersonasImg4,
                title: "High schoolers building strong foundations",
                description: "Get the concepts right now. Ace exams later.",
            },
            {
                image: LearnerPersonasImg5,
                title: "Busy students juggling work, sports, and life",
                description: "Self-paced STEM learning that fits their schedule.",
            },
            {
                image: LearnerPersonasImg6,
                title: "College freshmen tackling Science 101s",
                description: "New subjects, fast pace. Master them from day one.",
            },
        ]
    },
    comparison: {
        title: 'See why students  <span class="highlight-blue">choose JoVE Coach</span>',
        subtitle: "20 years of science expertise makes the difference.",
        tagline: 'Better <span class="highlight-blue">content</span>. Better <span class="highlight-blue">value</span>. Better <span class="highlight-blue">results</span>.',
        ctaText: "Start My Free Trial",
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
                id: "khan",
                name: "Khan Academy",
                logo: comparisonTableLogo2,
                mobileLogo: wrappedLogo2,
            },
            {
                id: "youtube",
                name: "YouTube",
                logo: comparisonTableLogo3,
                mobileLogo: wrappedLogo3,
            },
            { id: "chatgpt", name: "ChatGPT", logo: comparisonTableLogo4 },
            { id: "chegg", name: "Chegg", logo: comparisonTableLogo5 },
        ],
        features: [
            {
                name: "2-minute focused videos",
                values: { jove: true, khan: false, youtube: false, chatgpt: false, chegg: false },
            },
            {
                name: "Expert-created content",
                values: { jove: true, khan: true, youtube: false, chatgpt: false, chegg: true },
            },
            {
                name: "Curriculum-aligned",
                values: { jove: true, khan: true, youtube: false, chatgpt: false, chegg: false },
            },
            {
                name: "Structured micro-courses",
                values: { jove: true, khan: true, youtube: false, chatgpt: false, chegg: false },
            },
            {
                name: "Verified accuracy",
                values: { jove: true, khan: true, youtube: false, chatgpt: false, chegg: false },
            },
            {
                name: "Science-focussed",
                values: { jove: true, khan: false, youtube: false, chatgpt: false, chegg: true },
            },
            {
                name: "20 years of academic trust",
                values: { jove: true, khan: false, youtube: false, chatgpt: false, chegg: false },
            },
        ],
    },
    firstCTA: {
        title: "Ready to try the smarter way?",
        subtitle: "Try it free and see why 1M+ students switched."
    },
    secondCTA: {
        title: 'Ready to try the 4 steps',
        subtitle: "Ask a question and watch science click."
    },
    pricing: {
        title: 'Built for students. <span>Priced like it.</span>',
        subtitle: 'Expert videos, AI explanations, and instant quizzes - without the stress.',
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
                price: "$29 / month",
                oldPrice: "NA",
                buttonText: "Try Monthly Plan",
                featuresListText: [{ listText: "Unlimited access" }, { listText: "Cancel anytime" }, { listText: "Renews Monthly" }],
            },
        ]
    },
    faq: {
        heading: "Frequently Asked Questions",
        items: [
            {
                question: "Is JoVE Coach free?",
                answer: "You can explore videos free-no sign-up needed. Want full access? Start a 7-day free trial to unlock all videos and micro courses.",
            },
            {
                question: "How long are the videos?",
                answer: "2 minutes. One concept, clearly explained. No filler.",
            },
            {
                question: "What are micro courses?",
                answer: "Bite-sized learning paths that group related videos together. Master a topic step by step-not just video by video.",
            },
            {
                question: "How is this different from YouTube?",
                answer: "Every video is made by science experts, not content creators. AI finds exactly what you need, and generates quizzes after each video-so you know if it actually clicked.",
            },
            {
                question: "Will JoVE Coach help me pass my exams?",
                answer: "That's what it's built for. Students who use JoVE Coach consistently report better understanding and 2X improved test scores.",
            },
            {
                question: "What subjects do you cover?",
                answer: "Biology, Chemistry, Physics, Statistics and more. More coming based on what students need.",
            },
            {
                question: "Can I cancel anytime?",
                answer: "Yes. No contracts, no fees, no hassle.",
            },
        ]
    },
    modal: {
        title: "The Smarter Way to Learn Science",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial"
    },
    footer: {
        title: "The Smarter Way to Learn Science",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial"
    }
};
