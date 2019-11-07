class HashMap {
    constructor() {
        this.buckets = new Array(7)
    }

    // takes a string and returns the sum of all letters
    // in the string where each letter has some number value
    // q=0, w=1... (it could be anything really)
    hash(str) {
        str = str.toLowerCase();

        const ALPHABET = "qwertyuiopasdfghjklzxcvbnm"
        let sum = 0
        for (let i = 0; i < str.length; i++) {
            sum += ALPHABET.indexOf(str.charAt(i))
        }
        return sum
    }

    hashCode(key) {
        let index = this.hash(key) % this.buckets.length
        console.log("key:", key, "- index:", index)
        return index
    }

    put(key, value) {
        let index = this.hashCode(key)
        this.buckets[index] = value
    }

    get(key) {
        let index = this.hashCode(key)
        return this.buckets[index]
    }

    remove(key) {
        let index = this.hashCode(key)
        this.buckets[index] = null
    }
}

let map = new HashMap()
map.put("Washington", 7.4)
map.put("Hawaii", 1.4)
map.put("Arizona", 1)
console.log(map.buckets)



// console.log()
// console.log(map.get("Washington"))
// console.log(map.get("Oregon"))
// console.log(map.get("Idaho"))
// console.log(map.get("New York"))
// console.log(map.get("California"))
// console.log(map.get("Alaska"))
// console.log(map.get("Canada"))
// console.log(map.get("Computer"))
// console.log(map.get("Knife"))
// console.log()

// console.log('Putting 3.4 million for Oregon')
// console.log('Putting 2.7 million for Idaho')
// map.put('Oregon', 3.4)
// map.put('Idaho', 2.7)

// console.log('Oregon population:', map.get('Oregon'))
// console.log('Idaho population:', map.get('Idaho'))