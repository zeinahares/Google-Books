import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
        bookCount
        savedBooks
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
          _id
          username
          email
          password
          bookCount
          savedBooks
        }
      }
  }
`;

export const SAVE_BOOK = gql`
    input BookInput {
        bookId: String!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

  mutation saveBook($book: BookInput) {
    saveBook(book: $book) {
        user {
            _id
            username
            email
            password
            bookCount
            savedBooks
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      user {
        _id
        username
        email
        password
        bookCount
        savedBooks
      }
    }
  }
`;