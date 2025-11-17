class Animal {
  constructor(public name: string, public species: string, public sound : string){

  }
  makeSound(){
    console.log(`${this.name} makes ${this.sound}`)
  }
}

const cat = new Animal('billu','cat','meow meow')
console.log(cat.makeSound())
cat.makeSound()