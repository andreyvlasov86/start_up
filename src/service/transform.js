// export function getQuizStatus(quizStatus) {
//   switch (quizStatus) {
//     case 'S': return 'Sent';
//     case 'R': return 'Received';
//     case 'P': return 'Passed';
//     default: return '';
//   }
// }
//
// export function getInviteStatus(inviteStatus) {
//   switch (inviteStatus) {
//     case 'S': return 'Sent';
//     case 'R': return 'Resent';
//     case 'A': return 'Accepted';
//     default: return '';
//   }
// }

export function getGender(gender) {
  let result = 'Prefer not to say';
  if(gender === 'M') {
    result = 'Male';
  } else if(gender === 'F') {
    result = 'Female';
  }
  return result;
}


export function getYesNo(value) {
  return value? 'Yes' : 'No';
}
