// class - 1. class state/properties, 2. class behaviour/functionality
class Human{
    // property
    age =12; //public - can be use inside class, outside class also
    // # is used to make variable private
    #weight = 45; //private - can be used in class only
    height = 324;
    rollno;
    // constructor create
    constructor(roll,heig,weig){
        this.rollno = roll,
        this.height = heig,
        this.#weight = weig
    }
    

    // behaviour
    walking(){
        // this is used to highlight current object.variable
        console.log('I am walking', this.#weight)
    }
    running(){
        console.log('I am running')
    }
    // getter
    get fetchWeight(){
        return this.#weight;
    }
    // setter
    set modifyWeight(val){
        this.#weight = val;
    }
    
}

// let obj = new Human();
// constructor value pass
let obj = new Human(50,19,1);
console.log(obj.age);
console.log(obj.height)
// acess getter
console.log(obj.fetchWeight)
// console.log(obj.#weight);
obj.walking()


// to acess private field outside class - getter, setter ( encapsulation , abstract layer )
// getter - used to fetch values for private field
//  setter - set/update/modify


// Constructor


// Default Parameters - allow to use function with default values

function sayName(myName = 'deva re deva',lastName='devg',hu=myName.toUpperCase()){
    console.log(myName)
    console.log(lastName)
    console.log(hu)
}
sayName()
sayName("fer","gr")


function solv(val,hu=45, fy ={age:15,wt:34,ht:67}, ar=['fger','rtge','vretho','trebgw'], hw =null, k = 56){
    console.log('Hello jii', val,  hu, fy, ar , hw , k)
}
solv('fwthw')
solv(2,4,35,4576,1,1)
solv(2,4,35,4576,undefined)


function getAge(){
    return 190;
}
function utility(name='love',age=getAge()){
    console.log(name,age)
}
utility()
console.log(getAge())

// 1. basic default parameter
// 2. multiple default parameter
// 3. ek parameter dusre parameter pe dependent
// 4. object kaise deafult parameter me use hota history
// 5. null n undefined in default parameter
// 6. function in default parameter