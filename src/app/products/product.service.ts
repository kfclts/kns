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
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"],
    },
    {
      code: 'LJ15315A - 2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20315A - 2',
      name: 'Adjustable Rail Support Radiused "Internal Fit"',
      dimensions: 'Tube Size x ØR',
      spec: '2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20135AP',
      name: 'Adjustable Rail Support Flat "Internal Fit"',
      dimensions: 'Tube Size x ØR',
      spec: '2" x FLAT',
      photo: "products/LJ20135AP.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20136A - 2',
      name: 'Adjustable Rail Support Radius "External Fit"',
      dimensions: 'Tube Size x ØR',
      spec: '2"x R 2"',
      photo: "products/LJ15315A.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20136AP',
      name: 'Adjustable Rail Support Flat "External Fit"',
      dimensions: 'Tube Size x ØR',
      spec: '2"x FLAT',
      photo: "products/LJ20136AP.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15710RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15710RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2"x R 2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20710RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      dimensions: 'Tube Size x ØR',
      spec: '2"x R 1 1/2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20710RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 1',
      dimensions: 'Tube Size x ØR',
      spec: '2"x R 2"',
      photo: "products/LJ15710RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ15711RB - 1 1/2"',
      name: 'Adjustable Rail Support Radiused, Type 2',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2"x R 1 1/2"',
      photo: "products/LJ15711RB.png",
      tag: ["Adjustable Support", "Tube Fittings"]
    },
    {
      code: 'LJ20711RB - 2"',
      name: 'Adjustable Rail Support Radiused, Type 2',
      dimensions: 'Tube Size x ØR',
      spec: '2"x R 2"',
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
      dimensions: 'Tube Size',
      spec: '1"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1214A',
      name: 'Oblong Base Plate / Flange',
      dimensions: 'Tube Size',
      spec: '1 1/4"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1514A',
      name: 'Oblong Base Plate / Flange',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2014A',
      name: 'Oblong Base Plate / Flange',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1014A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1015A',
      name: 'Wall Stop Flange',
      dimensions: 'Tube Size',
      spec: '1"',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1215A',
      name: 'Wall Stop Flange',
      dimensions: 'Tube Size',
      spec: '1 1/4"',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1515A',
      name: 'Wall Stop Flange',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2015A',
      name: 'Wall Stop Flange',
      dimensions: 'Tube Size',
      spec: '2" ( 45° )',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2015C',
      name: 'Wall Stop Flange',
      dimensions: 'Tube Size',
      spec: '2" ( 37° )',
      photo: "products/LJ1015A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1599A',
      name: 'Round Adjustable Heavy Duty Base Plate',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1599A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2099A',
      name: 'Round Adjustable Heavy Duty Base Plate',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1599A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1524A',
      name: 'Outsided Wall Flange, Round Base Type 1',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1524A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2024A',
      name: 'Outsided Wall Flange, Round Base Type 1',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1524A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15802A',
      name: 'Outsided Wall Flange, Round Base Type 2',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ15802A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20802A',
      name: 'Outsided Wall Flange, Round Base Type 2',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ15802A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1001C',
      name: 'Round Base Plate With Cover',
      dimensions: 'Tube Size',
      spec: '1"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1201C',
      name: 'Round Base Plate With Cover',
      dimensions: 'Tube Size',
      spec: '1 1/4"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1401C',
      name: 'Round Base Plate With Cover',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2001C',
      name: 'Round Base Plate With Cover',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1001C.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15512A',
      name: 'Round Base Plate - Type 2',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ15512A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20512A',
      name: 'Round Base Plate - Type 2',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ15512A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1016A',
      name: 'Flange, Round Base, Type 1',
      dimensions: 'Tube Size',
      spec: '1"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1216A',
      name: 'Flange, Round Base, Type 1',
      dimensions: 'Tube Size',
      spec: '1 1/4"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1516A',
      name: 'Flange, Round Base, Type 1',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2016A',
      name: 'Flange, Round Base, Type 1',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1016A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ1402S',
      name: 'Square Base Plate',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1402S.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2002S',
      name: 'Square Base Plate',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1402S.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15803',
      name: 'Outsided Wall Flange, Adjustable, Round Base Type 3',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ15803.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20803',
      name: 'Outsided Wall Flange, Adjustable, Round Base Type 3',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ15803.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ2016U',
      name: 'Flange, Round Base, Type 2',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ2016U.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ15601A',
      name: 'Flange, Round Base, Type 3',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ15601A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    {
      code: 'LJ20601A',
      name: 'Flange, Round Base, Type 3',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ15601A.png",
      tag: ["Flange", "Tube Fittings"]
    },
    //=============== End Cap ===============
    {
      code: 'LJ1018A',
      name: 'End Cap "Dome"',
      dimensions: 'Tube Size',
      spec: '1"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1218A',
      name: 'End Cap "Dome"',
      dimensions: 'Tube Size',
      spec: '1 1/4"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1518A',
      name: 'End Cap "Dome"',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2018A',
      name: 'End Cap "Dome"',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1018A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1019A',
      name: 'End Cap "Flat", Type 1',
      dimensions: 'Tube Size',
      spec: '1"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1219A',
      name: 'End Cap "Flat", Type 1',
      dimensions: 'Tube Size',
      spec: '1 1/4"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1519A',
      name: 'End Cap "Flat", Type 1',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2019A',
      name: 'End Cap "Flat", Type 1',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1019A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1030A',
      name: 'End Cap "Light Knock-In"',
      dimensions: 'Tube Size',
      spec: '1"',
      photo: "products/LJ1030A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1530A',
      name: 'End Cap "Light Knock-In"',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1030A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2030A',
      name: 'End Cap "Light Knock-In"',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1030A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1525A',
      name: 'Handrail End CAP 45°',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1525A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2025A',
      name: 'Handrail End CAP 45°',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1525A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1526A',
      name: 'Handrail End CAP 90°',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1526A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2026A',
      name: 'Handrail End CAP 90°',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1526A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ15739A',
      name: 'Handrail End Cap 90° Radiused Internal Fit',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ15739A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ20739A',
      name: 'Handrail End Cap 90° Radiused Internal Fit',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ15739A.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ1519U',
      name: 'End Cap "Flat", Type 2',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: "products/LJ1519U.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    {
      code: 'LJ2019U',
      name: 'End Cap "Flat", Type 2',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: "products/LJ1519U.png",
      tag: ["End Cap", "Tube Fittings"]
    },
    //=============== Glass Clamp and Holder ===============
    {
      code: 'LJ1523B',
      name: 'Glass Clip, Type 1',
      dimensions: 'Tube Size x Glass',
      spec: 'R 1 1/2"x 8-12 mm',
      photo: "products/LJ1523B.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ2023B',
      name: 'Glass Clip, Type 1',
      dimensions: 'Tube Size x Glass',
      spec: 'R 2"x 8-12 mm',
      photo: "products/LJ1523B.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS71R381',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 49 x 27 xR 38.1 x 6~10',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS71R424',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 49 x 27 x R 42.4 x 6~10',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS71R508',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 49 x 27 x R 50.8 x 6~10',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS72F',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 45 x 27 x (FLAT) x 6~10 ',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS73R381',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '55 x 60 x 33 x R 38.1 x 8~12',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS73R424',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '55 x 60 x 33 x R 42.4 x 8~12',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS73R508',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '55 x 60 x 33 x R 50.8 x 8~12',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJS74F',
      name: 'Glass Clamp, Square Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '55 x 55 x 33 x (FLAT) x 8~12 ',
      photo: "products/LJS71R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD75R381',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '50 x 53 x 33 x R 38.1 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD75R424',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '50 x 53 x 33 x R 42.4 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD75R508',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '50 x 53 x 33 x R 50.8 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD76F',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '65 x 60 x 33 (FLAT) x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD81R381',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '40 x 53 x 23 x R 38.1 x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD81R424',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '40 x 53 x 23 x R 42.4 x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD81R508',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '40 x 53 x 23 x R 50.8 x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD82F',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '40 x 50 x 23 x (FLAT) x 6~10',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD83R381',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 66 x 27 x R 38.1 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD83R424',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 66 x 27 x R 42.4 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD83R508',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 66 x 27 x R 50.8 x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJD84F',
      name: 'Glass Clamp, D Type',
      dimensions: 'A x B x D x R x Glass (mm)',
      spec: '45 x 62 x 27 (FLAT) x 8~12',
      photo: "products/LJD75R381.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJB90-SH',
      name: 'Glass Clip, Type 2',
      dimensions: 'Size x Glass (mm)',
      spec: '(90 x 50 x 55) x 10~12',
      photo: "products/LJB90-SH.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJB90G-SH',
      name: 'Glass Clip Type 3',
      dimensions: 'Size x Glass (mm)',
      spec: '(90 x 58 x 55) x 10~12',
      photo: "products/LJB90G-SH.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ01SPG',
      name: 'Glass Holder Type 1',
      dimensions: 'Glass (mm)',
      spec: '10~12 mm',
      photo: "products/LJ01SPG.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ03SPG',
      name: 'Glass Holder Type 2',
      dimensions: 'Glass (mm)',
      spec: '10~12 mm',
      photo: "products/LJ03SPG.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    {
      code: 'LJ04SPG',
      name: 'Glass Holder Type 3',
      dimensions: 'Glass (mm)',
      spec: '10~12 mm',
      photo: "products/LJ04SPG.png",
      tag: ["Glass Clamp and Holder", "Tube Fittings"]
    },
    //=============== Support ===============
    {
      code: 'LJ15602',
      name: 'Rail Support Type - 1',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: 'products/LJ15602.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ20602',
      name: 'Rail Support Type - 1',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: 'products/LJ15602.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ15603',
      name: 'Rail Support Type - 2',
      dimensions: 'Tube Size',
      spec: '1 1/2"',
      photo: 'products/LJ15603.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ20603',
      name: 'Rail Support Type - 2',
      dimensions: 'Tube Size',
      spec: '2"',
      photo: 'products/LJ15603.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ1528A',
      name: 'Handrail Wall Support "Radiused"',
      dimensions: 'ØR',
      spec: '1 1/2"',
      photo: 'products/LJ1528A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ2028A',
      name: 'Handrail Wall Support "Radiused"',
      dimensions: 'ØR',
      spec: '2"',
      photo: 'products/LJ1528A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ15710RA 381',
      name: 'Handrail Support "Radiused" Type-2',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2" x 1 1/2"',
      photo: 'products/LJ15710RA.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ15710RA 508',
      name: 'Handrail Support "Radiused" Type-2',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2" x 2"',
      photo: 'products/LJ15710RA.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ20710RA 381',
      name: 'Handrail Support "Radiused" Type-2',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 1 1/2"',
      photo: 'products/LJ15710RA.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ20710RA 508',
      name: 'Handrail Support "Radiused" Type-2',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 2"',
      photo: 'products/LJ15710RA.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0473A',
      name: 'Cross Saddle',
      dimensions: 'Tube Size x ØR',
      spec: '1/2" x 1 1/2"',
      photo: 'products/LJ0473A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0474A',
      name: 'Cross Saddle',
      dimensions: 'Tube Size x ØR',
      spec: '1/2" x 2"',
      photo: 'products/LJ0473A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0573A',
      name: 'Cross Saddle',
      dimensions: 'Tube Size x ØR',
      spec: '5/8" x 1 1/2"',
      photo: 'products/LJ0473A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0574A',
      name: 'Cross Saddle',
      dimensions: 'Tube Size x ØR',
      spec: '5/8" x 2"',
      photo: 'products/LJ0473A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0673A',
      name: 'Cross Saddle',
      dimensions: 'Tube Size x ØR',
      spec: '3/4" x 1 /12"',
      photo: 'products/LJ0473A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0674A',
      name: 'Cross Saddle',
      dimensions: 'Tube Size x ØR',
      spec: '3/4" x 2"',
      photo: 'products/LJ0473A.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0473B',
      name: 'Cross Saddle Blind Hole',
      dimensions: 'Tube Size x ØR',
      spec: '1/2" x 1 1/2"',
      photo: 'products/LJ0473B.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0474B',
      name: 'Cross Saddle Blind Hole',
      dimensions: 'Tube Size x ØR',
      spec: '1/2" x 2"',
      photo: 'products/LJ0473B.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0573B',
      name: 'Cross Saddle Blind Hole',
      dimensions: 'Tube Size x ØR',
      spec: '5/8" x 1 1/2"',
      photo: 'products/LJ0473B.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0574B',
      name: 'Cross Saddle Blind Hole',
      dimensions: 'Tube Size x ØR',
      spec: '5/8" x 2"',
      photo: 'products/LJ0473B.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0673B',
      name: 'Cross Saddle Blind Hole',
      dimensions: 'Tube Size x ØR',
      spec: '3/4" x 1 /12"',
      photo: 'products/LJ0473B.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ0674B',
      name: 'Cross Saddle Blind Hole',
      dimensions: 'Tube Size x ØR',
      spec: '3/4" x 2"',
      photo: 'products/LJ0473B.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ15711RA',
      name: 'Handrail Support "Radiused" Type-3',
      dimensions: 'ØR',
      spec: '1 1/2"',
      photo: 'products/LJ15711RA.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ20711RA',
      name: 'Handrail Support "Radiused" Type-3',
      dimensions: 'ØR',
      spec: '2"',
      photo: 'products/LJ15711RA.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ151BK',
      name: 'Handrail Support For Glass, "Radiused" Type 1 (Adjustable)',
      dimensions: 'ØR, Glass (mm)',
      spec: '1 1/2" x 8~12mm',
      photo: 'products/LJ151BK.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ201BK',
      name: 'Handrail Support For Glass, "Radiused" Type 1 (Adjustable)',
      dimensions: 'ØR, Glass (mm)',
      spec: '2" x 8~12mm',
      photo: 'products/LJ151BK.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ152BK',
      name: 'Handrail Support For Glass, "Radiused" Type 2 (Fixed)',
      dimensions: 'ØR, Glass (mm)',
      spec: '1 1/2" x 8~12mm',
      photo: 'products/LJ152BK.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ202BK',
      name: 'Handrail Support For Glass, "Radiused" Type 2 (Fixed)',
      dimensions: 'ØR, Glass (mm)',
      spec: '2" x 8~12mm',
      photo: 'products/LJ152BK.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ155BK',
      name: 'Handrail Support For Glass, "Radiused" Type 3 (Adjustable)',
      dimensions: 'ØR, Glass (mm)',
      spec: '1 1/2" x 8~12mm',
      photo: 'products/LJ155BK.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ205BK',
      name: 'Handrail Support For Glass, "Radiused" Type 3 (Adjustable)',
      dimensions: 'ØR, Glass (mm)',
      spec: '2" x 8~12mm',
      photo: 'products/LJ155BK.png',
      tag: ['Support', 'Tube Fittings'],
    },
    {
      code: 'LJ203BK',
      name: 'Handrail Support For Glass & Wall',
      dimensions: 'ØR, Glass (mm)',
      spec: '8~12mm',
      photo: 'products/LJ203BK.png',
      tag: ['Support', 'Tube Fittings'],
    },
    //=============== Square Type ===============
    {
      code: 'LJ2019S',
      name: 'End Cap "Flat"',
      dimensions: 'Tube Size',
      spec: '2" x 2"',
      photo: 'products/LJ2019S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2004S',
      name: 'Flush Joiner "In-Line"',
      dimensions: 'Tube Size',
      spec: '2" x 2"',
      photo: 'products/LJ2004S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2002S',
      name: 'Flush Joiner (90°)',
      dimensions: 'Tube Size',
      spec: '2"x 2"',
      photo: 'products/LJ2002S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2005S',
      name: 'Flush Joiner "Tee"',
      dimensions: 'Tube Size',
      spec: '2"x 2"',
      photo: 'products/LJ2005S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2006S',
      name: 'Flush Joiner "90° Tee"',
      dimensions: 'Tube Size',
      spec: '2"x 2"',
      photo: 'products/LJ2006S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2014S',
      name: 'Oblong Base Plate Flange',
      dimensions: 'Tube Size',
      spec: '2"x 2"',
      photo: 'products/LJ2014S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2016S',
      name: 'Square Base Plate / Flange',
      dimensions: 'Tube Size',
      spec: '2"x 2"',
      photo: 'products/LJ2016S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2015S',
      name: 'Wall Stop Flange 37°',
      dimensions: 'Tube Size',
      spec: '2"x 2"',
      photo: 'products/LJ2015S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ315APS',
      name: 'Adjustable Rail Support "Flat Top"',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 2" x FLAT',
      photo: 'products/LJ315APS.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2020S',
      name: 'Post Reducer Square "Round In-Line"',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 2" x 2"',
      photo: 'products/LJ2020S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2021S',
      name: 'Post Reducer Square "Round Adjustable"',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 2" x 2"',
      photo: 'products/LJ2021S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    {
      code: 'LJ2022S',
      name: 'Post Rreducer Square "Round 90° Corner"',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 2" x 2"',
      photo: 'products/LJ2022S.png',
      tag: ['Square Type', 'Tube Fittings'],
    },
    //=============== Perpendicular Joiner ===============
    {
      code: 'LJ20314A-2',
      name: 'Perpendicular Joiner "37° External Cap"',
      dimensions: 'Tube Size x ØR',
      spec: '',
      photo: 'products/LJ20314A-2.png',
      tag: ['Perpendicular Joiner', 'Tube Fittings'],
    },
    {
      code: 'LJ20313A-2',
      name: 'Perpendicular Joiner "External Cap"',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 2"',
      photo: 'products/LJ20313A-2.png',
      tag: ['Perpendicular Joiner', 'Tube Fittings'],
    },
    {
      code: 'LJ1527A - 1 1/2',
      name: 'Perpendicular Joiner "Flush Fitting"',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2" x 1 1/2"',
      photo: 'products/LJ1527A.png',
      tag: ['Perpendicular Joiner', 'Tube Fittings'],
    },
    {
      code: 'LJ1527A - 2',
      name: 'Perpendicular Joiner "Flush Fitting"',
      dimensions: 'Tube Size x ØR',
      spec: '1 1/2" x 2"',
      photo: 'products/LJ1527A.png',
      tag: ['Perpendicular Joiner', 'Tube Fittings'],
    },
    {
      code: 'LJ2027A - 2',
      name: 'Perpendicular Joiner "Flush Fitting"',
      dimensions: 'Tube Size x ØR',
      spec: '2" x 2"',
      photo: 'products/LJ1527A.png',
      tag: ['Perpendicular Joiner', 'Tube Fittings'],
    },
    //=============== Rail Post ===============
    {
      code: 'LJ201BL',
      name: 'Rail post Type 1',
      dimensions: 'Glass (mm)',
      spec: '10~12 mm',
      photo: 'products/LJ201BL.png',
      tag: ['Rail Post', 'Tube Fittings'],
    },
    {
      code: 'LJ307BL',
      name: 'Rail post Type 2',
      dimensions: 'Glass (mm)',
      spec: '10~12 mm',
      photo: 'products/LJ307BL.png',
      tag: ['Rail Post', 'Tube Fittings'],
    },
    //=============== Grap Bar ===============
    {
      code: 'LJ1201GB',
      name: 'Grab Bar',
      dimensions: 'Tube Size x Length',
      spec: '31.8 x 600 mm',
      photo: 'products/LJ1201GB.png',
      tag: ['Grab Bar', 'Tube Fittings'],
    },
    {
      code: 'LJ1501GB',
      name: 'Grab Bar',
      dimensions: 'Tube Size x Length',
      spec: '38.1 x 600 mm',
      photo: 'products/LJ1201GB.png',
      tag: ['Grab Bar', 'Tube Fittings'],
    },
    {
      code: 'LJ1201FGB',
      name: 'Folding Grab bar',
      dimensions: 'Tube Size x Length',
      spec: '31.8 x 800 mm',
      photo: 'products/LJ1201FGB.png',
      tag: ['Grab Bar', 'Tube Fittings'],
    },
  ];

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }
}
