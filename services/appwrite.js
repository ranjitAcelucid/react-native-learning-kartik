import { Client, Avatars, Account, Databases  } from 'react-native-appwrite';

export const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('68959a95001527e02de1')
  .setPlatform('com.kartik.shelfie')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)