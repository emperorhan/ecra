import gql from "graphql-tag";
import { NOTE_FRAGMENT } from "./note.fragment.graphql";

export const GET_NOTES = gql`
    query getNotes {
        getNotes @client {
            ...NoteParts
        }
    }
    ${NOTE_FRAGMENT}
`;

export const GET_NOTE = gql`
    query getNote($id: Int!) {
        getNote(id: $id) @client {
            ...NoteParts
        }
    }
    ${NOTE_FRAGMENT}
`;

export const ADD_NOTE = gql`
    mutation addNote($title: string, $content: String) {
        addNote(title: $title, content: $content) {
            id
            title
            content
        }
    }
`;
