import './style.css';
import '../src/types';
import { options } from '.';
import {
  aboutMe,
  errorMsg,
  github,
  linkedIn,
  projects,
} from './utils/generated-messages';

let terminalOptions = document.querySelector<HTMLElement>('#terminal-help-options');
let terminalOutput = document.querySelector<HTMLInputElement>('#bash-output');
let terminalInput = document.querySelector<HTMLInputElement>('#bash-terminal-input');

terminalInput?.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    let terminalValue = terminalInput.value;
    createCli();
    retrieveResponse(terminalValue);
    terminalInput.value = '';
  }
});

function removeChildNodes() {
  terminalOutput?.replaceChildren();
  terminalOptions?.replaceChildren();
}

function retrieveResponse(value: string) {
  switch (value) {
    case 'help':
      options.forEach((item) => {
        let ul = document.createElement('ul');
        ul.insertAdjacentHTML(
          'beforeend',
          `<li>${item.name} - ${item.description}</li></br>`
        );
        terminalOutput?.insertAdjacentElement('beforeend', ul);
      });
      break;
    case 'clear':
      removeChildNodes();
      break;
    case 'aboutme':
      terminalOutput?.insertAdjacentHTML('beforeend', aboutMe);
      break;
    case 'projects':
      terminalOutput?.insertAdjacentHTML('beforeend', projects);
      break;
    case 'linkedin':
      terminalOutput?.insertAdjacentHTML('beforeend', linkedIn);
      break;
    case 'github':
      terminalOutput?.insertAdjacentHTML('beforeend', github);
      break;
    default:
      terminalOutput?.insertAdjacentHTML('beforeend', errorMsg);
      break;
  }
}

function createCli() {
  const guestCli =
    '<div class="terminal-cli"><p class="bash-user">welcome<span>@guest ></span></p></div>';

  terminalOutput?.insertAdjacentHTML('beforeend', guestCli);
}
