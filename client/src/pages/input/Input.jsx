import React, { useState } from 'react';
import { FileInput } from 'cloudinary-react'; // Make sure to import the correct package

const ProfilePictureUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Handle uploading the selectedFile to your backend
    // Make a POST request to your backend API to handle the image upload
  };

  return (
    <div>
      <FileInput
        name="profilePicture"
        onChange={handleFileChange}
        placeholder="Upload profile picture"
        resourceType="image"
        type="upload"
        cloudName="your-cloud-name"
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ProfilePictureUpload;
