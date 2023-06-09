import { NextApiRequest, NextApiResponse } from 'next';

const news = [
  {
    id: '0001',
    imgUrl: '/a/na.jpg',
    title: 'SUBÜ GİRİŞİMCİLİK SEMİNERİNE KATILDIK',
    description:
      "SUBÜ Mekatronik Topluluğu ile Birlikte Sakarya Uygulamalı Bilimler Üniversitesi'nin Düzenlemiş Olduğu Girişimcilik Seminerine Katıldık.",
  },
  {
    id: '0002',
    imgUrl: '/a/nb.jpg',
    title: 'AVRUPAYA BİR TESLİMAT DAHA',
    description: 'FADA Mühendislikten Avrupalı müşterilerine bir teslimat daha.',
  },
  {
    id: '0003',
    imgUrl: '/a/nc.jpg',
    title: 'İHRACATA DEVAM EDİYORUZ',
    description: "Gürcistan ve Özbekistan'daki müşterilerimize Yağmurlama Borusu Kaynak Makineleri ihraç ediyoruz.",
  },
  {
    id: '0004',
    imgUrl: '/a/nd.jpg',
    title: 'İFTARDA BİR ARAYA GELDİK',
    description: 'Fada Mühendislik ailesi olarak iftarda bir araya geldik.',
  },
  {
    id: '0005',
    imgUrl: '/a/ne.jpg',
    title: 'ÖZEL TALEPLER ÖZEL ÇÖZÜMLER GEREKTİRİR.',
    description: 'Bir teslimatımızı daha başarı ile gerçekleştirdik.',
  },
  {
    id: '0006',
    imgUrl: '/a/nf.jpg',
    title: 'YENİ FABRİKAMIZLA HİZMETİNİZDEYİZ',
    description:
      'Endüstriyel otomasyon sektöründeki çözümleri, 15 yıla varan tecrübeye sahip yetkin mühendis ve imalat kadrosu ile FADA Mühendislik, güncel teknolojik ürünleri ve özel ihtiyaca yönelik akılcı çözümleri gerçekleştireceği yeni fabrikası ile hizmetinizdedir.',
  },
  {
    id: '0007',
    imgUrl: '/a/ng.jpg',
    title: 'TESLİMATLARIMIZ DEVAM EDİYOR',
    description:
      'Alüminyum Sektöründe imalat yapan, Avrupa ve Türkiye pazarında sektör lideri müşterimizin, üretim operasyonlarında depolama ihtiyaçlarını daha hızlı ve güvenli şekilde gerçekleştirmesi için tarafımızdan talep ettiği Otomatik Depolama Sistemi projemizin teslimatını resmi olarak gerçekleştirdik. Bu kapsamda, edinmiş olduğumuz birikim ve tecrübe ile diğer sektörlerde olduğu gibi Alüminyum sektöründe de makina imalatı çalışmalarımıza hız katarak devam etmeyi hedefliyoruz.',
  },
  {
    id: '0008',
    imgUrl: '/a/nh.jpg',
    title: 'FADAKADEMİ PERSONELLERİMİZİ KALİTE KONUSUNDA EĞİTİYOR',
    description:
      'FADAKADEMİ bünyesinde gerçekleştirilmesi planlanan inovasyon odaklı kalite eğitimleri çerçevesinde, TÜV Austria Türk firması ile yapmış olduğumuz sözleşmeye bağlı olarak, kalite süreçleri iyileştirme eğitimlerine hız katarak devam ediyoruz. Bu kapsamda yaptığımız çalışmalarla personellerimizin ve firmamızın gelişimine katkı sağlıyoruz.',
  },
  {
    id: '0009',
    imgUrl: '/a/ni.jpg',
    title: 'BÜYÜK İŞLER YAPAN KÜÇÜK MAKİNELER',
    description:
      ' Raylı Ulaşım Sistemleri sektöründe lider müşterimize, üretim operasyonlarındaki döndürme ihtiyaçlarını daha hızlı ve güvenli şekilde gerçekleştirebilmesi için, tarafımızdan temin ettiği Halatlı Yük Döndürme Ünitesi’nin teslimatını resmi olarak gerçekleştirdik. Fada Mühendislik olarak edinmiş olduğumuz bu deneyim ve tecrübe ile Raylı Ulaşım Sistemleri sektöründeki çalışmalarımıza hız katarak devam etmeyi hedefliyoruz.',
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const query = req.query;
  const { id } = query;

  if (id) {
    const data = news.find((e) => e.title == id.toString().toUpperCase().replace(/[-]/g, ' ').toString());
    const dat2 = await news.find((e) => e.title.toLowerCase().replace(/[ ]/g, '-') == id);

    res.status(200).json(dat2);
  }

  res.status(404).end();
}
