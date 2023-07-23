import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Isha",
    lastName: "Patel",
    username: "isha",
    bio: "Hey! I'm adarsh balak.",
    website: "https://github.com/isha2806",
    profileAvatar:
      "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
    password: "isha123",
    createdAt: "2022-08-01",
    updatedAt: formatDate(),

    followers: [
      {
        _id: uuid(),
        firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
    following: [
      {
        _id: uuid(),
        firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Russel",
    lastName: "Q.",
    username: "russel",
    password: "russ123",
    bio: "Yo bro! Brown munde ! rass here",
    website: "https://github.com/isha2806",
    profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",

    createdAt: "2023-01-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Isha",
        lastName: "Patel",
        username: "isha",
        profileAvatar:
          "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
      {
        _id: uuid(),
        firstName: "Shahrukh",
        lastName: "Khan",
        username: "srk123",
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
    ],
  },
  {
    _id: uuid(),
    firstName: "Shahrukh",
    lastName: "Khan",
    username: "srk123",
    profileAvatar:
      "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
    password: "srk123",
    bio: "The Last Star of Bollywood!",
    website: "https://github.com/ishaisha2806",
    createdAt: "2022-02-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Samantha",
    lastName: "Kumari",
    username: "sumi23",
    password: "samantha123",
    bio: "Hey! sumi here",
    website: "https://github.com/isha2806",
    profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
    createdAt: "2022-09-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Shahrukh",
        lastName: "Khan",
        username: "srk123",
        profileAvatar:
          "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
      {
        _id: uuid(),
        firstName: "Russel",
        lastName: "Q.",
        username: "russel",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
      {
        _id: uuid(),
        firstName: "Isha",
        lastName: "Patel1",
        username: "Isha",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Deepika",
    lastName: "Padukone",
    username: "deepu",
    password: "deepu123",
    profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
    bio: "Stop stalking me",
    website: "https://github.com/isha2806",
    createdAt: "2023-03-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        lastName: "Patel",
        username: "isha456",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
    followers: [],
  },
  {
    _id: uuid(),
    firstName: "Isha",
    lastName: "Patel",
    username: "isha456",
    password: "Isha123",
    bio: "Hey! Isha here",
    website: "https://github.com/ishaisha2806",
    profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
    createdAt: "2023-03-01",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Samantha",
        lastName: "Kumari",
        username: "sumi23",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Deepika",
        lastName: "Padukone",
        username: "deepu",
        profileAvatar: "https://res.cloudinary.com/dyoerntpz/image/upload/v1690136731/gettyimages-1654101311.png_cl3xqw_xayev5.png",
      },
    ],
  },
];