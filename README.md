OSDD
====

Content Management Temporary Solution
-------------------------------------

Until a more permanent solution is determined, the lists of team members and sponsors are maintained on GitHub, in a public repository.

The repository is : https://github.com/chuckfitzpatricksf/OSDD_test/issues

There are two items in the issues list. They are "team" and "sponsors".

Team
----

  The body of the "team" issue contains a JSON array, as follows:

      [
        { "name": "Tim Connor", "letters": "El Hefe", "url": "www.cloudcitydevelopment.com" },
        { "name": "Mat Todd", "letters": "University of Sydney", "url": "groups.chem.usyd.edu.au/todd/the-boss.html" },
        { "name": "Stephanie Geerlings" },
        { "name": "Tom Terrific", "letters": "Top Hat" , "url": "www.google.com"},
        { "name": "Austin Powers", "letters": "International Man of Mystery" },
        { "name": "Peter Parker", "letters": "Web Slinger" },
        { "name": "Bruce Banner", "letters": "Angry Guy" },
        { "name": "Matt Murdock", "url": "marvel.com/comics/characters/1009262/daredevil"},
        { "name": "Alfie La Peter", "url": "www.alfielapeter.com", "letters": "Code Reviews a Speciality"}
      ]

  The elements: url, and letters are optional. If name is not provided, "Anonymous" is used for their name.

  The different display cases are:

   if name, letters, and url provided: "Member Name, letters" as a link to the url.
   if name, url provided: "Member Name" as a link to the url.
   if name, letters provided: "Member Name, letters" without a link.


Sponsors
--------

  The body of the "sponsors" issue contains a JSON array, as follows:

      [
        { "url": "www.gatesfoundation.org",
        "image": "f.cloud.github.com/assets/1546321/602530/9a850a40-cc9e-11e2-9b14-26127d6845b5.png"
        } ,
        { "url": "cloudcitydevelopment.com",
        "image": "f.cloud.github.com/assets/1546321/602548/1a07f9ee-cc9f-11e2-9b13-422751514e94.png"
        },
        { "url": "cloudcitydevelopment.com",
        "image": "f.cloud.github.com/assets/1546321/602548/1a07f9ee-cc9f-11e2-9b13-422751514e94.png"
        },
        { "url": "cloudcitydevelopment.com",
        "image": "f.cloud.github.com/assets/1546321/602548/1a07f9ee-cc9f-11e2-9b13-422751514e94.png"
        },
        { "url": "cloudcitydevelopment.com",
        "image": "f.cloud.github.com/assets/1546321/602548/1a07f9ee-cc9f-11e2-9b13-422751514e94.png"
        },
        { "url": "cloudcitydevelopment.com",
        "image": "f.cloud.github.com/assets/1546321/602548/1a07f9ee-cc9f-11e2-9b13-422751514e94.png"
        }
      ]

    The url element is optional.

    If the url element is not specified for a sponsor, only the image is displayed for that sponsor.
    If both elements are specified for a sponsor, the image is displayed and is a link to the sponsor's url.