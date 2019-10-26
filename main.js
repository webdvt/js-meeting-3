// 1. Call Back
const posts = [];

function createPost(post) {
  setTimeout(() => {

  }, 2000);
}

function getPosts() {
  setTimeout(function () {

  }, 1000);
}

// createPost({ title: 'Post Three', body: 'This is post three' });
// getPosts();

// Observation?

/* Even though we invoked the createPost() function first, we logged out the
result of that function after the getPosts() function. */

/* It’s not that JavaScript didn’t execute our functions in the order we wanted it to,
it’s instead that JavaScript didn’t wait for a response from createPost() before moving
on to execute getPosts() */

// createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

// Lesson here:

/* you can’t just call one function after another and hope they execute in the right
order. Callbacks are a way to make sure certain code doesn’t execute until other code
has already finished execution. */

// 2. Promise

function createPost2(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

    }, 2000);
  });
}

// createPost2({ title: 'Post Three', body: 'This is post three' })
//   .then(getPosts)
//   .catch(err => console.log(err));

// Difference between callback and promise?

/* The main difference between callbacks and promises is that with
callbacks you tell the executing function what to do when the
asynchronous task completes, whereas with promises the executing
function returns a special object to you (the promise) and then
you tell the promise what to do when the asynchronous task completes. */

/* That is, instead of providing a function reference as an argument to asyncFunc (as you
would with callbacks), asyncFunc immediately returns a promise to you, and then you
provide the action to be taken when the asynchronous task completes to this promise
(through its then method). */

// Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye');
});

// Promise.all([promise1, promise2, promise3])
// //   .then((values) => {
// //     console.log(values);
// //   });

// Observation?

/* Got an array of data from the three promises. */

// Lesson:

/* Returns the data from all of our promises after
all of them are either resolved or rejected */

// 3. Async/Await Syntax
function init() {

}

// init();

// Lesson:

/* Async/Await is just syntactic sugar for working with promises.
Basically, you can declare a function to be async, which allows
you to use the await keyword in the body of this function. */

/* The await keyword can be put in front of an expression that
evaluates to a promise. The await keyword pauses the execution
of the async function until the promise is resolved. When this
happens, the entire await expression evaluates to the result
value of the promise, and then the execution of the async function resumes. */

// Why use Async/Await instead of promises?

/* async/await version is much more readable and easier to understand
than the promise version. In fact, the main innovation of async/await
is to allow to write asynchronous code with promises that “looks like”
synchronous code.*/

