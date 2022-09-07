class Animal {
    constructor(name, age, legs, species, status, master){
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
        this.master = master;
    }   
    introduce(){
        console.log(`Hello, namaku ${this.name}, umurku ${this.age}, kaki ${this.legs}, speciesku ${this.species}, status ${this.status}.`);
    }

    GreetMaster(){
        console.log(`Hello, namaku ${this.name}, umurku ${this.age}, kaki ${this.legs}, speciesku ${this.species}, status ${this.status}, pemilik ${this.master}.`);
    }

}

class Shark extends Animal {
    constructor(){
        super();
        this.name = 'Hiu';
        this.age = 5;
        this.legs = 0;
        this.species = 'shark';
        this.status = 'menyelam';
    }
} 

class Cat extends Animal {
    constructor(){
        super();
        this.name = 'Dudul';
        this.age = 3;
        this.legs = 4;
        this.species = 'cat';
        this.status = 'makan';

    }
}

class Dog extends Animal {
    constructor(){
        super();
        this.name = 'Doggy';
        this.age = 4;
        this.legs = 4;
        this.species = 'dog';
        this.status = 'menggonggong';
        this.master = 'Messi'

    }
}


const hiu = new Shark ()
hiu.introduce()

const ucing = new Cat ()
ucing.introduce()

const anjing = new Dog ()
anjing.GreetMaster()