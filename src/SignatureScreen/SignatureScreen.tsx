import React from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './styles.css';

const SignatureScreen: React.FC = () => {
  return (
    <div className="all">
      <div className="text">Signature</div>
      <br></br>
      <SignatureCanvas
        penColor="orange"
        canvasProps={{
          width: '500%',
          height: '200%',
          className: 'signature_pad',
        }}
      />
    </div>
  );
};

export default SignatureScreen;
