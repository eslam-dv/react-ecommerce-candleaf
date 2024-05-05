const CartIcon = (props) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M0 1.5A.5.5 0 01.5 1H2a.5.5 0 01.485.379L2.89 3H14.5a.5.5 0 01.49.598l-1 5a.5.5 0 01-.465.401l-9.397.472L4.415 11H13a.5.5 0 010 1H4a.5.5 0 01-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 01-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 100 4 2 2 0 000-4zm7 0a2 2 0 100 4 2 2 0 000-4zm-7 1a1 1 0 110 2 1 1 0 010-2zm7 0a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  );
};

const UserIcon = (props) => {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32 0-97.2-78.8-176-176-176zM48.99 464c7.9-63.1 61.81-112 127.01-112h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128S294.69 0 224 0 96 57.31 96 128c0 70.7 57.3 128 128 128zm0-208c44.11 0 80 35.89 80 80s-35.89 80-80 80-80-35.9-80-80c0-44.11 35.9-80 80-80z" />
    </svg>
  );
};

const BurgerMenuIcon = (props) => {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const CloseIcon = (props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
};

const CircleCheckIcon = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <path d="M9.999 13.587L7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z" />
    </svg>
  );
};

const AngleDownIcon = (props) => {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
    </svg>
  );
};

const AngleUpIcon = (props) => {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </svg>
  );
};

function StarFillIcon(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288L8 2.223l1.847 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.565.565 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z" />
    </svg>
  );
}

export {
  CartIcon,
  UserIcon,
  BurgerMenuIcon,
  CloseIcon,
  CircleCheckIcon,
  AngleDownIcon,
  AngleUpIcon,
  StarFillIcon,
  StarIcon,
};
