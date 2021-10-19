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
        const findResult = this.books 
        .find(book => book[type] === value) // поиск в массиве books[]. Критерий поиска: искомое значение value в свойстве type одного из элементов массива. Результат - объект-массив.
        if (findResult === undefined) return null; // если ничиего не найдено, выводим null
        return findResult; // выводим весь объект найденной книги
    }

    giveBookByName(bookName) {
        
        const giveResult = this.books 
        .find((book) => book.name === bookName) // поиск в массиве books[]. Критерий поиска: книга(элемент массива books[], с именем bookName)
        //.map(item => item !== undefined);
        const indexResult = this.books.findIndex((book) => book.name === bookName); //находим индекс элемента(книги), которая указана в запросе... точнее - почему-то не находим... ????
        if (giveResult === undefined) return null; // если ничиего не найдено, выводим null
        else this.books.splice(indexResult, 1); // удаление найденной книги
        return giveResult; // вывод (возвращение) найденной книги (массив)
    }
};

// ################################ TASK 3 ####################################################

class Student {

constructor (name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

addMark(mark, subject) { 
    if (mark <= 0 || mark > 5) return 'Ошибка, оценка должна быть числом от 1 до 5';
    if (this[subject] === undefined) { // проверка наличия предметного массива с оценками
      this[subject] = [];
      this[subject].push(mark); // добавление первой оценки в пустой только что созданный предметный массив оценок
    } else {
      this[subject].push(mark);// добавление оценки в конец предметного массива оценок
    }
}

getAverageBySubject(subject) { // получение среднего арифметического оценок предметного массива
    if (this[subject] === undefined) return 'Несуществующий предмет';
    const average = this[subject].reduce((acc, item, idx, arr) => {
      acc += item;
      if (idx === arr.length - 1) {
        return acc / arr.length;
      } else return acc;
    })
  
  return average; // вывод(возврат) среднего арифметического по запросу .getAverage
  }

getAverage() {
  let sumAverage = 0;
  let subjectsCount = 0; // начальное значение счётчика - количества предметов
    for (let prop in this) { //перебор всех свойств класса Student
      if ((prop !== 'name') && (prop !== 'gender') && (prop !== 'age')) { // в вычислении среднего значения участвуют только свойства, описывающие учебные предметы
          sumAverage += this.getAverageBySubject(prop); 
          subjectsCount += 1;
      }
  }
  return Number((sumAverage/subjectsCount).toFixed(2)); // вычисление средней оценки по всем предметам, преобразование в число с обрезкой до 2го знака

}

exclude(reason) {
    if (this.excluded !== undefined) return 'Студент уже исключён ранее!'; 
    this.excluded = reason;
    return 'reason'
  };

};

