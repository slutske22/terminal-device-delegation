import { expect } from 'chai';
import { getUserByUsername } from './db';
import {
	getDatabaseData,
	setDatabaseData,
	resetDatabase,
} from './test-helpers';

describe('getUserByUsername', () => {
	afterEach('reset the database', async () => {
		await resetDatabase();
	});
	it('should get the correct user from the datbase given a username', async () => {
		// setup db

		// tests here
		const fakeData = [
			{
				id: '123',
				username: 'BooBoo',
				email: 'booboo@booboo.com',
			},
			{
				id: '124',
				username: 'Blue Ohana',
				email: 'blue@psychopooch.com',
			},
		];

		await setDatabaseData('users', fakeData);

		const actual = await getUserByUsername('BooBoo');
		const finalDBState = await getDatabaseData('users');

		await resetDatabase();

		const expected = {
			id: '123',
			username: 'BooBoo',
			email: 'booboo@booboo.com',
		};

		expect(actual).excludingEvery('_id').to.deep.equal(expected);
		expect(finalDBState).excludingEvery('_id').to.deep.equal(fakeData);
	});
});
