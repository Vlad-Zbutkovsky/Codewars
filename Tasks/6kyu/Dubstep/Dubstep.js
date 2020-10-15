function songDecoder(song){
  let del = "WUB";
  let original = '';
  let parts = song.split(del);
  for (let i = 0; i < parts.length; i++) {
    if (parts[i] != ''){
      original = original + ' ' + parts[i];
    }
  }
  original = original.trim();
  return original;
}