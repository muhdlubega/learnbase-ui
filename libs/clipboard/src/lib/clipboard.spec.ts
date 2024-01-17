import { clipboard } from './clipboard';

describe('clipboard', () => {
  it('should work', () => {
    expect(clipboard()).toEqual('clipboard');
  });
});
