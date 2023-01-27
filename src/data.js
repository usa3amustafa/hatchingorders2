// header slides images
import headerBg1 from './assets/headerImg.png'
import headerBg2 from './assets/iowaHeaderImg.png'
import headerBg3 from './assets/arizonaHeaderImg.png'

// arizonaHeaderImgs
import arizonaHeaderImg1 from './assets/arizonaHeader1.png'
import iowaHeaderImg1 from './assets/iowaHeader1.png'

// course card img
import courseCardImg from './assets/course-img.jpg'

// meetpathways cards bg
import meetPathwaysCardImg from './assets/pathways.jpg'

// section header bg
import sectionHeaderBg from './assets/sectionHeaderBg.png'

// about slides images
import aboutSlideOneImg from './assets/ourMission.png'

// value images
import valueImg1 from './assets/valueImg1.png'
import valueImg2 from './assets/valueImg2.png'
import valueImg3 from './assets/valueImg3.png'
import valueImg4 from './assets/valueImg4.png'
import valueImg5 from './assets/valueImg5.png'

// our story bg
import ourStoryBg from './assets/ourStoryBg.png'

// team members images
import teamMemberOne from './assets/member1.png'
import teamMemberTwo from './assets/member2.png'
import teamMemberThree from './assets/member3.png'
import teamMemberFour from './assets/member4.png'
import teamMemberFive from './assets/member5.png'
import teamMemberSix from './assets/member6.png'

// meetpathways images
import datapathwaycard from './assets/datapathwaycard.png'
import postsecpathwaycard from './assets/postsecpathwaycard.png'

// courses data
import { coursesData } from './coursesData'

