import { Observable } from "../interfaces/observable";
import { Observer } from "../interfaces/observer";

export class Magazine implements Observable {
  private _observers: Observer[] = [];

  /**
   * Constructor of the class Magazine, implements Observable
   * @param _name Name of the magazine
   * @param _number Number of the magazine, must be a positive integer
   * @param _date Publication date of the magazine
   */
  constructor(
    private _name: string,
    private _number: number,
    private _date: Date
  ) {
    if (_number <= 0 || _number % 1 !== 0) {
      throw new Error(
        "El número de la revista debe ser un entero mayor que cero"
      );
    }
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get number(): number {
    return this._number;
  }

  set number(number: number) {
    if (number <= 0 || number % 1 !== 0) {
      throw new Error(
        "El número de la revista debe ser un entero mayor que cero"
      );
    }
    this._number = number;
  }

  get date(): Date {
    return this._date;
  }

  set date(date: Date) {
    this._date = date;
  }

  get observers(): Observer[] {
    return this._observers;
  }

  /**
   * Subscribes a new observer to the magazine
   * @param observer New subscriber, must not be subscribed
   */
  subscribe(observer: Observer) {
    if (this._observers.includes(observer)) {
      throw new Error("El observador ya se ha suscrito");
    } else {
      this._observers.push(observer);
    }
  }

  /**
   * Unsubscribes an observer of the magazine
   * @param observer Subscriber to remove, must be a subscriber
   */
  unsubscribe(observer: Observer) {
    const index = this._observers.indexOf(observer);
    if (index === -1) {
      throw new Error("El observador no está suscrito");
    } else {
      this._observers.splice(index, 1);
    }
  }

  /**
   * Notifies an event to all the subscribers
   */
  notify() {
    this._observers.forEach((observer) => observer.update(this));
  }
}
