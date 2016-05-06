//import the mongo object
import { Mongo} from "meteor/mongo";

//export access to my collections
export const bookmarksCollection = new Mongo.Collection("bookmarks");

//export access to any data to start our application
export const bookmarksDummyData = [
	{
		"name": "Pierce County Library",
		"url": "http://www.piercecountylibrary.org",
		"lastVisited": new Date(2007, 5, 16)
	},
	{
		"name": "Teen Summer Challenge",
		"url": "http://beta.teensummerchallenge.org",
		"lastVisited": new Date()
	},
	{
		"name": "Ludum Dare",
		"url": "http://ludumdare.com/compo/",
		"lastVisited": new Date(2016, 4, 18)
	},
	{
		"name": "Crash Course Games",
		"url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPTrc_yg73RghJEOdobAplG",
		"lastVisited": new Date(2016, 4, 22)
	},
];