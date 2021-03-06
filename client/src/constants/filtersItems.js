export const FILTERS_ITEMS = [
  ['Open issues', { status: 'opened' }],
  ['Your issues', { author: localStorage.getItem('user_id') }],
  ['Everything assigned to you', { assignees: [localStorage.getItem('user_id')] }],
  ['Everything mentioning you', { mentions: 'me' }],
  ['Closed issues', { status: 'closed' }],
];