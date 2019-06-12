/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding is when the 'this' keyword is used in the global scope. The value of 'this' in this case is the console object.
* 2. Implicit Binding is when the 'this' keyword is used with dot notation to invoke a function. The object to the left if the dot is 'this'.
* 3. New binding is when the 'this' keyword is used with a constructor function. Then 'this' is the new object that was created by the constructor function.
* 4. Explicit binding is when the 'this' is used with the call or the apply method. Then 'this' is defined by what is passed into .call or .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
print = function(){
    console.log(this);
}
//print();

// Principle 2

// code example for Implicit Binding
let obj = {
    name: 'sierra',
    likes: 'puppies',
    speak: function(){
        console.log(this);
        console.log(`Hello my name is ${this.name} and I like ${this.likes}`);
    }
}

obj.speak();

// Principle 3

// code example for New Binding
let Animal = function(animalObj){
    this.name = animalObj.name;
    this.biome = animalObj.biome;
    this.animalInfo = function(){
        return `The ${this.name} lives in the ${this.biome}`;
    }
}

const cheetah = new Animal({name: 'Cheetah', biome: 'desert'});
const fox = new Animal({name: 'Red Fox', biome: 'taiga'});
console.log(cheetah.animalInfo());
console.log(fox.animalInfo());

// Principle 4

// code example for Explicit Binding
console.log(cheetah.animalInfo.call(fox));
console.log(fox.animalInfo.apply(cheetah));