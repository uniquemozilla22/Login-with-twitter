import LoginRoute from "./Login/Login.route.js"


const routes = (app) =>{
    console.log("route Called")
    app.use("/login",LoginRoute)
}


export default routes