// Divide en elementos indivuales y los COPIA
const udemy = 'udemy';
const letters = [...udemy];
letters
const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna'];

const bestFriend = 'arnold';

const friends = [...boys, bestFriend, ...girls];
friends

// De esta forma utilizando el spread operator no modifico el array original (friends).
const newFriends = [...friends]
newFriends[0] = 'nancy';
newFriends
friends


// ES2018 - ES8 Objects
const person = { name: 'john', job: 'developer' };
const newPerson = {
  ...person,
  name: 'Aldo',
  city: 'Santiago',
};
person
newPerson