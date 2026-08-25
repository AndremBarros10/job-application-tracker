import type { StageDef } from '../types'

export const STAGES: StageDef[] = [
  {
    name: 'Applied',
    dot: '#7C9CF0',
    cards: [
      { id: 'applied-1', company: 'Arcline Systems', role: 'Backend Engineer', date: 'Jul 28' },
      { id: 'applied-2', company: 'Fathom Health', role: 'Full Stack Engineer', date: 'Jul 22' },
      { id: 'applied-3', company: 'Meridian Fintech', role: 'Backend Engineer', date: 'Jul 31' },
      { id: 'applied-4', company: 'Northwind Data', role: 'Data Engineer', date: 'Jul 26' },
    ],
  },
  {
    name: 'Phone Screen',
    dot: '#E3A83A',
    cards: [
      { id: 'phone-screen-1', company: 'Ridgeline Robotics', role: 'Platform Engineer', date: 'Jul 10', hasInterview: true, notes: 'Recruiter call went well. Next step is a 45min technical screen with the platform lead.' },
      { id: 'phone-screen-2', company: 'Silverline Health', role: 'Frontend Engineer', date: 'Jul 8', hasInterview: true },
      { id: 'phone-screen-3', company: 'Lumen Networks', role: 'Site Reliability Engineer', date: 'Jul 5', hasInterview: true },
    ],
  },
  {
    name: 'Interview',
    dot: '#B48EEA',
    cards: [
      { id: 'interview-1', company: 'Vector Analytics', role: 'ML Engineer', date: 'Jun 30', hasInterview: true },
      { id: 'interview-2', company: 'Beacon Software', role: 'Staff Software Engineer', date: 'Jun 18', hasInterview: true },
      { id: 'interview-3', company: 'Kestrel Security', role: 'Security Engineer', date: 'Jun 25', hasInterview: true },
    ],
  },
  {
    name: 'Offer',
    dot: '#34C08F',
    cards: [
      { id: 'offer-1', company: 'Outpost AI', role: 'iOS Engineer', date: 'May 15', hasInterview: true },
      { id: 'offer-2', company: 'Cobalt Payments', role: 'Senior Backend Engineer', date: 'May 10', hasInterview: true },
    ],
  },
  {
    name: 'Rejected',
    dot: '#E58A6E',
    cards: [
      {
        id: 'rejected-1',
        company: 'Cascade Cloud',
        role: 'DevOps Engineer',
        date: 'May 20',
        hasInterview: true,
        rejectionReason: 'Went with a candidate with more Kubernetes production experience.',
        learningFocus: 'Get hands-on with Kubernetes — deploy a real cluster, not just tutorials.',
      },
      {
        id: 'rejected-2',
        company: 'Anchor Systems',
        role: 'Senior Backend Engineer',
        date: 'May 2',
        hasInterview: true,
        rejectionReason: 'System design round felt weak on handling scale trade-offs.',
        learningFocus: 'Practice system design interviews focused on scaling and trade-off discussions.',
      },
      { id: 'rejected-3', company: 'Tidewater Logistics', role: 'Full Stack Engineer', date: 'Apr 28' },
    ],
  },
]
