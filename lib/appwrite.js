//const APPWRITE_PROJECT_ID = "682d6ce7000e251f2650";

import { Client, Account, Avatars } from "react-native-appwrite"
require('dotenv').config();

export const client = new Client()

client
  .setProject(process.env.APPWRITE_PROJECT_KEY)
  .setPlatform(process.env.APPWRITE_ENDPOINT)

export const account = new Account(client)
export const avatars = new Avatars(client)