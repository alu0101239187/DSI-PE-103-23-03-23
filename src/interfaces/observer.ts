import { Observable } from "./observable";

export interface Observer {
  /**
   * Executes an update on observable notification
   * @param observable Observable object that notifies the event
   */
  update(observable: Observable): void;
}
