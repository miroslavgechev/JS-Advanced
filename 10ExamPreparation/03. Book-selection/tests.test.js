let bookSelection = require('./solution')
let { assert } = require('chai');

describe("Tests BookSelection Functions", () => {

    describe("Test Related to isGenreSuitable Function", () => {

        it("should return correct values with correct input data", () => {
            assert.equal(bookSelection.isGenreSuitable('Comedy', 22),
                `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 13),
                `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 13),
                `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 55),
                `Those books are suitable`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 66),
                `Those books are suitable`);
        });

        it("should return error if $age is not allowed to read $genre", () => {
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12),
                `Books with Thriller genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 12),
                `Books with Horror genre are not suitable for kids at 12 age`);
            assert.equal(bookSelection.isGenreSuitable('Thriller', 5),
                `Books with Thriller genre are not suitable for kids at 5 age`);
            assert.equal(bookSelection.isGenreSuitable('Horror', 6),
                `Books with Horror genre are not suitable for kids at 6 age`);
        });
    });

    describe('Tests Related to isItAffordable Function', () => {

        it('should throw error if any of input parameters is NaN', () => {
            assert.throw(() => bookSelection.isItAffordable(10, '10'),
                'Invalid input');
            assert.throw(() => bookSelection.isItAffordable('Kenov', 10),
                'Invalid input')
            assert.throw(() => bookSelection.isItAffordable('10', '10'),
                'Invalid input')
        })

        it('should provide correct return with correct input', () => {
            assert.equal(bookSelection.isItAffordable(10, 12),
                `Book bought. You have 2$ left`);
            assert.equal(bookSelection.isItAffordable(10, 10), `Book bought. You have 0$ left`);
            assert.equal(bookSelection.isItAffordable(10, 9), `You don't have enough money`);
        })
    })

    describe('Tests Related to suitableTitles Function', () => {

        it('should throw error if array is not array and wantedGenre is not string', () => {
            assert.throw(() => bookSelection.suitableTitles('Thriller',
                [{ title: "The Da Vinci Code", genre: "Thriller" },
                { title: "The Da Vinci Code 2", genre: "Horror" }]),
                `Invalid input`);
            assert.throw(() => bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "The Da Vinci Code 2", genre: "Horror" }], 10),
                `Invalid input`);
            assert.throw(() => bookSelection.suitableTitles({}, 'Thriller'),
                `Invalid input`);
        })

        it('should return correct array if input is valid', () => {
            assert.deepEqual(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "The Da Vinci Code 2", genre: "Horror" }], 'Thriller'), ["The Da Vinci Code"]);

            assert.deepEqual(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" },
            { title: "The Da Vinci Code 2", genre: "Horror" },
            { title: "The Da Vinci Code 3", genre: "Horror" }], 'Horror'), ["The Da Vinci Code 2", "The Da Vinci Code 3"]);

            assert.deepEqual(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Horror" },
            { title: "The Da Vinci Code 2", genre: "Horror" }], 'Thriller'), [])
        })
    })
});