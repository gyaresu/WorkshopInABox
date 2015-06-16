$(document).ready(function(){ init() })

var public_spreadsheet_url ='https://docs.google.com/spreadsheets/d/153rVXCt4nlQn8Fj80GmWOLO5_aF4phW0MZrNIZfpUc8/pubhtml?gid=291196347&single=true'

function init() {
  Tabletop.init( { key: public_spreadsheet_url,
    callback: showInfo,
    simpleSheet: true } )
}


function showInfo(data) {


  $.each(data, function (i, each) {
    // $('#comboBoxData').append('<li class="list-group-item"><span class="list-group-item active"><h4 class="list-group-item-heading">' +
    //    each.Exercise + '</span></h4>' +
    //    '<span class="list-group-item list-group-item-info"><span class="lead">' + each.Description + '</span>'
    // +  '<span class="list-group-item bob">' +
    // //   '<span class="elems"><strong>Objective: </strong>' + each.Objective + '<br /></span>' +
    // //   '<span class="elems"><strong>Format: </strong>' + each.Format  + '<br /></span>' +
    // //   '<span class="elems"><strong>Slides: </strong> ' + each.Slides + '<br /></span>' +
    // //   '<span class="elems"><strong>Length:</strong> ' + each.Length + '<br /></span>' +
    // //   '<span class="elems"><strong>Stimulus:</strong> ' + each.Stimulus + '<br /></span>' +
    // //   '<span class="elems"><strong>Subject1:</strong> ' + each.Subject1 + '<br /></span>' +
    // //   '<span class="elems"><strong>Subject2:</strong> ' + each.Subject2 + '<br /><p>' +
    // //   '<span class="elems"><strong>Notes:</strong> ' + each.Notes + '<br /></span>' +
    //   + '</span></li>'
    // )
    console.log(each.Description, i)
    for (var e in each) {
      if (each[e] !== '') {
        if (each[e] === 'Exercise') {
          $('.lead').append(each[e])
        }
        //console.log(e, each[e])
        $('.bob').append(e + ' : ' + each[e] + '<br />')
      }
    }
  })



  // $(".elems").each(function() {

  //     if($.trim($(this).html()).length == 0) {
  //        $(this).hide();
  //     }

  // });

  $('#comboBox').bind('keydown keypress keyup change', function() {
    var search = this.value.toLowerCase()
    var $li = $("#comboBoxData li").hide()
    $li.filter(function() {
      return $(this).text().toLowerCase().indexOf(search) >= 0
    }).show()
  })
}

// {"Exercise":"\"Not a Lion\" aka Picasso/ Michelangelo/ Sacrifice","Description":"Looking at a wall filled with images of greenpeace's history, take down any which are not communicating courage. ","Objective":"Comprehension","Notes":"This exercise should help to show that courage is a crucial part of Greenpeace's DNA - where have we deviated from that in the past?","Slides":"","Format":"plenary","Length":"","Stimulus":"historical images/campaigns etc","Subject1":"courage","Subject2":""}