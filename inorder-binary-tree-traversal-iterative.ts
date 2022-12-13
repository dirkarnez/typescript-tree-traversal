const isProd = false;

interface TreeNode<T> {
    content: T
    left?: TreeNode<T>
    right?: TreeNode<T>
}



function inOrder<T>(root: TreeNode<T>) {
    // Step 1 Creates an empty stack: S = NULL
    var stack:Array<TreeNode<T>> = [];

    // Step 2 sets current as address of root: current -> 1
    var current: TreeNode<T> | undefined = root;


    while (!!current || stack.length > 0) {
        if (!!current) {
            stack.push(current);
            current = current.left;
        } else {
            let temp = stack.pop();
            if (!!temp) {
                console.log(temp.content);
                current = temp.right;
            }
        }
    }





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
}

//         1
//       /   \
//     2      3
//   /  \
// 4     5
// 4->2->5->1->3

const arrayA:Array<TreeNode<string>> = [
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

arrayA[0].left = arrayA[1];
arrayA[0].right = arrayA[2];

arrayA[1].left = arrayA[3];
arrayA[1].right = arrayA[4];

inOrder(arrayA[0]);



//    A   
//   / \  
//  B   C 
// / \ / \
// D E F  G
// D->B->E->A->F->C->G

const arrayB:Array<TreeNode<string>> = [
    { // 0
        content: "A"
    },
    { // 1
        content: "B"
    },
    { // 2
        content: "C"
    },
    { // 3
        content: "D"
    },
    { // 4
        content: "E"
    },
    { // 5
        content: "F"
    },
    { // 6
        content: "G"
    }
]

arrayB[0].left = arrayB[1];
arrayB[0].right = arrayB[2];

arrayB[1].left = arrayB[3];
arrayB[1].right = arrayB[4];

arrayB[2].left = arrayB[5];
arrayB[2].right = arrayB[6];

inOrder(arrayB[0]);
