import { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { PetConsumer } from '../../providers/PetProvider';
import Dropzone from 'react-dropzone'; 

class PetForm extends Component {
  state = { nombre: '', age: 0 , animal: '', color: '', weight: 0.0, sex: '', service: '', file: '', vet: '' }

  componentDidMount() {
    if (this.props.id) {
      const { nombre, age, animal, color, weight, sex, service, pic, vet} = this.props
      this.setState({ nombre, age, animal, color, weight, sex, service, pic, vet})
     
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { weight} = this.state
    this.setState({ weight: parseFloat(weight) })
    if (this.props.id) {
      const { userId, updatePet, id, setEditOpen } = this.props
      updatePet(userId, id, this.state)
      setEditOpen(false)
    } else {
      //const { addPet, userId } = this.props
      // hard coded userid
      const { addPet, history} = this.props
      const userId = 1
  
      addPet(userId, this.state, history)
    }
    this.setState({ nombre: '', age: 0 , animal: '', color: '', weight: 0.0, sex: '', service: '', file: '', vet: '' })
  }

  onDrop = (files) => {
    this.setState({ ...this.state, file: files[0] })
  }

  render() {
    const { nombre, age, animal, color, weight, sex, service, file, vet} = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='nombre'
          value={nombre}
          onChange={this.handleChange}
          // required
          label='Pet Name'
          placeholder="Name"
        />

        <Form.Input
          name='age'
          value={age}
          onChange={this.handleChange}
          // required
          type="number"
          label='Age'
          placeholder="Age"
        />
         <Form.Input
          name='animal'
          value={animal}
          onChange={this.handleChange}
          // required
          label='Animal'
          placeholder="Animal"
        />
         <Form.Input
          name='color'
          value={color}
          onChange={this.handleChange}
          // required
          label='Color'
          placeholder="Color"
        />

        <Form.Input
          name='weight'
          value={weight}
          onChange={this.handleChange}
          // required
          type="number" 
          step="0.01"
          label='Weight'
          placeholder="Weight"
        />
        <Form.Input
          name='sex'
          value={sex}
          onChange={this.handleChange}
          // required
          label='Sex'
          placeholder="Sex"
        />
         <Form.Input
          name='service'
          value={service}
          onChange={this.handleChange}
          // required
          label='Service'
          placeholder="Service Animal? yes/no"
        />
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
          <Form.Input
          name='vet'
          value={vet}
          onChange={this.handleChange}
          // required
          label='Veterinarian'
          placeholder="Veterianarian"
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const ConnectedPetForm = (props) => (
  <PetConsumer>
    { pet => (
      <PetForm {...props} {...pet} />
    )}
  </PetConsumer>
)

export default ConnectedPetForm;


