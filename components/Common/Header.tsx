import { cn } from '@/lib/utils';
import { Cont } from '@/components/Common/cont'
import React from 'react';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className})=>{
    return (
        <div className={cn('border border-b', className)}>
            <Cont className='flex items-center justify-between py-8'></Cont>
        </div>
    )
}
