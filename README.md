# Flash Card System
 <!-- ![Flash Card System](https://github.com/user-attachments/assets/3828207e-23f9-410e-b0f3-5672c41694c5) -->


## About The Project

## Features

- **Create Flashcards**: Easily create flashcards with questions and answers.

- **Study Modes**: Multiple study modes to help reinforce learning.

- **User-Friendly Interface**: Intuitive design for easy navigation.

- **Progress Tracking**: Keep track of your learning progress.


### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]


<!-- GETTING STARTED -->
## Installation

_Below are instructions for using the application. Since the app is hosted online, you can access it directly without any installation._

<!--1. Visit the live application at [Flash Card System]([https://card-repetition-project.vercel.app/study). -->
 
## Usage

The Flashcard Study App consists of several key pages that enhance the user experience and facilitate effective studying. Below is a breakdown of the main functionalities available on each page:

### 1. Home Page (`/`)
- **Overview**: The landing page provides a brief introduction to the app and its features. Users can navigate to either the "Add" or "Study"  or "Summary" sections from here.

### 2. Add Flashcard Page (`/add`)
![Add Page](https://github.com/user-attachments/assets/9272167c-c2e1-4e6e-8669-c8435203901c)
- **Functionality**: This page allows users to create new flashcards. Users can input a question and its corresponding answer, and then click the "Add Card" button to save it.
- **Data Persistence**: Newly created cards are stored in a JSON file, ensuring that they are available for future study sessions.

### 3. Study Flashcards Page (`/study`)
![Add Page](https://github.com/user-attachments/assets/eb94d714-d128-4389-9682-1d64a8cd7a08)
- **Study Card**: This section allows users to view their flashcards. Each card displays a question, and users can click the "Reveal" button to see the answer.
- **Rating Difficulty**: After revealing the answer, users can rate the difficulty of the question as "Easy," "Medium," or "Hard." This rating is crucial for the spaced repetition algorithm, which intelligently selects study material based on the user's proficiency level.
- **Spaced Repetition Algorithm**: 
  - Developed to prioritize weaker areas by using a dynamic understanding score. This means that cards rated as "Hard" will be shown more frequently until the user demonstrates improved understanding.
  - The algorithm reduces total study time by up to 15% per session by ensuring users focus on cards they have not yet mastered, increasing the efficiency of each study session.
### 4. Summary Page (`/summary`)
![Summary Page](https://github.com/user-attachments/assets/b165c858-89c4-441b-866b-e42d2619ffea)
- **Functionality**: This page provides users with an overview of their study progress and performance. Users can see metrics such as:

  - **Understanding Percentage**: Each card displays a percentage indicating how well the user understands the material, represented by a color-coded system:

    - Red (0-24%): Indicates low understanding.

    - Yellow (25-49%): Indicates moderate understanding.

    - Green (50% and above): Indicates good understanding.

  - **Card Management**: Users can remove cards from their study selection. Removed cards will not be replaced, allowing users to focus on areas where they need more practice.

- **Insights**: The summary page offers insights into study habits, allowing users to track their learning journey and adjust their study strategies accordingly.


### Example Workflow


1. **Adding Cards**: Users navigate to the `/add` page, fill in the question and answer fields, and save the card.

2. **Studying Cards**: Users go to the `/study` page, where they can view their flashcards. They click "Reveal" to see the answer and rate the difficulty.

3. **Reviewing Progress**: Users can check the `/summary` page to see their overall performance, including understanding percentages for each card and the ability to remove cards that they feel confident about.

4. **Dynamic Learning**: Based on the ratings, the spaced repetition algorithm adjusts the selection of cards for future study sessions, ensuring that users focus on areas where they need the most improvement.


By utilizing this structured approach, the Flashcard Study App not only enhances the learning experience but also optimizes study time, making it a powerful tool for mastering new material.



<!-- CONTACT -->
## Contact

Justis Guin - [LinkedIn](https://www.linkedin.com/in/justis-guin-5b1b54273/)
Feel free to reach out!



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
