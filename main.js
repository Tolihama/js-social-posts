/* Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:
- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice. */

// Data Object
const data = [
    {
        author: 'Phil Mangione',
        avatar: 'https://unsplash.it/300/300?image=15',
        postDate: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=171',
        likes: 80,
    },
    {
        author: 'Sofia Perlari',
        avatar: 'https://unsplash.it/300/300?image=16',
        postDate: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=172',
        likes: 198,
    },
    {
        author: 'Paolo',
        avatar: 'https://unsplash.it/300/300?image=17',
        postDate: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=173',
        likes: 45,
    },
    {
        author: 'Alfredo',
        avatar: 'https://unsplash.it/300/300?image=18',
        postDate: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=174',
        likes: 46,
    },
    {
        author: 'Fabio',
        avatar: 'https://unsplash.it/300/300?image=19',
        postDate: '4 mesi fa',
        postText: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://unsplash.it/600/300?image=175',
        likes: 47,
    },
];

// DOM refs
const container = document.getElementById('container');

// Invoke printer function
postPrinter(data, container);


/**
 * FUNCTIONS
 */
function postPrinter(dataArray, domRef) {
    // DOM content reset
    domRef.innerHTML = '';

    // Ciclo su ogni oggetto dell'array
    for (let i = 0; i < dataArray.length; i++) {
        // Estrapola singolo oggetto dell'array e salvalo in una variabile dedicata
        const data = dataArray[i];

        // Concatena il layout html tramite interpolazione nell'elemento dom passato alla funzione
        domRef.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${data.avatar}" alt="${data.author}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${data.author}</div>
                        <div class="post-meta__time">${data.postDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${data.postText}</div>
            <div class="post__image">
                <img src="${data.postImage}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${data.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `;
    }
}