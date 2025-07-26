export const isValueStringOrUndefined = (
  value: unknown,
): value is string | undefined => {
  return typeof value === 'string' || value === undefined;
};

export const addStylesToMovedCard = ({
  img,
  wrapper,
  title,
  price,
}: {
  img: HTMLElement;
  wrapper: HTMLElement;
  title: HTMLElement;
  price: HTMLElement;
}) => {
  console.log(title);

  img.classList.add('opacity-0', 'animate-fade-delay-14', 'animate-fill-both');
  wrapper.classList.add(
    'opacity-0',
    'animate-fade-delay-14',
    'animate-fill-both',
  );
  title.classList.add(
    'opacity-0',
    'animate-fade-up-2s-delay-03',
    'animate-fill-both',
  );
  price.classList.add(
    'opacity-0',
    'animate-fade-up-2s-delay-09',
    'animate-fill-both',
  );
};

export const removeStylesToMovedCard = ({
  img,
  wrapper,
  title,
  price,
}: {
  img: HTMLElement;
  wrapper: HTMLElement;
  title: HTMLElement;
  price: HTMLElement;
}) => {
  img.classList.remove(
    'opacity-0',
    'animate-fade-delay-14',
    'animate-fill-both',
  );
  wrapper.classList.remove(
    'opacity-0',
    'animate-fade-delay-14',
    'animate-fill-both',
  );
  title.classList.remove(
    'opacity-0',
    'animate-fade-up-2s-delay-03',
    'animate-fill-both',
  );
  price.classList.remove(
    'opacity-0',
    'animate-fade-up-2s-delay-09',
    'animate-fill-both',
  );
};
