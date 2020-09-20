# Introduction

JS est un langage de script, orienté objet. Principalement exécuté dans une page Web, on le retrouve aujourd'hui dans d'autres contextes comme : Node.js, MongoDB (on peut programmer des requêtes en JS), ...

JS suit la norme **ECMAScript**, standard que suivent certains langages de script comme Javascript. Cette norme évolue. Les principaux navigateurs Web implémentent ces normes pour le JS. 

Une version majeur d'ECMAScript est celle qui a été définie en 2015 : ES2015 que l'on appelle fréquemment ES6 ... Le nom de la version étant déterminé par la dernière version du standard en cours donc ES6 pour 2016 ... Aujourd'hui la dernière version officiel est EMACScript 2020.

Bien que JS est un langage faiblement typé, le typage est partout... 

Le type d'une variable peut changé dans un script, il est déterminé par son contexte d'affectation. La variable **n** est déterminé par JS de type number lors de son assignation. Nous utilisons l'opérateur typeof pour déterminer le type d'une variable.

```js
let n = 10;
console.log(typeof n); // number

// ré-assignation
n = "Hello";

console.log(typeof n); // string
```

Dans l'exemple ci-dessus le type de la variable n a changé, n est passé du type number à string.

Notons que lorsque vous définissez une variable sans lui affecter une valeur particulière, celle-ci est de type "undefined" :

```js
let username;
console.log(typeof username); // undefined
```

## Les différents types JS

On distingue les types suivants en Javascript. Attention tous les types primitifs définissent des valeurs immuables (que l'on ne peut modifier) :

### 1. Types primitifs 

- boolean

```js

// On ne peut modifier un "true" ...
let flag = true;
```

- null

```js

// On ne peut modifier un "null" ...
let flag = null;
```

- undefined

- number

- bgint (un nouveau type dans ES2020 )

Il faut ajouté l'opérateur **n** pour définir des BigInt

```js
const x = 2n ** 100n;
console.log(x)
// 1267650600228229401496703205376n
```

- string

```js

// On ne peut modifier la chaîne de caractères "Hello World" ...
let message = "Hello World";
```

- symbole (type introduit à partir de la norme ES6, un peu technique pour l'instant ...)


------

### 2. Les types Objects

Et de manière un peu différente on a le type 0bject. Ils sont mutables, on peut modifier un objet. Rappelons ici qu'un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un identifant. Nous reverrons ce point qui est important dans le code lorsqu'on manipule des objets.

Dans la liste des objets vous avez :

- Les objets classiques et les fonctions (ce sont des objets ...En JS)

```js
class Model {

    constructor(name){
        this.name = name;
    }

    get() {

        return this.name;
    }
}

const myModel = new Model;

function modelFunc(n){
    let name = n;

    return name;
}
```

- Les objets natifs comme les dates

```js
const now = new Date();
```

- Les collections comme les tableaux

Les déclarations suivantes sont identiques :

```js
let notes = [1, 2, 3];
let newNotes = new Array(1, 2, 4);
```

- Les collections avec clés : Map, Set, ...

Un Map est une simple collection clé/valeur. Ces structures de données utilisent des clés pour référencer des valeurs, chaque clé est unique. Les Set sont des structures de données proche de la notion d'ensemble Mathématiques.

```js
// création d'un Map
const store = new Map();

store.set("A1", 10.6); 
store.set("A2", 8.9);

console.log(store); 
// {"A1" => 10.6, "A2" => 8.9}

const ensemble = new Set([1, 2, 3, 4, 5, 5]);
```

- Les JSON Javascript Object Notation

## Portée (ou scope en Anglais) des variables en JS

Pour déclarer une variable nous utiliserons le mot réservé du langage **let** en JS, nous reviendrons sur sa définition plutart.

Lorsque vous définissez une variable à l'intérieur d'une fonction elle est scopée (sa portée) dans la fonction elle-même :

```js

function foo(){

    let a = 10;
    console.log(a); // affiche 10
}

foo()

// erreur du type ReferenceError
console.log(a); 

```
