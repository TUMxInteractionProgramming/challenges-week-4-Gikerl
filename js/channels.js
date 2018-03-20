/* #6 start the #external #action and say hello */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*jslint devel: true */
/*jslint browser: true*/


/*
function Channel(name, createdOn, createdBy, starred, expiresIn, messageCount) {
    this.name = name;
    this.createdOn = createdOn;
    this.createdBy = createdBy;
    this.starred = starred;
    this.expiresIn = expiresIn;
    this.messageCount = messageCount;
}
*/

var channel1 = {
    id: 1,
    name: '#Yummy',
    createdOn: new Date('April 1, 2016 12:00:00'),
    createdBy: "minus.plus.yummy",
    starred: false,
    expiresIn: 6000,
    messageCount: 999
};

var channel2 = {
    id: 2,
    name: '#SevenContinents',
    createdOn: new Date('April 1, 2016 12:00:00'),
    createdBy: "UPGRADING.NEVER.HELPS",
    starred: true,
    expiresIn: 6000,
    messageCount: 999
};

var channel3 = {
    id: 3,
    name: '#KillerApp',
    createdOn: new Date('April 1, 2016 12:00:00'),
    createdBy: "UPGRADING.NEVER.HELPS",
    starred: false,
    expiresIn: 6000,
    messageCount: 999
};

var channel4 = {
    id: 4,
    name: '#FirstPersonOnMars',
    createdOn: new Date('April 1, 2016 12:00:00'),
    createdBy: "UPGRADING.NEVER.HELPS",
    starred: true,
    expiresIn: 6000,
    messageCount: 999
};

var channel5 = {
    id: 5,
    name: '#Octoberfest',
    createdOn: new Date('April 1, 2016 12:00:00'),
    createdBy: "UPGRADING.NEVER.HELPS",
    starred: false,
    expiresIn: 6000,
    messageCount: 999
};

function listChannels() {
    var channels = [channel1, channel2, channel3, channel4, channel5];
    for (var i = 0; i < channels.length; i++) {
        $(createChannelElement(channels[i])).appendTo('#channels ul');
    }

}

function createChannelElement(channelObject) {
    console.log(channelObject.variablename
               )
    var star = "far fa-star";
    if (channelObject.starred) {
        star = "fas fa-star";
    }
    var appendString = '<li onclick="switchChannel(channel' + channelObject.id + ')">' + channelObject.name + '<span class="channel-meta"></span><div class="channel-meta" style="font-size:24px; color:black"><i class="star ' + star + '"></i><span style="background-color: #3F51B5; color: white; font-size: 10px; font-weight: bold; padding: 2px; margin: 0px 2px; display:inline-block; vertical-align:middle; border-radius:4px;">' + channelObject.expiresIn / 60 + ' min</span><span style="background-color: #3F51B5; color: white; font-size: 10px; font-weight: bold; padding: 2px; margin: 0px 2px; display:inline-block; vertical-align:middle; border-radius:4px;">' + channelObject.messageCount + '</span><i class="fas fa-chevron-right"></i></div></li>';
    
    return appendString
}

$(document).ready(function () {
    listChannels();
});
