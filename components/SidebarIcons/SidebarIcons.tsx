type Props = {
  index: number;
};

export default function SidebarIcons({ index }: Props) {
  const Icons = [
    <path
      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
      key={0}
    />,
    <path
      d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
      key={1}
    />,
    <path
      d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
      key={2}
    />,
    <>
      <path d="M18 3.00002C17.9999 2.82962 17.9563 2.66208 17.8733 2.51329C17.7902 2.36449 17.6706 2.23938 17.5256 2.14982C17.3806 2.06026 17.2152 2.00923 17.045 2.00156C16.8748 1.9939 16.7054 2.02985 16.553 2.10602L8.763 6.00002H5C4.20435 6.00002 3.44129 6.31609 2.87868 6.8787C2.31607 7.4413 2 8.20437 2 9.00002C2 9.79567 2.31607 10.5587 2.87868 11.1213C3.44129 11.6839 4.20435 12 5 12H5.28L7.051 17.316C7.11735 17.5152 7.24472 17.6885 7.41505 17.8113C7.58538 17.934 7.79004 18.0001 8 18H9C9.26522 18 9.51957 17.8947 9.70711 17.7071C9.89464 17.5196 10 17.2652 10 17V12.618L16.553 15.894C16.7054 15.9702 16.8748 16.0061 17.045 15.9985C17.2152 15.9908 17.3806 15.9398 17.5256 15.8502C17.6706 15.7607 17.7902 15.6355 17.8733 15.4867C17.9563 15.3379 17.9999 15.1704 18 15V3.00002Z" />
      <circle cx="3.75" cy="3.5625" r="2.3125" fill="#f65164" />
    </>,
  ];
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="h-7 w-7"
      fill="currentColor"
    >
      {Icons[index]}
    </svg>
  );
}
