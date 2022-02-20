const axios = require('axios');
const mapArrToStrings = require('../mapArrToStrings/mapArrToStrings');

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map(user => user.id)
        return userIds;
    } catch (e) {

    }
}

module.exports = getData;
