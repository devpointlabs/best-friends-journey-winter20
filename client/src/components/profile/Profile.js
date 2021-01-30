import { AuthConsumer } from '../../providers/AuthProvider';
import ProfileForm from './ProfileForm';

const Profile = () => (
    
    
    <AuthConsumer>
        { value => (
            <>
                <h1> User Profile </h1>
                <h1> Email: {value.user.email} </h1>
                <ProfileForm user={value.user} updateProfile={value.updateProfile}/>
            </>
        )}
    
    </AuthConsumer>
  )
  
  export default Profile;