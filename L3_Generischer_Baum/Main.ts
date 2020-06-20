class TreeNode<T> {
    public name: T;
    public childs: TreeNode<T>[] = [];
    public parent: TreeNode<T>;

    constructor(_name: T) {
        this.name = _name;
    }

    public appendChild(_newChild: TreeNode<T>): void {
        _newChild.parent = this;
        this.childs.push(_newChild);
    }

    public removeChild(_child: TreeNode<T>): void {
        for (let i: number = 0; i < this.childs.length; i++)
            if (_child === this.childs[i])
                this.childs.splice(i, 1);
    }

    public printTree(_depth: number = 0): String {
        let treeAsString: String = this.name + "\n";
        let depthAsString: String = "";

        for (let i: number = 0; i < _depth; i++)
            depthAsString += "*";     

        treeAsString = "" + depthAsString + treeAsString;
        _depth++;

        for (let i: number = 0; i < this.childs.length; i++) {
            treeAsString += "" +  this.childs[i].printTree(_depth);
        }
                
        return treeAsString;
    }

    // public search(_pattern: T): TreeNode<T> {
    //     let result: TreeNode<T> = null;

    //     if (this.name == _pattern) {
    //         result = this;
    //         return result;
    //     }
    //     else {
    //         for (let i: number = 0; i < this.childs.length; i++) {

    //         }
    //     }
    // }
}

class Tree<T> {

    public createNode(_newNode: T): TreeNode<T> {
        let newNode: TreeNode<T>  = new TreeNode<T>(_newNode);
        return newNode;
    }
}

let tree: Tree<String> = new Tree<String>();
let root: TreeNode<String> = tree.createNode("root");
let child1: TreeNode<String> = tree.createNode("child1");
let child2: TreeNode<String> = tree.createNode("child2");
let grand11: TreeNode<String> = tree.createNode("grand11");
let grand12: TreeNode<String> = tree.createNode("grand12");
let grand13: TreeNode<String> = tree.createNode("grand13");
let grand21: TreeNode<String> = tree.createNode("grand21");
let grand22: TreeNode<String> = tree.createNode("grand22");
let grand212: TreeNode<String> = tree.createNode("grand212");
root.appendChild(child1);
child1.appendChild(grand11);
child1.appendChild(grand12);
child1.appendChild(grand13);
child2.appendChild(grand21);
root.appendChild(child2);
grand21.appendChild(grand212);
child2.appendChild(grand22);

console.log(root.printTree());

