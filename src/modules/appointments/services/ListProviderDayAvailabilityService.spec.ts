import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentRepository';
import ListProviderDayAvailability from './ListProviderDayAvailabilityService';

let fakeAppointmentRepository = new FakeAppointmentRepository();
let listProviderDayAVailability: ListProviderDayAvailability;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    listProviderDayAVailability = new ListProviderDayAvailability(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the day availability from provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 14, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2021, 1, 12, 11).getTime();
    });

    const availability = await listProviderDayAVailability.execute({
      provider_id: 'user',
      year: 2021,
      month: 2,
      day: 12,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true },
      ]),
    );
  });
});
