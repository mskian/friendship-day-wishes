import Toastify from 'toastify-js';

function slugify(string) {
    return string
        .toString()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
        .replace(/-+@/, '')
        .replace('<script>', 'script')
        .replaceAll('.', '-')
        .replace('(', '')
        .replace(')', '');
}

let url = new URL(window.location);
let searchParams = new URLSearchParams(url.search);
const getInput = searchParams.get('name') || window.location.hostname;
const random_id = Math.floor(1000 + Math.random() * 9000);
const basename = 'friendship-day-wishes-' + random_id;

if (getInput == window.location.hostname) {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/');
    }
} else {
    if (window.history.replaceState) {
        window.history.replaceState(null, null, '/?name=' + slugify(getInput));
    }
}
const userInput = getInput.replace(/[-]/g, ' ') || window.location.hostname;
Toastify({
    text: userInput,
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
        `${userInput} Sending you the Free Happy Friendship Day Wishes image with Name - Friendship Day Greeting image Generator.`
    );
document.title = `${userInput} Sending you the Free Happy Friendship Day Wishes image with Name - Friendship Day Greeting image Generator.`;

const link = document.querySelector('link[rel=\'canonical\']') ? document.querySelector('link[rel=\'canonical\']') : document.createElement('link');
const pathname = typeof window !== 'undefined' ? window.location.href : '';
link.setAttribute('rel', 'canonical');
link.setAttribute('href', pathname);
document.head.appendChild(link);

console.log(userInput);
const word = userInput;
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
html2canvas(document.getElementById('copy-wish'), {
    allowTaint: true,
    useCORS: true,
})
    .then(function (canvas) {
        let image = canvas.toDataURL('image/png');
        document.getElementById(
            'result'
        ).innerHTML = `<br><div class="flex items-center justify-center"><a class="inline-block px-12 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase umami--click--download-image" href="${image}" download="${basename}">⬇ Download image</a></div>`;
    })
    .catch((e) => {
        console.log(e);
    });
