import { words } from "./words";

class TrieNode {
  public letter: string;
  public children: TrieNode[];
  constructor(letter: string) {
    this.letter = letter;
    this.children = [];
  }
}

class Trie {
  public root: TrieNode;
  constructor() {
    this.root = new TrieNode("");
  }

  public insert(word: string) {
    let currentNode = this.root;
    for (const element of word) {
      const letter = element;
      let childNode = currentNode.children.find(
        (child) => child.letter === letter
      );
      if (!childNode) {
        childNode = new TrieNode(letter);
        currentNode.children.push(childNode);
      }
      currentNode = childNode;
    }
  }

  public search(word: string): boolean {
    let currentNode = this.root;
    for (const element of word) {
      const letter = element;
      const childNode = currentNode.children.find(
        (child) => child.letter === letter
      );
      if (!childNode) {
        return false;
      }
      currentNode = childNode;
    }
    return true;
  }
}

const wordArray = words;

// Converting the array of words into an Trie
const trie = new Trie();
wordArray.forEach((word) => {
  trie.insert(word);
});

export default function WordVerifier(word: string) {
  return trie.search(word);
}
