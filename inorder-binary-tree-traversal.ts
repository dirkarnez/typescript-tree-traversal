    //         1
    //       /   \
    //     2      3
    //   /  \
    // 4     5


interface TreeNode<T> {
    content: T
    left?: TreeNode<T>
    right?: TreeNode<T>
}
const array:Array<TreeNode<string>> = [
    { // 0
        content: "1"
    },
    { // 1
        content: "2"
    },
    { // 2
        content: "3"
    },
    { // 3
        content: "4"
    },
    { // 4
        content: "5"
    }
]

array[0].left = array[1];
array[0].right = array[2];

array[1].left = array[3];
array[1].right = array[4];



const isProd = true;

// Step 1 Creates an empty stack: S = NULL
var stack:Array<TreeNode<string>> = [];

// Step 2 sets current as address of root: current -> 1
var current = array[0];
!isProd && console.log(`[DEBUG] pushing ${current.content}`);
stack.push(current);

while ((!!current.left) && (current = current.left)) {
    !isProd && console.log(`[DEBUG] pushing ${current.content}`);
    stack.push(current);
}

var temp = undefined;
while ((!!(temp = stack.pop())) && (current = temp)) {
    !isProd && console.log(`[DEBUG] popping ${current.content}`);

    console.log(`[PROD] ${current.content}`);
    
    if (!!current.right) {
        current = current.right;
        !isProd && console.log(`[DEBUG] right ${current.content}`);
        console.log(`[PROD] ${current.content}`);
    }
}


console.log(`finally stack.length must be zero? = ${stack.length === 0}`);

// Step 3 Pushes the current node and set current = current->left 
//        until current is NULL
//      current -> 1
//      push 1: Stack S -> 1
//      current -> 2
//      push 2: Stack S -> 2, 1
//      current -> 4
//      push 4: Stack S -> 4, 2, 1
//      current = NULL

// Step 4 pops from S
//      a) Pop 4: Stack S -> 2, 1
//      b) print "4"
//      c) current = NULL /*right of 4 */ and go to step 3
// Since current is NULL step 3 doesn't do anything. 

// Step 4 pops again.
//      a) Pop 2: Stack S -> 1
//      b) print "2"
//      c) current -> 5/*right of 2 */ and go to step 3

// Step 3 pushes 5 to stack and makes current NULL
//      Stack S -> 5, 1
//      current = NULL

// Step 4 pops from S
//      a) Pop 5: Stack S -> 1
//      b) print "5"
//      c) current = NULL /*right of 5 */ and go to step 3
// Since current is NULL step 3 doesn't do anything

// Step 4 pops again.
//      a) Pop 1: Stack S -> NULL
//      b) print "1"
//      c) current -> 3 /*right of 1 */  

// Step 3 pushes 3 to stack and makes current NULL
//      Stack S -> 3
//      current = NULL

// Step 4 pops from S
//      a) Pop 3: Stack S -> NULL
//      b) print "3"
//      c) current = NULL /*right of 3 */  

// Traversal is done now as stack S is empty and current is NULL.
