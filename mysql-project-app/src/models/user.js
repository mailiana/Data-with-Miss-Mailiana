class User {
    constructor(db) {
        this.db = db;
    }

    createUser(userData) {
        return this.db.query('INSERT INTO users SET ?', userData);
    }

    getUserById(userId) {
        return this.db.query('SELECT * FROM users WHERE id = ?', [userId]);
    }

    updateUser(userId, userData) {
        return this.db.query('UPDATE users SET ? WHERE id = ?', [userData, userId]);
    }

    deleteUser(userId) {
        return this.db.query('DELETE FROM users WHERE id = ?', [userId]);
    }

    getAllUsers() {
        return this.db.query('SELECT * FROM users');
    }
}

module.exports = User;