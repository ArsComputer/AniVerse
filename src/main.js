import './style.css';
import { getAnime } from './api/getAnime';

document.querySelector('#app').innerHTML = `

`;

async function test() {
  console.log(await getAnime('bocchi'))
}

test()