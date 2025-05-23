// In a function that can accept several types of inputs but you want to exclude specific types from being passed to it.

type Events = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Events, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
handleEvent('mousemove'); // OK
// handleEvent('scroll'); // Error: Argument of type '"scroll"' is not assignable to parameter of type 'ExcludeEvent'.