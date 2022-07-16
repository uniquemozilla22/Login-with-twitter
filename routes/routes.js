import UserSchema from "../Database/Schema/User.schema.js"
import LoginRoute from "./Login/Login.route.js"


const routes = (app,passport) =>{
    http://localhost:8000
    console.log("route Called")
    app.use("/login",LoginRoute)
    app.get("/social/twitter",passport.authenticate("twitter",{scope:["profile"]}))
    app.get("/social/twitter/callback",passport.authenticate('twitter', { failureRedirect: '/login' }),(req, res)=>{
        console.log(req.user)
        const {screen_name, name , id} = req.user
        const User = new UserSchema({username :})
        res.redirect("http://localhost:3000")
    })
}


export default routes