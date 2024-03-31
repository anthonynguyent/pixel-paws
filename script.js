class Pet {
	constructor(id) {
		this.id = id;
		this.fedLevel = 100;
		this.fedElement = document.getElementById(`hunger${id}`);
		this.messageElement = document.getElementById(`message${id}`);
		this.displayElement = document.getElementById(`pet${id}`);
	}

	feed(amount) {
		this.fedLevel += amount;

		if (this.fedLevel > 100) {
			this.fedLevel = 100;
		}

		this.fedElement.innerText = this.fedLevel;
	}

	decreaseFedLevel() {
		this.fedLevel -= 10;

		if (this.fedLevel < 0) {
			this.fedLevel = 0;
		}

		this.fedElement.innerText = this.fedLevel;

		if (this.fedLevel === 0) {
			this.messageElement.innerText = 'Pet ran away';
			this.displayElement.style.opacity = 0.5;
		}
	}
}

function feedPet(amount) {
	if (selectedPet === 1) {
		pet1.feed(amount);
	} else if (selectedPet === 2) {
		pet2.feed(amount);
	}
}

function selectPet(id) {
	// Deselect previously selected pet (if different from the new one)
	if (selectedPet && selectedPet !== id) {
		document
			.getElementById(`pet${selectedPet}`)
			.classList.remove('selected');
	}

	selectedPet = id;
	document.getElementById(`pet${selectedPet}`).classList.add('selected');
}

let selectedPet = null;
const pet1Element = document.getElementById('pet1');
const pet2Element = document.getElementById('pet2');

const pet1 = new Pet(1);
const pet2 = new Pet(2);

setInterval(() => {
	pet1.decreaseFedLevel();
	pet2.decreaseFedLevel();
}, 1000);

selectPet(1);
