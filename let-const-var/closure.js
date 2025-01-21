function printColor() {
    var color = 'blue';
    return function() {
        console.log(color);
    }
}

const pc = printColor();
pc();

function increaseCount() {
    let count = 1;
    return function generateCount() {
        return count++;
    }
}

const ic = increaseCount();
console.log(ic());
console.log(ic());
console.log(ic());
console.log(ic());
console.log(ic());

console.log('--------------------------------');
const counter = (function(){
    let count = 1;
    return {
        increment: function() {
            return count++;
        },
        decrement: function() {
            return count--;
        },
        getCount: function() {
            return count;
        }
    }
    
    
})();

console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getCount());
