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
        { "name": "Tim Connor", "affiliation": "El Hefe", "url": "www.cloudcity.io" },
        { "name": "Mat Todd",
          "affiliation": "University of Sydney",
          "url": "groups.chem.usyd.edu.au/todd/the-boss.html",
          "gravatar_email": "},
        { "name": "Stephanie Geerlings" }
      ]

  The elements: url, affiliation, and gravatar_email are optional. If name is not provided, "Anonymous" is used for their name.

  The different display cases are:

   If name, affiliation, and url provided: "Member Name, letters" as a link to the url.
   If name, url provided: "Member Name" as a link to the url.
   If name, affiliation provided: "Member Name, affiliation" without a link.
   If gravatar_email provided, the member's gravatar is obtained and shown. If missing, a default image is shown.

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