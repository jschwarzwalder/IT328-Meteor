//import the mongo object
import { Mongo} from "meteor/mongo";

//export access to my collections
export const bookmarksCollection = new Mongo.Collection("bookmarks");

//export access to any data to start our application