import { Observer } from "./observer";

export interface Observable {
  /**
   * Subscribes a new observer
   * @param observer New observer
   */
  subscribe(observer: Observer): void;

  /**
   * Unsubscribes an observer
   * @param observer Observer to remove
   */
  unsubscribe(observer: Observer): void;

  /**
   * Notifies an event to the observers
   */
  notify(): void;
}
