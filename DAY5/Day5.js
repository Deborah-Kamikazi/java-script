let counter = 100;
console.log(counter);
{
    counter = 200;
    console.log(counter);
}
console.log(counter);
//declaring in block
let counters = 100;
console.log(counters);
{
    let counters = 200;
    console.log(counters);
}
console.log(counters);

//use function

var counterse = 100;
function testfunction()
{
    var counterse = 200;
    console.log(counterse);
}
console.log(counterse);
testfunction();
console.log(counters);
