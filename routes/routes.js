import UserSchema from "../Database/Schema/User.schema.js"
import LoginRoute from "./Login/Login.route.js"


const routes = (app,passport) =>{
    http://localhost:8000
    console.log("route Called")
    app.use("/login",LoginRoute)
    app.get("/social/twitter",passport.authenticate("twitter",{scope:["profile"]}))
    app.get("/social/twitter/callback",passport.authenticate('twitter', { failureRedirect: '/social/twitter/failed' }),(req, res)=>{
        console.log(req.user,"From the callback")
        res.redirect("http://localhost:3000")
    })

    app.get("/social/twitter/failed",(req, res)=>{
        console.log(req.user)
        res.send({success:false, login:"Failed"})
    })
}


export default routes