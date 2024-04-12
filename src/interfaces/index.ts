// Portfolio
export interface User {
  id: string;
  email: string;
}
export interface Contact {
  id: string;
  email: string;
}

// Codegem
export interface CodegemUser {
  _id?: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone?: number;
  password?: string;
  profilePicture?: string;
  coverImage?: string;
  bio?: string;
  title?: string;
  location?: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
  };
  interests: string[];
  programming: string[];
  hobbies: string[];
  books: string[];
  verified?: boolean;
  saved?: string[];
  friends?: string[];
  sentShares: (string | Share)[]; // if populated, array of Share otherwise of string
  receivedShares: (string | Share)[]; // if populated, array of Share otherwise of string
  sentRequests?: string[];
  receivedRequests?: string[];
  notifications: Notification[];
  mutualFriends?: number; // for friends section
  createdAt?: Date | string;
}
export interface Share {
  _id?: string;
  from: string;
  to: string;
  postId: string;
  postType: "code" | "streak" | "challenge";
  sharedTo: "friend" | "group";
  createdAt: Date | string;
}
export interface Notification {
  _id: string;
  user: string | User;
  title: string;
  description: string;
  type: "GENERAL" | "POST_CREATE" | "FRIEND_REQUEST";
  isRead: boolean;
}
