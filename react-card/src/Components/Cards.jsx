
import { useState, useEffect } from "react";
import Card from "./Card";
const getZodiacSign = (date) => {
  const zodiacSigns = [
    { name: "Aries", startDate: "03-21", endDate: "04-19", img: "https://i.pinimg.com/originals/e8/70/f8/e870f8d0ecc2f10884d8c1cc738957da.jpg", description: "Aries es valiente y enérgico." },
    { name: "Tauro", startDate: "04-20", endDate: "05-20", img: "https://www.constelaciones.info/wp-content/uploads/2016/01/taurus.jpg", description: "Tauro es paciente y confiable." },
    { name: "Géminis", startDate: "05-21", endDate: "06-20", img: "https://pixfeeds.com/images/astronomy/constellations/1280-1200-538641634-gemini-constellation.jpg", description: "Géminis es adaptable y comunicativo." },
    { name: "Cáncer", startDate: "06-21", endDate: "07-22", img: "https://th.bing.com/th/id/R.485f76f58139dc9935e2fba81f5b854f?rik=lQFif8cJ2g3M0w&pid=ImgRaw&r=0", description: "Cáncer es emocional y protector." },
    { name: "Leo", startDate: "07-23", endDate: "08-22", img: "https://th.bing.com/th/id/R.a4861e895f39422f0eb1129ddad7b4f9?rik=rMuPjJpgJa4TPQ&pid=ImgRaw&r=0&sres=1&sresct=1", description: "Leo es dominante y creativo." },
    { name: "Virgo", startDate: "08-23", endDate: "09-22", img: "https://th.bing.com/th/id/OIP.vgWEcp4MhEMynOQ7_cDVvgHaGG?rs=1&pid=ImgDetMain", description: "Virgo es analítico y trabajador." },
    { name: "Libra", startDate: "09-23", endDate: "10-22", img: "https://th.bing.com/th/id/OIP.5wIwGlHG2yCcGH3IC6YTwAHaHa?rs=1&pid=ImgDetMain", description: "Libra es sociable y equilibrado." },
    { name: "Escorpio", startDate: "10-23", endDate: "11-21", img: "https://th.bing.com/th/id/OIP.upOrJRncIUZxHjpnCqLzXAHaH_?rs=1&pid=ImgDetMain", description: "Escorpio es intenso y apasionado." },
    { name: "Sagitario", startDate: "11-22", endDate: "12-21", img: "https://th.bing.com/th/id/R.e5302e9fea7119440bb9ada712853043?rik=qw6juyXx7KHgOw&pid=ImgRaw&r=0", description: "Sagitario es aventurero y optimista." },
    { name: "Capricornio", startDate: "12-22", endDate: "01-19", img: "https://th.bing.com/th/id/OIP.TZ7a3RYO9t3ZClzbXv_heAHaHa?rs=1&pid=ImgDetMain", description: "Capricornio es disciplinado y ambicioso." },
    { name: "Acuario", startDate: "01-20", endDate: "02-18", img: "https://th.bing.com/th/id/R.dd798b45c12ee0c122960878d5c1bfb0?rik=BeY5MTAa3uo4BA&pid=ImgRaw&r=0&sres=1&sresct=1", description: "Acuario es innovador y humanitario." },
    { name: "Piscis", startDate: "02-19", endDate: "03-20", img: "https://img.freepik.com/vector-premium/constelacion-zodiaco-piscis-signo-horoscopo-astrologico-diseno-brillante-azul-blanco-ilustracion_484720-3792.jpg", description: "Piscis es empático y soñador." }
  ];

  const [year, month, day] = date.split("-");
  const birthDate = new Date(year, month - 1, day);

  for (const sign of zodiacSigns) {
    const start = new Date(year, sign.startDate.split("-")[0] - 1, sign.startDate.split("-")[1]);
    const end = new Date(year, sign.endDate.split("-")[0] - 1, sign.endDate.split("-")[1]);

    if ((birthDate >= start && birthDate <= end) || (sign.name === "Capricornio" && (birthDate >= start || birthDate <= end))) {
      return sign;
    }
  }
  return null;
};

// eslint-disable-next-line react/prop-types
const Cards = ({ dateOfBirth }) => {
  const [zodiac, setZodiac] = useState(null);

  useEffect(() => {
    const zodiacSign = getZodiacSign(dateOfBirth);
    setZodiac(zodiacSign);
  }, [dateOfBirth]);

  return (
    <>
      {zodiac && <Card lang={zodiac.name} img={zodiac.img}  description={zodiac.description} />}
    </>
  );
};

export default Cards;
