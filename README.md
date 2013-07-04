OS Malaria
==========

Background
----------

The opensourcemalaria.org website actually consists of two separate code bases.

### Website Code Base ###

There is a website code base at the Github account/repository https://github.com/OpenSourceMalaria/OSM_Website_Code.
This repository holds the HTML, CSS, images, and javascript of the website.

In order to cut down on excessive web requests to Twitter and GitHub, the following "rules" are implemented in the
browser code:

--- The sponsors and members data is requested only on initial load (or forced reload)
--- The project activity is only requested about every 10 minutes.
--- The twitter feed is only requested about every 10 minutes.

In addition to this browser code, the osm-feeds heroku app (described below) also provides caching of the data.
The approaches are used because they solve two different issues:

The browser code keeps a single browser from making excessive calls to osm_feeds. Three on page load, and then
two every 10 minutes thereafter while the browser has the page loaded.

The osm-feeds code limits the number of requests passed onto GitHub and Twitter when there are many browsers loading
or showing the page.

### osm-feeds Code Base ###

There is a separate code base stored on heroku.com. This repository creates a simple server application
(called osm-feeds) that runs on the heroku platform. The server application is an intermediary between the code running
on the (potentially) many browsers that can be running the website code at the same time.

osm-feeds gets requests from a browser to return one of three things, or to reset its cache.

#### The things that can be returned from osm-feeds are: ####

##### The latest twitter feed for Open Source Malaria. #####
The osm-feeds application authenticates itself to Twitter (requirement of twitter). Since the authentication
requires secret information, this application ensures that the secret information remains secret!

##### The latest Project activity (from the OpenSourceMalaria github account) #####
The osm-feeds application authenticates itself to github to avoid rate limiting on requests per hour. Since the
authentication requires secret information, this application ensures that the secret information remains secret! The
application also caches the information so that requests to github do not occur excessively if there are many users
viewing the site at the same time.

##### The current list of sponsors and members from the OpenSourceMalaria github account) #####
The osm-feeds application authenticates itself to github to avoid rate limiting on requests per hour. Since the
authentication requires secret information, this application ensures that the secret information remains secret!

##### Reset command #####

The reset command is invoked to discard the contents of the cache and force the application to get and return
the current project activity and sponsor/member data from github the next time a request for that data is made.

This is not useful in normal circumstances, but can be used to ensure that additions and updates to the project
activity or sponsor/member feeds are immediately available to visitors to the site. Otherwise, there will be a delay of
about 10 minutes for updated information to become available.

Content Management Solution
---------------------------

The lists of team members and sponsors are maintained on GitHub, in a public repository.

The repository is : https://github.com/OpenSourceMalaria/OSM_Website_Data/issues

There are two items in the issues list. They are "team" and "sponsors".

Team
----

  The body of the "team" issue contains a JSON array, as follows:

      [
        { "name": "Tim Connor", "affiliation": "El Hefe", "url": "www.cloudcity.io" },
        { "name": "Mat Todd",
          "affiliation": "University of Sydney",
          "affiliation_url": "sydney.edu.au",
          "discipline": "Chemist",
          "url": "groups.chem.usyd.edu.au/todd/the-boss.html",
          "gravatar_email": "},
        { "name": "Stephanie Geerlings" }
      ]

  The elements: url, affiliation, discipline, and gravatar_email are optional. If name is not provided, "Anonymous" is used for
  their name.

  The different display cases are:

   If name, affiliation, and url provided: "Member Name, letters" as a link to the url.
   If name, url provided: "Member Name" as a link to the url.
   If name, affiliation provided: "Member Name, affiliation" without a link.
   If gravatar_email provided, the member's gravatar is obtained and shown. If missing, a default image is shown.

   Discipline is intended to identify the individual's area of expertise, such as "Chemist", "Biologist", etc.

Sponsors
--------

  The body of the "sponsors" issue contains a JSON array, as follows:

  [
    {"name": "University of Sydney",
     "url": "sydney.edu.au",
    "image": "f.cloud.github.com/assets/1546321/620163/037d300e-cede-11e2-8e2f-e2dd51ab963c.png"
    },
    { "name": "Medicines for Malaria Venture",
    "url": "www.mmv.org",
    "image": "f.cloud.github.com/assets/1546321/620180/651b7438-cede-11e2-8706-c56f89b70947.jpg"
    },
    {"name": "Australian Research Council",
    "url": "arc.gov.au",
    "image": "f.cloud.github.com/assets/1546321/620173/2663fc4c-cede-11e2-8725-753d3de70430.jpg"
    },
    { "name": "Cloud City Development",
    "url": "cloudcity.io",
    "image": "f.cloud.github.com/assets/1546321/621382/facee53c-cf01-11e2-9456-01eee6ca7577.png"
    }
  ]

    The name and url elements are optional.

    If the name element is omitted, it defaults to the url text, if that is provided.
    If the url element is not specified for a sponsor, only the image is displayed for that sponsor.
    If all three elements are specified for a sponsor, the image is displayed and is a link to the sponsor's url,
    and the hover text is the sponsor name.


Setting up for development
==========================

When a person is designated to do further development work, the recommended approach is to set up local git
repositories on the development machine.