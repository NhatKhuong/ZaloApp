import axios from "axios";
class AuthService {

    async login(accessToken) {
        try {
            
            var user = await axios(`http://54.254.183.128/api/users/profile`,{
                method: 'GET',
                headers: { authorization: accessToken },
              });
            return user;
        } catch (e) {
            
        }
    }
}

export default new AuthService();
