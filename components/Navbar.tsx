'use client';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useLanguageContext } from '@/context/LanguageContext';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const industryItens = [
  { pt: 'Estúdios Virtuais', en: 'Virtual Studios', href: '/solutions/virtual-studios' },
  { pt: 'Saúde', en: 'Healthcare', href: '/industry/health' },
  { pt: 'Educação', en: 'Education', href: '/industry/education' },
  { pt: 'Treinamento', en: 'Training', href: '/industry/training' },
  { pt: 'Corporativo', en: 'Corporate', href: '/industry/corporate' },
  { pt: 'Indústria', en: 'Industry', href: '/industry/industry' },
  { pt: 'Varejo', en: 'Retail', href: '/industry/retail' },
  { pt: 'Segurança do Trabalho', en: 'Work Safety', href: '/industry/work-safety' },
  { pt: 'Eventos', en: 'Events', href: '/industry/events' },
];

const solutionsItens = [
  { pt: 'Realidade Virtual', en: 'Virtual Reality', href: '/solutions/vr' },
  { pt: 'Realidade Aumentada', en: 'Augmented Reality', href: '/solutions/ar' },
  { pt: 'Renderizações', en: 'Renders', href: '/solutions/renders' },
  { pt: 'Estúdios Virtuais', en: 'Virtual Studios', href: '/solutions/virtual-studios' },
];



