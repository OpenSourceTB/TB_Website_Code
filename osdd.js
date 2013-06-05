//Twitter Parsers
String.prototype.parseURL = function () {
  return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function (url) {
    return url.link(url);
  });
};

String.prototype.parseUsername = function () {
  return this.replace(/[@]+[A-Za-z0-9-_]+/g, function (u) {
    var username = u.replace("@", "")
    return u.link("http://twitter.com/" + username);
  });
};

String.prototype.parseHashtag = function () {
  return this.replace(/[#]+[A-Za-z0-9-_]+/g, function (t) {
    var tag = t.replace("#", "%23")
    return t.link("http://search.twitter.com/search?q=" + tag);
  });
};

function parseDate(str) {
  var v = str.split(' ');
  return new Date(Date.parse(v[1] + " " + v[2] + ", " + v[5] + " " + v[3] + " UTC"));
}
// End of Twitter parsers

function loadLatestTweets() {
  var numTweets = 5;
  var _url = 'https://api.twitter.com/1/statuses/user_timeline/osdd.json?callback=?&count=' + numTweets + '&include_rts=1';
  $.getJSON(_url, function (data) {
    for (var i = 0; i < data.length; i++) {
      var tweet = data[i].text;
      var created = parseDate(data[i].created_at);
      var hours = created.getHours().toString();
      if (hours.length == 1) hours = '0' + hours;
      var minutes = created.getMinutes().toString();
      if (minutes.length == 1) minutes = '0' + minutes;

      var createdDate = created.getDate() + '-' + (created.getMonth() + 1) + '-' + created.getFullYear() + ' at ' + hours + ':' + minutes;
      tweet = tweet.parseURL().parseUsername().parseHashtag();
      tweet += '<div class="tweeter-info"><div class="uppercase bold"></div><div class="right"><a href="https://twitter.com/#!/osdd/status/' + data[i].id_str + '">' + createdDate + '</a></div></div>'
      $("#twitter-feed").append('<p>' + tweet + '</p>');
    }
  });
}

function loadTeam() {

  $.getJSON("https://api.github.com/repos/chuckfitzpatricksf/OSDD_test/issues", function (data) {
    var perRow = 5;
    var rowPosition = 0;
    var numTeamMembers = 100;
    var data_index = -1;

    for (i=0; i<data.length; i++) {
      if (data[i].title == "team") data_index = i;
    }

    if (data_index > -1) {
      team_members = $.parseJSON(data[data_index].body);
      var lastTeamMember = Math.min(numTeamMembers, team_members.length);

      for (var i = 0; i < lastTeamMember; i++) {
        name = team_members[i].name || "Anonymous" ;
        url = team_members[i].url;
        if (team_members[i].letters) {
          letters = ", " + team_members[i].letters;
        } else {
          letters = "";
        }

        if (rowPosition == 0) { // starting a new row
          $("#team_members").append('<div class="row-fluid">');
        }

        var team_member;
        if (url) {
          team_member = '<span class="span2"><a href="http://' + url + '" target="_blank" style="text-decoration: none;"> ' + name + letters + '</a></span>'
        } else
        {
          team_member = '<span class="span2">' + name + letters + '</span>'
        }
        $("#team_members").append(team_member);
        rowPosition++;
        if (rowPosition >= perRow) {
          $("#team_members").append('</div>');
          rowPosition = 0;
        }
      }
    }
  })
}

function loadSponsors() {
  $.getJSON("https://api.github.com/repos/chuckfitzpatricksf/OSDD_test/issues", function (data) {
    var perRow = 4;
    var rowPosition = 0;
    var numSponsors = 100;
    var currentRow = 0;
    var data_index = -1;

    for (i=0; i<data.length; i++) {
      if (data[i].title == "sponsors") data_index = i;
    }

    if (data_index > -1) {
      sponsors = $.parseJSON(data[data_index].body);
      var lastSponsor = Math.min(numSponsors, sponsors.length);

      for (var i = 0; i < lastSponsor; i++) {
        var url = sponsors[i].url;
        var image = sponsors[i].image;


        if (rowPosition == 0) { // starting a new row
          $("#sponsors").append('<div class="row-fluid makespace" id="sponsorRow' + currentRow + '">');
        }

        var sponsor;
        if (url) {
          sponsor ='<span class="span3"><a href="http://' + url + '" target="_blank"><img src="https://' + image + '"></a></span>'
        } else {
          sponsor ='<span class="span3"><img src="https://' + image + '"></span>'
        }

        $("#sponsorRow" + currentRow).append(sponsor);
        rowPosition++;
        if (rowPosition >= perRow) {
          $("#sponsorRow" + currentRow).append('</div>');
          rowPosition = 0;
          currentRow++;
        }
      }
    }
  });
}

function loadLatestGithubIssues() {

  $.getJSON("https://api.github.com/repos/OSDDMalaria/OSDDMalaria_To_Do_List/issues", function (data) {
    var numGithubItems = 3;
    var lastGithubItem = Math.min(numGithubItems, data.length);
    for (var i = 0; i < lastGithubItem; i++) {
      var item_title = data[i].title;
      var item_body = data[i].body;

      $("#github-feed").append('<span class=' + data[i].state + '><span class=title>' + item_title + '</span></span>');
      $("#github-feed").append('<div class=indented>' + item_body + '</div>');
    }
  })
}