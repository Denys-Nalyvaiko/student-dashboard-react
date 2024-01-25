import { ProfileContainer, SettingsSection } from './Profile.styled';

const Profile = () => (
  <ProfileContainer>
    <h2>My profile</h2>
    <div>
      <h3>Preffered name</h3>
      <input type="text" placeholder="Bob" />
    </div>
    <SettingsSection>
      <h3>Account Security</h3>
      <div>
        <p>Email</p>
        <p>exmaple@gmail.com</p>
        <button type="button">Change email</button>
      </div>
      <div>
        <p>Password</p>
        <p>Set new password</p>
        <button type="button">Change password</button>
      </div>
    </SettingsSection>
  </ProfileContainer>
);

export default Profile;
