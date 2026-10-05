import Image from 'next/image';
import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  align?: 'left' | 'center';
  heightClassName?: string;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  align = 'left',
  heightClassName = 'min-h-[430px] py-24 sm:min-h-[500px] sm:py-28',
}: PageHeroProps) => {
  const isCenter = align === 'center';

  return (
    <section className={`relative flex items-center overflow-hidden bg-[#1c1916] text-white ${heightClassName}`}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className={`object-cover ${isCenter ? 'object-center' : 'object-[72%_center]'}`}
          sizes="100vw"
          quality={92}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,14,12,0.86)_0%,rgba(16,14,12,0.68)_38%,rgba(16,14,12,0.25)_70%,rgba(16,14,12,0.12)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className={isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
          <div className={`mb-6 flex items-center gap-3 ${isCenter ? 'justify-center' : ''}`}>
            <span className="h-px w-12 bg-[#e1bd78]" />
            <span className="text-xs font-medium uppercase tracking-[0.32em] text-[#e1bd78]">
              {eyebrow}
            </span>
          </div>

          <h1 className={`font-serif text-[46px] font-normal leading-[0.96] text-white sm:text-[62px] lg:text-[78px] ${isCenter ? 'mx-auto max-w-[12ch]' : 'max-w-[12ch]'}`}>
            {title}
          </h1>

          <p className={`mt-6 text-sm leading-8 text-white/72 sm:text-lg ${isCenter ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
