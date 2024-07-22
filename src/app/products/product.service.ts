import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
      code: 'LJ15315A - 1 1/2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      tubeSize: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings", "tag3", "tag4", "tag5"],
    },
    {
      code: 'LJ15315A - 2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      tubeSize: '1 1/2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20315A - 2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20135AP',
      name: 'Adjustable Rail Support Flat "Internal Fit"',
      tubeSize: '2" x FLAT',
      photo: "products/LJ20135AP.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20136A - 2',
      name: 'Adjustable Rail Support Radius "External Fit"',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20136AP',
      name: 'Adjustable Rail Support Flat "External Fit"',
      tubeSize: '2"x FLAT',
      photo: "products/LJ20136AP.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15710RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15710RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '1 1/2"x R 2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20710RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '2"x R 1 1/2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20710RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15711RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 2',
      tubeSize: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15711RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20711RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 2',
      tubeSize: '2"x R 2"',
      photo: "products/LJ15711RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    //===============Flush Joiner
    //===============Flush Joiner
    //===============Flush Joiner
    //===============Flush Joiner
    //=============== Flange ===============
    {
      code: 'LJ1014A',
      name: 'Oblong Base Plate / Flange',
      tubeSize: '1"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1214A',
      name: 'Oblong Base Plate / Flange',
      tubeSize: '1 1/4"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1514A',
      name: 'Oblong Base Plate / Flange',
      tubeSize: '1 1/2"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2014A',
      name: 'Oblong Base Plate / Flange',
      tubeSize: '2"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1015A',
      name: 'Wall Stop Flange',
      tubeSize: '1"',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1215A',
      name: 'Wall Stop Flange',
      tubeSize: '1 1/4"',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1515A',
      name: 'Wall Stop Flange',
      tubeSize: '1 1/2"',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2015A',
      name: 'Wall Stop Flange',
      tubeSize: '2" ( 45° )',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2015C',
      name: 'Wall Stop Flange',
      tubeSize: '2" ( 37° )',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1599A',
      name: 'Round Adjustable Heavy Duty Base Plate',
      tubeSize: '1 1/2"',
      photo: "products/LJ1599A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2099A',
      name: 'Round Adjustable Heavy Duty Base Plate',
      tubeSize: '2"',
      photo: "products/LJ1599A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1524A',
      name: 'Outsided Wall Flange, Round Base Type 1',
      tubeSize: '1 1/2"',
      photo: "products/LJ1524A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2024A',
      name: 'Outsided Wall Flange, Round Base Type 1',
      tubeSize: '2"',
      photo: "products/LJ1524A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15802A',
      name: 'Outsided Wall Flange, Round Base Type 2',
      tubeSize: '1 1/2"',
      photo: "products/LJ15802A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20802A',
      name: 'Outsided Wall Flange, Round Base Type 2',
      tubeSize: '2"',
      photo: "products/LJ15802A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1001C',
      name: 'Round Base Plate With Cover',
      tubeSize: '1"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1201C',
      name: 'Round Base Plate With Cover',
      tubeSize: '1 1/4"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1401C',
      name: 'Round Base Plate With Cover',
      tubeSize: '1 1/2"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2001C',
      name: 'Round Base Plate With Cover',
      tubeSize: '2"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15512A',
      name: 'Round Base Plate - Type 2',
      tubeSize: '1 1/2"',
      photo: "products/LJ15512A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20512A',
      name: 'Round Base Plate - Type 2',
      tubeSize: '2"',
      photo: "products/LJ15512A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1016A',
      name: 'Flange, Round Base, Type 1',
      tubeSize: '1"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1216A',
      name: 'Flange, Round Base, Type 1',
      tubeSize: '1 1/4"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1516A',
      name: 'Flange, Round Base, Type 1',
      tubeSize: '1 1/2"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2016A',
      name: 'Flange, Round Base, Type 1',
      tubeSize: '2"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1402S',
      name: 'Square Base Plate',
      tubeSize: '1 1/2"',
      photo: "products/LJ1402S.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2002S',
      name: 'Square Base Plate',
      tubeSize: '2"',
      photo: "products/LJ1402S.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15803',
      name: 'Outsided Wall Flange, Adjustable, Round Base Type 3',
      tubeSize: '1 1/2"',
      photo: "products/LJ15803.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20803',
      name: 'Outsided Wall Flange, Adjustable, Round Base Type 3',
      tubeSize: '2"',
      photo: "products/LJ15803.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2016U',
      name: 'Flange, Round Base, Type 2',
      tubeSize: '2"',
      photo: "products/LJ2016U.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15601A',
      name: 'Flange, Round Base, Type 3',
      tubeSize: '1 1/2"',
      photo: "products/LJ15601A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20601A',
      name: 'Flange, Round Base, Type 3',
      tubeSize: '2"',
      photo: "products/LJ15601A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    //=============== End Cap ===============
    {
      code: 'LJ1018A',
      name: 'End Cap "Dome"',
      tubeSize: '1"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1218A',
      name: 'End Cap "Dome"',
      tubeSize: '1 1/4"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1518A',
      name: 'End Cap "Dome"',
      tubeSize: '1 1/2"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2018A',
      name: 'End Cap "Dome"',
      tubeSize: '2"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1019A',
      name: 'End Cap "Flat", Type 1',
      tubeSize: '1"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1219A',
      name: 'End Cap "Flat", Type 1',
      tubeSize: '1 1/4"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1519A',
      name: 'End Cap "Flat", Type 1',
      tubeSize: '1 1/2"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2019A',
      name: 'End Cap "Flat", Type 1',
      tubeSize: '2"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1030A',
      name: 'End Cap "Light Knock-In"',
      tubeSize: '1"',
      photo: "products/LJ1030A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1530A',
      name: 'End Cap "Light Knock-In"',
      tubeSize: '1 1/2"',
      photo: "products/LJ1030A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2030A',
      name: 'End Cap "Light Knock-In"',
      tubeSize: '2"',
      photo: "products/LJ1030A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1525A',
      name: 'Handrail End CAP 45°',
      tubeSize: '1 1/2"',
      photo: "products/LJ1525A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2025A',
      name: 'Handrail End CAP 45°',
      tubeSize: '2"',
      photo: "products/LJ1525A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1526A',
      name: 'Handrail End CAP 90°',
      tubeSize: '1 1/2"',
      photo: "products/LJ1526A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2026A',
      name: 'Handrail End CAP 90°',
      tubeSize: '2"',
      photo: "products/LJ1526A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ15739A',
      name: 'Handrail End Cap 90° Radiused Internal Fit',
      tubeSize: '1 1/2"',
      photo: "products/LJ15739A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ20739A',
      name: 'Handrail End Cap 90° Radiused Internal Fit',
      tubeSize: '2"',
      photo: "products/LJ15739A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1519U',
      name: 'End Cap "Flat", Type 2',
      tubeSize: '1 1/2"',
      photo: "products/LJ1519U.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2019U',
      name: 'End Cap "Flat", Type 2',
      tubeSize: '2"',
      photo: "products/LJ1519U.png",
      tag: ["End Cap", "Tube Fittings"]
    },



//=============== Glass Clamp and Holder ===============

    {
      code: 'LJ1523B',
      name: 'Glass Clip, Type 1',
      tubeSize: 'R 1 1/2"x 8-12 mm',
      photo: "products/LJ1523B.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ2023B',
      name: 'Glass Clip, Type 1',
      tubeSize: 'R 2"x 8-12 mm',
      photo: "products/LJ1523B.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS71R381',
      name: 'Glass Clamp, Square Type',
      tubeSize: '45 x 49 x 27 xR 38.1 x 6~10',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS71R424',
      name: 'Glass Clamp, Square Type',
      tubeSize: '45 x 49 x 27 x R 42.4 x 6~10',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS71R508',
      name: 'Glass Clamp, Square Type',
      tubeSize: '45 x 49 x 27 x R 50.8 x 6~10',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS72F',
      name: 'Glass Clamp, Square Type',
      tubeSize: '45 x 45 x 27 x (FLAT) x 6~10 ',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS73R381',
      name: 'Glass Clamp, Square Type',
      tubeSize: '55 x 60 x 33 x R 38.1 x 8~12',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS73R424',
      name: 'Glass Clamp, Square Type',
      tubeSize: '55 x 60 x 33 x R 42.4 x 8~12',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS73R508',
      name: 'Glass Clamp, Square Type',
      tubeSize: '55 x 60 x 33 x R 50.8 x 8~12',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS74F',
      name: 'Glass Clamp, Square Type',
      tubeSize: '55 x 55 x 33 x (FLAT) x 8~12 ',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD75R381',
      name: 'Glass Clamp, D Type',
      tubeSize: '50 x 53 x 33 x R 38.1 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD75R424',
      name: 'Glass Clamp, D Type',
      tubeSize: '50 x 53 x 33 x R 42.4 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD75R508',
      name: 'Glass Clamp, D Type',
      tubeSize: '50 x 53 x 33 x R 50.8 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD76F',
      name: 'Glass Clamp, D Type',
      tubeSize: '65 x 60 x 33 (FLAT) x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD81R381',
      name: 'Glass Clamp, D Type',
      tubeSize: '40 x 53 x 23 x R 38.1 x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD81R424',
      name: 'Glass Clamp, D Type',
      tubeSize: '40 x 53 x 23 x R 42.4 x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD81R508',
      name: 'Glass Clamp, D Type',
      tubeSize: '40 x 53 x 23 x R 50.8 x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD82F',
      name: 'Glass Clamp, D Type',
      tubeSize: '40 x 50 x 23 x (FLAT) x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD83R381',
      name: 'Glass Clamp, D Type',
      tubeSize: '45 x 66 x 27 x R 38.1 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD83R424',
      name: 'Glass Clamp, D Type',
      tubeSize: '45 x 66 x 27 x R 42.4 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD83R508',
      name: 'Glass Clamp, D Type',
      tubeSize: '45 x 66 x 27 x R 50.8 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD84F',
      name: 'Glass Clamp, D Type',
      tubeSize: '45 x 62 x 27 (FLAT) x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJB90-SH',
      name: 'Glass Clip, Type 2',
      tubeSize: '(90 x 50 x 55) x 10~12',
      photo: "products/LJB90-SH.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJB90G-SH',
      name: 'Glass Clip Type 3',
      tubeSize: '(90 x 58 x 55) x 10~12',
      photo: "products/LJB90G-SH.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ01SPG',
      name: 'Glass Holder Type 1',
      tubeSize: '10~12 mm',
      photo: "products/LJ01SPG.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ03SPG',
      name: 'Glass Holder Type 2',
      tubeSize: '10~12 mm',
      photo: "products/LJ03SPG.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ04SPG',
      name: 'Glass Holder Type 3',
      tubeSize: '10~12 mm',
      photo: "products/LJ04SPG.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },


    // 更多产品
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
