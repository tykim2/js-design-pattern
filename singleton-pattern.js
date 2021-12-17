const Database = (function (){
    let instance

    function createInstance() {
        return new Object('database instance')
    }

    function getInstance() {
        if(!instance) {
            instance = createInstance()
        }
        return instance
    }

    return {getInstance}
})()

const ins1 = Database.getInstance()
const ins2 = Database.getInstance()

console.log(ins1 === ins2)

//
function _Database2() {
    let instance

    function createInstance() {
        return new Object('database instance')
    }

    function getInstance() {
        if(!instance) {
            instance = createInstance()
        }
        return instance
    }

    return {getInstance}
}

const Database2 = _Database2()

const ins3 = Database2.getInstance()
const ins4 = Database2.getInstance()

console.log(ins3 === ins4)

const Database22 = new _Database2()

const ins33 = Database22.getInstance()
const ins44 = Database22.getInstance()

//
class _Database3 {
    constructor() {
        this.instance
    }

    createInstance() {
        return new Object('database instance')
    }

    getInstance() {
        if(!this.instance) {
            this.instance = this.createInstance()
        }
        return this.instance
    }
}

const Database3 = new _Database3()
const ins5 = Database3.getInstance()
const ins6 = Database3.getInstance()

console.log(ins5===ins6)
