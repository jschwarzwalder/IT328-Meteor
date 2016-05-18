import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const activityCollection = new Mongo.Collection('activities');
export const dailyDiet = new Mongo.Collection('eatingActivities');
export const stepsTaken = new Mongo.Collection('steps');