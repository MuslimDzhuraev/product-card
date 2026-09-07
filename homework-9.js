/**
 * ============================================================
 * homework-9.js
 * Домашнее задание по курсу Frontend-разработки
 * Тема: Работа с массивами, функциями, модулями и методами массивов
 * Студент: [Муслим Джураев]
 * Дата: 2026-09-07
 * ============================================================
 */
import { comments } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filtered = numbers.filter((num) => num >= 5);
console.log(filtered);

const movies = [
  "Gladiator",
  "Spider-man",
  "Troy",
  "Harry-Potter",
  "Kingdom of Narnia",
];
function checkMovieExists(movieName) {
  if (typeof movieName !== "string") {
    console.error("Некорректные входные параметры: ожидается строка");
    return false;
  }
  return movies.includes(movieName);
}

console.log("Задание 3 (функция, Gladiator):", checkMovieExists("Gladiator"));
console.log("Задание 3 (функция, Avatar):", checkMovieExists("Avatar"));
console.log(
  "Задание 3 (функция, некорректный параметр):",
  checkMovieExists(123),
);

function reverseArray(arr) {
  return arr.reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedMovies = reverseArray(movies);

console.log(reversedNumbers);
console.log(reversedMovies);
console.log(comments);

function filterCommentsByDomain(commentsArray, domain) {
  if (!Array.isArray(commentsArray)) {
    console.error("Некорректные входные параметры: ожидается массив");
    return [];
  }
  if (typeof domain !== "string") {
    console.error("Некорректные входные параметры: ожидается строка");
    return [];
  }
  return commentsArray.filter((comment) => comment.email.includes(domain));
}

const filteredByCom = filterCommentsByDomain(comments, ".com");
console.log("Задание 7 (функция, .com):", filteredByCom);

const filteredByBiz = filterCommentsByDomain(comments, ".biz");
console.log("Задание 7 (функция, .biz):", filteredByBiz);
console.log(
  "Задание 7 (функция, не массив):",
  filterCommentsByDomain("не массив", ".com"),
);
console.log(
  "Задание 7 (функция, не строка):",
  filterCommentsByDomain(comments, 123),
);

const updatedComments = comments.map((comment) =>
  comment.id <= 5 ? { ...comment, postId: 2 } : { ...comment, postId: 1 },
);
console.log(updatedComments);

const simplifiedComments = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(simplifiedComments);

const commentsWithFlag = comments.map((comment) => {
  return {
    ...comment,
    isInvalid: comment.body.length > 180,
  };
});

console.log(commentsWithFlag);

const emailsWithReduce = comments.reduce((accumulator, currentComment) => {
  accumulator.push(currentComment.email);
  return accumulator;
}, []);

const emailsWithMap = comments.map((comment) => comment.email);
console.log(emailsWithMap);
console.log(emailsWithReduce);

const emails = emailsWithMap;
const emailsString1 = emails.toString();
console.log(emailsString1);

const emailsString2 = emails.join("; ");
console.log(emailsString2);
