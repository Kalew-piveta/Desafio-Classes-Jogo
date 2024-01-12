/*# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/
class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    Attack(){
        let ataque = ''
        if (this.tipo === "mago"){
            ataque = "Magia"
        }
        else if (this.tipo === "guerreiro"){
            ataque = "Espada"
        }
        else if (this.tipo === "monge"){
            ataque = "Artes Marciais"
        }
        else{
            ataque = "Shuriken"
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}
let mago = new Hero("Gandalf", "60", "mago")
let guerreiro = new Hero("Leonidas", "40", "guerreiro")
let monge = new Hero("Buda", "25", "monge")
let ninja = new Hero("Naruto", "15", "ninja")
mago.Attack()
guerreiro.Attack()
monge.Attack()
ninja.Attack()