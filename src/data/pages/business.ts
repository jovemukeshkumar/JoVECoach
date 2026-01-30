
// Hero Images
// Hero Images
import HeroImage from "../../assets/business-desktop-v4.webp";
import HeroImageMobile from "../../assets/business-mobile.webp";
import biologyCarouselDesktop from "../../assets/business-carousel-desktop.webm";
import biologyCarouselMobile from "../../assets/business-carousel-mobile.webm";

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

export const businessJanData: LandingPageData = {
    hero: {
        title: 'Struggling with business basics? <br class="desktop-br" /> Master Them in <span class="highlight">2-Minute Videos.</span>',
        subtitle: "Finance, accounting, and economics—explained for real work, without long courses. 20 years of trusted education.",
        mobileSubtitle: "Finance, accounting, and economics—explained for real work.",
        ctaTitle: "See business concepts finally make sense",
        heroFormCta: "Start My Free Trial",
        trustText: "Trusted by 1 Million+ learners-from universities to workplaces.",
        image: HeroImage,
        mobileImage: HeroImageMobile,
    },
    concepts: {
        heading: '<span>Every concept you need. </span>Under 2 minutes.',
        subheading: "Understand how each idea connects to real-world decisions.",
        features: [
            { icon: "micro-courses", text: "500+ Micro-courses" },
            { icon: "industry", text: "Industry-aligned" },
            { icon: "ad-free", text: "Ad-free learning" },
            { icon: "expert", text: "Expert-created content" },
            { icon: "secure", text: "Secure & private" },
        ],
        video: biologyCarouselDesktop,
        mobileVideo: biologyCarouselMobile,
        videoPlaybackSpeed: 0.75,
        questions: [
            { icon: conceptsSectionIcon6, text: "How do markets determine prices and output?" },
{ icon: conceptsSectionIcon6, text: "Why does demand rise or fall?" },
{ icon: conceptsSectionIcon7, text: "How do producers respond to price changes?" },
{ icon: conceptsSectionIcon8, text: "How do markets reach equilibrium over time?" },
{ icon: conceptsSectionIcon6, text: "How do consumers make economic choices?" },
{ icon: conceptsSectionIcon7, text: "How do firms decide what to produce?" },
{ icon: conceptsSectionIcon6, text: "What determines a firm’s costs and profits?" },
{ icon: conceptsSectionIcon7, text: "How do financial statements reflect performance?" },
{ icon: conceptsSectionIcon8, text: "How do ratios reveal business health?" },
{ icon: conceptsSectionIcon6, text: "How does money grow over time?" },
{ icon: conceptsSectionIcon8, text: "How do risk and return relate?" },
        ]
    },
    steps: {
        title: `More than a learning tool - <span class="highlight">It's <img src="${conceptsSectionIcon1.src}" alt="JoVE Coach" style="width: 27px; height: auto; margin-bottom: -5px;" /> that makes business fundamentals click.</span>`,
        subtitle: "2-minute videos. AI-backed clarity. Instant practice.",
        discoverText: "Master business concepts in 4 simple steps.",
        items: [
            {
                id: "ask",
                icon: aILogo,
                title: "Ask",
                number: "STEP 1",
                headline: "Ask and get unstuck with AI",
                description: "No more scrolling. Just ask - and get the video and insights that crack it.",
                image: Jove_chat_video_biology, 
            },
            {
                id: "watch",
                icon: videoPlay,
                title: "Watch",
                number: "STEP 2",
                headline: "Learn in minutes, Not hours",
                description: "Watch expert-verified videos that actually make sense",
                image: Jove_chat_Image2_Biology,
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
                image: Jove_chat_Image3_Biology,
            },
        ]
    },
    personas: {
  title: 'From uncertainty to clarity — <span class="highlight">we’ve got you.</span>',
  subtitle: "Different roles. Same need for business clarity.",
  items: [
    {
      image: LearnerPersonasImg1,
      title: "Professionals without a finance background",
      description: "Everyday decisions. Clear financial thinking.",
    },
    {
      image: LearnerPersonasImg2,
      title: "Managers making business decisions",
      description: "Less guesswork. More confident decisions.",
    },
    {
      image: LearnerPersonasImg3,
      title: "Professionals stepping into leadership roles",
      description: "Build the fundamentals leaders expect..",
    },
    {
      image: LearnerPersonasImg4,
      title: "Non-finance roles with budgets",
      description: "Clarity on finance without becoming an accountant.",
    },
    {
      image: LearnerPersonasImg5,
      title: "Career switchers in business roles",
      description: "Strong foundations to transition with confidence.",
    },
    {
      image: LearnerPersonasImg6,
      title: "Busy professionals balancing work and life",
      description: "Packed schedules. 2-minute videos that fit.",
    },
  ]
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
                name: "Business-focussed",
                values: { jove: true, coursera: true, youtube: false, chatgpt: false, udemy: true },
            },
            {
                name: "20 years of academic trust",
                values: { jove: true, coursera: false, youtube: false, chatgpt: false, udemy: false },
            },
        ],
    },
    firstCTA: {
        title: "Ready for clearer business decisions?",
        subtitle: "Try it free and see how it fits your workday."
    },
    secondCTA: {
        title: 'Ready to try the 4 steps',
        subtitle: "Ask a question and watch business fundamentals click."
    },
    pricing: {
        title: 'Built for professionals. <span>Priced sensibly.</span>',
        subtitle: 'Expert videos, AI explanations, and quick checks—without long courses.',
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
    answer: "You can explore sample videos for free—no sign-up needed. Want full access? Start a 7-day free trial to unlock all business content and micro-courses.",
  },
  {
    question: "How long are the videos?",
    answer: "About 2 minutes each. One concept at a time, explained clearly—no filler.",
  },
  {
    question: "What are micro-courses?",
    answer: "Short learning paths that group related videos together, so you can understand a topic end-to-end—not just one concept in isolation.",
  },
  {
    question: "How is this different from YouTube or Coursera?",
    answer: "Every video is created by academic experts, not content creators. AI helps you find exactly what you need, when you need it—without long courses or distractions.",
  },
  {
    question: "Will JoVE Coach help me at work?",
    answer: "Yes. It’s built to help professionals understand finance, accounting, and economics clearly—so they can make better decisions with confidence.",
  },
  {
    question: "What business topics do you cover?",
    answer: "Business fundamentals including finance, accounting, microeconomics, and macroeconomics. More topics are added based on learner needs.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts, no hidden fees, and no hassle.",
  },
]
    },
    modal: {
        title: "A Smarter Way to Understand Business Fundamentals",
        subtitle: "Try Jove Coach and understand finance, accounting, and economics—fast.",
        ctaText: "Start My Free Trial"
    },
    footer: {
        title: "A Smarter Way to Understand Business Fundamentals",
        subtitle: "Try Jove Coach and understand finance, accounting, and economics—fast.",
        ctaText: "Start My Free Trial",
        image: footerValuesImage
    }
};
