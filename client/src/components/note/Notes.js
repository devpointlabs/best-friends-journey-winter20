import NoteList from './NoteList';
// import NoteForm from './NoteForm';
import { NoteConsumer } from '../../providers/NoteProvider';
import { useEffect, useState } from 'react';

const Pets = ({ getAllNotes, notes, deleteNote }) => {
  const [ adding, setAdding ] = useState(false);

    useEffect( () => {                  
        getAllNotes()
    }, [])
    
    return (
        <>
            <h1> Notes </h1>
            <button onClick={() => setAdding(!adding)}>Add New Note</button>
            { adding && <NoteForm /> }
            <NoteList 
                notes={notes} 
                deleteNote={deleteNote}
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