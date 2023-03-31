import Breadcrumb from '@/component/BreadCrump';
import { Contact } from '@/component/Card/ContactCard';
import { ContactT } from '@/component/Card/ContactDoubleCard';
import { DobuleTitle } from '@/component/DTittle';
import { Footer } from '@/component/footer/Footer';
import { Header } from '@/component/Header';
import { HeaderBottom } from '@/component/HeaderBottom';
import Head from 'next/head';

export default function Compnay() {
  return (
    <>
      <Head>
        <title>Fada Engineer</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
        <div className='space-y-24'>
          <Breadcrumb></Breadcrumb>

          <Contact
            mainTitle='ABOUT US'
            title='Many years of experience, complete service and complete customer satisfaction.'
            img='/firma.jpg'
            des={[
              'FADA Engineering is an engineering and machinery company that carries out various intralogistics projects such as storage, convey, rotation and transfer applications in many areas of the industry, in line with customer demands, and combines past experiences with technology and transfers them to the future.',
              'The main themes of the products and services of Fada Engineering, which determines customer satisfaction as the basic principle, are superior quality and sustainability. Thanks to our dynamic staff with up to 15 years of experience, our suppliers with whom we have long and strong relationships, and our understanding of quality with a perfectionist perspective, we establish long-term and reliable relationships by providing the highest level of service to our customers.',
              'With the passion of being innovation-oriented and creating added value, we work with great devotion to increase the productivity of our customers by producing solutions at international quality standards in all processes, from identifying needs to product delivery.            ',
              'In the light of these principles, FADA Engineering, by realizing dozens of projects from the past to the present, serves to meet the needs of its customers in many different sectors such as railway industry, defense, foundry industry, energy, iron and steel, aluminum and industrial automation, especially in the automotive and logistics sector.            ',
              'FADA Engineering specializes in many fields such as Electric and Battery Powered Transfer Carts, Conveyor Systems, Automated Storage Systems, Intralogistics Solutions, Positioners an Rotating Systems, Lifting and Handling Equipment and is confidently moving towards the future.',
            ]}
          ></Contact>
          <Contact
            mainTitle='FUTURE'
            title='R&D and Innovation Passion     '
            img='/GELECEK/a.jpg'
            des={[
              'Always for the better: With our multifaceted investments in our company, we are constantly updating our route to the future. With our industry 4.0, digitalization, modern technologies, internet of things and Innovation-oriented, progressive vision, we take advantage of all the opportunities for the benefit of our customers. We continue our way with a vision that aims to be one of the leading companies in the machine manufacturing sector and to grow sustainably with the studies that we will do in this context.',
            ]}
          ></Contact>
          <div>
            <Contact
              mainTitle='QUALITY          '
              title='The Perfectionist Perspective '
              img='/KALITE/a.jpg'
              des={[
                'For complete customer satisfaction, we are constantly increase the competencies of our employees with effective training, constantly follow national and international standards, protect nature by producing environmentally friendly products, create a safe working environment and ensure their continuity by adhering to the principle of "Safety first".',
              ]}
            ></Contact>
            <br></br>
            <br></br>
            <div className='w-full h-23 flex flex-row space-x-20 items-center justify-center '>
              <img className='h-14' src='/KALITE/FEM.png'></img>
              <img className='h-14' src='/KALITE/ISO.png'></img>
              <img className='h-14' src='/KALITE/ISO14001.png'></img>
              <img className='h-14' src='KALITE/OHSAS.png'></img>
              <img className='h-14' src='KALITE/TSE.png'></img>
              <img className='h-14' src='KALITE/tuv.png'></img>
            </div>
          </div>
          <br></br>
          <ContactT
            mainTitle='CAREER'
            title='Technology and Human'
            img='/KARIYER/s.JPG'
            des={[
              'Would you like to work in a dynamic, non-monotonic, constantly instructive job where you can take active responsibility?',
            ]}
            desT=' We welcome you to send us your CV, introducing yourself, stating your earliest start date and fee request.          '
            titleT='Contact Us          '
          ></ContactT>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <Footer></Footer>
      </main>
    </>
  );
}
