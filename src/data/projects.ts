export const PROJECTS = [
  {
    projectName: "Project1",
    listOfUsers: [
      {
        userName: "user1",
      },
      {
        userName: "user2",
      },
      {
        userName: "user3",
      },
    ],
    listOfFeedbacks: [
      {
        feedbackName: "feedback1",
        listOfComments: [
          {
            feedbackedUser: "user1",
            feedbackTotal: 5,
            comments: ["Good", "good"],
          },
          {
            feedbackedUser: "user2",
            feedbackTotal: 4,
            comments: ["Okay", "good"],
          },
          {
            feedbackedUser: "user3",
            feedbackTotal: 4,
            comments: ["Good partner", "good"],
          },
        ],
      },
      {
        feedbackName: "feedback2",
        listOfComments: [
          {
            feedbackedUser: "user3",
            feedbackTotal: 5,
            comments: ["Good", "good"],
          },
          {
            feedbackedUser: "user1",
            feedbackTotal: 3,
            comments: ["Okay", "good"],
          },
          {
            feedbackedUser: "user2",
            feedbackTotal: 1,
            comments: ["lazy", "not good"],
          },
        ],
      },
    ],
  },
  {
    projectName: "Project2",
    listOfUsers: [
      {
        userName: "user2",
      },
      {
        userName: "user5",
      },
      {
        userName: "user6",
      },
      {
        userName: "user7",
      },
    ],
    listOfFeedbacks: [
      {
        feedbackName: "feedback3",
        listOfComments: [
          {
            feedbackedUser: "user2",
            feedbackTotal: 3,
            comments: ["Okay", "good", "normal"],
          },
          {
            feedbackedUser: "user5",
            feedbackTotal: 1,
            comments: ["bad", "bad", "lazy"],
          },
          {
            feedbackedUser: "user6",
            feedbackTotal: 2,
            comments: ["not active", "not contribute", "not good"],
          },
          {
            feedbackedUser: "user7",
            feedbackTotal: 4,
            comments: ["good", "good", "good"],
          },
        ],
      },
      {
        feedbackName: "feedback4",
        listOfComments: [
          {
            feedbackedUser: "user2",
            feedbackTotal: 1,
            comments: ["not active", "absent", "absent"],
          },
          {
            feedbackedUser: "user6",
            feedbackTotal: 2,
            comments: ["Not good", "fine"],
          },
          {
            feedbackedUser: "user5",
            feedbackTotal: 5,
            comments: ["Excellent!", "Good"],
          },
          {
            feedbackedUser: "user7",
            feedbackTotal: 4,
            comments: ["Okay", "good"],
          },
        ],
      },
    ],
  },
];