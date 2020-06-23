interface Subject {
    registerObserver(_observer: Observer): void;

    removeObserver(_observer: Observer): void;

    notifyObservers(): void;
}

interface Observer {
    update(_countNodes: number): void;
}


class TreeNode<T> {
    public value: T;
    public childs: TreeNode<T>[] = [];
    public parent: TreeNode<T>;

    constructor(_value: T) {
        this.value = _value;
    }

    public toString(): String {
        return this.value + "";
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

    public getTreeAsString(_depth: number = 0): String {
        let treeAsString: String = this.value + "\n";
        let depthAsString: String = "";

        for (let i: number = 0; i < _depth; i++)
            depthAsString += "*";     

        treeAsString = "" + depthAsString + treeAsString;
        _depth++;

        for (let i: number = 0; i < this.childs.length; i++) {
            treeAsString += "" +  this.childs[i].getTreeAsString(_depth);
        }
                
        return treeAsString;
    }

    public printTree(): void {
        console.log(this.getTreeAsString());
    }

    public search(_pattern: (_value: T) => boolean, _result: TreeNode<T>[] = []): TreeNode<T>[] {

        if (_pattern(this.value))
            _result.push(this);
        for (let i: number = 0; i < this.childs.length; i++)
            this.childs[i].search(_pattern, _result);
        return _result;
    }
}

class Tree<T> implements Subject{
    public nodes: TreeNode<T>[] = [];
    public observers: Observer[] = [];

    registerObserver(_observer: Observer): void {
        this.observers.push(_observer);
    }

    removeObserver(_observer: Observer): void {
        this.observers.splice(this.observers.indexOf(_observer), 1);
    }

    notifyObservers(): void {
        for (let observer of this.observers)
            observer.update(this.nodes.length);
    }

    public createNode(_newNode: T): TreeNode<T> {
        let newNode: TreeNode<T>  = new TreeNode<T>(_newNode);
        this.nodes.push(newNode);
        this.notifyObservers();
        return newNode;
    }
}

class TreeObserver implements Observer {

    public update(_countNodes: number): void {
        console.log("Anzahl der Knoten: " + _countNodes);
    }
}

function* iAmAGenerator(_tree: Tree<String>): Iterator<String> {
    for (let i: number = 0; i < _tree.nodes.length; i++) {
        const inside: String =  _tree.nodes[i].toString();
        yield inside;
    }
}

let tree: Tree<String> = new Tree<String>();
let root: TreeNode<String> = tree.createNode("root");

const iterator: Iterator<String> = iAmAGenerator(tree);

let observer1: TreeObserver = new TreeObserver();
tree.registerObserver(observer1);

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

console.log(iterator.next());

// root.printTree();
// console.log(root.search(x => x.includes("212")));

