import { useState } from 'react';
import { FormRow_81, Alert_81 } from '../../components';
import { useAppContext } from '../../context/appContext_81';
import Wrapper from '../../assets/wrappers/DashboardFormPage_81';

const Profile_81 = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      displayAlert();
      return;
    }
    updateUser({ name, email, lastName, location });
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert_81 />}
        <div className='form-center'>
          <FormRow_81
            type='text'
            name='name'
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow_81
            type='text'
            labelText='last name'
            name='lastName'
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow_81
            type='email'
            name='email'
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <FormRow_81
            type='text'
            name='location'
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
          />
          <button className='btn btn-block' type='submit' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile_81;
