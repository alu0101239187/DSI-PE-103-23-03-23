import "mocha";
import { expect } from "chai";
import { Magazine } from "../src/classes/magazine";
import { Subscriber } from "../src/classes/susbscriber";

describe("Magazine class tests", () => {
  it("Magazine constructor", () => {
    expect(new Magazine("Hola", 220, new Date())).to.be.instanceof(Magazine);
    expect(() => new Magazine("Hola", -2, new Date())).to.throw(
      "El número de la revista debe ser un entero mayor que cero"
    );
    expect(() => new Magazine("Hola", 2.5, new Date())).to.throw(
      "El número de la revista debe ser un entero mayor que cero"
    );
  });

  it("name property", () => {
    const magazine: Magazine = new Magazine("Hola", 220, new Date());
    expect(magazine.name).to.be.equal("Hola");
    magazine.name = "Pronto";
    expect(magazine.name).to.be.equal("Pronto");
  });

  it("number property", () => {
    const magazine: Magazine = new Magazine("Hola", 220, new Date());
    expect(magazine.number).to.be.equal(220);
    magazine.number = 15;
    expect(magazine.number).to.be.equal(15);
    expect(() => (magazine.number = -2)).to.throw(
      "El número de la revista debe ser un entero mayor que cero"
    );
    expect(() => (magazine.number = 2.5)).to.throw(
      "El número de la revista debe ser un entero mayor que cero"
    );
  });

  it("date property", () => {
    const magazine: Magazine = new Magazine(
      "Hola",
      220,
      new Date("2025-12-17T03:24:00")
    );
    expect(magazine.date).to.be.eql(new Date("2025-12-17T03:24:00"));
    magazine.date = new Date("2021-08-12T03:24:00");
    expect(magazine.date).to.be.eql(new Date("2021-08-12T03:24:00"));
  });

  it("subscribe function", () => {
    const magazine: Magazine = new Magazine(
      "Hola",
      220,
      new Date("2025-12-17T03:24:00")
    );
    const pepe: Subscriber = new Subscriber(1, "Pepe");
    const juan: Subscriber = new Subscriber(2, "Juan");

    magazine.subscribe(pepe);
    expect(magazine.observers).to.be.eql([new Subscriber(1, "Pepe")]);
    magazine.subscribe(juan);
    expect(magazine.observers).to.be.eql([
      new Subscriber(1, "Pepe"),
      new Subscriber(2, "Juan"),
    ]);
    expect(() => magazine.subscribe(pepe)).to.throw(
      "El observador ya se ha suscrito"
    );
  });

  it("unsubscribe function", () => {
    const magazine: Magazine = new Magazine(
      "Hola",
      220,
      new Date("2025-12-17T03:24:00")
    );
    const pepe: Subscriber = new Subscriber(1, "Pepe");
    const juan: Subscriber = new Subscriber(2, "Juan");

    magazine.subscribe(pepe);
    magazine.subscribe(juan);
    expect(magazine.observers).to.be.eql([
      new Subscriber(1, "Pepe"),
      new Subscriber(2, "Juan"),
    ]);
    magazine.unsubscribe(juan);
    expect(magazine.observers).to.be.eql([new Subscriber(1, "Pepe")]);
    expect(() => magazine.unsubscribe(juan)).to.throw(
      "El observador no está suscrito"
    );
  });

  it("notify function", () => {
    const magazine: Magazine = new Magazine(
      "Hola",
      220,
      new Date("2025-12-17T03:24:00")
    );
    const pepe: Subscriber = new Subscriber(1, "Pepe");
    const juan: Subscriber = new Subscriber(2, "Juan");

    magazine.subscribe(pepe);
    magazine.subscribe(juan);
    magazine.notify();
  });
});
