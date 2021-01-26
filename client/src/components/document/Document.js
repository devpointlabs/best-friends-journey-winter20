import { Component } from 'react';
import { Grid, Card, Image, Button, Modal } from 'semantic-ui-react';
import DocumentForm from './DocumentForm';

class Document extends Component {
  state = { open: false }

  setOpen = (val) => this.setState({ open: val })

  render() {
    const { deleteDocument, petId, id, picture, title, description } = this.props
    const { open } = this.state
    return (
      <Grid.Column>
        <Card>
          <Image src={picture} wrapped ui={false} size='medium' />
          <Card.Content>
            <Card.Header>{title}</Card.Header>
            <Card.Description>
              {description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button icon='trash' color='red' onClick={() => deleteDocument(petId, id)} />
            <Modal
              onClose={() => this.setOpen(false)}
              onOpen={() => this.setOpen(true)}
              open={open}
              trigger={<Button icon='pencil' color='yellow' />}
            >
              <Modal.Header>Edit Pet Document</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <DocumentForm 
                    setOpen={this.setOpen}
                    {...this.props}
                  />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}

export default Document;