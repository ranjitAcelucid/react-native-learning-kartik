import { Client,Avatars, Account } from 'react-native-appwrite';

export const client = new Client()
  .setProject('68959a95001527e02de1')
  .setPlatform('com.kartik.shelfie')
  // .setEndpoint('https://fra.cloud.appwrite.io/v1')

export const account = new Account(client)
export const avatars = new Avatars(client)