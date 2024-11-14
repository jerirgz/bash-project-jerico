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
  ERROR_MSG_FIRST,
  ERROR_MSG_SECOND,
} from './utils/generated-messages';

let terminalOptions = document.querySelector<HTMLElement>('#terminal-help-options');
let terminalOutput = document.querySelector<HTMLElement>('#bash-output');
let terminalTime = document.querySelector<HTMLElement>('#bash-time');
let test = document.querySelector<HTMLElement>('#test');
let terminalInput = document.querySelector<HTMLInputElement>('#bash-terminal-input');

terminalInput!.addEventListener('change', (event: any) => {
  let value = event.target.value.trim();
  if (value !== undefined && value) {
    createCli(value);
  }
});

function createCli(input: string) {
  insertHTML(terminalOutput, MESSAGE_POSITION, GUESTCLI);
  printSystemTime();
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
  const UL = document.createElement('ul');
  UL.setAttribute('class', 'help-options');
  OPTIONS.forEach((item) => {
    insertHTML(UL, MESSAGE_POSITION, `<li>${item.name} - ${item.description}</li></br>`);
    terminalOutput?.insertAdjacentElement(MESSAGE_POSITION, UL);
  });
}

function printErrorMessage(value: string) {
  const ERROR_MSG = `${ERROR_MSG_FIRST}${value}${ERROR_MSG_SECOND}`;
  insertHTML(terminalOutput, MESSAGE_POSITION, ERROR_MSG);
}

function printSystemTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  terminalTime!.innerHTML = `${h}:${m}:${s}`;

  console.log(`Terminal Output: ${terminalOutput?.childNodes.length} `);

  if (terminalOutput!.childElementCount >= 1) {
    insertHTML(
      terminalOutput,
      MESSAGE_POSITION,
      `<p class="bash-time" id="bash-time">${h}:${m}:${s}</p>`
    );
  }
}

printSystemTime();
