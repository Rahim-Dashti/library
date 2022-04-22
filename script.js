let library = [ {
    'title' : 'hello book',
    'author' : 'Rahim' ,
    'page' : '123' ,
    'read' : true } ,
    {
    'title' : 'hello book',
    'author' : 'Rahim' ,
    'page' : '123' ,
    'read' : false } ,
    {
    'title' : 'hello book',
    'author' : 'Rahim' ,
    'page' : '123' ,
    'read' : true } ,
    {
    'title' : 'hello book',
    'author' : 'Rahim' ,
    'page' : '123' ,
    'read' : true } ,
];

class book {
    constructor(title_,author,page,read) {
    this.title = title_.value;
    this.author = author.value;
    this.page = page.value;
    this.read = read.checked;
    }
    updateLibraryLog() {
        let totalCounter = document.querySelector('.total-counter');
        let readCounter = document.querySelector('.read-counter');
        let notReadCounter = document.querySelector('.not-read-counter');
        bookCardsSection.replaceChildren()
        let readNum = 0;
        let notReadNum = 0;
        library.forEach(book =>  {
            createBookCard(book)
            if (book['read'] === true) {
                readNum+=1;
                }
            else {
                notReadNum+=1
                }
            }   
        )
        readCounter.textContent = readNum 
        notReadCounter.textContent = notReadNum 
    } }

function addbook(title_,author,page,read) {
    newbook = new book(title_,author,page,read);
    library.push(newbook);
    newbook.updateLibraryLog(title_,author,page,read)
}

let bookCardsSection = document.querySelector(".book-cards-section")

function addbookform() {
    let formSection = document.createElement('div')
    formSection.setAttribute('class','book-submit')
    bookCardsSection.appendChild(formSection)

    let form = document.createElement('form')
    form.setAttribute('method','post')
    form.setAttribute('action','')
    form.setAttribute('onsubmit','return false')
    form.setAttribute('class','form')

    let closeButtondiv = document.createElement('div')
    closeButtondiv.setAttribute('class','close-button')
    let closeButton = document.createElement('button')
    closeButton.setAttribute('onclick','removeBookForm()')
    let closeButtonImage = document.createElement('img')
    closeButtonImage.setAttribute('src','./img/cancel.png')
    closeButton.appendChild(closeButtonImage)
    closeButtondiv.appendChild(closeButton)

    closeButton.setAttribute('src','./img/cancel.png')
    closeButton.setAttribute('class','close-button')

    let title = document.createElement('input')
    title.setAttribute('type','text')
    title.setAttribute('name','title_')
    title.setAttribute('placeholder','Enter Full Name of The Book')

    let author = document.createElement('input')
    author.setAttribute('type','text')
    author.setAttribute('name','author')
    author.setAttribute('placeholder','Enter Author Name')

    let page = document.createElement('input')
    page.setAttribute('type','number')
    page.setAttribute('name','page')
    page.setAttribute('placeholder','Number of Book Pages')

    let read = document.createElement('input')
    read.setAttribute('type','checkbox')
    read.setAttribute('name','read')
    let readLabel = document.createElement('label')
    readLabel.setAttribute('id','read')
    let readLabelText = document.createTextNode('Read or Not: ')
    readLabel.appendChild(readLabelText)
    readLabel.appendChild(read)

    let submitButton = document.createElement('button')
    submitButton.setAttribute('type','submit')
    submitButton.setAttribute('name','submitButton')
    submitButton.setAttribute('onclick','addbook(title_,author,page,read)')
    let submitButtonText = document.createTextNode('Submit')
    submitButton.appendChild(submitButtonText)

    
    form.appendChild(title)
    form.appendChild(author)
    form.appendChild(page)
    form.appendChild(readLabel)
    form.appendChild(submitButton)

    formSection.appendChild(closeButtondiv)
    formSection.appendChild(form)
}


function removeBookForm () {
    formSection = document.querySelector('.book-submit')
    bookCardsSection.removeChild(formSection)
}



function createBookCard(book) {
    let bookCard = document.createElement('div')
    bookCard.setAttribute('class','book-card')

    let closeButtondiv = document.createElement('div')
    closeButtondiv.setAttribute('class','close-button')
    let closeButton = document.createElement('button')
    closeButton.setAttribute('onclick','removeBookForm()')
    let closeButtonImage = document.createElement('img')
    closeButtonImage.setAttribute('src','./img/cancel.png')
    closeButton.appendChild(closeButtonImage)
    closeButtondiv.appendChild(closeButton)

    let bookTitle = document.createElement('div')
    bookTitle.setAttribute('class','book-title')
    bookTitleText = document.createTextNode(book.title)
    bookTitle.appendChild(bookTitleText)

    let bookAuthor = document.createElement('div')
    bookAuthor.setAttribute('class','book-author')
    bookAuthorText = document.createTextNode(`By : ${book.author}`)
    bookAuthor.appendChild(bookAuthorText)

    let bookPages = document.createElement('div')
    bookPages.setAttribute('class','book-pages')
    bookPagesText = document.createTextNode(`Number of pages : ${book.page}`)
    bookPages.appendChild(bookPagesText)

    let bookRead = document.createElement('input')
    bookRead.setAttribute('type','checkbox')
    bookRead.setAttribute('name','read')
    bookRead.addEventListener('click',checkboxColor)
    bookRead.checked = book.read
    let readLabel = document.createElement('label')
    readLabel.setAttribute('id','read')
    readLabel.setAttribute('class','book-read-check')
    let readLabelText = document.createTextNode('Read or Not: ')
    readLabel.appendChild(readLabelText)
    readLabel.appendChild(bookRead)

    if (book.read === false) {
        bookCard.style.background = 'linear-gradient(#fda4af,#f43f5e)'
    }

    bookCard.appendChild(closeButtondiv)
    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(readLabel)

    bookCardsSection.appendChild(bookCard)
}

function updateLibraryLog() {
    let totalCounter = document.querySelector('.total-counter');
    let readCounter = document.querySelector('.read-counter');
    let notReadCounter = document.querySelector('.not-read-counter');
    bookCardsSection.replaceChildren()
    let readNum = 0;
    let notReadNum = 0;
    library.forEach(book =>  {
        createBookCard(book)
        if (book['read'] === true) {
            readNum+=1;
            }
        else {
            notReadNum+=1
            }
        }   
    )
    readCounter.textContent = readNum 
    notReadCounter.textContent = notReadNum 
}

function checkboxColor(e) {
    if (e.target.checked === true ) {
        e.target.parentElement.parentElement.style.background = 'linear-gradient(#bae6fd,#0284c7)'
    }
    else {
        e.target.parentElement.parentElement.style.background = 'linear-gradient(#fda4af,#f43f5e)'
    }
    updateLibraryLog()
}