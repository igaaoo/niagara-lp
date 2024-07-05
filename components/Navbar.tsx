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
import { Ellipsis, EllipsisVertical, Menu, X } from 'lucide-react';


export function Navbar() {
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
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${(isScrolled || isMobile) ? 'bg-black' : 'bg-transparent'}`}>
      <div className='px-4 md:px-8 flex  md:flex-row items-center justify-between pt-2 w-full relative'>

        <div className='flex justify-between w-full md:px-20 px-6'>
          <div className='flex items-center gap-2 py-2'>
            {/* <Image src="icon.png" width={35} height={35} alt='Niagara Studios' /> */}
            <h1 className={`text-2xl md:text-2xl font-josefin font-semibold text-white whitespace-nowrap flex gap-1 tracking-wide`}>
              NIAGARA STUDIOS
            </h1>
          </div>

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
                  <NavigationMenuTrigger className='hover:text-amber-400 text-base font-medium font-red-hat focus:text-amber-400'>
                    INDÚSTRIA
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className='bg-black bg-opacity-70 backdrop-blur text-white p-4 flex flex-col gap-4 align-middle'>
                    <Link href="/docs" legacyBehavior passHref >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Estúdios Virtuais
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Saúde
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Educação
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Treinamento
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Corporativo
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Indústria
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Varejo
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-10 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Segurança do Trabalho
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-10 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Eventos
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className='hover:text-amber-400 text-base font-medium font-red-hat focus:text-amber-400'>SOLUÇÕES</NavigationMenuTrigger>

                  <NavigationMenuContent className='bg-black bg-opacity-70 backdrop-blur text-white p-4 flex flex-col gap-4 align-middle'>
                    <Link href="/docs" legacyBehavior passHref >
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Realidade Virtual
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Realidade Aumentada
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Renders
                        </p>
                      </NavigationMenuLink>
                    </Link>

                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(),
                          'hover:bg-white hover:bg-opacity-5 w-full text-left'
                        )}>
                        <p className='text-start w-full'>
                          Estúdios Virtuais
                        </p>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <button className='hover:text-amber-400 text-base pr-5  font-medium font-red-hat focus:-text-amber-400'>CASES</button>
                <button className='hover:text-amber-400 text-base font-medium font-red-hat focus:-text-amber-400'>PARCEIROS</button>
              </NavigationMenuList>
            </NavigationMenu>
            <button className='bg-amber-600 hover:bg-amber-700 text-sm font-semibold font-red-hat px-4 py-0 grow ml-10 text-white'>
              FALE CONOSCO
            </button>
          </div>




          {/* Mobile Navigation */}
          {navbarOpen && (
            <div className='flex w-full flex-col gap-2 bg-white text-black items-center text-sm  absolute left-0 top-[55px]'>
              <Accordion type="multiple" className='w-full'>
                <AccordionItem value="item-1" >
                  <AccordionTrigger className='py-2 hover:no-underline hover:bg-black hover:text-white px-10 focus:bg-black focus:text-white'>
                    INDÚSTRIA
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className='py-2 hover:no-underline hover:bg-black hover:text-white px-10 focus:bg-black focus:text-white'>
                    SOLUÇÕES
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
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
