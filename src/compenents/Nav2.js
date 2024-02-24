import React from 'react';
import Button from './Button';

function Nav2() {
  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col space-y-4">
        <Button>
          Add a child
        </Button>
        </div>
        <div>
        <Button>
          Child's statistics
        </Button>
        </div>
        <div>
        <Button>
          Child space
        </Button>
      </div>
    </div>
  );
}

export default Nav2;
