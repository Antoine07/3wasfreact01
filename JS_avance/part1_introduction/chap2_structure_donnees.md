# Introduction aux structures de données

## Les tableaux

Vous pouvez définir un tableau simplement à l'aide de crochet :

```js
let fruits =  ['Apple', 'Orange'];
```

### Exercice reference array

1. Reprenez la variable fruits ci-dessus que vaut le console.log dans l'exemple suivant, affichez le contenu des deux tableaux :

```js
let fruits =  ['Apple', 'Orange'];

let newFruits = fruits;

newFruits.push('Banana')

console.log(newFruits.length === fruits.length)
```

2. Ecrivez un script pour créez un nouveau tableau newFruit qui n'a pas la même référence que fruits.

## Copie d'un tableau

Si vous assignez un tableau t1 dans une variable t2 alors JS ne crée pas un nouveau tableau. t2 a la même référence mémoire que t1. Modifiez un des deux tableaux t1 ou t2 modifiera alors l'autre. 

## Fonction map

Syntax i est un compteur et curr est la valeur courant du tableau arr ci-dessous :

```js
arr.map((curr, i) => console.log(i, curr));
```

La méthode map crée un nouveau tableau avec les résultats de l'appel d'une fonction sur chaque élément du tableau :

```js
const sheeps = ['🐑', '🐑', '🐑'];

const newSheeps = sheeps.map( sheep => sheep + sheep );
 // ["🐑🐑", "🐑🐑", "🐑🐑"]
```

### Exercice copie de fruits

Proposez une solution pour copier le tableau fruits en utilisant map.


### Exercice square numbers

Ecrire un script, qui utilise map, qui permet d'élever au carré les nombres de la liste suivante :

```js
let numbers = [1, 8, 3, 7];
```

### Exercice mult number 

Ecrire une fonction qui multiple par 3 les nombres pairs et par 5 les nombres impairs de la liste des nombres suivants :

```js

let numbers = [7, 9, 10, 1, 2, 3, 71, 8 ];
```

### Exercice string

Faite un script qui prend en argument un texte et qui retourne un tableau des valeurs du nombre de caractères de chaque mot. 

Indication : utilisez la méthode split pour transformer la chaîne en tableau.