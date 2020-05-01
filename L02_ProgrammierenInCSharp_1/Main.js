"use strict";
// console.log("Erzeugt in Visual Studio Code ein neues C#-Projekt und fügt oben stehende Deklarationen und Initialisierungen der Variablen i, pi, und salute ein.");
// console.log("Verändert die Deklarationen so, dass var statt der Typen verwendet wird und überzeugt Euch, dass der Compiler den Code korrekt übersetzt.");
// console.log("Todo Nr.3 ergibt in TS wohl nich so viel Sinn...");
// var i: number = 42;
// var pi: number = 3.1415;
// var salute: string = "Hello World";
// console.log("Variable i: " + i);
// console.log("Variable pi: " + pi);
// console.log("Variable salute: " + salute);
// console.log("Erzeugt einen Array vom Grund-Typ double, der drei Speicherplätze enthält in denen in der angegebenen Reihenfolge: die Zahl PI, die Eulersche Zahl und die Kepler-Konstante enthalten sind.");
// let doubleArray: number[] = [Math.PI, Math.E, 2.97 * Math.pow(10, -19), 5];
// console.log("Gebt nach der Initialisierung des o.A. Arrays mit Console.WriteLine(ia.Length); die Anzahl der Einträge aus.");
// console.log("3");
// console.log("Ändert die Anzahl der Einträge und überprüft die Ausgabe.");
// console.log("Naja füg ich einen wert hinzu erhöht sich auch die Länge um eins. Logisch. Wichtig zu erwähnen: ist ein Array einmal mit einer Länge initialisiert is die fix und man kann nichts mehr hinzufügen. Zumindest in Java und eventuell in anderen Programmiersprachen. Die haben für dynamische Container Vektoren oder ArrayLists. In Java-Script/Typescript ist das hinzufügen über arr.push() möglich.");
// console.log("Leichte Initialisierung von String-Inhalten durch einfache Konstanten-Syntax")
// let meinString: String = "Dies ist ein String";
// console.log(meinString);
// let a: string = "Dies ist ";
// let b: string = "ein String";
// let c: string = a + b;
// console.log("Aneinanderhängen (concatenation) von Strings durch den + Operator");
// console.log(a);
// console.log(b);
// console.log(c);
// let d: string = "eins";
// let e: string = "zwei";
// let f: string = "eins";
// let aEqB: boolean = (d == e);
// let aEqC: boolean = (d == f);
// console.log("Vergleich von String-Inhalten mit dem == Operator");
// console.log(d);
// console.log(d);
// console.log(f);
// console.log(aEqB);
// console.log(aEqC);
// console.log("Und tatsächlich funktioniert aber auch der Zugriff auf einzelne Zeichen wie auf einzelne Einträge eines Arrays");
// let meinString2: string = "Dies ist ein String";
// let zeichen: string = meinString[5];
// console.log(meinString2);
// console.log(meinString2[5]);
// console.log("Verwendet o.a. Code in einem lauffähigen C#-Programm und probiert es aus.");
// let j: number = parseInt(window.prompt("Gib bidde ne Zahl ein", "1"));
// switch (j) {
//    case 1:
//       console.log("Du hast EINS eingegeben");
//       break;
//    case 2:
//       console.log("ZWEI war Deine Wahl");
//       break;
//    case 3:
//       console.log("Du tipptest eine DREI");
//       break;
//    case 4:
//        console.log(j + " gewinnt :)"); 
//        break;
//    default:
//       console.log("Die Zahl " + j + " kenne ich nicht");
//       break;
// }
// console.log("Ändert den Typ der Variablen i von int nach string und ändert die case-Labels, so dass diese aus Strings bestehen.");
// let k: string = window.prompt("Gib bidde ne Zahl ein", "1");
// switch (k) {
//    case "1":
//       console.log("Du hast EINS eingegeben");
//       break;
//    case "2":
//       console.log("ZWEI war Deine Wahl");
//       break;
//    case "3":
//       console.log("Du tipptest eine DREI");
//       break;
//    case "4":
//        console.log(k + " gewinnt :)"); 
//        break;
//    default:
//       console.log("Die Zahl " + k + " kenne ich nicht");
//       break;
// }
// console.log("Versucht, die oben mit der switch / case Anweisung implementierte Funktionalität mit if/ else Anweisungen zu implementieren.");
// let l: number = parseInt(window.prompt("Gib bidde ne Zahl ein", "1"));
// if (l === 1) {
//     console.log("Du hast EINS eingegeben");
// } else if (l === 2) {
//     console.log("ZWEI war Deine Wahl");
// } else if (l === 3) {
//     console.log("Du tipptest eine DREI");
// } else {
//     console.log("Die Zahl " + l + " kenne ich nicht");
// }
// console.log('Schreibt ein C#-Programm, das zwei Zahlen von der Konsole einliest. Diese sollen verglichen werden. Ist die erste größer als die zweite, soll der Text "a ist größer als b" ausgegeben werden, ansonsten der Text "b ist größer als a".');
// let zahl1: number = parseInt(window.prompt("Gib bidde ne Zahl ein", "1"));
// let zahl2: number = parseInt(window.prompt("Gib bidde ne Zahl ein", "1"));
// if (zahl1 > zahl2)
//     console.log("a ist größer als b");
// else
//     console.log("b ist größer als a");
// console.log('Erzeugt ein C# Programm, das in einer while-Schleife die Zahlen von 1 bis 10 auf der Konsole ausgibt.');
// let zaehler: number = 1;
// while(zaehler < 11) {
//     console.log(zaehler);
//     zaehler++;
// }
// let someStrings: string[] = ["Hier",
//                         "sehen", 
//                         "wir", 
//                         "einen", 
//                         "Array", 
//                         "von", 
//                         "Strings"
//                         ];
// for (let i: number = 0; i < 5; i++) {
//     console.log(someStrings[i]); 
// }
// let someStrings: string[] = ["Hier",
// "sehen", 
// "wir", 
// "einen", 
// "Array", 
// "von", 
// "Strings"
// ];
// for (let i: number = 0; i < someStrings.length; i++)
//     console.log(someStrings[i]);
// let someStrings: string[] = ["Hier",
// "sehen", 
// "wir", 
// "einen", 
// "Array", 
// "von", 
// "Strings"
// ];
// let i: number = 0;
// do {
//     console.log(someStrings[i]);
//     i++;
// } while (i < someStrings.length);
// let someStrings: string[] = ["Hier",
// "sehen", 
// "wir", 
// "einen", 
// "Array", 
// "von", 
// "Strings"
// ];
// let i: number = 0;
// while (true) {
//     console.log(someStrings[i]);
//     if (i >= someStrings.length - 1)
//         break;
//     i++;
// }
// Man kanns auch kompliziert machen...
//# sourceMappingURL=Main.js.map