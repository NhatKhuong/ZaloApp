import axios from "axios";
class BussinessService {
    serverUrl = process.env.SERVER_APP_URL || "http:localhost:5000/api";

    async getListChat(accessToken, _id) {
        try {
            var user = await axios.get(`http://localhost:5000/api/rooms/${_id}/messages`, {
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
            
            console.log({ serverUrl: this.serverUrl });
            var user = await axios.get(`http://localhost:5000/api/users/profile`, {
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
            
            console.log({ serverUrl: this.serverUrl });
            var user = await axios.get(`http://localhost:5000/api/users/profile`, {
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