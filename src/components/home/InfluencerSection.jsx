import Image from 'next/image';
import { Button } from '../ui/button';
import AvatarCircles from "@/components/magicui/avatar-circles";
// import styles from './InfluencerSection.module.css';

const InfluencerSection = () => {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    // "https://avatars.githubusercontent.com/u/59228569",
  ];
  return (
    <>
    <div>
    <section className="flex p-10 w-screen gap-16 align-middle items-center">
      <div className="w-2/3 text-left ml-10">
        <h1 className="text-5xl font-bold mb-5 w-3/4 ">The Ladder to <br/> Stepping Up Your Digital Presence</h1>
        <p className='text-lg font-light '>
        You can&apos;t buy engagement, you have to build it. And that&apos;s what Advert Monks excels in. With expertly crafted stories to display your business like a trophy, we help take care of your marketing needs so you can focus on the innovation part. How do we do it? Let&apos;s walk through our list of services below!
        </p>
        {/* <button >Discover More</button> */}
        <Button>Discover More</Button>
      </div>

      <div className='flex w-2/4 relative gap-3'>
        <div className='flex-col mt-4 relative'>
          <Image className='rounded-tl-3xl mb-4 bg-gradient-to-r from-purple-500 to-purple-600' src="/av1.png" alt="Influencer 1" width={250} height={250} />
          
        
          <Image src="/av2.png" className='rounded-bl-3xl bg-gradient-to-r from-purple-500 to-purple-600' alt="Influencer 2" width={250} height={250} />
          <p className='absolute bottom-4 -left-10 bg-white rounded-e-full rounded-s-full px-3 py-1 text-sm'>4126+ <br/> <span className='text-xs'>Popular Influencer</span></p>
        </div>
        <div className='flex-col relative'>
          <Image className='rounded-tr-3xl mb-4 bg-gradient-to-r from-purple-500 to-purple-600' src="/Av3.png" alt="Influencer 3" width={250} height={250} />
          <AvatarCircles className='absolute top-48 -right-10  rounded-e-full rounded-s-full px-3 py-1 text-sm' numPeople={99} avatarUrls={avatarUrls} />
          {/* <p className='absolute top-44 -right-10 bg-white rounded-e-full rounded-s-full px-3 py-1 text-sm'>4126+ <br/> <span className='text-xs'>Popular Influencer</span></p> */}
          <Image className='rounded-br-3xl bg-gradient-to-r from-purple-500 to-purple-600' src="/av4.png" alt="Influencer 4" width={250} height={250} />
        </div>
      </div>

      
    </section>
    <div className='flex px-36 gap-20 mt-4 pb-10'>
        <p className='text-4xl'>Not Satisfied? <br/>Take Their Word for It!</p>
        <div className='flex gap-12'>
        <div className='flex'>

          <Image src="/Daily Dose Cafe.png" alt="" width={200} height={100} />
          {/* <p>Logopisum</p> */}
        </div>
        <div className='flex'>

          <Image src="/IMG-20240506-WA0005-removebg-preview.png" alt="" width={200} height={100}/>
          {/* <p>Logopisum</p> */}
        </div>
        <div className='flex'>

          <Image src="/m cyber academy logo.png" alt="" width={200} height={100}/>
          {/* <p>Logopisum</p> */}
        </div>
        <div className='flex'>

          <Image src="/Maharanacabs.jpg" alt="" width={200} height={100}/>
          {/* <p>Logopisum</p> */}
        </div>
         
        <div className='flex'>

          <Image src="/Rawat Catering.png" alt="" width={200} height={100}/>
          {/* <p>Logopisum</p> */}
        </div>

        <div className='flex'>

          <Image src="/Storybags.png" alt="" width={200} height={100}/>
          {/* <p>Logopisum</p> */}
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
