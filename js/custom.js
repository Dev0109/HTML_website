$(document).ready(function() {
	"use strict";	
	//MEGA MENU	
    $(".about-menu").hover(function() {
        $(".about-mm").fadeIn();
    });
    $(".about-menu").mouseleave(function() {
        $(".about-mm").fadeOut();
    });
    //MEGA MENU	
    $(".admi-menu").hover(function() {
        $(".admi-mm").fadeIn();
    });
    $(".admi-menu").mouseleave(function() {
        $(".admi-mm").fadeOut();
    });
    //MEGA MENU	
    $(".cour-menu").hover(function() {
        $(".cour-mm").fadeIn();
    });
    $(".cour-menu").mouseleave(function() {
        $(".cour-mm").fadeOut();
    });
    //SINGLE DROPDOWN MENU
    $(".top-drop-menu").on('click', function() {
        $(".man-drop").fadeIn();
    });
    $(".man-drop").mouseleave(function() {
        $(".man-drop").fadeOut();
    });
    $(".wed-top").mouseleave(function() {
        $(".man-drop").fadeOut();
    });

    //SEARCH BOX
    $("#sf-box").on('click', function() {
        $(".sf-list").fadeIn();
    });
    $(".sf-list").mouseleave(function() {
        $(".sf-list").fadeOut();
    });
    $(".search-top").mouseleave(function() {
        $(".sf-list").fadeOut();
    });
    $('.sdb-btn-edit').hover(function() {
        $(this).text("Click to edit my profile");
    });
    $('.sdb-btn-edit').mouseleave(function() {
        $(this).text("edit my profile");
    }); 
    //MOBILE MENU OPEN
    $(".ed-micon").on('click', function() {
        $(".ed-mm-inn").addClass("ed-mm-act");
    });
    //MOBILE MENU CLOSE
    $(".ed-mi-close").on('click', function() {
        $(".ed-mm-inn").removeClass("ed-mm-act");
    });

    //GOOGLE MAP IFRAME
    $('.map-container').on('click', function() {
        $(this).find('iframe').addClass('clicked')
    }).on('mouseleave', function() {
        $(this).find('iframe').removeClass('clicked')
    });

    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });

    //MATERIALIZE SELECT DROPDOWN
    $('select').material_select();
	//MATERIALIZE SLIDER
    $('.slider').slider();

    //AUTO COMPLETE CITY SELECT
    $('#select-city,#select-city-1,#select-city-2,#select-city-3,#select-city-4,#select-city-5.autocomplete').autocomplete({
        data: {
            "New York": null,
            "California": null,
            "Illinois": null,
            "Texas": null,
            "Pennsylvania": null,
            "San Diego": null,
            "Los Angeles": null,
            "Dallas": null,
            "Austin": null,
            "Columbus": null,
            "Charlotte": null,
            "El Paso": null,
            "Portland": null,
            "Las Vegas": null,
            "Oklahoma City": null,
            "Milwaukee": null,
            "Tucson": null,
            "Sacramento": null,
            "Long Beach": null,
            "Oakland": null,
            "Arlington": null,
            "Tampa": null,
            "Corpus Christi": null,
            "Greensboro": null,
            "Jersey City": null
        },
        limit: 8, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });

    $('#select-search,#select-search-1,#select-search-2.autocomplete').autocomplete({
        data: {
            "Top Honeymoon Packages in India": 'images/icon/7.png',
            "Family Package": 'images/icon/8.png',
            "World Tour Package": 'images/icon/9.png',
            "Hill Stations": 'images/icon/10.png',
            "America Holidays": 'images/icon/11.png',
            "Germany Holidays": 'images/icon/12.png',
            "Hong Kong Holidays": 'images/icon/13.png',
            "Europe Holidays": 'images/icon/14.png',
            "France Holidays": 'images/icon/15.png',
            "Switzerland,Bali,Thailand Package": 'images/icon/16.png',
            "Maldives,Malaysia,Pattaya Package": 'images/icon/17.png',
            "Dubai Packages": 'images/icon/18.png',
            "Europe Tour Packages": 'images/icon/19.png',
            "USA Tour Packages": 'images/icon/20.png',
            "Mexico City, Mexico": 'images/icon/21.png',
            "Seoul, South Korea": 'images/icon/22.png',
            "Ljubljana, Slovenia": 'images/icon/23.png',
            "Wroclaw, Poland": 'images/icon/24.png',
            "Nashville, USA": 'images/icon/25.png',
            "Amsterdam, the Netherlands": 'images/icon/26.png',
            "First World Hotel": 'images/icon/27.png',
            "MGM Grand Las Vegas Hotel": 'images/icon/28.png',
            "CityCenter": 'images/icon/29.png',
            "Holiday Hotel Inn": 'images/icon/13.png',
            "Tour and Travel Packages": 'images/icon/14.png',
            "City Seight Seeings": 'images/icon/15.png',
"Mandarin Oriental, Hong Kong, China": 'images/icon/25.png',
            "Trump International Hotel & Tower, New York, United States": 'images/icon/26.png',
            "First World Hotel": 'images/icon/27.png',
            "MGM Grand Las Vegas Hotel": 'images/icon/28.png',
            "CityCenter": 'images/icon/29.png',
            "Holiday Hotel Inn": 'images/icon/13.png',
            "Tour and Travel Packages": 'images/icon/14.png',
            "City Seight Seeings": 'images/icon/15.png'
        },
        limit: 8, // The max amount of results that can be shown at once. Default: Infinity.
        onAutocomplete: function(val) {
            // Callback function when value is autcompleted.
        },
        minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
    });

});

function myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//DATE PICKER	
$(function() {
    var dateFormat = "mm/dd/yy",
        from = $("#from,#from-1,#from-2,#from-3,#from-4,#from-5")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: false,
            numberOfMonths: 1
        })
        .on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#to,#to-1,#to-2,#to-3,#to-4,#to-5").datepicker({
            defaultDate: "+1w",
            changeMonth: false,
            numberOfMonths: 1
        })
        .on("change", function() {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});