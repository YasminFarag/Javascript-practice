class Pokemon {
    constructor(name, health, magic) {
        this.name = name;
        this.health = health;
        this.magic = magic;
        this.skills = [];

        this.counter = 0;
    }
    learnAttackSkill(newskill) {
        this.skills.push(newskill);
    }
    showStatus() {
        if (this.health <= 0) {
            console.log(`${this.name} is dead and ${this.magic} magics left`);
        } else {
            console.log(`${this.name} has ${this.health} health and ${this.magic} magics left`);
        }
    }

    attack(index, opponent) {

        /*  random=Math.floor(Math.random()*this.skills.length); */
        if (opponent.health <= 0) {
            console.log(`you dont need to attach ${opponent.name}, he is already dead`);
        }
        else if (this.magic > this.skills[index].magic) {
            if (this.health > 0) {
                this.magic = this.magic - this.skills[index].magic;
                console.log(`${this.name} launched skill "${this.skills[index].attack}" successfully`);
                console.log(`${opponent.name} got ${this.skills[index].damage} damage`);
                opponent.health = opponent.health - this.skills[index].damage;
                if (opponent.health <= 0) {
                    console.log(`${this.name} won,${opponent.name} is killed!`);
                }
            } else {
                console.log(`${this.name} is already dead and cannot use attack skill`);
            }
        } else {
            console.log(`${this.name} not enough magic and cannot launch attack!`);

        }

    }
}
class AttackSkill {
    constructor(attack, damage, magic) {
        this.attack = attack;
        this.damage = damage;
        this.magic = magic;
    }
};

let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

let lightning = new AttackSkill("lightning", 40, 30);
let bombing = new AttackSkill("poisonSeed", 20, 20);
let fire = new AttackSkill("fire", 40, 10);
pikachu.learnAttackSkill(lightning);
pikachu.learnAttackSkill(bombing);
pikachu.learnAttackSkill(fire);

/* console.log(pikachu); */
bulbasaur.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(bombing);
bulbasaur.learnAttackSkill(fire);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(1, pikachu);
pikachu.attack(2, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.attack(1, bulbasaur);

pikachu.showStatus();
bulbasaur.showStatus();