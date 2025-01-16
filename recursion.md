# What is Recursion?

A function that calls it's self until it reaches some stopping condition

Any situation where you do something, and depending on the results, you might do it again

## Has 2 parts

1. Base Case - stopping condition to exit
2. The recursive call to that function

## Why you might use a recursive function over an iterator

### 1. Working with Recursive Data Structures (Trees, Graphs, Nested Objects/Arrays)

When dealing with data structures that have a recursive nature (like trees or graphs), recursive functions are often more intuitive because they naturally mirror the structure of the data.

### 2. Divide and Conquer Algorithms

Algorithms like quicksort, mergesort, and binary search naturally lend themselves to recursion due to their divide-and-conquer approach.

### 3. Backtracking Problems

Problems that require trying all possible solutions (like solving mazes, N-Queens, or Sudoku) are often solved using recursion with backtracking.

### 4. Problems with Unknown or Variable Depth

When the depth of the operation is unknown or varies dynamically (e.g., navigating nested directories or deeply nested JSON objects), recursion handles this more gracefully than iterators.
