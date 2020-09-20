const shoppingList = require('../shopping').shoppingList;

describe("test Shopping", () => {
  let total, amount, tags;

  // avant chaque test
  beforeEach(() => {
    total = 0;
    amount = 0;
    tags = [];
  });

  test('Test total by product', () => {

    for (let p of shoppingList) {
      if (p['price'] != undefined && p['count'] != undefined && p['total'] != undefined) {
        total = p['price'] * p['count'];
        expect(total).toEqual(Number(p['total']));
      }
    }
  });

  test('Test total is not good', () => {
    for (let p of shoppingList) {
      if (p['total'] != undefined) { total += Number(p['total']); }
    }
    amount = shoppingList.pop().amount || undefined;
    if (amount != undefined) amount = Number(amount);

    expect(amount).not.toEqual(total);

  });

  test('Test pattern tags ', () => {
    for (let p of shoppingList) {
      if (p['tags'] != undefined && Array.isArray(p['tags'])) {
        expect(new Set(p['tags'])).toContain('love');
      }
    }
  });

  test('Test pattern tags no war ', () => {
    for (let p of shoppingList) {
      if (p['tags'] != undefined && Array.isArray(p['tags'])) {
        expect(new Set(p['tags'])).not.toContain('war');
      }
    }
  });

});