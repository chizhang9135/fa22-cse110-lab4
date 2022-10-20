1. What will happen at line 12 and why? If the code causes an error, explain why.
    >It will print 3.\
    Because there are 3 elements in the array, after i becomes 3, the loop will stop.

    <br>

2. What will happen at line 13 and why? If the code causes an error, explain why.
    >It will print 150.\
    This line will print the discount price of the third element in the array.


    <br>

3. What will happen at line 14 and why? If the code causes an error, explain why.
    >It will print 150\
    This line will print the rounded discount price as final price of the third element in the array.

    <br>

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
    >It will return the array [ 50, 100, 150 ].\
    The input array is [ 100, 200, 300 ], the discount is 50%, after the for loop and round the result, the output array is [ 50, 100, 150 ].

    <br>

5. What will happen at line 12 and why?  If the code causes an error, explain why.(assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   > It will be an error.\
   Becuase i is declare use let in the loop; after the for loop, i is no longer exist. Which will give as ReferenceError: i is not defined.

    <br>

6. What will happen at line 13 and why? If the code causes an error, explain why.
    > It will be an error.\
    Becuase discountedPrice is declare use let in the loop; after the for loop, discountedPrice is no longer exist. Which will give as ReferenceError: discountedPrice is not defined.

    <br>

7. What will happen at line 14 and why? If the code causes an error, explain why.
    >150\
    finalPrice is declare as let in the function, will is in scope inside the function. So it will print the finalPrice of the third element in the array.
    
    <br>

8.  What will this function return? Give a brief explanation. If the code causes an error, explain why.
    >[ 50, 100, 150 ]\
    The input array is [ 100, 200, 300 ], the discount is 50%, after the for loop and round the result, the output array is [ 50, 100, 150 ].
    Also, the discounted is declare as let in the function, will is in scope inside the function.

    <br>

9. What will happen at line 11 and why? If the code causes an error, explain why.
    >There will be an error.\
    Because the variable i is declared with let in the for loop, so it is only in scope inside the for loop. After the for loop, i is no longer exist. Which will give as ReferenceError: i is not defined.

    <br>

10. What will happen at line 12 and why? If the code causes an error, explain why.
    >3\
    Because the variable length is declared with let in the function, which is visible inside the function. So it will print the length of the array.

    <br>

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    >[ 50, 100, 150 ]\
    Discounted is declare as const in the function, which is visible inside the function.\
    Also, since it is a const array, we can change the value of the array, we just can't change the array itself.\
    Since the array is [ 100, 200, 300 ], the discount is 50%, after the for loop and round the result, the output array is [ 50, 100, 150 ].

    <br>

12. Given the Object, 
    ```
    let student = {
    name: "Sarah",
    major: "Computer Science",
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
    };
    ```
    write the notation for:
- A. Accessing the value of the name property in the student object
    >student.name
- B. Accessing the value of the Grad Year property in the student object
    >student['Grad Year']
- C. Calling the function for the greeting property in the student object
    >student.greeting()
- D. Accessing the name property of the object in the Favorite Teacher property in student
    >student['Favorite Teacher'].name
- E. Access index zero in the array of the courseLoad property of the student object
    >student.courseLoad[0]


    <br>

1.   Arithmetic
- A. ‘3’ + 2
  >32\
    Because since the first operand is a string, the second operand will be converted to a string as well. So it will be 32.

- B. ‘3’ - 2
    >1\
    Even though the first operand is a string, we subtract a number from it, so it will be converted to a number. So it will be 1.

- C. 3 + null
    >3\
    null will be converted to 0, so it will be 3.

- D. ‘3’ + null
    >3null\
    Since the first operand is a string, the second operand will be converted to a string as well. So it will be 3null.

- E. true + 3
    >4\
    true will be converted to 1, so it will be 4.

- F. false + null
    >0\
    false will be converted to 0, null will be converted to 0, so it will be 0.

- G. '3' + undefined
    >3undefined\
    Since the first operand is a string, the second operand will be converted to a string as well. So it will be 3undefined.

- H. '3' - undefined
    >NaN\
    Since we subtract a number from a string, the string will be converted to a number. But undefined will be converted to NaN, so it will be NaN.

    <br>

1.  Comparison    
- A. ‘2’ > 1
    >true\
    Since the first operand is a string, the second operand will be converted to a number. So it will be true.

- B. ‘2’ < ‘12’
   >false\
    Since both operands are strings, they will be compared lexicographically. So it will be false.

- C. 2 == ‘2’
    >true\
    Since the first operand is a number, the second operand will be converted to a number. So it will be true.

- D. 2 === ‘2’
    >false\
    Since the first operand is a number, the second operand will be converted to a number. But the type is different, so it will be false.

- E. true == 2
    >false\
    true will be converted to 1, so it will be false.
- F. true === Boolean(2)
    >true\
    Boolean(2) will be converted to true,true is true in same type, so it will be true.

    <br>

15. Explain the difference between the == and === operators.
    >== (loosely) will try to do type conversion before comparing the values.\
    === (strictly) will not do type conversion, it will compare the values and the types.

    <br>

16. In part2-question16.js

    <br>

17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    >[ 2, 4, 6 ]\
    The parameter of modifyArray is an array and a function.\
    input array is [ 1, 2, 3 ], the callback function is doSomething will double the input. After the for loop, the output array is [ 2, 4, 6 ].

    <br>

18. In part2-question18.js

    <br>

19. What is the output of the above code? 
    > Output:\
    ```
    1
    4
    3
    2
    ```
    Explanation:\
    The first output will is 1, there is no delay\ 
    The second output is 4, since there is no dalay and it's after 1.\
    The third output is 3 since the delay is 0.\
    The last output is 2 since the delay is 1000

     <br>

