class Player {
    constructor(name, type){
        console.log('player', this)
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name} and my skill is ${this.type}`)
    }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type)
        console.log('wizard: ', this)
    }
    play(){
        console.log(`Weeeeeee I'm a ${this.type}`)
    }
}

wizard1 = new Wizard('mahesh', 'lead')
wizard2 = new Wizard('chandra', 'manager')

wizard1.play()
wizard1.introduce()

