const buildClient = (express, app) => {
    if (process.env.NODE_ENV === "PRODUCTION") {
      app.use(express.static(path.join("client/build")));
      app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
      });
    }
  };
  
  export default buildClient;
