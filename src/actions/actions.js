import backend from './backend';

export const login = user => {
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

export const submitProfile = (newUser, id) => {
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

export const getBuddies = buddies => {
  return {
    type: 'GET_BUDDIES',
    buddies
  };
};

export const getPreferredProfs = profs => {
  return {
    type: 'GET_PREFERRED_PROFS',
    profs
  };
};

// needs to be tested manually
const postBuddy = (user, personObject) => {
  fetch(`${backend}/api/v1/favoriteUsers/${user.id}`, {
    method: 'POST',
    body: JSON.stringify({ favoriteUserID: personObject.id }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .catch(error => { throw error; });
};

const postProf = (user, personObject) => {
  // fetchProfs(user) to check if prof is already fave
  // make post or patch request to add/remove fave prof
};

const deleteBuddy = () => {

};

const deleteProf = () => {

};

export const toggleFavorite = (user, type, personObject, isFave) => {
  // this needs to also handling removing a fave
  if (type === 'buddy' && !isFave) {
    postBuddy(user, personObject);
    return {
      type: 'ADD_BUDDY',
      personObject
    };
  } else if (type === 'buddy' && isFave) {
    deleteBuddy(user, personObject);
    return {
      // NEEDS REDUCER
      type: 'DELETE_BUDDY',
      personObject
    };
  } else if (!isFave) {
    postProf(user, personObject);
    return {
      type: 'ADD_PROF',
      personObject
    };
  } else {
    deleteProf(user, personObject);
    return {
      // needs REDUCER
      type: 'DELETE_PROF',
      personObject
    };
  }
};
