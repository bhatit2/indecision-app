class Person {
    constructor(name='Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreetings(){
        return `Hi this is ${this.name}.`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return Boolean(this.homeLocation);
    }
    getGreetings(){
        let message = super.getGreetings();
        if(this.hasHomeLocation()){
            message += ` I am visiting from ${this.homeLocation}`;
        }
        return message;
    }
}

const me = new Student('Tanvi', 27, 'CS');
console.log(me.getGreetings());
console.log(me.getDescription());

const other = new Traveller();
console.log(other.getGreetings());
console.log(other.getDescription());

const ninja = new Traveller('Naruto', 15, 'Japan');
console.log(ninja);
console.log(ninja.getGreetings());
console.log(ninja.getDescription());