import type { StageDef } from '../types'

export const STAGES: StageDef[] = [
  {
    name: 'Wishlist',
    dot: '#ABA79E',
    cards: [
      { company: 'Nimbus Labs', role: 'Senior Frontend Engineer', date: 'Aug 5' },
      { company: 'Pinecrest Studios', role: 'Game Engine Programmer', date: 'Aug 6' },
      { company: 'Driftwood Media', role: 'Frontend Engineer', date: 'Aug 4' },
    ],
  },
  {
    name: 'Applied',
    dot: '#7C9CF0',
    cards: [
      { company: 'Arcline Systems', role: 'Backend Engineer', date: 'Jul 28' },
      { company: 'Fathom Health', role: 'Full Stack Engineer', date: 'Jul 22' },
      { company: 'Meridian Fintech', role: 'Backend Engineer', date: 'Jul 31' },
      { company: 'Northwind Data', role: 'Data Engineer', date: 'Jul 26' },
    ],
  },
  {
    name: 'Phone Screen',
    dot: '#E3A83A',
    cards: [
      { company: 'Ridgeline Robotics', role: 'Platform Engineer', date: 'Jul 10', hasInterview: true },
      { company: 'Silverline Health', role: 'Frontend Engineer', date: 'Jul 8', hasInterview: true },
      { company: 'Lumen Networks', role: 'Site Reliability Engineer', date: 'Jul 5', hasInterview: true },
    ],
  },
  {
    name: 'Interview',
    dot: '#B48EEA',
    cards: [
      { company: 'Vector Analytics', role: 'ML Engineer', date: 'Jun 30', hasInterview: true },
      { company: 'Beacon Software', role: 'Staff Software Engineer', date: 'Jun 18', hasInterview: true },
      { company: 'Kestrel Security', role: 'Security Engineer', date: 'Jun 25', hasInterview: true },
    ],
  },
  {
    name: 'Offer',
    dot: '#34C08F',
    cards: [
      { company: 'Outpost AI', role: 'iOS Engineer', date: 'May 15', hasInterview: true },
      { company: 'Cobalt Payments', role: 'Senior Backend Engineer', date: 'May 10', hasInterview: true },
    ],
  },
  {
    name: 'Rejected',
    dot: '#E58A6E',
    cards: [
      { company: 'Cascade Cloud', role: 'DevOps Engineer', date: 'May 20', hasInterview: true },
      { company: 'Anchor Systems', role: 'Senior Backend Engineer', date: 'May 2', hasInterview: true },
      { company: 'Tidewater Logistics', role: 'Full Stack Engineer', date: 'Apr 28' },
    ],
  },
]
