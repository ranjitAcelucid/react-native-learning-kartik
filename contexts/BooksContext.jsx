import { createContext, useEffect, useState } from 'react'
import { client, databases } from '../services/appwrite'
import { ID, Query, Role, Permission } from 'react-native-appwrite'
import { useUser } from '../hooks/useUser'

const DATABASE_ID = "68a578ca00101837dd51"
const COLLECTION_ID = "68a578f900130e55119e"

export const BooksContext = createContext()

export function BooksProvider ({ children }) {
    const [ books, setBooks ] = useState([])
    const { user } = useUser()

    async function fetchBooks(){
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [
                    Query.equal('userId', user.$id),
                ]
            ) 
            setBooks(response.documents)
            console.log(response.documents)
        } catch (error) {
            console.error(error.message)
        } 
    }

    async function fetchBookById(id){
        try {
            const response = await databases.getDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            )
            return response
        } catch (error) {
            console.log(error.message)
        } 
    }

    async function createBook(data) {
        try {
         const newBook = await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            {...data, userId: user.$id},
            [
              Permission.read(Role.user(user.$id)),
              Permission.update(Role.user(user.$id)),
              Permission.delete(Role.user(user.$id)),
            ]
         )
        } catch (error) {
            console.log(error.message)
        } 
    }

    async function deleteBook(id) {
        try {
            await databases.deleteDocument(
                DATABASE_ID,
                COLLECTION_ID,
                id
            )
        } catch (error) {
            console.log(error.message)
        } 
    }

    useEffect(() => {
        let unsubscribe
        const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`
        
        if (user) {
            fetchBooks()

            unsubscribe = client.subscribe(channel, (response) => {
                const { payload, events } = response

                if (events.some((e) => e.includes("create"))) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        } else if (events.some((e) => e.includes("delete"))) {
          setBooks((prevBooks) =>
            prevBooks.filter((book) => book.$id !== payload.$id)
          );
        } else if (events.some((e) => e.includes("update"))) {
          setBooks((prevBooks) =>
            prevBooks.map((book) => (book.$id === payload.$id ? payload : book))
          );
        }
      });
        } else {
            setBooks([])
        }

        return () => {
            if (unsubscribe) unsubscribe()
        }

    }, [user])

    return (
        <BooksContext.Provider
          value={{ books, fetchBooks, fetchBookById, createBook, deleteBook }}
        >
            {children}  
        </BooksContext.Provider>
    )
}