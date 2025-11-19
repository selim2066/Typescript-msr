class Counter {
  static count : number =0;
  inc(){
    return (Counter.count = Counter.count +1)
  }
}

const c1 = new Counter()
console.log(c1.inc())
console.log(c1.inc())

const c2 = new Counter()
console.log(c2.inc())