export function Navbar() {
  const { language, setLanguage } = useLanguageContext();

  const pathname = usePathname();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (window != undefined && window.innerWidth < 768) {
      setIsMobile(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed  w-full z-50 transition-colors duration-300 ${(isScrolled || isMobile || pathname != "/") ? 'bg-black' : 'bg-transparent'}`}>
      <div className='px-4 md:px-8 flex  md:flex-row items-center justify-between pt-2 w-full relative'>

        <div className='flex justify-between w-full md:px-20 px-6'>
          <Link
            href='/'
            passHref
          >
            <div className='flex items-center gap-2 py-2'>
              {/* <Image src="icon.png" width={35} height={35} alt='Niagara Studios' /> */}
              <h1 className={`text-2xl md:text-2xl font-josefin text-white whitespace-nowrap flex gap-1 tracking-wide`}>
                NIAGARA STUDIOS
              </h1>
            </div>
          </Link>

          {/* Menu Button */}
          <div
            className="space-y-1 rounded flex flex-col justify-center md:hidden cursor-pointer"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {
              !navbarOpen ?
                <Menu className='text-white' />
                :
                <X className='text-white' />
            }
          </div>
        </div>

        {/* Large Navigation */}
        <div className='flex gap-2 py-2 items-center align-middle'>
          <div className='hidden  md:flex gap-2 whitespace-nowrap px-20 justify-between w-full'>
            <NavigationMenu className='text-white'>
              <NavigationMenuList >
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className='hover:text-amber-400 text-base font-medium font-red-hat focus:text-amber-400'
                    onClick={() => {
                      const element = document.getElementById('industry');
                      element?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {language === 'pt-br' ? 'INDÚSTRIA' : 'INDUSTRY'}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-black bg-opacity-70 backdrop-blur text-white p-4 flex flex-col gap-4 align-middle'>
                    {
                      language === 'pt-br' ?
                        industryItens.map((item, index) => (
                          <Link key={index} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(navigationMenuTriggerStyle(),
                                'hover:bg-white hover:bg-opacity-5 w-full text-left'
                              )}>
                              <p className='text-start w-full'>
                                {item.pt}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        ))
                        :
                        industryItens.map((item, index) => (
                          <Link key={index} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(navigationMenuTriggerStyle(),
                                'hover:bg-white hover:bg-opacity-5 w-full text-left'
                              )}>
                              <p className='text-start w-full'>
                                {item.en}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        ))
                    }
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className='hover:text-amber-400 text-base font-medium font-red-hat focus:text-amber-400'
                    onClick={() => {
                      const element = document.getElementById('solutions');
                      element?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {language === 'pt-br' ? 'SOLUÇÕES' : 'SOLUTIONS'}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-black bg-opacity-70 backdrop-blur text-white p-4 flex flex-col gap-4 align-middle'>
                    {
                      language === 'pt-br' ?
                        solutionsItens.map((item, index) => (
                          <Link key={index} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(navigationMenuTriggerStyle(),
                                'hover:bg-white hover:bg-opacity-5 w-full text-left'
                              )}>
                              <p className='text-start w-full'>
                                {item.pt}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        ))
                        :
                        solutionsItens.map((item, index) => (
                          <Link key={index} href={item.href} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(navigationMenuTriggerStyle(),
                                'hover:bg-white hover:bg-opacity-5 w-full text-left'
                              )}>
                              <p className='text-start w-full'>
                                {item.en}
                              </p>
                            </NavigationMenuLink>
                          </Link>
                        ))
                    }
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <button
                  className='hover:text-amber-400 text-base pr-5  font-medium font-red-hat focus:-text-amber-400'
                  onClick={() => {
                    const element = document.getElementById('cases');
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}
                >CASES
                </button>
                {/* <button className='hover:text-amber-400 text-base font-medium font-red-hat focus:-text-amber-400'>PARCEIROS</button> */}
              </NavigationMenuList>
            </NavigationMenu>
            <button className='bg-orange-600 hover:bg-orange-700 text-sm font-semibold font-red-hat px-4 py-0 grow ml-10 text-white'>
              FALE CONOSCO
            </button>

            <button className='size-7 rounded-full  overflow-clip  border border-2 self-center '
              onClick={() => setLanguage(language === 'en-us' ? 'pt-br' : 'en-us')}
            >
              {
                language === 'en-us' ?
                  <Image src='languages/en-us.png' width={40} height={40} alt='EN-US' className='object-fill w-full h-full' />
                  :
                  <Image src='languages/pt-br.png' width={40} height={40} alt='PT-BR' className='object-fill w-full h-full' />
              }
            </button>
          </div>




          {/* Mobile Navigation */}
          {navbarOpen && (
            <div className='flex w-full flex-col gap-2 bg-white text-black items-center text-sm absolute left-0 top-[55px]'>
              <Accordion type="multiple" className='w-full'>
                <AccordionItem value="item-1">
                  <AccordionTrigger className='py-2 hover:no-underline hover:bg-black hover:text-white px-10 focus:bg-black focus:text-white'>
                    INDÚSTRIA
                  </AccordionTrigger>
                  <AccordionContent>
                    {language === 'pt-br' ?
                      <div className='flex flex-col gap-2'>
                        {industryItens.map((item, index) => (
                          <Link key={index} href={item.href} legacyBehavior passHref>
                            <p className='text-start w-full hover:text-white hover:bg-black px-10 py-2 cursor-pointer'>
                              {item.pt}
                            </p>
                          </Link>
                        ))}
                      </div>
                      :
                      <div className='flex flex-col gap-2'>
                        {industryItens.map((item, index) => (
                          <Link key={index} href={item.href} legacyBehavior passHref >
                            <p className='text-start w-full hover:text-white hover:bg-black px-10 py-2 cursor-pointer'>
                              {item.en}
                            </p>
                          </Link>
                        ))}
                      </div>
                    }
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className='py-2 hover:no-underline hover:bg-black hover:text-white px-10 focus:bg-black focus:text-white'>
                    SOLUÇÕES
                  </AccordionTrigger>
                  <AccordionContent>
                    {language === 'pt-br' ?
                      solutionsItens.map((item, index) => (
                        <Link key={index} href={item.href} legacyBehavior passHref>
                          <p className='text-start w-full hover:text-white hover:bg-black px-10 py-2 cursor-pointer'>
                            {item.pt}
                          </p>
                        </Link>
                      ))
                      :
                      solutionsItens.map((item, index) => (
                        <Link key={index} href={item.href} legacyBehavior passHref>
                          <p className='text-start w-full hover:text-white hover:bg-black px-10 py-2 cursor-pointer'>
                            {item.en}
                          </p>
                        </Link>
                      ))
                    }
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          )}
        </div>
      </div>
    </nav >
  );
}
