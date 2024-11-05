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
  options,
  PROJECTS_COMMAND,
} from './utils/commands-available';
import {
  aboutMe,
  github,
  linkedIn,
  projects,
  contact,
  cv,
  guestCli,
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
  insertHTML(terminalOutput, 'beforeend', guestCli);
  retrieveResponse(input);
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
      options.forEach((item) => {
        let ul = document.createElement('ul');

        insertHTML(ul, 'beforeend', `<li>${item.name} - ${item.description}</li></br>`);
        terminalOutput?.insertAdjacentElement('beforeend', ul);
      });
      cleanInput();
      break;
    case CLEAR_COMMAND:
      removeChildNodes();
      cleanInput();
      break;
    case ABOUTME_COMMAND:
      insertHTML(terminalOutput, 'beforeend', aboutMe);
      cleanInput();
      break;
    case PROJECTS_COMMAND:
      insertHTML(terminalOutput, 'beforeend', projects);
      cleanInput();
      break;
    case LINKEDIN_COMMAND:
      insertHTML(terminalOutput, 'beforeend', linkedIn);
      cleanInput();
      break;
    case GITHUB_COMMAND:
      insertHTML(terminalOutput, 'beforeend', github);
      cleanInput();
      break;
    case CONTACT_COMMAND:
      insertHTML(terminalOutput, 'beforeend', contact);
      cleanInput();
      break;
    case CV_COMMAND:
      insertHTML(terminalOutput, 'beforeend', cv);
      cleanInput();
      break;
    default:
      printErrorMessage(value);
      cleanInput();
      break;
  }
}

function printErrorMessage(value: string) {
  const errorMsg = `<p class="error-message">Command <span>${value}</span> not found, type 'help' to see all available commands</p>`;
  insertHTML(terminalOutput, 'beforeend', errorMsg);
}
