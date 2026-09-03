const myProfile = {
  firstName: "Muslim",
  lastName: "Dzhuraev",
  age: 30,
  email: "mdzuraev.ccm@gmail.com",
  job: "Frontend Developer",
  position: "Junior Frontend Developer",
  country: "Russia",
  city: "Moscow",
  relationshipStatus: "married",
};

console.log(myProfile);

const myCar = {
  brand: "Porsche",
  model: "Cayenne",
  year: 2025,
  color: "Black",
  transmission: "Automatic",
};

myCar.owner = myProfile;
console.log(myCar);
console.log(myCar.owner.position);

function addMaxSpeed(car) {
  if (car.maxSpeed === undefined) {
    car.maxSpeed = 250;
  } else {
    return;
  }
}

addMaxSpeed(myCar);
console.log(myCar);

function getProperty(obj, prop) {
  console.log(obj[prop]);
}

getProperty(myCar, "brand");

const products = [
  "banana",
  "apple",
  "potato",
  "beef",
  "milk",
  "cheese",
  "bread",
  "sugar",
  "rice",
  "butter",
];

console.log(products);

const books = [
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "черный",
    genre: "Антиутопия",
  },
  {
    title: "451 градус по Фаренгейту",
    author: "Рей Бредберри",
    year: 1953,
    coverColor: "Оранжевый",
    genre: "Фантастика",
  },
  {
    title: "Граф Монте-Кристо",
    author: "Александр Дюма",
    year: 1844,
    coverColor: "Темно-зеленый",
    genre: "Приключения",
  },
  {
    title: "Вокруг света за 80 дней",
    author: "Жюль Верн",
    year: 1872,
    coverColor: "Коричневый",
    genre: "Приключения",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Фиолетовый",
    genre: "Мистика",
  },
];

books.push({
  title: "Старик и море",
  author: "Эрнест Хемингуей",
  year: 1952,
  coverColor: "Бирюзовый",
  genre: "Повесть",
});

console.log(books);

const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Джоан Роулинг",
    year: 1997,
    coverColor: "Серо-зеленый",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и тайная комната",
    author: "Джоан Роулинг",
    year: 1998,
    coverColor: "Синий",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Джоан Роулинг",
    year: 1999,
    coverColor: "Пурпурно-красный",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Джоан Роулинг",
    year: 2000,
    coverColor: "Кукурузно-желтый",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и Орден Феникса",
    author: "Джоан Роулинг",
    year: 2003,
    coverColor: "Сине-голубой",
    genre: "Фэнтези",
  },
];

const allBooks = [...books, ...harryPotterBooks];
console.log(allBooks);

function addRareFlag(bookArray) {
  return bookArray.map((book) => {
    return { ...book, isRare: book.year > 2000 };
  });
}

const rareBooks = addRareFlag(allBooks);
console.log(rareBooks);
