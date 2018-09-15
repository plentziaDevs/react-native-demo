import divide from './divide';

describe('divide', () => {
  it('default', () => {
    const result = divide();
    expect(result).toEqual(NaN);
  });

  it('when send first parameter', () => {
    const result = divide(10);
    expect(result).toEqual(Infinity);
  });

  it('when send second parameter', () => {
    const result = divide(undefined, 2);
    expect(result).toEqual(0);
  });

  it('when send both parameters', () => {
    const result = divide(10, 2);
    expect(result).toEqual(5);
  });

  it('when send not number', () => {
    let result = divide(10, 'hello');
    expect(result).toEqual(NaN);

    result = divide(10, {});
    expect(result).toEqual(NaN);

    result = divide(10, []);
    expect(result).toEqual(NaN);

    result = divide(10, new Date());
    expect(result).toEqual(NaN);

    result = divide(10, () => {});
    expect(result).toEqual(NaN);
  });
});
