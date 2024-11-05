import { CommandsAvailable } from '../types';

export const options: CommandsAvailable[] = [
  { name: 'aboutme', description: '🧒 ~ shows a small biography' },
  { name: 'projects', description: `📚 ~ show a list of project that I'm been involved` },
  { name: 'linkedin', description: '🟦 ~ show a link to redirect to my LinkedIn Profile' },
  { name: 'github', description: '⬛ ~ show a link to redirect to my GitHub Profile' },
  { name: 'contact', description: '📇 ~ show a link to redirect to my GitHub Profile' },
  { name: 'cv', description: '📄 ~ show an option to download my cv' },
];

export const HELP_COMMAND = 'help';
export const CLEAR_COMMAND = 'clear'
export const ABOUTME_COMMAND = 'aboutme'
export const PROJECTS_COMMAND = 'projects'
export const LINKEDIN_COMMAND = 'linkedin'
export const GITHUB_COMMAND = 'github'
export const CONTACT_COMMAND = 'contact'
export const CV_COMMAND = 'cv'