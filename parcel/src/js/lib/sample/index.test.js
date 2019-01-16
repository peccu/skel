/* global jest */

import Sample from './';
describe('Sample Class', () => {
  const spyLog = jest.spyOn( console, 'log' );
  const spyError = jest.spyOn( console, 'error' );
  const spyWarn = jest.spyOn( console, 'warn' );

  beforeEach(() => {
    spyLog.mockReset();
    spyError.mockReset();
    spyWarn.mockReset();
  });

  afterEach(() => {
    expect(spyError).not.toHaveBeenCalled();
    expect(spyWarn).not.toHaveBeenCalled();
  });

  test('constructor should calls console.log', () => {
    let sample = new Sample({});
    expect(spyLog).toHaveBeenCalled();
    expect(sample.bow()).toBe({});
  });
});
