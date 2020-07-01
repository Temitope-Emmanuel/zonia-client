import gql from 'graphql-tag'

export const ALL_USER = gql`
query{
    getAllUser{
        username
        id
        email
        password
    }
}
`
export const ALL_AUTHORS = gql`
  query{
    authors{
      name
      id
      age
      books{
        name
        id
      }
    }
  }  
  `
