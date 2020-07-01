import gql from 'graphql-tag'

export const ADD_USER = gql`
    mutation AddUser($name:String!,$password:String!,$email:String!,$profileImg:String){
      signup(username:$name,email:$email,password:$password,profileImg:$profileImg){
        username
        id
        token
        email
        profileImg
      }
    }
`
export const LOGIN_USER = gql`
    mutation loginUser($email:String!,$password:String!){
      login(email:$email,password:$password){
        token
        profileImg
        id
      }
    }
`


export const ADD_BOOK = gql`
  mutation AddBook($name:String!,$genre:String!,$authorId:ID!){
    addBook(name:$name,genre:$genre,authorId:$authorId){
      name
      genre
      authorId
    }
  }
`

export const LOGIN = gql`
mutation login($email:String!,$password:String!){
  login(email:$email,password:$password){
    email
    password
  }
}
`
// export const ADD_PRODUCT = gql``
// export const DELETE_PRODUCT = gql``

// export const ADD_REVIEW = gql``
// export const DELETE_REVIEW = gql``

// mutation{
//     signup(username:"user1",email:"user1",password:"drowssap"){
//       token
//     }
//   }