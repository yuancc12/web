var url = new URL('');
var player = JSON.parse(decodeURIComponent(url.searchParams.get('player')));
console.log(player)