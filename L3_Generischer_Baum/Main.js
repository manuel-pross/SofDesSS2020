"use strict";
class TreeNode {
    constructor(_name) {
        this.childs = [];
        this.name = _name;
    }
    appendChild(_newChild) {
        _newChild.parent = this;
        this.childs.push(_newChild);
    }
    removeChild(_child) {
        for (let i = 0; i < this.childs.length; i++)
            if (_child === this.childs[i])
                this.childs.splice(i, 1);
    }
    printTree(_depth = 0) {
        let treeAsString = this.name + "\n";
        let depthAsString = "";
        for (let i = 0; i < _depth; i++)
            depthAsString += "*";
        treeAsString = "" + depthAsString + treeAsString;
        _depth++;
        for (let i = 0; i < this.childs.length; i++) {
            treeAsString += "" + this.childs[i].printTree(_depth);
        }
        return treeAsString;
    }
}
class Tree {
    createNode(_newNode) {
        let newNode = new TreeNode(_newNode);
        return newNode;
    }
}
let tree = new Tree();
let root = tree.createNode("root");
let child1 = tree.createNode("child1");
let child2 = tree.createNode("child2");
let grand11 = tree.createNode("grand11");
let grand12 = tree.createNode("grand12");
let grand13 = tree.createNode("grand13");
let grand21 = tree.createNode("grand21");
let grand22 = tree.createNode("grand22");
let grand212 = tree.createNode("grand212");
root.appendChild(child1);
child1.appendChild(grand11);
child1.appendChild(grand12);
child1.appendChild(grand13);
child2.appendChild(grand21);
root.appendChild(child2);
grand21.appendChild(grand212);
child2.appendChild(grand22);
console.log(root.printTree());
//# sourceMappingURL=Main.js.map