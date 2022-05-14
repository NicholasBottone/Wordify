# CS32 Final Project Specification

## Section 1: Introduction

### 1.1 Project Specific Details

**Project Name:** Wordify

**Team Members:**

- Andrew Li (ali140)
- Toshiki Kato (tkato1)
- James Park (jpark236)
- Christine Jeong (cjeong5)
- Nicholas Bottone (nbottone)
- Robert Koch (rkoch2)

**Estimated Total Hours Per Person:** 60

### 1.2 Purpose

**The Goal/Problem**

Popular word games often do not automatically share your results with your friends. Each time you finish your word games, you must click the share button and click on the social media app and individual/group chat you would like to share the message to. It is inconvenient and laborious.

**The Existing Solutions**

Clicking the buttons to share with friends to several group chats can be tedious but is the only way to share your puzzle with friends; even so, you cannot see what other people’s guesses are.

**The Project**

Our project will recreate a word game site inspired by other popular word games. It will feature a friends list from which you could send requests and accept or decline, and every 24 hours it will create a new puzzle. You would be able to see your friends’ Wordify board: the number of attempts it took for them to solve and the words that took them to the answer. The user should be able to comment on each other’s board and react.

Additionally, this new puzzle will increment the number of letters. For instance, from Monday to Tuesday, the puzzle’s word will be a four letter word. From Wednesday to Thursday, the puzzle’s word will be a five letter word. From Friday to Saturday, the puzzle’s word will be a six letter word. Finally, on Sunday, the puzzle’s word will be a seven letter word. For now, we expect the number of guesses to be 5, 6, 8, 10, and 12, respectively, but this will be rebalanced according to trials.

As we sustain the “no spoiler” sharing feature of the puzzle and add new features, such as friend requests and different length words, our new project can facilitate the limitations of modern word games.

### 1.3 Intended Audience and Intended Use

**Intended end-users:**

- People with any background and education level seeking to complete a word-game or simple puzzle in a short amount of time

- People with friends who are also interested in word games and puzzles interested in sharing their Wordify dashboards or compete to see who can guess the word in the fewest attempts possible

**How will app fit into the lives of the users:**

- Users who are bored can simply spend a minute of their lives to engage with our application and complete the daily Wordify puzzle. This app can also be used in social and personal settings where users can share their Wordify dashboard with their friends, create a word and send that word over to their friends, and just come and relax for a short period of time!

### 1.4 External Stakeholders

- Users of Competing Word Games

- Competing Word Games (Semantle, Wordhunt, New York Times [Wordle, Crossword])

  - Our competitors would probably respond negatively to our presence as we would potentially be attracted to their users. Their users may end up playing their games and stick solely to ours.

- Social Media Platforms (Instagram, Twitter, BeReal, Snapchat)

  - Our competitors would probably respond negatively to our presence as we would take away the users' time spent on their services.

- Nature/Environment

  - If we end up publishing this project to the internet using a server, the extra computation and energy used to maintain the site could contribute negatively to the environment. This would affect the general population and the environment as a whole

- Josh Wardle (original creator of Wordle)

- Palak Shah (Josh’s partner and curator of all Wordle solution words)

### 1.5 Scope and User Stories

- As a casual word game enjoyer, I want to be able to easily see my friends’ word game results as soon as I finish mine so that I can compare and discuss the results of the puzzle easily, without having to worry about spoiling it for friends who haven’t done the puzzle yet.

- As a game developer, I want features that increase user retention so that my users keep using my app. Sharing results outside the word game app is critical for growth, but sharing results inside the app helps for retention. The sharing system that competitors have allowed them to get onto other platforms and cause exponential growth, but it is not ideal for rapid sharing with existing users.

- As a word game enthusiast I want more challenging versions of the classic word games because the 5-letter version I get every day is too easy. I can look up alternative versions for these word games on Google, but doing these every day takes up too many tabs on my computer. A site that consolidates these or varies the difficulty every day would be nice so that I don’t have to navigate to separate puzzles.

