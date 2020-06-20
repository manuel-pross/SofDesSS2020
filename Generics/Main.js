"use strict";
class GreetingJapanese {
    sayHello() {
        return "konnichiwa";
    }
}
class GreetingSpanish {
    sayHello() {
        return "ola";
    }
}
class MyContainer {
    constructor(_objects) {
        this.objects = _objects;
    }
    add(_object) {
        this.objects.push(_object);
    }
    sayHello() {
        for (let i = 0; i < this.objects.length; i++) {
            console.log(this.objects[i].sayHello());
        }
    }
}
let greeting1 = new GreetingJapanese();
let greeting2 = new GreetingSpanish();
let container = new MyContainer([greeting1, greeting2]);
container.sayHello();
//# sourceMappingURL=Main.js.map