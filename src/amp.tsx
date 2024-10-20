export {};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "amp-sidebar": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          id?: string;
          layout?: string;
          side?: string;
        },
        HTMLElement
      >;
    }
  }
}
