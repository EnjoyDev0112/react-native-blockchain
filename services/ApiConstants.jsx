export const endPoints = {
  registerUser: '/api/v1/auth/register',
  socialAcc: '/api/v1/socialacc',
  roles: '/api/v1/roles',
  verifyOtp: '/api/v1/auth/votp',
  regenerateOtp: '/api/v1/auth/regenotp',
  updateProfile: '/api/v1/profile/',
  phoneLogin: '/api/v1/check-mobi',
  questionaireCategory:
    '/api/v1/category?parentId=' + '5f6d81af8a388b6b805a0232',
  questionaire: '/api/v1/questionnaire',
  answer: '/api/v1/questionnaire/question',
  getMe: '/api/v1/auth/me',
};

export const apiStatusCodes = {
  STATUS_CODE_201: 201,
  STATUS_CODE_200: 200,
};
