class GuessingGame {
    constructor() {
    	this.lowerNumber = 0;
    	this.greaterNumber = 0;
    }

    setRange(min, max) {
    	this.lowerNumber = min;
    	this.greaterNumber = max;
    }

    guess() {
    	return Math.ceil((this.lowerNumber + this.greaterNumber)/2);
    }

    lower() {
    	this.greaterNumber = this.guess();
    }

    greater() {
    	this.lowerNumber = this.guess();
    }
}

module.exports = GuessingGame;
