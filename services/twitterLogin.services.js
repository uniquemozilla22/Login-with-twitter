import UserSchema from "../Database/Schema/User.schema.js";


const twitterLogin =(passport, Strategy)=>{

    passport.use(new Strategy({
        consumerKey:process.env.TWITTER_API_KEY,
        consumerSecret:process.env.TWITTER_API_KEY_SECRET,
        callbackURL:"/social/twitter/callback"
    },async (token, tokenSecret, profile, cb)=>{

        const {id , displayName , username } = profile;

        console.log(id,displayName,username)
        try{
            const user  = await UserSchema.findOne({ socialID:profile.id});
            if(!user)
            {
                const registeredUser  =  new UserSchema({ username :profile.username, name:profile.displayName, socialID:profile.id })
                await registeredUser.save()
            }
            return cb(null, user);
        }
        catch(err)
        {
            console.log("error here at teitter services")
            throw err;
        }

        
    }))
    passport.serializeUser((user, callback)=>{
        callback(null, user)
    })
    passport.deserializeUser((user, callback)=>{
        callback(null, user)
    })
}


export default twitterLogin