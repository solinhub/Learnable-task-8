class Telephone {
    constructor() {
      this.phoneNumbers = new Set();
      this.observers = [];
    }
  
    addPhoneNumber(number) {
      this.phoneNumbers.add(number);
    }

    removePhoneNumber(number) {
      this.phoneNumbers.delete(number);
    }

    dialPhoneNumber(number) {
      if (this.phoneNumbers.has(number)) {
        this.notifyObservers(number);
      } else {
        console.log("Phone number not found. Please add it first.");
      }
    }
  
    // Method to add observers
    addObserver(observer) {
      this.observers.push(observer);
    }

  // Method to remove observers
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Method to notify observers
    notifyObservers(number) {
      this.observers.forEach(observer => observer.notify(number));
    }
  }
  
  class PhoneNumberDisplayObserver {
    notify(number) {
      // Method to be called by the Telephone class to notify the observer
      console.log(number);
    }
  }
  class DialStatusObserver {
    notify(number) {
      // Method to be called by the Telephone class to notify the observer
      console.log("Now Dialing", number);
    }
  }
  
  const telephone = new Telephone();
  
  const observer1 = new PhoneNumberDisplayObserver();
  const observer2 = new DialStatusObserver();
  
  telephone.addObserver(observer1);
  telephone.addObserver(observer2);
  
  telephone.addPhoneNumber("2347023232");
  
  telephone.dialPhoneNumber("2347023232");
  telephone.dialPhoneNumber("23480134343"); // Not added, so observers won't be notified
  