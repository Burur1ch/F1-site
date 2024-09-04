import { cn } from '@/lib/utils';
import React from 'react';
import { Cont } from './cont';
import { Category } from './Category';
import { Sorting } from './Sorting';
// import { Category } from '@prisma/client;

interface Props {
  categories: Category[];
  className?: string;
}

export const TopBar: React.FC<Props> = ({ categories, className }) => {
  return (
    <div className={cn('sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Cont className="flex items-center justify-between ">
        <Category items={categories} />
        <Sorting />
      </Cont>
    </div>
  );
};