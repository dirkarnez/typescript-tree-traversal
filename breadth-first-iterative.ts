const isProd = false;

interface TreeNode<T> {
    content: T
    left?: TreeNode<T>
    right?: TreeNode<T>
}


//         1
//       /   \
//     2      3
//   /  \
// 4     5
// 4->2->5->1->3

const arrayA: Array<TreeNode<string>> = [
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



function breadthBinaryFirstSearch<T>(root: TreeNode<T>) {
    // create a queue and a variable to store the values of nodes visited  
    let queue: Array<TreeNode<T>> = []
    let result: Array<TreeNode<T>> = []
    
    debugger;

    // initiate a node variable to store the current node
    let node: TreeNode<T>;

    // push the root node to the queue   
    queue.push(root);

    // loop as long as there is anything in the queue
    while (queue.length) {
        // dequeue a node from the queue 
        // push the visited node into the result
        const temp = queue.shift();
        if (!temp) {
            break;
        }

        node = temp;
        result.push(node);

        const left = node.left;
        const right = node.right;
        
        // push children to the queue
        if (!!left) {
            queue.push(left);
        }
        if (!!right) {
            queue.push(right);
        }
        console.log(`layer ${node.content}: ${queue.map(element => element.content)}`)
    }

    //return final traversed nodes array
    return result;

}

console.log(`breadthBinaryFirstSearch: ${breadthBinaryFirstSearch(arrayA[0]).map(element => element.content)}`);


interface TreeNodeWithChildren<T> {
    content: T
    children?: Array<TreeNode<T>>
}


//         1
//       /   \
//     2      3
//   /  \
// 4     5
// 4->2->5->1->3

const arrayB: Array<TreeNodeWithChildren<string>> = [
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

arrayB[0].children = [arrayB[1], arrayB[2]];
arrayB[1].children = [arrayB[3], arrayB[4]];

function breadthChildrenFirstSearch<T>(root: TreeNodeWithChildren<T>) {
    // create a queue and a variable to store the values of nodes visited  
    let queue: Array<TreeNodeWithChildren<T>> = []
    let result: Array<TreeNodeWithChildren<T>> = []

    debugger;
    // initiate a node variable to store the current node
    let node: TreeNodeWithChildren<T>;

    // push the root node to the queue   
    queue.push(root);

    // loop as long as there is anything in the queue
    while (queue.length) {
        // dequeue a node from the queue 
        // push the visited node into the result
        const temp = queue.shift();
        if (!temp) {
            break;
        }

        node = temp;
        result.push(node);

        const children = node.children;
        
        // push children to the queue
        if (Array.isArray(children)) {
            children.forEach(child => {
                queue.push(child);
            });
        }

        console.log(`layer ${node.content}: ${queue.map(element => element.content)}`)
    }

    //return final traversed nodes array
    return result;
}


console.log(`breadthChildrenFirstSearch: ${breadthChildrenFirstSearch(arrayB[0]).map(element => element.content)}`);
