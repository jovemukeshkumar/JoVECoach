
// Hero Images
import HeroImage from "../../assets/anatomy-hero-image.webp";
import HeroVideo from "../../assets/anatomy-carousel-desktop.webm";

import biologyCarouselDesktop from "../../assets/anatomy-carousel-desktop.webm";
import biologyCarouselMobile from "../../assets/anatomy-carousel-mobile.webm";

import conceptsImg1 from "../../assets/anatomy-concepts-img1.webp";
import conceptsImg2 from "../../assets/anatomy-concepts-img2.webp";
import conceptsImg3 from "../../assets/anatomy-concepts-img3.webp";
import conceptsImg4 from "../../assets/anatomy-concepts-img4.webp";
import conceptsImg5 from "../../assets/anatomy-concepts-img5.webp";

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
import Jove_chat_Image2_Biology from "../../assets/jove-chat-2.png";
import Jove_chat_Image3_Biology from "../../assets/jove-chat-4.png";
import conceptsSectionIcon1 from "../../assets/micro-courses.svg";

// Concepts Icons (for questions)
import conceptsSectionIcon6 from "../../assets/conceptsSectionIcon6.svg";
import kidney from "../../assets/kidney.svg";
import organ from "../../assets/organ.svg";
import heart from "../../assets/heart.svg";
import lung from "../../assets/lung.svg";
import muscle from "../../assets/muscle.svg";

import hormone from "../../assets/hormone.svg";
import blood from "../../assets/blood.svg";


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

export const anatomyData: LandingPageData = {
    hero: {
        title: 'Anatomy & Physiology <br/>Feeling Impossible? <br/>Master It in <span class="highlight">2-Min Videos.</span>',
        subtitle: "From confused to confident. Anatomy and Physiology finally made simple for health science students. Backed by 20 years of trusted science education.",
        mobileSubtitle: "Anatomy and Physiology made simple for health science students.",
        ctaTitle: "See what stress-free learning looks like",
        heroFormCta:"Start Learning <strong> &nbsp;Anatomy&nbsp;</strong> for Free",
        trustText: "1,000,000+ students at 1,800+ universities trust JoVE",
        image: HeroImage,
        mobileImage: HeroImage,
    },
    concepts: {
        heading: 'Every <span>A&P</span> concept you need. <span>Under 2 minutes.</span>',
        subheading: "One concept at a time, explained with short videos.",
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
            { image: conceptsImg1, title: "Lymphatic System", views: "6.9K", time: "1:28" },
            { image: conceptsImg2, title: "Nervous System", views: "7.4K", time: "1:18" },
            { image: conceptsImg3, title: "Respiratory System", views: "10.1K", time: "1:23" },
            { image: conceptsImg4, title: "Digestive System", views: "3.3K", time: "1:25" },
            { image: conceptsImg5, title: "Endrocrine System", views: "14.2K", time: "1:10" },
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
        ],
        ctaText: "Explore Anatomy Courses"
    },
    steps: {
        title: `JoVE Coach is more than a study tool - <span class="highlight">it's <img src="${conceptsSectionIcon1.src}" alt="JoVE Coach" style="width: 27px; height: auto; margin-bottom: -5px;" /> that helps you finally get it.</span>`,
        subtitle: "2-minute videos. AI-backed clarity. Instant practice.",
        discoverText: "Master Anatomy & Physiology in 4 easy steps",
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
        title: 'From struggling to mastery - <span class="highlight">we\'ve got you.</span>',
        subtitle: "Every learner is different. JoVE Coach fits them all.",
        items: [
{
  image: LearnerPersonasImg1,
  title: "Pre-med students studying Anatomy",
  description: "High-stakes courses. Clear concepts you can trust.",
},
{
  image: LearnerPersonasImg2,
  title: "AP Biology students studying human systems",
  description: "Understand before exam day. No last-minute panic.",
},
{
  image: LearnerPersonasImg3,
  title: "College freshmen in Anatomy & Physiology",
  description: "Fast-paced classes. Strong foundations from day one.",
},
{
  image: LearnerPersonasImg4,
  title: "Visual learners understanding anatomy",
  description: "See how the body works — not just read about it.",
},
{
  image: LearnerPersonasImg5,
  title: "Students moving beyond memorization",
  description: "Real understanding. Not just rote learning.",
},
{
  image: LearnerPersonasImg6,
  title: "Busy students balancing labs, lectures, and life",
  description: "Packed schedules. 2-minute videos that actually fit.",
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
        subtitle: "Ask a question and watch Anatomy & Physiology click."
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
  question: "What Anatomy topics do you cover?",
  answer: "From cells and tissues to major systems—skeletal, muscular, nervous, cardiovascular, respiratory, and more.",
},
{
  question: "Can I cancel anytime?",
  answer: "Yes. No contracts, no fees, no hassle.",
}

        ]
    },
    modal: {
        title: "The Smarter Way to Learn Anatomy & Physiology",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial"
    },
    heroModal: {
        title: "Watch the 2-Minute Video",
        subtitle: "Enter your details for instant access.",
        ctaText: "Continue to Video",
        videoSrc: HeroVideo
    },
    footer: {
        title: "The Smarter Way to Learn Anatomy & Physiology",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial",
        seoText: "JoVE Coach offers Anatomy courses with expert-verified 2-minute videos across core human anatomy topics, including skeletal, muscular, nervous, cardiovascular and more."
    }
};
