/*
  AWS S3 Configurations
  Exports to app.js
  Latest modified 2016-01-22 17:15
  Have added the production conf.
*/

exports.myConfig = { // My Own account
  bucket: '',
  accessKeyId: '',
  secretAccessKey:'',
  region: '',
  IdentityPoolId: '',
  ServerSideEncryption: '',
  acl: '',
  endPoint: '',
  maxFileSize: 10585760 // 10MB
};

exports.JideTestConfig = { // Jide test account
  bucket: '',
  accessKeyId: '',
  secretAccessKey: '',
  region: '', // This region cannot make cognito, which is needed in browser of AWS.CognitoIdentityCredentials ...
  IdentityPoolId: '',
  ServerSideEncryption: '',
  acl: '',
  endPoint: '',
  // endPoint: 's3-us-west-2.amazonaws.com',
  // endPoint: 'test-jide-com.s3.amazonaws.com',
  maxFileSize: 10585760
};

exports.JideProdConfig = { // Jide production account
  bucket: '',
  accessKeyId: '',
  secretAccessKey: '',
  region: '',
  IdentityPoolId: '',
  ServerSideEncryption: '', // AES256 | aws:kms (The Server-side encryption algorithm used when storing this object in S3)
  acl: 'private', // Users would visit cdn, which has the permissions to request for S3, no need to public here.
  endPoint: '',
  maxFileSize: 10585760
};
