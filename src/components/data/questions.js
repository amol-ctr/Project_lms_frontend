export let questions = [
  {
    id: 1,
    question: "What is the value of acceleration due to gravity?",
    options: ["9.8 m/s²", "8.9 m/s²", "10.5 m/s²", "9.2 m/s²"],
    correctAnswer: 0,
    subject: "Physics",
  },
  // ... other questions
];

const fetchQuestionsFromQuizAPI = async () => {
  try {
    const response = await fetch(
      "https://quizapi.io/api/v1/questions?apiKey=m7TMi2dtJEa2PDYyLcParKsXe6ZLSPyfp5cSzRDe&limit=19"
    );
    const apiQuestions = await response.json();

    // Process the fetched questions and format them to match the existing structure
    const fetchedQuestions = apiQuestions.map((question, index) => ({
      id: questions.length + index + 1,  // Set new ID
      question: question?.question,       // The question text
      options: Object?.values(question.answers).filter(Boolean),  // Filter out null values
      correctAnswer: Object?.values(question.correct_answers).indexOf("true"),  // Get correct answer index
      subject: question?.category?.name || "General_Knowledge",  // Optional chaining for category
    }));

    // Merge API questions with the existing ones
    questions = [...questions, ...fetchedQuestions]; // Update the original questions array
    console.log(questions);
  } catch (error) {
    console.error("Error fetching questions from QuizAPI:", error);
  }
};


// // Immediately invoke the fetch function to update questions
await fetchQuestionsFromQuizAPI();

// // Export the updated questions array after the API call
// export const getUpdatedQuestions = async () => {
//   await fetchQuestionsFromQuizAPI(); // Wait for the questions to be fetched
//   return questions; // Return the updated questions array
// };

// You can also export the questions directly if needed, but it will be before the API call
export const getQuestionsBeforeFetch = () => questions;
