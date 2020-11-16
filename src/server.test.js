import sinon from 'sinon';
import request from 'supertest';
import { expect } from 'chai';
import db from './db';

describe('GET /sers/:username', () => {
	it('send the correct response when a user with the username is found', async () => {
		const fakeData = {
			id: '123',
			username: 'BooBoo',
			email: 'booboo@booboo.com',
		};

		const stub = sinon.stub(db, 'getUserByUsername').resolves(fakeData);

		stub.restore();
	});
});
