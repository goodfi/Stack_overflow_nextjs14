'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React from 'react';

const Filters = ({
  filters,
  otherClasses,
  containerClasses,
}: {
  filters: any;
  otherClasses: String;
  containerClasses: String;
}) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Select A Filter" />
          </div>
        </SelectTrigger>
        <SelectContent className="background-light800_darkgradient text-dark300_light900 flex items-center justify-start gap-4 border-none bg-transparent p-4 outline-none">
          <SelectGroup>
            {filters.map((item: any) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
