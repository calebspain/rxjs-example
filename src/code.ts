import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { interval } from "rxjs/Observable/interval";
import "rxjs/add/operator/skipUntil";
import { observable } from "rxjs";

let observable1 = Observable.create((data: any) => {
    let i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000);
});

let observable2 = new Subject;

setTimeout(() => {
    observable2.next("Hey!");
}, 3000);

let newObs = observable1.skipUntil(observable2);

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
    let node = document.createElement("li");
    let textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}
