// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'Outstanding Teacher Award',
    description: '',
    date: '2024',
    location: 'SCLS, Shanghai',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Gift Recommender',
    description: 'A website',
    link: { href: 'https://gift1-3f6o66zko-leos-projects-5ffbf107.vercel.app/', label: 'GitHub' },
    tags: ['Website', 'Next.js', 'TailwindCSS', 'DaisyUI', 'Portfolio']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'TongYanTang Volunteer Teaching',
    description:
      'Teaching international students Chinese.',
    date: '2024 till now',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
]
