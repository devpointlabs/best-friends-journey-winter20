import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useEffect, useState } from 'react';
import { MainButton } from '../stylecomponents/homestyles';


const Notes = ({ getAllNotes, notes, deleteNote, updateNote, petId }) => {
  const [ adding, setAdding ] = useState(false);

    useEffect( () => {                  
        getAllNotes(petId)
    }, [])
    
    return (
        <>
            <MainButton onClick={() => setAdding(!adding)}>Add Note</MainButton>
            <br />
            <br />
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