import conf from '../Config/conf';
import { Client, ID , Databse ,Storage , Query} from "appwrite";

export class AppwriteConfig {
client = new Client();
databases;
bucket;

constructor() {
    this.client
            .setEndpoint(conf.appwriteDatabase)
            .setProject(conf.appwriteBucket)
            this.databases = new Databse(this.client)
            this.bucket = new Storage(this.client)

}
 async createPost({title ,slug, content , imageId, status , userId}){
try {
    return await this.databases.createdocuent(
        conf.appwriteDatabase,
        conf.appwriteCOlllection,
        slug,
        {
            title,
            slug,
            content,
            imageId,
            status,
            userId
        }
    )
    
} catch (error) {
    console.log("Appwrite serive :: createPost :: error", error);
    
}
}

async UpdatePosts({title ,slug, content , imageId, status , userId}){
    try {
        return await this.databases.updateDocument(
            conf.appwriteDatabase,
            conf.appwriteCOlllection,
            slug,
            {
                title,  
                content,
                imageId,
                status,

            }
        )
        
    } catch (error) {
        console.log("Appwrite serive :: UpdatePosts :: error", error);
    }
}
async DeletePosts({slug}){
    try {
     await this.databases.deleteDocument(
            conf.appwriteDatabase,
            conf.appwriteCOlllection,
            slug
        )
        return true;
    } catch (error) {
        console.log("Appwrite serive :: DeletePosts :: error", error);
        return false; 
    }
}


async getPosts({slug}){
    try{
        return await this.databases.getDocument(
            conf.appwriteDatabase,
            conf.appwriteCOlllection,
            slug
        )
    } catch (error) {
        console.log("Appwrite serive :: getPosts :: error", error);
        return false;
    }
}

async getAllPosts({ queries = [Query.equal('status', 'active')] }){
    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabase,
            conf.appwriteCOlllection,
            queries,
            
        )
    } catch (error) {
        console.log("Appwrite serive :: getAllPosts :: error", error);
        return false;

}
}


async uploadFile(file){
    try {
        return await this.Storage.createFile(
            conf.appwriteBucket,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite serive :: uploadImage :: error", error);
        return false;
    }}

    async DeleteFile(fileId){
        try {
            await this.Storage.deleteFile(
                conf.appwriteBucket,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: DeleteImage :: error", error);
            return false;
        }}

        getFilePreview(fileId){
        return this.Storage.getFilePreview(
            conf.appwriteBucket,
            fileId
        )
    }


}



const service = new AppwriteConfig();
export default service;

