import Image from "next/image";
import Marquee from "react-fast-marquee";

const certs = [
  'https://media.discordapp.net/attachments/1164170305158258728/1164170397047078912/1.png?ex=65ba35ab&is=65a7c0ab&hm=03249ac0d781c760bb4ea703e750b7f4c97a9b9fca2820182dbb2ae0379f1d04&=&format=webp&quality=lossless&width=1468&height=1056',
  'https://media.discordapp.net/attachments/1164170305158258728/1164170398104047767/2.png?ex=65ba35ac&is=65a7c0ac&hm=e1058e054550d70d5df4a33b0f2037a738806753825bd0c06b2bdffcc80ba920&=&format=webp&quality=lossless&width=1464&height=1056',
  'https://media.discordapp.net/attachments/1164170305158258728/1164170399458803743/3.png?ex=65ba35ac&is=65a7c0ac&hm=baca2b89ef390586ba7e5dcb585eb68743e939ee487389d879b92d4433e8b886&=&format=webp&quality=lossless&width=1492&height=1056',
  'https://media.discordapp.net/attachments/1164170305158258728/1164170400792592444/5.png?ex=65ba35ac&is=65a7c0ac&hm=1f9664b45bb50cd3b0037ecb33b5387a198878e2ad857fc3516357ccc78017fa&=&format=webp&quality=lossless&width=1496&height=1056',
  'https://media.discordapp.net/attachments/1164170305158258728/1164170401706950656/7.png?ex=65ba35ad&is=65a7c0ad&hm=df26b5e370f333cc8a438f829d68a57496b016cc1e754a7b257b47b4c6f2cf11&=&format=webp&quality=lossless&width=1334&height=1056',
  'https://media.discordapp.net/attachments/1164170305158258728/1164170580728221796/20.png?ex=65ba35d7&is=65a7c0d7&hm=7c506a3bec39b790b48ef4d76ed8c97ef902616f7310edd8a7933c3048fede46&=&format=webp&quality=lossless&width=1494&height=1056'
];

const CertScroll = () => {

  return (
    <Marquee
      direction="right"
      speed={175}
      pauseOnHover={true}
      gradient={false}
      className="flex items-center"

    >
      {certs.map((cert, i) => (
        <Image
          key={i}
          src={cert}
          alt={`Certificate`}
          height={400}
          width={400}
          className="shadow-gold transition hover:scale-125 hover:shadow-none hover:duration-500 mx-16 my-10"
        />
      ))}
    </Marquee>
  );
};

export default CertScroll;
