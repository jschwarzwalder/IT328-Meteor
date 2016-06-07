import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const matchesCollection = new Mongo.Collection('matches');