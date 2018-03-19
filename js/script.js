/* #6 start the #external #action and say hello */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*jslint devel: true */
/*jslint browser: true*/


/*global $, jQuery, alert*/
console.log("App is alive");
var currentChannel = channel2;
var currentLocation = {
    Latitude: 48.137154,
    Longitude: 11.576124,
    W3W: "lose.anpassung.loch"
};



/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */
function switchChannel(channel) {
    currentChannel = channel;
    //Log the channel switch
    console.log("Tuning in to channel", currentChannel.name);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = currentChannel.name;

    //#6 change the #channel #location
    var html = 'by <a href="http://w3w.co/' + currentChannel.createdBy + '" target="_blank"><strong>' + channel.createdBy + '</strong></a>';
    document.getElementById('channel-location').innerHTML = html;

    /* #6 #liking channels on #click */
    if (currentChannel.starred) {
        $('#channel-star').html('<i id="channel-star" onclick="star()" class="fas fa-star" style="display: inline-block; position: absolute; right: 16px; color: black; font-size: 24px;"></i>');
    } else {
        $('#channel-star').html('<i id="channel-star" onclick="star()" class="far fa-star" style="display: inline-block; position: absolute; right: 16px; color: black; font-size: 24px;"></i>');
    }

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channel.name + ')').addClass('selected');
}

/* #6 #liking a channel on #click */
function star() {
    if (currentChannel.starred) {
        $('#channel-star').html('<i id="channel-star" onclick="star()" class="far fa-star" style="display: inline-block; position: absolute; right: 16px; color: black; font-size: 24px;"></i>');
        $('#channels li:contains(' + currentChannel.name + ') div').html('<i class="far fa-star"></i>\n<i class="fas fa-chevron-right"></i>');
        currentChannel.starred = false;
        console.log('UnFavorite');
    } else {
        $('#channel-star').html('<i id="channel-star" onclick="star()" class="fas fa-star" style="display: inline-block; position: absolute; right: 16px; color: black; font-size: 24px;"></i>');
        $('#channels li:contains(' + currentChannel.name + ') div').html('<i class="fas fa-star"></i>\n<i class="fas fa-chevron-right"></i>');
        currentChannel.starred = true;
        console.log('Favorite');
    }
    event.stopPropagation();
}

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
