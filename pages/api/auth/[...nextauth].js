import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from '../../../models/User';
const CryptoJS = require('crypto-js')


export default NextAuth({
    providers:[
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            //credentials: {
              //username: { label: "Username", type: "text", placeholder: "jsmith" },
              //password: {  label: "Password", type: "password" }
            //},
            async authorize(credentials, req) {
              // Add logic here to look up the user from the credentials supplied
              //const user = { id: 1, name: "J Smith", email: "jsmith@example.com" }

              const {email, password} = credentials;

              const user = await User.findOne({ email })
              console.log({user})
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        //const { password, ...others } = user._doc;


        
              if (user && originalPassword) {
                // Any object returned will be saved in `user` property of the JWT
                return user
              } else {
                // If you return null then an error will be displayed advising the user to check their details.
                return null
        
                // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
              }
            }
          })
    ],
    callbacks: {
       
        async session( session, user, token ) {
            console.log('session', {session,user})
            if (user && user._id){
                session.user.id = user._id
            }
          return session
        },
        async jwt( token, user, account, profile, isNewUser ) {
            console.log('jwt', {token, user})
            if (user && user._id){
                token.id = user._id
            }
          return token
        }
    }
})