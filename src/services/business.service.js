import axios from "axios";
class BussinessService {
    async getListChat(accessToken, id) {
        try {
            var user = await axios(`http://54.254.183.128/api/rooms/${id}/messages`,{
                method: 'GET',
                headers: { authorization: accessToken },
              });
            return user;
        } catch (e) {
            console.log(e)
        }
    }

    async getListFile(accessToken) {
        try {
            console.log(accessToken);
            
            var user = await axios(`http://54.254.183.128/api/users/profile`, {
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
            
            var user = await axios.get(`http://54.254.183.128/api/users/profile`, {
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