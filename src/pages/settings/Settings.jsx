import React, { useState } from 'react';
import './settings.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import GeneralSettings from './GeneralSettings';
import AccountSettings from './AccountSettings';
import PrivacySettings from './PrivacySettings';
import CategorySettings from './Category/CategorySettings';

const Settings = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (itemName) => {
    if (selectedItem === itemName) {
      setSelectedItem(null);
    } else {
      setSelectedItem(itemName);
    }
  };

  const renderSettings = () => {
    switch (selectedItem) {
      case "General":
        return <GeneralSettings />;
      case "Account":
        return <AccountSettings />;
      case "Privacy":
        return <PrivacySettings />;
      case "Categories":
        return <CategorySettings />;
      default:
        return <p>Please select an item to view its settings.</p>;
    }
  };

  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Settings</h1>
            <div className="settingItem">
              <h2 className="settingTitle" onClick={() => handleItemClick("General")}>General</h2>
            </div>
            <div className="settingItem">
              <h2 className="settingTitle" onClick={() => handleItemClick("Account")}>Account</h2>
            </div>
            <div className="settingItem">
              <h2 className="settingTitle" onClick={() => handleItemClick("Privacy")}>Privacy</h2>
            </div>
            <div className="settingItem">
              <h2 className="settingTitle" onClick={() => handleItemClick("Categories")}>Categories</h2>
            </div>
          </div>
          <div className="right">
            {renderSettings()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings;
