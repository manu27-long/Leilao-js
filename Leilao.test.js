const Leilao = require('./Leilao');
const Lance = require('./Lance')

test('pegar maior lance aleatorio', () => { 
   var leilao = new Leilao('smartphone');
   leilao.propoe(new Lance('Jurema',100.0));
   leilao.propoe(new Lance('Maria',200.0));
   leilao.propoe(new Lance('João',150.0));

   leilao.avalia();
   expect(leilao.getMaiorLance().getValor()).toBe(200.0);
   expect(leilao.getMaiorLance().getNome()).toBe('Maria');
 }
);
test('pegar maior lance na ordem crescente', () => {
  var leilao = new Leilao('smartphone');
  
  leilao.propoe(new Lance('Maria',200.0));
  leilao.propoe(new Lance('João',150.0));
  leilao.propoe(new Lance('Jurema',100.0));

  leilao.avalia();
  expect(leilao.getMaiorLance().getValor()).toBe(200.0);
  expect(leilao.getMaiorLance().getNome()).toBe('Maria');
}
);
test('pegar maior lance na ordem descrescente', () => {
  var leilao = new Leilao('smartphone');
 
  leilao.propoe(new Lance('Jurema',100.0));
  leilao.propoe(new Lance('João',150.0));
  leilao.propoe(new Lance('Maria',200.0));

  leilao.avalia();
  expect(leilao.getMaiorLance().getValor()).toBe(200.0);
  expect(leilao.getMaiorLance().getNome()).toBe('Maria');
}
);
test('lance negativo', () => {
  var leilao = new Leilao('bicicleta');
  leilao.propoe(new Lance('Alysson',-100.0));
  leilao.propoe(new Lance('Manuela',-10.0));
  leilao.propoe(new Lance('Sabrina',-1.0));
  
   leilao.avalia();
   expect(leilao.getMaiorLance().getValor()).toBe(0);
   expect(leilao.getMaiorLance().getNome()).toBe('Nenhum');
 }
);
test('pegar menor lance na ordem crescente', () => {
  var leilao = new Leilao('notebook');
  
  leilao.propoe(new Lance('Maria',200.0));
  leilao.propoe(new Lance('João',150.0));
  leilao.propoe(new Lance('Jurema',100.0));
   
  leilao.avaliar();
  expect(leilao.getMenorLance().getValor()).toBe(100.0);
  expect(leilao.getMenorLance().getNome()).toBe('Jurema');
}
);

test('pegar menor lance na ordem descrescente', () => {
  var leilao = new Leilao('notebook');
 
  leilao.propoe(new Lance('Jurema',100.0));
  leilao.propoe(new Lance('João',150.0));
  leilao.propoe(new Lance('Maria',200.0));

  leilao.avaliar();
  expect(leilao.getMenorLance().getValor()).toBe(100.0);
  expect(leilao.getMenorLance().getNome()).toBe('Jurema');
}
);

test('pegar menor lance aleatorio', () => { 
  var leilao = new Leilao('play');
  leilao.propoe(new Lance('Jurema',100.0));
  leilao.propoe(new Lance('Maria',200.0));
  leilao.propoe(new Lance('João',150.0));

  leilao.avaliar();
  expect(leilao.getMenorLance().getValor()).toBe(100.0);
  expect(leilao.getMenorLance().getNome()).toBe('Jurema');
}
);
