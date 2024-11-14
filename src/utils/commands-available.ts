import { CommandsAvailable } from '../types';
import { CONTACT_SVG, GITHUB_SVG, LINKEDIN_SVG } from './logos-svg';

export const OPTIONS: CommandsAvailable[] = [
  { name: 'aboutme', description: `~ shows a small biography` },
  {
    name: 'projects',
    description: `📚 ~ show a list of project that I'm been involved`,
  },
  {
    name: 'linkedin',
    description: `${LINKEDIN_SVG} ~ show a link to redirect to my LinkedIn Profile`,
  },
  {
    name: 'github',
    description: `${GITHUB_SVG} ~ show a link to redirect to my GitHub Profile`,
  },
  {
    name: 'contact',
    description: `${CONTACT_SVG} ~ show my personal contact information`,
  },
];

export const HELP_COMMAND = 'help';
export const CLEAR_COMMAND = 'clear';
export const ABOUTME_COMMAND = 'aboutme';
export const PROJECTS_COMMAND = 'projects';
export const LINKEDIN_COMMAND = 'linkedin';
export const GITHUB_COMMAND = 'github';
export const CONTACT_COMMAND = 'contact';
export const CV_COMMAND = 'cv';
