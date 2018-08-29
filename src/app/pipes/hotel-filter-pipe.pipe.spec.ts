import { HotelFilterPipe } from './hotel-filter-pipe.pipe';

describe('HotelFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new HotelFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