- As a linguistic researcher, I would want to be able to use Wordify as a tool for my research so that I can see the Wordify performance over time for a group of study participants. I would like to be able to add all of my study participants to a list of users (eg. a friends list) so that I can easily receive and record their performance on the daily puzzles without having to copy paste emojis from twitter. It would also be helpful to see some kind of visualization of each of my participants’ Wordify performance over time in order to use Wordify as both a data gathering tool and a platform for analysis.

- As a competitive word game enthusiast, I would love to challenge myself and see if I can guess the word within 15 seconds. That is, I would love it if there was a timer attached to the word puzzle so that I can easily tell if I am solving the puzzles faster. It would also be really cool if the leaderboard could reflect these changes as well!

## Section 2: Overall Description

### 2.1 User Needs

- The important tasks that users have to perform include solving the daily word puzzle, connecting with friends via the social features, and competing against friends on the leaderboards. As a social game service, user interaction and engagement is important for growing the service and demonstrating an active user base.

- The biggest gaps between current competing products and our product are the social functionalities. Users have the ability to add friends, keep track of their own stats and their friends’ stats across multiple devices, challenge their friends to custom puzzles, show up on ranked leaderboards, share puzzle results internally within the app without relying on external social platforms, and additional competitive elements such as a timer.

- Users express frustration with being unable to share their puzzle results with their friends that are interested without bothering people that might not be interested. Current puzzle games necessitate sharing results using external platforms such as Twitter, which might result in users annoying their friends with too much spam about games, or might result in users being discouraged from sharing their results at all. If the users are discouraged from sharing altogether, they may end up missing out on some of the social and competitive aspects of the game.

- We intend for our users to access the game about once a day, since we will release one new daily puzzle every 24 hours. Participating in the daily puzzle is encouraged using a daily streak, though it is optional to participate in the game daily - users can choose how frequently they want to play. Since the game includes social features including challenge puzzles and leaderboards, we estimate our most active users could access the app a few times per day (3-4 times per day).

- As a casual game, our app would be used during a user’s daily downtime / idle time. The time that each individual user uses our app is flexible, it can be at whatever time works best for the particular user. This could be while the user is at home, at lunch, or on a break. We expect our app to be used about 10-20 minutes per day, so location of use is practically everywhere.

- Our app does not have any secondary users.

- Our app might create a need that didn’t exist before through the addictiveness resulting from the gamification features. Due to the limited number of games that users can play per day (there is only one global daily puzzle), this should limit the overall amount of time that users will spend in the app, thereby capping the addictiveness of the app.

### 2.2 Assumptions and dependencies

**Technical Dependencies (Stack):**

**Frontend:**

- React-Bootstrap & Bootstrap (for styling and designing the UI)
- Next.js (React/backend framework)
- react-icons (icon library)
- use-debounce (debounce hook for auto-searching on text box fields)
- SWR (fetch library)
- Playwright (headless browser automation library and testing library)

**Backend:**

- Next.js (React/backend framework)
- Mongoose (MongoDB database ORM)
- Passport (for Google OAuth user authentication)
- next-connect (middleware for handling requests)
- Playwright (testing library)

In addition to the above Frontend and Backend dependencies, we will need a system in place to verify that a user-inputted word is a valid word in the English dictionary. While the specifics of this system are subject to change based on what we believe will be most appropriate for our implementation, we are currently planning to store a repository of possible words within the application itself, in order to maximize the speed of word verification. However, another possibility is using a dictionary API to verify words through an external repository.

**Non-technical Dependencies:**

- The relevance of our application extends on the popularity of word games in today’s social environment

- We are assuming that users will be fine with us sharing their statistics and profile to other users

