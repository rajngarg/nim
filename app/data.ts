type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Mandate360',
    description:
      'Built an AI-powered goal management platform with intelligent task breakdown, planning workflows, and scalable collaboration architecture using React Native and Expo.',
    link: 'https://www.toptal.com/developers/resume/rajan-garg',
    video: '/videos/mandate360.mp4',
    id: 'project1',
  },
  {
    name: 'VeriKlick',
    description:
      'Developed a real-time interview platform featuring video calling, chat, scheduling, and optimized mobile performance focused on reliability and user experience.',
    link: 'https://www.toptal.com/developers/resume/rajan-garg',
    video: '/videos/veriklick.mp4',
    id: 'project2',
  },
  {
    name: 'Fitness Platform',
    description:
      'Independently built a subscription-based fitness application using Expo, Convex, and Tailwind CSS with real-time sync, trainers, meal management, and personalized experiences.',
    link: 'https://www.toptal.com/developers/resume/rajan-garg',
    video: '/videos/fitness-app.mp4',
    id: 'project3',
  },
  {
    name: 'TrueEnergy',
    description:
      'Developed an EV charging platform with real-time updates, optimized deployment pipelines, and scalable mobile architecture supporting 50K+ downloads.',
    link: 'https://www.toptal.com/developers/resume/rajan-garg',
    video: '/videos/trueenergy.mp4',
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'SmartData Enterprises',
    title: 'Lead React Native Developer',
    start: '2022',
    end: 'Present',
    link: 'https://www.smartdatainc.com/',
    id: 'work1',
  },
  {
    company: 'Netset Softwares',
    title: 'React Native Developer',
    start: '2019',
    end: '2022',
    link: 'https://netsetsoftware.com/',
    id: 'work2',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Optimizing React Native Performance',
    description:
      'Strategies for improving rendering, startup performance, and responsiveness in large-scale React Native applications.',
    link: '/blog/react-native-performance',
    uid: 'blog-1',
  },
  {
    title: 'Building Real-Time Mobile Experiences',
    description:
      'Lessons learned while implementing chat, live updates, and video calling systems in production apps.',
    link: '/blog/real-time-mobile-experiences',
    uid: 'blog-2',
  },
  {
    title: 'Scaling Expo Applications',
    description:
      'Best practices for structuring scalable Expo and React Native applications for long-term maintainability.',
    link: '/blog/scaling-expo-applications',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/',
  },
  {
    label: 'Toptal',
    link: 'https://www.toptal.com/developers/resume/rajan-garg',
  },
]

export const EMAIL = 'dev.rajangarg@gmail.com'
