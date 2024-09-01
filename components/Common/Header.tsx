import { cn } from '@/lib/utils';
import { Cont } from '@/components/Common/cont'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui';
import { ArrowRight, ShoppingBag, ShoppingCart, User } from 'lucide-react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className})=>{
    return (
        <div className={cn('border border-b', className)}>
            <Cont className='flex items-center justify-between py-8'>
            {/* left */}
            <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
            <div>
              <h1 className="text-2xl uppercase font-black">ShopGalaxy</h1>
              <p className="text-sm text-gray-400 leading-3">Детские мечты</p>
            </div>
          </div>
        </Link>

            {/* mid */}
            {/* rigth */}
<div className="flex items-center gap-3">
  <Button variant="outline" className='flex items-center gap-1'> 
    <User size={16}/>
    Login
    </Button>

      <div>
        <Button className='group relative'>
          <b> 777 Byn</b>
          <span className='h-full w-{1px} bg-white/30 mx-3'></span>
          <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
            <ShoppingCart className='h-4 w-4 relative' strokeWidth={2}></ShoppingCart>
            <b>7</b>
          </div>
          {/* problem!!!! */}
            <ArrowRight className='w-5 absolute rigth-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-10'></ArrowRight>
        </Button>
      </div>
</div>


            </Cont>
        </div>
    )
}
