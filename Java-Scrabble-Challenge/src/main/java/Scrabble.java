import java.util.HashMap;


public class Scrabble {
    private String word;
    private int score;
    private boolean isDoubleWord;
    private boolean isTripleWord;
    private Character[] doubleLetter;
    private Character[] tripleLetter;
    HashMap<Character, Integer> elementsInScrabble = new HashMap<>();

    public Scrabble(String word) {
        this.score = 0;
        this.word = word;
    }

    public Scrabble(String word, Character[] doubleLetter, Character[] tripleLetter, boolean isDoubleWord, boolean isTripleWord) {
        this.score = 0;
        this.word = word;
        this.isDoubleWord = isDoubleWord;
        this.isTripleWord = isTripleWord;
        this.doubleLetter = doubleLetter;
        this.tripleLetter = tripleLetter;
    }
        public void calcScore() {
        char[] strArray = this.word.toCharArray();
        for (HashMap.Entry<Character, Integer> entry : elementsInScrabble.entrySet()) {
            for (int i = 0; i < strArray.length; i++) {
                if (strArray[i] == entry.getKey()) {
                    this.score += entry.getValue();
                }
            }
        }
    }
    private void calcDoubleWords () {
        if (this.isDoubleWord && this.score != 0) {
            this.score *= 2;
        }
    }
    private void calcTripleWords () {
        if (this.isTripleWord && this.score != 0) {
            this.score *= 3;
        }
    }
    private void calcDoubleLetters() {
        if (this.doubleLetter != null) {
            for (char c : this.doubleLetter) {
                this.score += elementsInScrabble.get(c);
            }
        }
    }
    private void calcTripleLetters(){
        if(this.tripleLetter!=null){
            for(char c : this.tripleLetter){
                this.score+=elementsInScrabble.get(c)*2;
            }
        }
    }
    public int score () {
        if (this.word == "" || this.word == null) {
            return this.score;
        } else {
            this.word = this.word.toUpperCase();
            calcScrabbleScore();
            calcScore();
            calcDoubleWords();
            calcTripleWords();
            calcDoubleLetters();
            calcTripleLetters();
        }
        return this.score;
    }
    public void calcScrabbleScore () {
        elementsInScrabble.put('A', 1);elementsInScrabble.put('E', 1);
        elementsInScrabble.put('I', 1);elementsInScrabble.put('O', 1);
        elementsInScrabble.put('U', 1);elementsInScrabble.put('L', 1);
        elementsInScrabble.put('N', 1);elementsInScrabble.put('R', 1);
        elementsInScrabble.put('S', 1);elementsInScrabble.put('T', 1);
        elementsInScrabble.put('D', 2);elementsInScrabble.put('G', 2);
        elementsInScrabble.put('B', 3);elementsInScrabble.put('C', 3);
        elementsInScrabble.put('M', 3);elementsInScrabble.put('P', 3);
        elementsInScrabble.put('F', 4);elementsInScrabble.put('H', 4);
        elementsInScrabble.put('V', 4);elementsInScrabble.put('W', 4);
        elementsInScrabble.put('Y', 4);elementsInScrabble.put('K', 5);
        elementsInScrabble.put('J', 8);elementsInScrabble.put('X', 8);
        elementsInScrabble.put('Q', 10);elementsInScrabble.put('Z', 10);
    }
}