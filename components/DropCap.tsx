// Opens a paragraph with its first letter set large between a pair of
// curly braces. The decorative version is hidden from screen readers, which
// get the plain letter instead so the first word still reads normally.
export default function DropCap({ children = "" }: { children?: string }) {
  const first = children.charAt(0);
  const rest = children.slice(1);

  return (
    <>
      <span className="drop-cap" aria-hidden="true">
        <span className="drop-cap__brace">{"{"}</span>
        <span className="drop-cap__letter">{first}</span>
        <span className="drop-cap__brace">{"}"}</span>
      </span>
      <span className="visually-hidden">{first}</span>
      {rest}
    </>
  );
}
