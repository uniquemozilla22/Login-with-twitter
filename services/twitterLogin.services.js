

const twitterLogin =(passport, Strategy)=>{

    passport.use(new Strategy({
        consumerKey:process.env.TWITTER_API_KEY,
        consumerSecret:process.env.TWITTER_API_KEY_SECRET,
        callbackURL:"/social/twitter/callback"
    },(token, tokenSecret, profile, cb)=>{
        return cb(null,profile)
    }))
    passport.serializeUser((user, callback)=>{
        callback(null, user)
    })
    passport.deserializeUser((user, callback)=>{
        callback(null, user)
    })
}


export default twitterLogin