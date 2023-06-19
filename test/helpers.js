const chai = require('chai')
const sinon = require('sinon')
global.expect = chai.expect
const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code

jsdom({
  html, src
});
const cats = ["Milo", "Otis", "Garfield"];

module.exports = { cats };
//const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (name) => {
  cats.push(name);
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
};

const appendCat = (name) => {
  return [...cats, name];
};

const prependCat = (name) => {
  return [name, ...cats];
};

const removeLastCat = () => {
  return cats.slice(0, -1);
};

const removeFirstCat = () => {
  return cats.slice(1);
};

module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