- We are assuming that users will be comfortable using their Google account to sign in to the Wordify app. We intend to communicate to users that we will not use any information from their Google profile outside of what is publicly visible (their name, profile picture, and email address). We will only store their email address internally for login purposes and will not share it with any third parties of any kind.

**Financial Dependencies:**

- We don’t expect our project to incur any additional costs, aside from potential legal fees for consultation and lawsuits after we overtake competing word games as the number one online word game and get sued by the other competitors.

**Normative Assumptions:**

- We assume the user will know a relatively large amount of words in the English dictionary

  - Other 5-letter word games use approximately 2,300 most common words out of the ~12,000 five-letter words in the English dictionary. We expect to use a similar approach of only selecting common words, but will use a wider array of possibilities since we are not limited to five-letter words

- We assume the user has the dexterity to manually type in their guesses and navigate through the website

  - We hope that the inclusion of both a touchscreen/clickable keyboard on the UI and the ability to input letters using a physical/on-device keyboard will provide users with the most flexibility in how they wish to input letters into the puzzle

- We assume that the users can see the colors green, white, black, gray, and yellow in which we would turn certain keyboard keys to those colors to indicate correct letters

  - If time allows, we can add functionality to adjust the color palette of the app to be more accessible to colorblind users (this functionality is already implemented in other word games, so we can use this existing model to inform our approach to developing high-contrast color functionality)

## Section 3: System Features and Requirements

### 3.1 Risks

The Wordify app will use a system for verifying that a user-inputted word is correct. For example, a user could input the word ”ADIEU”, and the system would return that it is a valid word, but the user could also input “GHFJK” and the system should return that it is not a valid word. This word verification process will require either storing all valid words in the code in order to make the process of validating words as fast as possible. However, there may be some five-letter words from other languages or dialects that are not considered “valid”, which would be unfair to users from other countries or regions with different languages/keyboards. Similarly, the correct word may be used in some regions more than others -- for example, if the correct word is “COLOR”, users who live in regions where the “colour” spelling is more common would be put at a disadvantage.

The details of user profiles will be based on the user’s existing Google profile. For instance, the profile picture that will be displayed on Wordify will be the same profile picture from the user’s Google account. We hope that this will give users an appropriate degree of control over their profile through Google, although this does not accommodate users who may want one profile picture for Google and a different profile picture for Wordify. In addition to basic google profile information, the only data that we will store is the user’s performance history on past puzzles.

One risk for users is that there can be a possibility for an offensive word to be used as the solution to the puzzle. Specifically, an offensive word could be randomly selected as the daily word for everyone, or an offensive word can be chosen by a user as the solution to the puzzle that they send to their friends. In order to prevent these scenarios, we will develop a universal list of banned words that every potential puzzle solution will be checked against. If a match is found on the list of banned words, the solution will be rejected.
A social risk for the Wordify app is that its success is heavily dependent on the continued popularity of the other word games. If interest in these games declines over time, this will likely affect the performance of our app.

There are also accessibility risks to consider, particularly in relation to visually impaired users. We discuss these risks in Section 2.2: Assumptions and Dependencies.

### 3.2 Data Requirements

**Google Authentication:**

- **Email address**
  - Usage: to give distinctiveness to the users (each user has a different gmail account)
  - Consent: the users must sign in through gmail account, but the users can choose to opt out by playing as a guest.
- **Given name**
  - Usage: to identify the users
  - Consent: once the users sign in, the users cannot opt out of this since it will be collected from their Brown gmail account.
- **Family name**
  - Usage: to give more specific information about the users’ identity
  - Consent: once the users sign in, the users cannot opt out of this since it will be collected from their Brown gmail account.
- **Profile picture**
  - Usage: to personalize the users
  - Consent: profile picture is completely optional to the users. The users cannot opt out of this since it will be collected from their Brown gmail account.

**Profile Data:**

- **Active streak**
  - Usage: to display the current streak for the given user
  - Consent: Users cannot opt out of streak keeping, but eventually we may add functionality that allows users to decide whether to display this information on their profile
