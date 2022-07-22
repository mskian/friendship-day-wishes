import html2canvas from 'html2canvas';
import Toastify from 'toastify-js';
import slugify from 'slugify';

// Main Body Content
document.querySelector('#app').innerHTML = `
<div class="min-h-screen px-4 py-16 mx-auto sm:px-6 lg:px-8 bg-gray-200">
<div class="max-w-lg mx-auto">
  <h1 class="text-sm font-bold text-center text-green-600 sm:text-2xl">Friendship Day Greeting image Generator</h1>
  <p class="max-w-md mx-auto mt-4 text-center text-yellow-700 font-bold"> Free Happy Friendship Day Wishes image with Name - Friendship Day Greeting image Generator. </p>
  <br />
  <div id="notice"></div>
  <div id="result"></div>
  <form method="get" accept-charset="UTF-8" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl" style="background-color: #94A3B8">
    <p class="text-center">Create Yours with Name</p>
    <div>
      <div class="relative mt-1">
        <input type="text" id="name" name="name" class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm text-lg" placeholder="Your Name" maxlength="40" autocomplete="off" required />
      </div>
    </div>
    <button type="submit" class="block w-full px-5 py-3 text-lg font-medium text-gray-700 bg-orange-200 rounded-lg">Create Now</button>
  </form>
</div>
<br />
</div>
`;
// Web App
let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);
const getInput = searchParams.get('name') || 'Your Name';
const random_id = Math.floor(1000 + Math.random() * 9000);
const basename = 'friendship-day-wishes-' + random_id;
const seo_title = slugify(getInput, {
    replacement: '-',
    remove: /[$*_+~.()'"!\-:@]+/g,
    lower: false,
    strict: false,
});
const userInput =
    slugify(getInput, {
        replacement: ' ',
        remove: /[*+~.()'"!:@]/g,
        lower: false,
        strict: false,
    }) || 'Your Name';
const pageCatch = encodeURIComponent(seo_title).replace(/%20/g, '-');
if (getInput == 'Your Name') {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/');
    }
} else {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/?name=' + pageCatch);
    }
}
const word = userInput.replace(/[-]/g, ' ');
Toastify({
    text: word,
    duration: 2000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    style: {
        background: '#27ae60',
    },
}).showToast();
document
    .getElementsByTagName('meta')
    .namedItem('description')
    .setAttribute(
        'content',
        `${word} Sending you the Free Happy Friendship Day Wishes image with Name - Friendship Day Greeting image Generator.`
    );
document.title = `${word} Sending you the Free Happy Friendship Day Wishes image with Name - Friendship Day Greeting image Generator.`;

const link = document.querySelector('link[rel=\'canonical\']')
    ? document.querySelector('link[rel=\'canonical\']')
    : document.createElement('link');
const pathname = typeof window !== 'undefined' ? window.location.href : '';
link.setAttribute('rel', 'canonical');
link.setAttribute('href', pathname);
document.head.appendChild(link);

document.getElementById('notice').innerHTML = `<div class="container mx-md">
            <div class="flex items-center justify-center">
            <div id="copy-wish" class="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-1xl">
            <div class=" h-fit w-fit p-16 py-16  bg-white rounded m6">
            <p class="mt-2 text-lg font-bold text-center text-purple-700">
            Few things in my life <br>
            make me happy and <br>
            you are one of them <br>
            Happy Friendship day <br>
            </p>
            <p class="mt-2 text-sm font-bold text-center text-stone-800">${word}</p>
          </div>
          </div>
          </div>
          </div>
          `;
if (word == 'Your Name') {
    console.log('Hello World');
} else {
    html2canvas(document.getElementById('copy-wish'), {
        allowTaint: true,
        useCORS: true,
        logging: false,
    })
        .then(function (canvas) {
            let image = canvas.toDataURL('image/png');
            document.getElementById(
                'result'
            ).innerHTML = `<br><div class="flex items-center justify-center"><a class="inline-block px-12 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase umami--click--download-image" href="${image}" download="${basename}">⬇ Download image</a></div>`;
        })
        .catch(e => {
            console.log(e);
        });
}
