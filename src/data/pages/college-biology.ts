
// Hero Images
import HeroImage from "../../assets/biology-new-hero.webp";
import biologyCarouselDesktop from "../../assets/biology-carousel-desktop.webm";
import biologyCarouselMobile from "../../assets/biology-carousel-mobile.webm";
import conceptsImg1 from "../../assets/biology-concepts-img1.webp"; // Placeholder
import conceptsImg2 from "../../assets/biology-concepts-img2.webp"; // Placeholder
import conceptsImg3 from "../../assets/biology-concepts-img3.webp"; // Placeholder
import conceptsImg4 from "../../assets/biology-concepts-img4.webp"; // Placeholder       
import conceptsImg5 from "../../assets/biology-concepts-img5.webp"; // Placeholder       

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
import Jove_chat_Image2_Biology from "../../assets/Jove_chat_Image2-Biology.png";
import Jove_chat_Image3_Biology from "../../assets/Jove_chat_Image3-Biology.png";
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

export const collegeBiologyData: LandingPageData = {
    hero: {
        title: 'Biology Feeling Impossible? <br class="desktop-br" /> Master It in <span class="highlight">2-Minute Videos.</span>',
        subtitle: "From confused to confident. Biology finally made simple. 20 years of trusted science education.",
        mobileSubtitle: "From confused to confident. Biology finally made simple.",
        ctaTitle: "See what stress-free learning looks like",
        heroFormCta: "Start Learning - It’s Free",
        trustText: "1,000,000+ students at 1,800+ universities trust JoVE",
        image: HeroImage,
        mobileImage: HeroImage,
    },
    concepts: {
        heading: 'Every <span>Biology</span> concept you need. <span>Under 2 minutes.</span>',
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
            { image: conceptsImg1, title: "Gene Evolution", views: "8.2K", time: "2:05" },
            { image: conceptsImg2, title: "Protein Synthesis & Translation", views: "156.8K", time: "1:31" },
            { image: conceptsImg3, title: "Gene Duplication & Divergence", views: "8.1K", time: "2:37" },
            { image: conceptsImg4, title: "Restriction Enzymes", views: "36.24K", time: "1:11" },
            { image: conceptsImg5, title: "Mitosis & Meiosis ", views: "70.6K", time: "2:58" },
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
        discoverText: "Master Biology in 4 easy steps",
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
                title: "Pre-med students tackling Biology",
                description: "High stakes. Get the clarity to stay ahead.",
            },
            {
                image: LearnerPersonasImg2,
                title: "AP Biology students prepping for exams",
                description: 'Master concepts before test day. No panic.',
            },
            {
                image: LearnerPersonasImg3,
                title: "College freshmen in Bio 101",
                description: "Fast pace. Strong foundations from day one.",
            },
            {
                image: LearnerPersonasImg4,
                title: "Visual learners struggling with cell processes",
                description: "Watch Biology come to life. Not read it.",
            },
            {
                image: LearnerPersonasImg5,
                title: "Students stuck memorizing Biology",
                description: "Clarity today. Confidence on exam day.",
            },
            {
                image: LearnerPersonasImg6,
                title: "Busy students juggling coursework and life",
                description: "Packed schedule. 2-minute videos that fit.",
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
        subtitle: "Ask a question and watch Biology click."
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
                question: "What Biology subjects do you cover?",
                answer: "Endocrine system, Cell Biology, Genetics and more.",
            },  
{
  question: "Can I cancel anytime?",
  answer: "Yes. No contracts, no fees, no hassle.",
}

        ]
    },
    modal: {
        title: "The Smarter Way to Learn Biology",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial"
    },
    footer: {
        title: "The Smarter Way to Learn Biology",
        subtitle: "Try Jove Coach for free and master concepts in minutes.",
        ctaText: "Start My Free Trial"
    }
};
