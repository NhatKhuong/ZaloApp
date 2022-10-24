import axios from "axios";
class BussinessService {
    async getListChat(accessToken, _id) {
        try {
            var user = await axios.get(`https://frozen-caverns-53350.herokuapp.com/api/rooms/${_id}/messages`, {
                headers: { authorization: accessToken },
            });
            console.log(user);
            return user;
        } catch (e) {
            console.log(e);
            
        }
    }

    async getListFile(accessToken) {
        try {
            console.log(accessToken);
            
            var user = await axios.get(`https://frozen-caverns-53350.herokuapp.com/api/users/profile`, {
                headers: { authorization: accessToken },
            });
            console.log(user);
            return user;
        } catch (e) {
            console.log(e);
            
        }
    }

    async getListPic(accessToken) {
        try {
            console.log(accessToken);
            
            var user = await axios.get(`https://frozen-caverns-53350.herokuapp.com/api/users/profile`, {
                headers: { authorization: accessToken },
            });
            console.log(user);
            return user;
        } catch (e) {
            console.log(e);
            
        }
    }
}

export default new BussinessService();