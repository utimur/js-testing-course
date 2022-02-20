const UsersPage = require('../pages/users.page');

describe('Users page', () => {
    it('load data', async () => {
       await UsersPage.loadData()
    });

    it('delete user', async () => {
        await UsersPage.loadData()
        await UsersPage.deleteUser()
    });
});
