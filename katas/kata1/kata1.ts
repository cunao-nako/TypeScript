class Dog {
  constructor(name: string) {}
  bark(): string {
	return 'Wow!';
  }
}

class Fish {
  constructor(name: string) {}
  dive(): string {
	return 'diving';
  }
}

type Pet = Dog | Fish;

const isDog = (pet: object): pet is Dog => 'bark' in pet;

function talkToPet(pet: Pet): string {
  if(isDog(pet)) {
	return pet.bark();
  } else {
	return `fish can't talk, but can ${pet.dive()}`;
  }
}

const fish = new Fish('Nemo');
window.alert(talkToPet(fish));

const dog = new Dog('Rex');
window.alert(talkToPet(dog));

// const unknown = new String('IT');
// window.alert(talkToPet(unknown));


