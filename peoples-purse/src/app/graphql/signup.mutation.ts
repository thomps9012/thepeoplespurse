import { Injectable } from "@angular/core";
import { Mutation } from "apollo-angular";
import gql from "graphql-tag";

export interface NewUser {
    username: string;
    email: string;
    password: string;
    classCode: string;
}

export interface SignUpMutation {
    newUser: NewUser;
}

@Injectable({
    providedIn: 'root'
})

export class SignupGQL extends Mutation{
    document = gql`
    mutation signUp($username: String!, $email: String!, $password: String!, $classCode: Number!) {
        signUp(username: $username, email: $email, password: $password, classCode: $classCode) {
          username
          JWT
        }
      } 
    `
}