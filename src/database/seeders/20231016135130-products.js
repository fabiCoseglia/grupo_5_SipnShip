'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Products',
      [
  {
    name: 'Johnnie W. Gold Label',
    description: 'Johnnie Walker Gold Label Reserve es la mezcla perfecta para una celebración indulgente. Lujoso, cremoso y con notas de miel, es un gran tributo a la unión armoniosa entre los whiskies de Speyside y Highland con vestigios de madera ahumada de la costa oeste. Johnnie Walker Gold Label Reserve está hecho para compartir esas noches inolvidables con amigos increíbles.',
    price : 26800,
    discount: 20,
    categoryId: 5,
    brandId: null,
    sectionId: 2,
    stock : null,
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 {
  name: "Jack Daniel's Old No. 7 Estados Unidos",
  description: 'Suavizado gota a gota a través de tres metros de carbón de arce de azúcar, tras lo cual es madurado en barriles hechos a mano por nosotros. Y nuestro Tennessee Whiskey no sigue un calendario. Está listo cuando los catadores lo dicen. Juzgamos por su apariencia. Por su aroma. Y, por supuesto, por su sabor. Así lo hacía Jack Daniel en persona un siglo atrás. Y así lo seguimos haciendo hoy.',
  price : 18400,
  discount: 0,
  categoryId: 5,
  brandId: null,
  sectionId: 1,
  stock : null,
  createdAt: new Date(),
  updatedAt: new Date(),
 },
 {
  name: "Gin Aconcagua Handcrafted London Dry",
  description: 'Un Gin hecho a mano en Buenos Aires, Argentina. La esencia de este Gin es extraída a partir de 7 botánicos: Bayas de Enebro, Semillas de Coriandro, Raíz de Angelica, Raíz de Regaliz, Almendra, Cassia, Cáscara de Limon. Gracias a un meticuluso proceso de maceración y destilación en alambique de cobre se obtiene este Gin premium Aconcagua.',
  price : 5400,
  discount: 0,
  categoryId: 6,
  brandId: null,
  sectionId: 4,
  stock : null,
  createdAt: new Date(),
  updatedAt: new Date(),
 },
 {
   name: 'Cerveza Corona',
   description: 'Disfrutar de una Corona es algo más que eso. Es disfrutar de su ritual y de todo lo que te rodea en ese instante para convertir un momento cualquiera en algo extraordinario.',
   price : 890,
   discount: 25,
   categoryId: 4,
   brandId: null,
   sectionId: 2,
   stock : null,
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
   name: 'Absenta',
   description: 'Un licor de alta calidad que te transportará a un mundo de sabores y sensaciones inigualables. Esta botella de 750ml es perfecta para compartir con amigos y familiares en ocasiones especiales o simplemente para disfrutar de una bebida diferente en la comodidad de tu hogar.',
   price : 52000,
   discount: 0,
   categoryId: 2,
   brandId: null,
   sectionId: 4,
   stock : null,
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
  name: 'Fernet Branca',
  description: 'Colores, aromas, sabores y… ¡poderes! La receta de Fernet-Branca es un viaje especial entre las 27 hierbas, raíces y especias de su extraordinaria fórmula secreta e inimitable. Cada hierba es un universo, una experiencia, un descubrimiento. Ideal para comar con Coca',
  price : 4600,
  discount: 0,
  categoryId: 3,
  brandId: null,
  sectionId: 3,
  stock : null,
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Gancia Americano',
  description: 'Americano Gancia es un aperitivo que se caracteriza por la presencia de sabores herbáceos y cítricos que se combinan con los del vino blanco y el alcohol. El sabor amargo de las hierbas se mezcla con el dulzor del azúcar logrando una bebida amable, agradable de beber, equilibrada y de gran personalidad. Probalo con Sprite',
  price : 2700,
  discount: 15,
  categoryId: 3,
  brandId: null,
  sectionId: 3,
  stock : null,
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Licor Amarula',
  description: 'Disfruta de un exquisito Licor Amarula de 750ml, una deliciosa crema de licor originaria de Sudáfrica. Con un 17% de graduación alcohólica, Amarula te ofrece una experiencia única y sofisticada en cada sorbo. Su sabor distintivo proviene de la fruta del árbol de marula, que le da un toque afrutado y cremoso, ideal para regalar o para deleitar a tus invitados en cualquier ocasión. No esperes más para probar esta delicia africana y sumarla a tu colección de licores.',
  price : 15000,
  discount: 0,
  categoryId: 2,
  brandId: null,
  sectionId: 1,
  stock : null,
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Tequila Jose Cuervo Especial gold dorado',
  description: 'Es considerado uno de los mejores tequilas de México, este reposado pasa en promedio 6 meses en barricas de roble blanco, tiene un aroma a agave cocido, toques frutales y herbales, con notas de aceituna. ',
  price : 12500,
  discount: 35,
  categoryId: 9,
  brandId: null,
  sectionId: 2,
  stock : null,
  createdAt: new Date(),
  updatedAt: new Date(),
}
 ],
   {}
   );

},

async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('Products', null, {});
 
}
};