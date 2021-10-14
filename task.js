class PrintEditionItem {
   
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(condition) {
        if (condition < 0) this._state = 0;
        if (condition > 100) this._state = 100;
        if ((condition >= 0) && (condition <= 100)) this._state = condition;
    }

    get state() {
        return this._state;
    }
};

class Magazine extends PrintEditionItem {
    
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
};

class Book extends PrintEditionItem {
    
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
};

class NovelBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
};

class FantasticBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
};

class DetectiveBook extends Book {

    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
};

class Library {
    
    constructor(name) {
        this.name = name;
        let books = [];
        this.books = books;
    }
    
    addBook(book) {
       this.books.push(book);
    }

    findBookBy(type, value) { //первый аргумент type - ключ, свойство объекта, в котором ищем нужное значение value
       
        const findResult = this.books.filter((book) => book[type] === value); // поиск в массиве books[]. Критерий поиска: искомое значение value в свойстве type одного из элементов массива. Результат - объект-массив.
        if (findResult.length === 0) return null; // если ничиего не найдено, выводим null
        return findResult.name; // выводим имя найденной книги   
    }

    giveBookByName(bookName) {

        const giveResult = this.books.filter((book) => book[bookName] === this.books.name); // поиск в массиве books[]. Критерий поиска: книга(элемент массива books[], с именем bookName)
        const indexResult = this.books.findIndex(giveResult[bookName]); //находим индекс элемента(книги), которая указана в запросе
        if (giveResult.length === 0) return null; // если ничиего не найдено, выводим null
        if (indexResult >= 0) delete this.books[indexResult]; // удаление найденной книги
        return giveResult; // вывод (возвращение) найденной книги (массив)
    }
};

