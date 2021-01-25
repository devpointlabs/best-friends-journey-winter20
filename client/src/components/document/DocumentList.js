import { Grid } from 'semantic-ui-react';
import Document from './Document';
// import { Fade } from 'react-reveal';

const DocumentList = ({ documents, deleteDocument, petId, updateDocument }) => (
  // <Fade bottom cascade>
    <Grid columns={3}>
      {
        documents.map( d => 
          <Document  
            deleteDocument={deleteDocument}
            petId={petId}
            updateDocument={updateDocument}
            {...d}
          />
        )
      }
    </Grid>
  // </Fade>
)

export default DocumentList;