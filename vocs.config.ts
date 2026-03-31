import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'SwingElo',
  description: 'How we score West Coast Swing competitions — methodology, metrics, and transparency',
  rootDir: '.',
  basePath: '/',
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'Scoring',
      items: [
        { text: 'How Scoring Works', link: '/scoring' },
        { text: 'Strength Score', link: '/scoring/strength' },
        { text: 'Odds to Finals', link: '/scoring/odds' },
        { text: 'Power Rankings', link: '/scoring/power-rankings' },
        { text: 'Judge Quality', link: '/scoring/judge-quality' },
      ],
    },
    {
      text: 'Competition Data',
      items: [
        { text: 'What We Track', link: '/data' },
        { text: 'Divisions & Levels', link: '/data/divisions' },
        { text: 'Prelim Callbacks', link: '/data/callbacks' },
        { text: 'Event History', link: '/data/events' },
      ],
    },
    {
      text: 'Dancer Profiles',
      items: [
        { text: 'Understanding Your Profile', link: '/profiles' },
        { text: 'Callback Stats', link: '/profiles/callbacks' },
        { text: 'WSDC Points', link: '/profiles/wsdc' },
      ],
    },
    {
      text: 'FAQ',
      link: '/faq',
    },
  ],
  theme: {
    accentColor: '#6366f1',
  },
})
