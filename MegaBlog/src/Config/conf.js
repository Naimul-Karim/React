const conf = {
    appwriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjecId : String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabase : String(import.meta.env.VITE_DATABASE_ID),
    appwriteCOlllection : String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucket : String(import.meta.env.VITE_BUCKET_ID)
}
export default conf