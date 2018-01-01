// I pulled this entire file from the redux-upload library docs.
// most things are commented out b/c they were throwing errors
// some comments are my actually commentary which will hopefully prove
// useful when we go back and look at this later.

const options = {
  // baseUrl will need to be changed when we deploy...
  // maybe handle with a process.env?
  baseUrl: 'http://localhost:3000/upload',
  // query: {
  //   category: '1',
  //   _: Date().getTime()
  // },
  query: files => {
    const length = files.length;
    const queryObj = {};
    for (let index = length - 1; index >= 0; --index) {
      queryObj[index] = files[index].name;
    }
    return queryObj;
  },
  body: {
    purpose: 'save'
  },
  // body: files => {
  //   const length = files.length;
  //   const queryObj = {};
  //   for (let index = length - 1; index >= 0; --index) {
  //     queryObj[index] = files[index].name;
  //   }
  //   return queryObj;
  // },
  dataType: 'json',
  multiple: true,
  numberLimit: 9,
  accept: 'image/*',
  // fileFieldName: 'file',
  fileFieldName: (file) => {
    return file.name;
  },
  withCredentials: false,
  requestHeaders: {
    'User-Agent': 'Warrior!'
  },
  // beforeChoose: user => {
  //   return user.isAllowUpload;
  // },
  didChoose: (files) => {
    // append this to DOM to show user they chose a file
    console.log('you choose', typeof files === 'string' ? files : files[0].name);
  },
  beforeUpload: (files) => {
    if (typeof files === 'string') return true;
    if (files[0].size < 1024 * 1024 * 20) {
      // files[0].mill = mill;
      return true;
    }
    return false;
  },
  didUpload: (files) => {
    // send file to server?
    console.log('you just uploaded', typeof files === 'string' ? files : files[0].name);
  },
  uploading: (progress) => {
    console.log('loading...', progress.loaded / progress.total + '%');
  },
  uploadSuccess: (resp) => {
    console.log('upload success!');
  },
  uploadError: (error) => {
    console.log({ error });
  }
};

export default options;