- **Longest streak**
  - Usage: to display the longest streak for the given user and reward the users for the long duration of using this application
  - Consent: Users cannot opt out of streak keeping, but eventually we may add functionality that allows users to decide whether to display this information on their profile
- **Games played**
  - Usage: to display the number of games played by the user and reward the users for number of attempts
  - Consent: Users cannot opt out of record keeping, but eventually we may add functionality that allows users to decide whether to display this information on their profile
- **Win percentage**
  - Usage: to display the win percentage for the given user and reward the users for winning frequently
  - Consent: Users cannot opt out of record keeping, but eventually we may add functionality that allows users to decide whether to display this information on their profile
- **User’s guesses and entries for today’s puzzle**
  - Usage: to give insight to better strategies in the word game and provide another source of entertainment for the users to guess and glimpse over other users’ guesses
  - Consent: Users cannot opt out of displaying their guess entries because it is part of our functionality and what differentiates this application.
- **Guess distribution**
  - Usage: to give users the ability to visualize their performance through their distribution of guesses over time.
  - Consent: Users cannot opt out of collecting this information, but guess distribution is only visible to the user themselves. We may later add a feature that allows users to completely reset all records of their games.

**Puzzle Data:**

- **Puzzle ID**
  - Usage: to identify the puzzle
- **Puzzle word**
  - Usage: to display the puzzle word
- **Stats collected**
  - Usage: to display the stats collected for the puzzle

### 3.3 System Features

**Frontend:**

- Home Screen - aesthetically pleasing welcoming screen with login/guest functionality. This is the entry point into the application

- Friend Component: component to interact with friends, including searching for users, friending users, see current friends, and see incoming friend requests

- Login Screen - screen where users would be directed to sign-in

- Profile Screen - place to find the user’s statistics and today’s Wordify dashboard

- Game Screen - daily word puzzle to be solved along with timer

- Guess Screen - displayed once a user solves the puzzle and shows the guess entries of your friends

- Navigation Bar - top-down persistent bar that contains buttons to navigate between various screens

**Backend:**

- User collection - contains data about users, user stats, user puzzles, and user friends

- Puzzle collection - contains data about puzzle solutions

- API endpoints/server-side props - allows for communication from backend to frontend

**Communication:**

- As a user plays the game, the statistics on the profile screen will automatically update

- As a user adds and accepts friends, the friend screen will automatically update

- A user can only add friends if he/she has a login

### 3.4 Functional Requirements

**Frontend:**

- **Home screen** - loads by default when not logged in. This is the entry point into the application

  - Communicates with the rest of the application. There will be two separate program execution flows: play as guest or login. Depending on what the user interacts with, the appropriate component will be executed.

- **Game screen** - loads by default when logged in, or after logging in/selecting play as guest when not logged in

  - Collects user input for game solving

  - User Input:

    - Users will see a 5 by 6 table. As the user types the guess, the guess should start to appear on the free row of the table. As the user presses delete, the words should also delete on the row table of the current guess. Once all 5 slots are filled, the user should be able to press enter, then the process below (Word Verification) should occur.

  - Word Verification

    - We will represent all the valid words in a Trie (not to be confused with the more common, herbaceous Tree) structure where each node will represent a letter followed by 26 branches for the next letter. This Trie will cover a depth of five where each subsequent layer builds sequentially on the previous layer. A boolean field will be represented at each node that determines whether this chain of letters is a valid word or not

  - Communicates w/backend for the list of friends, list of incoming friend requests, and whether the user has played a friend Wordify

- **Friend Component** - loads on the side of the game screen when user is logged in

  - Add Friend: component where users would be able to query off of both Friend’s given name and email from our Database, both of which will be given and provided to us from the Brown Google Authentication

  - See Friends: component where users would be able to see their current friends, sorted first by friends who had finished today’s Wordify and had uploaded their own, then by the time they finished with longest ascending. For this component, the user’s friends would have their profile outlined with a visually-appealing rainbow circle to denote an unplayed Wordify and a black outline to denote a played Wordify

  - Incoming Friend Requests: component where users would be able to see any incoming friend requests. Here, users would be able to view the incoming person’s profile and see their stats; and the users would have the option to either accept or decline the incoming request

