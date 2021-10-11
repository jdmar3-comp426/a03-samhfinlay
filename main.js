import { sumToString, getIncreasingArray, maxAndMin, countArray } from "./src/mild/mild_1.js";
import { identifyVariable, identifyArray, removeKey } from "./src/mild/mild_2.js";
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
removeKey(obj, 'password');
console.log(obj);
