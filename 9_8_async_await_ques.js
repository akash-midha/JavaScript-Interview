async function test() {
    try {
        await Promise.reject("Oops!");
    } catch (err) {
        console.log("Caught:", err);
    }

    return "Done";
}

test().then(console.log);

//   Caught: Oops!
//   Done
