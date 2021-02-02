import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useEffect, useState } from 'react';

const Notes = ({ getAllNotes, notes, deleteNote, updateNote, petId }) => {
  const [ adding, setAdding ] = useState(false);

    useEffect( () => {                  
        getAllNotes(petId)
    }, [])
    
    return (
        <>
            {/* <h1> Notes </h1> */}
            <button onClick={() => setAdding(!adding)}>Add Note</button>
            { adding && <NoteForm petId={petId} /> }
            <NoteList 
                notes={notes} 
                deleteNote={deleteNote}
                updateNote={updateNote}
                petId={petId}
            />
        </>
    )
}

const ConnectedNotes = (props) => (
    <NoteConsumer>
        { value => (
            <Notes {...props} {...value} />
        )}
    </NoteConsumer>
)

export default ConnectedNotes;