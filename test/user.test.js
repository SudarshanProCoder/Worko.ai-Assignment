const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/app'); // Assuming app.js exports the Express app

describe('User API', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    let userId;

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/worko/user')
            .send({
                email: 'test@example.com',
                name: 'Test User',
                age: 30,
                city: 'Test City',
                zipCode: '12345',
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
        userId = res.body._id;
    });

    it('should get all users', async () => {
        const res = await request(app).get('/worko/user');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });

    it('should get user by id', async () => {
        const res = await request(app).get(`/worko/user/${userId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', userId);
    });

    it('should update a user', async () => {
        const res = await request(app)
            .put(`/worko/user/${userId}`)
            .send({
                name: 'Updated User',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'Updated User');
    });

    it('should delete a user', async () => {
        const res = await request(app).delete(`/worko/user/${userId}`);
        expect(res.statusCode).toEqual(204);
    });

    it('should return 404 for non-existing user', async () => {
        const res = await request(app).get(`/worko/user/${userId}`);
        expect(res.statusCode).toEqual(404);
    });
});
