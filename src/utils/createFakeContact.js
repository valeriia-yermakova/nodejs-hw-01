import { faker } from '@faker-js/faker';

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  jobTitle: faker.person.jobTitle(),
});
