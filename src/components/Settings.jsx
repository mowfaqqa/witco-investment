
import React, { useState } from 'react';
import Navbar from './Navbar';

const SettingsPage = ({ user }) => {
  const [userData, setUserData] = useState({ ...user });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

 
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    biometricAuth: false,
  });
  const [languagePreference, setLanguagePreference] = useState('en'); // Default to English

  const handleProfileSave = () => {
    // Implement logic to update user's profile data in the backend
    // Example: call an API to save changes
    // After successful save, you can show a success message
  };

  const handleChangePassword = () => {
    // Implement logic to change the user's password in the backend
    // Example: call an API to update the password
    // After successful password change, you can show a success message
  };

  return (

    <div className="app">
    <Navbar />
    

    <div className="container flex gap-3 mx-auto p-4 text-blue-900">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Settings</h1>

        {/* Profile Information */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>Name</label>
              <input
                type="text"
                className="border-yellow-500 border rounded py-2 px-3 w-full"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
            </div>
            {/* Add more fields for email, phone, etc. */}
          </div>
          <button
            className="mt-2 bg-yellow-500 text-gray-700 py-2 px-4 rounded"
            onClick={handleProfileSave}
          >
            Save Profile
          </button>
        </div>

        {/* Change Password */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <div>
            <label>Current Password</label>
            <input
              type="password"
              className="border-yellow-500 border rounded py-2 px-3 w-full"
              value={passwordData.currentPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, currentPassword: e.target.value })
              }
            />
          </div>
          <div>
            <label>New Password</label>
            <input
              type="password"
              className="border-yellow-500 border rounded py-2 px-3 w-full"
              value={passwordData.newPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, newPassword: e.target.value })
              }
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              className="border-yellow-500 border rounded py-2 px-3 w-full"
              value={passwordData.confirmPassword}
              onChange={(e) =>
                setPasswordData({ ...passwordData, confirmPassword: e.target.value })
              }
            />
          </div>
          <button
            className="mt-2 bg-yellow-500 text-gray-700 py-2 px-4 rounded"
            onClick={handleChangePassword}
          >
            Change Password
          </button>
        </div>

        {/* Add more sections for notification preferences, security settings, language preferences, etc. */}
      </div>

      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Settings</h1>

        {/* Profile Information */}
        {/* ... (previous code) */}

        {/* Notification Preferences */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
          <div>
            <label>
              <input
                type="checkbox"
                checked={notificationPreferences.emailNotifications}
                onChange={(e) =>
                  setNotificationPreferences({
                    ...notificationPreferences,
                    emailNotifications: e.target.checked,
                  })
                }
              />
              Receive Email Notifications
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={notificationPreferences.smsNotifications}
                onChange={(e) =>
                  setNotificationPreferences({
                    ...notificationPreferences,
                    smsNotifications: e.target.checked,
                  })
                }
              />
              Receive SMS Notifications
            </label>
          </div>
        </div>

        {/* Security Settings */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Security Settings</h2>
          <div>
            <label>
              <input
                type="checkbox"
                checked={securitySettings.twoFactorAuth}
                onChange={(e) =>
                  setSecuritySettings({
                    ...securitySettings,
                    twoFactorAuth: e.target.checked,
                  })
                }
              />
              Enable Two-Factor Authentication
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={securitySettings.biometricAuth}
                onChange={(e) =>
                  setSecuritySettings({
                    ...securitySettings,
                    biometricAuth: e.target.checked,
                  })
                }
              />
              Enable Biometric Authentication
            </label>
          </div>
        </div>

        {/* Language Preferences */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Language Preference</h2>
          <select
            className="border-yellow-500 border rounded py-2 px-3 w-full"
            value={languagePreference}
            onChange={(e) => setLanguagePreference(e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            {/* Add more language options */}
          </select>
        </div>

        {/* Add more sections for other settings as needed */}
      </div>
    </div>
    

  </div>

  );
};

export default SettingsPage;
