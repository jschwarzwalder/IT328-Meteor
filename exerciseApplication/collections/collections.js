import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const activityCollection = new Mong.Collection('activities');
//mongo read one on the right
//application reads name on the left