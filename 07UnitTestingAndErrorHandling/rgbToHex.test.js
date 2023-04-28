const { expect } = require('chai')
const { rgbToHexColor } = require('./rgbToHex')

describe('Testing RGB to HEX function', () => {

    it('should return HEX color if inputs are valid integers', () => {
        expect(rgbToHexColor(200, 200, 22)).to.be.equal('#C8C816')
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000')
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF')

    })

    it('should return undefined if any input is integer but out of range', () => {
        expect(rgbToHexColor(200, 200, 256)).to.be.undefined
        expect(rgbToHexColor(200, 256, 200)).to.be.undefined
        expect(rgbToHexColor(256, 200, 200)).to.be.undefined
        expect(rgbToHexColor(-12, 200, 200)).to.be.undefined
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined
        expect(rgbToHexColor(-10, -100, -256)).to.be.undefined
    })

    it('should return undefined if any input is invalid', () => {
        expect(rgbToHexColor(200, 200, 'Kenov')).to.be.undefined
        expect(rgbToHexColor(200, {}, 200)).to.be.undefined
        expect(rgbToHexColor([200, 12, 200])).to.be.undefined
        expect(rgbToHexColor([200, 16.5, 200])).to.be.undefined

    })

    it('should return undefined if any input is number in string', () => {
        expect(rgbToHexColor(200, 200, '200')).to.be.undefined
    })

    it('should return undefined if any input is HEX color', () => {
        expect(rgbToHexColor('#C8C816')).to.be.undefined
    })

})