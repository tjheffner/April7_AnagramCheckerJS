describe('anagram', function () {
    it('will return a match for letters that are the same', function() {
        expect(anagram("a", "a")).to.equal(true);
    });
});
