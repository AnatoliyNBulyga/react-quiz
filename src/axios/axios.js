import axios from 'axios';

export default axios.create({
   baseURL: 'https://react-quiz-bdd19.firebaseio.com/',
});