export const PROJECTS = [
  {
    projectName: "Project 1",
    listOfUsers: [
      {
        userName: "user 1",
      },
      {
        userName: "user 2",
      },
      {
        userName: "user 3",
      },
    ],
    listOfFeedbacks: [
      {
        feedbackName: "feedback1",
        listOfComments: [
          {
            feedbackedUser: "user 1",
            feedbackTotal: 5,
            comments: ["Good", "good"],
          },
          {
            feedbackedUser: "user 2",
            feedbackTotal: 4,
            comments: ["Okay", "good"],
          },
          {
            feedbackedUser: "user 3",
            feedbackTotal: 4,
            comments: ["Good partner", "good"],
          },
        ],
      },
      {
        feedbackName: "feedback2",
        listOfComments: [
          {
            feedbackedUser: "user 3",
            feedbackTotal: 5,
            comments: ["Good", "good"],
          },
          {
            feedbackedUser: "user 1",
            feedbackTotal: 3,
            comments: ["Okay", "good"],
          },
          {
            feedbackedUser: "user 2",
            feedbackTotal: 1,
            comments: ["lazy", "not good"],
          },
        ],
      },
    ],
  },
  {
    projectName: "Project 2",
    listOfUsers: [
      {
        userName: "user 2",
      },
      {
        userName: "user 5",
      },
      {
        userName: "user 6",
      },
      {
        userName: "user 7",
      },
    ],
    listOfFeedbacks: [
      {
        feedbackName: "feedback3",
        listOfComments: [
          {
            feedbackedUser: "user 2",
            feedbackTotal: 3,
            comments: ["Okay", "good", "normal"],
          },
          {
            feedbackedUser: "user 5",
            feedbackTotal: 1,
            comments: ["bad", "bad", "lazy"],
          },
          {
            feedbackedUser: "user 6",
            feedbackTotal: 2,
            comments: ["not active", "not contribute", "not good"],
          },
          {
            feedbackedUser: "user 7",
            feedbackTotal: 4,
            comments: ["good", "good", "good"],
          },
        ],
      },
      {
        feedbackName: "feedback4",
        listOfComments: [
          {
            feedbackedUser: "user 2",
            feedbackTotal: 1,
            comments: ["not active", "absent", "absent"],
          },
          {
            feedbackedUser: "user 6",
            feedbackTotal: 2,
            comments: ["Not good", "fine"],
          },
          {
            feedbackedUser: "user 5",
            feedbackTotal: 5,
            comments: ["Excellent!", "Good"],
          },
          {
            feedbackedUser: "user 7",
            feedbackTotal: 4,
            comments: ["Okay", "good"],
          },
        ],
      },
    ],
  },
];