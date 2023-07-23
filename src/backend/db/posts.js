import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "p1",
    firstName: "Isha",
    lastName: "Patel",
    username: "isha",
    profileAvatar:
      "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
    content: "Work and Work Hard.",

    likes: {
      likeCount: 4,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rhea",
          lastName: "",
          username: "rhea12",
          profileAvatar:
            "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
        },
        {
          _id: uuid(),
          firstName: "Isha",
          lastName: "Patel",
          username: "isha",
          profileAvatar:
            "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
        },
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
        },
        {
          _id: uuid(),
          firstName: "Deepika",
          lastName: "Padukone",
          username: "deepu",
          profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
        },
      ],
    },

    media:
      "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690094118/SL_STRENGTH_01-e462194920784d3a914f767847d09121_ch7cje.jpg",
    createdAt: "2023-05-11",
    updatedAt: "2023-05-11",
    comments: [
      {
        _id: uuid(),
        firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://tse3.mm.bing.net/th/id/OIP.mzvdGtY4usfXQn_OaODB8AHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7",
        createdAt: "2023-05-11",
        updatedAt: "2023-05-11",
        comment: "There is no shortcuts.",
      },
    ],
  },
  {
    _id: "p2",
    firstName: "Russel",
    lastName: "Q.",
    username: "russel",
    profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
    content: "Every Indian is a self taught coder.",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
        {
          _id: uuid(),
          firstName: "Deepika",
          lastName: "Padukone",
          username: "deepu",
          profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
    },

    media: "",
    createdAt: "2023-06-12",
    updatedAt: "2023-06-12",
    comments: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        createdAt: "2023-06-09",
        updatedAt: "2023-06-09",
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-06-09",
        updatedAt: "2023-06-09",
        comment: "nice nice!",
      },
    ],
  },
  {
    _id: "p3",
    firstName: "Isha",
    lastName: "Patel",
    username: "isha",
    profileAvatar:
      "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102233/maxresdefault_ksrfgw.jpg",
    content: `My Life's love!`,
  

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
        {
          _id: uuid(),
          firstName: "Deepika",
          lastName: "Padukone",
          username: "deepu",
          profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
    },

    media: "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102234/Chak-De-India-Dialogues-5_ineo7l.jpg",
    createdAt: "2023-06-25",
    updatedAt: "2023-06-25",
    comments: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-02-19",
        updatedAt: "2023-02-19",
        comment: "nice nice!",
      },
    ],
  },

  {
    _id: "p4",
    firstName: "Samantha",
    lastName: "Kumari",
    username: "sumi23",
    profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
    content: "Life Lesson",
    media: "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102160/Bollywood-Inspirational-Dialogues-12_pwsszt.jpg",
    createdAt: "2023-06-21",
    updatedAt: "2023-06-21",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Shahrukh",
          lastName: "Khan",
          username: "srk123",
          profileAvatar:
            "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          _id: uuid(),
          firstName: "Deepika",
          lastName: "Padukone",
          username: "deepu",
          profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
    },

    comments: [
      {
        _id: uuid(),
        firstName: "Shahrukh",
        lastName: "Khan",
        username: "srk123",
        profileAvatar:
          "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-04-21",
        updatedAt: formatDate(),
        comment: "Haha!",
      },
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-04-21",
        updatedAt: "2023-04-21",
        comment: "spoon clean!",
      },
    ],
  },
  {
    _id: "p5",
    firstName: "Samantha",
    lastName: "Kumari",
    username: "sumi23",
    profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
    content: "Keep on keeping on!",
    media:
      "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102159/Rocky-quotes_ezfs7v.jpg",
    createdAt: "2023-04-21",
    updatedAt: "2023-04-21",

    likes: {
      likeCount: 4,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Shahrukh",
          lastName: "Khan",
          username: "srk123",
          profileAvatar:
            "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          _id: uuid(),
          firstName: "Isha",
          lastName: "Patel",
          username: "isha",
          profileAvatar:
            "https://res.cloudinary.com/dkmsin1t1/image/upload/v1687427008/gettyimages-1654101311.png_cl3xqw.png",
        },
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
        {
          _id: uuid(),
          firstName: "Deepika",
          lastName: "Padukone",
          username: "deepu",
          profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
    },

    comments: [
      {
        _id: uuid(),
        firstName: "Shahrukh",
        lastName: "Khan",
        username: "srk123",
        profileAvatar:
          "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-04-21",
        updatedAt: formatDate(),
        comment: "Jai Shiv!",
      },
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-04-21",
        updatedAt: "2023-04-21",
        comment: "well said!",
      },
    ],
  },
  {
    _id: "p6",
    firstName: "Shahrukh",
    lastName: "Khan",
    username: "srk123",
    profileAvatar:
      "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
    content: "Started learning Java, kyuki movie toh nahi chal rhi hai.",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
        {
          _id: uuid(),
          firstName: "Deepika",
          lastName: "Padukone",
          username: "deepu",
          profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
    },

    media: "",
    createdAt: "2023-02-19",
    updatedAt: "2023-02-19",
    comments: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "nice nice!",
      },
    ],
  },
  {
    _id: "p7",
    firstName: "Deepika",
    lastName: "Padukone",
    username: "deepu",
    profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
    content: "Be so good that they can't ignore you!",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
        {
          _id: uuid(),
          firstName: "Russel",
          lastName: "Q.",
          username: "russel",
          profileAvatar: "https://tse3.mm.bing.net/th/id/OIP.mzvdGtY4usfXQn_OaODB8AHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7",
        },
      ],
    },

    media: "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102159/016ddf13af4a065b66f331b05f04f30a--bollywood-masala-famous-dialogues_a1o4hx.jpg",
    createdAt: "2023-06-04",
    updatedAt: "2023-06-04",
    comments: [
      {
        _id: uuid(),
        firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://tse3.mm.bing.net/th/id/OIP.mzvdGtY4usfXQn_OaODB8AHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7",
        createdAt: "2023-06-04",
        updatedAt: formatDate(),
        comment: "Waao !",
      },
    ],
  },
  {
    _id: "p8",
    firstName: "Deepika",
    lastName: "Padukone",
    username: "deepu",
    profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
    content: "Believe in yourself! ",

    likes: {
      likeCount: 2,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
        {
          _id: uuid(),
          firstName: "Russel",
          lastName: "Q.",
          username: "russel",
          profileAvatar: "https://tse3.mm.bing.net/th/id/OIP.mzvdGtY4usfXQn_OaODB8AHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7",
        },
      ],
    },

    media:
      "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102159/b83de75b0aea8ed9742baa668d270df3--bollywood-quotes-bollywood-dialogues_v21jss.jpg",
    createdAt: "2023-06-05",
    updatedAt: "2023-06-05",
    comments: [
      {
        _id: uuid(),
        firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://tse3.mm.bing.net/th/id/OIP.mzvdGtY4usfXQn_OaODB8AHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7",
        createdAt: "2023-06-05",
        updatedAt: formatDate(),
        comment: "Very nice !",
      },
    ],
  },
  {
    _id: "p9",
    firstName: "Shahrukh",
        lastName: "Khan",
        username: "srk123",
        profileAvatar:
          "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
    content: "Chak de !",

    likes: {
      likeCount: 5,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Shahrukh",
          lastName: "Khan",
          username: "srk123",
          profileAvatar:
            "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          _id: uuid(),
          firstName: "Isha",
          lastName: "Patel",
          username: "isha",
          profileAvatar:
            "https://res.cloudinary.com/dkmsin1t1/image/upload/v1687427008/gettyimages-1654101311.png_cl3xqw.png",
        },
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
        {
          _id: uuid(),
          firstName: "Deepika",
          lastName: "Padukone",
          username: "deepu",
          profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          _id: uuid(),
          firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://tse3.mm.bing.net/th/id/OIP.mzvdGtY4usfXQn_OaODB8AHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7",
        },
      ],
    },

    media:
      "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102233/maxresdefault_ksrfgw.jpg",
    createdAt: "2023-06-17",
    updatedAt: "2023-06-17",
    comments: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "Qubool hai!",
      },
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-02-19",
        updatedAt: formatDate(),
        comment: "Chahoge jisko usi ko paoge tum",
      },
    ],
  },
  {
    _id: "p10",
    firstName: "Russel",
    lastName: "Q.",
    username: "russel",
    profileAvatar: "https://tse3.mm.bing.net/th/id/OIP.mzvdGtY4usfXQn_OaODB8AHaEo?w=295&h=184&c=7&r=0&o=5&dpr=1.7&pid=1.7",
    content: "New sensation",

    likes: {
      likeCount: 3,
      dislikedBy: [],
      likedBy: [
        {
          _id: uuid(),
          firstName: "Shahrukh",
          lastName: "Khan",
          username: "srk123",
          profileAvatar:
            "https://th.bing.com/th/id/R.6fa3999f33b8dd109b2a656cd61fa988?rik=Z5hqOXMJtGCNLg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-gu5D_1xMFFI%2fTV6DFoSuHYI%2fAAAAAAAAACU%2fpUCTQTZNpqc%2fs1600%2fShahrukh_Khan1.jpg&ehk=bi9%2f5aQLRPhCWrDwEtun%2bGD3u8P9fGNF3%2fPttSKDPyI%3d&risl=&pid=ImgRaw&r=0",
        },
        {
          _id: uuid(),
          firstName: "Isha",
          lastName: "Patel",
          username: "isha",
          profileAvatar:
            "https://res.cloudinary.com/dkmsin1t1/image/upload/v1687427008/gettyimages-1654101311.png_cl3xqw.png",
        },
        {
          _id: uuid(),
          firstName: "Samantha",
          lastName: "Kumari",
          username: "sumi23",
          profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        },
      ],
    },

    media:
      "https://res.cloudinary.com/dkmsin1t1/image/upload/v1690102233/Ek_TwZ8VMAAGKQy_xu4swk.jpg",
    createdAt: "2023-06-09",
    updatedAt: "2023-06-09",
    comments: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://2.bp.blogspot.com/_qH8WXDhVHYc/TUGdL2avTYI/AAAAAAAAAk4/sLMdaWGufQU/s1600/samantha15.jpg",
        createdAt: "2023-06-12",
        updatedAt: formatDate(),
        comment: "Yo!",
      },
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://th.bing.com/th/id/R.ca6bdb76af25ba70f50b24e8bda54680?rik=n%2fZBVolBHwZXMQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-n45A5ghWUYU%2fUpihzezSXVI%2fAAAAAAAADLc%2f6q1rcmhW1D4%2fs1600%2fDeepika%2bPadukone%2bcomputer%2bwallpaper%2b2014.jpeg&ehk=65hGdJ6qRl9Gyh9JgSuIxVhFiJ3Im68yNZp1sWWhxzY%3d&risl=&pid=ImgRaw&r=0",
        createdAt: "2023-06-12",
        updatedAt: formatDate(),
        comment: "well said!",
      },
    ],
  },
];