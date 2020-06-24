import { formData } from "./forms";
import { Person } from "./person";

const form: HTMLFormElement = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data: { } = formData(form);
    console.log(data);
});

const person: Person = new Person();
person.speak();