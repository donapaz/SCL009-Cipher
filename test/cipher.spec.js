describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });


    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ',33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    
    });

    it('debería retornar "hijkl" para "abcde" con offset 33', () => {
      assert.equal(cipher.encode('abcde',33), 'hijkl');
    
    });

    it('debería retornar "espacio en blanco" para "espacio en blanco" con offset 3', () => {
      assert.equal(cipher.encode(' ',33), ' ');
    
    });

    it('debería retornar "3456" para "1234" con offset 2', () => {
      assert.equal(cipher.encode('1234',2), '3456');
    
    });

  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG',33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    

    it('debería retornar "KroD" para "HolA" con offset 3', () => {
      assert.equal(cipher.decode('KroD',3), 'HolA');
    });

    it('debería retornar "espacio en blanco" para "espacio en blanco" con offset 4', () => {
      assert.equal(cipher.decode(' ',4), ' ');
    
    });

    it('debería retornar "1234" para "3456" con offset 2', () => {
      assert.equal(cipher.decode('3456',2), '1234');
    
    });

  });

});
