// Array .join(delemeter)

// Declaration
/* The join() method is a powerful tool in JavaScript for manipulating arrays. 
** It takes an array as input and returns a string by concatenating all the array elements, 
** separated by a specified delimiter. 
** The delimiter can be any string, 
** including an empty string, which means the array elements will be concatenated without any separator. 
*/

// Syntax => array.join(delemeter)
const arr1 = ['a', 't', 'e', 'f'];
const name = arr1
name


// Did the join() method change the original array?
// No, it did not change the original array. It returned a new string.
arr1


// Key Points
/* Delimiter: 
** The optional parameter passed to join() specifies the delimiter used to separate the elements. 
** If no delimiter is provided, a comma (,) is used by default.*/
const name1 = arr1.join(' ')
const name2 = arr1.join(', ')
const name3 = arr1.join('')
const name4 = arr1.join()
name4


/* String Conversion: 
** Each element in the array is implicitly converted to a string before being joined. */
const arr3 = ['atef', '123', 456, true, null];
const nameStr=arr3.join('-')
nameStr
console.log('' ===null)


/* Loss of Array Structure: 
** The original array structure is lost after the join() operation. */

// When to use join()
// Use the join() method when you need to concatenate array elements into a single string,
// and you want to specify a custom delimiter to separate the elements.
// Example: Creating a comma-separated list of names.




// Use the join() method to build a complex strings like URLs

