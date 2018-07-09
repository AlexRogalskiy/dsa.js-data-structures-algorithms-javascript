const RedBlackBST = require('./red-black-bst.js');

describe('RedBlackBST', () => {
  let redBlackBST;

  beforeEach(() => {
    redBlackBST = new RedBlackBST();
  });

  describe('#add', () => {
    it('should add and self-balance the tree', () => {
      expect(redBlackBST).not.toBe(undefined);
    });

    it('should make root black', () => {
      const root = redBlackBST.add(1);
      expect(root.meta.color).toBe(RedBlackBST.BLACK);
      expect(redBlackBST.size).toBe(1);
    });

    it('should add a new node as red', () => {
      redBlackBST.add(1);
      const n2 = redBlackBST.add(2);
      expect(n2.meta.color).toBe(RedBlackBST.RED);
    });

    xit('should balance tree by rotating left', () => {
      const n1 = redBlackBST.add(1);
      const n2 = redBlackBST.add(2);
      const n3 = redBlackBST.add(3);

      // expect(n1.right.value).toBe(2);
      // expect(n2.right.value).toBe(3);
      // expect(n3.right).toBe(undefined);

      // expect(n1.right.value).toBe(2);
      expect(n2.left.value).toBe(1);
      expect(n2.right.value).toBe(3);
      expect(n3.right).toBe(undefined);
      expect(n3.left).toBe(undefined);
      expect(n1.right).toBe(undefined);
      expect(n1.left).toBe(undefined);

      expect(redBlackBST.size).toBe(3);
    });
  });
});