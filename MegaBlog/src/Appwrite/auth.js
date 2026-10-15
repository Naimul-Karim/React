import conf from '../Config/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client()
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjecId)
            this.account = new Account(this.account)
    }

    async createAccount({email, passsowrd ,  name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email , passsowrd , name)
            if (userAccount) {
                return this.login({email , passsowrd})
                
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error ; 
            
        }
    }

    async login({email , password}){
        try {
            const session = await account.createEmailPasswordSession({ email, password});
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
try {
    const user = await account.get();
} catch (error) {
    console.log("Appwrite serive :: getCurrentUser :: error", error);
}
    }


    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authservice = new AuthService();

export default authservice