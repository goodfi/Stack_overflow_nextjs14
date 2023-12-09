import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react';

const RenderTak = ({ name, counter }: { name: String; counter: String }) => {
  return (
    <>
      <Link
        href={`tags/_id`}
        className="flex items-center justify-between gap-2"
      >
        <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
          {name}
        </Badge>
        {counter && (
          <p className="small-medium text-dark500_light700">{counter}</p>
        )}
      </Link>
    </>
  );
};

export default RenderTak;
