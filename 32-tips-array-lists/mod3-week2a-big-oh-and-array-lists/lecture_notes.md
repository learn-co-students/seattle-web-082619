# Big-O Notation and Array Lists
The main point of this lecture is to introduce students to Big-O notation and
show them that different common array operations have different efficiencies.

## SWBATS
* Explain the difference between rigid `Arrays` and squishy `Lists`
* Give examples of common O(N) `Array` operations
* Give examples of common O(1) `List` operations
* Give examples of common O(N) `List` operations

## Example Code
* [ArrayList Implementation](./ArrayList.js)

## Schedule
* Compare and Contrast Arrays vs Lists
* Build a `List` class using an `Array`
  * Do methods in this order:
  * `.constructor()`
  * `.set()`
  * `.get()`
  * `.pop()`
    * how do you keep track of how much the array is being used? (`.size` vs `.capacity` properties)
    * how can you "erase" items from a list? (write over them)
    * what happens when the array is empty? (pop should check for this and simply return)
  * `.append(value)` / `.push(value)`
    * what happens when the internal `Array` is full? (build the private grow method)
  * `._grow()`
    * why is this method private? (the class can invoke this internally)
  * `.insertAtIndex(index, value)`
  * `.removeAtIndex(index)`
* Introduce and discuss Big-O
* Identify the Big-O of each of the methods so far
* Build these methods and analyze their complexity
  * `.indexOf(value)`
  * `.isSorted()`
  * `.containsDuplicates()`
* Conclude

## Arrays vs Lists
This lecture makes a distinction between and `Array` and a `List`. Most of what
we have called an "array" in Ruby and JavaScript is actually more list-like.

A proper `Array` has the following properties:

* It is created once with one initial size and its size never changes.
* It only supports these two operations:
  * Get: `x = a[i]`
  * Set: `a[i] = 42`

A proper `Array` does not have these common operations that we're used to.
Instead, now we will consider these as things that make up a `List`:

* A `List` is created "empty" and its size appears to grow and shrink over time.
* A `List` can `get(i)` or `set(index, value)` indexes and values.
* A `List` can add elements in the front, anywhere in the middle or the end.
* A `List` can remove elements in the front, anywhere in the middle or the end.

The `Array` is the more fundamental data structure. A `List` is built out of an
array. Today we will learn how to take a rigid, always-same-size, never-changing
`Array` and use it to build a quishy `List` that appears to have its size change
all the time by adding and removing elements from anywhere we want.

## Big-O
As we build a `List` out of an `Array` we will add functionality method by
method. We will find out some functionality is more efficient than other
functionality. Big-O is a notation we can use to compare how different
operations perform efficiently compared to how many items are in our
`Array` or `List`.

### Common Big-O Notattions

#### O(1) Constant Time
This operations takes the same amount of time now atter how many items are in
our data structure.

If you send a moving truck from LA to New York it's going to take a few days
no matter if the truck is totally empty or if it's packed totally full.

If you greet a convention of people by saying "Hello!" and waving then it will
take you a short amount of time no matter if the convention is empty or full.

#### O(N) Linear Time
If you greet a convention of people by shaking everyone's hand one-by-one it will
take more time the more people that are there. It will take `N` more time.

* If there are 10 people there you must shake 10 hands.
* If there are 50 people there you must shake 50 hands.
* If there are 1,000 people there you must shake each of their 1,000 hands.

Algorithms that run in `O(N)` time take longer to run the more things there
are in your data structure.

#### O(N^2) Quadratic Time
If everyone in a convention wants to meet each other each person must shake each
other person's hand.

If there are `100` people each person has to shake `99` other peoples hands.
That's basically `100 * 99 = 9,900` handshakes. (In reality there's about half
as many as that because each handshake involves two people).

In fact when we use Big-O we don't care about numbers like `N` people shaking
`N - 1` other people's hands and dividing that by one half and writing that like
`1/2 * O(N * N-1)`

Instead we just write `O(N^2)` and say "well that's way worse than just `O(N)`
linear time."

Writing the most simple form of `O(N^2)` is sufficient to convey how the procedure
grows exponentially more slowly the more people are present.

#### O(log N) Logarithmic Time
This common Big-O classification basically represents cutting something in half
over and over. It's extremely efficient.

Consider looking for a word in a dictionary. If you looked for the word by starting
at the front of the book and looking at each word you would have to look at every word
until you found the word you were looking for. This would be a `O(N)` approach.

Instead of looking at every word you can be smarter. Open the dictionary
halfway and see what word is in the middle. If the word you're looking for
occurs alphabetically before the word in the middle you can crack the front
half of the dictionary open in the middle and look at what word is there.

Looking for a word in a dictionary is a classic example of what's called a binary search
and it is an extremely efficient algorithm for finding something in a sorted set of data.

Binary Searches have a Big-O of `O(log N)` time.

#### What Does O(log N) Mean?
`O(log N)` basically means "how many times do I have to cut this set of things
in half before I get down to just one thing?

Check out this info to see how efficient logarithmic-time algorithms are:

* If you have just two things `N=2` you only need to cut your things in half once
* If you have `N=4` things you need to cut things in half twice before you get to just one.
  First from `4` to `2`, then from `2` to `1`.
* Even if you have `N=1,000,000` a million things you only need to cut that
  pile in half `20` times before you get down to just one thing.
  * one million cuts in half to `500,000`
  * `500,000` cuts in half to `250,000`
  * `250,000` cuts in half to `125,000`
  * and just with those three cuts in half you've already eliminated searching
    through 75% of your whole dictionary!

```
log2(N=2)  = 1
log2(N=4)  = 2
log2(N=8)  = 3
log2(N=16) = 4
log2(N=32) = 5
log2(N=64) = 6
...
log2(N=10,000) = 13.2877123795
...
log2(N=1,000,000) = 19.9315685693
``` 

If you looked at every word sequentially in a one-million-word dictionary you
would look at literally `1,000,000` words. This would be a `O(N)` algorithm
because it takes exactly how much time as the number of things you have.

Clever algorithms like Binary Search offer us huge time savings where even if
we have `1,000,000` things to look at we only have to look at just `20` of them
because cutting things in half at every step is so powerful.

#### Algorithm Rankings
* `O(1)` - are generally the best algorithms.
* `O(log N)` - are generally absolutely fantastic.
* `O(N)` - are ok, but there might be a better way to do things.
* `O(N^2)` - may or may not have a better way to do things, but you should really definitely look!
