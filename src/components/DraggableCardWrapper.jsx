import { forwardRef } from "react";

const DraggableCardWrapper = forwardRef(({ children, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default DraggableCardWrapper;
