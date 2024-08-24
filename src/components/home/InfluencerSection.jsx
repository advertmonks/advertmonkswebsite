import Image from 'next/image';
import { Button } from '../ui/button';
// import styles from './InfluencerSection.module.css';

const InfluencerSection = () => {
  return (
    <>
    <div>
    <section className="flex p-10 w-screen gap-16 align-middle items-center">
      <div className="w-2/3 text-left ml-10">
        <h1 className="text-5xl font-bold mb-5 w-3/4 ">Find The Right <br/> Influencer For Your Business</h1>
        <p className='text-lg font-light '>
          Taciti dui mollis lobortis donec consectetur vel felis efficitur. Acutuman molestie habitasse libero ornare a turpis sed frictious fermentum.
        </p>
        {/* <button >Discover More</button> */}
        <Button>Discover More</Button>
      </div>

      <div className='flex w-2/4 relative gap-3'>
        <div className='flex-col mt-4 relative'>
          <Image className='rounded-tl-3xl mb-4' src="/Akshay.png" alt="Influencer 1" width={250} height={250} />
          
        
          <Image src="/Akshay.png" className='rounded-bl-3xl' alt="Influencer 2" width={250} height={250} />
          <p className='absolute bottom-4 -left-10 bg-white rounded-e-full rounded-s-full px-3 py-1 text-sm'>4126+ <br/> <span className='text-xs'>Popular Influencer</span></p>
        </div>
        <div className='flex-col relative'>
          <Image className='mb-4' src="/Akshay.png" alt="Influencer 3" width={250} height={250} />
          <p className='absolute top-44 -right-10 bg-white rounded-e-full rounded-s-full px-3 py-1 text-sm'>4126+ <br/> <span className='text-xs'>Popular Influencer</span></p>
          <Image className='rounded-br-3xl' src="/Akshay.png" alt="Influencer 4" width={250} height={250} />
        </div>
      </div>

      
    </section>
    <div className='flex px-36 gap-20 mt-4 pb-10'>
        <p className='text-4xl'>More than 25,000 world- <br/>class brands trust Influozym</p>
        <div className='flex gap-12'>
        <div className='flex'>

          <Image src="/images/logo1.png" alt="" width={20} height={40} />
          <p>Logopisum</p>
        </div>
        <div className='flex'>

          <Image src="/images/logo1.png" alt="" width={20} height={40}/>
          <p>Logopisum</p>
        </div>
        <div className='flex'>

          <Image src="/images/logo1.png" alt="" width={20} height={40}/>
          <p>Logopisum</p>
        </div>
        <div className='flex'>

          <Image src="/images/logo1.png" alt="" width={20} height={40}/>
          <p>Logopisum</p>
        </div>
         
        </div>
      </div>
    </div>
   
    {/* <div>
    <section className={styles.influencerSection}>
      <div className={styles.header}>
        <h1>Find The Right <br/> Influencer For Your Business</h1>
        <p>
          Taciti dui mollis lobortis donec consectetur vel felis efficitur. Acutuman molestie habitasse libero ornare a turpis sed frictious fermentum.
        </p>
        <button className={styles.discoverButton}>Discover More</button>
      </div>

      <div className={styles.influencers}>
        <div className={styles.influencerCard}>
          <Image src="/images/influencer1.jpg" alt="Influencer 1" width={100} height={100} />
          <p className={styles.stats}>4126+ Popular Influencer</p>
        </div>
        <div className={styles.influencerCard}>
          <Image src="/images/influencer2.jpg" alt="Influencer 2" width={100} height={100} />
          <p className={styles.stats}>99.99% Satisfied Users</p>
        </div>
        <div className={styles.influencerCard}>
          <Image src="/images/influencer3.jpg" alt="Influencer 3" width={100} height={100} />
        </div>
        <div className={styles.influencerCard}>
          <Image src="/images/influencer4.jpg" alt="Influencer 4" width={100} height={100} />
        </div>
      </div>

      
    </section>
    <div className={styles.footer}>
        <p>More than 25,000 world-class brands trust Influozym</p>
        <div className={styles.logos}>
          <Image src="/images/logo1.png" alt="Logo 1" width={80} height={40} />
          <Image src="/images/logo2.png" alt="Logo 2" width={80} height={40} />
          <Image src="/images/logo3.png" alt="Logo 3" width={80} height={40} />
          <Image src="/images/logo4.png" alt="Logo 4" width={80} height={40} />
        </div>
      </div>
    </div>
    */}
    </>
  );
};

export default InfluencerSection;
