'use strict';

class Foo {
  foo1(y) {
    console.log('ejecutando foo1');
    return y;
  }

  foo2() {
    console.log('ejecutando foo2');
    let x = this.foo1(4);
    console.log('Foo2 informa que foo1 retornó el valor: ', x);
  }
}

module.exports = new Foo();
