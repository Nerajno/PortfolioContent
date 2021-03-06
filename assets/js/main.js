jQuery(document).ready(function ($) {

    /*======= Skillset *=======*/

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    $("#rss-feeds").rss(

        //Change this to your own rss feeds
        "https://dev.to/feed/nerajno",
        {
            // how many entries do you want?
            // default: 4
            // valid values: any integer
            limit: 3,

            // the effect, which is used to let the entries appear
            // default: 'show'
            // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
            effect: 'slideFastSynced',

            // outer template for the html transformation
            // default: "<ul>{entries}</ul>"
            // valid values: any string
            layoutTemplate: "<div class='item'>{entries}</div>",

            // inner template for each entry
            // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
            // valid values: any string
            entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i> Read More</a></div>'

        }
    );

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    // my version 
    GitHubCalendar("#github-graph", "Nerajno");
});