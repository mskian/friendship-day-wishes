import html2canvas from 'html2canvas';
import Toastify from 'toastify-js';
import slugify from 'slugify';
import '../styles/app.css';

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

const link = document.querySelector('link[rel="canonical"]')
    ? document.querySelector('link[rel="canonical"]')
    : document.createElement('link');
const pathname = typeof window !== 'undefined' ? window.location.href : '';
link.setAttribute('rel', 'canonical');
link.setAttribute('href', pathname);
document.head.appendChild(link);

const LoadmyFont = new FontFace(
    'Anek Tamil',
    'url(https://fonts.gstatic.com/s/anektamil/v4/XLYJIZH2bYJHGYtPGSbUB8JKTp-_9n55SsLHW0WZez6TjtkDu3uNnCB6qw.ttf)'
);
LoadmyFont.load().then(function (font) {
    document.fonts.add(font);

    const imageObj = new Image();
    const canvas = document.getElementById('Canvas');
    const context = canvas.getContext('2d');
    context.font = '600 35pt Anek Tamil';
    imageObj.onload = function () {
        context.textAlign = 'center';
        context.drawImage(imageObj, 0, 0);
        context.fillStyle = '#2c3e50';
        context.fillText(word, 536, 1010);
        if (word == 'Your Name') {
            console.log('Hello World');
        } else {
            html2canvas(document.getElementById('Canvas'), {
                allowTaint: true,
                useCORS: true,
                logging: false,
            })
                .then(function (canvas) {
                    document.getElementById('Canvas').style.display = 'none';
                    let image = canvas.toDataURL('image/png');
                    document.getElementById('result').innerHTML = `
                <img src=${image}>
                <br><div class="flex items-center justify-center"><a class="inline-block px-12 py-3 rounded text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-medium uppercase umami--click--download-image" href="${image}" download="${basename}">⬇ Download image</a></div>`;
                })
                .catch(e => {
                    console.log(e);
                });
        }
    };

    imageObj.setAttribute('crossOrigin', 'anonymous');
    imageObj.src = './friendship.png';
});
