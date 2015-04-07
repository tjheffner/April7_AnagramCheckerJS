describe('anagram', function () {
    it('will return a match for letters that are the same', function() {
        expect(anagram("a", "a")).to.equal(true);
    });
    it('will return not a match for letters that are not the same', function() {
            expect(anagram('a', 'b')).to.equal(false);
    });
});
