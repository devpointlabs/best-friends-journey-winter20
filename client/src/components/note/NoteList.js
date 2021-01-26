import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Note from './Note';

const NoteList = ({ notes, deleteNote }) => (
  <>
    { notes.map( n => 
     <Note
        noteId={n.id}
        {...n}
        deleteNote={deleteNote}
        />
    )}
  </>
)

export default NoteList;