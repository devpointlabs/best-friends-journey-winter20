import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Note from './Note';

const NoteList = ({ notes, deleteNote, updateNote, petId }) => (
  <>
    { notes.map( n => 
     <Note
        noteId={n.id}
        {...n}
        deleteNote={deleteNote}
        updateNote={updateNote}
        petId={petId}
        />
    )}
  </>
)

export default NoteList;