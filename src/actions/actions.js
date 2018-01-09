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
          userChallenges: resUser.user_challenges
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

export const challengesAcquired = challenges => {
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

export const addUserChallenge = challenge => {
  return {
    type: 'ADD_USER_CHALLENGE',
    challenge
  };
};

export const removeUserChallenge = challenge => {
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
  const newUserObj = {
    user_name: newUser.userName,
    user_about: newUser.aboutMe,
    user_location: newUser.city,
    user_challenges: newUser.userChallenges
  };

  fetch(`${backend}/api/v1/users/${newUser.id}`, {
    method: 'PATCH',
    body: JSON.stringify(newUserObj),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res.status))
    .catch(error => { throw error; });
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

export const insuranceListAcquired = insuranceList => {
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

export const specialtyListAcquired = specialtyList => {
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

export const search = (searchResults, type) => {

  if (type === 'professionals') {
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

const postBuddy = (user, personObject) => {
  fetch(`${backend}/api/v1/favoriteUsers/${user.id}`, {
    method: 'POST',
    body: JSON.stringify({ favoriteUserID: personObject.id }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res.status))
    .catch(error => { throw error; });
};

const postProf = (user, personObject) => {
  fetch(`${backend}/api/v1/favoriteProfessionals/${user.id}`, {
    method: 'POST',
    body: JSON.stringify({ favoriteProfessionalID: personObject.id }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res.status))
    .catch(error => { throw error; });
};

const deleteBuddy = (user, buddy) => {
  fetch(`${backend}/api/v1/favoriteUsers/${user.id}/${buddy.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res.status))
    .catch(error => { throw error; });
};

const deleteProf = (user, prof) => {
  fetch(`${backend}/api/v1/favoriteProfessionals/${user.id}/${prof.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res.status))
    .catch(error => { throw error; });
};

export const toggleFavorite = (user, type, personObject, isFave) => {
  if (type === 'buddy' && !isFave) {
    postBuddy(user, personObject);
    return {
      type: 'ADD_BUDDY',
      personObject
    };
  } else if (type === 'buddy' && isFave) {
    deleteBuddy(user, personObject);
    return {
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
      type: 'DELETE_PROF',
      personObject
    };
  }
};
