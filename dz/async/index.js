

function func1(callback) {
    setTimeout(() => {
        console.log("Task 1");
        callback();
}, 3000);
}

function func2() {
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
}