import "mocha";
import { expect } from "chai";
import { Subscriber } from "../src/classes/susbscriber";
import { Magazine } from "../src/classes/magazine";

describe("Subscriber class tests", () => {
  it("Subscriber constructor", () => {
    expect(new Subscriber(1, "Pepe")).to.be.instanceof(Subscriber);
    expect(() => new Subscriber(-1, "Pepe")).to.throw(
      "El ID de un suscriptor debe ser un entero mayor que cero"
    );
    expect(() => new Subscriber(2.5, "Pepe")).to.throw(
      "El ID de un suscriptor debe ser un entero mayor que cero"
    );
  });

  it("id property", () => {
    const subscriber: Subscriber = new Subscriber(1, "Pepe");
    expect(subscriber.id).to.be.equal(1);
    subscriber.id = 2;
    expect(subscriber.id).to.be.equal(2);
    expect(() => (subscriber.id = -1)).to.throw(
      "El ID de un suscriptor debe ser un entero mayor que cero"
    );
    expect(() => (subscriber.id = 2.5)).to.throw(
      "El ID de un suscriptor debe ser un entero mayor que cero"
    );
  });

  it("name property", () => {
    const subscriber: Subscriber = new Subscriber(1, "Pepe");
    expect(subscriber.name).to.be.equal("Pepe");
    subscriber.name = "Juan";
    expect(subscriber.name).to.be.equal("Juan");
  });

  it("update function", () => {
    const subscriber: Subscriber = new Subscriber(1, "Pepe");
    subscriber.update(
      new Magazine("Pronto", 13, new Date("2021-08-12T03:24:00"))
    );
  });
});
