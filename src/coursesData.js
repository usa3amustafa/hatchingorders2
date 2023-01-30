import datadatadata from './assets/datadatadata.webp'
import actionplans from './assets/actionplans.webp'
import timemanagement from './assets/timemanagement.webp'
import purposfulprograms from './assets/purposfulprograms.webp'
import postsecreadiness from './assets/postsecreadiness.webp'
import programdevelopmemnt from './assets/programdevelopmemnt.webp'
import intentionalschoolc from './assets/IntentionalSchoolCounseling.webp'
import reportingresults from './assets/reportingresults.webp'
import sysofchange from './assets/sysofchange.webp'
import miracleschallanges from './assets/miracleschallanges.webp'
import {
  faLaptop,
  faBook,
  faBookReader,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'

export const coursesData = [
  {
    id: 1,
    to: '/datadatadata',
    title: 'Data, Data, Data',
    bgImg: datadatadata,
    price: 300,
    new: false,
    pathway: 'datapathway',
    courseDesc: {
      desc: [`Use of Data in School Counseling (2nd Edition)`],

      courseDescListItems: [
        `This course is an introduction to how school counselors and educators can begin to use data in designing, implementing, evaluating and improving school counseling and other programs in schools.`,
        `Students who take this course will gain the following attitudes, knowledge, and skills.`,
      ],

      note: `A Digitial ebook version of this text is included with each purchase.`,
    },
    attitudes: [
      `Believe in the value of collecting data`,
      `Believe using data can effect change in students`,
      `Believe it is important to chart goals, objectives, and outcome`,
      `Believe it is important to disaggregate data`,
      `Believe it is important for school counselors to be experts in certain data sets`,
      `Believe it is important to use data to design interventions`,
    ],

    knowledge: [
      `Identify accessible sources of school data`,
      `identify achievement-related and achievement-data`,
      `Describe the purpose of data collection`,
      `Compare and contrast process, perception, and results data`,
      `Explain the ASK acronym`,
      `Define immediate, intermediate, and long-range data`,
    ],

    skills: [
      `Locate data via online data resources`,
      `Draw a visual that explains data linkages`,
      `Create measurable outcome goals`,
      `Draw the Hatching Results conceptual diagram`,
      `Explain the conceptual diagram for intentional guidance`,
      `Create the conceptual diagram for systems change`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },
      {
        id: 3,
        icon: faBookReader,
        title: 'Suggested Readings',
        desc: `American School Counselor Association. (2022). The ASCA national model: A framework for school counseling programs (4th ed.). Alexandria, VA. Author.`,
      },
      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 2,
    title: 'It’s All About Time (Management)',
    to: '/timemanagement',
    price: 300,
    new: false,
    pathway: 'datapathway',
    bgImg: timemanagement,
    courseDesc: {
      desc: [
        `This course concentrates on Chapter 9, Finding (Making) Time: Setting Priorities from The Use of Data in School Counseling: Hatching Results (and So Much More) for Students, Programs and the Profession. School Counselors and other professionals will be guided through the text with on-demand videos from Julie Harline, a co-author of the book, as well as hands-on experiences, practical resources, and recommendations they can use to support the work of a professional school counselor.`,

        `Counselors who complete this course will not only believe in the importance of using their time effectively, but they will develop the knowledge and skills necessary to begin implementing efficient processes and procedures to improve their school counseling program. Counselors will also learn about the importance of setting priorities, developing systems, and delivering the work of a professional school counselor.`,
      ],
    },

    courseTopics: [
      `Breaking the Cycle of Reactivity`,
      `Worth A Master’s Degree?`,
      `Calendars`,
      `Tracking Time`,
      `The Annual Administrative Conference`,
      `Time Suckers`,
    ],

    attitudes: [
      `Believe in the importance of planning and calendaring.`,
      `Believe in the importance of prioritizing activities “worth a master’s degree.”`,
      `Believe in the importance of having an annual
      administrative conference.`,
    ],

    knowledge: [
      `Explain the professional responsibilities of school counselors.`,
      `Explain the difference between a starter and a utility player.`,
      `Discuss methods of assigning students to counselors.`,
      `Describe how student-to-counselor ratios affect schedule planning.`,
      `Define the school counselor’s role in discipline`,
      `Define the school counselor’s role in Student Study Teams (SST), 504 plans, and Individualized Education Program (IEP) teams`,
      `Define the school counselor’s role in the master schedule building`,
    ],

    skills: [
      `Create a detailed monthly calendar of events and
activities`,
      `Draft a list of responsibilities
for secretaries and assistants`,
      `Complete an Annual
Administrative Conference
Template`,
      `Initiate a Counselor of the
Day system for urgent needs
at the school`,
      `Plan and organize meetings
with colleagues`,
      `Complete a Plate Is Full
Activity`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },
      {
        id: 3,
        icon: faBookReader,
        title: 'Suggested Readings',
        desc: `American School Counselor Association. (2022). The ASCA national model: A framework for school counseling programs (4th ed.). Alexandria, VA. Author.`,
      },
      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 3,
    title: 'Tier 1 Action Plans & Pre/Post Tests',
    to: '/actionplans',
    price: 300,
    new: false,
    bgImg: actionplans,
    pathway: 'datapathway',
    courseDesc: {
      desc: [
        `This course concentrates on portions from chapters 1, 5, 6, & 7 from The Use of Data in School Counseling 2e: Hatching Results (and So Much More) for Students, Programs and the Profession.`,
        `School counselors and other professionals will be guided through the text with on-demand videos from Julie Hartline, Ed.D. and Trish Hatch, Ph.D. co-authors of the book, as well as hands-on experiences, practical resources, and recommendations they can use to support the work of a professional school counselor.`,
        `Additionally, they will develop the knowledge and skills necessary to begin analyzing their schoolwide Tier 1 counseling curriculum and will learn to create pre/post-tests to assess students’ attitudes, knowledge, and skills as well as learning to make necessary changes for future lesson improvement. This course will not only prove to be valuable in analyzing current school counseling programs but will elevate the development of future school counseling curriculum.`,
      ],
    },

    attitudes: [
      `  Believe in the importance of developing schoolwide counseling curriculum scope and sequence`,
      ,
      `Believe school counselors must assess the impact of their lessons`,
      `Believe in the importance of administrator collaboration and approval of action plans`,
    ],

    knowledge: [
      `Explain the history and purpose behind standards-based education and school counseling standards`,
      `Identify desired characteristics of graduates`,
      `Describe ways to garner faculty input on school counseling curriculum`,
      `Differentiate among the three types of questions used on pre-/post tests and when to use each one`,
      `Identify school counseling curriculum that addresses the identified needs of students`,
      `Explain the guidelines for using curriculum action plans`,
    ],

    skills: [
      `Align ASCA Mindsets & Behavior Standards with desired characteristics`,
      `Draft a schoolwide counseling curriculum scope and sequence for your grade level`,
      `Analyze a schoolwide counseling curriculum scope and sequence, and make suggestions for improvement`,
      `Create a pre/posttest assessing students’ attitudes, knowledge, and skills`,
      `Develop an engaging lesson plan`,
      `Create a curriculum action plan for the school`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },
      {
        id: 3,
        icon: faBookReader,
        title: 'Suggested Readings',
        desc: `American School Counselor Association. (2022). The ASCA national model: A framework for school counseling programs (4th ed.). Alexandria, VA. Author.`,
      },
      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 4,
    title: 'Postsecondary Readiness for Middle School',
    to: '/postsecondaryreadiness',
    price: 300,
    pathway: 'postsecpathway',
    new: false,
    bgImg: postsecreadiness,
    courseDesc: {
      desc: [
        `This course is the first of a three part series helping schools define college and career readiness for middle school students. Through the use of concrete examples and hands-on experiences this course is specifically designed to explain the role of postsecondary readiness and success for middle school counselors and college and career advisors.`,
      ],
    },

    courseTopics: [
      `Intro to Postsecondary Planning and Readiness`,
      `Exploration of Postsecondary Options`,
      `The Value of a College Degree`,
      `Tracking Time`,
      `Middle School Development for Postsecondary Planning`,
      `Building Middle School Students’ Motivation`,
    ],

    attitudes: [
      `Believe that supporting middle school students with postsecondary readiness will open opportunities for them later in life.`,
      `Feel confident in their ability to engage middle school students in postsecondary exploration and planning.`,
    ],

    knowledge: [
      `Differentiate between the roles of middle school counselors and college and career advisors in supporting students with postsecondary readiness.`,
      `Explain why it is important for students to understand what postsecondary options are available to them`,
      `Explain outside influences that impact student motivation and employ equitable strategies for eliciting developmentally appropriate motivation in middle schoolers`,
    ],

    skills: [
      `Draft an action plan for engaging middle school students in their own postsecondary readiness work`,
      `Assist students in developing stronger self-efficacy towards their postsecondary goals.`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },

      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 5,
    title: 'Program Development for Middle School Postsecondary Readiness',
    to: '/programdevelopment',
    price: 300,
    new: false,
    pathway: 'postsecpathway',
    bgImg: purposfulprograms,
    courseDesc: {
      desc: [
        `TThis is the second course of a three part series, helping schools define college and career readiness for middle school students.`,
        `School counselors and college access partners will learn how using the Multi-Tiered, Multi-Domain System of Supports (MTMDSS), promotes postsecondary readiness for all.`,
        `This course is specifically designed to explain how to use data to determine which college and career services are provided to every student and how to identify students who need additional support.`,
        `Through the use of concrete examples and hands-on experiences, participants of the course will develop an effective delivery of college and career readiness services.`,
      ],
    },

    attitudes: [
      `Believe in the importance of developing schoolwide counseling curriculum scope and sequence`,
      `Believe school counselors must assess the impact of their lessons`,
      `Believe in the value of data to inform the development of college and career services`,
      `Believe in the importance of supporting college and career readiness for diverse student populations`,
    ],

    knowledge: [
      `Explain the school counselor's and college advisor's role within Multi-Tiered (Multi-Domain) System of Supports`,
      `Understand the importance of implementing a
Multi-Tiered, Multi-Domain System of Supports to develop middle school postsecondary readiness.`,
      `Explain the role of data in the development of Multi-Tiered (Multi-Domain) System of Supports in Tiers 1, 2 & 3
`,
      `Differentiate between achievement-related and achievement-data`,
      `Describe the purpose of data collection`,
      `Compare and contrast process, perception, and results data`,
      `Explain the ASK acronym`,
    ],

    skills: [
      `Develop ideas and strategies to create programs and
services for middle school students postsecondary readiness.`,
      `Distinguish Tier 1 activities that all students should
receive to support
postsecondary readiness`,
      `Distinguish which Tier 2 & 3
activities students should receive to support their postsecondary readiness`,
      `Examine your school's current use of data and
determine what additional data is needed to begin supporting your students' postsecondary readiness`,
      `Create a Flashlight, 1-Pager, or Highlight Reel to showcase results of Tier 1 instruction`,
      `Create charts/graphs that highlight student success and outcomes`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },

      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 6,
    title:
      'Implementing Purposeful Programs & Services for Middle School Postsecondary ReadinessProgram Development for Middle School Postsecondary Readiness',
    to: '/purposefulprograms',
    price: 300,
    new: false,
    pathway: 'postsecpathway',
    bgImg: programdevelopmemnt,
    courseDesc: {
      desc: [
        `This is the third course in a three part series, helping schools define college and career readiness for middle school students. School counselors and college access partners go in depth through the eight components of college and career
readiness counseling to support the postsecondary development of middle school students. In this course, participants will not only learn about essential elements and tools available for college and career readiness, but how to incorporate them within the Mutli-Tiered Mutli-Domain System of Supports (MTMDSS). In addition, school counselors and college access partners will be provided multiple resources, examples, and opportunities to develop a comprehensive college and career readiness program for their students and families.`,
      ],
    },

    attitudes: [
      `Believe in the value of implementing the eight components of college and career counseling`,
      `Believe it is important to provide clear oncoming communication to students, teachers and families to promote a college going culture`,
      `Believe all students should have access to academic planning and support to prepare them for their postsecondary goals`,
      `Believe in the importance of collaborating with local high schools to provide academic planning and articulation`,
    ],

    skills: [
      `Develop and implement core components of college and career counseling within the Multi-Tiered, Multi-Domain System of Supports for middle school students postsecondary readiness.`,
      `Evaluate current college and career program as it pertains to each component of college & career readiness`,
      `Develop ideas and strategies to implement a college and career culture at the middle school`,
      `Design programs and services to support
academic success for all
students`,
      `Examine the role of course
sequencing to prepare middle school students for advanced course work`,
      `Develop college & career exploration systems of
support for middle school
students`,
      `Develop a plan to provide
financial aid information to students and their families`,
    ],

    knowledge: [
      `Understand the Eight Components of College and Career Counseling.`,
      `Explain the value of developing a strong college and career culture on a middle school campus`,
      `Explain the importance of providing challenging academic curriculum to prepare middle school students for college and career readiness`,
      `Differentiate between values, skills, and interests for career exploration`,
      `Distinguish between different types of financial aid`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },

      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 7,
    title: 'Intentional School Counseling & Tier 2 Interventions',
    to: '/internationalschoolcounseling',
    price: 300,
    pathway: 'postsecpathway',
    bgImg: intentionalschoolc,
    new: true,
    courseDesc: {
      desc: [
        `This course concentrates on portions from chapters 2, 5, 6, & 7 from The Use of Data in School Counseling 2e: Hatching Results (and So Much More) for Students, Programs and the Profession. School Counselors and other professionals will be guided through the text with on-demand videos from Julie Hartline, one of the co-authors of the book, as well as hands-on experiences, practical resources, and recommendations they can use to support the work of a professional school counselor.`,
        `Counselors who complete this course will understand the rationale for delivering interventions for those students who need “more” and will learn how to identify these students using data. Additionally, they will learn how to select evidence-based interventions, match interventions to student needs, develop Tier 2 action plans, and assess the effectiveness of the intervention.`,
      ],
    },

    attitudes: [
      `Believe that intentional Tier 2 school counseling activities are data-driven`,
      `Believe surveying at-promise students will provide for better-targeted interventions`,
      `Believe in the importance of using referral forms`,
      `Believe the fishnet approach will help students receive more appropriate interventions`,
      `Believe in the value of having a menu of services`,
    ],

    knowledge: [
      `Explain the Multi-Tiered, Multi-Domain System of Supports.`,
      `Understand the difference between Tiers 2 & 3`,
      `Define intentional school counseling`,
      `Define when and how to use the fishnet approach`,
      `Identify which group curriculum is evidence based.`,
      `Explain the guidelines for using intentional school counseling action plans`,
    ],

    skills: [
      `Create surveys to determine root causes for at-promise students`,
      `Create school counselor referral forms`,
      `Determine Tier 2 data elements`,
      `Determine an appropriate Tier 2 intervention to address a student need`,
      `Create a pre-/posttest assessing students’ attitudes, knowledge, and skills`,
      `Create an intentional school counseling action plan`,
      `Create a menu of services`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },
      {
        id: 3,
        icon: faBookReader,
        title: 'Suggested Readings',
        desc: `American School Counselor Association. (2022). The ASCA national model: A framework for school counseling programs (4th ed.). Alexandria, VA. Author.`,
      },
      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 8,
    title: 'Reporting Results & the Flashlight Approach',
    to: '/comingsoon',
    price: 'Coming Soon',
    pathway: 'postsecpathway',
    bgImg: reportingresults,
    new: false,
    courseDesc: {
      desc: [
        `This is the third course in a three part series, helping schools define college and career readiness for middle school students. School counselors and college access partners go in depth through the eight components of college and career
readiness counseling to support the postsecondary development of middle school students. In this course, participants will not only learn about essential elements and tools available for college and career readiness, but how to incorporate them within the Mutli-Tiered Mutli-Domain System of Supports (MTMDSS). In addition, school counselors and college access partners will be provided multiple resources, examples, and opportunities to develop a comprehensive college and career readiness program for their students and families.`,
      ],
    },

    attitudes: [
      `Believe in the value of implementing the eight components of college and career counseling`,
      `Believe it is important to provide clear oncoming communication to students, teachers and families to promote a college going culture`,
      `Believe all students should have access to academic planning and support to prepare them for their postsecondary goals`,
      `Believe in the importance of collaborating with local high schools to provide academic planning and articulation`,
    ],

    skills: [
      `Develop and implement core components of college and career counseling within the Multi-Tiered, Multi-Domain System of Supports for middle school students postsecondary readiness.`,
      `Evaluate current college and career program as it pertains to each component of college & career readiness`,
      `Develop ideas and strategies to implement a college and career culture at the middle school`,
      `Design programs and services to support
academic success for all
students`,
      `Examine the role of course
sequencing to prepare middle school students for advanced course work`,
      `Develop college & career exploration systems of
support for middle school
students`,
      `Develop a plan to provide
financial aid information to students and their families`,
    ],

    knowledge: [
      `Understand the Eight Components of College and Career Counseling.`,
      `Explain the value of developing a strong college and career culture on a middle school campus`,
      `Explain the importance of providing challenging academic curriculum to prepare middle school students for college and career readiness`,
      `Differentiate between values, skills, and interests for career exploration`,
      `Distinguish between different types of financial aid`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },

      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 9,
    title: 'Intentional School Counseling for Systems of Change',
    to: '/comingsoon',
    price: 'Coming Soon',
    pathway: 'postsecpathway',
    bgImg: sysofchange,
    new: false,
    courseDesc: {
      desc: [
        `This is the third course in a three part series, helping schools define college and career readiness for middle school students. School counselors and college access partners go in depth through the eight components of college and career
readiness counseling to support the postsecondary development of middle school students. In this course, participants will not only learn about essential elements and tools available for college and career readiness, but how to incorporate them within the Mutli-Tiered Mutli-Domain System of Supports (MTMDSS). In addition, school counselors and college access partners will be provided multiple resources, examples, and opportunities to develop a comprehensive college and career readiness program for their students and families.`,
      ],
    },

    attitudes: [
      `Believe in the value of implementing the eight components of college and career counseling`,
      `Believe it is important to provide clear oncoming communication to students, teachers and families to promote a college going culture`,
      `Believe all students should have access to academic planning and support to prepare them for their postsecondary goals`,
      `Believe in the importance of collaborating with local high schools to provide academic planning and articulation`,
    ],

    skills: [
      `Develop and implement core components of college and career counseling within the Multi-Tiered, Multi-Domain System of Supports for middle school students postsecondary readiness.`,
      `Evaluate current college and career program as it pertains to each component of college & career readiness`,
      `Develop ideas and strategies to implement a college and career culture at the middle school`,
      `Design programs and services to support
academic success for all
students`,
      `Examine the role of course
sequencing to prepare middle school students for advanced course work`,
      `Develop college & career exploration systems of
support for middle school
students`,
      `Develop a plan to provide
financial aid information to students and their families`,
    ],

    knowledge: [
      `Understand the Eight Components of College and Career Counseling.`,
      `Explain the value of developing a strong college and career culture on a middle school campus`,
      `Explain the importance of providing challenging academic curriculum to prepare middle school students for college and career readiness`,
      `Differentiate between values, skills, and interests for career exploration`,
      `Distinguish between different types of financial aid`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },

      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },

  {
    id: 10,
    title: 'Miracles and Challenges in the School Counseling Profession',
    to: '/comingsoon',
    price: 'Coming Soon',
    pathway: 'postsecpathway',
    new: false,
    bgImg: miracleschallanges,
    courseDesc: {
      desc: [
        `This is the third course in a three part series, helping schools define college and career readiness for middle school students. School counselors and college access partners go in depth through the eight components of college and career
readiness counseling to support the postsecondary development of middle school students. In this course, participants will not only learn about essential elements and tools available for college and career readiness, but how to incorporate them within the Mutli-Tiered Mutli-Domain System of Supports (MTMDSS). In addition, school counselors and college access partners will be provided multiple resources, examples, and opportunities to develop a comprehensive college and career readiness program for their students and families.`,
      ],
    },

    attitudes: [
      `Believe in the value of implementing the eight components of college and career counseling`,
      `Believe it is important to provide clear oncoming communication to students, teachers and families to promote a college going culture`,
      `Believe all students should have access to academic planning and support to prepare them for their postsecondary goals`,
      `Believe in the importance of collaborating with local high schools to provide academic planning and articulation`,
    ],

    skills: [
      `Develop and implement core components of college and career counseling within the Multi-Tiered, Multi-Domain System of Supports for middle school students postsecondary readiness.`,
      `Evaluate current college and career program as it pertains to each component of college & career readiness`,
      `Develop ideas and strategies to implement a college and career culture at the middle school`,
      `Design programs and services to support
academic success for all
students`,
      `Examine the role of course
sequencing to prepare middle school students for advanced course work`,
      `Develop college & career exploration systems of
support for middle school
students`,
      `Develop a plan to provide
financial aid information to students and their families`,
    ],

    knowledge: [
      `Understand the Eight Components of College and Career Counseling.`,
      `Explain the value of developing a strong college and career culture on a middle school campus`,
      `Explain the importance of providing challenging academic curriculum to prepare middle school students for college and career readiness`,
      `Differentiate between values, skills, and interests for career exploration`,
      `Distinguish between different types of financial aid`,
    ],

    faqItems: [
      {
        id: 1,
        icon: faLaptop,
        title: 'Instructor Methods and Course Design',
        desc: `This course is designed to be self-paced to accommodate hectic schedules. Course goals will be met using a combination of readings from the included e-textbook, videos, activities, and other supplemental readings. Learnings from each lesson can be immediately implemented in the school building.`,
      },
      {
        id: 2,
        icon: faBook,
        title: 'Best-Selling ebook Included',
        desc: `Hatch, T. & Hartline, J. (2021). The use of data in school counseling: Hatching results (and so much more) for students, programs, and the profession. Thousand Oaks, CA: Corwin.`,
      },

      {
        id: 4,
        icon: faBuilding,
        title: 'Self-Paced Course',
        desc: `Challenge yourself to become an expert in creating comprehensive school counseling programs. Learn how to utilize data to design, implement and evaluate your school counseling program to ensure that all students are supported in the academic, social/emotional, college and career readiness domains.`,
        note: `Note: You'll Earn a Certificate of Completion from Hatching Results`,
      },
    ],
  },
]

export const getCourseData = id => {
  const courseData = coursesData.find(item => {
    if (item.id === id) {
      return {
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        title: item.title,
      }
    }
  })
  return courseData
}
