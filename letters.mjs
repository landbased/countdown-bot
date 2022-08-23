import { readFile } from 'node:fs/promises';

const permutationsOf = (array, callback) => {
  const swap = (array, pos1, pos2) => {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
  };

  const heaps = (n, heapArr, results = [], cb = null) => {
    if (n < 1) {
      if (cb) {
        cb(heapArr)
      } else {
        results.push(heapArr.slice());
      }
      return;
    }

    heaps(n-1, heapArr, results, cb);
    for (let i = 0; i < n-1; i++) {
      if (n % 2 === 0) {
        swap(heapArr, i, n-1);
      } else {
        swap(heapArr, 0, n-1);
      }

      heaps(n-1, heapArr, results, cb);
    }
    return results;
  }

  if (typeof(array) === 'string') {
    return heaps(array.length, array.split(''), [], callback);
  } else if (Array.isArray(array)) {
    return heaps(array.length, array.slice(), [], callback);
  } else {
    console.error(`called permutations with a non array arg: ${array}`);
    return [];
  }
}

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node[char]) {
        node[char] = {};
      }
      node = node[char];
      if (i === word.length-1) {
        node.END = true;
      }
    }
  }

  contains(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node[char]) {
        return false;
      }
      node = node[char];
    }
    return !!node.END;
  }
}

// LETTERS
const MIN_WORD_LENGTH = 4;

const args = process.argv.slice(2);

const letters = args[0];
console.log(letters);

const t1 = performance.now();

const rawWords = await readFile('./words.txt');

const wordsList = String(rawWords).split(/\r?\n/);

const wordsTrie = new Trie();
for (const word of wordsList) {
  wordsTrie.insert(word);
}

const answers = new Set();

permutationsOf(letters, (perm) => {
  let word = perm.join('');
  while (word.length >= MIN_WORD_LENGTH) {
    if (wordsTrie.contains(word)) {
      answers.add(word);
      break;
    }
    word = word.slice(0, -1);
  } 
});

const sorted = Array.from(answers).sort((a,b) => b.length - a.length);

const t2 = performance.now();

console.log(sorted);

console.log(`took ${t2-t1}ms`); 