$(document).ready(init);

function init() {

  $('.dropList').on('click', findCat)
  $('#formEntry').submit(newTrans);
  $('#catDropDown').on('change', findCat);
  $('table').on('click', '#trash', deleteTrans);
  // console.log('load');
}

function removeEntries() {
  $('input:checked').closest('tr').remove();
}

function newTrans() {
  event.preventDefault();

  var transName = $('#transEntry').val();
  var dateEntry = $('#dateEntry').val();
  var formattedDate = moment(dateEntry).format('llll');
  var amountEntry = $('#amountEntry').val();
  var catEntry = $('#catEntry').text();

  // need a conditional based on category - holds neg vs pos values
  // var balance = $('li:nth-of-type(1)').val();
  var balance = 4230.17;
  // var newBalance = parseFloat(balance) - parseFloat(amountEntry);
  var newBalance = balance - amountEntry;
  console.log(newBalance);


  var $tr = $('#template').clone();
  $tr.removeAttr('id');
  $tr.children('.trans').text(transName);
  $tr.children('.date').text(formattedDate);
  var $newAmount = $tr.children('.amount');
  $tr.children('.balance').text(newBalance);
  // console.log('test');
  $tr.children('.cat').text(catEntry);
  // adding switch operator
  switch (catEntry) {
    case 'Bill':
      $newAmount.addClass('testWith');
      $newAmount.text('-' + Math.abs(amountEntry));
      break
    case 'Income':
      $newAmount.addClass('testDep');
      $newAmount.text('+' + Math.abs(amountEntry));
      break
    case 'Entertainment':
      $newAmount.addClass('testWith');
      $newAmount.text('-' + Math.abs(amountEntry));
      break
    case 'Savings':
      $newAmount.addClass('testWith');
      $newAmount.text('-' + Math.abs(amountEntry));
      break
    default:
      $newAmount.text('');
    // console.log(amountEntry);
    }
  // debugger;
  $('#registry').prepend($tr);
}

function deleteTrans() {
  $(this).closest('tr').remove();
}
function findCat(event) {
  event.preventDefault();
  var text = $(this).text();
  $('#catEntry').text(text).append('<span class="caret"></span>');
  console.log(text);
}

//declare var currentBalance
//turn this into a string
//grab $newAmount and concat that
//run eval(currentBalance)
//return this

// var currentBalance;
// var balance = 4230.17;
//
// function findBalance( ) {
//   var balance = 4230.17;
//   balance = balance + nevValue;
//   balance = balance.toString();
//   $newAmount = $newAmount.toString();
//   var currentBalance = balance.concat($newAmount);
//   currentBalance = eval(currentBalance);
//   console.log(currentBalance);
// }

//write switch operator here
// function catFilter() {
//   $('#catDropDown').change(function() {
//     $('#selectedCat li').show();
//     if($('li:selected', this).attr('id')) === 'selected Bill') {
//       $('#selectedCat li.Bill').hide();
//     }
//     if($('li:selected', this).attr('id')) === 'selected Income') {
//       $('#selectedCat li.Income')
//     }
//     if($('li:selected', this).attr('id')) === 'selected Entertainment') {
//       $('#selectedCat li.Entertainment')
//     }
//     if($('li:selected', this).attr('id')) === 'selected Savings') {
//       $('#selectedCat li.Savings')
//     }
//   }
// }
