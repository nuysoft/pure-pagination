var Pagination = require('./pagination'),
	assert = require('assert');

var data = [];
for (var i = 0; i < 100; i++) {
	data.push(Math.random());
}

var p = new Pagination(data, 1, 10);

assert.equal(p.total, 100, 'total');
assert.equal(p.pages, 10, 'pages');
assert.equal(p.cursor, 1, 'cursor');
assert.equal(p.start, 0, 'start');
assert.equal(p.end, 10, 'end');
assert.equal(p.hasPrev, false, 'hasPrev');
assert.equal(p.hasNext, true, 'hasNext');
assert.equal(p.hasFirst, false, 'hasFirst');
assert.equal(p.hasLast, true, 'hasLast');
assert.equal(p.prev, 0, 'prev');
assert.equal(p.next, 2, 'next');
assert.equal(p.first, 0, 'first');
assert.equal(p.last, 10, 'last');
assert.equal(p.focus, 0, 'focus');

// 
p.to(2);
assert.equal(p.pages, 10, 'pages');
assert.equal(p.cursor, 2, 'cursor');
assert.equal(p.start, 10, 'start');
assert.equal(p.end, 20, 'end');
assert.equal(p.hasPrev, true, 'hasPrev');
assert.equal(p.hasNext, true, 'hasNext');
assert.equal(p.hasFirst, true, 'hasFirst');
assert.equal(p.hasLast, true, 'hasLast');
assert.equal(p.prev, 1, 'prev');
assert.equal(p.next, 3, 'next');
assert.equal(p.first, 1, 'first');
assert.equal(p.last, 10, 'last');
assert.equal(p.focus, 10, 'focus');

p.toNext();
assert.equal(p.pages, 10, 'pages');
assert.equal(p.cursor, 3, 'cursor');
assert.equal(p.start, 20, 'start');
assert.equal(p.end, 30, 'end');
assert.equal(p.hasPrev, true, 'hasPrev');
assert.equal(p.hasNext, true, 'hasNext');
assert.equal(p.hasFirst, true, 'hasFirst');
assert.equal(p.hasLast, true, 'hasLast');
assert.equal(p.prev, 2, 'prev');
assert.equal(p.next, 4, 'next');
assert.equal(p.first, 1, 'first');
assert.equal(p.last, 10, 'last');
assert.equal(p.focus, 20, 'focus');

p.setTotal(88);
assert.equal(p.pages, 9, 'pages');
assert.equal(p.cursor, 3, 'cursor');
assert.equal(p.start, 20, 'start');
assert.equal(p.end, 30, 'end');
assert.equal(p.hasPrev, true, 'hasPrev');
assert.equal(p.hasNext, true, 'hasNext');
assert.equal(p.hasFirst, true, 'hasFirst');
assert.equal(p.hasLast, true, 'hasLast');
assert.equal(p.prev, 2, 'prev');
assert.equal(p.next, 4, 'next');
assert.equal(p.first, 1, 'first');
assert.equal(p.last, 9, 'last');
assert.equal(p.focus, 20, 'focus');

p.setCursor(6);
assert.equal(p.pages, 9, 'pages');
assert.equal(p.cursor, 6, 'cursor');
assert.equal(p.start, 50, 'start');
assert.equal(p.end, 60, 'end');
assert.equal(p.hasPrev, true, 'hasPrev');
assert.equal(p.hasNext, true, 'hasNext');
assert.equal(p.hasFirst, true, 'hasFirst');
assert.equal(p.hasLast, true, 'hasLast');
assert.equal(p.prev, 5, 'prev');
assert.equal(p.next, 7, 'next');
assert.equal(p.first, 1, 'first');
assert.equal(p.last, 9, 'last');
assert.equal(p.focus, 50, 'focus');


console.log('All done.');