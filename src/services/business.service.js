import axios from "axios";
class BussinessService {
    async getListChat(accessToken, id) {
        try {
            var user = await axios(`http://18.140.239.96/api/rooms/${id}/messages`,{
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
            
            var user = await axios(`http://18.140.239.96/api/users/profile`, {
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
            
            var user = await axios.get(`http://18.140.239.96/api/users/profile`, {
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