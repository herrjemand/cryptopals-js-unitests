var hexToBase64 = require('./hex-to-base64');


describe('Hex to Base64', function() {

    var converter = new hexToBase64();

    it('I\'m killing your brain like a poisonous mushroom', function() {
        var hex = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
        var b64 = 'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t';
        expect(converter.convert(hex)).toEqual(b64);
    });

    xit('Not afraid of heights - afraid of widths.', function(){
        var hex = '4e6f7420616672616964206f662068656967687473202d20616672616964206f66207769647468732e';
        var b64 = 'Tm90IGFmcmFpZCBvZiBoZWlnaHRzIC0gYWZyYWlkIG9mIHdpZHRocy4=';
        expect(converter.convert(hex)).toEqual(b64);
    })
});