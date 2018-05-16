const paddingLeft = require('./index');

describe ('Padding-left App', () => {
        test('should be return the same word', function(){
            expect(paddingLeft("hola",3,"x")).toBe("hola");
        });
        test('should be return the word with send the same number of characters', function(){
            expect(paddingLeft("hola",4,"x")).toBe("hola");
        });
        test('should be return the word add characters before the word', function(){
            expect(paddingLeft("hola",5,"x")).toBe("xhola");
            expect(paddingLeft("hola",5)).toBe(" hola");
        });

});
