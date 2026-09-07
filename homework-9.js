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
const isFound = movies.includes("Spider-man");
console.log(isFound);

function reverseArray(arr) {
  return arr.reverse();
}

const reversedNumbers = reverseArray(numbers);
const reversedMovies = reverseArray(movies);

console.log(reversedNumbers);
console.log(reversedMovies);
console.log(comments);

const filteredComments = comments.filter((comment) =>
  comment.email.includes(".com"),
);

console.log(filteredComments);

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
