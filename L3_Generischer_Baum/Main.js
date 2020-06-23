"use strict";
class TreeNode {
    constructor(_value) {
        this.childs = [];
        this.value = _value;
    }
    toString() {
        return this.value + "";
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
    getTreeAsString(_depth = 0) {
        let treeAsString = this.value + "\n";
        let depthAsString = "";
        for (let i = 0; i < _depth; i++)
            depthAsString += "*";
        treeAsString = "" + depthAsString + treeAsString;
        _depth++;
        for (let i = 0; i < this.childs.length; i++) {
            treeAsString += "" + this.childs[i].getTreeAsString(_depth);
        }
        return treeAsString;
    }
    printTree() {
        console.log(this.getTreeAsString());
    }
    search(_pattern, _result = []) {
        if (_pattern(this.value))
            _result.push(this);
        for (let i = 0; i < this.childs.length; i++)
            this.childs[i].search(_pattern, _result);
        return _result;
    }
}
class Tree {
    constructor() {
        this.nodes = [];
        this.observers = [];
    }
    registerObserver(_observer) {
        this.observers.push(_observer);
    }
    removeObserver(_observer) {
        this.observers.splice(this.observers.indexOf(_observer), 1);
    }
    notifyObservers() {
        for (let observer of this.observers)
            observer.update(this.nodes.length);
    }
    createNode(_newNode) {
        let newNode = new TreeNode(_newNode);
        this.nodes.push(newNode);
        this.notifyObservers();
        return newNode;
    }
}
class TreeObserver {
    update(_countNodes) {
        console.log("Anzahl der Knoten: " + _countNodes);
    }
}
function* iAmAGenerator(_tree) {
    for (let i = 0; i < _tree.nodes.length; i++) {
        const inside = _tree.nodes[i].toString();
        yield inside;
    }
}
let tree = new Tree();
let root = tree.createNode("root");
const iterator = iAmAGenerator(tree);
let observer1 = new TreeObserver();
tree.registerObserver(observer1);
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
console.log(iterator.next());
// root.printTree();
// console.log(root.search(x => x.includes("212")));
//# sourceMappingURL=Main.js.map