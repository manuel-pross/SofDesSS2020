export interface Observer {
    update(_userCommand: string): void;
}