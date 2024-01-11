class heroiVantura {
    constructor (tipo, ataque, ) {
        this.tipo = tipo
        this.ataque = ataque
        
    }
    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let heroiHabilid = new heroiVantura ("Ninja", "shuriken") 

heroiHabilid.atacar()
