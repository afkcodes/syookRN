if (!checked && currUser.maxVoteAllowed > 0) {
  voteAttempt += 1;
  currUser.maxVoteAllowed -= 1;
  if (voteAttempt === 1) {
    currentItem.points = item.points + FIRST_VOTE_POINT;
    currUser.votedRecipies.push(currentItem);
  } else if (voteAttempt === 2) {
    currentItem.points = item.points + SECOND_VOTE_POINT;
  } else if (voteAttempt === 3) {
    currentItem.points = item.points + SECOND_VOTE_POINT;
  }
  console.log('voteAttempt', voteAttempt);
  console.log(currUser);
  // await Util.setUserData(user.currentUser.username, user);
  currentItem.votes = item.votes + 1;
  // currentItem.points = item.points + 30;
  currentItem.votedBy.push(Util.user.currentUser.username);
  // console.log(currentItem);
  recipiesData.updateVotes(currentItem);
  // console.log(recipiesData.data);
} else {
  voteAttempt -= 1;
  currUser.maxVoteAllowed += 1;
  currentItem.votes = item.votes - 1;
  currentItem.points = item.points - 10;
  currentItem.votedBy.pop(Util.user.currentUser.username);
  console.log('voteAttempt', voteAttempt);

  console.log(currentItem);
}
//////////////////////////////////////////////////////////////
const updateData = async (currentItem) => {
    if (!checked) {
      if (currUser.votedRecipies.length < 3) {
        console.log(currUser.votedRecipies.length);
        currentItem.points = item.points + points.pop();
        currentItem.votes = item.votes + 1;
        recipiesData.updateVotes(currentItem);
        currentItem.votedBy.push(Util.user.currentUser.username);
        console.log(recipiesData.data);
        setChecked(!checked);
      } else {
        console.log('Not more than 3 votes');
      }
    }
    if (checked) {
      currUser.votedRecipies.pop(currentItem);
      console.log(currUser.votedRecipies.length);

      setChecked(!checked);
      // console.log(voteAttempt);
      // console.log('voteAttempt.length', voteAttempt.length);
    }