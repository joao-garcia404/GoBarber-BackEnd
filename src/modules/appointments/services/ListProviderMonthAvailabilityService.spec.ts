import FakeAppointmentRepository from '../repositories/fakes/FakeAppointmentRepository';
import ListProviderMonthAvailability from './ListProviderMonthAvailabilityService';

let fakeAppointmentRepository = new FakeAppointmentRepository();
let listProviderMonthAVailability: ListProviderMonthAvailability;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentRepository();
    listProviderMonthAVailability = new ListProviderMonthAvailability(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 8, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 9, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 10, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 11, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 12, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 13, 0, 0),
    });

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

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 16, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 12, 17, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2021, 1, 15, 11, 0, 0),
    });

    const availability = await listProviderMonthAVailability.execute({
      provider_id: 'user',
      year: 2021,
      month: 2,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 11, available: true },
        { day: 12, available: false },
        { day: 13, available: true },
        { day: 14, available: true },
      ]),
    );
  });
});
