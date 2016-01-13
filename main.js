
$(document).ready(init);


function init() {

  $('.dropList').on('click', findCat)
  $('#formEntry').submit(newTrans);
  $('#catDropDown').on('change', findCat);
  $('table').on('click', '#trash', deleteTrans);
  console.log('load');

}

function removeEntries() {
  $('input:checked').closest('tr').remove();
}

function newTrans() {
  console.log('hi');
  console.log(this);
  event.preventDefault();

  var transName = $('#transEntry').val();
  var dateEntry = $('#dateEntry').val();
  var formattedDate = moment(dateEntry).format('l');
  var amountEntry = $('#amountEntry').val();
  // var currentBalance =
  // var catEntry = $('ul.foo li:selected').val();
  var catEntry = $('#catEntry').text();

  var $tr = $('#template').clone();
  $tr.removeAttr('id');
  $tr.children('.trans').text(transName);
  $tr.children('.date').text(formattedDate);
  var $newAmount = $tr.children('.amount');
  // $tr.children('.balance').text(currentBalance);
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
    console.log(amountEntry);
    }

  debugger;
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

var currentBalance = 4230.17;
//
// var entryObject = function(prop){
//   this.trans = prop.trans;
//   this.date = prop.date;
//   this.amount = prop.amount;
//   this.balance = prop.balance;
//   this.cat = prop.cat;
// }
// function catFilter() {
//   $('catDropDown').on('change', function(){
//     $('tbody').find('td').attr('selected', true);
//     if$(this).val() !== 'none' {
//       $('#catDropDown').val('');
//     }
//   }
// }

// function catFilter() {
//   $('#catDropDown').change(function() {
//     $('#selectedCat option').show();
//     if($('option:selected', this).attr('id')) === 'selectedBill') {
//       $('#selectedCat option.Bill').hide();
//     }
//     if($('option:selected', this).attr('id')) === 'selectionIncome') {
//       $('#selectedCat option.Income')
//     }
//     if($('option:selected', this).attr('id')) === 'selectionEntertainment') {
//       $('#selectedCat option.Entertainment')
//     }
//     if($('option:selected', this).attr('id')) === 'selectionSavings') {
//       $('#selectedCat option.Savings')
//     }
//   }
// }
