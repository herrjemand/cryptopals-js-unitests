var fixed_xor = require('./fixed-xor');


describe('A function that takes two equal-length buffers and produces their XOR combination.', function() {

    var xor = new fixed_xor();

    it('hit the bull\'s eye', function() {
        var key        = '1c0111001f010100061a024b53535009181c'
        var message    = '686974207468652062756c6c277320657965'
        var ciphertext = '746865206b696420646f6e277420706c6179'
        expect(xor.xor(key, message)).toEqual(ciphertext);
    });

    xit('self XOR length', function(){
        var key        = '101010101010101010101010101'
        var message    = '101010101010101010101010101'
        var ciphertext = '000000000000000000000000000'
        expect(xor.xor(key, message)).toEqual(ciphertext);
    })

    xit('different code length', function(){
        var key        = 'ddfcba96d7a03e17c2b285dc28da6cd7c3b1c44fb54f005b'
        var message    = '706c656173652073746f7020646f696e67206974'
        expect(xor.xor(key, message)).toThrow();
    })
});