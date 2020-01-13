import { GET_NOTE } from "queries.local.graphql";

export const saveNotes = cache => {
    const { notes } = cache.readQuery({ query: GET_NOTE });
    const jsonNotes = JSON.stringify(notes);
    try {
        localStorage.setItem("notes", jsonNotes);
    } catch (error) {
        console.log(error);
    }
};

export const restoreNotes = () => {
    const notes = localStorage.getItem("notes");
    if (notes) {
        try {
            const parsedNotes = JSON.parse(notes);
            return parsedNotes;
        } catch (error) {
            console.log(error);
            return [];
        }
    }
    return [];
};
