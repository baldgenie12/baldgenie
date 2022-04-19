import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../auth/lib/mongodb"
import CredentialsProvider from "next-auth/providers/credentials";

import connectDB from "./lib/connectDB";
import User from '../../../MongoDatabaseModels/UserModel'
import Merchants from '../../../MongoDatabaseModels/MerchantModel'

import { signIn } from "next-auth/react";
import bcrypt from 'bcrypt'
connectDB();
var account_type = null;

export default NextAuth({
  // Configure one or more authentication providers
  // adapter: MongoDBAdapter(clientPromise),
  //  For Credentials method this should be removed


  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const email = credentials.email;
        const password = credentials.password;
        account_type = credentials.account_type;

        console.log(account_type);

        if (account_type === 'Merchant') {
          const user = await Merchants.findOne({ email })
          if (!user) {
            throw new Error('You havent registered yet!')
          }
          if (user) {
            return signInUser({ password, user })
          }

        } else {
          const user = await User.findOne({ email })
          if (!user) {
            throw new Error('You havent registered yet!')
          }
          if (user) {
            return signInUser({ password, user })
          }
        }


      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),

  ],
  pages: {
    signIn: '/signin'
  },
  secret: 'secret',
  database: process.env.MONGODB_URI,
  callbacks: {
    session: async ({ session, token }) => {
      var sessionObj = {
        user: { name: session.user.name, email: session.user.email, image: session.user.image, account_type: account_type },
        expires: session.expires
      }
    
      return sessionObj
    }

  }
})


const signInUser = async ({ password, user }) => {
  if (!user.password) {
    throw new Error('Please enter password')
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    throw new Error('Password incorrect')
  }

  return user
}


