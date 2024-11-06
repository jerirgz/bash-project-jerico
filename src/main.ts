import './style.css';
import '../src/types';
import {
  ABOUTME_COMMAND,
  CLEAR_COMMAND,
  CONTACT_COMMAND,
  CV_COMMAND,
  GITHUB_COMMAND,
  HELP_COMMAND,
  LINKEDIN_COMMAND,
  OPTIONS,
  PROJECTS_COMMAND,
} from './utils/commands-available';
import {
  ABOUTME,
  GITHUB,
  LINKEDIN,
  PROJECTS,
  CONTACT,
  CV,
  GUESTCLI,
  MESSAGE_POSITION,
} from './utils/generated-messages';

let terminalOptions = document.querySelector<HTMLElement>('#terminal-help-options');
let terminalOutput = document.querySelector<HTMLInputElement>('#bash-output');
let terminalInput = document.querySelector<HTMLInputElement>('#bash-terminal-input');

terminalInput!.addEventListener('change', (event: any) => {
  let value = event.target.value.trim();
  if (value !== undefined && value) {
    createCli(value);
  }
});

function createCli(input: string) {
  insertHTML(terminalOutput, MESSAGE_POSITION, GUESTCLI);
  retrieveResponse(input);
  scrollToElement(terminalInput);
}

function scrollToElement(element: any) {
  element?.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

function removeChildNodes() {
  terminalOutput?.replaceChildren();
  terminalOptions?.replaceChildren();
}

function cleanInput() {
  terminalInput!.value = '';
}

function insertHTML(where: any, position: InsertPosition, element: string) {
  where?.insertAdjacentHTML(position, element);
}

function retrieveResponse(value: string) {
  switch (value) {
    case HELP_COMMAND:
      createHelpOptionsList();
      cleanInput();
      break;
    case CLEAR_COMMAND:
      removeChildNodes();
      cleanInput();
      break;
    case ABOUTME_COMMAND:
      insertHTML(terminalOutput, MESSAGE_POSITION, ABOUTME);
      cleanInput();
      break;
    case PROJECTS_COMMAND:
      insertHTML(terminalOutput, MESSAGE_POSITION, PROJECTS);
      cleanInput();
      break;
    case LINKEDIN_COMMAND:
      insertHTML(terminalOutput, MESSAGE_POSITION, LINKEDIN);
      cleanInput();
      break;
    case GITHUB_COMMAND:
      insertHTML(terminalOutput, MESSAGE_POSITION, GITHUB);
      cleanInput();
      break;
    case CONTACT_COMMAND:
      insertHTML(terminalOutput, MESSAGE_POSITION, CONTACT);
      cleanInput();
      break;
    case CV_COMMAND:
      insertHTML(terminalOutput, MESSAGE_POSITION, CV);
      cleanInput();
      break;
    default:
      printErrorMessage(value);
      cleanInput();
      break;
  }
}

function createHelpOptionsList() {
  let ul = document.createElement('ul');
  ul.setAttribute('class', 'help-options');
  OPTIONS.forEach((item) => {
    insertHTML(ul, MESSAGE_POSITION, `<li>${item.name} - ${item.description}</li></br>`);
    terminalOutput?.insertAdjacentElement(MESSAGE_POSITION, ul);
  });
}

function printErrorMessage(value: string) {
  const ERROR_MSG = `<p class="error-message">Command <span>${value}</span> not found, type 'help' to see all available commands</p>`;
  insertHTML(terminalOutput, MESSAGE_POSITION, ERROR_MSG);
}
