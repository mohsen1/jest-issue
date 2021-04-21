  describe('new line issue', () => {
    it('should allow comparing multi-line strings to single line strings', () => {
      const str = 't\n';
      expect(str).toBe('t');
    });
  });
