class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

/*
Example: Making the tree
 div
 / \
p   p
*/
// const domTree = new Tree();
// const div = new Node("div");
// domTree.root = div;
// const p = new Node("p");
// const ul = new Node("ul");
// div.children.push(p);
// div.children.push(ul);
// const li1 = new Node("li")
// const li2 = new Node("li")
// const li3 = new Node("li")
// ul.children.push(li1)
// ul.children.push(li2)
// ul.children.push(li3)

const domTree = new Tree();
const three = new Node(3);
domTree.root = three;
const four = new Node(4);
const five = new Node(5);
const eight = new Node(8)
three.children.push(four);
three.children.push(five);
three.children.push(eight)
const six = new Node(6)
four.children.push(six)


/*
Example: Printing out the tree as "HTML"
<div>
<p>
</p>
<p>
</p>
</div>
*/

// let sum = 0;

function processTree(node) {
  // console.log(`<${node.data}>`);
  console.log(node.data)
  for (const child of node.children) {
    processTree(child);
  }
  // console.log(`</${node.data}>`);
  // console.log(node.data)
}

function processTree1(node) {
  // console.log(`<${node.data}>`);
  // console.log(node.data)
  for (const child of node.children) {
    processTree(child);
  }
  console.log(node.data)
  // console.log(`</${node.data}>`);
}

const root = domTree.root;
processTree(root);
console.log()
processTree1(root);

function levelOrder(root) {
  let result = [];
  let Q = []; 
  if (root != null) {
    Q.push(root);
    while(Q.length > 0) {
      let node = Q.shift();
      result.push(node.data);
      for (const child of node.children) {
        Q.push(child)
      }
    };
    return result;
  } else {
    return null;
  };
};

levelOrder(root)
