// mutations.spec.js
import { expect } from 'chai';
import { mutations } from './store';

// destructure assign `mutations`
const { baseIncrement } = mutations;

describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = { count: 0 };
    // apply mutation
    baseIncrement(state);
    // assert result
    expect(state.count).to.equal(1);
  });
});