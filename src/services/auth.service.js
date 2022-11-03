import axios from "axios";
class AuthService {

    async login(accessToken) {
        try {
            
            var user = await axios(`https://frozen-caverns-53350.herokuapp.com/api/users/profile`,{
                method: 'GET',
                headers: { authorization: accessToken },
              });
            return user;
        } catch (e) {
            
        }
    }
}

export default new AuthService();
