import axios from "axios";
class AuthService {

    async login(accessToken) {
        try {
            
            var user = await axios.get(`http://localhost:5000/api/users/profile`, {
                headers: { authorization: accessToken },
            });
            return user;
        } catch (e) {
            
        }
    }
}

export default new AuthService();
