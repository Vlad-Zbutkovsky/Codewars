hello=name=>name === undefined || name.length <=0 ?
  'Hello, World!':`Hello, ${name[0].toUpperCase() +name.slice(1,name.length).toLowerCase()}!`;