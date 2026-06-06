'use client';
import { useState } from 'react';

import { DropdownOption, SharedDropdown } from '@/shared/ui/dropdown';

export default function Home() {
  const [selectedOption, setSelectedOption] =
    useState<DropdownOption['value']>('default');
  return (
    <main className="bg-accent">
      Hello World
      <SharedDropdown
        label="Options"
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
        placeholder="Sort by"
        value={selectedOption}
        onChange={(value) => {
          console.log(value);
          setSelectedOption(value as DropdownOption['value']);
        }}
      />
    </main>
  );
}
