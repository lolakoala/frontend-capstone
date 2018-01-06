import backend from './backend';

const login = user => {
  return {
    type: 'LOGIN_SUCCESS',
    user: user.user,
    userChallenges: user.userChallenges
  };
};

export const loginAttempt = email => {
  return dispatch => {
    fetch(`${backend}/api/v1/users?user_email=${email}`)
      .then(res => res.json())
      .then(res => {
        const resUser = res.users[0];
        const user = {
          user: {
            email,
            id: resUser.id,
            userName: resUser.user_name,
            aboutMe: resUser.user_about,
            // user img
            city: resUser.location
          },
          // set challenges when they come back
          userChallenges: []
        };
        return user;
      })
      .then(user => dispatch(login(user)))
      .catch(() => {
        dispatch(login({
          user: {
            email
          },
          userChallenges: []
        }));
      }
      );
  };
};


export const addCity = (city, user) => {
  const updatedUser = Object.assign({}, user, { city });
  return {
    type: 'ADD_CITY',
    updatedUser
  };
};

const challengesAcquired = challenges => {
  return {
    type: 'GET_ALL_CHALLENGES',
    challenges
  };
};

export const getAllChallenges = () => {
  return dispatch => fetch(`${backend}/api/v1/challenges`)
    .then(res => res.json())
    .then(res => res.challenges.map(challenge => challenge.challenge_name))
    .then(res => dispatch(challengesAcquired(res)))
    .catch(error => { throw error; });
};

// starting server interaction
// export const addUserChallenge = (challenge, type) => {
//   if (type === 'edit') {
//     return dispatch => fetch(`${backend}`)
//   }
// }

export const addUserChallenge = challenge => {
  // if run from editProfile, need to post/patch userChallenges
  return {
    type: 'ADD_USER_CHALLENGE',
    challenge
  };
};

export const removeUserChallenge = challenge => {
  // if run from editProfile, need to post/patch/delete userChallenges
  return {
    type: 'REMOVE_USER_CHALLENGE',
    challenge
  };
};

// const addUserId = (user, id) => {
//   console.log('in add id function');
//   const newUser = Object.assign({}, user, { id });
//   return dispatch => dispatch({
//     type: 'ADD_USER_ID',
//     newUser
//   });
// };
//
// const adjustUser = newUser => {
//   const newUserObj = {
//     user_name: newUser.userName,
//     user_about: newUser.aboutMe,
//     user_location: newUser.city,
//     user_email: newUser.email,
//     user_challenges: newUser.userChallenges
//   };
//   postUser(newUserObj);
// };
//
// // const addId = (user, id) => {
// //   return dispatch => dispatch(addUserId(user, id));
// // };
//
// const postUser = (newUser) => {
//   return fetch(`${backend}/api/v1/users`, {
//     method: 'POST',
//     body: JSON.stringify(newUser),
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   })
//     .then(res => res.json())
//     .then(res => addUserId(newUser, res.id))
//     .catch(error => { throw error; });
// };


export const submitProfile = (newUser, id) => {
  console.log(id)
  // adjustUser(newUser);
  const user = Object.assign({}, newUser, id);
  return {
    type: 'SUBMIT_PROFILE',
    user
  };
};

const patchUser = newUser => {
  // patch request to server to patch new user
};

export const editProfile = newUser => {
  patchUser(newUser);
  return {
    type: 'EDIT_PROFILE',
    newUser
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

const insuranceListAcquired = insuranceList => {
  return {
    type: 'GET_INSURANCE_LIST',
    insuranceList
  };
};

export const getInsuranceList = () => {
  return dispatch => fetch(`${backend}/api/v1/insuranceProviders`)
    .then(res => res.json())
    .then(res => res.insuranceProviders.map(ins => ins.insurance_provider_name))
    .then(res => dispatch(insuranceListAcquired(res)))
    .catch(error => { throw error; });
};

const specialtyListAcquired = specialtyList => {
  return {
    type: 'GET_SPECIALTY_LIST',
    specialtyList
  };
};

export const getSpecialtyList = () => {
  return dispatch => fetch(`${backend}/api/v1/specialties`)
    .then(res => res.json())
    .then(res => res.specialties.map(spec => spec.specialty_name))
    .then(res => dispatch(specialtyListAcquired(res)))
    .catch(error => { throw error; });
};

const sendSearch = searchObject => {
  // use object contents to make get request to server with query params
};

export const search = searchObject => {
  const searchResults = sendSearch(searchObject);

  if (searchObject.group === 'professionals') {
    return {
      type: 'SEARCH_PROFESSIONALS',
      searchResults
    };
  } else {
    return {
      type: 'SEARCH_BUDDIES',
      searchResults
    };
  }
};

export const clearSearchResults = () => {
  return {
    type: 'CLEAR_SEARCH_RESULTS'
  };
};

const fetchBuddies = user => {
  // get request to server for buddies
};

export const getBuddies = user => {
  const buddies = fetchBuddies(user);
  return {
    type: 'GET_BUDDIES',
    buddies
  };
};

const fetchProfs = user => {
  // get request for fave profs
};

export const getPreferredProfs = user => {
  const profs = fetchProfs(user);
  return {
    type: 'GET_PREFERRED_PROFS',
    profs
  };
};

const postBuddy = (user, personObject) => {
  // fetchBuddies(user) to check if buddy is already fave
  // make post or patch request to add/remove fave buddy
};

const postProf = (user, personObject) => {
  // fetchProfs(user) to check if prof is already fave
  // make post or patch request to add/remove fave prof
};

export const toggleFavorite = (user, type, personObject) => {
  // this needs to also handling removing a fave
  if (type === 'buddy') {
    postBuddy(user, personObject);
    return {
      type: 'ADD_BUDDY',
      personObject
    };
  } else {
    postProf(user, personObject);
    return {
      type: 'ADD_PROF',
      personObject
    };
  }
};
