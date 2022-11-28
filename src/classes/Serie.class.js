/**
 * This file contains the class to resolve the serie of a given number.
 * serie( n ) = ( 3 * prime( n ) * triangular( n ) ) / ( fibonacci( n - 2 ) )
 * Methods:
 * - setNumber
 * - getNumber
 * - prime (private method)
 * - triangular (private method)
 * - fibonacci (private method)
 * - getSerie
*/

class Series {
    _number = 0;

    set setNumber(number) {
        if (!isNaN(number)) {
            this._number = number;
        } else {
            throw new Error(`el valor asignado a 'n' debe ser un número`);
        }
    }

    get getNumber() {
        return this._number;
    }

    #prime() {
        let cont = 0;
        let num = 2;
        while (cont < this._number) {
            let primo = true;
            // verify if the number is prime
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    primo = false;
                }
            }
            if (primo) {
                cont++;
            }
            num++;
        }
        return num - 1;
    }

    #triangular() {
        return (this._number * (this._number + 1)) / 2;
    }

    #fibonacci(n) {
        return n <= 1 ? n : this.#fibonacci(n - 1) + this.#fibonacci(n - 2);
    }

    getSerie() {
        return (3 * this.#prime() * this.#triangular()) / this.#fibonacci(this._number - 2);
    }

}


export default Series;