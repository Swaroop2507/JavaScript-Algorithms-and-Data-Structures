function getAverage(scores) {
  // Initialize sum to 0 to store the total sum of scores
  let sum = 0;

  // Loop through each score in the scores array
  for (const score of scores) {
    // Add each score to the sum
    sum += score;
  }

  // Return the average by dividing the total sum by the number of scores
  return sum / scores.length;
}

function getGrade(score) {
  // Return "A++" if the score is 100
  if (score === 100) {
    return "A++";
  // Return "A" if the score is 90 or higher
  } else if (score >= 90) {
    return "A";
  // Return "B" if the score is 80 or higher
  } else if (score >= 80) {
    return "B";
  // Return "C" if the score is 70 or higher
  } else if (score >= 70) {
    return "C";
  // Return "D" if the score is 60 or higher
  } else if (score >= 60) {
    return "D";
  // Return "F" for any score below 60
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  // Check if the grade is not "F" (i.e., the student passed)
  return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
  // Check if the student passed the course
  if (hasPassingGrade(studentScore) == true) {
    // Return a message with the class average and the student's grade if they passed
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) +  ". You passed the course.";
  } else {
    // Return a message with the class average and the student's grade if they failed
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) +  ". You failed the course.";
  }
}

// Example usage of the studentMsg function, logging the result to the console
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
