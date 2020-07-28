 module.exports = (app) => {
     const User = require('./user.model')
     const {
         generateSalt,
         hash,
         compare
     } = require('./index');
     let salt = generateSalt(10);
     app.post('/register', async (req, res) => {
         try {
             let user = new User({
                 name: req.body.name,
                 email: req.body.email,
                 password: await hash(req.body.password, salt) // dont remove the await
             })

             let response = await user.save();
             res.status(200).json({
                 status: "Success",
                 data: response
             })

         } catch (err) {
             console.log(err)
         }

     });
     app.post('/login', async (req, res) => {
         try {
             let {
                 email,
                 password
             } = req.body;
             let user = await User.findOne({
                 email: email
             })
             if (!user) {
                 return res.status(400).json({
                     type: "Not Found",
                     msg: "Wrong Login Details"
                 })
             }
             let match = await compare(password, user.password);
             if (match) {
                 res.status(200).json({
                     status: "Success",
                     message: "Correct Details",
                     data: user
                 })
             }
         } catch (err) {
             console.log(err)
         }
     })
 }


 //  let salt = generateSalt(10);
 //  let test = hash('wisdom', salt);
 //  console.log(test)

 //  let comparepasword = compare('wisdom');
 //  console.log({
 //      comparepasword: comparepasword
 //  }) 



 //  // Login user 
 //  app.post('/login', async (req, res) => {

 //  });