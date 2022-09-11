$('#from, #to,#okunandeger').on('input', () => {
  const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
  const from = new Date($('#from').val());
  const to = new Date($('#to').val());
  const days = (to - from) / MILLISECONDS_PER_DAY;
  const sumPrice = Number(days);
  $('#output').html(days);
  $('#okunandeger').html(sumPrice*20);
});