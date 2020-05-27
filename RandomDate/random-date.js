function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.get()));
}

console.log(randomDate(new Date(2020, 0, 1), newDate()));