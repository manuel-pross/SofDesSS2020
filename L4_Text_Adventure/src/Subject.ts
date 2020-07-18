import { Observer } from "./Observer";

export interface Subject {
    registerObserver(_observer: Observer): void;
    removeObserver(_observer: Observer): void;
    notifyObservers(): void;
}