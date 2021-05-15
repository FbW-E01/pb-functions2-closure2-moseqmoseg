// 1. What’s the result of executing this code and why.
//   ```
// You get undefined because variables don’t retain any assigned value, so basically the variable in this case is declared but has no value. If you were to move it to the top of the function then it would print the value.

function test() {
    console.log(a);
    console.log(foo());

    var a = 1;

    function foo() {
        return 2;
    }
}

test();
// //   ```

// // 2. What is result?
// //   ```
// result is 5, since the var ''a'' has been changed and none of the other parameters really affect the result.
var a = 1;

function someFunction(number) {
    function otherFunction(input) {
        return a;
    }

    a = 5;

    return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);

// //   ```

// // 3. What is the result of the following code? Explain your answer.

var fullname = "John Doe";
var obj = {
    fullname: "Colin Ihrig",
    prop: {
        fullname: "Aurelio De Rosa",
        getFullname: function() {
            return this.fullname;
        },
    },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

// // 4. What will you see in the console for the following example?
// because the function a() {} statement has now created 
// a local a that has a functional/local scope. 
var a = 1;

function b() {
    a = 10;
    return;

    function a() {}
}
b();
console.log(a);