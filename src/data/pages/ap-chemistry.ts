
// Hero Images
import HeroImage from "../../assets/ap-chem-hero-v2.webp";

import ChemistryCarouselDesktop from "../../assets/chemistry-carousel-desktop.webm";
import ChemistryCarouselMobile from "../../assets/chemistry-carousel-mobile.webm";


import conceptsImg1 from "../../assets/AP-Chem-1-v3.webp";
import conceptsImg2 from "../../assets/AP-Chem-2-v3.webp";
import conceptsImg3 from "../../assets/AP-Chem-3-v3.webp";
import conceptsImg4 from "../../assets/AP-Chem-4-v3.webp";
import conceptsImg5 from "../../assets/AP-Chem-5-v3.webp";

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

export const apChemistryData: LandingPageData = {
    hero: {
        title: 'AP Chem Feeling Impossible? <br class="desktop-br" /> Master It in <span class="highlight">2-Minute Videos.</span>',
        subtitle: "From confused to confident. Chemistry finally made simple. 20 years of trusted science education.",
        mobileSubtitle: "From confused to confident. Chemistry finally made simple.",
        ctaTitle: "See what stress-free learning looks like",
        heroFormCta: "Start Learning - It's Free",
        trustText: "1,000,000+ students at 1,800+ universities trust JoVE",
        image: HeroImage,
        mobileImage: HeroImage,
        heroModal: {
            title: "Watch the 2-Minute Video",
            subtitle: "Enter your details for instant access.",
            ctaText: "Continue to Video",
            videoSrc: ChemistryCarouselDesktop
        },
    },
    concepts: {
        heading: 'Every <span>AP Chemistry</span> concept you need. <span>Under 2 minutes.</span>',
        subheading: "One concept at a time, explained with short videos.",
        features: [
            { icon: "micro-courses", text: "500+ Micro-courses" },
            { icon: "curriculum", text: "Curriculum-aligned" },
            { icon: "ad-free", text: "Ad-free learning" },
            { icon: "expert", text: "Expert-created content" },
            { icon: "secure", text: "Secure & private" },
        ],
        video: ChemistryCarouselDesktop,
        mobileVideo: ChemistryCarouselMobile,
        videoPlaybackSpeed: 0.75,
        conceptCards: [
            { image: conceptsImg1, title: "Acid-Base Titration Curves", views: "141.5K", time: "2:23" },
            { image: conceptsImg2, title: "Kinetic Molecular Theory", views: "29.9K", time: "3:07" },
            { image: conceptsImg3, title: "Hess's Law", views: "55.6K", time: "3:39" },
            { image: conceptsImg4, title: "Molar Mass", views: "86.9K", time: "1:54" },
            { image: conceptsImg5, title: "Gibbs Free Energy", views: "39.1K", time: "2:39" },
        ],
        questions: [
            { icon: conceptsSectionIcon6, text: "What processes happen inside a variety of cells?" },
            { icon: conceptsSectionIcon6, text: "How does cellular respiration produce energy?" },
            { icon: conceptsSectionIcon6, text: "How exactly does photosynthesis create food?" },
            { icon: conceptsSectionIcon6, text: "What mechanisms trigger cell division?" }, 
            { icon: conceptsSectionIcon6, text: "Difference between mitosis and meiosis?" },
            { icon: conceptsSectionIcon6, text: "How is DNA copied during replication?" }, 
            { icon: conceptsSectionIcon6, text: "How do genes control biological traits?" },
            { icon: conceptsSectionIcon6, text: "Why do enzymes speed up chemical reactions?" }, 
            { icon: conceptsSectionIcon6, text: "How do cells communicate with each other?" }, 
            { icon: conceptsSectionIcon6, text: "What factors cause genetic mutations?" },
            { icon: conceptsSectionIcon6, text: "How do organisms maintain homeostasis?" },
        ]
    },
    steps: {
        title: `JoVE Coach is more than a study tool - <span class="highlight">it's <img src="${conceptsSectionIcon1.src}" alt="JoVE Coach" style="width: 27px; height: auto; margin-bottom: -5px;" /> that helps you finally get it.</span>`,
        subtitle: "2-minute videos. AI-backed clarity. Instant practice.",
        discoverText: "Master Chemistry in 4 easy steps",
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
                title: "Pre-med Chemistry students",
                description: "Medical science starts with Chemistry clarity.",
            },
            {
                image: LearnerPersonasImg2,
                title: "AP Chemistry students prepping for exams",
                description: 'Concepts first. Reactions that actually make sense.',
            },
            {
                image: LearnerPersonasImg3,
                title: "College freshmen in Chem 101",
                description: "Fast pace. Strong foundations from day one.",
            },
            {
                image: LearnerPersonasImg4,
                title: "Visual learners stuck on reactions & structures",
                description: "See Chemistry happen. Not just equations.",
            },
            {
                image: LearnerPersonasImg5,
                title: "Students stuck memorizing Chemistry",
                description: "Stop rote learning. Start reasoning.",
            },
            {
                image: LearnerPersonasImg6,
                title: "Busy students juggling coursework and life",
                description: "Packed schedule. 2-minute Chemistry explainers that fit.",
            },
        ]
    },
    comparison: {
        title: 'See why students  <span class="highlight-blue">choose JoVE Coach</span>',
        subtitle: "20 years of Chemistry expertise makes the difference.",
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
                name: "Science-focused",
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
        subtitle: "Ask a question and watch Chemistry click."
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
                price: "$29/month",
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
  answer: "Videos are created by science experts, not content creators. AI finds exactly what you need and adds quick quizzes to confirm it clicked.",
},
{
  question: "Will JoVE Coach help me pass my exams?",
  answer: "Yes. Students report better understanding and up to 2X improved test scores with consistent use.",
},
{
                question: "What AP Chemistry topics do you cover?",
                answer: "Atomic Structure, Thermodynamics, Equilibrium, Acids and Bases, and more.",
},
{
  question: "Can I cancel anytime?",
  answer: "Yes. No contracts, no fees, no hassle.",
}

        ]
    },
    modal: {
        title: "The Smarter Way to Learn AP Chemistry",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial"
    },
    footer: {
        title: "The Smarter Way to Learn AP Chemistry",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial"
    }
};
