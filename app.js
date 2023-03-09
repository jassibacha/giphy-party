console.log("Let's get this party started!");

const presetTerms = [
    'parks and rec',
    'the office',
    'the simpsons',
    'puppies',
    'kittens',
    'otters',
    'bocchi',
    'marvel',
];

async function searchGif(s) {
    console.log('Search: ', s);
    const url = `http://api.giphy.com/v1/gifs/search?q=${s}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
    const res = await axios.get(url);
    console.log('res: ', res);
    const data = res.data.data;
    console.log('data: ', data);
    const randomIndex = Math.floor(Math.random() * data.length);
    console.log(randomIndex);
    createGif(data[randomIndex].images.original.url);
}

function createGif(img) {
    const gifs = document.querySelector('.gifs');
    const newGif = document.createElement('DIV');
    newGif.classList.add(
        'gif',
        'd-flex',
        'col-sm-6',
        'col-md-4',
        'col-lg-3',
        'justify-content-center',
        'align-items-center'
    );
    newGif.innerHTML = `<img src="${img}" class="py-2 img-fluid" />`;
    gifs.append(newGif);
}

const form = document.querySelector('.form-search');
form.addEventListener('submit', function (e) {
    e.preventDefault;
    const input = document.querySelector('#search');
    console.log(input.value);
    searchGif(input.value);
    input.value = '';
});
const btnRandom = document.querySelector('.random');
btnRandom.addEventListener('click', function () {
    const randomTerm = Math.floor(Math.random() * presetTerms.length);
    console.log('randomTerm: ', randomTerm);
    console.log('presetTerms ', presetTerms);
    console.log(presetTerms[randomTerm]);
    searchGif(presetTerms[randomTerm]);
});

const btnDelete = document.querySelector('.delete');
btnDelete.addEventListener('click', function () {
    const gifs = document.querySelector('.gifs');
    gifs.innerHTML = '';
});