const data = {
  navbarData: {
    navLinks: [
      {
        title: 'Home',
        to: '',
      },
      {
        title: 'Courses',
        submenu: [
          {
            title: 'Data Pathways',
            submenu: [
              {
                title: 'Data, Data, Data',
                to: 'datadatadata',
              },
              {
                title: 'It’s All About Time (Management)',
                to: 'timemanagement',
              },
              {
                title: 'Tier 1 Action Plans & Pre/Post Tests',
                to: 'actionplans',
              },
            ],
          },
          {
            title: 'Post Secondary Readiness pathways',
            submenu: [
              {
                title: 'Postsecondary Readiness for Middle School',
                to: 'postsecondaryreadiness',
              },
              {
                title:
                  'Program Development for Middle School Postsecondary Readiness',
                to: 'programdevelopment',
              },
              {
                title:
                  'Implementing Purposeful Programs & Services for Middle School Postsecondary Readiness',
                to: 'purposefulprograms',
              },
            ],
          },
        ],
      },
      {
        title: 'University Credits',
        to: 'universitycredits',
      },
      {
        title: 'About',
        to: 'about',
      },
    ],
  },

  homeData: {
    headerSliderData: [
      {
        id: 1,
        title: 'Learn New Skills',
        to: '/',
        subTitle: 'Learn from the Best',
        desc: `Want to learn something new? Check out our selection of high quality online courses from the best online instructors in counseling. Develop your skills and knowledge today!`,
        bgImg: headerBg1,
      },
      {
        id: 2,
        title:
          'Are You a School Counselor in Iowa Looking to Renew Your License?',
        to: 'iowa',

        desc: `Hatching Results courses allow Iowa School Counselors to complete one Iowa License Renewal credit per course. Each course is approved by the Iowa Board of Educational Examiners through the Iowa State Education Association (ISEA) which is a state affiliate of the National Education Association (NEA).`,
        bgImg: headerBg2,
        className: 'iowaBtn',
      },
      {
        id: 3,
        title:
          'Are You a School Counselor in Iowa Looking to Renew Your License?',
        to: 'arizona',

        desc: `Hatching Results courses allow Iowa School Counselors to complete one Iowa License Renewal credit per course. Each course is approved by the Iowa Board of Educational Examiners through the Iowa State Education Association (ISEA) which is a state affiliate of the National Education Association (NEA).`,
        bgImg: headerBg3,
        className: 'arizonaBtn',
      },
    ],

    newArrivalsData: {
      title: 'new arrival',
      desc: `Whether you're looking to learn new skills, receritify your license, earn continuing ed or grad school units, our engaging and interactive online courses are here for you!`,
      courseCards: coursesData,
    },

    meetPathwaysData: {
      title: 'Meet Our Pathways',
      meetPathwaysCards: [
        {
          id: 1,
          title: 'data pathways',
          bgImg: datapathwaycard,
        },
        {
          id: 2,
          title: 'Post Secondary Pathways',
          bgImg: postsecpathwaycard,
        },
      ],
    },

    coursesGridData: {
      leftColItem: coursesData[0],
      rightColItems: [
        coursesData[1],
        coursesData[2],
        coursesData[3],
        coursesData[4],
      ],
    },
  },

  iowaData: {
    headerSliderData: [
      {
        id: 2,
        title:
          'Are You a School Counselor in Iowa Looking to Renew Your License?',

        desc: `Hatching Results courses allow Iowa School Counselors to complete one Iowa License Renewal credit per course. Each course is approved by the Iowa Board of Educational Examiners through the Iowa State Education Association (ISEA) which is a state affiliate of the National Education Association (NEA).`,
        bgImg: iowaHeaderImg1,
        className: 'iowaBtn',
      },

      {
        id: 1,
        title:
          'Are You a School Counselor in Iowa Looking to Renew Your License?',

        desc: `Hatching Results courses allow Iowa School Counselors to complete one Iowa License Renewal credit per course. Each course is approved by the Iowa Board of Educational Examiners through the Iowa State Education Association (ISEA) which is a state affiliate of the National Education Association (NEA).`,
        bgImg: arizonaHeaderImg1,
        className: 'arizonaBtn',
      },

      {
        id: 3,
        title: 'Learn New Skills',
        subTitle: 'Learn from the Best',
        desc: `Want to learn something new? Check out our selection of high quality online courses from the best online instructors in counseling. Develop your skills and knowledge today!`,
        bgImg: arizonaHeaderImg1,
      },
    ],
  },

  arizonaData: {
    headerSliderData: [
      {
        id: 1,
        title:
          'Are You a School Counselor in Iowa Looking to Renew Your License?',

        desc: `Hatching Results courses allow Iowa School Counselors to complete one Iowa License Renewal credit per course. Each course is approved by the Iowa Board of Educational Examiners through the Iowa State Education Association (ISEA) which is a state affiliate of the National Education Association (NEA).`,
        bgImg: arizonaHeaderImg1,
        className: 'arizonaBtn',
      },

      {
        id: 2,
        title:
          'Are You a School Counselor in Iowa Looking to Renew Your License?',

        desc: `Hatching Results courses allow Iowa School Counselors to complete one Iowa License Renewal credit per course. Each course is approved by the Iowa Board of Educational Examiners through the Iowa State Education Association (ISEA) which is a state affiliate of the National Education Association (NEA).`,
        bgImg: iowaHeaderImg1,
        className: 'iowaBtn',
      },

      {
        id: 3,
        title: 'Learn New Skills',
        subTitle: 'Learn from the Best',
        desc: `Want to learn something new? Check out our selection of high quality online courses from the best online instructors in counseling. Develop your skills and knowledge today!`,
        bgImg: arizonaHeaderImg1,
      },
    ],
  },

  aboutData: {
    sectionHeaderData: {
      bgImg: sectionHeaderBg,
      title: 'About Hatching Results',
    },

    ourMissionData: {
      title: 'our mission',
      desc: `Hatching Results® provides an extensive variety of professional
      services designed to improve school counseling programs. Utilizing
      evidence-based practice models, Hatching Results brings leadership,
      training and consultation to school counselors, administrators, and
      school district leaders seeking to improve their comprehensive
      school counseling programs. With the goal of improving efficiency
      and effectiveness, we use data to drive decision-making and evaluate
      the impact of programs and services timprove outcomes for all K-12
      students.`,
      ctaText: 'Learn more',
      slides: [
        {
          id: 1,
          title: 'Action Plan and Pre and ',
          price: '$399.00',
          img: aboutSlideOneImg,
        },
        {
          id: 2,
          title: 'Action Plan and Pre and Post Tests',
          price: '$399.00',
          img: aboutSlideOneImg,
        },
        {
          id: 3,
          title: 'Action Plan and Pre and Post Tests',
          price: '$399.00',
          img: aboutSlideOneImg,
        },
        {
          id: 4,
          title: 'Action Plan and Pre and Post Tests',
          price: '$399.00',
          img: aboutSlideOneImg,
        },
        {
          id: 5,
          title: 'Action Plan and Pre and Post Tests',
          price: '$399.00',
          img: aboutSlideOneImg,
        },
      ],
    },

    coreValuesData: {
      coreValuesTitle: 'our core values',
      values: [
        {
          id: 1,
          title: 'Evolution Of Knowledge',
          desc: 'Evolving with the indusrty',
          colorClass: 'valueTitleGreen',
          img: valueImg1,
        },
        {
          id: 2,
          title: 'Globaly Recognized',
          desc: 'Global standard for councilers',
          colorClass: '',
          img: valueImg2,
        },
        {
          id: 3,
          title: 'Online Education',
          desc: 'Take Courses on the go',
          colorClass: 'valueTitleYellow',
          img: valueImg3,
        },
        {
          id: 4,
          title: 'Best Selling EBook',
          desc: 'Course come with Resources',
          colorClass: '',
          img: valueImg4,
        },
        {
          id: 5,
          title: 'University Credits',
          desc: 'Courses offered with University Credits',
          colorClass: 'valueTitleSec',
          img: valueImg5,
        },
      ],
    },

    ourStoryData: {
      ourStoryBg: ourStoryBg,
      title: 'our story',
      ourStoryDesc: [
        {
          id: 1,
          desc: `
          As a team of four female founders, we started Aloisia Beauty to
          pursue a shared passion: creating clean, effective, affordably
          luxurious skincare that leads to real results. We believe in
          high-performing formulas that can be used on all skin types, while
          also targeting individual concerns to help everyone and anyone
          achieves their dream skin.`,
        },
        {
          id: 2,
          desc: `
          Our products turn your skincare routine into everyday moments of
          self-indulgence, so you can Breathe In, Glow Out ™.`,
        },
        {
          id: 3,
          desc: `
          We took the leap to develop our own brand after spending our careers
          building others across the fashion, celebrities, science wellness
          industries. As fate would have it, our friend Jacob, a scientist
          from South Korea, was interested in joining our mission as a
          founding partner and introduced us to the Korean Beauty Philosophy.
          Representing various ethnicities, we were already well-versed in
          exploring and appreciating different cultural approaches to
          skincare. We quickly fell in love with everything about Korean
          Beauty: The use of clean, proven plant-derived ingredients, the
          cutting-edge innovations, the core mantra of respecting the skin
          first and the ritual of self-care. Plus, as moms, we were drawn to
          the importance of teaching our children about the benefits of a
          consistent skincare routine; not only for the skin, but also for the
          soul.`,
        },
      ],
      ctaText: 'premium products',
    },

    ourTeamData: {
      title: 'our team',
      teamMembersData: [
        {
          id: 1,
          title: 'Trish Hatch, Ph.D',
          subTitle: 'CEO & President',
          img: teamMemberOne,
        },
        {
          id: 2,
          title: 'Julie Hartline, Ed.D.',
          subTitle: 'Associate Director of PL',
          img: teamMemberTwo,
        },
        {
          id: 3,
          title: 'Alec Church',
          subTitle: 'Marketing Communications Specialist',
          img: teamMemberThree,
        },
        {
          id: 4,
          title: 'Melissa Lafayette',
          subTitle: `Assistant Director of
Transformational Partnerships`,
          img: teamMemberFour,
        },
        {
          id: 5,
          title: 'Amanda Miller',
          subTitle: 'Lead PL Specialist',
          img: teamMemberFive,
        },
        {
          id: 6,
          title: 'Ebony Payno, M.A.',
          subTitle: 'Lead PL Specialist',
          img: teamMemberSix,
        },
      ],
    },

    coursesData: {
      courses: [
        {
          id: 1,
          title: 'data, data, data',
          desc: `CEU’s | University Credit | Certificate from HR`,
          price: '600.00',
        },
      ],
    },
  },
}

export default data
