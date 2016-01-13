
$(document).ready(init);


function init() {

  $('#formEntry').submit(newTrans);
  $('#dataEntry').click(catEntry);
  $('table').on('click', '#trash', deleteTrans);
  $('.dropList').on('click', findCat)
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
  var catEntry = $('#catEntry').val();

  var $tr = $('#template').clone();
  $tr.removeAttr('id');
  $tr.children('.trans').text(transName);
  $tr.children('.date').text(formattedDate);
  var $newAmount = $tr.children('.amount').text(amountEntry);
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

// var currentBalance = 4230.17;
//
// var entryObject = function(prop){
//   this.trans = prop.trans;
//   this.date = prop.date;
//   this.amount = prop.amount;
//   this.balance = prop.balance;
//   this.cat = prop.cat;
// }