- **Profile Screen**

  - Profile Picture: Component where the user profile picture is present in the profile screen.

  - Today’s Wordify Dashboard: Component where the results of that day’s Wordify results are displayed within the profile screen. If they have not solved it yet, the puzzle would be blank to indicate that it has not been completed yet.
  - Statistic Page: Component where the summary of the user’s performance is displayed. This includes presenting numbers for certain states and also a chart of their scores for all previously played games.

**Backend:**

- User collection - information in this database is made available to users when they view their profile screen

- Puzzle collection - information about solutions is made available in a rate-limited manner (one/day as the solution to the puzzle)

  - We came across an engineering decision as to whether we want to include all dictionary-defined five letter words or use the most common ones (ones that end-users would understand). We decided on the latter and would obtain these words from an API.

- API endpoints

### 3.5 Testing Plan

Include instructions on how to run tests from the command line!

Generally speaking, we are planning to test:

- Sending friend request and accept or decline
- Word game puzzle functionality
- Having unique usernames and passwords (including duplicate usernames)
- Able to comment (including non-English characters)
- Profile has accurate statistics
- Leadership board (maybe, including ties in ranking)
- Works on smaller screens
- Confirming that user submissions are a real word
- Resets every 24 hours (including users who are playing the puzzle when the reset occurs)

This could change as we work on our project.

**Instruction to test:**

We plan on using manual testing, unit testing, system testing, and Selenium testing to fulfill the tasks above. Frontend tasks that will be the user experience will be tested using Selenium. Word confirmation and other internal calculations will be conducted with unit testing. We also plan on extending user interaction testing with manual test sessions of the website.

### 3.6 External Interface Requirements

The users will be able to interact through web applications. There will be a visual accessibility where green will indicate that the letter is in the correct placement and yellow will indicate the letter is in the word but in the wrong placement. Unfortunately, at the moment, we do not have any plans to make our product accessible to motor and cognitive impaired as that is beyond the scope of our capabilities in implementation.

For our database, we will be using MongoDB which an external service. Thus, our app will communicate with external software. We’re not completely sure how MongoDB works exactly at the moment, but this is something that we plan to figure out!

### 3.7 Non-functional Requirements

In terms of standards of performance for speed, we desire for the actual game session to be instantaneous. The moment a user submits their guess, the tiles should flip in sequence while changing colors to indicate their validity. For other interactions such as loading the home page or loading user statistics, we ideally want the information to load within a few seconds. For reliability, we want to assure that we accept words from all English dialects, but also mostly have the target word be a word people from all demographics would know.

Some standards of security we want to uphold is ensuring that no malicious parties could access user data from the website. We will have standard coding practices such as privatizing fields for classes, securing the user information database, and, for know, requiring a google authentication login with a Brown email address.

Some standards of privacy we want to uphold is ensuring that all data stored is necessary and kept in locations where it is needed. For example, we will use Google Authentication as the login method where they have the credentials of a secure login process. The most private information we assessed that we will collect is user name and friend list. As this information is necessary for the friending and social component of our product, we deem that the risks of collecting this information is less than the benefit.

We have implemented a figma to decide on our frontend aesthetic. It is simple, clean, and is themed around pastel colors. We do expect a significant amount of time will be spent on css tasks to uphold the aesthetic that we decided on in the figma. We are making a game and social media platform and users would be more inclined to interact with our product with a more pleasing view in their game session and social sessions.

We decided on a color scheme that would be easy to read. However, we did not go as far as to do color blind testing. The font of the game itself will also be fairly large so that people can read the text easily.
