# Friendship App
## Tools used
- **React** 
  - using functional components
  - using js but could refactor to TypeScript for strong type enforcement, organization, and readibility

- **[Mockaroo](https://www.mockaroo.com/)**
  - generates test data in large quantities with options for lots of common types and formats
  - does not offer option for nested relational data (see solution below)
  
- **[react-graph-vis](https://www.npmjs.com/package/react-graph-vis)**
  - react friendly library of [vis.js](https://visjs.org/)
  - used for data vis of friend network

- **[Lodash](https://lodash.com/)**
  - go-to js option for data operations
  - built-in ES6 functions accomplish most common data operations. Here I used it for finding array  intersection when counting mutual friends

## Data Prep
- script called gen-friends.js run as node script with params <infile name> <outfile name>
- ids in the test data here are integers 1-30
- for each user generate a random number up to 10 used for quantity of friends
- add a unique id to the users friends list until # of friends is reached
  
## Pages in App
### Login
- user 'logs in' by choosing name from list
- password doesnt matter

### Profile
- info of current user

### Friends List
- graph display of all  users in the network

### Suggested Friends
- friends-of-friends ranked by # of mutual friends
## Algorithm
- **User** model:
  - **id**
  - **friends** array of friends id
- Algorithm
  - inputs (**user_list**, **user_id**)
  - get **user** with **user_id**
  - initialize empty array **suggested_friends**
  - for each user **u** in **user_list**
    -  **mutual_friends** = array intersection of **u.friends**, **user.friends**
    - if (**mutual_friends**.length > 0)
      - add to **suggested_friends** object { mutualFriends: **mutual_friends**.length, user: **u**  }
  - sort **suggested_friends** descending by mutualFriends field
  
  *This algorithm is linear up to the sort function which uses the built in js Array.protoype.sort(). An improvement that can be made here is to maintain the list sorting as the the suggested friends list is built.*

## Potential Improvements
  
