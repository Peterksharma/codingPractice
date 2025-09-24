/**
 * @return {Generator<number>}
 */

var fibGenerator = function*() {

    let a = 0
    let b = 1

    while(true) {
        yield a
        let temp = a
        a = b
        b += temp
    }

    };


const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2