import { Input } from '@ui/Input';
import React from 'react';

function page() {
  return (
    <div className="p-4">
      <Input
        label="Outlined Success"
        intent="normal"
        size="md"
        error="This field is required"
        //   leftIcon={<YourLeftIcon />}
        //   rightIcon={<YourRightIcon />}
      />
    </div>
  );
}

export default page;
