import Image from "next/image";
import Marquee from "react-fast-marquee";

const certs = [
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170397047078912/1.png?ex=65423d2b&is=652fc82b&hm=6f8576af33a24b1c9b9d9fdc5f40ced16dd55ee5670eed83631212136fa024af&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170398104047767/2.png?ex=65423d2c&is=652fc82c&hm=1700ed21a8863155a3eafd8c62f2139ccb5a7f97cd1250832d11cea94d811abe&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170399458803743/3.png?ex=65423d2c&is=652fc82c&hm=cdb102a9e85dff6ef1837a0d97519ffdccafb1dbfaea54bf010fd207116751ee&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170400247324772/4.png?ex=65423d2c&is=652fc82c&hm=f7a79834f6d03609ce96c5543dafc68bc2f1a15ae923fea11270f57dca00909e&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170400792592444/5.png?ex=65423d2c&is=652fc82c&hm=346a796ab9ee93a41796f02860c71186baac74a8e1e851d1449cbd4f045ffa7d&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170401295913053/6.png?ex=65423d2c&is=652fc82c&hm=fa6cfa73ec9bac56c85c0460788bd7267ed20210f8a9a593fc1507fa9942554e&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170401706950656/7.png?ex=65423d2d&is=652fc82d&hm=82752a7b60b837471217939c49861517892372e4b033423e03d2276c2ac62a9b&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170402201870407/8.png?ex=65423d2d&is=652fc82d&hm=8e34db83aa2b7b7d7328ea2d44f1083165bb3cc4af2043b78e261634b0b53349&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170402654863450/9.png?ex=65423d2d&is=652fc82d&hm=bfdc7812b2b3cb353a07dd548411012d034a449bcb5b69ad380d868fb29e7cd8&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170403200126997/10.png?ex=65423d2d&is=652fc82d&hm=08bfe49fcfbd77092e096c778de927002fa54c30adce5205e180044d0664133a&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170574319341688/11.png?ex=65423d56&is=652fc856&hm=74c17fec30fe5796a1e47ac76a5983b496060e7142643c88ef0e1d95cdf1f3c8&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170575137218560/12.png?ex=65423d56&is=652fc856&hm=e410fc2a4a0e35a4cb5a63a9c2ca5ad8ad7b4adbdea4d675d51f4eb9b8ffe10b&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170575896399882/13.png?ex=65423d56&is=652fc856&hm=3d0d5416325108c458afbc0121394426ef1c7642063b3950a9e37a2fc5aac241&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170576525533204/14.png?ex=65423d56&is=652fc856&hm=d273a7c2bb7f5b7fce9e3c5e00b48bdde7267c1e3a89b8235610e9e844a59286&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170577142091857/15.png?ex=65423d56&is=652fc856&hm=b10590d2faae1a9ca15792e7f9fcddbcb44567089e65ea86c975331bb30ed926&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170578605908060/16.png?ex=65423d57&is=652fc857&hm=b5abaa684ddcdab2e869e73be6053f53fff242eb14fba9fe031c080cf5f2d669&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170579486707802/17.png?ex=65423d57&is=652fc857&hm=3fbaf8549b70860e0de688c22edb59217e86084c5b46b896ebc79c97e805feea&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170579876794410/18.png?ex=65423d57&is=652fc857&hm=2faead2f76bdf59b07ac0c929da746ee4b5c2143bcd40ee7041cf70ffb1931ae&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170580203937832/19.png?ex=65423d57&is=652fc857&hm=4656255b5d5c3d219467d427d9dd8546d0b2d4f7593150ea2e064697b687dc3b&',
'https://cdn.discordapp.com/attachments/1164170305158258728/1164170580728221796/20.png?ex=65423d57&is=652fc857&hm=6ad9e6102939f96335a74db600b97ac7ba6fc097d9ecbeab205e31cc39958f3e&'
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
