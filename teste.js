//=========================================================================
//Aula do slide.



//=======================================
// declare duas funcoes


// let numerosArray = [15, 20, 50, 75, 90, 125]

//a


const recebendo = (multiplicacao) => {
    let novoArray = []
    for(let i = 0; i < multiplicacao.length; i ++){
     novoArray.push(multiplicacao[i] *3)
    }
    return novoArray
    }
    // console.log(recebendo(numerosArray))
    
    
    //b
    
    
    const recebendoNovamente = (numerosPares) => {
        let outroArray = []
        for(let i = 0; i < numerosPares.length; i++){
            if( numerosPares[i] % 2 === 0){
                outroArray.push(numerosPares[i])
            }
        }
        return outroArray
    }
    // console.log(recebendoNovamente((numerosArray)));
    
    
    
    //=======================================
    //Callbacks
    
    //2
    
    // let numerosArray = [15, 20, 50, 75, 90, 125]
    
    
    
    //-----
    
    let arrayTimes = [`Flamengo`, `Vasco`, `Fluminense`, `Botafogo`]
    
    
    
    const testeRapido = (osDoisMelhores) => {  
        //criei uma funcao para adicionar todo esse array dentro de um novo array
        let arrayTesteRapido = []
        for(let i = 0; i < 2 && i < osDoisMelhores.length; i++){
        //nesse for eu falo para ele percorrer o primeiro e o segundo, apenas.   
        arrayTesteRapido.push(osDoisMelhores[i])
      }
    return arrayTesteRapido
    }
    // console.log(testeRapido(arrayTimes))
    
    //-----
    
    const funcaoImportante = (gaveta, fazendoCallback) => {
    let teste = fazendoCallback(gaveta)   
    // `o valor do novo array deve ser guardado em uma variavel, e a variavel, retornada.
    return teste
    
    }
    // console.log(funcaoImportante(numerosArray, recebendoNovamente ));
    // console.log(funcaoImportante(numerosArray, testeRapido ));
    // console.log(funcaoImportante(arrayTimes, testeRapido ));
    // console.log(funcaoImportante(numerosArray, recebendo ));
    
    
    
    //=======================================
    //.map()
    
    
    
    
    let numerosArray = [15, 20, 50, 75, 90, 125]
    
    
    // forma 1
    
    // const fazendoFuncaoMap = numerosArray.map(recebendo) 
    // console.log(fazendoFuncaoMap);
    
    //desse jeito aqui esta dando errado, por que quando a funcao tem um for ela nao consegue vim 
    //de forma tao simplificada.
    
    const testandoMapNovamente = (nume) => {
        return nume *3
    }
    testandoMapNovamente()
    
    const fazendoFuncaoMap = numerosArray.map(testandoMapNovamente) 
    // console.log(fazendoFuncaoMap);
    
    
    
    //forma 2
    
    const fazendoFuncaoMap1 = numerosArray.map((teste) => {return teste *3})
    // console.log(fazendoFuncaoMap1);
    
    
    //forma 3
    
    const fazendoFuncaoMap2 = numerosArray.map((teste) =>  teste *3)
    // console.log(fazendoFuncaoMap2);
    
    
    
    
    
    
    //=======================================
    //.filter()
    
    let numerosArray1 = [15, 20, 50, 75, 90, 125]
    
    
    //forma 1
    
    const filterTeste1 = numerosArray.filter((numeros) => {return numeros % 2 === 0})
    // console.log(filterTeste1);
    
    
    
    //forma 2
    
    const filterTeste2 = numerosArray.filter((numeros) => numeros % 2 === 0)
    // console.log(filterTeste2);
    
    
    
    //forma 3
    
    const testandoFilter = (num) => {
        return num % 2 === 0
    }
    testandoFilter()
    
    
    const filterTeste3 = numerosArray.filter(testandoFilter)
    // console.log(filterTeste3);
    
    
    
    
    
    
    
    //=======================================
    //quebrando a cabeca
    
    
    const pokemons = [
        { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
        { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
        { nome: 'Charmander', tipo: 'fogo', vida: 35 },
        { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
        { nome: 'Squirtle', tipo: 'água', vida: 45 },
        { nome: 'Psyduck', tipo: 'água', vida: 25 }
    ]
    
    
    //Questao 1
    
    
    const umQuestao = (poke) => {
        let gaveta = {         //criei um objeto novo e dentro dele fiz uma copia da propriedade antiga
                               //que tinha no outro objeto e modifiquei apenas a vida.      
            ...poke, vida: 100
        }
        
        return gaveta
    }
    // console.log(umQuestao());
    
    //agora eu modifiquei a propriedade vida dentro desse meu novo objeto chamado gaveta.
    
    
    //Questao 2
    
    
    //forma 1
    
    const pokemonsVidaCheia = pokemons.map(umQuestao)
    // console.log(pokemonsVidaCheia);
    
    
    //forma 2
    
    
    const pokemonsVidaCheia1 = pokemons.map((poke) => {return {...poke, vida: 100}})
    // console.log(pokemonsVidaCheia1);
    
    
    //Questao 3
    
    
    const pokeDeFogo = (pokeFogo) => {   //criei uma funcao que armazena um valor que pode ser usada
                                         //e nesse caso vai ser utilizada num filter()
    return pokeFogo.tipo === `fogo`
    } 
    // console.log(pokeDeFogo);
    
    
    //forma 1
    
    const pokeFilter = pokemons.filter(pokeDeFogo)
    // console.log(pokeFilter);
    
    
    
    //forma 2
    
    const pokeFilter1 = pokemons.filter((poke) => {return poke.tipo === `fogo`})
    // console.log(pokeFilter1);
    
    
    
    //forma 3
    
    const pokeFilter2 = pokemons.filter((poke) =>  poke.tipo === `fogo`)
    // console.log(pokeFilter2);
    
    
    
    
    
    
    
    
    //=========================================================================
    //Aula do exercicios.