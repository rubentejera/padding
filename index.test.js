const paddingLeft = require('./index');

describe ('Padding-left App', () => {
        test('should be return the same word', function(){
            expect(paddingLeft("hola",3,"x")).toBe("hola");
        });
});
