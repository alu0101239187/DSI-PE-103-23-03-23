import { Magazine } from "./magazine";
import { Observer } from "../interfaces/observer";
import { Observable } from "../interfaces/observable";

export class Subscriber implements Observer {
  /**
   * Constructor of the class Subscriber, implements Observer
   * @param _id Subscriber ID, must be a positive integer
   * @param _name Subscriber name
   * ```typescript
   * new Subscriber(1, "Pepe")
   * ```
   */
  constructor(private _id: number, private _name: string) {
    if (_id <= 0 || _id % 1 !== 0) {
      throw new Error(
        "El ID de un suscriptor debe ser un entero mayor que cero"
      );
    }
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    if (id <= 0 || id % 1 !== 0) {
      throw new Error(
        "El ID de un suscriptor debe ser un entero mayor que cero"
      );
    }
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  /**
   * Shows an observable object information
   * @param observable Observable object that notifies the event
   */
  update(observable: Observable): void {
    if (observable instanceof Magazine) {
      console.log(
        `¡Nuevas noticias ${this._name}! ` +
          `Se ha lanzado el número ${observable.number} ` +
          `de la revista ${observable.name} ` +
          `con fecha ${observable.date.getDate()}/${
            observable.date.getMonth() + 1
          }/${observable.date.getFullYear()}`
      );
    }
  }
}
