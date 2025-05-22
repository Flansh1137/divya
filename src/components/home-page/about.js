import Link from 'next/link';
import Image from 'next/image';

function About() {
    const subTitle = `text-[18px] leading-[32px] text-secondary uppercase`;
    const title = `lm:text-[42px] lm:leading-[50px] text-[32px] text-black mb-[35px] lg:max-w-[460px]`;
    const desc = `text-[14px] leading-[25px] text-secondary mb-[80px] lg:max-w-[490px]`;
    const aboutImage = `flex justify-end relative sm:before:bg-pattern-1 sm:before:absolute sm:before:h-[336px] sm:before:w-[336px] sm:before:top-[75px] sm:before:left-[85px]`;
    return (
        <div id="about" className="about-area md:pt-[150px] pt-[50px]">
            <div className="container max-lg:max-w-full fixed-lg:pr-0">
                <div className="lg:grid lg:grid-cols-2 max-md:flex max-md:flex-col-reverse">
                    <div className="about-content max-md:pt-10">
                        <span className={subTitle}>About</span>
                        <h2 className={title}>
                            Over 7 years of experience in the real estate market
                        </h2>
                        <h3 className="text-secondary text-2xl mb-12">
                            We know that good design means <br /> good business
                        </h3>
                        <p className={desc}>
                            Divya Sshakti Realtor stands out as a trusted name in Nallasopara and Umroli East. Our dedicated team has successfully helped over 100 satisfied customers find their perfect homes, thanks to our deep understanding of the local market and our commitment to exceptional service. We proudly collaborate with Shreenath Enterprises, a leading developer partner, to bring you a wide range of high-quality properties that meet your needs and exceed your expectations. Whether you're looking for your first home, an investment property, or a new place to settle down, we offer personalized solutions tailored to your unique requirements.
                        </p>
                        <Link href="/about">
                            <a className="boxed-btn text-[18px] leading-[30px]">
                                More About Us
                            </a>
                        </Link>
                    </div>
                    <div className={aboutImage}>
                        <Image
                            src="/images/about/1.jpg"
                            alt="Service Image"
                            width={390}
                            height={760}
                            quality={70}
                            layout="fixed"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
