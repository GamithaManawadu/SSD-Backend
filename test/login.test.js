const axios = require('axios');

describe('POST @ /admin/login endpoint', () => {
  it('should login an admin', async () => {
    try {
      const res = axios.post('http://localhost:5000/admin/login', {
        username: 'gamitha@admin',
        password: 'na123',
      });

      expect(res.status).toEqual(200);
    } catch (error) {
      console.log(error);
    }
  });
});