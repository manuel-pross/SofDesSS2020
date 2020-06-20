interface Greeting {

    sayHello(): string;
}

class GreetingJapanese implements Greeting {

    public sayHello(): string {
        return "konnichiwa";
    }
}

class GreetingSpanish implements Greeting {

    public sayHello(): string {
        return "ola";
    }
}

class MyContainer<T extends Greeting> {
    public objects: T[];
    
    constructor(_objects: T[]) {
        this.objects = _objects;
    }

    public add(_object: T): void {
        this.objects.push(_object);
    }

    public sayHello(): void {
        for (let i: number = 0; i < this.objects.length; i++) {
            console.log(this.objects[i].sayHello());        
        }
    }
}

let greeting1: GreetingJapanese = new GreetingJapanese();
let greeting2: GreetingSpanish = new GreetingSpanish();
let container: MyContainer<Greeting> = new MyContainer<Greeting>([greeting1, greeting2]);

container.sayHello();