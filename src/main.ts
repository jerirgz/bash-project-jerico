import './style.css';
import '../src/types';
import { options } from '.';
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

terminalInput!.addEventListener('change', (e: any) => {
  let value = e.target.value.trim();
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
    case 'help':
      options.forEach((item) => {
        let ul = document.createElement('ul');

        insertHTML(ul, 'beforeend', `<li>${item.name} - ${item.description}</li></br>`);
        terminalOutput?.insertAdjacentElement('beforeend', ul);
      });
      cleanInput();
      break;
    case 'clear':
      removeChildNodes();
      cleanInput();
      break;
    case 'aboutme':
      insertHTML(terminalOutput, 'beforeend', aboutMe);
      cleanInput();
      break;
    case 'projects':
      insertHTML(terminalOutput, 'beforeend', projects);
      cleanInput();
      break;
    case 'linkedin':
      insertHTML(terminalOutput, 'beforeend', linkedIn);
      cleanInput();
      break;
    case 'github':
      insertHTML(terminalOutput, 'beforeend', github);
      cleanInput();
      break;
    case 'contact':
      insertHTML(terminalOutput, 'beforeend', contact);
      cleanInput();
      break;
    case 'cv':
      insertHTML(terminalOutput, 'beforeend', cv);
      cleanInput();
      break;
    default:
      // insertHTML(terminalOutput, 'beforeend', errorMsg);
      printErrorMessage(value);
      cleanInput();
      break;
  }
}

function printErrorMessage(value: string) {
  const errorMsg = `<p class="error-message">Command <span>${value}</span> not found, type 'help' to see all available commands</p>`;
  insertHTML(terminalOutput, 'beforeend', errorMsg);
}
